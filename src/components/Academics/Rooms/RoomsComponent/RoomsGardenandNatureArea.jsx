import React from 'react'
import Image from 'next/image'
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
export default function RoomsGardenandNatureArea() {
    return (
        <div className='h-[414px] lg:block sm:hidden bg-white rounded-xl border-[2px] border-[#262626] border-solid shadow-[6px_6px_0px_2px_#1E1E1E]  px-[50px] pb-[50px] gap-[40px]'>
            <div className='flex items-center justify-between gap-[40px] -mt-[120px]'>
                <Image src={"/img/AcademicsImg/Rooms/Image16.png"} width={344} height={304} alt='rom-img' className='rounded-xl border-solid border-[2px] border-[#262626]' />
                <Image src={"/img/AcademicsImg/Rooms/Image17.png"} width={344} height={304} alt='rom-img' className='rounded-xl border-solid border-[2px] border-[#262626]' />
                <Image src={"/img/AcademicsImg/Rooms/Image18.png"} width={344} height={304} alt='rom-img' className='rounded-xl border-solid border-[2px] border-[#262626]' />
                <Image src={"/img/AcademicsImg/Rooms/Image19.png"} width={344} height={304} alt='rom-img' className='rounded-xl border-solid border-[2px] border-[#262626]' />
            </div>
            <div className='flex items-center justify-between pt-[41px]'>
                <h2 className='font-bold text-[40px] text-[#1A1A1A] font-[Raleway]'>Garden and Nature Area</h2>
                <div className='flex items-center gap-[20px]'>
                    <button className='rounded-lg border-[2px] border-[#333333] p-[14px]'>
                        <GrLinkPrevious />
                    </button>
                    <button className='rounded-lg border-[2px] border-[#333333] p-[14px]'>
                        <GrLinkNext />
                    </button>
                </div>
            </div>
            <p className='font-medium text-[22px] leading-[33px] text-[#4C4C4D] mt-[40px]'>ur garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.</p>
        </div>
    )
}