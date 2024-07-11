const Intro = () => {
  return (
    <div
      id="intro"
      className="relative flex flex-col justify-center items-center h-full min-h-[80vh] md:h-[100vh] lg:h-[100vh] w-full p-6 pt-[75px] text-slate-700"
    >
      <h1 className="lg:w-[75%] w-full p-6 md:px-10 lg:px-16 font-extrabold text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
        Scrape Anything You Want From Internet!
      </h1>
      <p className="lg:w-[75%] w-full p-6 md:px-10 lg:px-16 text-justify text-[0.9rem] md:text-[1.1rem] lg:text-[1.25rem] leading-6">
        With Scrappr, you can extract Images, Videos, PDFs, and much more really
        fast. Easily capture content from any source. Effortlessly download and
        organize your data. Scrappr: Your ultimate tool for rapid data
        extraction and management.
      </p>
    </div>
  );
};

export default Intro;
