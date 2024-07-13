"use client";

import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Card from "./card";
import Heading from "./heading";

const reviews = [
  {
    icon: faUser,
    name: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac gravida nisi. Nulla facilisi. Sed bibendum ex nec tortor consectetur, ac consectetur felis bibendum.",
  },
  {
    icon: faUser,
    name: "Jane Smith",
    content:
      "Pellentesque non justo at augue tempor laoreet. Sed id augue vitae ligula tincidunt convallis. Nulla ornare nibh eget ullamcorper bibendum.",
  },
  {
    icon: faUser,
    name: "Michael Brown",
    content:
      "Etiam quis ligula ac nisi hendrerit rutrum. Nullam nec mauris euismod, feugiat libero et, pellentesque odio. Integer congue ultrices ipsum a posuere.",
  },
  {
    icon: faUser,
    name: "Emily Davis",
    content:
      "Vestibulum laoreet condimentum eros, a interdum nisi consequat vel. Nam venenatis sapien quis purus pharetra suscipit. Morbi et orci vel augue dapibus elementum.",
  },
];

const Reviews = () => {
  return (
    <div
      id="reviews"
      className="flex flex-col justify-center items-center h-full w-full min-h-[100vh] p-6 pt-[75px] text-slate-700 dark:bg-black"
    >
      <Heading
        headingText={"Reviews"}
        headingSize={"large"}
        textCenter={true}
      />
      <div className="w-full p-6 md:px-10 lg:px-16 flex flex-wrap justify-center items-center gap-8">
        {reviews.map((review, index) => (
          <Card
            key={index}
            icon={review.icon}
            title={review.name}
            description={review.content}
            redirectorStatus={false}
            redirectorText=""
            redirectorPath={""}
            cardSize={"small"}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
