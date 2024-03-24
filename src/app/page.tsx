"use client"

import { useState } from "react"

// ** Third Party
import { IoMdSettings } from "react-icons/io"

// ** Components
import Timer from "@/components/Timer"
import TimerSettingList from "@/components/timer-setting/TimerSettingList"
import TimerSettingDialog from "@/components/timer-setting/TimerSettingModal"

export default function Home() {
  const [time, setTime] = useState<number>(10)
  const [isOpenModal, setisOpenModal] = useState<boolean>(false)

  return (
    <main className="pt-40 flex justify-between gap-10 max-w-4xl mx-auto">
      <div className="w-full bg-white rounded-3xl p-14 flex flex-col items-center">
        <Timer time={time} setTime={setTime} />

        <TimerSettingList />
      </div>
      <TimerSettingDialog
        isOpen={isOpenModal}
        closeModal={() => setisOpenModal(false)}
      />
      <button
        onClick={() => setisOpenModal(!isOpenModal)}
        className="fixed right-10 bottom-10 bg-white rounded-full p-2"
      >
        <IoMdSettings size={30} className="text-tm-red" />
      </button>
    </main>
  )
}
