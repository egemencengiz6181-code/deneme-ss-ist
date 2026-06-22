"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BarChart3, TrendingUp, Database, FileSpreadsheet,
  BookMarked, ArrowRight, Trophy, CheckCircle, Star,
  Folder, Monitor, Activity,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const trackingFeatures = [
  {
    icon: Monitor,
    title: "Dijital Takip Sistemi",
    desc: "Anlık erişimli sınav durumu, ilerleme ve istatistik paneli. Her yerden her an öğrenci performansını takip et.",
    color: "#3B82F6",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel / Google Sheets Altyapısı",
    desc: "Kolay veri girişi ve esnek analizler. Otomatik hesaplamalar ile TYT Net ve AYT Net takibi.",
    color: "#22C55E",
  },
  {
    icon: Activity,
    title: "Öğrenci Net Grafikleri",
    desc: "TYT ve AYT netlerini ders ve konu bazında haftalık olarak analiz et. Gelişimini görselleştir.",
    color: "#D4AF37",
  },
  {
    icon: Folder,
    title: "Deneme Geçmişi Kaydı",
    desc: "TYT 1, AYT 1, TYT 2... Tüm deneme geçmişi ve belgeleri düzenli olarak arşivlenir.",
    color: "#A855F7",
  },
];

const hataDefteriSteps = [
  {
    step: 1,
    title: "Yanlış Soruların Kaydı",
    desc: "Sınav sonrası yapılan hataların anında ve sistemli bir şekilde deftere eklenmesi.",
    icon: BookMarked,
    color: "#EF4444",
  },
  {
    step: 2,
    title: "Neden Yanlış Yapıldı Analizi",
    desc: "Hatanın kök nedenini (konu eksiği, işlem hatası vb.) tespit etmek için sorunun detaylı incelenmesi.",
    icon: Database,
    color: "#F97316",
  },
  {
    step: 3,
    title: "Kalıcı Öğrenme Sağlama",
    desc: "Analiz edilen hatanın doğru çözümünün öğrenilmesi ve tekrar test edilerek bilginin kalıcı hale getirilmesi.",
    icon: CheckCircle,
    color: "#22C55E",
  },
];

const weeklyData = [
  { label: "Hft 1", tyt: 48, ayt: 32 },
  { label: "Hft 2", tyt: 55, ayt: 37 },
  { label: "Hft 3", tyt: 63, ayt: 42 },
  { label: "Hft 4", tyt: 70, ayt: 48 },
];

