import React from 'react'
import Link from 'next/link'
export default function AcademicsFooter() {
    return (
        <div className='flex flex-col gap-[24px] pr-[40px] sm:order-2'>
            <Link href={"/pages/Academics"}>
                <span className='text-[20px] font-semibold text-[#262626] hover:text-red-700'>Academics</span>
            </Link>
            <ul className='flex flex-col gap-[24px] lg:text-[20px] sm:text-[13px] font-medium text-[#333333 ]'>
                <Link href={"/pages/Academics"}>
                    <li className='hover:text-red-700'>SpecialFeatures</li>
                </Link>
                <Link href={"/pages/Academics"}>
                    <li className='hover:text-red-700'>Gallery</li>
                </Link>
            </ul>
        </div>
    )
}
