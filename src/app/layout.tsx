import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "./Components/Navigation/Navigation";

export const metadata: Metadata = {
  title: "Cookbook",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen w-screen">
        <Navigation />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
