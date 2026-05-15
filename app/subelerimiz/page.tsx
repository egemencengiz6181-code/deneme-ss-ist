"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Search, Filter, X, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { branches, districts, types } from "@/lib/branches";
import AnimatedSection from "@/components/AnimatedSection";

export default function SubelerimizPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("Tümü");
  const [selectedType, setSelectedType] = useState("Tümü");

  const filtered = useMemo(() => {
    return branches.filter((b) => {
      const matchSearch =
        !searchQuery ||
        b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.district.toLowerCase().includes(searchQuery.toLowerCase());
      const matchDistrict = selectedDistrict === "Tümü" || b.district === selectedDistrict;
      const matchType = selectedType === "Tümü" || b.type === selectedType;
      return matchSearch && matchDistrict && matchType;
    });
  }, [searchQuery, selectedDistrict, selectedType]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDistrict("Tümü");
    setSelectedType("Tümü");
  };

  const hasActiveFilters = searchQuery || selectedDistrict !== "Tümü" || selectedType !== "Tümü";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.08),transparent)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-[#D4AF37] border border-[#D4AF37]/30">
            <Building2 className="w-4 h-4" />
            <span className="font-semibold">İstanbul Geneli 13 Şube</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white mb-6">
            Şubelerimiz
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto">
            İstanbul genelinde 13 şubemizle sizlere hizmet veriyoruz. En yakın şubeyi bulun.
          </motion.p>
          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-6 justify-center mt-8 flex-wrap">
            {[
              { value: "13", label: "Şube" },
              { value: districts.length.toString(), label: "İlçe" },
              { value: types.length.toString(), label: "Kurum Tipi" },
            ].map(({ value, label }) => (
              <div key={label} className="glass rounded-xl px-6 py-3 text-center border border-[#D4AF37]/20">
                <div className="text-2xl font-black text-gold-gradient">{value}</div>
                <div className="text-gray-400 text-xs">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-6 border border-[#D4AF37]/10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Şube veya adres ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                />
              </div>

              {/* District filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors appearance-none cursor-pointer"
                >
                  <option value="Tümü" className="bg-[#0A1628]">Tüm İlçeler</option>
                  {districts.map((d) => (
                    <option key={d} value={d} className="bg-[#0A1628]">{d}</option>
                  ))}
                </select>
              </div>

              {/* Type filter */}
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors appearance-none cursor-pointer"
                >
                  <option value="Tümü" className="bg-[#0A1628]">Tüm Kurum Tipleri</option>
                  {types.map((t) => (
                    <option key={t} value={t} className="bg-[#0A1628]">{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active filters + clear */}
            <AnimatePresence>
              {hasActiveFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-gray-400 text-sm">{filtered.length} şube bulundu</span>
                    {selectedDistrict !== "Tümü" && (
                      <span className="glass text-[#D4AF37] text-xs px-3 py-1 rounded-full border border-[#D4AF37]/30 flex items-center gap-1">
                        {selectedDistrict}
                        <button onClick={() => setSelectedDistrict("Tümü")}><X className="w-3 h-3" /></button>
                      </span>
                    )}
                    {selectedType !== "Tümü" && (
                      <span className="glass text-[#D4AF37] text-xs px-3 py-1 rounded-full border border-[#D4AF37]/30 flex items-center gap-1">
                        {selectedType}
                        <button onClick={() => setSelectedType("Tümü")}><X className="w-3 h-3" /></button>
                      </span>
                    )}
                  </div>
                  <button
                    onClick={clearFilters}
                    className="text-gray-400 hover:text-[#D4AF37] text-xs flex items-center gap-1 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" /> Filtreleri Temizle
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Branch Cards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="sync">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <Building2 className="w-12 h-12 mx-auto text-gray-600 mb-4" />
                <p className="text-gray-400">Arama kriterlerinize uygun şube bulunamadı.</p>
                <button onClick={clearFilters} className="mt-4 text-[#D4AF37] text-sm hover:underline">
                  Tüm şubeleri göster
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {filtered.map((branch, i) => (
                  <motion.div
                    key={branch.name}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <div className="glass rounded-2xl p-6 card-hover border border-white/5 hover:border-[#D4AF37]/25 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#A8882A]/10 flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-bold text-sm leading-tight mb-1">{branch.name}</h3>
                          <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/20">
                            {branch.type}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 flex-1">
                        {/* Address */}
                        <div className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400 text-xs leading-relaxed">{branch.address}</span>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-2.5">
                          <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                          <a href={`tel:${branch.phone.replace(/\s/g, "")}`}
                            className="text-gray-300 text-xs hover:text-[#D4AF37] transition-colors">
                            {branch.phone}
                          </a>
                        </div>

                        {/* Email */}
                        {branch.email && (
                          <div className="flex items-center gap-2.5">
                            <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                            <a href={`mailto:${branch.email}`}
                              className="text-gray-400 text-xs hover:text-[#D4AF37] transition-colors truncate">
                              {branch.email}
                            </a>
                          </div>
                        )}
                      </div>

                      {/* District tag + Map link */}
                      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {branch.district}
                        </span>
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-[#D4AF37] hover:text-[#F0C040] transition-colors font-semibold"
                        >
                          Haritada Gör <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <div className="glass rounded-3xl p-10 border border-[#D4AF37]/20">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Yakınınızdaki Şubeyi <span className="text-gold-gradient">Ziyaret Edin</span>
              </h2>
              <p className="text-gray-400 mb-6 text-sm">
                Ücretsiz tanışma görüşmesi için bugün arayın veya formu doldurun.
              </p>
              <Link href="/iletisim"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#A8882A] text-[#060D18] font-black px-8 py-4 rounded-full hover:from-[#F0C040] hover:to-[#D4AF37] transition-all duration-200 text-sm">
                İletişime Geç <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
