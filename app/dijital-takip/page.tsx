"use client";

import { motion } from "framer-motion";
import {
  BarChart3, TrendingUp, Database, FileSpreadsheet,
  BookMarked, Trophy, CheckCircle, Star,
  Folder, Monitor, Activity,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { CtaSection, PageHero, SectionHeading } from "@/components/PageSections";

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
          <span className="text-muted-foreground text-[10px]">{label}</span>
        </div>
      ))}
      <div className="flex flex-col justify-end gap-1 pb-4 text-[10px]">
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#D4AF37]" /><span className="text-muted-foreground">TYT</span></div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#C41E3A]" /><span className="text-muted-foreground">AYT</span></div>
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
      <PageHero icon={BarChart3} badge="Veri Odaklı Öğrenci Takibi" title="Dijital Deneme" highlight="Takip Sistemi">
        Her denemenin verisi dijital olarak kaydedilir, analiz edilir ve görselleştirilir. Netlerinizin istikrarlı
        yükselişini takip edin.
      </PageHero>

      {/* Tracking Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Dijital Takip" highlight="Bileşenleri" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackingFeatures.map(({ icon: Icon, title, desc, color }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 card-hover hover:border-gold/20 h-full">
                  <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                    style={{ background: `${color}20` }}>
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>
                  <h3 className="text-foreground font-bold mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-secondary/80 dark:via-navy/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-black text-foreground mb-4">
                Haftalık Net Artışı <span className="text-gold-gradient">Grafiği</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Tüm deneme sınavları bazında ortalama net sayılarınızdaki haftalık değişimi takip edin.
                İstikrarlı yükselişi görselleştirin.
              </p>
              <div className="space-y-3">
                {weeklyData.map(({ label, tyt }) => (
                  <div key={label} className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground w-12">{label}</span>
                    <div className="flex-1 h-2 bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F0C040]"
                        initial={{ width: 0 }}
                        animate={{ width: `${(tyt / 80) * 100}%` }}
                        transition={{ duration: 1, delay: 0.3 }} />
                    </div>
                    <span className="text-gold-ink font-bold w-16">TYT {tyt}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="glass rounded-2xl p-6 border border-gold/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-foreground font-bold">Net Gelişim Grafiği</h3>
                  <span className="text-xs text-gold-ink glass px-3 py-1 rounded-full">Son 4 Hafta</span>
                </div>
                <MiniBarChart />
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-black/5 dark:bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-gold-ink font-black text-xl">+22</div>
                    <div className="text-muted-foreground text-xs">TYT Net Artışı</div>
                  </div>
                  <div className="bg-black/5 dark:bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-[#C41E3A] font-black text-xl">+16</div>
                    <div className="text-muted-foreground text-xs">AYT Net Artışı</div>
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
          <SectionHeading eyebrow="Kalıcı Öğrenme" title="Hata Defteri" highlight="Sistemi">
            Aynı hatayı iki kez yapma. Sistematik kayıt, analiz ve kalıcı öğrenme döngüsü.
          </SectionHeading>

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
                    <div className="glass rounded-2xl p-6 flex-1 hover:border-gold/20 card-hover">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>Adım {step}</span>
                      </div>
                      <h3 className="text-foreground font-black text-xl mb-2">{title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gamification Badges */}
      <section className="py-20 bg-gradient-to-b from-transparent via-secondary/80 dark:via-navy/40 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Motivasyon Sistemi" title="Motivasyon Artırıcı" highlight="Ödüller">
            Dijital ödüller, rozetler ve animasyonlar. Her hedefe ulaştığında yeni bir motivasyon dalgası.
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {badges.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.15}>
                <div className="glass rounded-2xl p-8 text-center card-hover hover:border-gold/30">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center glow-gold trophy-pulse">
                    <Icon className="w-8 h-8 text-navy-dark" />
                  </div>
                  <h3 className="text-foreground font-bold text-lg mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Dijital Takibi"
        highlight="Başlat!"
        text="Netlerini sistematik olarak takip etmeye bugün başla."
        primary={{ href: "/iletisim", label: "Ücretsiz Başla" }}
        secondary={{ href: "/basari-modelimiz", label: "7 Aşamalı Modeli İncele" }}
      />
    </>
  );
}
