import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Scrappr",
  description: "Sign up in Scrappr.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
