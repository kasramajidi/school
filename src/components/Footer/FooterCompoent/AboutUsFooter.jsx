import React from 'react'
import Link from 'next/link'
export default function AboutUsFooter() {
    return (
        <div className='flex flex-col gap-[24px] sm:order-3 lg:pt-[0px] sm:pt-[50px]'>
            <Link href={"/pages/AboutUs"}>
                <span className='text-[20px] font-semibold text-[#262626] hover:text-red-700'>About Us</span>
            </Link>
            <ul className='flex flex-col gap-[24px] lg:text-[20px] sm:text-[13px] font-medium text-[#333333 ]'>
                <Link href={"/pages/AboutUs"}>
                    <li className='hover:text-red-700'>Our Mission</li>
                </Link>
                <Link href={"/pages/AboutUs"}>
                    <li className='hover:text-red-700'>Our Vission</li>
                </Link>
                <Link href={"/pages/AboutUs"}>
                    <li className='hover:text-red-700'>Awards</li>
                </Link>
                <Link href={"/pages/AboutUs"}>
                    <li className='hover:text-red-700'>History</li>
                </Link>
                <Link href={"/pages/AboutUs"}>
                    <li className='hover:text-red-700'>Teachers</li>
                </Link>
            </ul>
        </div>
    )
}
