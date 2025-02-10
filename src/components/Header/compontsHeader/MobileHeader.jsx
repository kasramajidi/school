"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdClose } from "react-icons/io";
export default function MobileHeader() {

  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(null)

  const munuItem = [
    {name: "Home", link: "/"},
    {name: "AboutUs", link: "/pages/AboutUs"},
    {name: "Academics", link: "/pages/Academics"},
    {name: "Admissions", link: "/pages/Admissions"},
    {name: "StudentLife", link: "/pages/StudentLife"},
    {name: "Contact", link: "/pages/Contact"},
  ]

  return (
    <div className='py-[32px] px-[24px] bg-[#FFEFE5] border-l-[2px] border-r-[2px] border-[#262626] rounded-r-lg lg:hidden sm:block cursor-pointer'
      onClick={() => setIsOpen(!isOpen)}
    >
      <Image src={"/img/header/Icon.png"} width={28} height={28} alt='mobileResponsive' className='sm:w-[40px] sm:h-[40px]' />
      {/* open menu and click navbar */}
      {isOpen && (
        <div className="fixed flex flex-col gap-[20px] top-0 right-0 w-1/2 h-full bg-gray-100 shadow-lg transition-transform transform px-[15px] py-[20px]">
          <div className='flex items-center justify-between text-2xl'>
            <IoMdClose className='hover:text-red-700' />
            <Link href={"/"}>
              <span className='hover:text-red-700'>menu</span>
            </Link>
          </div>
          <div className='px-[20px]'>
            <ul className='flex flex-col items-center justify-between gap-[25px] text-white'>
             {
              munuItem.map((item) => (
                <Link href={item.link} key={item.name}>
                <li
                  className={`px-[40px] py-[10px] rounded-xl transition duration-300 cursor-pointer text-[17px] ${
                    activeItem === item.name
                      ? "bg-[#FF9F74] text-white"
                      : "bg-[#ffb980] text-black hover:bg-[#ffbd80] hover:text-black"
                  }`}
                  onClick={() => setActiveItem(item.name)}
                >
                  {item.name}
                </li>
              </Link>
              ))
             }
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
