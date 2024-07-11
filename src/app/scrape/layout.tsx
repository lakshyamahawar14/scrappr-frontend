import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Scrappr",
  description: "Scrape Images from Web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
