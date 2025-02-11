import React from 'react'

import HomeFooter from './HomeFooter'
import AboutUsFooter from './AboutUsFooter'
import AcademicsFooter from './AcademicsFooter'
import ContactUsFooter from './ContactUsFooter'

export default function MenuFooter() {
  return (
    <div className='flex items-start justify-between lg:gap-[70px] flex-wrap sm:gap-[30px]'>
      <HomeFooter/>
      <AboutUsFooter/>
      <AcademicsFooter/>
      <ContactUsFooter/>
    </div>
  )
}
