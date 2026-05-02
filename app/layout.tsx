import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ClientLoaderWrapper from "@/components/ClientLoaderWrapper";

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
        {/* ── MoreSugar Preloads ── */}
        <link
          rel="preload"
          href="/fonts/more-sugar/MoreSugar-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/more-sugar/MoreSugar-Thin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* ── ComicSans Preloads ── */}
        <link
          rel="preload"
          href="/fonts/LDF-ComicSans/LDFComicSansBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/LDF-ComicSans/LDFComicSans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/LDF-ComicSans/LDFComicSansLight.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <ClientLoaderWrapper>
          <Navbar />
          {children}
          <Footer />
        </ClientLoaderWrapper>
      </body>
    </html>
  );
}