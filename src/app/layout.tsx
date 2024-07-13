import type { Metadata } from "next";
import "./globals.css";

import { DarkModeStoreProvider } from "@/providers/dark-mode-store-provider";
import { MobileModeStoreProvider } from "@/providers/mobile-mode-store-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MainLoader from "@/components/mainloader";

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
    <html lang="en" className="overflow-hidden">
      <body>
        <MainLoader />
        <DarkModeStoreProvider>
          <MobileModeStoreProvider>
            <Header />
            {children}
            <Footer />
          </MobileModeStoreProvider>
        </DarkModeStoreProvider>
      </body>
    </html>
  );
}
