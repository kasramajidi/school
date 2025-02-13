import React from 'react'
import Image from 'next/image'
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
export default function RoomsLibrary() {
    return (
        <div className='h-[414px] lg:block sm:hidden bg-white rounded-xl border-[2px] border-[#262626] border-solid shadow-[6px_6px_0px_2px_#1E1E1E]  px-[50px] pb-[50px] gap-[40px]'>
            <div className='flex items-center justify-between gap-[40px] -mt-[120px]'>
                <Image src={"/img/AcademicsImg/Rooms/Image4.png"} width={344} height={304} alt='rom-img' className='rounded-xl border-solid border-[2px] border-[#262626]' />
                <Image src={"/img/AcademicsImg/Rooms/Image5.png"} width={344} height={304} alt='rom-img' className='rounded-xl border-solid border-[2px] border-[#262626]' />
                <Image src={"/img/AcademicsImg/Rooms/Image6.png"} width={344} height={304} alt='rom-img' className='rounded-xl border-solid border-[2px] border-[#262626]' />
                <Image src={"/img/AcademicsImg/Rooms/Image7.png"} width={344} height={304} alt='rom-img' className='rounded-xl border-solid border-[2px] border-[#262626]' />
            </div>
            <div className='flex items-center justify-between pt-[41px]'>
                <h2 className='font-bold text-[40px] text-[#1A1A1A] font-[Raleway]'>Library</h2>
                <div className='flex items-center gap-[20px]'>
                    <button className='rounded-lg border-[2px] border-[#333333] p-[14px]'>
                        <GrLinkPrevious />
                    </button>
                    <button className='rounded-lg border-[2px] border-[#333333] p-[14px]'>
                        <GrLinkNext />
                    </button>
                </div>
            </div>
            <p className='font-medium text-[22px] leading-[33px] text-[#4C4C4D] mt-[40px]'>Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.</p>
        </div>
    )
}