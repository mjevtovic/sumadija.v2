import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "FK Šumadija 1903 - Najstariji fudbalski klub u Srbiji",
  description: "Zvanična stranica FK Šumadija 1903 iz Kragujevca. Osnovan 1903. godine - najstariji fudbalski klub u Srbiji. Pratite vesti, utakmice, rezultate i upišite se u omladinsku školu.",
  keywords: "FK Šumadija 1903, najstariji fudbalski klub u Srbiji, Kragujevac, fudbal, omladinska škola, balon sala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
