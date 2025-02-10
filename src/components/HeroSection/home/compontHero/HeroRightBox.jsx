import React from 'react'
import HeroSubBox from './HeroSubBox'
import HeroSubBoxRes from './HeroSubBoxRes'
export default function HeroRightBox() {
    return (
        <div className='flex flex-col items-start justify-between gap-[20px] lg:max-w-[760px] sm:max-w-[350px] sm:text-center lg:text-start'>
            <span className='border-b-[2px] border-[#262626] border-solid text-[#262626] font-medium lg:text-[22px] sm:text-[16px] pb-[6px] sm:ml-[50px] lg:ml-0'>Welcome to Little Learners Academy</span>
            <h1 className='lg:text-[54px] sm:text-[30px] font-extrabold lg:leading-[70px] sm:leading-[39px] font-[Raleway]'>Where Young Minds Blossom and <span className='text-[#FF8D4D]'>Dreams Take Flight.</span></h1>
            <p className='text-[20px] leading-[30px] font-medium text-[#4C4C4D]'>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
            <HeroSubBox/>
            <HeroSubBoxRes/>
        </div>
    )
}
