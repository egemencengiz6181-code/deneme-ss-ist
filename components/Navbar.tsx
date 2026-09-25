"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { navLinks } from "@/lib/site";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration guard: theme is only known on the client
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full border border-gold/30" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Açık moda geç" : "Koyu moda geç"}
      title={isDark ? "Açık mod" : "Koyu mod"}
      className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center
        hover:bg-gold/10 transition-all duration-200 hover:border-gold/70
        text-gold-ink hover:scale-110 active:scale-95"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label="Deneme Üssü – Ana Sayfa">
      <Image
        src="/logo.png"
        alt=""
        width={44}
        height={44}
        priority
        className="object-contain group-hover:scale-110 transition-transform duration-200"
      />
      <span className="flex flex-col leading-none">
        <span className="text-gold-ink font-black text-lg tracking-wider uppercase">Deneme</span>
        <span className="text-foreground font-bold text-xs tracking-[0.25em] uppercase">Üssü</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus whenever the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setDropdownOpen(false);
  }

  // Escape closes menus; lock page scroll behind the mobile menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href;
  const solid = scrolled || menuOpen;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 border-b ${
        solid
          ? "bg-background/90 backdrop-blur-xl border-gold/15 shadow-lg shadow-navy/5 dark:shadow-black/30"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav aria-label="Ana menü" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              "children" in link ? (
                <div
                  key={link.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  onBlur={(e) => {
                    if (!dropdownRef.current?.contains(e.relatedTarget as Node)) setDropdownOpen(false);
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={dropdownOpen}
                    aria-controls="sistem-menu"
                    onClick={() => setDropdownOpen((o) => !o)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-gold-ink ${
                      link.children.some((c) => isActive(c.href)) ? "text-gold-ink" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        id="sistem-menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2 w-72"
                      >
                        <div className="bg-card/95 backdrop-blur-xl border border-gold/20 rounded-2xl overflow-hidden p-2 shadow-xl shadow-navy/10 dark:shadow-black/40">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              aria-current={isActive(child.href) ? "page" : undefined}
                              className={`block rounded-xl px-4 py-3 transition-colors duration-150 hover:bg-gold/10 ${
                                isActive(child.href) ? "bg-gold/10" : ""
                              }`}
                            >
                              <span className={`block text-sm font-semibold ${isActive(child.href) ? "text-gold-ink" : "text-foreground"}`}>
                                {child.label}
                              </span>
                              <span className="block text-xs text-muted-foreground mt-0.5">{child.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href) ? "text-gold-ink" : "text-muted-foreground hover:text-gold-ink"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-gold to-gold-dark rounded-full"
                    />
                  )}
                </Link>
              )
            )}
          </div>

          {/* CTA + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/iletisim" className="btn-primary text-sm px-5 py-2.5">
              Ücretsiz Danışma
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 text-foreground hover:text-gold-ink transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={menuOpen}
              aria-controls="mobil-menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobil-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-y-auto h-[calc(100svh-4rem)] border-t border-gold/10 bg-background"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                "children" in link ? (
                  <div key={link.label} className="pt-2">
                    <div className="px-3 py-2 text-gold-ink text-xs font-bold tracking-widest uppercase">
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        aria-current={isActive(child.href) ? "page" : undefined}
                        className={`block pl-6 pr-3 py-2.5 text-sm rounded-lg transition-colors ${
                          isActive(child.href)
                            ? "text-gold-ink bg-gold/10"
                            : "text-muted-foreground hover:text-gold-ink hover:bg-gold/5"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive(link.href)
                        ? "text-gold-ink bg-gold/10"
                        : "text-foreground hover:text-gold-ink hover:bg-gold/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-4">
                <Link
                  href="/iletisim"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary w-full text-sm px-5 py-3"
                >
                  Ücretsiz Danışma
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
