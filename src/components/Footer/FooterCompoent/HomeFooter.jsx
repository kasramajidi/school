import React from 'react'
import Link from 'next/link'
export default function HomeFooter() {
  return (
    <div className='flex flex-col gap-[24px] sm:order-1'>
        <Link href={"/"}>
            <span className='text-[20px] font-semibold text-[#262626] hover:text-red-700'>Home</span>
        </Link>
        <ul className='flex flex-col gap-[24px] lg:text-[20px] sm:text-[13px] font-medium text-[#333333]'>
            <Link href={"/"}>
                <li className='hover:text-red-700'>Features</li>
            </Link>
            <Link href={"/"}>
                <li className='hover:text-red-700'>OurTestimonials</li>
            </Link>
            <Link href={"/"}>
                <li className='hover:text-red-700'>FAQ</li>
            </Link>
        </ul>
    </div>
  )
}
