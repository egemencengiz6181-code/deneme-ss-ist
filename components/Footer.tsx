import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#faf8f2] dark:bg-[#060D18] border-t border-[#D4AF37]/20 mt-20">
      {/* Gold top divider */}
      <div className="divider-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="group-hover:scale-110 transition-transform duration-200">
                <Image src="/logo deneme üssü.png" alt="Deneme Üssü" width={44} height={44} className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[#D4AF37] font-black text-lg tracking-wider uppercase">Deneme</span>
                <span className="text-[#0a1628] dark:text-white font-bold text-xs tracking-[0.25em] uppercase">Üssü</span>
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              İstanbul&apos;un premium sınav ve eğitim kulübü. 7 aşamalı bilimsel sistem ile öğrencileri hedeflerine taşıyoruz.
            </p>
            {/* Instagram only */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/deneme_ussu?igsh=N3JoanZsNXFpN3Js"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              {[
                { href: "/kurumsal", label: "Kurumsal" },
                { href: "/basari-modelimiz", label: "7 Aşamalı Sistem" },
                { href: "/dijital-takip", label: "Dijital Takip" },
                { href: "/rehberlik", label: "Rehberlik" },
                { href: "/subelerimiz", label: "Şubelerimiz" },
                { href: "/iletisim", label: "İletişim" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-[#D4AF37] dark:hover:text-[#D4AF37] transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sistem */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase mb-4">Sistemimiz</h3>
            <ul className="space-y-3">
              {[
                "Deneme Seçimi",
                "Uygulama",
                "Sonuç Analizi",
                "Rehberlik Kontrolü",
                "Eksik Konu Tespiti",
                "Kişisel Program",
                "Destek Sistemi",
              ].map((item, i) => (
                <li key={item} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A8882A] flex items-center justify-center text-[#060D18] text-[10px] font-black">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase mb-4">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>İstanbul, Türkiye<br />13 Şube – Tüm Hizmet Bölgeleri</span>
              </li>
            </ul>
            <Link
              href="/iletisim"
              className="mt-6 inline-block bg-gradient-to-r from-[#D4AF37] to-[#A8882A] text-[#060D18] font-bold text-xs px-5 py-2.5 rounded-full hover:from-[#F0C040] hover:to-[#D4AF37] transition-all duration-200"
            >
              Ücretsiz Danışma Al
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-gold mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 dark:text-gray-500 text-xs">
          <p>© {year} Deneme Üssü. Tüm hakları saklıdır. <span className="text-[#D4AF37]">by Renee DesignLab</span></p>
          <a href="https://www.denemeusu.com" className="hover:text-[#D4AF37] transition-colors">www.denemeusu.com</a>
        </div>
      </div>
    </footer>
  );
}
