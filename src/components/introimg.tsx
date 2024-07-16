"use client";

import { useDarkModeStore } from "@/providers/dark-mode-store-provider";
import Image from "next/image";
import { useEffect, useState } from "react";

const IntroImg = () => {
  const { isDarkMode } = useDarkModeStore((state) => state);
  const [darkMode, setDarkMode] = useState(isDarkMode);

  useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);
  return (
    <div className="relative customBorder">
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
      />
    </div>
  );
};

export default IntroImg;
