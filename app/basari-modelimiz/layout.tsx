import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7 Aşamalı Başarı Modeli",
  description:
    "Deneme Üssü'nün bilimsel 7 aşamalı başarı modeli: Deneme seçimi, uygulama, sonuç analizi, rehberlik, eksik konu tespiti, kişisel program ve destek sistemi.",
  alternates: { canonical: "/basari-modelimiz" },
};

export default function BasariModelimizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
