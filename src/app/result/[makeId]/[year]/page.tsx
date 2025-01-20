export default async function Result({ params }: { params: { makeId: string, year: string }}) {

  return (
    <main className="flex items-center justify-center flex-grow flex-col gap-16 p-4">
      <h1 className="text-6xl font-bold text-high-contrast">{params.makeId}, {params.year}</h1>
    </main>
  );
}
