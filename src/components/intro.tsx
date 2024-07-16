import Heading from "./heading";
import IntroImg from "./introimg";
import Paragraph from "./paragraph";

const Intro = () => {
  return (
    <div
      id="intro"
      className="relative flex flex-col justify-center items-center min-h-[100vh] w-full pt-[75px] text-slate-700 gradientBg"
    >
      <div className="w-full p-6 md:px-10 lg:px-16 flex flex-col lg:flex-row justify-center items-center gap-6">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col w-full">
            <Heading
              headingText={"Scrape Anything You Want From Internet!"}
              headingSize={"large"}
            />
            <Paragraph
              paragraphText={
                "With Scrappr, you can extract Images, Videos, PDFs, and much more really fast. Easily capture content from any source. Effortlessly download and organize your data. Scrappr: Your ultimate tool for rapid data extraction and management."
              }
              paragraphSize={"large"}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-start">
          <div className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
            <IntroImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
