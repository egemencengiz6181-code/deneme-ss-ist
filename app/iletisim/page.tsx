"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, Trophy, Clock, Users, Loader2, AlertCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageSections";
import { site } from "@/lib/site";
import {
  contactSubjects,
  validateContact,
  MAX_MESSAGE_LENGTH,
  type ContactErrors,
  type ContactForm,
} from "@/lib/contact";

const contactInfo = [
  { icon: Phone, label: "Telefon", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "E-posta", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Adres", value: `İstanbul, Türkiye – ${site.branchCount} Şube`, href: "/subelerimiz" },
  { icon: Clock, label: "Çalışma Saatleri", value: site.hours, href: null },
];

const emptyForm: ContactForm = { name: "", phone: "", email: "", subject: "", message: "", consent: false };

type Status = "idle" | "sending" | "sent" | "error";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-red-600 dark:text-red-400 text-xs mt-1.5">
      {message}
    </p>
  );
}

const labelClass = "block text-muted-foreground text-xs font-semibold mb-1.5 uppercase tracking-wider";

export default function IletisimPage() {
  const [formData, setFormData] = useState<ContactForm>(emptyForm);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = <K extends keyof ContactForm>(key: K, value: ContactForm[K]) => {
    setFormData((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const fieldProps = (key: "name" | "phone" | "email" | "message") => ({
    id: `f-${key}`,
    name: key,
    value: formData[key],
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `f-${key}-err` : undefined,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateContact(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const first = Object.keys(validationErrors)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website: honeypot }),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData(emptyForm);
        return;
      }
      const data = await res.json().catch(() => ({}));
      if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero icon={Users} badge="Ücretsiz Danışma" title="Bizimle" highlight="İletişime Geç">
        Ücretsiz danışma randevusu al veya sorularını bize ilet. En geç 24 saat içinde yanıt veririz.
      </PageHero>

      <section className="py-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
              <AnimatedSection direction="left">
                <div className="glass-strong rounded-2xl p-6">
                  <Trophy className="w-10 h-10 text-gold-ink mb-4" />
                  <h2 className="text-xl font-black text-foreground mb-2">Neden Bizi Seçmelisin?</h2>
                  <p className="text-muted-foreground text-sm mb-5">
                    7 aşamalı sistemi bizzat deneyimlemek için bir adım at.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Ücretsiz ilk değerlendirme",
                      "Kişiselleştirilmiş seviye testi",
                      "7 aşamalı sistem tanıtımı",
                      "Rehber atama ve plan oluşturma",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold-ink flex-shrink-0" />
                        <span className="text-foreground/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.1}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => {
                    const content = (
                      <>
                        <span className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-gold-ink" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-muted-foreground text-xs mb-0.5">{label}</span>
                          <span className="block text-foreground text-sm font-semibold break-words group-hover:text-gold-ink transition-colors">
                            {value}
                          </span>
                        </span>
                      </>
                    );
                    return (
                      <li key={label}>
                        {href ? (
                          href.startsWith("/") ? (
                            <Link href={href} className="group glass rounded-xl p-4 card-hover flex items-center gap-3">
                              {content}
                            </Link>
                          ) : (
                            <a href={href} className="group glass rounded-xl p-4 card-hover flex items-center gap-3">
                              {content}
                            </a>
                          )
                        ) : (
                          <div className="glass rounded-xl p-4 flex items-center gap-3">{content}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <AnimatedSection direction="right">
                <div className="glass-strong rounded-2xl p-6 sm:p-8">
                  {status === "sent" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                      role="status"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center glow-gold">
                        <CheckCircle className="w-8 h-8 text-navy-dark" />
                      </div>
                      <h2 className="text-foreground font-black text-2xl mb-2">Mesajın Alındı!</h2>
                      <p className="text-muted-foreground">En geç 24 saat içinde seninle iletişime geçeceğiz.</p>
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="mt-6 text-gold-ink text-sm font-semibold hover:underline"
                      >
                        Yeni mesaj gönder
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-xl font-black text-foreground mb-1">Danışma Formu</h2>
                      <p className="text-muted-foreground text-sm mb-6">* ile işaretli alanlar zorunludur.</p>
                      <form onSubmit={handleSubmit} noValidate className="space-y-5">
                        {/* Honeypot – hidden from people, catches bots */}
                        <div aria-hidden="true" className="sr-only">
                          <label htmlFor="f-website">Web sitesi</label>
                          <input
                            id="f-website"
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="f-name" className={labelClass}>Ad Soyad *</label>
                            <input
                              {...fieldProps("name")}
                              type="text"
                              autoComplete="name"
                              onChange={(e) => update("name", e.target.value)}
                              placeholder="Adınız Soyadınız"
                              className="field"
                            />
                            <FieldError id="f-name-err" message={errors.name} />
                          </div>

                          <div>
                            <label htmlFor="f-phone" className={labelClass}>Telefon *</label>
                            <input
                              {...fieldProps("phone")}
                              type="tel"
                              inputMode="tel"
                              autoComplete="tel"
                              onChange={(e) => update("phone", e.target.value)}
                              placeholder="+90 5XX XXX XX XX"
                              className="field"
                            />
                            <FieldError id="f-phone-err" message={errors.phone} />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="f-email" className={labelClass}>E-posta *</label>
                          <input
                            {...fieldProps("email")}
                            type="email"
                            autoComplete="email"
                            onChange={(e) => update("email", e.target.value)}
                            placeholder="ornek@email.com"
                            className="field"
                          />
                          <FieldError id="f-email-err" message={errors.email} />
                        </div>

                        <div>
                          <label htmlFor="f-subject" className={labelClass}>Konu</label>
                          <select
                            id="f-subject"
                            name="subject"
                            value={formData.subject}
                            onChange={(e) => update("subject", e.target.value)}
                            className="field"
                          >
                            <option value="">Konu seçin</option>
                            {Object.entries(contactSubjects).map(([value, label]) => (
                              <option key={value} value={value}>
                                {label}
                              </option>
                            ))}
                          </select>
                          <FieldError id="f-subject-err" message={errors.subject} />
                        </div>

                        <div>
                          <div className="flex items-baseline justify-between">
                            <label htmlFor="f-message" className={labelClass}>Mesaj *</label>
                            <span className="text-[11px] text-muted-foreground tabular-nums">
                              {formData.message.length}/{MAX_MESSAGE_LENGTH}
                            </span>
                          </div>
                          <textarea
                            {...fieldProps("message")}
                            onChange={(e) => update("message", e.target.value)}
                            placeholder="Bize ne sormak istiyorsunuz?"
                            rows={5}
                            maxLength={MAX_MESSAGE_LENGTH}
                            className="field resize-y min-h-28"
                          />
                          <FieldError id="f-message-err" message={errors.message} />
                        </div>

                        <div>
                          <label htmlFor="f-consent" className="flex items-start gap-3 cursor-pointer">
                            <input
                              id="f-consent"
                              name="consent"
                              type="checkbox"
                              checked={formData.consent}
                              onChange={(e) => update("consent", e.target.checked)}
                              aria-invalid={errors.consent ? true : undefined}
                              aria-describedby={errors.consent ? "f-consent-err" : undefined}
                              className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#B8941F]"
                            />
                            <span className="text-muted-foreground text-xs leading-relaxed">
                              Kişisel verilerimin, bu talep kapsamında benimle iletişime geçilmesi amacıyla 6698 sayılı
                              KVKK uyarınca işlenmesini kabul ediyorum. *
                            </span>
                          </label>
                          <FieldError id="f-consent-err" message={errors.consent} />
                        </div>

                        {status === "error" && (
                          <div
                            role="alert"
                            className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-foreground"
                          >
                            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                            <span>
                              Mesajın şu anda gönderilemedi. Lütfen tekrar dene ya da bize doğrudan{" "}
                              <a href={site.phoneHref} className="font-semibold text-gold-ink hover:underline">
                                {site.phone}
                              </a>{" "}
                              veya{" "}
                              <a href={`mailto:${site.email}`} className="font-semibold text-gold-ink hover:underline">
                                {site.email}
                              </a>{" "}
                              üzerinden ulaş.
                            </span>
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="btn-primary w-full rounded-xl py-4 text-sm disabled:opacity-70 disabled:cursor-wait"
                        >
                          {status === "sending" ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" /> Gönderiliyor…
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" /> Gönder
                            </>
                          )}
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
