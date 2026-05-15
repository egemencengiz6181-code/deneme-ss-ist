"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Target, Zap, BarChart3, Users, BookOpen, Medal, Heart,
  ArrowRight, ChevronDown, Trophy, CheckCircle, Star,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const stages = [
  {
    number: 1,
    title: "Deneme Seçimi",
    subtitle: "Doğru Zorluk Seviyesi",
    icon: Target,
    color: "#3B82F6",
    bg: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/30",
    description:
      "Öğrencinin mevcut seviyesine göre Kolay, Orta veya Zor denemelerden biri seçilir. Rehberlik kontrollü seçim sayesinde en iyi plan oluşturulur.",
    details: [
      { label: "Kolay", desc: "Başlangıç Seviyesi – Temel konuları pekiştir" },
      { label: "Orta", desc: "Ölçüm Seviyesi – Hız ve doğruluğunu geliştir" },
      { label: "Zor", desc: "İleri Düzey – Derinlemesine pratik yap" },
    ],
    highlights: ["Ders bazlı veya genel deneme seçeneği", "TYT ve AYT için ayrı planlar", "Kişisel hedefe göre optimizasyon"],
  },
  {
    number: 2,
    title: "Deneme Uygulama",
    subtitle: "Gerçek Sınav Koşulları",
    icon: Zap,
    color: "#A855F7",
    bg: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/30",
    description:
      "Deneme sınavı gerçek TYT/AYT süresi ve koşullarında uygulanır. Optik form kullanımı ve disiplinli ortam deneyimi kazandırılır.",
    details: [
      { label: "Gerçek Sınav Süresi", desc: "TYT/AYT süre formatına birebir uyum" },
      { label: "Optik Form", desc: "Gerçek optik form kullanımı alışkanlığı" },
      { label: "Disiplinli Ortam", desc: "Gözetmen eşliğinde sessiz çalışma" },
    ],
    highlights: ["Sınav stresi yönetimi", "Zaman yönetimi becerisi", "Sonuç analizi için veri toplama"],
  },
  {
    number: 3,
    title: "Sonuç Analizi",
    subtitle: "Detaylı Performans Raporu",
    icon: BarChart3,
    color: "#D4AF37",
    bg: "from-[#D4AF37]/20 to-[#A8882A]/5",
    border: "border-[#D4AF37]/30",
    description:
      "Her deneme sonrası net puanlar, sıralamalar ve ders bazlı başarı oranları anlık olarak hesaplanır. Konu bazlı hata tespiti yapılır.",
    details: [
      { label: "Net Puan & Başarı", desc: "Toplam doğru, yanlış, boş ve başarı oranı" },
      { label: "Ders Bazlı Analiz", desc: "Her ders için ayrı net ve başarı istatistikleri" },
      { label: "Konu Bazlı Hata", desc: "Hangi alt konularda hata yapıldığı belirlenir" },
    ],
    highlights: ["Kurum içi sıralama", "Ders bazlı güçlü/zayıf analizi", "Hata kitapçığı oluşturma"],
  },
  {
    number: 4,
    title: "Rehberlik Kontrolü",
    subtitle: "Haftalık Birebir Destek",
    icon: Users,
    color: "#22C55E",
    bg: "from-green-500/20 to-green-600/5",
    border: "border-green-500/30",
    description:
      "Rehber öğretmen ile haftalık birebir görüşmeler yapılır. Gelişim grafiği takip edilir ve yanlış deneme seçimleri düzeltilir.",
    details: [
      { label: "Haftalık Görüşme", desc: "Motivasyon ve strateji desteği sağlanır" },
      { label: "Gelişim Takibi", desc: "Deneme sonuçları ve çalışma verileri analizi" },
      { label: "Seçim Düzeltme", desc: "Seviyeye uygun olmayan denemeler değiştirilir" },
    ],
    highlights: ["Kişisel motivasyon desteği", "Haftalık strateji güncelleme", "Veli bilgilendirme raporları"],
  },
  {
    number: 5,
    title: "Eksik Konu Tespiti",
    subtitle: "Zayıf Konu Analizi",
    icon: BookOpen,
    color: "#EF4444",
    bg: "from-red-500/20 to-red-600/5",
    border: "border-red-500/30",
    description:
      "Sınavdaki hatalı sorular ilgili konu başlıklarıyla eşleştirilir. Zayıf konu listesi oluşturulur ve önem derecesine göre önceliklendirilir.",
    details: [
      { label: "Konu Eşleştirme", desc: "Her yanlış soru TYT/AYT konusuyla bağlanır" },
      { label: "Zayıf Konu Listesi", desc: "Detaylı eksik konular listelenir" },
      { label: "Önceliklendirme", desc: "Sınav puanı ağırlığına göre sıralama yapılır" },
    ],
    highlights: ["Hayati (hemen çalış) konu tespiti", "Sınav puanı ağırlıklı önceliklendirme", "Tekrar programına entegrasyon"],
  },
  {
    number: 6,
    title: "Kişisel Program",
    subtitle: "Özelleştirilmiş Çalışma Planı",
    icon: Medal,
    color: "#F97316",
    bg: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/30",
    description:
      "Eksik konulara göre haftalık çalışma programı oluşturulur. Ders saatleri, mola aralıkları ve tekrar+deneme dengesi ayarlanır.",
    details: [
      { label: "Haftalık Plan", desc: "Özelleştirilmiş gerçekçi program" },
      { label: "Eksik Odaklı Dağılım", desc: "Zayıf konulara öncelik vererek ders süresi" },
      { label: "Tekrar+Deneme Dengesi", desc: "Konu tekrarı ile deneme sınavı dengesi" },
    ],
    highlights: ["Ders saati ve mola planı", "Veri analizi ve konu önceliklendirme", "Zamanlama ve periyot optimizasyonu"],
  },
  {
    number: 7,
    title: "Destek Sistemi",
    subtitle: "Topluluk ve Mentörlük",
    icon: Heart,
    color: "#EC4899",
    bg: "from-pink-500/20 to-pink-600/5",
    border: "border-pink-500/30",
    description:
      "Etüt programları, grup çalışmaları ve özel ders yönlendirmesi ile öğrencilere kapsamlı destek sağlanır.",
    details: [
      { label: "Etüt Programları", desc: "Disiplinli ve verimli çalışma ortamı" },
      { label: "Grup Çalışmaları", desc: "Konu tekrarı ve yardımlaşma" },
      { label: "Özel Ders", desc: "Bireysel ihtiyaçlara yönelik çözümler" },
    ],
    highlights: ["Deneme Üssü ile başarıyı birlikte yazma", "Akran öğrenimi ve motivasyon", "7/24 destek erişimi"],
  },
];

