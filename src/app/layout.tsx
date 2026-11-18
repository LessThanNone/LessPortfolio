import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charless — Portofolio Teknik Informatika",
  description: "Portofolio Charless, mahasiswa Teknik Informatika.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
