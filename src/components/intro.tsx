"use client";

import Image from "next/image";
import { useDarkModeStore } from "@/providers/dark-mode-store-provider";
import { useEffect, useState } from "react";

const Intro = () => {
  const { isDarkMode } = useDarkModeStore((state) => state);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      id="intro"
      className="relative flex flex-col justify-center items-center min-h-[100vh] w-full p-6 pt-[75px] text-slate-700 dark:bg-black"
    >
      <div className="w-full p-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-center items-center my-4 gap-6 w-full">
          <div className="flex flex-col w-full">
            <h1 className="font-extrabold text-[2rem] md:text-[2.5rem] lg:text-[3rem] dark:text-slate-200 my-6 w-full">
              Scrape Anything You Want From Internet!
            </h1>
            <p className="text-justify text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem] leading-7 text-slate-700 dark:text-slate-400 w-full">
              With Scrappr, you can extract Images, Videos, PDFs, and much more
              really fast. Easily capture content from any source. Effortlessly
              download and organize your data. Scrappr: Your ultimate tool for
              rapid data extraction and management.
            </p>
          </div>
          <div className="flex justify-center items-start w-full min-w-[400px]">
            <Image
              src={
                darkMode
                  ? "/images/image-scrappr-dark.png"
                  : "/images/image-scrappr-light.png"
              }
              width={2000}
              height={2000}
              alt={`image scrappr ${darkMode ? "dark" : "light"}`}
              className="rounded-md w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
