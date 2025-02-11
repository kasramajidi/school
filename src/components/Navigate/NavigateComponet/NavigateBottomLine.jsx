import React from 'react'

export function NavigateBottomLine() {
    return (
        <div className="lg:flex sm:hidden items-center justify-center gap-[10px] my-6">
            <div className="w-6 h-6 border-2 border-black rounded-full bg-white"></div>
            <div className="flex items-center justify-between w-1/2 mx-1 ">
                {Array(10).fill(0).map((_, index) => (
                    <div key={index} className="w-[50px] h-2 ml-[10px] bg-[#FFAE80] border border-black"></div>
                ))}
            </div>
            <div className="w-6 h-6 border-2 border-black rounded-full bg-white"></div>
        </div>
    )
}



export function NavigateBottomLineRes() {
    return (
        <div className="lg:hidden sm:flex items-center justify-center gap-[10px] my-6">
            <div className="w-6 h-6 border-2 border-black rounded-full bg-white"></div>
            <div className="flex items-center justify-between w-1/2 mx-1 ">
                {Array(4).fill(0).map((_, index) => (
                    <div key={index} className="w-[50px] h-2 ml-[10px] bg-[#FFAE80] border border-black"></div>
                ))}
            </div>
            <div className="w-6 h-6 border-2 border-black rounded-full bg-white"></div>
        </div>
    )
}