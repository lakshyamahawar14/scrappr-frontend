"use client";

import Image from "next/image";
import { useDarkModeStore } from "@/providers/dark-mode-store-provider";
import { useEffect, useState } from "react";
import Heading from "./heading";
import Paragraph from "./paragraph";

const Intro = () => {
  const { isDarkMode } = useDarkModeStore((state) => state);
  const [darkMode, setDarkMode] = useState(isDarkMode);

  useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      id="intro"
      className="relative flex flex-col justify-center items-center min-h-[100vh] w-full p-6 pt-[75px] text-slate-700 dark:bg-black"
    >
      <div className="w-full p-6 md:px-10 lg:px-16 flex flex-col lg:flex-row justify-center items-center gap-6">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col w-full">
            <Heading
              headingText={"Scrape Anything You Want From Internet!"}
              headingSize={"large"}
              textCenter={false}
            />
            <Paragraph
              paragraphText={
                "With Scrappr, you can extract Images, Videos, PDFs, and much more really fast. Easily capture content from any source. Effortlessly download and organize your data. Scrappr: Your ultimate tool for rapid data extraction and management."
              }
              paragraphSize={"large"}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-start">
          <div className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="relative rounded-md overflow-hidden shadow-2xl dark:shadow-none dark:border-[1px] dark:border-slate-800">
              <Image
                src={
                  darkMode
                    ? "/images/image-scrappr-dark.png"
                    : "/images/image-scrappr-light.png"
                }
                width={800}
                height={800}
                priority={true}
                alt={`image scrappr ${darkMode ? "dark" : "light"}`}
                className={`rounded-xl`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
