"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/button";
import Layout from "@/components/layout";

export default function ScrapeImage() {
  const [url, setUrl] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [fetching, setFetching] = useState(false);

  const handleFetch = async () => {
    if (!url) return;

    setFetching(true);
    try {
      const response = await fetch(
        `/api/next/scrape/image?url=${encodeURIComponent(url)}&num=20`,
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

  return (
    <main>
      <div className="relative flex flex-col justify-center items-center h-full min-h-[100vh] w-full p-6 pt-[75px] text-slate-700 dark:bg-black">
        <h1 className="lg:w-[75%] w-full p-6 md:px-10 lg:px-16 font-extrabold text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center dark:text-slate-200">
          Image Scrappr
        </h1>
        <div className="flex w-full flex-col justify-center items-center gap-4">
          <div className="my-4 w-full flex justify-center items-center gap-2">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL"
              className="p-2 block text-[0.9rem] w-full min-w-[150px] max-w-[350px] bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-800 rounded-md shadow-sm focus:ring-slate-500 dark:focus:ring-slate-600 focus:border-slate-500 dark:focus:border-slate-600 text-slate-800 dark:text-slate-300 outline-none"
              required
            />

            <Button
              buttonText={fetching ? "Fetching..." : "Fetch"}
              buttonTheme="dark"
              onClick={handleFetch}
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="my-4 w-full flex flex-col justify-center items-center">
            {images.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-start h-full"
                  >
                    <Image
                      src={image}
                      width={250}
                      height={250}
                      style={{ width: "100%", height: "auto" }}
                      alt={`Scraped image ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-black dark:text-slate-400">
                Results will be displayed here
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
