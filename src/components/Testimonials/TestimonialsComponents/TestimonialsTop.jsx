import React from 'react'
import Link from 'next/link'
export default function TestimonialsTop() {
    return (
        <div className='flex flex-col items-center justify-center gap-[20px]'>
            <Link href={"/"}>
            <button type='button' className='rounded-sm border-[2px] border-black border-solid bg-white py-[10px] px-[20px] lg:text-[18px] sm:text-[14px] font-medium text-[#333333]'>Their Happy Words 🤗</button>            
            </Link>
            <h2 className='font-[Raleway] lg:text-[58px] sm:text-[38px] font-bold text-[#1A1A1A]'>Our Testimonials</h2>
            <p className='max-w-[980px] text-center font-medium lg:text-[20px] sm:text-[16px] text-[#333333]'>Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.</p>
        </div>
    )
}
