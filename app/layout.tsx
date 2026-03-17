import type { Metadata } from "next";
import { Comic_Relief, Comic_Neue } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "The Makhana Man",
  description: "The Makhana Man - Premium Makhana Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Comic+Relief:wght@400;700&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
