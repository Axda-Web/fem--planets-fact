import clsx from "clsx";
import { NAV_LINKS } from "@/constants";

const loading = () => {
  return (
    <div
      className={clsx(
        "mx-auto grid grid-cols-1 gap-6 justify-items-center py-16",
        "md:max-w-[424px] md:grid-cols-2",
        "lg:max-w-[648px] lg:grid-cols-3",
        "xl:max-w-[880px] xl:grid-cols-4 xl:py-32"
      )}
    >
      {NAV_LINKS?.map((_, index) => (
        <div
          key={index}
          className={clsx(
            "w-full h-[220px] max-w-[200px] bg-slate-600 animate-pulse flex flex-col justify-center items-center gap-y-6"
          )}
        >
          <div className="block">
            <div className="w-[100px] h-[100px] rounded-full bg-slate-500" />
          </div>
          <div className="w-32 h-12 bg-slate-500 animate-pulse" />
        </div>
      ))}
    </div>
  );
};
export default loading;
