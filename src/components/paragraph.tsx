import React from "react";

interface ParagraphProps {
  paragraphText: string;
  paragraphSize: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
  paragraphText,
  paragraphSize,
}) => {
  return (
    <p
      className={`text-slate-700 dark:text-slate-400 py-3 leading-7 ${
        paragraphSize === "large"
          ? "text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-medium"
          : "text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] font-normal"
      }`}
    >
      {paragraphText}
    </p>
  );
};

export default Paragraph;
