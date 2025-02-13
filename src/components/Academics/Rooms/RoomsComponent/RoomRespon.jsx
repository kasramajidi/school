import React, { useState } from 'react';
import Image from 'next/image';
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

export function RoomsClassroomsRes() {
    const images = [
        "/img/AcademicsImg/Rooms/Image.png",
        "/img/AcademicsImg/Rooms/Image1.png",
        "/img/AcademicsImg/Rooms/Image2.png",
        "/img/AcademicsImg/Rooms/Image3.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className=' sm:block lg:hidden bg-white rounded-xl border-[2px] border-[#262626] shadow-[6px_6px_0px_2px_#1E1E1E] px-[50px] pb-[50px] gap-[40px] flex flex-col items-center'>

            <div className='flex items-center justify-center -mt-[120px]'>
                <Image
                    src={images[currentIndex]}
                    width={298}
                    height={203}
                    alt='room-img'
                    className='rounded-xl border-solid border-[2px] border-[#262626]'
                />
            </div>

            <div className='flex flex-col items-center justify-between pt-[41px] w-full gap-[20px]'>
                <div className='flex items-center gap-[20px]'>
                    <button
                        className='rounded-md border-[2px] border-[#333333] p-[12px]'
                        onClick={prevSlide}
                    >
                        <GrLinkPrevious />
                    </button>
                    <button
                        className='rounded-md border-[2px] border-[#333333] p-[12px]'
                        onClick={nextSlide}
                    >
                        <GrLinkNext />
                    </button>
                </div>
                <h2 className='font-bold text-[28px] text-[#1A1A1A] font-[Raleway]'>Classrooms</h2>
            </div>

            <p className='font-medium text-center text-[18px] leading-[27px] text-[#4C4C4D] mt-[40px]'>
                Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment.
                Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.
            </p>
        </div>
    );
}

export function RoomsComputerLabRes() {
    const images = [
        "/img/AcademicsImg/Rooms/Image12.png",
        "/img/AcademicsImg/Rooms/Image13.png",
        "/img/AcademicsImg/Rooms/Image14.png",
        "/img/AcademicsImg/Rooms/Image15.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className=' sm:block lg:hidden bg-white rounded-xl border-[2px] border-[#262626] shadow-[6px_6px_0px_2px_#1E1E1E] px-[50px] pb-[50px] gap-[40px] flex flex-col items-center'>

            <div className='flex items-center justify-center -mt-[120px]'>
                <Image
                    src={images[currentIndex]}
                    width={298}
                    height={203}
                    alt='room-img'
                    className='rounded-xl border-solid border-[2px] border-[#262626]'
                />
            </div>

            <div className='flex flex-col items-center justify-between pt-[41px] w-full gap-[20px]'>
                <div className='flex items-center gap-[20px]'>
                    <button
                        className='rounded-md border-[2px] border-[#333333] p-[12px]'
                        onClick={prevSlide}
                    >
                        <GrLinkPrevious />
                    </button>
                    <button
                        className='rounded-md border-[2px] border-[#333333] p-[12px]'
                        onClick={nextSlide}
                    >
                        <GrLinkNext />
                    </button>
                </div>
                <h2 className='font-bold text-[28px] text-[#1A1A1A] font-[Raleway]'>Computer Lab</h2>
            </div>

            <p className='font-medium text-center text-[18px] leading-[27px] text-[#4C4C4D] mt-[40px]'>
                Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills
            </p>
        </div>
    )
}

