import Image from "next/image";
import { Metadata } from "next";

import { getPlanets } from "@/lib/actions/planet";
import PlanetCard from "./components/PlanetCard";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Planets",
  description: "Discover the Solar System!",
};

export default async function Home() {
  const planets = await getPlanets();
  return (
    <main
      className={clsx(
        "mx-auto grid grid-cols-1 gap-6 justify-items-center py-16",
        "md:max-w-[424px] md:grid-cols-2",
        "lg:max-w-[648px] lg:grid-cols-3",
        "xl:max-w-[880px] xl:grid-cols-4 xl:py-32"
      )}
    >
      {planets?.map((planet) => (
        <PlanetCard key={planet.id} planet={planet} />
      ))}
    </main>
  );
}
