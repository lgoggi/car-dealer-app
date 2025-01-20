import { CarPicker } from "@/components/CarPicker";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-grow h-full flex-col">
      <h1 className="text-6xl">Car dealer</h1>
      <CarPicker/>
    </main>
  );
}
