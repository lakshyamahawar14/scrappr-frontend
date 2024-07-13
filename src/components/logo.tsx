import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface LogoProps {
  logoTheme: string;
}

const Logo: React.FC<LogoProps> = ({ logoTheme }) => {
  return (
    <Link
      href="/#intro"
      className={`flex justify-center items-center gap-2 font-extrabold text-[1rem] md:text-[1.25rem] lg:text-[1.25rem] ${
        logoTheme === "dark" ? "text-black" : "dark:text-slate-200"
      } dark:text-slate-200 text-black`}
    >
      <FontAwesomeIcon icon={faGlobe} />
      Scrappr
    </Link>
  );
};

export default Logo;