export function RoomsGardenandNatureAreaRes() {
    const images = [
        "/img/AcademicsImg/Rooms/Image16.png",
        "/img/AcademicsImg/Rooms/Image17.png",
        "/img/AcademicsImg/Rooms/Image18.png",
        "/img/AcademicsImg/Rooms/Image19.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className=' sm:block lg:hidden bg-white rounded-xl border-[2px] border-[#262626] shadow-[6px_6px_0px_2px_#1E1E1E] px-[50px] pb-[50px] gap-[40px] flex flex-col items-center'>

            <div className='flex items-center justify-center -mt-[120px]'>
                <Image
                    src={images[currentIndex]}
                    width={298}
                    height={203}
                    alt='room-img'
                    className='rounded-xl border-solid border-[2px] border-[#262626]'
                />
            </div>

            <div className='flex flex-col items-center justify-between pt-[41px] w-full gap-[20px]'>
                <div className='flex items-center gap-[20px]'>
                    <button
                        className='rounded-md border-[2px] border-[#333333] p-[12px]'
                        onClick={prevSlide}
                    >
                        <GrLinkPrevious />
                    </button>
                    <button
                        className='rounded-md border-[2px] border-[#333333] p-[12px]'
                        onClick={nextSlide}
                    >
                        <GrLinkNext />
                    </button>
                </div>
                <h2 className='font-bold text-[28px] text-[#1A1A1A] font-[Raleway]'>Garden and Nature Area</h2>
            </div>

            <p className='font-medium text-center text-[18px] leading-[27px] text-[#4C4C4D] mt-[40px]'>
                ur garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.
            </p>
        </div>
    )
}

export function RoomsLibraryRes() {
    const images = [
        "/img/AcademicsImg/Rooms/Image4.png",
        "/img/AcademicsImg/Rooms/Image5.png",
        "/img/AcademicsImg/Rooms/Image6.png",
        "/img/AcademicsImg/Rooms/Image7.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className=' sm:block lg:hidden bg-white rounded-xl border-[2px] border-[#262626] shadow-[6px_6px_0px_2px_#1E1E1E] px-[50px] pb-[50px] gap-[40px] flex flex-col items-center'>

            <div className='flex items-center justify-center -mt-[120px]'>
                <Image
                    src={images[currentIndex]}
                    width={298}
                    height={203}
                    alt='room-img'
                    className='rounded-xl border-solid border-[2px] border-[#262626]'
                />
            </div>

            <div className='flex flex-col items-center justify-between pt-[41px] w-full gap-[20px]'>
                <div className='flex items-center gap-[20px]'>
                    <button
                        className='rounded-md border-[2px] border-[#333333] p-[12px]'
                        onClick={prevSlide}
                    >
                        <GrLinkPrevious />
                    </button>
                    <button
                        className='rounded-md border-[2px] border-[#333333] p-[12px]'
                        onClick={nextSlide}
                    >
                        <GrLinkNext />
                    </button>
                </div>
                <h2 className='font-bold text-[28px] text-[#1A1A1A] font-[Raleway]'>Library</h2>
            </div>

            <p className='font-medium text-center text-[18px] leading-[27px] text-[#4C4C4D] mt-[40px]'>
                Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.
            </p>
        </div>
    )
}

export function RoomsScienceLabRes() {
    const images = [
        "/img/AcademicsImg/Rooms/Image8.png",
        "/img/AcademicsImg/Rooms/Image9.png",
        "/img/AcademicsImg/Rooms/Image10.png",
        "/img/AcademicsImg/Rooms/Image11.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className=' sm:block lg:hidden bg-white rounded-xl border-[2px] border-[#262626] shadow-[6px_6px_0px_2px_#1E1E1E] px-[50px] pb-[50px] gap-[40px] flex flex-col items-center'>

            <div className='flex items-center justify-center -mt-[120px]'>
                <Image
                    src={images[currentIndex]}
                    width={298}
                    height={203}
                    alt='room-img'
                    className='rounded-xl border-solid border-[2px] border-[#262626]'
                />
            </div>

            <div className='flex flex-col items-center justify-between pt-[41px] w-full gap-[20px]'>
                <div className='flex items-center gap-[20px]'>
                    <button
                        className='rounded-md border-[2px] border-[#333333] p-[12px]'
                        onClick={prevSlide}
                    >
                        <GrLinkPrevious />
                    </button>
                    <button
                        className='rounded-md border-[2px] border-[#333333] p-[12px]'
                        onClick={nextSlide}
                    >
                        <GrLinkNext />
                    </button>
                </div>
                <h2 className='font-bold text-[28px] text-[#1A1A1A] font-[Raleway]'>Science Lab</h2>
            </div>

            <p className='font-medium text-center text-[18px] leading-[27px] text-[#4C4C4D] mt-[40px]'>
                Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.
            </p>
        </div>
    )
}