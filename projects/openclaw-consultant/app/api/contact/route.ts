import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "re_YEcZZHHr_L38mqpD7wBoBaXFmX9RcF2GQ";
const SUPABASE_URL = "https://smhzgkvatlwbaxlyhnbm.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Send email notification via Resend
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "OpenClaw Consultant <draws@ardmorecricket.com>",
          to: ["contact@bluecanvas.ai", "philpatterson85@gmail.com"],
          subject: `New OCC Enquiry: ${name}${company ? ` (${company})` : ""}`,
          html: `
            <h2>New enquiry from OpenClaw Consultant</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <hr>
            <p style="color:#888;font-size:12px">Submitted via openclawconsultant.co.uk contact form</p>
          `,
        }),
      });
    } catch (emailErr) {
      console.error("Email send failed:", emailErr);
    }

    // 2. Store in Supabase (best effort)
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/occ_enquiries`, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal",
        },
        body: JSON.stringify({
          name,
          email,
          company: company || null,
          message,
          source: "openclawconsultant.co.uk",
        }),
      });
    } catch (dbErr) {
      console.error("Supabase insert failed:", dbErr);
      // Non-fatal — email is the primary notification
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
