import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const nunito = Nunito({
  // variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const quicksand = Quicksand({
//   // variable: "--font-geist-sans",
//   subsets: ["latin"],
// });


export const metadata: Metadata = {
  title: "Cynthia Abah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased`}
      >
          <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
            <Header />
           {children} 

          </div>
      </body>
    </html>
  );
}
