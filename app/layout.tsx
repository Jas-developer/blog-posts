import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Header} from "./components/header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Dev & SEO Blog | Jason Evaristo",
  description:
    "Jason Evaristo's web dev & SEO blog — practical guides on WordPress, local SEO, and website fixes to help your site bring in leads.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full p-4 flex flex-col">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 bg-background w-full flex-grow">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
