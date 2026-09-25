"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, type LucideIcon } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export function PageHero({
  icon: Icon,
  badge,
  title,
  highlight,
  children,
  extra,
}: {
  icon: LucideIcon;
  badge: string;
  title: string;
  highlight?: string;
  children: React.ReactNode;
  extra?: React.ReactNode;
}) {
  return (
    <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-grid" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.14),transparent)]"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-gold-ink"
        >
          <Icon className="w-4 h-4" />
          <span className="font-semibold">{badge}</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black tracking-tight text-foreground mb-6 text-balance"
        >
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-gold-gradient">{highlight}</span>
            </>
          )}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          {children}
        </motion.p>
        {extra && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {extra}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  children,
  className = "mb-12",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <AnimatedSection className={`text-center ${className}`}>
      {eyebrow && (
        <span className="inline-block text-gold-ink text-sm font-bold tracking-widest uppercase mb-3">{eyebrow}</span>
      )}
      <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mb-3 text-balance">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-gold-gradient">{highlight}</span>
          </>
        )}
      </h2>
      {children && <p className="text-muted-foreground max-w-xl mx-auto text-pretty">{children}</p>}
    </AnimatedSection>
  );
}

export function CtaSection({
  title,
  highlight,
  text,
  primary,
  secondary,
}: {
  title: string;
  highlight: string;
  text: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative glass rounded-3xl px-6 py-12 sm:p-16 text-center overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.14),transparent_65%)]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-60" />
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center glow-gold">
                <Trophy className="w-8 h-8 text-navy-dark" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mb-4 text-balance">
                {title} <span className="text-gold-gradient">{highlight}</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{text}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href={primary.href} className="btn-primary px-8 py-4 text-sm">
                  {primary.label} <ArrowRight className="w-4 h-4" />
                </Link>
                {secondary && (
                  <Link href={secondary.href} className="glass-button font-bold px-8 py-4 rounded-full text-sm">
                    {secondary.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