function MiniBarChart() {
  const maxVal = 80;
  return (
    <div className="flex items-end gap-3 h-32 px-4">
      {weeklyData.map(({ label, tyt, ayt }, i) => (
        <div key={label} className="flex-1 flex flex-col items-center gap-1">
          <div className="w-full flex gap-1 items-end" style={{ height: "90px" }}>
            <motion.div
              className="flex-1 rounded-t-lg bg-gradient-to-t from-[#D4AF37] to-[#F0C040]"
              initial={{ height: 0 }}
              animate={{ height: `${(tyt / maxVal) * 90}px` }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            />
            <motion.div
              className="flex-1 rounded-t-lg bg-gradient-to-t from-[#C41E3A] to-[#E02545]"
              initial={{ height: 0 }}
              animate={{ height: `${(ayt / maxVal) * 90}px` }}
              transition={{ duration: 0.8, delay: i * 0.1 + 0.05, ease: "easeOut" }}
            />
          </div>
          <span className="text-gray-500 dark:text-gray-500 text-[10px]">{label}</span>
        </div>
      ))}
      <div className="flex flex-col justify-end gap-1 pb-4 text-[10px]">
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#D4AF37]" /><span className="text-gray-500 dark:text-gray-500 dark:text-gray-400">TYT</span></div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#C41E3A]" /><span className="text-gray-500 dark:text-gray-500 dark:text-gray-400">AYT</span></div>
      </div>
    </div>
  );
}

const badges = [
  { icon: Star, title: "Haftanın Yıldızı", desc: "En yüksek net artışı" },
  { icon: TrendingUp, title: "Net Rekor Kırıcısı", desc: "Kişisel rekor kırma" },
  { icon: Trophy, title: "Haftalık İstikrar", desc: "7 gün kesintisiz çalışma" },
];

export default function DijitalTakipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.08),transparent)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-[#D4AF37] border border-[#D4AF37]/30">
            <BarChart3 className="w-4 h-4" />
            <span className="font-semibold">Veri Odaklı Öğrenci Takibi</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-[#0a1628] dark:text-white mb-6">
            Dijital Deneme <span className="text-gold-gradient">Takip Sistemi</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 dark:text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Her denemenin verisi dijital olarak kaydedilir, analiz edilir ve görselleştirilir.
            Netlerinizin istikrarlı yükselişini takip edin.
          </motion.p>
        </div>
      </section>

      {/* Tracking Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] dark:text-white mb-3">
              Dijital Takip <span className="text-gold-gradient">Bileşenleri</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackingFeatures.map(({ icon: Icon, title, desc, color }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 card-hover border border-black/5 dark:border-white/5 hover:border-[#D4AF37]/20 h-full">
                  <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                    style={{ background: `${color}20` }}>
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>
                  <h3 className="text-[#0a1628] dark:text-white font-bold mb-2">{title}</h3>
                  <p className="text-gray-500 dark:text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[#f0ece2]/80 dark:via-[#0A1628]/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-black text-[#0a1628] dark:text-white mb-4">
                Haftalık Net Artışı <span className="text-gold-gradient">Grafiği</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                Tüm deneme sınavları bazında ortalama net sayılarınızdaki haftalık değişimi takip edin.
                İstikrarlı yükselişi görselleştirin.
              </p>
              <div className="space-y-3">
                {weeklyData.map(({ label, tyt, ayt }) => (
                  <div key={label} className="flex items-center gap-4 text-sm">
                    <span className="text-gray-500 dark:text-gray-500 w-12">{label}</span>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C040]"
                        initial={{ width: 0 }}
                        animate={{ width: `${(tyt / 80) * 100}%` }}
                        transition={{ duration: 1, delay: 0.3 }} />
                    </div>
                    <span className="text-[#D4AF37] font-bold w-16">TYT {tyt}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="glass rounded-2xl p-6 border border-[#D4AF37]/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#0a1628] dark:text-white font-bold">Net Gelişim Grafiği</h3>
                  <span className="text-xs text-[#D4AF37] glass px-3 py-1 rounded-full">Son 4 Hafta</span>
                </div>
                <MiniBarChart />
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-black/5 dark:bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-[#D4AF37] font-black text-xl">+22</div>
                    <div className="text-gray-500 dark:text-gray-500 dark:text-gray-400 text-xs">TYT Net Artışı</div>
                  </div>
                  <div className="bg-black/5 dark:bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-[#C41E3A] font-black text-xl">+16</div>
                    <div className="text-gray-500 dark:text-gray-500 dark:text-gray-400 text-xs">AYT Net Artışı</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Hata Defteri */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-3">Kalıcı Öğrenme</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] dark:text-white mb-3">
              Hata Defteri <span className="text-gold-gradient">Sistemi</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Aynı hatayı iki kez yapma. Sistematik kayıt, analiz ve kalıcı öğrenme döngüsü.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-[#EF4444] via-[#F97316] to-[#22C55E] hidden sm:block" />

            <div className="space-y-6">
              {hataDefteriSteps.map(({ step, title, desc, icon: Icon, color }, i) => (
                <AnimatedSection key={step} delay={i * 0.15}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center z-10"
                      style={{ background: `${color}20`, border: `1px solid ${color}40` }}>
                      <Icon className="w-7 h-7" style={{ color }} />
                    </div>
                    <div className="glass rounded-2xl p-6 flex-1 border border-black/5 dark:border-white/5 hover:border-[#D4AF37]/20 card-hover">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>Adım {step}</span>
                      </div>
                      <h3 className="text-[#0a1628] dark:text-white font-black text-xl mb-2">{title}</h3>
                      <p className="text-gray-500 dark:text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gamification Badges */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[#f0ece2]/80 dark:via-[#0A1628]/40 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-3">Motivasyon Sistemi</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] dark:text-white mb-3">
              Motivasyon Artırıcı <span className="text-gold-gradient">Ödüller</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Dijital ödüller, rozetler ve animasyonlar. Her hedefe ulaştığında yeni bir motivasyon dalgası.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {badges.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.15}>
                <div className="glass rounded-2xl p-8 text-center card-hover border border-[#D4AF37]/10 hover:border-[#D4AF37]/30">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A8882A] flex items-center justify-center glow-gold trophy-pulse">
                    <Icon className="w-8 h-8 text-[#060D18]" />
                  </div>
                  <h3 className="text-[#0a1628] dark:text-white font-bold text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 dark:text-gray-500 dark:text-gray-400 text-sm">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-black text-[#0a1628] dark:text-white mb-4">
              Dijital Takibi <span className="text-gold-gradient">Başlat!</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-500 dark:text-gray-400 mb-8">Netlerini sistematik olarak takip etmeye bugün başla.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#A8882A] text-[#060D18] font-black px-8 py-4 rounded-full hover:from-[#F0C040] hover:to-[#D4AF37] transition-all duration-200 text-sm">
                Ücretsiz Başla <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/basari-modelimiz"
                className="inline-flex items-center gap-2 glass-button text-[#D4AF37] font-bold px-8 py-4 rounded-full text-sm">
                7 Aşamalı Modeli İncele
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
