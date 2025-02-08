
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Context from "@/Context/Context";
import { Suspense } from "react";
import SecondHeader from "@/components/SecondHeader/SecondHeader";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:"Wearista",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={ <div>loading...</div> }>
        <Context>
    <SecondHeader />
        {children}
        </Context>
        </Suspense>
      </body>
    </html>
  );
}
