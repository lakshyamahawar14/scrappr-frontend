import Link from "next/link";
import React from "react";

interface LogoProps {
  logoTheme: string;
}

const Logo: React.FC<LogoProps> = ({ logoTheme }) => {
  return (
    <Link
      href="/#intro"
      className={`font-bold text-[1rem] md:text-[1.25rem] lg:text-[1.25rem] italic ${
        logoTheme === "dark" ? "text-slate-900" : "dark:text-slate-200"
      } dark:text-slate-200 text-slate-900`}
    >
      Scrappr
    </Link>
  );
};

export default Logo;
