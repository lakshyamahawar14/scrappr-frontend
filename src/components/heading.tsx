import React, { ReactNode } from "react";

interface HeadingProps {
  headingText: string | ReactNode;
  headingSize: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
  return (
    <h1
      className={`dark:text-slate-200 text-slate-800 py-1 ${
        props.headingSize === "large"
          ? "text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-extrabold"
          : props.headingSize === "small"
          ? "text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold"
          : "text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-bold"
      } ${props.className} break-words`}
    >
      {props.headingText}
    </h1>
  );
};

export default Heading;
