import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const SUPABASE_URL = "https://smhzgkvatlwbaxlyhnbm.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    let emailSent = false;
    let storedInSupabase = false;

    if (RESEND_API_KEY) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "OpenClaw Consultant <hello@bluecanvas.ai>",
            reply_to: email,
            to: ["contact@bluecanvas.ai", "philpatterson85@gmail.com"],
            subject: `New OCC Enquiry: ${name}${company ? ` (${company})` : ""}`,
            html: `
              <h2>New enquiry from OpenClaw Consultant</h2>
              <p><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
              <p><strong>Message:</strong></p>
              <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
              <hr>
              <p style="color:#888;font-size:12px">Submitted via openclawconsultant.co.uk contact form</p>
            `,
          }),
        });

        emailSent = emailResponse.ok;

        if (!emailResponse.ok) {
          console.error("Email send failed:", await emailResponse.text());
        }
      } catch (emailErr) {
        console.error("Email send failed:", emailErr);
      }
    } else {
      console.warn("RESEND_API_KEY is not configured for openclawconsultant.co.uk");
    }

    if (SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const dbResponse = await fetch(`${SUPABASE_URL}/rest/v1/occ_enquiries`, {
          method: "POST",
          headers: {
            "apikey": SUPABASE_SERVICE_ROLE_KEY,
            "Authorization": `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
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

        storedInSupabase = dbResponse.ok;

        if (!dbResponse.ok) {
          console.error("Supabase insert failed:", await dbResponse.text());
        }
      } catch (dbErr) {
        console.error("Supabase insert failed:", dbErr);
      }
    } else {
      console.warn("SUPABASE_SERVICE_ROLE_KEY is not configured for openclawconsultant.co.uk");
    }

    if (!emailSent && !storedInSupabase) {
      return NextResponse.json({ error: "No contact capture provider succeeded" }, { status: 503 });
    }

    return NextResponse.json({ success: true, emailSent, storedInSupabase });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
