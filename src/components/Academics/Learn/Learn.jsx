import React from 'react'
import LearnTop from './LearnComponet/LearnTop'
import LearnBottom from './LearnComponet/LearnBottom'

export default function Learn() {
  return (
    <section className='lg:pt-[200px] sm:pt-[88px]'>
        <LearnTop/>
        <LearnBottom/>
    </section>
  )
}
