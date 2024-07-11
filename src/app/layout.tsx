import type { Metadata } from "next";
import "./globals.css";

import { DarkModeStoreProvider } from "@/providers/dark-mode-store-provider";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Scrappr | Get Whatever You Want From Web",
  description:
    "Scrappr is a online web scrapping tool that supports Image Scrapping, PDF Scrapping etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body>
        <DarkModeStoreProvider>{children}</DarkModeStoreProvider>
      </body>
    </html>
  );
}
