import clsx from "clsx";

type PlanetTabProps = {
  index: string;
  planet: string;
  label: string;
  value: string;
  isActive: boolean;
  handleTabClick: (tab: string) => void;
};

const PlanetTab = ({
  index,
  planet,
  label,
  value,
  isActive,
  handleTabClick,
}: PlanetTabProps) => {
  const mobileLabel =
    value === "structure"
      ? "Sructure"
      : value === "geology"
      ? "Surface"
      : label;

  const mobileComputedClasses: Record<string, string> = {
    mercury: "after:bg-mercury",
    venus: "after:bg-venus",
    earth: "after:bg-earth",
    mars: "after:bg-mars",
    jupiter: "after:bg-jupiter",
    saturn: "after:bg-saturn",
    uranus: "after:bg-uranus",
    neptune: "after:bg-neptune",
  };

  const computedClasses: Record<string, string> = {
    mercury: "md:bg-mercury md:border-mercury",
    venus: "md:bg-venus md:border-venus",
    earth: "md:bg-earth md:border-earth",
    mars: "md:bg-mars md:border-mars",
    jupiter: "md:bg-jupiter md:border-jupiter",
    saturn: "md:bg-saturn md:border-saturn",
    uranus: "md:bg-uranus md:border-uranus",
    neptune: "md:bg-neptune md:border-neptune",
  };

  return (
    <button
      onClick={() => handleTabClick(value)}
      className={clsx(
        "font-paragraph font-bold text-light uppercase text-[9px] tracking-[1.929px] transition-colors",
        "md:py-3 md:px-7 md:border md:hover:border-carbonBlue md:hover:bg-carbonBlue md:text-xs md:w-full md:flex md:gap-x-6",
        {
          "md:border-light/20": !isActive,
          [computedClasses[planet]]: isActive,
        }
      )}
    >
      <span className={clsx("text-light/50 hidden", "md:block")}>{index}</span>{" "}
      <span
        className={clsx(
          "block py-5 px-2 relative",
          "after:h-1 after:absolute after:-bottom-0 after:w-full after:left-0 after:transition-colors",
          {
            "after:bg-transparent text-light/50": !isActive,
            [mobileComputedClasses[planet]]: isActive,
          },
          "md:hidden"
        )}
      >
        {mobileLabel}
      </span>
      <span className={clsx("hidden", "md:block")}>{label}</span>
    </button>
  );
};
export default PlanetTab;
