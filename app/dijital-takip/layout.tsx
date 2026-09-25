import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dijital Deneme Takip Sistemi",
  description:
    "Deneme Üssü dijital takip sistemi: Net grafikleri, hata defteri, Excel/Google Sheets altyapısı ve gamification ödülleri ile TYT/AYT gelişiminizi takip edin.",
  alternates: { canonical: "/dijital-takip" },
};

export default function DijitalTakipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
