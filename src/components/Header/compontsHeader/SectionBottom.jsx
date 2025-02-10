import React from 'react'
import NavLogo from './NavLogo'
import Navbar from './Navbar'
import MobileHeader from './MobileHeader'
export default function SectionBottom() {
  return (
    <nav className='flex items-center justify-between rounded-xl bg-[#FFFFFF] border-[2px] border-solid border-[#262626]'>
        <NavLogo/>
        <Navbar/>
        <MobileHeader/>
    </nav>
  )
}

