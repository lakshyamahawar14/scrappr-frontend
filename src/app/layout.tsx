import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
