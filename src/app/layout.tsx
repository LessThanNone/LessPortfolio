import type { Metadata } from "next";
import { Hanken_Grotesk, Atkinson_Hyperlegible, Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
  weight: ["200", "300", "400", "500", "600"],
});

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  variable: "--font-atkinson",
  display: "swap",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Charless - Portofolio",
  description: "Portofolio Charless — Web, Mobile Development, Data, & AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={cn(hankenGrotesk.variable, atkinsonHyperlegible.variable, inter.variable, "font-sans", geist.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
