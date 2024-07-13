import paths from "@/constants/paths";
import Link from "next/link";
import React from "react";

interface redirectorProps {
  redirectorText: string;
  redirectorTheme: string;
  redirectorPath: string;
}

const Redirector: React.FC<redirectorProps> = ({
  redirectorText,
  redirectorTheme,
  redirectorPath,
}) => {
  return (
    <Link
      href={paths.get(redirectorPath) || "/"}
      className={`font-bold py-2 px-4 rounded text-[0.8rem] ${
        redirectorTheme === "dark"
          ? "bg-slate-700 text-white hover:bg-slate-800"
          : "bg-white text-black hover:bg-slate-200"
      }`}
    >
      {redirectorText}
    </Link>
  );
};

export default Redirector;
