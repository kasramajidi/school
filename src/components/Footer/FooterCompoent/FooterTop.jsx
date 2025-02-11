import React from 'react'
import LogoFooter from './LogoFooter'
import MenuFooter from './MenuFooter'
export default function FooterTop() {
  return (
    <div className='flex items-start justify-between gap-[80px] flex-wrap'>
        <LogoFooter/>
        <MenuFooter/>
    </div>
  )
}
