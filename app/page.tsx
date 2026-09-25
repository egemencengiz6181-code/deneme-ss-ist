"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
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
import { CtaSection, SectionHeading } from "@/components/PageSections";
import { Marquee } from "@/components/ui/Marquee";
import { ScrollReelTestimonials } from "@/components/ui/scroll-reel-testimonials";
import { site } from "@/lib/site";

const stats = [
  { value: `${site.branchCount}`, label: "Şube", icon: Shield },
  { value: "500+", label: "Öğrenci", icon: Users },
  { value: site.successRate, label: "Başarı Oranı", icon: Trophy },
  { value: "7", label: "Aşamalı Sistem", icon: Star },
];

const systemCards = [
  {
    step: 1,
    title: "Deneme Seçimi",
    desc: "Seviyene uygun Kolay, Orta veya Zor denemelerden birini seç. Rehberin en iyi planı oluşturur.",
    icon: Target,
    href: "/basari-modelimiz",
    color: "#3B82F6",
  },
  {
    step: 2,
    title: "Deneme Uygulama",
    desc: "Gerçek sınav süresi, optik form kullanımı ve disiplinli ortamda deneme uygula.",
    icon: Zap,
    href: "/basari-modelimiz",
    color: "#A855F7",
  },
  {
    step: 3,
    title: "Sonuç Analizi",
    desc: "Net puanın, sıralaman ve ders bazlı başarı oranların anlık olarak hesaplanır.",
    icon: BarChart3,
    href: "/basari-modelimiz",
    color: "#D4AF37",
  },
  {
    step: 4,
    title: "Rehberlik Kontrolü",
    desc: "Haftalık birebir görüşmeler, gelişim takibi ve yanlış deneme seçimlerinin düzeltilmesi.",
    icon: Users,
    href: "/rehberlik",
    color: "#22C55E",
  },
  {
    step: 5,
    title: "Eksik Konu Tespiti",
    desc: "Yanlışların konulara bağlanması, zayıf konu listesi ve önceliklendirme sistemi.",
    icon: BookOpen,
    href: "/basari-modelimiz",
    color: "#C41E3A",
  },
  {
    step: 6,
    title: "Kişisel Program",
    desc: "Eksik odaklı ders dağılımı, haftalık çalışma planı ve tekrar+deneme dengesi.",
    icon: Medal,
    href: "/basari-modelimiz",
    color: "#F97316",
  },
];

const features = [
  { icon: BarChart3, title: "Dijital Net Takibi", desc: "TYT/AYT netlerinizi haftalık grafiklerle takip edin." },
  { icon: Target, title: "Konu Bazlı Analiz", desc: "Her hatanın hangi konudan geldiğini tespit edin." },
  { icon: TrendingUp, title: "Sürekli Gelişim", desc: "Net artışı, ders bazlı grafik ve motivasyon ödülleri." },
  { icon: Users, title: "Rehberlik Desteği", desc: "Etüt, grup ve özel ders yönlendirmesi ile yanınızdayız." },
];

const testimonials = [
  { name: "Ayşe K.", score: "TYT: 87.5 Net", quote: "Eksik konularımı fark ettim. 3 ayda netlerim %40 arttı!", avatar: "A" },
  { name: "Mehmet T.", score: "AYT Mat: 34 Net", quote: "Dijital takip sistemi inanılmaz. Her hafta gelişimimi grafikle görüyorum.", avatar: "M" },
  { name: "Zeynep A.", score: "Top 5% Sıralama", quote: "Rehberim doğru stratejiyi belirledi. Hayalimdeki üniversiteye girdim!", avatar: "Z" },
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

const heroPalettes = {
  dark: ["#060D18", "#0A1628", "#0D1A08", "#1E1200", "#2E1C00"],
  light: ["#faf8f2", "#f5edd6", "#fbf6ea", "#efe0b4", "#f8f1de"],
};

function TestimonialCard({ name, score, quote, avatar }: (typeof testimonials)[0]) {
  return (
    <div className="w-52 glass rounded-xl p-4">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-navy-dark font-black text-sm flex-shrink-0">
          {avatar}
        </div>
        <div className="min-w-0">
          <div className="text-foreground font-bold text-sm leading-tight truncate">{name}</div>
          <div className="text-gold-ink text-xs font-semibold">{score}</div>
        </div>
      </div>
      <p className="text-muted-foreground text-xs leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
    </div>
  );
}

function useCountUp(duration = 2000) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setProgress(1 - Math.pow(1 - p, 3));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration]);
  return progress;
}

