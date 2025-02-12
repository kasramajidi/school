import React from 'react'
import Link from 'next/link'
export default function AcademicsFeaturesTop() {
    return (
        <div className='flex flex-col items-center justify-center gap-[20px]'>
            <Link href={"/"}>
                <button type='button' className='rounded-sm border-[2px] border-black border-solid bg-white py-[10px] px-[20px] lg:text-[18px] sm:text-[14px] font-medium text-[#333333]'>Our Features</button>
            </Link>
            <h2 className='font-[Raleway] lg:text-[58px] sm:text-[30px] text-center font-bold text-[#1A1A1A]'>Our Special Features</h2>
            <p className='max-w-[970px] text-center font-medium lg:text-[20px] sm:text-[16px] text-[#333333]'>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
        </div>
    )
}
