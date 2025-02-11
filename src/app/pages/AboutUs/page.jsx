import React from 'react'
import Image from 'next/image'
export default function page() {
  return (
    <div className='flex items-center justify-center py-[50px]'>
      <Image src={"/img/404/404-error-page-with-explorer-man-illustration-on-white-background-vector.jpg"} width={500} height={500} alt='404'/>
    </div>
  )
}