function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const progress = useCountUp();

  // eslint-disable-next-line react-hooks/set-state-in-effect -- shaders are client-only (WebGL)
  useEffect(() => setIsMounted(true), []);

  const isDark = resolvedTheme !== "light";
  const heroStats = [
    { val: `%${(progress * 91.6).toFixed(1)}`, label: "Başarı Oranı", accent: "text-gold-ink" },
    { val: `${Math.round(progress * site.branchCount)}`, label: "Aktif Şube", accent: "text-gold-ink" },
    { val: `${Math.round(progress * 500)}+`, label: "Mezun Öğrenci", accent: "text-crimson" },
  ];

  const tickerItems = [
    "TYT · AYT · LGS",
    "7 Aşamalı Sistem",
    "Kişisel Rehberlik",
    "Hata Defteri",
    "Net Analizi",
    "Dijital Takip",
    `İstanbul · ${site.branchCount} Şube`,
  ];

  return (
    <section className="relative min-h-svh overflow-hidden bg-background">
      {/* ── Shader background ── */}
      {isMounted && (
        <MeshGradient
          key={isDark ? "dark" : "light"}
          className="absolute inset-0 w-full h-full"
          colors={isDark ? heroPalettes.dark : heroPalettes.light}
          speed={0.18}
        />
      )}
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-50" />

      {/* ── Student ghost photos (right half, desktop) ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none overflow-hidden hidden md:block">
        <div className="absolute right-0 top-0 w-[52%] h-full opacity-[0.08] dark:opacity-[0.11] grayscale-[15%]">
          <Image
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=70&auto=format&fit=crop"
            alt=""
            fill
            priority
            sizes="52vw"
            className="object-cover object-top blur-[1px]"
          />
        </div>
        <div className="absolute right-[8%] bottom-[12%] w-[22%] h-[38%] opacity-[0.06] dark:opacity-[0.08]">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=70&auto=format&fit=crop"
            alt=""
            fill
            sizes="22vw"
            className="object-cover blur-[5px] grayscale-[25%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* ── Thin vertical accent line ── */}
      <div
        aria-hidden="true"
        className="absolute left-[8%] top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-gold/30 to-transparent pointer-events-none hidden lg:block"
      />

      <div className="relative z-10 min-h-svh flex flex-col">
        {/* Stats — desktop top right */}
        <dl className="absolute top-32 right-6 sm:right-12 hidden lg:flex flex-col items-end gap-6">
          {heroStats.map(({ val, label, accent }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.15 }}
              className="flex flex-col-reverse items-end"
            >
              <dt className="text-[10px] font-bold tracking-[0.25em] uppercase text-muted-foreground mt-0.5">{label}</dt>
              <dd className={`text-2xl xl:text-3xl font-black leading-none tabular-nums ${accent}`}>{val}</dd>
            </motion.div>
          ))}
        </dl>

        {/* Editorial headline — bottom-left */}
        <div className="flex-1 flex flex-col justify-end pt-28 pb-16 sm:pb-24 px-6 sm:px-12 lg:px-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] sm:tracking-[0.4em] uppercase text-gold-ink">
              İstanbul · Premium Sınav Kulübü
            </span>
          </motion.div>

          <h1 className="mb-6">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(3.75rem,13vw,10.5rem)] font-black leading-[1] tracking-[-0.03em] text-foreground uppercase"
            >
              Deneme
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
              className="block py-2 text-[clamp(3.75rem,13vw,10.5rem)] font-black leading-[1] tracking-[-0.03em] uppercase animate-shimmer"
            >
              Üssü
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
          >
            <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
              TYT & AYT&apos;de <span className="text-foreground font-semibold">{site.successRate} başarı</span> ile
              veri odaklı, kişiselleştirilmiş sistem.
            </p>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link href="/basari-modelimiz" className="group btn-primary text-xs px-6 py-3">
                Sistemi Keşfet
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/iletisim" className="glass-button font-bold text-xs px-6 py-3 rounded-full">
                Ücretsiz Danışma
              </Link>
            </div>
          </motion.div>

          {/* Mobile stats strip */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex gap-8 mt-10 lg:hidden"
          >
            {heroStats.map(({ val, label }) => (
              <div key={label} className="flex flex-col-reverse">
                <dt className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mt-1">{label}</dt>
                <dd className="text-xl font-black text-gold-ink tabular-nums leading-none">{val}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* PulsingBorder decoration — bottom right */}
        <div aria-hidden="true" className="absolute bottom-16 right-8 z-30 hidden md:flex items-center justify-center w-16 h-16">
          {isMounted && (
            <PulsingBorder
              colors={["#D4AF37", "#A8882A", "#F0C040", isDark ? "#060D18" : "#faf8f2", "#B8941F"]}
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
            <Trophy className="w-5 h-5 text-gold-ink/70" />
          </div>
        </div>

        {/* Bottom ticker */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="relative border-t border-gold/15 overflow-hidden py-3 select-none"
        >
          <div className="flex whitespace-nowrap animate-ticker">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 px-6 text-[10px] font-bold tracking-[0.25em] uppercase text-gold-ink/60"
              >
                {item}
                <span className="text-gold/40">◆</span>
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
      <section className="py-16 relative" aria-label="Rakamlarla Deneme Üssü">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <AnimatedSection key={label} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 text-center card-hover h-full">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-ink" />
                  </div>
                  <div className="text-3xl font-black text-gold-gradient mb-1 tabular-nums">{value}</div>
                  <div className="text-muted-foreground text-sm">{label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SCROLL REEL TESTIMONIALS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Öğrenci Yorumları" title="Başarıyı" highlight="Birlikte Yazdık" className="mb-10">
            Sistemimizi kullanan öğrencilerin gerçek deneyimleri ve başarı hikayeleri.
          </SectionHeading>
          <AnimatedSection>
            <ScrollReelTestimonials testimonials={scrollReelTestimonials} className="mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* 7 AŞAMALI SİSTEM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Başarı Metodolojisi" title="7 Aşamalı" highlight="Bilimsel Sistem" className="mb-14">
            Her aşama bir öncekinin üzerine inşa edilir. Sonuç: İstikrarlı net artışı ve maksimum başarı.
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemCards.map(({ step, title, desc, icon: Icon, href, color }, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <Link href={href} className="group block h-full rounded-2xl">
                  <div className="relative h-full glass rounded-2xl p-6 card-hover overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity"
                      style={{ background: color }}
                    />
                    <div className="relative flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-navy-dark font-black text-sm glow-gold">
                        {step}
                      </div>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${color}1f` }}
                      >
                        <Icon className="w-5 h-5" style={{ color }} />
                      </div>
                    </div>
                    <h3 className="relative text-foreground font-bold text-lg mb-2 group-hover:text-gold-ink transition-colors">
                      {title}
                    </h3>
                    <p className="relative text-muted-foreground text-sm leading-relaxed">{desc}</p>
                    <div className="relative mt-4 flex items-center gap-1 text-gold-ink text-xs font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                      Detayları Gör <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 text-center">
            <Link href="/basari-modelimiz" className="glass-button font-bold px-8 py-3.5 rounded-full">
              Tüm Aşamaları Keşfet <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gradient-to-b from-transparent via-secondary/80 dark:via-navy/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-gold-ink text-sm font-bold tracking-widest uppercase mb-3">
                Neden Deneme Üssü?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mb-6">
                Veri Odaklı Öğrenci <span className="text-gold-gradient">Takip Sistemi</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Bireyselleştirilmiş deneme ve analiz modeliyle her öğrencinin kendine özgü zayıf noktaları tespit edilir,
                sürekli gelişim ve yönlendirme ile hedeflere ulaşılır.
              </p>
              <ul className="space-y-4">
                {[
                  "Haftalık net artışı grafikle takip",
                  "Ders ve konu bazlı hata analizi",
                  "Kişisel öğrenme programı",
                  "Gamification ile motivasyon",
                  "Hata defteri sistemi",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-ink flex-shrink-0" />
                    <span className="text-foreground/85 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/dijital-takip" className="btn-primary mt-8 px-6 py-3 text-sm">
                Dijital Takibi İncele <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-4">
                {features.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="glass rounded-2xl p-5 card-hover">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-gold-ink" />
                    </div>
                    <h3 className="text-foreground font-bold text-sm mb-1.5">{title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
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
          <SectionHeading eyebrow="Başarı Hikayeleri" title="Öğrencilerimizin" highlight="Başarıları" className="mb-14" />

          <div
            aria-hidden="true"
            className="relative flex h-[420px] w-full flex-row items-center justify-center overflow-hidden [perspective:300px]"
          >
            <div
              className="flex flex-row items-center gap-4"
              style={{
                transform:
                  "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
              }}
            >
              {[38, 42, 36, 44].map((duration, col) => (
                <Marquee
                  key={col}
                  vertical
                  pauseOnHover
                  reverse={col % 2 === 1}
                  repeat={3}
                  style={{ "--duration": `${duration}s` } as React.CSSProperties}
                >
                  {testimonials.map((t) => (
                    <TestimonialCard key={t.name} {...t} />
                  ))}
                </Marquee>
              ))}
            </div>
            {/* Edge fades match the page background in both themes */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-background" />
          </div>
        </div>
      </section>

      <CtaSection
        title="Başarıyı"
        highlight="Birlikte Yazalım!"
        text="Ücretsiz danışma randevusu al, 7 aşamalı sistemimizi yakından tanı ve hedefine ulaşma yolculuğuna başla."
        primary={{ href: "/iletisim", label: "Ücretsiz Danışma Al" }}
        secondary={{ href: "/subelerimiz", label: "Şubelerimizi İncele" }}
      />
    </>
  );
}
