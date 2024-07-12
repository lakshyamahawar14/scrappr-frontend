"use client";

import React from "react";
import {
  faImage,
  faVideo,
  faFilePdf,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./card";
import { useRouter } from "next/navigation";

const tools = [
  {
    icon: faImage,
    title: "Image Scrappr",
    description:
      "You have to put your URL in order to extract all of its images. You can customize the image extraction by sending parameters like the number of images, time to extract, image type, etc.",
    path: "/scrape/image/",
  },
  {
    icon: faVideo,
    title: "Video Scrappr",
    description:
      "You have to put your URL in order to extract all of its videos. You can customize the video extraction by sending parameters like the number of videos, time to extract, video type, etc.",
    path: "/scrape/video/",
  },
  {
    icon: faFilePdf,
    title: "PDF Scrappr",
    description:
      "You have to put your URL in order to extract all of its PDFs. You can customize the PDF extraction by sending parameters like the number of PDFs, time to extract, PDF type, etc.",
    path: "/scrape/pdf/",
  },
  {
    icon: faFileAlt,
    title: "Text Scrappr",
    description:
      "You have to put your URL in order to extract all of its text. You can customize the text extraction by sending parameters like the number of text, time to extract, text type, etc.",
    path: "/scrape/text/",
  },
];

const Tools = () => {
  const router = useRouter();
  return (
    <div
      id="tools"
      className="relative flex flex-col justify-center items-center h-full min-h-[100vh] w-full p-6 pt-[75px] text-slate-700 dark:bg-black"
    >
      <h1 className="lg:w-[75%] w-full p-6 md:px-10 lg:px-16 font-extrabold text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center dark:text-slate-200">
        Our Tools
      </h1>
      <div className="w-full py-6 md:px-10 lg:px-16 flex flex-wrap justify-center items-center gap-8">
        {tools.map((tool, index) => (
          <Card
            key={index}
            icon={tool.icon}
            title={tool.title}
            description={tool.description}
            buttonText="Try Now"
            buttonFunction={() => {
              router.push(tool.path);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Tools;
