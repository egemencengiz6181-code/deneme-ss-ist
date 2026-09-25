import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-[80svh] flex items-center justify-center px-4 pt-28 pb-16 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-grid" />
      <div className="relative text-center max-w-lg">
        <p className="text-[clamp(6rem,22vw,11rem)] font-black leading-none tracking-tighter text-gold-gradient">404</p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-black text-foreground">Aradığın sayfa bulunamadı</h1>
        <p className="mt-3 text-muted-foreground">
          Sayfa taşınmış ya da hiç var olmamış olabilir. Ana sayfadan devam edebilir veya bizimle iletişime geçebilirsin.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary px-7 py-3.5 text-sm">
            Ana Sayfaya Dön <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/subelerimiz" className="glass-button rounded-full font-bold px-7 py-3.5 text-sm">
            <Compass className="w-4 h-4" /> Şubelerimiz
          </Link>
        </div>
      </div>
    </section>
  );
}
