import React from "react";
import type { Metadata } from "next";
import { poppins } from "./ui/fonts";
import "./globals.css";
import Header from "./ui/Header"

export const metadata: Metadata = {
  title: "E-Africa",
  description: "This project is for developing the frontend of the E-Africa platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/success.webp" as="image" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
