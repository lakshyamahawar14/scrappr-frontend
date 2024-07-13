import React from "react";

interface HeadingProps {
  headingText: string;
  headingSize: string;
  textCenter: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  headingText,
  headingSize,
  textCenter,
}) => {
  return (
    <h1
      className={`w-full text-center text-slate-900 dark:text-slate-200 py-3 ${
        headingSize === "large"
          ? "text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-extrabold"
          : "text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-bold"
      } ${textCenter ? "text-center" : "text-start"}`}
    >
      {headingText}
    </h1>
  );
};

export default Heading;
