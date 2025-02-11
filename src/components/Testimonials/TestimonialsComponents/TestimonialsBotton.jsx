import React from 'react'
import Image from 'next/image'
export default function TestimonialsBotton() {
    const user = [
        {
            img: "/img/Testimonials/Profile Container.png",
            name: "Jennifer B",
            des: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
        },
        {
            img: "/img/Testimonials/Profile Container1.png",
            name: "David K",
            des: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
        },
        {
            img: "/img/Testimonials/Profile Container2.png",
            name: "Emily L",
            des: "My sons social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
        },

    ]
    return (
        <div className='flex sm:flex-col lg:flex-row items-center gap-[50px]  justify-between pt-[100px] flex-wrap'>
            {
                user.map((item, index) => (
                    <div key={index} className='flex flex-col justify-center h-[432px] items-center rounded-lg border-[2px] border-[#262626] border-solid bg-white p-[50px] gap-[30px] shadow-[6px_6px_0px_2px_#1E1E1E] lg:max-w-sm sm:max-w-xs'>
                        <div className='flex flex-col items-center justify-center gap-[12px]'>
                            <Image src={item.img} width={80} height={80} alt='prof' />
                            <span className='text-[24px] font-semibold text-[#333333]'>{item.name}</span>
                        </div>
                        <Image src={"/img/Testimonials/Container.png"} width={140} height={24} alt='score' />
                        <p className='font-medium text-[20px] text-[#333333] leading-[30px]'>{item.des}</p>
                    </div>
                ))
            }
        </div>
    )
}
