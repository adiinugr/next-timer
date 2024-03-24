"use client"

import React, { useState } from "react"
import Pie from "./Pie"
import { HiOutlineSwitchVertical } from "react-icons/hi"

import {
  IoIosPause,
  IoIosPlay,
  IoIosRefresh,
  IoIosSquare
} from "react-icons/io"

type Props = {
  time: number
  setTime: (value: number) => void
}

const PlayPauseButton = ({
  stopwatchState,
  handlePlay,
  handlePause
}: {
  stopwatchState: string
  handlePlay: () => void
  handlePause: () => void
}) => {
  if (stopwatchState === "play") {
    return (
      <button
        onClick={handlePause}
        className="w-full h-full flex items-center justify-center gap-1"
      >
        <IoIosPause size={20} />
        Pause
      </button>
    )
  }

  return (
    <button
      onClick={handlePlay}
      className="w-full h-full flex items-center justify-center gap-1"
    >
      <IoIosPlay size={20} />
      Start
    </button>
  )
}

const Timer = ({ time, setTime }: Props) => {
  const [isMinutes, setIsMinutes] = useState<boolean>(false)
  const [stopwatchState, setStopWatchState] = useState<string>("stop")

  const [currentTime, setCurrentTime] = useState<number>(10)

  const handlePlay = () => {
    setStopWatchState("play")
  }

  const handlePause = () => {
    setStopWatchState("pause")
  }

  const handleStop = () => {
    setStopWatchState("stop")
    setCurrentTime(time)
  }

  const handleReset = () => {
    setStopWatchState("stop")
    setCurrentTime(0)
    setTime(0)
  }

  return (
    <div className="w-[340px] aspect-square flex flex-col items-center isolate">
      <button
        onClick={() => setIsMinutes(!isMinutes)}
        className="w-32 flex items-center justify-center gap-2 bg-tm-red rounded-full px-4 py-2 text-white mb-14"
      >
        <HiOutlineSwitchVertical size={20} />
        <span>{isMinutes ? "Minutes" : "Seconds"}</span>
      </button>
      <div className="clock z-[-1]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="number-hours">
            <span style={{ transform: `rotate(calc(${(i + 1) * 30}deg))` }}>
              <p style={{ transform: `rotate(calc(${(i + 1) * -30}deg))` }}>
                {(i + 1) * 5}
              </p>
            </span>
          </div>
        ))}
        <div className="diallines">
          {Array.from({ length: 60 }).map((_, i) => (
            <span
              key={i}
              style={{ transform: `rotate(calc(${(i + 1) * 6}deg))` }}
            >
              <p></p>
            </span>
          ))}
        </div>

        <div className="circle">
          <span>
            <Pie
              time={time}
              setTime={setTime}
              currentTime={currentTime}
              setCurrentTime={setCurrentTime}
              stopwatchState={stopwatchState}
              setStopWatchState={setStopWatchState}
              isMinutes={isMinutes}
              color="#F25D52"
            />
          </span>
        </div>
      </div>

      <div className="mt-14 flex items-center justify-center gap-10 text-white">
        <div className="w-32 px-4 py-2 rounded-md bg-tm-green">
          <PlayPauseButton
            stopwatchState={stopwatchState}
            handlePlay={handlePlay}
            handlePause={handlePause}
          />
        </div>
        <button
          onClick={handleStop}
          className="w-32 bg-tm-red flex items-center gap-1 justify-center px-4 py-2 rounded-md"
        >
          <IoIosSquare size={20} />
          Stop
        </button>
        <button
          onClick={handleReset}
          className="w-32 bg-tm-violet flex items-center gap-1 justify-center px-4 py-2 rounded-md"
        >
          <IoIosRefresh size={20} />
          Reset
        </button>
      </div>
    </div>
  )
}

export default Timer
