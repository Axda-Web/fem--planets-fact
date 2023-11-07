import clsx from "clsx";

const PlanetTab = () => {
  return (
    <div className="w-full h-10 bg-slate-600 animate-pulse flex items-center ps-6">
      <div className="w-20 h-4 bg-slate-500 animate-pulse" />
    </div>
  );
};

const NumberCard = () => {
  return (
    <div
      className={clsx(
        "w-full flex justify-between items-center px-6 py-4 bg-slate-600 animate-pulse",
        "md:flex-col md:items-start md:gap-y-2",
        "xl:py-8 xl:gap-y-4"
      )}
    >
      <div className="w-20 h-4 bg-slate-500 animate-pulse" />
      <div className="w-32 h-8 bg-slate-500 animate-pulse" />
    </div>
  );
};

const Loading = () => {
  return (
    <div
      className={clsx(
        "md:px-10 md:max-w-[768px] mx-auto",
        "xl:max-w-[1110px] xl:pt-32"
      )}
    >
      <div
        className={clsx(
          "grid gap-y-24",
          "md:gap-y-0 md:gap-x-[70px] md:grid-cols-2 md:grid-rows-[auto_auto]",
          "xl:grid-cols-[615px_auto] grid-rows-[auto_auto]"
        )}
      >
        <div
          className={clsx(
            "flex justify-around items-center h-fit",
            "md:space-y-4 md:flex-col md:w-full md:col-start-2 md:row-start-2 md:place-self-center",
            "xl:place-self-start"
          )}
        >
          <PlanetTab />
          <PlanetTab />
          <PlanetTab />
        </div>
        <div
          className={clsx(
            "place-self-center relative px-6",
            "md:px-8 md:py-32 md:col-start-1 md:row-start-1 md:col-span-2",
            "xl:row-span-2 xl:col-span-1"
          )}
        >
          <div
            className={clsx(
              "block w-[111px] h-[111px] bg-slate-600 animate-pulse rounded-full",
              "md:hidden"
            )}
          />
          <div
            className={clsx(
              "hidden",
              "md:block md:w-[184px] md:h-[184px] md:bg-slate-600 md:animate-pulse md:rounded-full",
              "xl:hidden"
            )}
          />
          <div
            className={clsx(
              "hidden",
              "xl:block xl:w-[290px] xl:h-[290px] xl:bg-slate-600 xl:animate-pulse xl:rounded-full"
            )}
          />
        </div>
        <div
          className={clsx(
            "px-6",
            "md:px-0 md:py-4 md:col-start-1 md:row-start-2",
            "xl:col-start-2 xl:row-start-1 xl:py-0"
          )}
        >
          <div
            className={clsx(
              "h-10 w-28 mb-4 bg-slate-600 animate-pulse mx-auto",
              "md:text-left md:text-5xl md:mb-6 md:mx-0",
              "xl:h-20 xl:w-48"
            )}
          />
          <div className="w-full h-32 mb-6 bg-slate-600 animate-pulse" />
          <div
            className={clsx(
              "w-28 h-4 bg-slate-600 animate-pulse mx-auto",
              "md:mx-0"
            )}
          />
        </div>
      </div>
      <div
        className={clsx(
          "px-6 flex flex-col gap-y-2 mt-6",
          "md:px-0 md:flex-row gap-x-[11px]"
        )}
      >
        <NumberCard />
        <NumberCard />
        <NumberCard />
        <NumberCard />
      </div>
    </div>
  );
};
export default Loading;
