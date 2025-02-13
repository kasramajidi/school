import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function AcademicsHero() {
    return (
        <section className='relative rounded-xl lg:py-[150px] sm:py-[50px]  lg:px-[120px] sm:px-[30px] lg:gap-[50px] sm:gap-[10px] flex lg:flex-nowrap sm:flex-wrap items-center justify-center border-[2px] border-[#262626] border-solid bg-[#FFFFFF] shadow-[8px_8px_0px_1px_#1E1E1E]'>
            <Image src={"/img/AcademicsImg/AcademicsHero/Abstract Design.png"} width={200} height={200} alt='hero-section' className='absolute left-0 top-0 lg:w-[200px] lg:h-[200px] sm:w-[100px] sm:h-[100px]' />
            <div className='flex flex-col sm:text-center lg:text-start gap-[14px]'>
                <Link href={"/"}>
                    <button className='self-start text-[18px] text-center text-[#333333] font-medium rounded-lg border-[2px] border-[#262626] bg-white lg:py-[10px] sm:py-[8px] lg:px-[20px] sm:px-[16px] hover:bg-[#FF8D4D]'>Academics</button>                
                </Link>
                <h1 className='lg:text-[48px] sm:text-[28px] font-bold leading-[62px] text-[#1A1A1A]'>Nurturing Young Minds for Success</h1>
            </div>
            <p className='font-medium lg:text-[20px] sm:text-[16px] lg:text-start sm:text-center leading-[30px] text-[#333333] max-w-[750px]'>Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration.</p>
        </section>
    )
}
