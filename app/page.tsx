"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
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
import { ScrollReelTestimonials } from "@/components/ui/scroll-reel-testimonials";

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
  { name: "Selin Y.", score: "AYT: 78 Net", quote: "7 aşamalı sistem gerçekten işe yarıyor. Her adımda büyüdüm.", avatar: "S" },
  { name: "Can D.", score: "Boğaziçi Kazandı", quote: "Kişisel programım zayıf konularıma odaklanmamı sağladı.", avatar: "C" },
  { name: "Elif Ö.", score: "TYT: 95.0 Net", quote: "Rehberlik görüşmeleri motivasyonumu hiç düşürmedi.", avatar: "E" },
  { name: "Ali R.", score: "ODTÜ Kazandı", quote: "Net artışım haftadan haftaya grafikte görünür hale geldi.", avatar: "A" },
  { name: "Deniz B.", score: "AYT Bio: 28 Net", quote: "Gamification sistemi beni sürekli motive etti!", avatar: "D" },
];

const scrollReelTestimonials = [
  {
    quote: "3 ayda TYT netlerim 42'den 87'ye çıktı. Her adım planlanmıştı, sistemi takip ettim ve sonuç inanılmazdı.",
    author: "Ayşe K. — TYT 87 Net, İstanbul Üniversitesi Hukuk",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop",
    alt: "Öğrenci Ayşe",
  },
  {
    quote: "Hata defteri sayesinde tekrar eden yanlışlarımı sıfırladım. Boğaziçi hayalim gerçek oldu.",
    author: "Mehmet T. — Boğaziçi Üniversitesi Mühendislik",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
    alt: "Öğrenci Mehmet",
  },
  {
    quote: "Rehberim her hafta beni doğru yönlendirdi. AYT'de hedefimin çok üstüne çıktım.",
    author: "Zeynep A. — ODTÜ Bilgisayar Mühendisliği",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop",
    alt: "Öğrenci Zeynep",
  },
  {
    quote: "Dijital takip grafikleri motivasyonumu hiç düşürmedi. 7 aşamalı sistem gerçekten işe yarıyor.",
    author: "Burak S. — TYT 92 Net, İTÜ Elektrik-Elektronik",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop",
    alt: "Öğrenci Burak",
  },
  {
    quote: "Konu bazlı analiz sayesinde zayıf noktalarımı tespit ettim ve kısa sürede hedefimi aştım.",
    author: "Elif Ö. — TYT 95 Net, Hacettepe Tıp Fakültesi",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop",
    alt: "Öğrenci Elif",
  },
];

function TestimonialCard({ name, score, quote, avatar }: (typeof testimonials)[0]) {
  return (
    <div className="w-52 glass rounded-xl p-4 border border-[#D4AF37]/15 hover:border-[#D4AF37]/30 transition-colors">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A8882A] flex items-center justify-center text-[#060D18] font-black text-sm flex-shrink-0">
          {avatar}
        </div>
        <div className="min-w-0">
          <div className="text-[#0a1628] dark:text-white font-bold text-sm leading-tight truncate">{name}</div>
          <div className="text-[#D4AF37] text-xs font-semibold">{score}</div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
    </div>
  );
}

