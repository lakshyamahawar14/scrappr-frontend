"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMoon,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useDarkModeStore } from "@/providers/dark-mode-store-provider";
import { useEffect, useState } from "react";
import { useMobileModeStore } from "@/providers/mobile-mode-store-provider";

const MenuUtils = () => {
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
    <div className="flex justify-center items-center gap-4">
      <span
        className="flex items-center justify-center cursor-pointer"
        onClick={changeTheme}
      >
        <FontAwesomeIcon
          icon={darkMode ? faSun : faMoon}
          className="h-[1.5rem] text-end text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400"
        />
      </span>
      <span
        className="flex md:hidden lg:hidden items-center justify-center cursor-pointer z-[25]"
        onClick={handleMobileMenuChange}
      >
        <FontAwesomeIcon
          icon={mobileMenu ? faXmark : faBars}
          className="text-[1.5rem] text-end text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400"
        />
      </span>
    </div>
  );
};

export default MenuUtils;
