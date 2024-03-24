import React from "react"

// ** Third Party
import { IoMdCreate, IoMdTrash } from "react-icons/io"

type Props = {}

interface TimerList {
  id: number
  name: string
  timeType: string
  value: number
  sound: string
  color: string
}

const timerListData: TimerList[] = [
  {
    id: 1,
    name: "Brainstorming",
    timeType: "second",
    value: 10,
    sound: "/sound/case-closed.mp3",
    color: "#F25D52"
  },
  {
    id: 2,
    name: "Exercise",
    timeType: "minute",
    value: 3,
    sound: "/sound/dell.mp3",
    color: "#3BB273"
  }
]

const TimerSettingList = (props: Props) => {
  return (
    <div className="mt-20 self-start">
      <h2 className="text-xl font-medium mb-4">Your Preset</h2>
      <div className="grid gap-3">
        {timerListData.length > 0 ? (
          timerListData.map((timer) => (
            <div
              key={timer.id}
              style={{ borderColor: timer.color }}
              className={`flex items-center justify-between gap-8 border-l-4 bg-gray-50 px-4 py-2`}
            >
              <div>
                <h3 className="font-medium">{timer.name}</h3>
                <p className="text-sm text-gray-600">
                  {timer.value} {timer.timeType === "second" ? "sec" : "min"}
                </p>
              </div>
              <div>
                <button className="text-tm-violet rounded-full p-2">
                  <IoMdCreate size={22} />
                </button>
                <button className="text-tm-red rounded-full p-2">
                  <IoMdTrash size={22} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            There is no preset available!{" "}
            <button className="text-blue-900 hover:text-blue-800 hover:underline hover:underline-offset-2">
              Create One
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TimerSettingList
