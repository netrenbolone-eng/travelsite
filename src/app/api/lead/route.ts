import { NextResponse } from "next/server";
import { z } from "zod";
import { site } from "@/config/site";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().regex(/^\+?[0-9()\-\s]{7,24}$/),
  messenger: z.enum(["whatsapp", "telegram", "phone"]),
  tourId: z.string().max(80).optional(),
  date: z.string().max(30).optional(),
  guests: z.coerce.number().int().min(1).max(30),
  comment: z.string().trim().max(1000).optional(),
  companyWebsite: z.string().max(200),
  locale: z.enum(["ru", "en"]),
});

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  if (parsed.data.companyWebsite) return NextResponse.json({ success: true });

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return NextResponse.json({ success: false, error: "Lead delivery is not configured" }, { status: 503 });

  const { name, phone, messenger, tourId, date, guests, comment, locale } = parsed.data;
  const text = [
    `${site.name} lead (${locale.toUpperCase()})`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Contact via: ${messenger}`,
    `Tour ID: ${tourId || "not selected"}`,
    `Date: ${date || "not selected"}`,
    `Guests: ${guests}`,
    comment ? `Comment: ${comment}` : "",
  ].filter(Boolean).join("\n");

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    if (!telegramResponse.ok) return NextResponse.json({ success: false, error: "Delivery failed" }, { status: 502 });
  } catch {
    return NextResponse.json({ success: false, error: "Delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}