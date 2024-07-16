import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface LogoProps {
  logoTheme: string;
}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <Link
      href="/#intro"
      className={`py-1 flex justify-center items-center gap-2 font-extrabold text-[1rem] md:text-[1.25rem] lg:text-[1.25rem] ${
        props.logoTheme === "dark" ? "text-black" : "dark:text-slate-200"
      } dark:text-slate-200 text-black`}
    >
      <FontAwesomeIcon
        icon={faGlobe}
        className="h-[1.5rem] text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400"
      />
      Scrappr
    </Link>
  );
};

export default Logo;
