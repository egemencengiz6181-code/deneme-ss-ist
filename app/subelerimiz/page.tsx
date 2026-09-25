"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Search, Filter, X, Building2, ArrowUpRight } from "lucide-react";
import { branches, districts, types } from "@/lib/branches";
import { CtaSection, PageHero } from "@/components/PageSections";

export default function SubelerimizPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("Tümü");
  const [selectedType, setSelectedType] = useState("Tümü");

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLocaleLowerCase("tr");
    return branches.filter((b) => {
      const matchSearch =
        !q || [b.name, b.address, b.district].some((v) => v.toLocaleLowerCase("tr").includes(q));
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
      <PageHero
        icon={Building2}
        badge={`İstanbul Geneli ${branches.length} Şube`}
        title="Şubelerimiz"
        extra={
          <dl className="flex gap-4 sm:gap-6 justify-center mt-8 flex-wrap">
            {[
              { value: branches.length.toString(), label: "Şube" },
              { value: districts.length.toString(), label: "İlçe" },
              { value: types.length.toString(), label: "Kurum Tipi" },
            ].map(({ value, label }) => (
              <div key={label} className="glass rounded-xl px-6 py-3 text-center flex flex-col-reverse">
                <dt className="text-muted-foreground text-xs">{label}</dt>
                <dd className="text-2xl font-black text-gold-gradient">{value}</dd>
              </div>
            ))}
          </dl>
        }
      >
        İstanbul genelinde {branches.length} şubemizle sizlere hizmet veriyoruz. En yakın şubeyi bulun.
      </PageHero>

      {/* Filters */}
      <section className="pb-8" aria-label="Şube filtreleri">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <label htmlFor="sube-ara" className="sr-only">Şube veya adres ara</label>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <input
                  id="sube-ara"
                  type="search"
                  placeholder="Şube veya adres ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="field pl-10"
                />
              </div>

              {/* District filter */}
              <div className="relative">
                <label htmlFor="sube-ilce" className="sr-only">İlçe</label>
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <select
                  id="sube-ilce"
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="field pl-10"
                >
                  <option value="Tümü">Tüm İlçeler</option>
                  {districts.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              {/* Type filter */}
              <div className="relative">
                <label htmlFor="sube-tip" className="sr-only">Kurum tipi</label>
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <select
                  id="sube-tip"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="field pl-10"
                >
                  <option value="Tümü">Tüm Kurum Tipleri</option>
                  {types.map((t) => (
                    <option key={t} value={t}>{t}</option>
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
                  className="mt-4 flex items-center justify-between gap-3 flex-wrap"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-muted-foreground text-sm" role="status">{filtered.length} şube bulundu</span>
                    {selectedDistrict !== "Tümü" && (
                      <span className="glass text-gold-ink text-xs px-3 py-1 rounded-full border border-gold/30 flex items-center gap-1">
                        {selectedDistrict}
                        <button type="button" aria-label={`${selectedDistrict} filtresini kaldır`} onClick={() => setSelectedDistrict("Tümü")}><X className="w-3 h-3" /></button>
                      </span>
                    )}
                    {selectedType !== "Tümü" && (
                      <span className="glass text-gold-ink text-xs px-3 py-1 rounded-full border border-gold/30 flex items-center gap-1">
                        {selectedType}
                        <button type="button" aria-label={`${selectedType} filtresini kaldır`} onClick={() => setSelectedType("Tümü")}><X className="w-3 h-3" /></button>
                      </span>
                    )}
                  </div>
                  <button
                    onClick={clearFilters}
                    className="text-muted-foreground hover:text-gold-ink text-xs flex items-center gap-1 transition-colors"
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
                <Building2 className="w-12 h-12 mx-auto text-muted-foreground/60 mb-4" />
                <p className="text-muted-foreground">Arama kriterlerinize uygun şube bulunamadı.</p>
                <button onClick={clearFilters} className="mt-4 text-gold-ink text-sm hover:underline">
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
                    <div className="glass rounded-2xl p-6 card-hover hover:border-gold/25 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-gold-dark/10 flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-gold-ink" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-foreground font-bold text-sm leading-tight mb-1">{branch.name}</h3>
                          <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-gold/15 text-gold-ink border border-gold/20">
                            {branch.type}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 flex-1">
                        {/* Address */}
                        <div className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 text-gold-ink flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-xs leading-relaxed">{branch.address}</span>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-2.5">
                          <Phone className="w-4 h-4 text-gold-ink flex-shrink-0" />
                          <a href={`tel:${branch.phone.replace(/\s/g, "")}`}
                            className="text-foreground/80 text-xs hover:text-gold-ink transition-colors">
                            {branch.phone}
                          </a>
                        </div>

                        {/* Email */}
                        {branch.email && (
                          <div className="flex items-center gap-2.5">
                            <Mail className="w-4 h-4 text-gold-ink flex-shrink-0" />
                            <a href={`mailto:${branch.email}`}
                              className="text-muted-foreground text-xs hover:text-gold-ink transition-colors truncate">
                              {branch.email}
                            </a>
                          </div>
                        )}
                      </div>

                      {/* District tag + Map link */}
                      <div className="mt-4 pt-4 border-t flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {branch.district}
                        </span>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.name + ", " + branch.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-gold-ink hover:underline font-semibold"
                        >
                          Haritada Gör <ArrowUpRight className="w-3 h-3" />
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
      <CtaSection
        title="Yakınınızdaki Şubeyi"
        highlight="Ziyaret Edin"
        text="Ücretsiz tanışma görüşmesi için bugün arayın veya formu doldurun."
        primary={{ href: "/iletisim", label: "İletişime Geç" }}
      />
    </>
  );
}