function StageCard({ stage, index }: { stage: (typeof stages)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = stage.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div
        className={`glass rounded-2xl border ${stage.border} bg-gradient-to-br ${stage.bg} overflow-hidden`}
        style={{ boxShadow: `0 0 30px ${stage.color}15` }}
      >
        {/* Header */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full p-6 flex items-center gap-5 text-left"
        >
          {/* Step number */}
          <div
            className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl text-[#060D18]"
            style={{ background: `linear-gradient(135deg, ${stage.color}, ${stage.color}99)`, boxShadow: `0 0 20px ${stage.color}50` }}
          >
            {stage.number}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Icon className="w-5 h-5" style={{ color: stage.color }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: stage.color }}>
                Aşama {stage.number}
              </span>
            </div>
            <h3 className="text-white font-black text-xl leading-tight">{stage.title}</h3>
            <p className="text-gray-400 text-sm">{stage.subtitle}</p>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {/* Expanded */}
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 border-t border-white/10 pt-5">
            <p className="text-gray-300 text-sm leading-relaxed mb-6">{stage.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {stage.details.map(({ label, desc }) => (
                <div key={label} className="bg-white/5 rounded-xl p-4">
                  <div className="font-bold text-sm mb-1" style={{ color: stage.color }}>{label}</div>
                  <div className="text-gray-400 text-xs">{desc}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {stage.highlights.map((h) => (
                <span key={h} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-300">
                  <CheckCircle className="w-3 h-3" style={{ color: stage.color }} />
                  {h}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function BasariModelimizPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.1),transparent)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-[#D4AF37] border border-[#D4AF37]/30"
          >
            <Trophy className="w-4 h-4" />
            <span className="font-semibold">Bilimsel Başarı Metodolojisi</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white mb-6"
          >
            7 Aşamalı{" "}
            <span className="text-gold-gradient">Başarı Modeli</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
          >
            Her aşama, bir öncekinin üzerine inşa edilen bilimsel bir döngü oluşturur.
            Öğrencinin hedefleri ve profiliyle uyumlu, kişiselleştirilmiş başarı yolculuğu.
          </motion.p>

          {/* Journey line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 flex-wrap"
          >
            {stages.map((s, i) => (
              <div key={s.number} className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-[#060D18]"
                  style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}80)` }}
                >
                  {s.number}
                </div>
                {i < stages.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-10 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          {stages.map((stage, i) => (
            <StageCard key={stage.number} stage={stage} index={i} />
          ))}
        </div>
      </section>

      {/* Cycle visual */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[#0A1628]/40 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Döngüsel <span className="text-gold-gradient">Gelişim Sistemi</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Her deneme döngüsü bir öncekinden daha güçlü başlar. Net artışı istikrarlı ve ölçülebilir.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { net: "NET 48", label: "1. Hafta", week: 1 },
              { net: "NET 55", label: "2. Hafta", week: 2 },
              { net: "NET 63", label: "3. Hafta", week: 3 },
              { net: "NET 70", label: "4. Hafta", week: 4 },
            ].map(({ net, label, week }, i) => (
              <AnimatedSection key={net} delay={i * 0.15}>
                <div className="glass rounded-2xl p-6 text-center card-hover border border-[#D4AF37]/10 hover:border-[#D4AF37]/30">
                  <div className="text-[#D4AF37] font-black text-2xl mb-1">{net}</div>
                  <div className="text-gray-400 text-sm">{label}</div>
                  <div className="mt-3 flex justify-center gap-0.5">
                    {[...Array(week)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
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
              Bu Sistemi <span className="text-gold-gradient">Yaşa!</span>
            </h2>
            <p className="text-gray-400 mb-8">
              7 aşamalı sistemimizin tüm avantajlarından yararlanmak için hemen başvur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#A8882A] text-[#060D18] font-black px-8 py-4 rounded-full hover:from-[#F0C040] hover:to-[#D4AF37] transition-all duration-200 text-sm">
                Ücretsiz Danışma Al <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/dijital-takip"
                className="inline-flex items-center gap-2 glass-button text-[#D4AF37] font-bold px-8 py-4 rounded-full text-sm">
                Dijital Takip Sistemi
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
