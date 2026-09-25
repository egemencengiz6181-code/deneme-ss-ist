import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const quickLinks = [
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/basari-modelimiz", label: "7 Aşamalı Sistem" },
  { href: "/dijital-takip", label: "Dijital Takip" },
  { href: "/rehberlik", label: "Rehberlik" },
  { href: "/subelerimiz", label: "Şubelerimiz" },
  { href: "/iletisim", label: "İletişim" },
];

const systemSteps = [
  "Deneme Seçimi",
  "Uygulama",
  "Sonuç Analizi",
  "Rehberlik Kontrolü",
  "Eksik Konu Tespiti",
  "Kişisel Program",
  "Destek Sistemi",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 bg-secondary/60 dark:bg-navy-dark border-t border-gold/15">
      <div className="divider-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group" aria-label="Deneme Üssü – Ana Sayfa">
              <Image
                src="/logo.png"
                alt=""
                width={44}
                height={44}
                className="object-contain group-hover:scale-110 transition-transform duration-200"
              />
              <span className="flex flex-col leading-none">
                <span className="text-gold-ink font-black text-lg tracking-wider uppercase">Deneme</span>
                <span className="text-foreground font-bold text-xs tracking-[0.25em] uppercase">Üssü</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              İstanbul&apos;un premium sınav ve eğitim kulübü. 7 aşamalı bilimsel sistem ile öğrencileri hedeflerine taşıyoruz.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram'da Deneme Üssü"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-gold-ink transition-all duration-200 hover:scale-110"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          {/* Quick Links */}
          <nav aria-label="Hızlı bağlantılar">
            <h2 className="text-gold-ink font-bold text-sm tracking-widest uppercase mb-4">Hızlı Bağlantılar</h2>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group text-muted-foreground text-sm hover:text-gold-ink transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-gold -ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sistem */}
          <div>
            <h2 className="text-gold-ink font-bold text-sm tracking-widest uppercase mb-4">Sistemimiz</h2>
            <ol className="space-y-3">
              {systemSteps.map((item, i) => (
                <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-navy-dark text-[10px] font-black">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-gold-ink font-bold text-sm tracking-widest uppercase mb-4">İletişim</h2>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 text-muted-foreground hover:text-gold-ink transition-colors">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-gold-ink transition-colors">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  İstanbul, Türkiye
                  <br />
                  {site.branchCount} Şube
                </span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                {site.hours}
              </li>
            </ul>
            <Link href="/iletisim" className="btn-primary mt-6 text-xs px-5 py-2.5">
              Ücretsiz Danışma Al
            </Link>
          </div>
        </div>

        <div className="divider-gold mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-xs">
          <p>
            © {year} Deneme Üssü. Tüm hakları saklıdır. <span className="text-gold-ink">by Renee DesignLab</span>
          </p>
          <a href={site.url} className="hover:text-gold-ink transition-colors">
            www.denemeusu.com
          </a>
        </div>
      </div>
    </footer>
  );
}
