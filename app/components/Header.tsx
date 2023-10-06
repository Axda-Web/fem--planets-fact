"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pathname = usePathname();
  return (
    <header>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-14 lg:px-8 py-4 sm:py-8 lg:py-6 flex sm:flex-col xl:flex-row sm:gap-y-10 justify-between items-center">
        <div className="logo">
          <Link href="/">The planets</Link>
        </div>
        <button
          className="sm:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <Image
            className="w-6 h-[17px]"
            src="/assets/icons/icon-hamburger.svg"
            alt="menu"
            width={24}
            height={17}
          />
        </button>
        <nav className="hidden sm:block">
          <ul className="flex justify-between gap-x-8">
            {NAV_LINKS.map((link, index) => {
              const isActivePage = pathname === link.route;
              const hoverColorClasses: Record<string, string> = {
                mercury: "hover:before:bg-mercury",
                venus: "hover:before:bg-venus",
                earth: "hover:before:bg-earth",
                mars: "hover:before:bg-mars",
                jupiter: "hover:before:bg-jupiter",
                saturn: "hover:before:bg-jupiter",
                uranus: "hover:before:bg-uranus",
                neptune: "hover:before:bg-neptune",
              };
              const activeColorClasses: Record<string, string> = {
                mercury: "before:bg-mercury",
                venus: "before:bg-venus",
                earth: "before:bg-earth",
                mars: "before:bg-mars",
                jupiter: "before:bg-jupiter",
                saturn: "before:bg-jupiter",
                uranus: "before:bg-uranus",
                neptune: "before:bg-neptune",
              };
              `before:bg-${link.label}`;
              return (
                <li
                  key={index}
                  className="text-light/50 hover:text-light heading4"
                >
                  <Link
                    className={`text-light/50 hover:text-light heading4 before:w-full before:h-0.5 xl:before:h-1 before:top-4  xl:before:-top-10 before:block ${
                      isActivePage
                        ? activeColorClasses[link.label]
                        : "before:bg-transparent"
                    } ${
                      hoverColorClasses[link.label]
                    } before:absolute relative transition-colors`}
                    href={link.route}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;

// TODO: Find a way to make the svg color dynamic
// TODO: Add mobile menu
