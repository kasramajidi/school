import React from 'react'
import AcademicsHero from '@/components/HeroSection/AcademicsHero/AcademicsHero'
import AcademicsFeatures from '@/components/Academics/AcademicsFeatures/AcademicsFeatures'
import Learn from '@/components/Academics/Learn/Learn'
import Rooms from '@/components/Academics/Rooms/Rooms'
export default function page() {
  return (
    <>
      <header className='lg:px-[50px] lg:pt-[60px] sm:px-[16px] sm:pt-[40px]'>
        <AcademicsHero />
      </header>
      <main className="lg:px-[168px] lg:pt-[80px] lg:pb-[140px] sm:px-[4px] sm:pt-[50px] sm:pb-[79px]">
        <AcademicsFeatures />
        <Learn/>
        <Rooms/>
      </main>
    </>
  )
}
