import { contactSubjects, validateContact, type ContactForm } from "@/lib/contact";

// Best-effort per-instance throttle; serverless instances don't share memory.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (typeof body.website === "string" && body.website.length > 0) {
    return Response.json({ ok: true });
  }

  const str = (v: unknown) => (typeof v === "string" ? v : "");
  const data: ContactForm = {
    name: str(body.name),
    phone: str(body.phone),
    email: str(body.email),
    subject: str(body.subject),
    message: str(body.message),
    consent: body.consent === true,
  };

  const errors = validateContact(data);
  if (Object.keys(errors).length > 0) {
    return Response.json({ error: "validation", errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not set; message was not delivered.");
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const subjectLabel = contactSubjects[data.subject as keyof typeof contactSubjects] ?? "Genel";
  const rows: [string, string][] = [
    ["Ad Soyad", data.name.trim()],
    ["Telefon", data.phone.trim()],
    ["E-posta", data.email.trim()],
    ["Konu", subjectLabel],
  ];
  const html = `
    <h2>Yeni danışma formu</h2>
    <table cellpadding="6">${rows
      .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
      .join("")}</table>
    <p><strong>Mesaj</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(data.message.trim())}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Deneme Üssü Web <onboarding@resend.dev>",
      to: to.split(",").map((s) => s.trim()),
      reply_to: data.email.trim(),
      subject: `[Web] ${subjectLabel} – ${data.name.trim()}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text().catch(() => ""));
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
