// import type { Metadata } from "next";
// import "./globals.css";
// import Footer from "@/components/Footer"
// import Navbar from "@/components/Navbar"
// import ClientLoaderWrapper from "@/components/ClientLoaderWrapper";
// export const metadata: Metadata = {
//   title: "The Makhana Man",
//   description: "The Makhana Man - Premium Makhana Products",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link href="https://fonts.googleapis.com/css2?family=Comic+Relief:wght@400;700&display=swap" rel="stylesheet"></link>
//       </head>
//       <body
//         className={`antialiased`}
//       >
//         <ClientLoaderWrapper>
//           <Navbar />
//           {children}
//           <Footer />
//         </ClientLoaderWrapper>
//       </body>
//     </html>
//   );
// }


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
        <link
          rel="preload"
          href="/fonts/more-sugar/MoreSugar-Regular.ttf"
          as="font"
          type="font/truetype"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/LDF-ComicSans/LDFComicSansBold.ttf"
          as="font"
          type="font/truetype"
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