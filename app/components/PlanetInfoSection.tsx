"use client";

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Planet } from "@/types";
import { PLANET_TABS } from "@/constants";
import PlanetTab from "./PlanetTab";
import { IMG_SIZES_COMPUTED_CLASSES, IMG_SIZES } from "@/constants";

type PlanetInfoSectionProps = {
  planet: Planet;
};

const PlanetInfoSection = ({ planet }: PlanetInfoSectionProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  const initialActiveDataState = {
    content: planet.overview.content,
    source: planet.overview.source,
    img: planet.images.planet,
    extraImg: "",
  };
  const [activeData, setActiveData] = useState(initialActiveDataState);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);

    setActiveData({
      content: planet[tab as "overview" | "structure" | "geology"].content,
      source: planet[tab as "overview" | "structure" | "geology"].source,
      img:
        tab === "overview" || tab === "geology"
          ? planet.images.planet
          : planet.images.internal,
      extraImg: tab === "geology" ? planet.images.geology : "",
    });
  };
  return (
    <section
      className={clsx(
        "grid gap-y-24",
        "md:gap-y-0 md:gap-x-[70px] md:grid-cols-2 md:grid-rows-[auto_auto]",
        "xl:grid-cols-[615px_auto] grid-rows-[auto_auto]"
      )}
    >
      <div
        className={clsx(
          "flex justify-around items-center h-fit border-b border-light/20",
          "md:space-y-4 md:flex-col md:w-full md:col-start-2 md:row-start-2 md:place-self-center",
          "xl:place-self-start"
        )}
      >
        {PLANET_TABS.map(({ index, label, value }) => (
          <PlanetTab
            key={index}
            index={index.toString().padStart(2, "0")}
            planet={planet.name.toLowerCase()}
            label={label}
            value={value}
            isActive={activeTab === value}
            handleTabClick={handleTabClick}
          />
        ))}
      </div>
      <div
        className={clsx(
          "place-self-center relative px-6",
          "md:px-8 md:py-32 md:col-start-1 md:row-start-1 md:col-span-2",
          "xl:row-span-2 xl:col-span-1"
        )}
      >
        <Image
          src={activeData.img}
          alt={planet?.name!}
          className={clsx("block w-[111px] h-[111px]", "md:hidden")}
          width={111}
          height={111}
        />
        <Image
          src={activeData.img}
          alt={planet?.name!}
          className={clsx(
            "hidden",
            "md:block md:w-[184px] md:h-[184px]",
            "xl:hidden"
          )}
          width={184}
          height={184}
        />
        <Image
          src={activeData.img}
          alt={planet?.name!}
          className={clsx("hidden", "xl:block xl:w-[290px] xl:h-[290px]")}
          width={290}
          height={290}
        />
        {activeData.extraImg && (
          <Image
            className={clsx(
              "hidden",
              "xl:block xl:w-[136px] xl:h-[165px] xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:top-[400px] xl:-translate-y-1/2"
            )}
            src={activeData.extraImg}
            alt={planet?.name!}
            width={136}
            height={165}
          />
        )}
      </div>
      <div
        className={clsx(
          "px-6",
          "md:px-0 md:py-4 md:col-start-1 md:row-start-2",
          "xl:col-start-2 xl:row-start-1 xl:py-0"
        )}
      >
        <h1
          className={clsx(
            "text-light font-title text-center text-[40px] uppercase mb-4",
            "md:text-left md:text-5xl md:mb-6",
            "xl:text-[80px]"
          )}
        >
          {planet?.name}
        </h1>
        <p
          className={clsx(
            "font-paragraph text-center text-[11px] leading-[22px] text-light mb-8",
            "md:text-left",
            "xl:text-sm xl:leading-[25px] xl:mb-6"
          )}
        >
          {activeData.content}
        </p>
        <div
          className={clsx(
            "font-paragraph text-xs leading-[25px] text-light/50 flex justify-center gap-x-2",
            "md:justify-start ",
            "xl:text-sm"
          )}
        >
          Source :{" "}
          <Link
            className="underline flex items-center gap-x-2"
            href={activeData.source}
          >
            Wikipedia{" "}
            <Image
              src="/assets/icons/icon-source.svg"
              alt="source icon"
              width={12}
              height={12}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default PlanetInfoSection;

// TODO: Find the best way to adapt img scale
// TODO: Improve grid layout
// TODO: Add extra img on small screens
