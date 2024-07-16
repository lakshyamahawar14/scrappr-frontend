"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/button";
import Input from "@/components/input";
import Heading from "@/components/heading";
import Paragraph from "@/components/paragraph";

export default function ScrapeImage() {
  const [url, setUrl] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [fetching, setFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 20;

  const handleFetch = async () => {
    if (!url) return;

    setFetching(true);
    try {
      const response = await fetch(
        `/api/next/scrape/image?url=${encodeURIComponent(url)}&num=100`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }

      const data = await response.json();

      if (data && data.data.image_urls) {
        setImages(data.data.image_urls);
        setError(null);
        setCurrentPage(1);
      } else {
        throw new Error("No images found in the response");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unknown error occurred");
      }
      setImages([]);
    } finally {
      setFetching(false);
    }
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <main>
      <div className="relative flex flex-col justify-start items-center h-full min-h-[100vh] w-full pt-[75px] text-slate-700 dark:bg-black">
        <div className="w-full p-6 md:px-10 lg:px-16 flex flex-col justify-center items-center gap-6">
          <Heading
            headingText={"Image Scrappr"}
            headingSize={"large"}
            className="text-center"
          />
          <div className="flex w-full flex-col justify-center items-center gap-6">
            <div className="w-full flex justify-center items-center gap-2">
              <div className="w-full min-w-[150px] max-w-[350px]">
                <Input
                  inputType={"text"}
                  inputId={"url"}
                  inputName={"url"}
                  placeholder={"Enter URL"}
                  isRequired={true}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>

              <Button
                buttonText={fetching ? "Fetching..." : "Fetch"}
                buttonTheme={"dark"}
                isDisabled={fetching}
                onClick={handleFetch}
              />
            </div>
            {images.length === 0 && (
              <p className="my-4 text-center text-black dark:text-slate-400">
                Results will be displayed here
              </p>
            )}
            {images.length > 0 && (
              <>
                <div className="my-4 gap-2 flex justify-center items-center w-full text-black dark:text-slate-200">
                  <Button
                    buttonText={"<"}
                    buttonTheme={"dark"}
                    isDisabled={currentPage === 1}
                    onClick={handlePreviousPage}
                  />
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    buttonText={">"}
                    buttonTheme={"dark"}
                    isDisabled={currentPage === totalPages}
                    onClick={handleNextPage}
                  />
                </div>
                <div className="my-4 w-full flex flex-col justify-center items-center">
                  {currentImages.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentImages.map((image, index) => (
                        <div
                          key={index}
                          className="flex justify-center items-start h-full"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <Image
                            src={image}
                            width={250}
                            height={250}
                            layout="responsive"
                            objectFit="cover"
                            alt={`Scraped image ${
                              indexOfFirstImage + index + 1
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Paragraph
                      paragraphText={"No images found"}
                      paragraphSize="small"
                    />
                  )}
                </div>
              </>
            )}
            {error && <p className="my-4 text-red-500 text-center">{error}</p>}
          </div>
        </div>
      </div>
    </main>
  );
}
