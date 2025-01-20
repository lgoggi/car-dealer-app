import React from "react";
import { ICarModels } from "@/types/types";

export function CarsModels({carsList}: {carsList: ICarModels[]}) {
  return(
    <div className="flex flex-row w-full max-w-7xl gap-4 items-start justify-start flex-wrap">
      {
        carsList.map((car) => {return <div key={car.Model_ID} className="bg-gray-800 p-4 rounded-md">{car.Model_Name}</div>})
      }
    </div>
  )
}