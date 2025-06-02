import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Imports the CSS file we just created

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Epic Tech AI Engineering",
  description: "Generate anything, create everything, no limits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    

html
); }
