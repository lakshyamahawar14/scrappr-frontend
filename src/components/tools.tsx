import React from "react";
import {
  faImage,
  faVideo,
  faFilePdf,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./card";
import Heading from "./heading";

const tools = [
  {
    icon: faImage,
    title: "Image Scrappr",
    description:
      "You have to put your URL in order to extract all of its images. You can customize the image extraction by sending parameters like the number of images, time to extract, image type, etc.",
    pathName: "imageScrapprPage",
  },
  {
    icon: faVideo,
    title: "Video Scrappr",
    description:
      "You have to put your URL in order to extract all of its videos. You can customize the video extraction by sending parameters like the number of videos, time to extract, video type, etc.",
    pathName: "videoScrapprPage",
  },
  {
    icon: faFilePdf,
    title: "PDF Scrappr",
    description:
      "You have to put your URL in order to extract all of its PDFs. You can customize the PDF extraction by sending parameters like the number of PDFs, time to extract, PDF type, etc.",
    pathName: "pdfScrapprPage",
  },
  {
    icon: faFileAlt,
    title: "Text Scrappr",
    description:
      "You have to put your URL in order to extract all of its text. You can customize the text extraction by sending parameters like the number of text, time to extract, text type, etc.",
    pathName: "textScrapprPage",
  },
];

const Tools = () => {
  return (
    <div
      id="tools"
      className="relative flex flex-col justify-center items-center h-full min-h-[100vh] w-full pt-[75px] text-slate-700 dark:bg-black"
    >
      <Heading
        headingText={"Our Tools"}
        headingSize={"large"}
        className="text-center"
      />
      <div className="w-full p-6 md:px-10 lg:px-16 flex flex-wrap justify-center items-center gap-8">
        {tools.map((tool, index) => (
          <Card
            key={index}
            icon={tool.icon}
            title={tool.title}
            description={tool.description}
            redirectorStatus={true}
            redirectorText="Try Now"
            redirectorPath={tool.pathName}
            cardSize="large"
          />
        ))}
      </div>
    </div>
  );
};

export default Tools;
