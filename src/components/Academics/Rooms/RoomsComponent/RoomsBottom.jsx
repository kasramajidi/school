"use client"
import React, { useState } from 'react'
import RoomsClassrooms from './RoomsClassrooms';
import RoomsLibrary from './RoomsLibrary';
import RoomsScienceLab from './RoomsScienceLab';
import RoomsComputerLab from './RoomsComputerLab';
import RoomsGardenandNatureAreasLibrary from './RoomsGardenandNatureArea';
import {
  RoomsClassroomsRes,
  RoomsComputerLabRes,
  RoomsGardenandNatureAreaRes,
  RoomsLibraryRes,
  RoomsScienceLabRes
} from "./RoomRespon"
const data = [
  {
    id: "Classrooms",
    name: "Classrooms"
  },
  {
    id: "Library",
    name: "Library",
  },
  {
    id: "ScienceLab",
    name: "Science Lab",
  },
  {
    id: "ComputerLab",
    name: "Computer Lab",
  },
  {
    id: "GardenandNatureArea",
    name: "Garden and Nature Area",
  },
]

export default function RoomsBottom() {
  const [selectData, setSelectData] = useState("All");

  return (
    <div className='flex flex-col items-center gap-[200px] pt-[150px] '>
      <div className='flex flex-wrap items-center justify-center gap-[15px] '>
        <button className={`border-[2px] border-solid border-[#333333] lg:py-[14px] sm:py-[10px] lg:px-[20px] sm:px-[16px] lg:text-[20px] sm:text-[16px] font-semibold text-[#1A1A1A] rounded-lg ${selectData === "All" ? "bg-[#FFEFE5]" : "bg-white"}`}
          onClick={() => setSelectData("All")}
        >All</button>
        {
          data.map((item) => (
            <button
              key={item.id}
              className={`border-[2px] border-solid border-[#333333] lg:py-[14px] sm:py-[10px] lg:px-[20px] sm:px-[16px] lg:text-[20px] sm:text-[16px] font-semibold text-[#1A1A1A] rounded-lg ${selectData === item.id ? "bg-[#FFEFE5]" : "bg-white"}`}
              onClick={() => setSelectData(item.id)}
            >
              {item.name}
            </button>
          ))
        }
      </div>

      {
        selectData === "All" && (
          <>
            <RoomsClassroomsRes />
            <RoomsClassrooms />
            <RoomsLibrary />
            <RoomsLibraryRes />
            <RoomsScienceLab />
            <RoomsScienceLabRes />
            <RoomsComputerLab />
            <RoomsComputerLabRes />
            <RoomsGardenandNatureAreasLibrary />
            <RoomsGardenandNatureAreaRes />
          </>
        )
      }

      {selectData === "Classrooms" && <RoomsClassrooms />}
      {selectData === "Classrooms" && <RoomsClassroomsRes />}
      {selectData === "Library" && <RoomsLibrary />}
      {selectData === "Library" && <RoomsLibraryRes />}
      {selectData === "ScienceLab" && <RoomsScienceLab />}
      {selectData === "ScienceLab" && <RoomsScienceLabRes />}
      {selectData === "ComputerLab" && <RoomsComputerLab />}
      {selectData === "ComputerLab" && <RoomsComputerLabRes />}
      {selectData === "GardenandNatureArea" && <RoomsGardenandNatureAreasLibrary />}
      {selectData === "GardenandNatureArea" && <RoomsGardenandNatureAreaRes />}


    </div>
  )
}
