export const contactSubjects = {
  "ucretsiz-danisma": "Ücretsiz Danışma",
  kayit: "Kayıt / Başvuru",
  "sube-bilgi": "Şube Bilgisi",
  "sistem-bilgi": "Sistem Hakkında",
  diger: "Diğer",
} as const;

export type ContactForm = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
};

export type ContactErrors = Partial<Record<keyof ContactForm, string>>;

export const MAX_MESSAGE_LENGTH = 2000;

/** Shared by the form and the API route so both enforce the same rules. */
export function validateContact(data: ContactForm): ContactErrors {
  const errors: ContactErrors = {};
  const name = data.name.trim();
  const phone = data.phone.trim();
  const email = data.email.trim();
  const message = data.message.trim();

  if (!name) errors.name = "Ad soyad gerekli";
  else if (name.length > 100) errors.name = "Ad soyad çok uzun";

  if (!phone) errors.phone = "Telefon gerekli";
  else if (!/^[0-9+\s\-()]{7,20}$/.test(phone) || phone.replace(/\D/g, "").length < 7)
    errors.phone = "Geçerli bir telefon girin";

  if (!email) errors.email = "E-posta gerekli";
  else if (email.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Geçerli bir e-posta girin";

  if (data.subject && !(data.subject in contactSubjects)) errors.subject = "Geçerli bir konu seçin";

  if (!message) errors.message = "Mesaj gerekli";
  else if (message.length > MAX_MESSAGE_LENGTH) errors.message = `Mesaj en fazla ${MAX_MESSAGE_LENGTH} karakter olabilir`;

  if (!data.consent) errors.consent = "Devam etmek için onay vermelisiniz";

  return errors;
}
