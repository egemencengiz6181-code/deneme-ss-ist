"use client";

import {
  Trophy, Target, Users, TrendingUp, Star,
  CheckCircle, Zap, Shield, BookOpen,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { CtaSection, PageHero, SectionHeading } from "@/components/PageSections";
import { site } from "@/lib/site";

const values = [
  { icon: Trophy, title: "Mükemmellik", desc: "Her öğrenciye en yüksek kalitede eğitim ve analiz hizmeti sunmak." },
  { icon: Target, title: "Veri Odaklılık", desc: "Kararları sezgilere değil, ölçülebilir verilere dayandırmak." },
  { icon: Users, title: "Kişiselleştirme", desc: "Her öğrencinin benzersiz ihtiyaçlarına özel çözümler üretmek." },
  { icon: TrendingUp, title: "Sürekli Gelişim", desc: "Sistem, yöntem ve yaklaşımları sürekli olarak iyileştirmek." },
];

const teamStats = [
  { value: "8+", label: "Yıl Deneyim" },
  { value: "500+", label: "Mezun Öğrenci" },
  { value: `${site.branchCount}`, label: "Aktif Şube" },
  { value: site.successRate, label: "Hedef Başarı Oranı" },
];



export default function KurumsalPage() {
  return (
    <>
      {/* Hero */}
      <PageHero icon={Shield} badge="Hakkımızda" title="Biz" highlight="Kimiz?">
        Deneme Üssü, İstanbul merkezli premium bir eğitim ve sınav kulübüdür. Öğrencilerin TYT/AYT süreçlerini bilimsel,
        veri odaklı ve kişiselleştirilmiş bir sistemle yönetmelerini sağlıyoruz.
      </PageHero>

      {/* Stats */}
      <section className="py-12">
        <div className="divider-gold mb-12" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {teamStats.map(({ value, label }, i) => (
              <AnimatedSection key={label} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 text-center card-hover hover:border-gold/30">
                  <div className="text-3xl font-black text-gold-gradient mb-1">{value}</div>
                  <div className="text-muted-foreground text-sm">{label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="divider-gold mt-12" />
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="glass rounded-2xl p-8 border border-gold/20 h-full" style={{ boxShadow: "0 0 40px rgba(212,175,55,0.08)" }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mb-5 glow-gold">
                  <Target className="w-6 h-6 text-navy-dark" />
                </div>
                <h2 className="text-2xl font-black text-foreground mb-4">Misyonumuz</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Her öğrencinin potansiyelini en üst düzeye çıkarmak için bilimsel, ölçülebilir ve kişiselleştirilmiş bir
                  sınav hazırlık sistemi sunmak. Sadece deneme sınavı değil; analiz, rehberlik ve takip ile tam bir başarı ekosistemi oluşturmak.
                </p>
                <div className="space-y-3">
                  {["Veri tabanlı kişisel gelişim planları", "7 aşamalı bilimsel metodoloji", "Sürekli rehberlik ve destek"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold-ink" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="glass rounded-2xl p-8 border border-[#C41E3A]/20 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C41E3A]/30 to-[#C41E3A]/10 flex items-center justify-center mb-5">
                  <Zap className="w-6 h-6 text-[#C41E3A]" />
                </div>
                <h2 className="text-2xl font-black text-foreground mb-4">Vizyonumuz</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Türkiye&apos;nin en kapsamlı dijital sınav takip ve analiz platformu olmak. Her öğrencinin hedefine ulaşmasına yardımcı olan,
                  ölçülebilir başarı garantisi sunan lider eğitim markası haline gelmek.
                </p>
                <div className="space-y-3">
                  {["Türkiye genelinde yaygınlaşma", "Tam dijital platform entegrasyonu", "AI destekli kişisel öğrenme"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#C41E3A]" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-transparent via-secondary/80 dark:via-navy/40 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Temel" highlight="Değerlerimiz" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 text-center card-hover hover:border-gold/20 h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-ink" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>



      {/* What Sets Us Apart */}
      <section className="py-20 bg-gradient-to-b from-transparent via-secondary/80 dark:via-navy/40 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Bizi" highlight="Farklı Kılan" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Bireyselleştirilmiş Deneme Analizi", desc: "Her öğrenci için özel analiz raporu ve aksiyon planı." },
              { icon: TrendingUp, title: "Veri Odaklı Öğrenci Takibi", desc: "Haftalık net grafikleri ve ders bazlı ilerleme raporları." },
              { icon: Users, title: "Sürekli Gelişim ve Yönlendirme", desc: "Haftalık rehberlik görüşmeleri ve kişisel motivasyon desteği." },
            ].map(({ icon: Icon, title, desc }) => (
              <AnimatedSection key={title}>
                <div className="glass rounded-2xl p-6 text-center card-hover hover:border-gold/30 h-full">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center glow-gold">
                    <Icon className="w-7 h-7 text-navy-dark" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Ailemize"
        highlight="Katıl!"
        text="Başarı hikayeni bizimle yaz. Ücretsiz tanışma görüşmesiyle sistemimizi yakından tanı."
        primary={{ href: "/iletisim", label: "İletişime Geç" }}
        secondary={{ href: "/subelerimiz", label: "Şubelerimiz" }}
      />
    </>
  );
}
