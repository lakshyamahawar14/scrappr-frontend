import Link from "next/link";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center h-full px-12 md:px-16 lg:px-[5.5rem] w-full dark:bg-black">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <span className="w-full my-6 text-center font-bold text-black dark:text-slate-200">
            Links
          </span>
          <nav className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-2 gap-x-6 pb-6 text-[0.9rem]">
            <Link
              href="/about"
              className="text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400 font-semibold"
            >
              About Us
            </Link>
            <Link
              href="/privacy-policy"
              className="text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400 font-semibold"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400 font-semibold"
            >
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="w-full my-6 text-center font-bold text-black dark:text-slate-200">
            Tools
          </span>
          <nav className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-2 gap-x-6 pb-6 text-[0.9rem]">
            <Link
              href="/scrape/image"
              className="text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400 font-semibold"
            >
              Image Scrappr
            </Link>
            <Link
              href="/scrape/video"
              className="text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400 font-semibold"
            >
              Video Scrappr
            </Link>
            <Link
              href="/scrape/pdf"
              className="text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400 font-semibold"
            >
              PDF Scrappr
            </Link>
            <Link
              href="/scrape/text"
              className="text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400 font-semibold"
            >
              Text Scrappr
            </Link>
          </nav>
        </div>
      </div>
      <div className=" text-black dark:text-slate-200 w-full text-[0.9rem] text-center my-4">
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
