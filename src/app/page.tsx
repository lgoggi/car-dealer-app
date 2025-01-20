import React from "react";
import { CarPicker } from "@/components/CarPicker";
import { ICar } from "@/types/types";


export default async function Home() {
  const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
  const carsList: ICar[] = (await response.json()).Results;

  return (
    <main className="flex items-center justify-center flex-grow flex-col gap-16 p-4">
      <h1 className="text-6xl font-bold text-high-contrast">Car dealer</h1>
      <CarPicker carsList={carsList} />
    </main>
  );
}
