import React from 'react'
import Link from 'next/link';

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function FooterBotton() {
  return (
    <div className='flex flex-col border-t border-[#262626] border-solid flex-wrap'>
      <div className='flex items-center lg:justify-between sm:justify-center lg:py-[30px] sm:py-[15px] border-b border-[#262626] border-solid flex-wrap'>
        <div className='flex items-center lg:gap-[16px] sm:gap-[6px]'>
          <span className='font-medium lg:text-[16px] sm:text-[12px] text-[#333333] border-r-[2px] border-solid border-[#262626] lg:pr-[16px] sm:pr-[6px]'>Terms of Service</span>
          <span className='font-medium lg:text-[16px] sm:text-[12px] text-[#333333] border-r-[2px] border-solid border-[#262626] lg:pr-[16px] sm:pr-[6px]'>Privacy Policy</span>
          <span className='font-medium lg:text-[16px] sm:text-[12px] text-[#333333]'>Cookie Policy</span>
        </div>
        <div className='flex items-center  lg:pt-[0px] sm:py-[20px] lg:gap-[14px] sm:gap-[10px]'>
          <Link href={"/"}>
            <div className='bg-[#FFDECC] border-[2px] border-[#262626] border-solid p-[16px] rounded-lg hover:bg-red-300'>
              <FaFacebook />
            </div>
          </Link>
          <Link href={"/"}>
            <div className='bg-[#FFDECC] border-[2px] border-[#262626] border-solid p-[16px] rounded-lg hover:bg-red-300'>
              <FaTwitter />
            </div>
          </Link>
          <Link href={"/"}>
            <div className='bg-[#FFDECC] border-[2px] border-[#262626] border-solid p-[16px] rounded-lg hover:bg-red-300'>
              <FaLinkedin />
            </div>
          </Link>
        </div>
      </div>
      <span className='text-[#656567] lg:text-[18px] sm:text-[12px] text-center font-medium pt-[30px]'>Copyright © [2023] Little Learners Academy. All rights reserved.</span>
    </div>
  )
}
