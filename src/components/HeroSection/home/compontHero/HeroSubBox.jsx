import React from 'react'

export default function HeroSubBox() {
  return (
    <div className='lg:flex sm:hidden items-center justify-between rounded-xl py-[24px] px-[50px]  w-[100%] bg-[#FFEFE5] border-[2px] border-[#262626] shadow-[8px_8px_0px_1px_#FFBE99]'>
        <div className='flex flex-col'>
            <span className='text-[44px] text-[#262626] font-extrabold'>+7000</span>
            <span className='text-[18px] text-[#262626] font-medium'>Students Passed Out</span>
        </div>
        <div className='flex flex-col'>
            <span className='text-[44px] text-[#262626] font-extrabold'>+37</span>
            <span className='text-[18px] text-[#262626] font-medium'>Awards & Recognitions</span>
        </div>
        <div className='flex flex-col'>
            <span className='text-[44px] text-[#262626] font-extrabold'>+15</span>
            <span className='text-[18px] text-[#262626] font-medium'>Experience Educators</span>
        </div>
    </div>
  )
}
