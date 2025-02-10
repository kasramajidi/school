import React from 'react'
import Image from 'next/image'
import HeroRightBox from './compontHero/HeroRightBox'
export default function HeroSectionHome() {
  return (
    <section className='flex sm:flex-col lg:flex-row  sm:justify-center  items-center gap-[60px] lg:flex-nowrap sm:flex-wrap'>
        <Image src={"/img/heroSection/Image Container.png"} width={765} height={785} alt='heroImage'/>
        <HeroRightBox/>
    </section>
  )
}
