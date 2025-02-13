import React from 'react'
import RoomsTop from './RoomsComponent/RoomsTop'
import RoomsBottom from './RoomsComponent/RoomsBottom'
export default function Rooms() {
  return (
    <section className='lg:pt-[200px] sm:pt-[88px]'>
        <RoomsTop/>
        <RoomsBottom/>
    </section>
  )
}
