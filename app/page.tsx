import Image from "next/image";
import { getPlanets } from "@/lib/actions/planet";

import PlanetCard from "./components/PlanetCard";

export default async function Home() {
  const planets = await getPlanets();
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
      {planets?.map((planet) => (
        <PlanetCard key={planet.id} planet={planet} />
      ))}
    </main>
  );
}
