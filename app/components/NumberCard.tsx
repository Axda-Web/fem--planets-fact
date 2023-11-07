import clsx from "clsx";

type NumberCardProps = {
  title: string;
  value: string;
};

const NumberCard = ({ title, value }: NumberCardProps) => {
  return (
    <article
      className={clsx(
        "w-full flex justify-between items-center px-6 py-4 border border-light/20",
        "md:flex-col md:items-start md:gap-y-2",
        "xl:py-8 xl:gap-y-4"
      )}
    >
      <span
        className={clsx(
          "text-light/50 text-[8px] uppercase font-paragraph font-bold leading-4 tracking-[0.727px]",
          "xl:text-[11px] xl:leading-4 xl:tracking-[1px]"
        )}
      >
        {title}
      </span>
      <span
        className={clsx(
          "text-light text-xl uppercase font-title tracking-[-0.75px]",
          "md:text-2xl md:tracking-[-0.9px]",
          "xl:text-[40px] xl:tracking-[-1.5px]"
        )}
      >
        {value}
      </span>
    </article>
  );
};
export default NumberCard;
