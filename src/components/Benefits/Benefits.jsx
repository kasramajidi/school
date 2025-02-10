import React from 'react'
import BenefitsTop from './BenefitsComponet/BenefitsTop'
import BenefitsBottom from './BenefitsComponet/BenefitsBottom'

export default function Benefits() {
  return (
    <section className='lg:pt-[200px] sm:pt-[88px]'>
        <BenefitsTop/>
        <BenefitsBottom/>
    </section>
  )
}
