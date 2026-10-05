import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  if (!payload?.name || !payload?.email) return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  const webhook = process.env.SENSEISTACKCRM_WEBHOOK_URL;
  if (webhook) {
    const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json", ...(process.env.SENSEISTACKCRM_API_KEY ? { Authorization: `Bearer ${process.env.SENSEISTACKCRM_API_KEY}` } : {}) }, body: JSON.stringify({ ...payload, source: "Five Rings Community Martial Arts website", location: "Spring, TX" }) });
    if (!response.ok) return NextResponse.json({ error: "CRM request failed." }, { status: 502 });
  } else {
    return NextResponse.json({ error: "Online enquiries are not open yet. Please check back soon." }, { status: 503 });
  }
  return NextResponse.json({ ok: true });
}
