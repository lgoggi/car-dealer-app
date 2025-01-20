"use client"
import { ICar } from "@/types/types"
import Link from "next/link";
import { ChangeEvent, useState } from "react"


export function CarPicker({carsList}: {carsList: ICar[]}) {
  const [carModel, setCarModel] = useState<string>();
  const [carYear, setCarYear] = useState<string>();

  const handleModelChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCarModel(event.currentTarget.value);
  }
  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCarYear(event.currentTarget.value);
  }

  const getYearList = () => {
    const currentYear = new Date().getFullYear();
    const resultArr = [];
    let year = 2015;
    while (year <= currentYear) {
        resultArr.push(year);
        ++year;
    }
    return resultArr;
  }
  const yearList = getYearList();

  return(
    <div className="flex flex-col items-center justify-center gap-4 w-full max-w-7xl">
      <select value={carModel} onChange={handleModelChange} className="bg-gray-800 p-2 rounded-xl max-[996px]:w-full">
        <option />
        {
          carsList.map((car) => {
            return <option className="text-high-contrast" value={car.MakeId} key={car.MakeId}>{car.MakeName}</option>
          })
        }
      </select>
      <select value={carYear} onChange={(e) => handleYearChange(e)} className="bg-gray-800 p-2 rounded-xl">
        <option />
        {
          yearList.map((year) => {
            return <option className="text-high-contrast" key={year}>{year}</option>
          })
        }
      </select>
      {
        carModel && carYear ? 
        <Link  href={`/result/${carModel}/${carYear}`} className="bg-primary px-4 py-2 rounded-xl text-high-contrast font-bold">NEXT</Link>
        :
        <div  className="bg-primary opacity-50 px-4 py-2 rounded-xl text-high-contrast font-bold">NEXT</div> 
      }
    </div>
  )
}