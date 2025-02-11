import React from 'react'
import Link from 'next/link'
export default function ContactUsFooter() {
    return (
        <div className='flex flex-col gap-[24px] sm:order-4'>
            <Link href={"/pages/Contact"}>
                <span className='text-[20px] font-semibold text-[#262626] hover:text-red-700'>Contact Us</span>
            </Link>
            <ul className='flex flex-col gap-[24px] lg:text-[20px] sm:text-[13px] font-medium text-[#333333 ]'>
                <Link href={"/pages/Contact"}>
                    <li className='hover:text-red-700'>Information</li>
                </Link>
                <Link href={"/pages/Contact"}>
                    <li className='hover:text-red-700'>Map&Direction</li>
                </Link>
            </ul>
        </div>
    )
}
