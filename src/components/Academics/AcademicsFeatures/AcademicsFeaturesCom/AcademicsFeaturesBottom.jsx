import React from 'react'
import Image from 'next/image';
export default function AcademicsFeaturesBottom() {
  const itemMenu = [
    {
      img: "/img/AcademicsImg/Features/Icon.png",
      name: "Thematic Learning",
      des: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."
    },
    {
      img: "/img/AcademicsImg/Features/Union.png",
      name: "STEAM Education",
      des: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills."
    },
    {
      img: "/img/AcademicsImg/Features/Icon2.png",
      name: "Language Immersion",
      des: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness."
    },
    {
      img: "/img/AcademicsImg/Features/Icon3.png",
      name: "Art and Creativity",
      des: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms."
    },
    {
      img: "/img/AcademicsImg/Features/Icon4.png",
      name: "Outdoor Education",
      des: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment."
    },
    {
      img: "/img/AcademicsImg/Features/Icon5.png",
      name: "Play-Based Learning",
      des: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking."
    },
  ];

  return (
    <div className="lg:pt-[100px] sm:pt-[78px] flex flex-wrap gap-[50px] lg:justify-between sm:justify-center">
      {itemMenu.map((item, index) => (
        <div key={index} className="relative shadow-[6px_6px_0px_2px_#1E1E1E] rounded-xl px-[40px] pt-[80px] pb-[50px] bg-white border-[2px] border-solid border-[#262626] lg:max-w-sm sm:max-w-xs">
          <div className="absolute -top-8 left-5 bg-[#FFDECC] border-[2px] border-[#262626] rounded-lg p-[10px] shadow-md flex items-center justify-center">
            <Image src={item.img} width={34} height={34} alt="icon" />
          </div>
          <h2 className="lg:text-[24px] sm:text-[18px] font-[Raleway] font-bold text-[#1A1A1A]">{item.name}</h2>
          <p className="text-[#4C4C4D] mt-2 lg:text-[18px] sm:text-[12px] text-start">{item.des}</p>
        </div>
      ))}
    </div>
  );
}
