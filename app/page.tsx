"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Trophy,
  Target,
  BarChart3,
  BookOpen,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Medal,
  Zap,
  Shield,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Marquee } from "@/components/ui/Marquee";

const stats = [
  { value: "13+", label: "Şube", icon: Shield },
  { value: "500+", label: "Öğrenci", icon: Users },
  { value: "%91.6", label: "Başarı Oranı", icon: Trophy },
  { value: "7", label: "Aşamalı Sistem", icon: Star },
];

const systemCards = [
  {
    step: 1,
    title: "Deneme Seçimi",
    desc: "Seviyene uygun Kolay, Orta veya Zor denemelerden birini seç. Rehberin en iyi planı oluşturur.",
    icon: Target,
    href: "/basari-modelimiz",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    step: 2,
    title: "Deneme Uygulama",
    desc: "Gerçek sınav süresi, optik form kullanımı ve disiplinli ortamda deneme uygula.",
    icon: Zap,
    href: "/basari-modelimiz",
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    step: 3,
    title: "Sonuç Analizi",
    desc: "Net puanın, sıralaman ve ders bazlı başarı oranların anlık olarak hesaplanır.",
    icon: BarChart3,
    href: "/basari-modelimiz",
    color: "from-[#D4AF37]/20 to-[#A8882A]/10",
  },
  {
    step: 4,
    title: "Rehberlik Kontrolü",
    desc: "Haftalık birebir görüşmeler, gelişim takibi ve yanlış deneme seçimlerinin düzeltilmesi.",
    icon: Users,
    href: "/rehberlik",
    color: "from-green-500/20 to-green-600/10",
  },
  {
    step: 5,
    title: "Eksik Konu Tespiti",
    desc: "Yanlışların konulara bağlanması, zayıf konu listesi ve önceliklendirme sistemi.",
    icon: BookOpen,
    href: "/basari-modelimiz",
    color: "from-[#C41E3A]/20 to-[#C41E3A]/10",
  },
  {
    step: 6,
    title: "Kişisel Program",
    desc: "Eksik odaklı ders dağılımı, haftalık çalışma planı ve tekrar+deneme dengesi.",
    icon: Medal,
    href: "/basari-modelimiz",
    color: "from-orange-500/20 to-orange-600/10",
  },
];

const features = [
  { icon: BarChart3, title: "Dijital Net Takibi", desc: "TYT/AYT netlerinizi haftalık grafiklerle takip edin." },
  { icon: Target, title: "Konu Bazlı Analiz", desc: "Her hata hangi konudan geldiğini tespit edin." },
  { icon: TrendingUp, title: "Sürekli Gelişim", desc: "Net artışı, ders bazlı grafik ve motivasyon ödülleri." },
  { icon: Users, title: "Rehberlik Desteği", desc: "Etüt, grup ve özel ders yönlendirmesi ile yanınızdayız." },
];

const testimonials = [
  { name: "Ayşe K.", score: "TYT: 87.5 Net", quote: "Eksik konularımı fark ettim. 3 ayda netlerim %40 arttı!", avatar: "A" },
  { name: "Mehmet T.", score: "AYT Mat: 34 Net", quote: "Dijital takip sistemi inanılmaz. Her hafta gelişimimi grafikle görüyorum.", avatar: "M" },
  { name: "Zeynep A.", score: "Top 5% Sıralama", quote: "Rehberim doğru stratejiyi belirledi. Hayalimki üniversiteye girdim!", avatar: "Z" },
  { name: "Burak S.", score: "TYT: 92.3 Net", quote: "Hata defteri sayesinde aynı yanlışları tekrar yapmıyorum.", avatar: "B" },
  { name: "Selin Y.", score: "AYT: 78 Net", quote: "7 aşamalı sistem gerçekten işe yarıyor. Her adımda büyüdtüm.", avatar: "S" },
  { name: "Can D.", score: "Boğaziçi Kazandı", quote: "Kişisel programım zayıf konularıma odaklanmamı sağladı.", avatar: "C" },
  { name: "Elif Ö.", score: "TYT: 95.0 Net", quote: "Rehberlik görüşmeleri motivasyonumu hiç düşürmedi.", avatar: "E" },
  { name: "Ali R.", score: "ODTÜ Kazandı", quote: "Net artışım haftadan haftaya grafikte görünür hale geldi.", avatar: "A" },
  { name: "Deniz B.", score: "AYT Bio: 28 Net", quote: "Gamification sistemi beni sürekli motive etti!", avatar: "D" },
];

