import React from "react";
import { CarsModels } from "@/components/CarsModels";

export default async function Result({ params }: { params: { makeId: string, year: string }}) {
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
