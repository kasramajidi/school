import React from 'react'
import FooterTop from './FooterCompoent/FooterTop'
import FooterBotton from './FooterCompoent/FooterBotton'
export default function Footer() {
    return (
        <div className='lg:px-[50px] lg:pt-[18px] lg:pb-[128px] sm:pb-[54px] sm:px-[16px] sm:pt-[40px]'>
            <div className='rounded-lg flex flex-wrap flex-col sm:px-[30px] lg:px-[113px] lg:pt-[100px] sm:pt-[60px] sm:pb-[30px] lg:pb-[40px] border-[2px] border-solid border-[#262626] bg-white shadow-[6px_6px_0px_2px_#1E1E1E] gap-[50px]'>
                <FooterTop />
                <FooterBotton />
            </div>
        </div>
    )
}
