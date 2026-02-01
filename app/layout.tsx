import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh | Revenue-Generating Apps",
  description:
    "HARSH Dev - Senior React Engineer specializing in high-performance, revenue-generating web applications. I build assets that scale.",
  keywords:
    "React Developer, Web Development, ROI, Software Engineer, High-Performance Apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
