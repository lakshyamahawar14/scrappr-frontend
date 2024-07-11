"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faVideo,
  faFilePdf,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./button";

const tools = [
  {
    icon: faImage,
    title: "Image Scrappr",
    description:
      "You have to put your URL in order to extract all of its images. You can customize the image extraction by sending parameters like the number of images, time to extract, image type, etc.",
  },
  {
    icon: faVideo,
    title: "Video Scrappr",
    description:
      "You have to put your URL in order to extract all of its videos. You can customize the video extraction by sending parameters like the number of videos, time to extract, video type, etc.",
  },
  {
    icon: faFilePdf,
    title: "PDF Scrappr",
    description:
      "You have to put your URL in order to extract all of its PDFs. You can customize the PDF extraction by sending parameters like the number of PDFs, time to extract, PDF type, etc.",
  },
  {
    icon: faFileAlt,
    title: "Text Scrappr",
    description:
      "You have to put your URL in order to extract all of its text. You can customize the text extraction by sending parameters like the number of text, time to extract, text type, etc.",
  },
];

const Tools = () => {
  return (
    <div
      id="tools"
      className="relative flex flex-col justify-center items-center h-full min-h-[100vh] w-full p-6 pt-[75px] text-slate-700 bg-white"
    >
      <h1 className="lg:w-[75%] w-full p-6 md:px-10 lg:px-16 font-extrabold text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center">
        Our Tools
      </h1>
      <div className="w-full py-6 md:px-10 lg:px-16 flex flex-wrap justify-center items-center gap-8">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="w-full lg:w-[calc(50%-1rem)] h-full md:min-h-[350px] lg:min-h-[350px] flex p-4 shadow-md rounded-lg flex-wrap"
            style={{ maxWidth: "350px" }}
          >
            <div className="flex justify-start items-center p-4">
              <FontAwesomeIcon
                icon={tool.icon}
                className="h-[35px] lg:h-[45px]"
              />
              <p className="font-bold ml-2 lg:ml-4">{tool.title}</p>
            </div>
            <div className="flex flex-col items-start p-4 gap-4">
              <p className="text-[0.9rem] leading-6">{tool.description}</p>
              <Button
                buttonText="Try Now"
                buttonTheme="dark"
                onClick={() => {}}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
