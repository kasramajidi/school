import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function NavLogo() {
  return (
    <div className='bg-[#FF8D4D] sm:py-[33px] lg:py-[23px] lg:px-[24px] sm:px-[15px] border-r-[2px] border-[#262626] border-solid border-l-[2px] rounded-l-lg'>
        <Link href={"/"}>
            <Image src={"/img/header/Logo.png"} width={182} height={40} alt='logo'/>        
        </Link>
    </div>
  )
}
