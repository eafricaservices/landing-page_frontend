import React from 'react'
import type { Metadata } from "next";
import { poppins } from "./ui/fonts";
import "./globals.css";



export const metadata: Metadata = {
  title: "E-Africa",
  description: "This project is for developing teh frontend of the E-Africa platform",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
