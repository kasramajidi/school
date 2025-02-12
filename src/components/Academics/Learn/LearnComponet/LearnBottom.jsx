import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function LearnBottom() {
    const informationStudent = [
        {
            img: "/img/AcademicsImg/Students/Image.png",
            name: "Language Arts",
            des: "Reading, writing, storytelling, and communication skills."
        },
        {
            img: "/img/AcademicsImg/Students/Image2.png",
            name: "Mathematics",
            des: "Number sense, basic operations, problem-solving, and logic."
        },
        {
            img: "/img/AcademicsImg/Students/Image3.png",
            name: "Science",
            des: "Exploring the natural world through hands-on experiments and investigations."
        },
        {
            img: "/img/AcademicsImg/Students/Image4.png",
            name: "Social Studies",
            des: "Cultivating an understanding of diverse cultures and communities."
        },
        {
            img: "/img/AcademicsImg/Students/Image5.png",
            name: "Arts and Crafts",
            des: "Encouraging creativity through various art forms and crafts."
        },
        {
            img: "/img/AcademicsImg/Students/Image6.png",
            name: "Physical Education",
            des: "Promoting physical fitness, coordination, and teamwork."
        },
    ]
    return (
        <div className=" relativelg:pt-[100px] sm:pt-[78px] flex flex-wrap gap-[50px] lg:justify-between sm:justify-center">
            {
                informationStudent.map((item, index) => (
                    <Link href={"/"}>
                        <div key={index} className="relative h-[570px] flex flex-col items-center justify-center gap-[50px] bg-white border-[2px] border-solid border-[#262626] rounded-xl p-[50px] shadow-[6px_6px_0px_2px_#1E1E1E] lg:max-w-sm sm:max-w-xs">
                            <div className="absolute lg:top-[29%] sm:top-[26%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#FFEFE5] border-[2px] border-solid border-[#262626] rounded-b-xl w-[130px] lg:h-[330px] sm:h-[300px]"></div>
                            <Image src={item.img} width={398} height={304} alt="student" className="relative z-20 sm:w-[298px] sm:h-[191px]" />
                            <div className="flex flex-col gap-[20px] self-end">
                                <span className="font-[Raleway] font-bold text-[28px] text-[#1A1A1A] text-center">{item.name}</span>
                                <p className="text-[#4C4C4D] text-[20px] font-medium text-center max-w-[300px]">{item.des}</p>
                            </div>

                        </div>

                    </Link>
                ))
            }
        </div>
    )
}
