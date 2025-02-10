import React from 'react'
import Link from 'next/link'
import { GoArrowRight } from "react-icons/go";

export default function SectionTop() {
    return (
        <div className='bg-[url(../../public/img/header/Frame.png)] lg:text-[20px] mb-[28px] pt-[14px] pb-[14px] sm:text-sm'>
            <Link href={"/"} className='flex items-center justify-center gap-[14px]'>
                <span>
                    Admission is Open, Grab your seat now
                </span>
                <GoArrowRight/>
            </Link>
        </div>
    )
}