function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [counts, setCounts] = useState({ net: 0, branches: 0, students: 0 });

  useEffect(() => {
    setIsMounted(true);
    const targets = { net: 91, branches: 13, students: 500 };
    const duration = 2000;
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
  }, []);

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
    <section className="relative min-h-screen overflow-hidden bg-[#060D18]">

      {/* ── Shader background ── */}
      {isMounted && (
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          colors={["#060D18", "#0A1628", "#0D1A08", "#1E1200", "#2E1C00"]}
          speed={0.18}
        />
      )}

      {/* ── Student ghost photos (right half, desktop) ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden hidden md:block">
        {/* Primary - large top-right */}
        <div className="absolute right-0 top-0 w-[52%] h-full">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=70&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover object-top"
            style={{ opacity: 0.11, filter: "blur(1px) grayscale(15%)" }}
          />
        </div>
        {/* Secondary - mid-right blend */}
        <div className="absolute right-[15%] top-[20%] w-[28%] h-[55%]">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=70&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.07, filter: "blur(8px) grayscale(30%)" }}
          />
        </div>
        {/* Tertiary - bottom right accent */}
        <div className="absolute right-[8%] bottom-[12%] w-[22%] h-[38%]">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=70&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.08, filter: "blur(5px) grayscale(25%)" }}
          />
        </div>
        {/* Gradient masks to blend photos into background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060D18] via-[#060D18]/85 to-[#060D18]/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060D18]/50 via-transparent to-[#060D18]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D18] via-transparent to-[#060D18]/30" />
      </div>

      {/* Mobile gradient (no photos) */}
      <div className="absolute inset-0 pointer-events-none md:hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60%] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.07),transparent_70%)]" />
      </div>

      {/* ── Thin vertical accent line ── */}
      <div className="absolute left-[8%] top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-[#D4AF37]/25 to-transparent pointer-events-none hidden lg:block" />

      {/* ── Main content ── */}
      <div className="relative z-10 min-h-screen flex flex-col">

        {/* Stats — desktop top right */}
        <div className="absolute top-32 right-6 sm:right-12 hidden lg:flex flex-col items-end gap-6">
          {[
            { val: `${counts.net}.6%`, label: "Başarı Oranı", accent: "#D4AF37" },
            { val: `${counts.branches}`, label: "Aktif Şube", accent: "#D4AF37" },
            { val: `${counts.students}+`, label: "Mezun Öğrenci", accent: "#C41E3A" },
          ].map(({ val, label, accent }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.15 }}
              className="flex flex-col items-end"
            >
              <span
                className="text-2xl xl:text-3xl font-black leading-none tabular-nums"
                style={{ color: accent }}
              >
                {val}
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/35 mt-0.5">
                {label}
              </span>
              <div className="mt-1.5 h-px w-4" style={{ background: accent, opacity: 0.4 }} />
            </motion.div>
          ))}
        </div>

        {/* Editorial headline — bottom-left */}
        <div className="flex-1 flex flex-col justify-end pb-20 sm:pb-24 px-6 sm:px-12 lg:px-16 max-w-3xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#D4AF37]/70">
              İstanbul · Premium Sınav Kulübü
            </span>
          </motion.div>

          {/* Main display type */}
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block text-[clamp(4.5rem,13vw,10.5rem)] font-black leading-[1] tracking-[-0.03em] text-white uppercase">
                Deneme
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
              className="py-2"
            >
              <span className="block text-[clamp(4.5rem,13vw,10.5rem)] font-black leading-[1] tracking-[-0.03em] uppercase animate-shimmer">
                Üssü
              </span>
            </motion.div>
          </div>

          {/* Sub + CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
          >
            <p className="text-white/55 text-sm sm:text-base leading-relaxed max-w-xs">
              TYT & AYT&apos;de <span className="text-white/90 font-semibold">%91.6 başarı</span> ile
              veri odaklı, kişiselleştirilmiş sistem.
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <Link
                href="/basari-modelimiz"
                className="group flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#A8882A] text-[#060D18] font-black text-xs px-6 py-3 rounded-full glow-gold hover:from-[#F0C040] hover:to-[#D4AF37] transition-all duration-200 hover:scale-105"
              >
                Sistemi Keşfet
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/iletisim"
                className="glass-button font-bold text-xs px-6 py-3 rounded-full flex items-center"
              >
                Ücretsiz Danışma
              </Link>
            </div>
          </motion.div>

          {/* Mobile stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex gap-6 mt-10 lg:hidden"
          >
            {[
              { val: `${counts.net}.6%`, label: "Başarı" },
              { val: `${counts.branches}`, label: "Şube" },
              { val: `${counts.students}+`, label: "Öğrenci" },
            ].map(({ val, label }) => (
              <div key={label} className="flex flex-col">
                <span className="text-xl font-black text-[#D4AF37] tabular-nums leading-none">{val}</span>
                <span className="text-[9px] font-bold tracking-widest uppercase text-white/35">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* PulsingBorder decoration — bottom right */}
        <div className="absolute bottom-16 right-8 z-30 hidden md:flex items-center justify-center w-16 h-16">
          {isMounted && (
            <PulsingBorder
              colors={["#D4AF37", "#A8882A", "#F0C040", "#060D18", "#B8941F"]}
              colorBack="#00000000"
              speed={1.2}
              roundness={1}
              thickness={0.12}
              softness={0.25}
              intensity={0.8}
              spots={4}
              spotSize={0.1}
              pulse={0.12}
              smoke={0.35}
              smokeSize={0.6}
              style={{ width: "64px", height: "64px", borderRadius: "50%" }}
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <Trophy className="w-5 h-5 text-[#D4AF37]/60" />
          </div>
        </div>

        {/* Bottom ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="relative border-t border-[#D4AF37]/10 overflow-hidden py-3 select-none"
        >
          <div className="flex whitespace-nowrap" style={{ animation: "ticker 22s linear infinite" }}>
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-6 text-[10px] font-bold tracking-[0.25em] uppercase text-[#D4AF37]/30">
                {item}
                <span className="text-[#D4AF37]/15">◆</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
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
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="divider-gold mt-16" />
      </section>

      {/* SCROLL REEL TESTIMONIALS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="inline-block text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-3">Öğrenci Yorumları</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a1628] dark:text-white mb-4">
              Başarıyı <span className="text-gold-gradient">Birlikte Yazdık</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Sistemimizi kullanan öğrencilerin gerçek deneyimleri ve başarı hikayeleri.</p>
          </AnimatedSection>
          <AnimatedSection>
            <ScrollReelTestimonials testimonials={scrollReelTestimonials} className="mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* 7 AŞAMALI SİSTEM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-3">Başarı Metodolojisi</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a1628] dark:text-white mb-4">
              7 Aşamalı <span className="text-gold-gradient">Bilimsel Sistem</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Her aşama bir öncekinin üzerine inşa edilir. Sonuç: İstikrarlı net artışı ve maksimum başarı.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemCards.map(({ step, title, desc, icon: Icon, href, color }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <Link href={href} className="block h-full">
                  <div className={`h-full glass rounded-2xl p-6 card-hover border border-gray-200 dark:border-white/5 hover:border-[#D4AF37]/20 bg-gradient-to-br ${color} group`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#A8882A] flex items-center justify-center text-[#060D18] font-black text-sm glow-gold">{step}</div>
                      <Icon className="w-6 h-6 text-[#D4AF37] mt-2" />
                    </div>
                    <h3 className="text-[#0a1628] dark:text-white font-bold text-lg mb-2 group-hover:text-[#D4AF37] transition-colors">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
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
              className="inline-flex items-center gap-2 glass-button font-bold px-8 py-3.5 rounded-full">
              Tüm Aşamaları Keşfet <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[#f0ece2]/80 dark:via-[#0A1628]/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-3">Neden Deneme Üssü?</span>
              <h2 className="text-4xl font-black text-[#0a1628] dark:text-white mb-6">Veri Odaklı Öğrenci <span className="text-gold-gradient">Takip Sistemi</span></h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Bireyselleştirilmiş deneme ve analiz modeliyle her öğrencinin kendine özgü zayıf noktaları tespit edilir,
                sürekli gelişim ve yönlendirme ile hedeflere ulaşılır.
              </p>
              <div className="space-y-4">
                {["Haftalık net artışı grafikle takip", "Ders ve konu bazlı hata analizi", "Kişisel öğrenme programı", "Gamification ile motivasyon", "Hata defteri sistemi"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
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
                  <div key={title} className="glass rounded-2xl p-5 card-hover border border-gray-200 dark:border-white/5 hover:border-[#D4AF37]/20">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#A8882A]/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-[#0a1628] dark:text-white font-bold text-sm mb-1.5">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-500 text-xs leading-relaxed">{desc}</p>
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
            <h2 className="text-4xl font-black text-[#0a1628] dark:text-white">Öğrencilerimizin <span className="text-gold-gradient">Başarıları</span></h2>
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
            {/* Gradient masks - match page background */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#faf8f2] dark:from-[#060D18]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#faf8f2] dark:from-[#060D18]" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-[#faf8f2] dark:from-[#060D18]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-[#faf8f2] dark:from-[#060D18]" />
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative glass rounded-3xl p-10 sm:p-16 text-center overflow-hidden border border-[#D4AF37]/20 glow-gold">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent)]" />
              <div className="relative z-10">
                <Trophy className="w-14 h-14 mx-auto mb-4 text-[#D4AF37] trophy-pulse" />
                <h2 className="text-3xl sm:text-5xl font-black text-[#0a1628] dark:text-white mb-4">
                  Başarıyı <span className="text-gold-gradient">Birlikte Yazalım!</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                  Ücretsiz danışma randevusu al, 7 aşamalı sistemimizi yakından tanı ve hedefine ulaşma yolculuğuna başla.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/iletisim"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#A8882A] text-[#060D18] font-black px-8 py-4 rounded-full hover:from-[#F0C040] hover:to-[#D4AF37] transition-all duration-200 hover:scale-105 text-sm">
                    Ücretsiz Danışma Al <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/subelerimiz"
                    className="inline-flex items-center gap-2 glass-button font-bold px-8 py-4 rounded-full text-sm">
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
