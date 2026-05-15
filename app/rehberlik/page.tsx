"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users, Calendar, TrendingUp, BookOpen, ArrowRight,
  Trophy, CheckCircle, Star, MessageCircle, Target,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.08),transparent)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-[#D4AF37] border border-[#D4AF37]/30">
            <Users className="w-4 h-4" />
            <span className="font-semibold">Aşama 4 & 7 – Rehberlik Kontrolü</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white mb-6">
            Rehberlik <span className="text-gold-gradient">Sistemi</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto">
            Öğrenciyi sadece analiz etmiyoruz; haftalık görüşmeler, gelişim takibi ve destek sistemiyle her adımda yanındayız.
          </motion.p>
        </div>
      </section>

      {/* Aşama 4: Rehberlik Kontrolü */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-3">Aşama 4</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Rehberlik <span className="text-gold-gradient">Kontrolü</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Öğrencinin deneme sürecindeki en kritik dönüm noktası. Doğru yönde ilerlediğinden emin ol.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {guidanceTypes.map(({ icon: Icon, title, desc, color, points }, i) => (
              <AnimatedSection key={title} delay={i * 0.15}>
                <div className="glass rounded-2xl p-7 card-hover border border-white/5 hover:border-[#D4AF37]/20 h-full"
                  style={{ boxShadow: `0 0 30px ${color}10` }}>
                  <div className="w-14 h-14 rounded-2xl mb-5 flex items-center justify-center"
                    style={{ background: `${color}20`, border: `1px solid ${color}30` }}>
                    <Icon className="w-7 h-7" style={{ color }} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{desc}</p>
                  <div className="space-y-2">
                    {points.map((p) => (
                      <div key={p} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color }} />
                        <span className="text-gray-300 text-xs">{p}</span>
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
      <section className="py-20 bg-gradient-to-b from-transparent via-[#0A1628]/40 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-3">Aşama 7</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Destek <span className="text-gold-gradient">Sistemi</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Deneme Üssü ile başarıyı birlikte yazalım! Etüt, grup ve özel ders ile tam destek.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {supportSystems.map(({ step, title, desc, icon: Icon, color }, i) => (
              <AnimatedSection key={step} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `${color}20`, border: `1px solid ${color}30` }}>
                    <Icon className="w-7 h-7" style={{ color }} />
                  </div>
                  <div className="glass rounded-2xl p-6 flex-1 border border-white/5 hover:border-[#D4AF37]/20 card-hover">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                        style={{ background: `${color}20`, color }}>
                        {step}. Destek
                      </span>
                      <h3 className="text-white font-black text-xl">{title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
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
              { value: "%91.6", label: "Hedef Başarı", icon: Trophy },
            ].map(({ value, label, icon: Icon }, i) => (
              <AnimatedSection key={label} delay={i * 0.1}>
                <div className="glass rounded-2xl p-5 text-center border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 card-hover">
                  <Icon className="w-6 h-6 mx-auto mb-2 text-[#D4AF37]" />
                  <div className="text-2xl font-black text-gold-gradient mb-1">{value}</div>
                  <div className="text-gray-500 text-xs">{label}</div>
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
            <Trophy className="w-12 h-12 mx-auto mb-4 text-[#D4AF37] trophy-pulse" />
            <h2 className="text-3xl font-black text-white mb-4">
              Rehberinle <span className="text-gold-gradient">Tanış!</span>
            </h2>
            <p className="text-gray-400 mb-8">İlk ücretsiz görüşme için hemen başvur.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#A8882A] text-[#060D18] font-black px-8 py-4 rounded-full hover:from-[#F0C040] hover:to-[#D4AF37] transition-all duration-200 text-sm">
                Ücretsiz Görüşme Al <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/basari-modelimiz"
                className="inline-flex items-center gap-2 glass-button text-[#D4AF37] font-bold px-8 py-4 rounded-full text-sm">
                7 Aşamalı Sistem
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
