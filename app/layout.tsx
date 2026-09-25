import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/lib/site";
import { branches } from "@/lib/branches";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f2" },
    { media: "(prefers-color-scheme: dark)", color: "#060D18" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: "%s | Deneme Üssü",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "deneme sınavı",
    "tyt deneme",
    "ayt deneme",
    "lgs deneme",
    "istanbul dershane",
    "sınav kulübü",
    "net analizi",
    "konu takip",
    "özel öğretim",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description:
      "7 Aşamalı bilimsel sistem ile TYT/AYT hedeflerinize ulaşın. Dijital takip, kişisel rehberlik, net analizleri.",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: "7 Aşamalı bilimsel sistem ile TYT/AYT hedeflerinize ulaşın.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  formatDetection: { telephone: false },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  sameAs: [site.instagram],
  areaServed: { "@type": "City", name: "İstanbul" },
  department: branches.map((b) => ({
    "@type": "EducationalOrganization",
    name: b.name,
    telephone: b.phone,
    ...(b.email && { email: b.email }),
    address: {
      "@type": "PostalAddress",
      streetAddress: b.address,
      addressLocality: b.district,
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <ThemeProvider>
          <a
            href="#icerik"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy-dark"
          >
            İçeriğe geç
          </a>
          <Navbar />
          <main id="icerik" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
