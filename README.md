# Deneme Üssü

İstanbul merkezli sınav kulübü Deneme Üssü'nün web sitesi. Next.js 16 (App Router), Tailwind CSS 4, Framer Motion.

## Geliştirme

```bash
npm install
npm run dev        # http://localhost:3000
```

Diğer komutlar:

```bash
npm run build      # production build
npm run start      # build'i çalıştırır
npm run lint
npm run typecheck
```

## Ortam değişkenleri

İletişim formu, gönderimleri [Resend](https://resend.com) üzerinden e-posta olarak iletir.
`.env.example` dosyasını `.env.local` olarak kopyalayın (Vercel'de: Project → Settings → Environment Variables):

| Değişken | Açıklama |
| --- | --- |
| `RESEND_API_KEY` | Resend API anahtarı |
| `CONTACT_TO_EMAIL` | Form mesajlarının gideceği adres(ler), virgülle ayrılmış |
| `CONTACT_FROM_EMAIL` | Gönderen adres; Resend'de doğrulanmış bir alan adında olmalı |

Bu değişkenler tanımlı değilse form, kullanıcıya telefon ve e-posta ile ulaşmasını söyleyen bir hata mesajı gösterir. Mesajlar sessizce kaybolmaz.

## Yapı

- `lib/site.ts`: iletişim bilgileri, menü, site URL'si. Bunlar tek yerden yönetilir.
- `lib/branches.ts`: şube listesi. Şube sayısı her yerde buradan hesaplanır.
- `lib/contact.ts`: form doğrulaması; form ve API aynı kuralları kullanır.
- `components/PageSections.tsx`: ortak sayfa başlığı, bölüm başlığı ve CTA bileşenleri.
- `app/globals.css`: tema değişkenleri (açık/koyu mod), `glass`, `btn-primary`, `field` sınıfları.

Tema renkleri için sabit hex yerine `text-foreground`, `text-muted-foreground`, `bg-background`, `text-gold-ink` gibi token sınıflarını kullanın. Böylece açık ve koyu mod otomatik olarak doğru görünür.
