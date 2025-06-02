// src/app/layout.tsx
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
  return ( // This is line 16
    

html
); }


The error `html is not defined` when referring to the `

html
); }
