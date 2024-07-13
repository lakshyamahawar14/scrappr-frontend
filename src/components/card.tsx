import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Redirector from "./redirector";
import Heading from "./heading";
import Paragraph from "./paragraph";

interface CardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  redirectorStatus: boolean;
  redirectorText: string;
  redirectorPath: string;
  cardSize: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  redirectorStatus,
  redirectorText,
  redirectorPath,
  cardSize,
}) => {
  return (
    <div
      className="w-full lg:w-[calc(50%)] h-full flex flex-col p-4 customBorder"
      style={{
        maxWidth: cardSize === "large" ? "350px" : "350px",
        minHeight: cardSize === "large" ? "400px" : "350px",
      }}
    >
      <div className="flex justify-start items-center p-4 dark:text-slate-200 gap-2 w-full">
        <FontAwesomeIcon
          icon={icon}
          className="h-[20px] md:h-[25px] lg:h-[30px]"
        />
        <Heading headingText={title} headingSize={"small"} textCenter={false} />
      </div>
      <div className="flex flex-col items-start p-4 gap-4 dark:text-slate-400 flex-grow">
        <Paragraph paragraphText={description} paragraphSize="small" />
        {redirectorStatus && (
          <Redirector
            redirectorText={redirectorText}
            redirectorTheme={"dark"}
            redirectorPath={redirectorPath}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
