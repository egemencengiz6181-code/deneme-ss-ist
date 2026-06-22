"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/kurumsal", label: "Kurumsal" },
  {
    label: "Sistemimiz",
    children: [
      { href: "/basari-modelimiz", label: "7 Aşamalı Başarı Modeli" },
      { href: "/dijital-takip", label: "Dijital Takip Sistemi" },
      { href: "/rehberlik", label: "Rehberlik Sistemi" },
    ],
  },
  { href: "/subelerimiz", label: "Şubelerimiz" },
  { href: "/iletisim", label: "İletişim" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-[#D4AF37]/30 bg-transparent" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Açık moda geç" : "Koyu moda geç"}
      className="w-9 h-9 rounded-full border border-[#D4AF37]/40 flex items-center justify-center
        bg-transparent hover:bg-[#D4AF37]/10 transition-all duration-200 hover:border-[#D4AF37]/70
        text-[#D4AF37] hover:scale-110 active:scale-95"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#060D18]/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-lg shadow-black/10 dark:shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="group-hover:scale-110 transition-transform duration-200">
              <Image src="/logo deneme üssü.png" alt="Deneme Üssü" width={44} height={44} className="object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#D4AF37] font-black text-lg tracking-wider uppercase">Deneme</span>
              <span className="text-[#0a1628] dark:text-white font-bold text-xs tracking-[0.25em] uppercase">Üssü</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] transition-colors duration-200 text-sm font-medium">
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white/95 dark:bg-[#060D18]/95 backdrop-blur-md border border-[#D4AF37]/20 rounded-xl overflow-hidden py-2 shadow-xl shadow-black/10 dark:shadow-black/30"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-3 text-sm transition-colors duration-150 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] ${
                              isActive(child.href)
                                ? "text-[#D4AF37] bg-[#D4AF37]/10"
                                : "text-gray-600 dark:text-gray-300"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href!)
                      ? "text-[#D4AF37]"
                      : "text-gray-600 dark:text-gray-300 hover:text-[#D4AF37]"
                  }`}
                >
                  {link.label}
                  {isActive(link.href!) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#A8882A] rounded-full"
                    />
                  )}
                </Link>
              )
            )}
          </div>

          {/* CTA + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/iletisim"
              className="bg-gradient-to-r from-[#D4AF37] to-[#A8882A] text-[#060D18] font-bold text-sm px-5 py-2.5 rounded-full glow-gold hover:from-[#F0C040] hover:to-[#D4AF37] hover:scale-105 hover:ring-2 hover:ring-[#D4AF37]/40 hover:ring-offset-1 hover:ring-offset-transparent transition-all duration-200"
            >
              Ücretsiz Danışma
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#D4AF37] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menü"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white/98 dark:bg-[#060D18]/98 backdrop-blur-md border-t border-[#D4AF37]/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <div className="px-3 py-2 text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="block pl-6 pr-3 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:text-[#D4AF37] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive(link.href!)
                        ? "text-[#D4AF37] bg-[#D4AF37]/10"
                        : "text-gray-600 dark:text-gray-300 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-2">
                <Link
                  href="/iletisim"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-[#D4AF37] to-[#A8882A] text-[#060D18] font-bold text-sm px-5 py-3 rounded-full"
                >
                  Ücretsiz Danışma
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
