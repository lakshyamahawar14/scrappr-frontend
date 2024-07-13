"use client";

import Logo from "./logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faMoon,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useDarkModeStore } from "@/providers/dark-mode-store-provider";
import { useEffect, useState } from "react";
import { useMobileModeStore } from "@/providers/mobile-mode-store-provider";
import Redirector from "./redirector";
import Loader from "./loader";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore((state) => state);
  const [darkMode, setDarkMode] = useState(isDarkMode);
  const { isMobileMode, isMobileMenu, toggleMobileMenu } = useMobileModeStore(
    (state) => state
  );
  const [mobileMenu, setMobileMenu] = useState(isMobileMenu);

  useEffect(() => {
    const element = document.getElementsByTagName("html")[0];
    if (!isDarkMode) {
      element.classList.remove("dark");
    } else {
      element.classList.add("dark");
    }
    setDarkMode(isDarkMode);
    element.style.opacity = "1";
  }, [isDarkMode]);

  const changeTheme = () => {
    toggleDarkMode();
  };

  useEffect(() => {
    if (!isMobileMode) return;
    const element = document.getElementById("mainMenu");
    if (isMobileMenu) {
      element?.style.setProperty("display", "flex");
    } else {
      element?.style.setProperty("display", "none");
    }
    setMobileMenu(isMobileMenu);
  }, [isMobileMenu, isMobileMode]);

  const handleMobileMenuChange = () => {
    if (isMobileMode) toggleMobileMenu();
  };

  return (
    <header className="fixed z-[20] top-0 flex justify-between items-center h-[75px] px-12 md:px-16 lg:px-[5.5rem] w-full bg-transparent backdrop-blur-lg">
      <Loader />
      <div className="z-[25]">
        <Logo logoTheme="dark" />
      </div>

      <div
        id="mainMenu"
        className="hidden h-[100vh] md:h-full lg:h-full fixed lg:relative md:relative top-0 left-0 w-full md:w-auto lg:w-auto flex-col md:flex-row lg:flex-row md:flex lg:flex items-center gap-4 justify-center bg-white md:bg-transparent lg:bg-transparent dark:bg-black dark:md:bg-transparent dark:lg:bg-transparent"
      >
        <div className="flex justify-center items-center">
          <nav className="flex justify-center items-center gap-4 text-[0.9rem]">
            <Link
              href="/#tools"
              className="text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400 font-semibold"
            >
              Tools
            </Link>
            <Link
              href="/#reviews"
              className="text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400 font-semibold"
            >
              Reviews
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Redirector
            redirectorText={"Log In"}
            redirectorTheme={"light"}
            redirectorPath={"loginPage"}
          />
          <Redirector
            redirectorText={"Sign Up"}
            redirectorTheme={"dark"}
            redirectorPath={"signupPage"}
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
              className="h-[1.5rem] text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400"
            />
          </a>
        </div>
        <p
          className="flex items-center justify-center cursor-pointer"
          onClick={changeTheme}
        >
          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}
            className="h-[1.5rem] text-end text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400"
          />
        </p>
      </div>

      <p
        className="flex md:hidden lg:hidden items-center justify-center cursor-pointer z-[25]"
        onClick={handleMobileMenuChange}
      >
        <FontAwesomeIcon
          icon={mobileMenu ? faXmark : faBars}
          className="text-[1.5rem] text-end text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400"
        />
      </p>
    </header>
  );
};

export default Header;
