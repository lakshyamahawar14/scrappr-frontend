"use client";

import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Card from "./card";

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
      <h1 className="lg:w-[75%] w-full p-6 md:px-10 lg:px-16 font-extrabold text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center dark:text-slate-200">
        Reviews
      </h1>
      <div className="w-full py-6 md:px-10 lg:px-16 flex flex-wrap justify-center items-center gap-8">
        {reviews.map((review, index) => (
          <Card
            key={index}
            icon={review.icon}
            title={review.name}
            description={review.content}
            buttonText="Read More"
            buttonFunction={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
