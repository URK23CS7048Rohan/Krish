import type { Metadata } from "next";
import { Bebas_Neue, Caveat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Navbar from "@/components/Navbar";

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Portfolio | Visual Arts",
  description: "Expressive artistic portfolio featuring visual arts, design, and illustration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${caveat.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink selection:bg-hot-pink selection:text-white">
        <SmoothScrolling>
          <Navbar />
          <main className="flex-grow pt-24">{children}</main>
        </SmoothScrolling>
      </body>
    </html>
  );
}
