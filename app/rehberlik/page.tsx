"use client";

import {
  Users, Calendar, TrendingUp, BookOpen,
  Trophy, CheckCircle, Star, MessageCircle, Target,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { CtaSection, PageHero, SectionHeading } from "@/components/PageSections";
import { site } from "@/lib/site";

const guidanceTypes = [
  {
    icon: Calendar,
    title: "Haftalık Birebir Görüşme",
    desc: "Haftalık periyodik görüşmelerle öğrencinin durumu değerlendirilir, motivasyon ve strateji desteği sağlanır.",
    color: "#D4AF37",
    points: ["Performans değerlendirmesi", "Motivasyon desteği", "Strateji belirleme"],
  },
  {
    icon: TrendingUp,
    title: "Gelişim Takibi",
    desc: "Deneme sonuçları ve çalışma verileri detaylıca analiz edilerek gelişim grafiği takip edilir.",
    color: "#3B82F6",
    points: ["Net grafik analizi", "Ders bazlı karşılaştırma", "Zayıf nokta tespiti"],
  },
  {
    icon: Target,
    title: "Yanlış Seçim Düzeltme",
    desc: "Bireysel analizler sonucu öğrencinin seviyesine uygun olmayan deneme sınavları için doğru kaynak planlaması yapılır.",
    color: "#22C55E",
    points: ["Seviye tespiti", "Doğru kaynak seçimi", "Plan optimizasyonu"],
  },
];

const supportSystems = [
  {
    step: 1,
    title: "Etüt Programları",
    desc: "Disiplinli ve verimli çalışma ortamı. Düzenli etüt saatleri ile konsantrasyonu artır.",
    icon: BookOpen,
    color: "#D4AF37",
  },
  {
    step: 2,
    title: "Grup Çalışmaları",
    desc: "Konu tekrarı ve yardımlaşma. Akranlarınızla birlikte öğrenerek motivasyonu yüksek tut.",
    icon: Users,
    color: "#3B82F6",
  },
  {
    step: 3,
    title: "Özel Ders Yönlendirmesi",
    desc: "Bireysel ihtiyaçlara yönelik çözümler. Belirli konularda derinlemesine destek al.",
    icon: MessageCircle,
    color: "#22C55E",
  },
];

export default function RehberlikPage() {
  return (
    <>
      {/* Hero */}
      <PageHero icon={Users} badge="Aşama 4 & 7 – Rehberlik Kontrolü" title="Rehberlik" highlight="Sistemi">
        Öğrenciyi sadece analiz etmiyoruz; haftalık görüşmeler, gelişim takibi ve destek sistemiyle her adımda yanındayız.
      </PageHero>

      {/* Aşama 4: Rehberlik Kontrolü */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Aşama 4" title="Rehberlik" highlight="Kontrolü">
            Öğrencinin deneme sürecindeki en kritik dönüm noktası. Doğru yönde ilerlediğinden emin ol.
          </SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {guidanceTypes.map(({ icon: Icon, title, desc, color, points }, i) => (
              <AnimatedSection key={title} delay={i * 0.15}>
                <div className="glass rounded-2xl p-7 card-hover hover:border-gold/20 h-full"
                  style={{ boxShadow: `0 0 30px ${color}10` }}>
                  <div className="w-14 h-14 rounded-2xl mb-5 flex items-center justify-center"
                    style={{ background: `${color}20`, border: `1px solid ${color}30` }}>
                    <Icon className="w-7 h-7" style={{ color }} />
                  </div>
                  <h3 className="text-foreground font-bold text-xl mb-3">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{desc}</p>
                  <div className="space-y-2">
                    {points.map((p) => (
                      <div key={p} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color }} />
                        <span className="text-foreground/80 text-xs">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Aşama 7: Destek Sistemi */}
      <section className="py-20 bg-gradient-to-b from-transparent via-secondary/80 dark:via-navy/40 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Aşama 7" title="Destek" highlight="Sistemi">
            Deneme Üssü ile başarıyı birlikte yazalım! Etüt, grup ve özel ders ile tam destek.
          </SectionHeading>

          <div className="space-y-6">
            {supportSystems.map(({ step, title, desc, icon: Icon, color }, i) => (
              <AnimatedSection key={step} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `${color}20`, border: `1px solid ${color}30` }}>
                    <Icon className="w-7 h-7" style={{ color }} />
                  </div>
                  <div className="glass rounded-2xl p-6 flex-1 hover:border-gold/20 card-hover">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                        style={{ background: `${color}20`, color }}>
                        {step}. Destek
                      </span>
                      <h3 className="text-foreground font-black text-xl">{title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Rehberlik Stats */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "Haftalık", label: "Görüşme Sıklığı", icon: Calendar },
              { value: "1:1", label: "Birebir Destek", icon: Users },
              { value: "500+", label: "Danışılan Öğrenci", icon: Star },
              { value: site.successRate, label: "Hedef Başarı", icon: Trophy },
            ].map(({ value, label, icon: Icon }, i) => (
              <AnimatedSection key={label} delay={i * 0.1}>
                <div className="glass rounded-2xl p-5 text-center hover:border-gold/30 card-hover">
                  <Icon className="w-6 h-6 mx-auto mb-2 text-gold-ink" />
                  <div className="text-2xl font-black text-gold-gradient mb-1">{value}</div>
                  <div className="text-muted-foreground text-xs">{label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Rehberinle"
        highlight="Tanış!"
        text="İlk ücretsiz görüşme için hemen başvur."
        primary={{ href: "/iletisim", label: "Ücretsiz Görüşme Al" }}
        secondary={{ href: "/basari-modelimiz", label: "7 Aşamalı Sistem" }}
      />
    </>
  );
}