function TestimonialCard({ name, score, quote, avatar }: (typeof testimonials)[0]) {
  return (
    <div className="w-52 glass rounded-xl p-4 border border-[#D4AF37]/15 hover:border-[#D4AF37]/30 transition-colors">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A8882A] flex items-center justify-center text-[#060D18] font-black text-sm flex-shrink-0">
          {avatar}
        </div>
        <div className="min-w-0">
          <div className="text-white font-bold text-sm leading-tight truncate">{name}</div>
          <div className="text-[#D4AF37] text-xs font-semibold">{score}</div>
        </div>
      </div>
      <p className="text-gray-400 text-xs leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
    </div>
  );
}

function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.94]);

  // Cursor parallax
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 40, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 40, damping: 20 });

  // Counter animation values
  const [counted, setCounted] = useState(false);
  const [counts, setCounts] = useState({ net: 0, branches: 0, students: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      rawX.set(((e.clientX - cx) / cx) * 18);
      rawY.set(((e.clientY - cy) / cy) * 12);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  useEffect(() => {
    if (counted) return;
    setCounted(true);
    const targets = { net: 91, branches: 13, students: 500 };
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCounts({
        net: Math.round(ease * targets.net),
        branches: Math.round(ease * targets.branches),
        students: Math.round(ease * targets.students),
      });
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [counted]);

  const tickerItems = [
    "TYT · AYT · Dijital Takip",
    "7 Aşamalı Sistem",
    "Kişisel Rehberlik",
    "Hata Defteri",
    "Net Analizi",
    "Gamification",
    "İstanbul · 13 Şube",
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-[#060D18]">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Fine dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Diagonal hairlines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diag" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="60" stroke="#D4AF37" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
        {/* Radial glow — top center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.14),transparent_70%)]" />
        {/* Radial glow — bottom right */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(196,30,58,0.09),transparent_70%)]" />
      </div>

      {/* ── Parallax orb ── */}
      <motion.div
        style={{ x: springX, y: springY, rotateX: springY, rotateY: springX }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <div
          className="w-[520px] h-[520px] rounded-full opacity-[0.07] blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 35% 40%, #F0C040 0%, #D4AF37 35%, #A8882A 60%, transparent 80%)",
          }}
        />
      </motion.div>

      {/* ── Floating particles ── */}
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1,
            height: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1,
            left: `${6 + i * 6.5}%`,
            top: `${10 + (i * 37) % 80}%`,
            background: i % 4 === 3 ? "rgba(196,30,58,0.7)" : "rgba(212,175,55,0.65)",
          }}
          animate={{ y: [0, -(14 + (i % 4) * 8), 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, delay: i * 0.22, ease: "easeInOut" }}
        />
      ))}

      {/* ── Main content wrapper (scroll fade+scale) ── */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 min-h-screen flex flex-col"
      >
        {/* ── Top bar label ── */}
        <div className="flex items-center justify-between px-6 sm:px-12 pt-28 pb-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <span className="text-[#D4AF37]/50 text-[10px] font-bold tracking-[0.3em] uppercase">İstanbul</span>
            <span className="w-8 h-px bg-[#D4AF37]/30" />
            <span className="text-[#D4AF37]/50 text-[10px] font-bold tracking-[0.3em] uppercase">Premium Sınav Kulübü</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            {[...Array(3)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-[#D4AF37]/40 text-[#D4AF37]/40" />
            ))}
          </motion.div>
        </div>

        {/* ── Main editorial layout ── */}
        <div className="flex-1 flex flex-col lg:flex-row items-stretch px-6 sm:px-12 pt-8 pb-0 gap-8 lg:gap-0">
          {/* LEFT — Vertical stat rail */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:flex flex-col justify-center gap-10 w-40 xl:w-48 flex-shrink-0 border-r border-[#D4AF37]/10 pr-8"
          >
            {[
              { val: `${counts.net}.6%`, label: "Başarı\nOranı", accent: "#D4AF37" },
              { val: `${counts.branches}`, label: "Aktif\nŞube", accent: "#D4AF37" },
              { val: `${counts.students}+`, label: "Mezun\nÖğrenci", accent: "#C41E3A" },
              { val: "7", label: "Aşamalı\nSistem", accent: "#D4AF37" },
            ].map(({ val, label, accent }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
              >
                <div
                  className="text-3xl xl:text-4xl font-black leading-none mb-1.5 tabular-nums"
                  style={{ color: accent }}
                >
                  {val}
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 whitespace-pre-line leading-tight">
                  {label}
                </div>
                <div className="mt-2 h-px w-6" style={{ background: accent, opacity: 0.4 }} />
              </motion.div>
            ))}
          </motion.div>

          {/* CENTER — Typographic monument */}
          <div className="flex-1 flex flex-col justify-center items-center text-center relative px-0 lg:px-8 xl:px-12">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
              <span className="text-[11px] font-black tracking-[0.35em] uppercase text-[#D4AF37]/80">
                Bilimsel Başarı Metodolojisi
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
            </motion.div>

            {/* Main headline — staggered word reveal */}
            <div className="overflow-hidden mb-2">
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="block text-[clamp(3.5rem,12vw,9rem)] font-black leading-[0.88] tracking-tighter text-white uppercase">
                  Deneme
                </span>
              </motion.div>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span
                  className="block text-[clamp(3.5rem,12vw,9rem)] font-black leading-[0.88] tracking-tighter uppercase animate-shimmer"
                >
                  Üssü
                </span>
              </motion.div>
            </div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="text-gray-400 text-base sm:text-lg max-w-md mx-auto leading-relaxed mb-10"
            >
              TYT & AYT hedefine giden yolda{" "}
              <span className="text-white font-semibold">veri odaklı</span>,{" "}
              <span className="text-white font-semibold">kişiselleştirilmiş</span> ve{" "}
              <span className="text-white font-semibold">rehberlik destekli</span> sistem.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/basari-modelimiz"
                className="group relative flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#A8882A] text-[#060D18] font-black text-sm px-8 py-4 rounded-full glow-gold hover:from-[#F0C040] hover:to-[#D4AF37] transition-all duration-200 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Sistemimizi Keşfet</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/iletisim"
                className="glass-button text-white font-bold text-sm px-8 py-4 rounded-full"
              >
                Ücretsiz Danışma Al
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="mt-14 flex flex-col items-center gap-2 text-gray-600 text-[10px] tracking-widest uppercase"
            >
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="w-5 h-8 border border-gray-600/50 rounded-full flex justify-center pt-1.5"
              >
                <div className="w-0.5 h-2 bg-[#D4AF37]/60 rounded-full" />
              </motion.div>
              <span>Scroll</span>
            </motion.div>
          </div>

          {/* RIGHT — Feature card stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="hidden xl:flex flex-col justify-center gap-4 w-52 flex-shrink-0 border-l border-[#D4AF37]/10 pl-8"
          >
            {[
              { icon: Target, label: "Deneme Seçimi", sub: "Seviye bazlı" },
              { icon: BarChart3, label: "Net Analizi", sub: "Anlık rapor" },
              { icon: Users, label: "Rehberlik", sub: "Haftalık görüşme" },
              { icon: BookOpen, label: "Hata Defteri", sub: "Konu tespiti" },
              { icon: Shield, label: "Gamification", sub: "Motivasyon ödülleri" },
            ].map(({ icon: Icon, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.65 + i * 0.1 }}
                className="flex items-center gap-3 group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/8 border border-[#D4AF37]/15 flex items-center justify-center flex-shrink-0 group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/15 transition-all duration-200">
                  <Icon className="w-3.5 h-3.5 text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors duration-200" />
                </div>
                <div>
                  <div className="text-white/80 text-xs font-semibold leading-tight group-hover:text-white transition-colors">{label}</div>
                  <div className="text-gray-600 text-[10px] group-hover:text-gray-500 transition-colors">{sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom kinetic ticker ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="relative mt-6 border-t border-b border-[#D4AF37]/12 overflow-hidden py-3 select-none"
        >
          <div className="flex whitespace-nowrap" style={{ animation: "ticker 18s linear infinite" }}>
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-6 text-[11px] font-bold tracking-[0.22em] uppercase text-[#D4AF37]/35">
                {item}
                <span className="text-[#D4AF37]/20">◆</span>
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* STATS */}
      <section className="py-16 relative">
        <div className="divider-gold mb-16" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <AnimatedSection key={label} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 text-center card-hover border border-[#D4AF37]/10 hover:border-[#D4AF37]/30">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#A8882A]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div className="text-3xl font-black text-gold-gradient mb-1">{value}</div>
                  <div className="text-gray-400 text-sm">{label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="divider-gold mt-16" />
      </section>

      {/* 7 AŞAMALI SİSTEM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-3">Başarı Metodolojisi</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              7 Aşamalı <span className="text-gold-gradient">Bilimsel Sistem</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Her aşama bir öncekinin üzerine inşa edilir. Sonuç: İstikrarlı net artışı ve maksimum başarı.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemCards.map(({ step, title, desc, icon: Icon, href, color }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <Link href={href} className="block h-full">
                  <div className={`h-full glass rounded-2xl p-6 card-hover border border-white/5 hover:border-[#D4AF37]/20 bg-gradient-to-br ${color} group`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#A8882A] flex items-center justify-center text-[#060D18] font-black text-sm glow-gold">{step}</div>
                      <Icon className="w-6 h-6 text-[#D4AF37] mt-2" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#D4AF37] transition-colors">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-[#D4AF37] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Detayları Gör <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 text-center">
            <Link href="/basari-modelimiz"
              className="inline-flex items-center gap-2 glass-button text-[#D4AF37] font-bold px-8 py-3.5 rounded-full">
              Tüm Aşamaları Keşfet <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[#0A1628]/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-3">Neden Deneme Üssü?</span>
              <h2 className="text-4xl font-black text-white mb-6">Veri Odaklı Öğrenci <span className="text-gold-gradient">Takip Sistemi</span></h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Bireyselleştirilmiş deneme ve analiz modeliyle her öğrencinin kendine özgü zayıf noktaları tespit edilir,
                sürekli gelişim ve yönlendirme ile hedeflere ulaşılır.
              </p>
              <div className="space-y-4">
                {["Haftalık net artışı grafikle takip", "Ders ve konu bazlı hata analizi", "Kişisel öğrenme programı", "Gamification ile motivasyon", "Hata defteri sistemi"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/dijital-takip"
                className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#A8882A] text-[#060D18] font-bold px-6 py-3 rounded-full hover:from-[#F0C040] hover:to-[#D4AF37] transition-all duration-200">
                Dijital Takibi İncele <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {features.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="glass rounded-2xl p-5 card-hover border border-white/5 hover:border-[#D4AF37]/20">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#A8882A]/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1.5">{title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-3">Başarı Hikayeleri</span>
            <h2 className="text-4xl font-black text-white">Öğrencilerimizin <span className="text-gold-gradient">Başarıları</span></h2>
          </AnimatedSection>

          <div className="relative flex h-[420px] w-full flex-row items-center justify-center overflow-hidden [perspective:300px]">
            <div
              className="flex flex-row items-center gap-4"
              style={{
                transform:
                  "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
              }}
            >
              <Marquee vertical pauseOnHover repeat={3} style={{ "--duration": "38s" } as React.CSSProperties}>
                {testimonials.map((t) => (
                  <TestimonialCard key={t.name} {...t} />
                ))}
              </Marquee>
              <Marquee vertical pauseOnHover reverse repeat={3} style={{ "--duration": "42s" } as React.CSSProperties}>
                {testimonials.map((t) => (
                  <TestimonialCard key={t.name + "-r"} {...t} />
                ))}
              </Marquee>
              <Marquee vertical pauseOnHover repeat={3} style={{ "--duration": "36s" } as React.CSSProperties}>
                {testimonials.map((t) => (
                  <TestimonialCard key={t.name + "-2"} {...t} />
                ))}
              </Marquee>
              <Marquee vertical pauseOnHover reverse repeat={3} style={{ "--duration": "44s" } as React.CSSProperties}>
                {testimonials.map((t) => (
                  <TestimonialCard key={t.name + "-r2"} {...t} />
                ))}
              </Marquee>
            </div>
            {/* Gradient masks */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#060D18]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#060D18]" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-[#060D18]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-[#060D18]" />
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative glass rounded-3xl p-10 sm:p-16 text-center overflow-hidden border border-[#D4AF37]/20 glow-gold">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent)]" />
              <div className="relative z-10">
                <Trophy className="w-14 h-14 mx-auto mb-4 text-[#D4AF37] trophy-pulse" />
                <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
                  Başarıyı <span className="text-gold-gradient">Birlikte Yazalım!</span>
                </h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                  Ücretsiz danışma randevusu al, 7 aşamalı sistemimizi yakından tanı ve hedefine ulaşma yolculuğuna başla.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/iletisim"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#A8882A] text-[#060D18] font-black px-8 py-4 rounded-full hover:from-[#F0C040] hover:to-[#D4AF37] transition-all duration-200 hover:scale-105 text-sm">
                    Ücretsiz Danışma Al <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/subelerimiz"
                    className="inline-flex items-center gap-2 glass-button text-[#D4AF37] font-bold px-8 py-4 rounded-full text-sm">
                    Şubelerimizi İncele
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
