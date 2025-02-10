"use client"
import React, { useState } from 'react'
import Link from 'next/link'
export default function Navbar() {
    const [activeItem, setActiveItem] = useState(null)

    const menuItem = [
        {name: "Home", link: "/"},
        {name: "AboutUs", link: "/pages/AboutUs"},
        {name: "Academics", link: "/pages/Academics"},
        {name: "Admissions", link: "/pages/Admissions"},
        {name: "StudentLife", link: "/pages/StudentLife"},
        {name: "Contact", link: "/pages/Contact"},
    ]
    return (
        <div className='lg:block sm:hidden'>
            <ul className='flex items-center text-[20px] font-medium'>
                {
                    menuItem.map((item) => (
                        <Link href={item.link} key={item.name}>
                            <li className={`py-[28px] px-[34px] border-r-[1px] border-l-[1.5px] border-[#262626] ${activeItem === item.name ? "bg-[#FFEFE5]" : "bg-white"
                                }`}
                                onClick={() => setActiveItem(item.name)}
                            >
                                {item.name}
                            </li>
                        </Link>
                    ))
                }
                <Link href={"/"}>
                    <li className={`py-[28px] px-[34px] border-r-[1px] border-l-[1px] border-[#262626] bg-[#FFAE80] rounded-r-lg ${activeItem === "contact" ? "bg-[#FFEFE5]" : "bg-[#FFAE80]"
                        }`}
                        onClick={() => setActiveItem("contact")}
                    >Contact</li>
                </Link>
            </ul>
        </div>
    )
}
