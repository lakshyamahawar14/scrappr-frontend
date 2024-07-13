"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

nProgress.configure({ showSpinner: false });

const Loader: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      nProgress.start();
      const loaderBar = document.getElementById("loader-bar");
      if (loaderBar) {
        loaderBar.style.width = "100%";
      }
    };

    const handleComplete = () => {
      nProgress.done();
      const loaderBar = document.getElementById("loader-bar");
      if (loaderBar) {
        loaderBar.style.width = "0%";
      }
    };

    const originalPush = router.push;

    router.push = async (href: string, options?: any) => {
      handleStart();
      try {
        await originalPush(href, options);
        handleComplete();
      } catch (error) {
        console.error("Error navigating:", error);
        handleComplete();
      }
    };

    return () => {
      router.push = originalPush;
    };
  }, [router]);

  useEffect(() => {
    nProgress.done();
    const loaderBar = document.getElementById("loader-bar");
    if (loaderBar) {
      loaderBar.style.width = "0%";
    }
  }, [pathname, searchParams]);

  return (
    <div
      className="h-1 fixed top-0 left-0 right-0 bg-sky-400"
      id="loader-bar"
      style={{ width: "0%", transition: "width 0.3s ease-out" }}
    />
  );
};

export default Loader;
