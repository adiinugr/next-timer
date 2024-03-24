"use client"

import React from "react"

// ** Next Import
import Link from "next/link"

// ** Third Party Import
import { MdMenu } from "react-icons/md"

// ** Custom Component
import Sidebar from "./Sidebar"

// ** Data
import menuData from "@/data/menu"

// ** Context
import { useSidebar } from "@/context/SidebarContext"

type Props = {}

function Header({}: Props) {
  const { setIsOpenSidebar } = useSidebar()

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white border-b">
      <nav className="mx-auto flex max-w-6xl items-center justify-between py-6 lg:px-8">
        <div className="text-2xl grid place-content-center font-medium">
          Timer
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-8">
            {menuData.map((data) => (
              <li key={data.id}>
                <Link href={data.link} scroll={false}>
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button className="lg:hidden" onClick={() => setIsOpenSidebar(true)}>
          <MdMenu size={32} />
        </button>
      </nav>

      <Sidebar />
    </header>
  )
}

export default Header
