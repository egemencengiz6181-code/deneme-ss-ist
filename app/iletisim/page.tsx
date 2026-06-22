"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, Trophy, Clock, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "+90 212 551 30 30", href: "tel:+902125513030" },
  { icon: Mail, label: "E-posta", value: "info@denemeusu.com", href: "mailto:info@denemeusu.com" },
  { icon: MapPin, label: "Adres", value: "İstanbul, Türkiye – 13 Şube", href: "/subelerimiz" },
  { icon: Clock, label: "Çalışma Saatleri", value: "Pzt–Cmt: 09:00 – 20:00", href: null },
];

export default function IletisimPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Ad soyad gerekli";
    if (!formData.phone.trim()) newErrors.phone = "Telefon gerekli";
    else if (!/^[0-9+\s\-()]{7,15}$/.test(formData.phone)) newErrors.phone = "Geçerli bir telefon girin";
    if (!formData.email.trim()) newErrors.email = "E-posta gerekli";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Geçerli bir e-posta girin";
    if (!formData.message.trim()) newErrors.message = "Mesaj gerekli";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    // In production, send to API route
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.08),transparent)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-[#D4AF37] border border-[#D4AF37]/30">
            <Users className="w-4 h-4" />
            <span className="font-semibold">Ücretsiz Danışma</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-[#0a1628] dark:text-white mb-6">
            Bizimle <span className="text-gold-gradient">İletişime Geç</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 dark:text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Ücretsiz danışma randevusu al veya sorularını bize ilet. En geç 24 saat içinde yanıt veririz.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection direction="left">
                <div className="glass-strong rounded-2xl p-6">
                  <Trophy className="w-10 h-10 text-[#D4AF37] mb-4 trophy-pulse" />
                  <h2 className="text-xl font-black text-[#0a1628] dark:text-white mb-2">Neden Bizi Seçmelisin?</h2>
                  <p className="text-gray-500 dark:text-gray-500 dark:text-gray-400 text-sm mb-5">
                    7 aşamalı sistemi bizzat deneyimlemek için bir adım at.
                  </p>
                  <div className="space-y-3">
                    {["Ücretsiz ilk değerlendirme", "Kişiselleştirilmiş seviye testi", "7 aşamalı sistem tanıtımı", "Rehber atama ve plan oluşturma"].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.1}>
                <div className="space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="glass rounded-xl p-4 border border-black/5 dark:border-white/5 hover:border-[#D4AF37]/20 card-hover">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-[#D4AF37]" />
                        </div>
                        <div>
                          <div className="text-gray-500 dark:text-gray-500 text-xs mb-0.5">{label}</div>
                          {href ? (
                            <a href={href} className="text-gray-200 text-sm font-medium hover:text-[#D4AF37] transition-colors">
                              {value}
                            </a>
                          ) : (
                            <span className="text-gray-200 text-sm font-medium">{value}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="glass-strong rounded-2xl p-8">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A8882A] flex items-center justify-center glow-gold">
                        <CheckCircle className="w-8 h-8 text-[#060D18]" />
                      </div>
                      <h3 className="text-[#0a1628] dark:text-white font-black text-2xl mb-2">Mesajın Alındı!</h3>
                      <p className="text-gray-500 dark:text-gray-500 dark:text-gray-400">En geç 24 saat içinde seninle iletişime geçeceğiz.</p>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-xl font-black text-[#0a1628] dark:text-white mb-6">Danışma Formu</h2>
                      <form onSubmit={handleSubmit} noValidate className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {/* Name */}
                          <div>
                            <label className="block text-gray-500 dark:text-gray-500 dark:text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                              Ad Soyad *
                            </label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Adınız Soyadınız"
                              className={`w-full px-4 py-3 bg-black/5 dark:bg-white/5 border rounded-xl text-[#0a1628] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/25 transition-all ${errors.name ? "border-red-500" : "border-black/10 dark:border-white/10 focus:border-[#D4AF37]/60"}`}
                            />
                            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                          </div>

                          {/* Phone */}
                          <div>
                            <label className="block text-gray-500 dark:text-gray-500 dark:text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                              Telefon *
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+90 5XX XXX XX XX"
                              className={`w-full px-4 py-3 bg-black/5 dark:bg-white/5 border rounded-xl text-[#0a1628] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/25 transition-all ${errors.phone ? "border-red-500" : "border-black/10 dark:border-white/10 focus:border-[#D4AF37]/60"}`}
                            />
                            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-gray-500 dark:text-gray-500 dark:text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                            E-posta *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="ornek@email.com"
                            className={`w-full px-4 py-3 bg-black/5 dark:bg-white/5 border rounded-xl text-[#0a1628] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/25 transition-all ${errors.email ? "border-red-500" : "border-black/10 dark:border-white/10 focus:border-[#D4AF37]/60"}`}
                          />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Subject */}
                        <div>
                          <label className="block text-gray-500 dark:text-gray-500 dark:text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                            Konu
                          </label>
                          <select
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl text-[#0a1628] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/25 focus:border-[#D4AF37]/60 transition-all appearance-none"
                          >
                            <option value="" className="bg-[#0A1628]">Konu seçin</option>
                            <option value="ucretsiz-danisma" className="bg-[#0A1628]">Ücretsiz Danışma</option>
                            <option value="kayit" className="bg-[#0A1628]">Kayıt / Başvuru</option>
                            <option value="sube-bilgi" className="bg-[#0A1628]">Şube Bilgisi</option>
                            <option value="sistem-bilgi" className="bg-[#0A1628]">Sistem Hakkında</option>
                            <option value="diger" className="bg-[#0A1628]">Diğer</option>
                          </select>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-gray-500 dark:text-gray-500 dark:text-gray-400 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                            Mesaj *
                          </label>
                          <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Bize ne sormak istiyorsunuz?"
                            rows={4}
                            className={`w-full px-4 py-3 bg-black/5 dark:bg-white/5 border rounded-xl text-[#0a1628] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/25 transition-all resize-none ${errors.message ? "border-red-500" : "border-black/10 dark:border-white/10 focus:border-[#D4AF37]/60"}`}
                          />
                          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                        </div>

                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#A8882A] text-[#060D18] font-black py-4 rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:from-[#F0C040] hover:to-[#D4AF37] hover:shadow-[#D4AF37]/35 hover:scale-[1.01] transition-all duration-200 text-sm"
                        >
                          <Send className="w-4 h-4" /> Gönder
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
