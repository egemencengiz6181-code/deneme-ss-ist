"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Trophy, Target, Users, TrendingUp, Star, ArrowRight,
  CheckCircle, Zap, Shield, BookOpen,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  { icon: Trophy, title: "Mükemmellik", desc: "Her öğrenciye en yüksek kalitede eğitim ve analiz hizmeti sunmak." },
  { icon: Target, title: "Veri Odaklılık", desc: "Kararları sezgilere değil, ölçülebilir verilere dayandırmak." },
  { icon: Users, title: "Kişiselleştirme", desc: "Her öğrencinin benzersiz ihtiyaçlarına özel çözümler üretmek." },
  { icon: TrendingUp, title: "Sürekli Gelişim", desc: "Sistem, yöntem ve yaklaşımları sürekli olarak iyileştirmek." },
];

const teamStats = [
  { value: "8+", label: "Yıl Deneyim" },
  { value: "500+", label: "Mezun Öğrenci" },
  { value: "13", label: "Aktif Şube" },
  { value: "%91.6", label: "Hedef Başarı Oranı" },
];



export default function KurumsalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.08),transparent)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-[#D4AF37] border border-[#D4AF37]/30">
            <Shield className="w-4 h-4" />
            <span className="font-semibold">Hakkımızda</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-[#0a1628] dark:text-white mb-6">
            Biz <span className="text-gold-gradient">Kimiz?</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 dark:text-gray-500 dark:text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Deneme Üssü, İstanbul merkezli premium bir eğitim ve sınav kulübüdür.
            Öğrencilerin TYT/AYT süreçlerini bilimsel, veri odaklı ve kişiselleştirilmiş bir sistemle yönetmelerini sağlıyoruz.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="divider-gold mb-12" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {teamStats.map(({ value, label }, i) => (
              <AnimatedSection key={label} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 text-center card-hover border border-[#D4AF37]/10 hover:border-[#D4AF37]/30">
                  <div className="text-3xl font-black text-gold-gradient mb-1">{value}</div>
                  <div className="text-gray-500 dark:text-gray-500 dark:text-gray-400 text-sm">{label}</div>
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
              <div className="glass rounded-2xl p-8 border border-[#D4AF37]/20 h-full" style={{ boxShadow: "0 0 40px rgba(212,175,55,0.08)" }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#A8882A] flex items-center justify-center mb-5 glow-gold">
                  <Target className="w-6 h-6 text-[#060D18]" />
                </div>
                <h2 className="text-2xl font-black text-[#0a1628] dark:text-white mb-4">Misyonumuz</h2>
                <p className="text-gray-500 dark:text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  Her öğrencinin potansiyelini en üst düzeye çıkarmak için bilimsel, ölçülebilir ve kişiselleştirilmiş bir
                  sınav hazırlık sistemi sunmak. Sadece deneme sınavı değil; analiz, rehberlik ve takip ile tam bir başarı ekosistemi oluşturmak.
                </p>
                <div className="space-y-3">
                  {["Veri tabanlı kişisel gelişim planları", "7 aşamalı bilimsel metodoloji", "Sürekli rehberlik ve destek"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
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
                <h2 className="text-2xl font-black text-[#0a1628] dark:text-white mb-4">Vizyonumuz</h2>
                <p className="text-gray-500 dark:text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  Türkiye'nin en kapsamlı dijital sınav takip ve analiz platformu olmak. Her öğrencinin hedefine ulaşmasına yardımcı olan,
                  ölçülebilir başarı garantisi sunan lider eğitim markası haline gelmek.
                </p>
                <div className="space-y-3">
                  {["Türkiye genelinde yaygınlaşma", "Tam dijital platform entegrasyonu", "AI destekli kişisel öğrenme"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#C41E3A]" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[#f0ece2]/80 dark:via-[#0A1628]/40 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] dark:text-white mb-3">
              Temel <span className="text-gold-gradient">Değerlerimiz</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 text-center card-hover border border-black/5 dark:border-white/5 hover:border-[#D4AF37]/20 h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#A8882A]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-[#0a1628] dark:text-white font-bold mb-2">{title}</h3>
                  <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>



      {/* What Sets Us Apart */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[#f0ece2]/80 dark:via-[#0A1628]/40 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] dark:text-white mb-3">
              Bizi <span className="text-gold-gradient">Farklı Kılan</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Bireyselleştirilmiş Deneme Analizi", desc: "Her öğrenci için özel analiz raporu ve aksiyon planı." },
              { icon: TrendingUp, title: "Veri Odaklı Öğrenci Takibi", desc: "Haftalık net grafikleri ve ders bazlı ilerleme raporları." },
              { icon: Users, title: "Sürekli Gelişim ve Yönlendirme", desc: "Haftalık rehberlik görüşmeleri ve kişisel motivasyon desteği." },
            ].map(({ icon: Icon, title, desc }) => (
              <AnimatedSection key={title}>
                <div className="glass rounded-2xl p-6 text-center card-hover border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 h-full">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#A8882A] flex items-center justify-center glow-gold">
                    <Icon className="w-7 h-7 text-[#060D18]" />
                  </div>
                  <h3 className="text-[#0a1628] dark:text-white font-bold mb-2">{title}</h3>
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
            <Trophy className="w-12 h-12 mx-auto mb-4 text-[#D4AF37] trophy-pulse" />
            <h2 className="text-3xl font-black text-[#0a1628] dark:text-white mb-4">
              Ailemize <span className="text-gold-gradient">Katıl!</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-500 dark:text-gray-400 mb-8">Başarı hikayeni bizimle yaz.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#A8882A] text-[#060D18] font-black px-8 py-4 rounded-full hover:from-[#F0C040] hover:to-[#D4AF37] transition-all duration-200 text-sm">
                İletişime Geç <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/subelerimiz"
                className="inline-flex items-center gap-2 glass-button text-[#D4AF37] font-bold px-8 py-4 rounded-full text-sm">
                Şubelerimiz
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
