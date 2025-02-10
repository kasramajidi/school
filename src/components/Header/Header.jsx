import React from 'react'
import SectionTop from './compontsHeader/SectionTop'
import SectionBottom from './compontsHeader/SectionBottom'
export default function Header() {
  return (
    <header className='lg:px-[50px] lg:pt-[18px] sm:px-[16px] sm:pt-[40px]'>    
        <SectionTop/>
        <SectionBottom/>
    </header>
  )
}
