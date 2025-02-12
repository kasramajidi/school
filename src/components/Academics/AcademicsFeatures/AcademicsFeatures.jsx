import React from 'react'
import AcademicsFeaturesTop from './AcademicsFeaturesCom/AcademicsFeaturesTop'
import AcademicsFeaturesBottom from './AcademicsFeaturesCom/AcademicsFeaturesBottom'
export default function AcademicsFeatures() {
    return (
        <section className='lg:pt-[200px] sm:pt-[88px]'>
            <AcademicsFeaturesTop />
            <AcademicsFeaturesBottom />
        </section>
    )
}
