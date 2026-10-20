import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saira | Frontend & MERN Stack Developer Portfolio",
  description: "Official portfolio of Saira, showcasing Next.js, React, Tailwind CSS, Bootstrap, HeroUI, MUI, MERN Stack (Node.js, Express, MongoDB, Mongoose), and API integration work.",
  keywords: ["Saira portfolio", "Frontend Developer", "MERN Stack Developer", "Next.js", "React Developer", "Tailwind CSS", "API Integration", "MaxRemind", "CodeBotx"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 bg-grid-pattern selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main className="flex-1 pt-24 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
