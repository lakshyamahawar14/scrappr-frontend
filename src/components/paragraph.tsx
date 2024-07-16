import React, { ReactNode } from "react";

interface ParagraphProps {
  paragraphText: string | ReactNode;
  paragraphSize: string;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = (props) => {
  return (
    <p
      className={`dark:text-slate-400 text-slate-700 py-1 leading-7 ${
        props.paragraphSize === "large"
          ? "text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-medium"
          : "text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] font-normal"
      } ${props.className} break-words`}
    >
      {props.paragraphText}
    </p>
  );
};

export default Paragraph;
