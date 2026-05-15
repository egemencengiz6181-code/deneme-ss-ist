import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Şubelerimiz",
  description:
    "Deneme Üssü'nün İstanbul genelindeki 13 şubesini keşfedin. Sarıyer, Esenler, Küçükçekmece, Bakırköy, Bahçelievler, Büyükçekmece ve daha fazlası.",
};

export default function SubelerimizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
