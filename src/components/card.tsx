// src/components/card.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Button from "./button";

interface CardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  buttonText: string;
  buttonFunction: () => void;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  buttonText,
  buttonFunction,
}) => {
  return (
    <div
      className="w-full lg:w-[calc(50%-1rem)] h-full md:min-h-[350px] lg:min-h-[350px] flex p-4 shadow-md dark:shadow-none dark:border-[2px] dark:border-slate-900 rounded-lg flex-wrap"
      style={{ maxWidth: "350px" }}
    >
      <div className="flex justify-start items-center p-4 dark:text-slate-200">
        <FontAwesomeIcon icon={icon} className="h-[35px] lg:h-[45px]" />
        <p className="font-bold ml-2 lg:ml-4">{title}</p>
      </div>
      <div className="flex flex-col items-start p-4 gap-4 dark:text-slate-400">
        <p className="text-[0.9rem] leading-7">{description}</p>
        <Button
          buttonText={buttonText}
          buttonTheme="dark"
          onClick={buttonFunction}
        />
      </div>
    </div>
  );
};

export default Card;
