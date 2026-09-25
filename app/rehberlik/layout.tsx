import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rehberlik Sistemi",
  description:
    "Deneme Üssü rehberlik sistemi: Haftalık birebir görüşmeler, gelişim takibi, etüt programları, grup çalışmaları ve özel ders yönlendirmesi.",
  alternates: { canonical: "/rehberlik" },
};

export default function RehberlikLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
