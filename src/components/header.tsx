import Logo from "./logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Suspense } from "react";
import Redirector from "./redirector";
import Loader from "./loader";
import MenuUtils from "./menuutils";

const Header = () => {
  return (
    <header className="fixed z-[20] top-0 flex justify-between items-center h-[75px] px-6 md:px-10 lg:px-16 w-full bg-transparent backdrop-blur-lg">
      <Suspense fallback={<>Loading...</>}>
        <Loader />
      </Suspense>

      <div className="z-[25]">
        <Logo logoTheme="dark" />
      </div>

      <div className="flex justify-center items-center gap-4">
        <div
          id="mainMenu"
          className="hidden h-[100vh] md:h-full lg:h-full fixed lg:relative md:relative top-0 left-0 w-full md:w-auto lg:w-auto flex-col md:flex-row lg:flex-row md:flex lg:flex items-center gap-4 justify-center bg-white md:bg-transparent lg:bg-transparent dark:bg-black dark:md:bg-transparent dark:lg:bg-transparent"
        >
          <div className="flex justify-center items-center">
            <nav className="flex flex-col md:flex-row justify-center items-center gap-4 text-[0.9rem]">
              <Link
                href="/#tools"
                className="text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400 font-semibold"
              >
                Tools
              </Link>
              <Link
                href="/#reviews"
                className="text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400 font-semibold"
              >
                Reviews
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Redirector
              redirectorText={"Log In"}
              redirectorTheme={"light"}
              redirectorPath={"loginPage"}
            />
            <Redirector
              redirectorText={"Sign Up"}
              redirectorTheme={"dark"}
              redirectorPath={"signupPage"}
            />
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/lakshyamahawar14/scrappr-frontend"
              target="blank"
              className="flex justify-center items-center font-bold rounded"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="h-[1.5rem] text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-slate-400"
              />
            </a>
          </div>
        </div>
        <MenuUtils />
      </div>
    </header>
  );
};

export default Header;
