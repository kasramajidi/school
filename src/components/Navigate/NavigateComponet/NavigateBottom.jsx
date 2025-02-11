import React from 'react'
import {NavigateBottomLine, NavigateBottomLineRes} from './NavigateBottomLine'
import Link from 'next/link'
import { GoArrowRight } from "react-icons/go";

export default function NavigateBottom() {
    const navigateItem = [
        {
            name: "About Us",
            dis: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."
        },
        {
            name: "Academics",
            dis: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development."
        },
        {
            name: "Student Life",
            dis: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable."
        },
        {
            name: "Admissions",
            dis: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces."
        },
    ]
    return (
        <div className='lg:pt-[100px] sm:pt-[78px] flex flex-wrap gap-[50px] lg:justify-between sm:justify-center'>
            {
                navigateItem.map((item, index) => (
                    <div key={index} className='shadow-[6px_6px_0px_2px_#1E1E1E] flex flex-col justify-center items-center rounded-xl p-[80px] pb-[50px] bg-white border-[2px] border-solid border-[#262626] lg:max-w-xl sm:max-w-xs gap-[20px]'>
                        <span className='font-[Raleway] lg:text-[48px] sm:text-[24px] text-center font-bold'>{item.name}</span>
                        <NavigateBottomLine/>
                        <NavigateBottomLineRes/>
                        <p className='font-medium lg:text-[20px] sm:text-[16px] lg:leading-[30px] sm:leading-[24px] text-[#4C4C4D] text-center sm:w-[300px] lg:max-w-lg'>{item.dis}</p>
                        <Link href={"/"}>
                            <button className='bg-[#FFDECC] flex items-center justify-center lg:px-[150px] sm:px-[80px] border-[2px] gap-[10px] border-[#262626] border-solid py-[18px] shadow-[4px_4px_0px_2px_#1E1E1E]'>LearnMore<GoArrowRight/></button>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
