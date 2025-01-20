import React from "react";
import { CarsModels } from "@/components/CarsModels";
import { ICar } from "@/types/types";

type Params = Promise<{ makeId: string, year: string }>

export async function generateStaticParams() {
  const cars = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json').then((res) => res.json())
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
  return cars.Results.map((car: ICar) => ({
    makeId: car.MakeId.toString(),
    year: yearList.toString()
  }))
}

export default async function Result({ params }: { params: Params}) {
  const {makeId, year} = await params;
  const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
  const carsModels = (await response.json()).Results;

  return (
    <main className="flex items-center justify-center flex-grow flex-col gap-16 p-4">
      <h1 className="text-6xl font-bold text-high-contrast">{carsModels[0].Make_Name}</h1>
      <CarsModels carsList={carsModels}/>
    </main>
  );
}
