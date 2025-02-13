import React from 'react'
import Link from 'next/link'
export default function RoomsTop() {
    return (
        <div className='flex flex-col items-center justify-center gap-[20px]'>
            <Link href={"/"}>
                <button type='button' className='rounded-sm border-[2px] border-black border-solid bg-white py-[10px] px-[20px] lg:text-[18px] sm:text-[14px] font-medium text-[#333333]'>Our Gallery</button>
            </Link>
            <h2 className='font-[Raleway] lg:text-[58px] sm:text-[30px] text-center font-bold text-[#1A1A1A]'>Our Rooms Gallery</h2>
            <p className='max-w-[970px] text-center font-medium lg:text-[20px] sm:text-[16px] text-[#333333]'>Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.</p>
        </div>
    )
}
