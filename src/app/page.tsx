"use client"

import { useEffect, useState } from "react"

// ** Third Party
import { IoMdSettings } from "react-icons/io"

// ** Components
import Timer from "@/components/Timer"
import TimerSettingList from "@/components/timer-setting/TimerSettingList"
import TimerSettingModal from "@/components/timer-setting/TimerSettingModal"
import { useTimerSetting } from "@/context/TimerSettingContext"

export default function Home() {
  const [isOpenModal, setisOpenModal] = useState<boolean>(false)

  const { timerSetting, setTimerSetting } = useTimerSetting()

  return (
    <main className="pt-40 flex justify-between gap-10 max-w-4xl mx-auto">
      <div className="w-full bg-white rounded-3xl p-14 flex flex-col items-center">
        <Timer timerSetting={timerSetting} setTimerSetting={setTimerSetting} />

        <TimerSettingList />
      </div>
      <TimerSettingModal
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
