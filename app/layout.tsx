import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Deneme Üssü | İstanbul'un Premium Sınav Kulübü",
    template: "%s | Deneme Üssü",
  },
  description:
    "Deneme Üssü, İstanbul merkezli premium eğitim ve sınav kulübü. 7 Aşamalı bilimsel sistem, dijital takip, kişisel rehberlik ve net analizleri ile TYT/AYT hedeflerinize ulaşın.",
  keywords: [
    "deneme sınavı",
    "tyt deneme",
    "ayt deneme",
    "istanbul dershane",
    "sınav kulübü",
    "net analizi",
    "konu takip",
    "özel öğretim",
  ],
  authors: [{ name: "Deneme Üssü" }],
  creator: "Deneme Üssü",
  metadataBase: new URL("https://www.denemeusu.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.denemeusu.com",
    siteName: "Deneme Üssü",
    title: "Deneme Üssü | İstanbul'un Premium Sınav Kulübü",
    description:
      "7 Aşamalı bilimsel sistem ile TYT/AYT hedeflerinize ulaşın. Dijital takip, kişisel rehberlik, net analizleri.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deneme Üssü | İstanbul'un Premium Sınav Kulübü",
    description: "7 Aşamalı bilimsel sistem ile TYT/AYT hedeflerinize ulaşın.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#060D18] text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
