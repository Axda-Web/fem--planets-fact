import clsx from "clsx";

import { getPlanets, getPlanetByName } from "@/lib/actions/planet";
import PlanetInfoSection from "@/app/components/PlanetInfoSection";
import NumberCard from "@/app/components/NumberCard";

type Props = {
  params: { planetName: string };
};
export async function generateMetadata({ params }: Props) {
  const planet = await getPlanetByName(params.planetName);
  return {
    title: `Planets | ${planet?.name}`,
    description: `Discover the secrets of ${planet?.name}!`,
  };
}

export async function generateStaticParams() {
  const planets = await getPlanets();
  if (!planets) return [];
  return planets.map((planet) => ({
    planetName: planet.name,
  }));
}

async function PlanetPage({ params }: Props) {
  const planet = await getPlanetByName(params.planetName);
  const trimmedData = Object.entries(planet!)
    .filter(
      ([key, value]) =>
        key === "rotation" ||
        key === "revolution" ||
        key === "radius" ||
        key === "temperature"
    )
    .map(([key, value]) => {
      if (key === "rotation" || key === "revolution") {
        return [key + " time", value];
      } else if (key === "temperature") {
        return ["Average Temp.", value];
      } else {
        return [key, value];
      }
    });

  return (
    <main
      className={clsx(
        "md:px-10 md:max-w-[768px] mx-auto pb-12",
        "xl:max-w-[1110px] xl:pt-32 xl:pb-0"
      )}
    >
      <PlanetInfoSection planet={planet!} />
      <section
        className={clsx(
          "px-6 flex flex-col gap-y-2 mt-6",
          "md:px-0 md:flex-row gap-x-[11px]"
        )}
      >
        {trimmedData.map(([title, value], index) => (
          <NumberCard
            key={index}
            title={title as string}
            value={value as string}
          />
        ))}
      </section>
    </main>
  );
}
export default PlanetPage;
