import Logo from "./logo";

const MainLoader = () => {
  return (
    <div
      id="mainLoader"
      className="fixed top-0 left-0 flex flex-col justify-center items-center h-screen w-full bg-black z-[1000] text-slate-200"
    >
      <span className="font-bold text-[2rem]">Scrappr</span>
      <span className="text-[1rem]">Loading...</span>
    </div>
  );
};

export default MainLoader;
