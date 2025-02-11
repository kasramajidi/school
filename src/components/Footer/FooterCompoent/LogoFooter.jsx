import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";


export default function LogoFooter() {
    return (
        <div className='flex flex-col gap-[50px]'>
            <div className='flex flex-col justify-between gap-[20px]'>
                <Image src={"/img/Footer/Logo.png"} width={288} height={50} alt='logo-foter' />
                <p className='font-medium text-[20px] leading-[30px] text-[#4C4C4D] max-w-[500px]'>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
            </div>
            <div className='flex flex-col justify-between gap-[24px]'>
                <Link href={"/"}>
                    <div className='flex items-center gap-[10px]'>
                        <div className='bg-[#FFF5F0] text-black p-[8px] border-[2px] border-solid border-[#262626] rounded-md'>
                            <MdEmail />
                        </div>
                        <span className='text-[20px] text-[#262626] font-medium'>hello@littlelearners.com</span>
                    </div>
                </Link>
                <Link href={"/"}>
                    <div className='flex items-center gap-[10px]'>
                        <div className='bg-[#FFF5F0] text-black p-[8px] border-[2px] border-solid border-[#262626] rounded-md'>
                            <MdCall />
                        </div>
                        <span className='text-[20px] text-[#262626] font-medium'>+91 91813 23 2309</span>
                    </div>
                </Link>
                <Link href={"/"}>
                    <div className='flex items-center gap-[10px]'>
                        <div className='bg-[#FFF5F0] text-black p-[8px] border-[2px] border-solid border-[#262626] rounded-md'>
                            <FaMapMarkerAlt />
                        </div>
                        <span className='text-[20px] text-[#262626] font-medium'>Somewhere in the World</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
