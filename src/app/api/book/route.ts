import { NextResponse } from "next/server";
import { Resend } from "resend";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  groupSize?: string;
  matchDates?: string;
  heardAbout?: string;
  message?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

function renderNotificationHtml(p: Required<Pick<Payload, "name" | "email" | "phone" | "groupSize">> & {
  matchDates: string;
  heardAbout: string;
  message: string;
}) {
  const rows: [string, string][] = [
    ["Name", p.name],
    ["Email", p.email],
    ["Phone", p.phone],
    ["Group size", p.groupSize],
    ["Match dates", p.matchDates || "—"],
    ["Heard about us", p.heardAbout || "—"],
    ["Message", p.message || "—"],
  ];
  const body = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:10px 14px;border-bottom:1px solid #222;color:#A8A29E;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;width:140px;vertical-align:top">${k}</td><td style="padding:10px 14px;border-bottom:1px solid #222;color:#F5F0E8;font-size:15px;vertical-align:top">${escapeHtml(
          v
        )}</td></tr>`
    )
    .join("");

  return `<!doctype html>
<html><body style="margin:0;background:#0D0B09;font-family:Helvetica,Arial,sans-serif;color:#F5F0E8;padding:32px 16px">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;margin:0 auto;background:#1A1510;border:1px solid rgba(212,168,83,0.18);border-radius:16px;overflow:hidden">
    <tr><td style="padding:28px 28px 0">
      <div style="color:#D4A853;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;margin-bottom:8px">New booking request</div>
      <h1 style="font-family:'Playfair Display',Georgia,serif;color:#F5F0E8;font-size:26px;font-weight:600;margin:0 0 4px">Triple W Rentals · FIFA 2026</h1>
      <p style="color:#A8A29E;font-size:13px;margin:0 0 20px">Submitted via the landing page booking form.</p>
    </td></tr>
    <tr><td style="padding:0 28px 24px">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #222;border-radius:10px;overflow:hidden">
        ${body}
      </table>
    </td></tr>
    <tr><td style="padding:0 28px 28px">
      <a href="mailto:${escapeHtml(p.email)}" style="display:inline-block;background:#D4A853;color:#0D0B09;font-weight:600;font-size:14px;padding:12px 20px;border-radius:8px;text-decoration:none">Reply to ${escapeHtml(p.name)}</a>
    </td></tr>
  </table>
</body></html>`;
}

function renderConfirmationHtml(name: string) {
  const first = name.split(" ")[0] || name;
  return `<!doctype html>
<html><body style="margin:0;background:#0D0B09;font-family:Helvetica,Arial,sans-serif;color:#F5F0E8;padding:40px 16px">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;margin:0 auto;background:#1A1510;border:1px solid rgba(212,168,83,0.18);border-radius:16px;overflow:hidden">
    <tr><td style="padding:40px 32px 24px;text-align:center">
      <div style="color:#D4A853;font-size:40px;line-height:1;margin-bottom:16px">✦</div>
      <div style="color:#D4A853;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;margin-bottom:12px">Triple W Rentals</div>
      <h1 style="font-family:'Playfair Display',Georgia,serif;color:#F5F0E8;font-size:28px;font-weight:600;margin:0 0 16px;line-height:1.2">We got your request, ${escapeHtml(first)}.</h1>
      <p style="color:#A8A29E;font-size:15px;line-height:1.65;margin:0 0 20px">Thanks for reaching out about the 2026 FIFA World Cup in Dallas. Westin will personally review your details and get back to you within 24 hours to lock in your unit and dates.</p>
    </td></tr>
    <tr><td style="padding:0 32px 24px">
      <div style="background:#0D0B09;border:1px solid #2a2420;border-radius:12px;padding:20px">
        <div style="color:#D4A853;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;margin-bottom:10px">What's next</div>
        <ol style="color:#F5F0E8;font-size:14px;line-height:1.75;margin:0;padding-left:18px">
          <li>Westin reviews your dates &amp; group size</li>
          <li>You get a reply with unit options + a quote</li>
          <li>Confirm &amp; we deliver the RV to your door</li>
        </ol>
      </div>
    </td></tr>
    <tr><td style="padding:0 32px 36px;text-align:center">
      <p style="color:#A8A29E;font-size:13px;line-height:1.6;margin:0">No spam. No pressure. Just premium RVs delivered for the biggest tournament on earth.</p>
    </td></tr>
    <tr><td style="padding:18px 32px;border-top:1px solid #2a2420;background:#0f0c0a;text-align:center">
      <div style="color:#D4A853;font-family:'Playfair Display',Georgia,serif;font-size:14px;letter-spacing:0.18em;text-transform:uppercase;margin-bottom:4px">Triple W Rentals</div>
      <div style="color:#6b655e;font-size:11px">Tyler, Texas · Nationwide delivery</div>
    </td></tr>
  </table>
</body></html>`;
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.BOOKING_NOTIFY_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !notifyTo || !from) {
    return NextResponse.json(
      { ok: false, error: "Email service not configured." },
      { status: 500 }
    );
  }

  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const name = (body.name || "").trim().slice(0, 120);
  const email = (body.email || "").trim().slice(0, 200);
  const phone = (body.phone || "").trim().slice(0, 40);
  const groupSize = (body.groupSize || "").trim().slice(0, 20);
  const matchDates = (body.matchDates || "").trim().slice(0, 400);
  const heardAbout = (body.heardAbout || "").trim().slice(0, 120);
  const message = (body.message || "").trim().slice(0, 2000);

  if (!name || !email || !phone || !groupSize) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const notificationHtml = renderNotificationHtml({
    name,
    email,
    phone,
    groupSize,
    matchDates,
    heardAbout,
    message,
  });
  const confirmationHtml = renderConfirmationHtml(name);

  try {
    const notify = await resend.emails.send({
      from,
      to: notifyTo,
      replyTo: email,
      subject: `New booking request — ${name} (${groupSize})`,
      html: notificationHtml,
    });
    if (notify.error) {
      console.error("[resend:notify]", notify.error);
      return NextResponse.json(
        { ok: false, error: "Could not send notification." },
        { status: 502 }
      );
    }

    const confirm = await resend.emails.send({
      from,
      to: email,
      subject: "We got your request — Triple W Rentals",
      html: confirmationHtml,
    });
    if (confirm.error) {
      // Notification already sent; log and still count as success.
      console.warn("[resend:confirm]", confirm.error);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[book:error]", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
