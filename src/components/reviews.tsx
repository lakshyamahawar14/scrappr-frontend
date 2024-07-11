"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "./button";

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
      className="flex flex-col justify-center items-center h-full w-full min-h-[100vh] p-6 pt-[75px] bg-white text-slate-700"
    >
      <h1 className="lg:w-[75%] w-full p-6 md:px-10 lg:px-16 font-extrabold text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center">
        Reviews
      </h1>
      <div className="w-full py-6 md:px-10 lg:px-16 flex flex-wrap justify-center items-center gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="w-full lg:w-[calc(50%-1rem)] h-full md:min-h-[320px] lg:min-h-[320px] flex justify-between p-4 shadow-md rounded-lg flex-col"
            style={{
              maxWidth: "320px",
            }}
          >
            <div className="flex justify-start items-center p-4">
              <FontAwesomeIcon
                icon={review.icon}
                className="h-[35px] lg:h-[45px]"
              />
              <p className="font-bold ml-2 lg:ml-4">{review.name}</p>
            </div>
            <div className="flex flex-col justify-between items-start p-4 gap-4">
              <p className="text-[0.9rem] leading-6">{review.content}</p>
              <Button
                buttonText="Read More"
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

export default Reviews;
