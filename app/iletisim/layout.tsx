import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Ücretsiz Danışma",
  description:
    "Deneme Üssü ile iletişime geçin. Ücretsiz danışma randevusu alın, sorularınızı sorun. En geç 24 saat içinde yanıt veririz.",
  alternates: { canonical: "/iletisim" },
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
