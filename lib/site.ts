import { branches } from "./branches";

export const site = {
  name: "Deneme Üssü",
  url: "https://www.denemeusu.com",
  title: "Deneme Üssü | İstanbul'un Premium Sınav Kulübü",
  description:
    "Deneme Üssü, İstanbul merkezli premium eğitim ve sınav kulübü. 7 Aşamalı bilimsel sistem, dijital takip, kişisel rehberlik ve net analizleri ile TYT/AYT hedeflerinize ulaşın.",
  phone: "+90 212 551 30 30",
  phoneHref: "tel:+902125513030",
  email: "info@denemeusu.com",
  instagram: "https://www.instagram.com/deneme_ussu",
  hours: "Pzt–Cmt: 09:00 – 20:00",
  branchCount: branches.length,
  successRate: "%91.6",
} as const;

export const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/kurumsal", label: "Kurumsal" },
  {
    label: "Sistemimiz",
    children: [
      { href: "/basari-modelimiz", label: "7 Aşamalı Başarı Modeli", desc: "Seçimden desteğe bilimsel döngü" },
      { href: "/dijital-takip", label: "Dijital Takip Sistemi", desc: "Net grafikleri ve hata defteri" },
      { href: "/rehberlik", label: "Rehberlik Sistemi", desc: "Haftalık birebir görüşmeler" },
    ],
  },
  { href: "/subelerimiz", label: "Şubelerimiz" },
  { href: "/iletisim", label: "İletişim" },
] as const;
