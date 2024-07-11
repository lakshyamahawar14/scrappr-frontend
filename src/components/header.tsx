"use client";

import { useRouter } from "next/navigation";
import Button from "./button";
import Logo from "./logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const router = useRouter();

  return (
    <header className="fixed z-20 top-0 flex justify-between items-center h-16 px-6 md:px-10 lg:px-16 w-full bg-transparent backdrop-blur-lg">
      <div>
        <Logo logoTheme="dark" />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center">
          <nav className="flex justify-center items-center gap-4">
            <Link
              href="/#tools"
              className="text-slate-700 hover:text-slate-900 font-semibold"
            >
              Tools
            </Link>
            <Link
              href="/#reviews"
              className="text-slate-700 hover:text-slate-900 font-semibold"
            >
              Reviews
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button
            buttonText="Log In"
            buttonTheme="light"
            onClick={() => {
              router.push("/login");
            }}
          />
          <Button
            buttonText="Sign Up"
            buttonTheme="dark"
            onClick={() => {
              router.push("/signup");
            }}
          />
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/lakshyamahawar14/cardricks"
            target="blank"
            className="flex justify-center items-center font-bold rounded"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-[1.5rem] text-slate-800 hover:text-slate-900"
            />
          </a>
        </div>
        <a
          className="block md:hidden lg:hidden items-center justify-center"
          onClick={() => {}}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="text-[1rem] text-end text-slate-800 hover:text-slate-900"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
