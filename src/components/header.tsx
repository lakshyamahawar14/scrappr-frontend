"use client";

import { useRouter } from "next/navigation";
import Button from "./button";
import Logo from "./logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useDarkModeStore } from "@/providers/dark-mode-store-provider";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const { isDarkMode, toggleDarkMode } = useDarkModeStore((state) => state);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const element = document.getElementsByTagName("html")[0];
    if (!isDarkMode) {
      element.classList.remove("dark");
    } else {
      element.classList.add("dark");
    }
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  const changeTheme = () => {
    toggleDarkMode();
  };

  return (
    <header className="fixed z-[20] top-0 flex justify-between items-center h-16 px-6 md:px-10 lg:px-16 w-full bg-transparent backdrop-blur-lg">
      <div>
        <Logo logoTheme="dark" />
      </div>

      <div className="flex items-center gap-4 justify-center">
        <div className="flex justify-center items-center">
          <nav className="flex justify-center items-center gap-4 text-[0.9rem]">
            <Link
              href="/#tools"
              className="text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-400 font-semibold"
            >
              Tools
            </Link>
            <Link
              href="/#reviews"
              className="text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-400 font-semibold"
            >
              Reviews
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button
            buttonText="Log In"
            buttonTheme="light"
            onClick={() => {
              router.push("/login");
            }}
          />
          <Button
            buttonText="Sign Up"
            buttonTheme="dark"
            onClick={() => {
              router.push("/signup");
            }}
          />
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/lakshyamahawar14/scrappr-frontend"
            target="blank"
            className="flex justify-center items-center font-bold rounded"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="h-[1.5rem] text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-400"
            />
          </a>
        </div>
        <p
          className="flex items-center justify-center cursor-pointer"
          onClick={changeTheme}
        >
          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}
            className="h-[1.5rem] text-end text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-400"
          />
        </p>
        <p
          className="block md:hidden lg:hidden items-center justify-center cursor-pointer"
          onClick={() => {}}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="text-[1.5rem] text-end text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-400"
          />
        </p>
      </div>
    </header>
  );
};

export default Header;
