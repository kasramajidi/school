import React from 'react'
import NavigateTop from './NavigateComponet/NavigateTop'
import NavigateBottom from './NavigateComponet/NavigateBottom'
export default function Navigate() {
  return (
    <section className='lg:pt-[200px] sm:pt-[88px]'>
        <NavigateTop/>
        <NavigateBottom/>
    </section>
  )
}
