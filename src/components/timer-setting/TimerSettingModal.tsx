"use client"

import { Fragment, useEffect, useState } from "react"

// ** Third Party
import { Dialog, Transition } from "@headlessui/react"
import { useForm, SubmitHandler } from "react-hook-form"

// ** Components
import ColorRadioGroup from "./ColorRadioGroup"
import TimeTypeSwitch from "./TimeTypeSwitch"
import { IoMdColorPalette, IoMdTime } from "react-icons/io"

type Props = {
  isOpen: boolean
  closeModal: () => void
}

interface IFormInput {
  name: string
  value: number
  sound: string
}

const colors = [
  {
    value: "#F25D52"
  },
  {
    value: "#3BB273"
  },
  {
    value: "#F7EC59"
  },
  {
    value: "#231942"
  }
]

const TimerSettingModal = ({ isOpen, closeModal }: Props) => {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [isSecond, setIsSecond] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>()

  useEffect(() => {
    setSelectedColor(colors[0])
  }, [])

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const time = {
      name: data.name,
      timeType: isSecond ? "second" : "minute",
      value: data.value,
      sound: `/sound/${data.sound}.mp3`,
      color: selectedColor.value
    }

    console.log(time)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add Your Preset
                </Dialog.Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-4">
                    <div className="mb-4">
                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight text-sm focus:outline focus:outline-tm-green"
                        id="name"
                        type="text"
                        placeholder="Name"
                        {...register("name", {
                          required: true
                        })}
                      />
                      {errors.name && (
                        <p role="alert" className="text-red-700 text-sm mt-1">
                          Name is required
                        </p>
                      )}
                    </div>
                    <div className="mb-4">
                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight text-sm focus:outline focus:outline-tm-green"
                        id="value"
                        type="number"
                        placeholder="Value"
                        {...register("value", {
                          required: true,
                          min: 1,
                          max: 60
                        })}
                      />
                      {errors.value && (
                        <p role="alert" className="text-red-700 text-sm mt-1">
                          Value is required and should between 1 and 60
                        </p>
                      )}
                    </div>
                    <div className="mb-4">
                      <select
                        {...register("sound", {
                          required: true
                        })}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight text-sm focus:outline focus:outline-tm-green"
                      >
                        <option value="">-- Select Sound --</option>
                        <option value="case-closed">Case Closed</option>
                        <option value="dell">Dell</option>
                      </select>
                      {errors.sound && (
                        <p role="alert" className="text-red-700 text-sm mt-1">
                          Sound is required
                        </p>
                      )}
                    </div>
                    <div className="mb-4 flex items-center gap-8">
                      <IoMdColorPalette size={24} className="text-red-400" />
                      <ColorRadioGroup
                        colors={colors}
                        selected={selectedColor}
                        setSelected={setSelectedColor}
                      />
                    </div>
                    <div className="mb-4 flex items-center gap-8">
                      <IoMdTime size={24} className="text-red-400" />
                      <TimeTypeSwitch
                        isSecond={isSecond}
                        setIsSecond={setIsSecond}
                      />
                    </div>
                  </div>

                  <div className="mt-8 justify-end flex gap-6">
                    <button onClick={closeModal} className="text-gray-600">
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-tm-green px-4 py-2 text-white rounded-md"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default TimerSettingModal
