import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center h-full p-6 px-6 md:px-10 lg:px-16 w-full bg-slate-800">
      <span className="w-full my-4 text-center">
        <Logo logoTheme="light" />
      </span>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <span className="w-full my-6 text-center font-bold text-slate-200">
            Links
          </span>
          <nav className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-2 gap-x-6 pb-6 text-[0.9rem]">
            <a href="#" className="text-white hover:text-slate-200">
              About Us
            </a>
            <a href="#" className="text-white hover:text-slate-200">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-slate-200">
              Terms and Conditions
            </a>
            <a href="#" className="text-white hover:text-slate-200">
              Contact Us
            </a>
          </nav>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="w-full my-6 text-center font-bold text-slate-200">
            Tools
          </span>
          <nav className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-2 gap-x-6 pb-6 text-[0.9rem]">
            <a href="#" className="text-white hover:text-slate-200">
              Image Scrappr
            </a>
            <a href="#" className="text-white hover:text-slate-200">
              Video Scrappr
            </a>
            <a href="#" className="text-white hover:text-slate-200">
              PDF Scrappr
            </a>
            <a href="#" className="text-white hover:text-slate-200">
              Text Scrappr
            </a>
          </nav>
        </div>
      </div>
      <div className="text-slate-200 w-full text-[0.9rem] text-center my-4">
        &copy; {new Date().getFullYear()}
        <span className="px-2">
          <Logo logoTheme="light" />
        </span>
        All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
