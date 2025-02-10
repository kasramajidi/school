import React from 'react';
import Image from 'next/image';

export default function BenefitsBottom() {
  const itemMenu = [
    {
      img: "/img/Benefits/Icon.png",
      name: "HolisticLearning Approach",
      des: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
    },
    {
      img: "/img/Benefits/Icon1.png",
      name: "Experienced Educators",
      des: "Our passionate and qualified teachers create a supportive and stimulating learning environment."
    },
    {
      img: "/img/Benefits/Icon2.png",
      name: "Nurturing Environment",
      des: "We prioritize safety and provide a warm and caring atmosphere for every child."
    },
    {
      img: "/img/Benefits/Icon4.png",
      name: "Play-Based Learning",
      des: "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
    },
    {
      img: "/img/Benefits/Icon5.png",
      name: "Individualized Attention",
      des: "Our small class sizes enable personalized attention, catering to each child's unique needs."
    },
    {
      img: "/img/Benefits/Icon6.png",
      name: "Parent Involvement",
      des: "We foster a strong parent-school partnership to ensure seamless communication and collaboration."
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


