import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurumsal | Biz Kimiz",
  description:
    "Deneme Üssü hakkında: Misyon, vizyon, değerlerimiz ve İstanbul merkezli premium sınav kulübümüzün hikayesi.",
};

export default function KurumsalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
