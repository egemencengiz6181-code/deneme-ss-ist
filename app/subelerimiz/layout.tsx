import type { Metadata } from "next";
import { branches } from "@/lib/branches";

export const metadata: Metadata = {
  title: "Şubelerimiz",
  description:
    `Deneme Üssü'nün İstanbul genelindeki ${branches.length} şubesini keşfedin. Sarıyer, Esenler, Küçükçekmece, Bakırköy, Bahçelievler, Büyükçekmece ve daha fazlası.`,
  alternates: { canonical: "/subelerimiz" },
};

export default function SubelerimizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
