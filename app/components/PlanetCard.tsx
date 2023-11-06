import type { Planet } from "@/types";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

type PlanetCardProps = {
  planet: Planet;
};
const PlanetCard = ({ planet }: PlanetCardProps) => {
  return (
    <article
      className={clsx(
        "border border-light/50 w-full max-w-[200px] transition-all group",
        "hover:border-light hover:translate-y-3"
      )}
    >
      <Link className="block" href={`/planets/${planet.name}`}>
        <div className="flex flex-col items-center gap-y-4 p-6">
          <Image
            className="w-[100px] h-[100px]"
            src={planet.images.planet}
            alt={planet.name}
            width={150}
            height={150}
          />
          <h2
            className={clsx(
              "heading2 text-light/50 transition-colors",
              "group-hover:text-light"
            )}
          >
            {planet.name}
          </h2>
        </div>
      </Link>
    </article>
  );
};
export default PlanetCard;
