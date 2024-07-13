import Link from "next/link";
import React from "react";

interface LogoProps {
  logoTheme: string;
}

const Logo: React.FC<LogoProps> = ({ logoTheme }) => {
  return (
    <Link
      href="/#intro"
      className={`font-extrabold text-[1rem] md:text-[1.25rem] lg:text-[1.25rem] ${
        logoTheme === "dark" ? "text-black" : "dark:text-slate-200"
      } dark:text-slate-200 text-black`}
    >
      Scrappr
    </Link>
  );
};

export default Logo;
