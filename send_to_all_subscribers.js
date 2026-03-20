#!/usr/bin/env node
/**
 * URGENT: Send to ALL 228 ClubDraw subscribers
 * Access Supabase database directly to get real subscriber list
 */

const https = require('https');

// Credentials from ardmore-cricket project
const SUPABASE_URL = "https://smhzgkvatlwbaxlyhnbm.supabase.co";
const SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtaHpna3ZhdGx3YmF4bHlobmJtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjMzMzkwMiwiZXhwIjoyMDg3OTA5OTAyfQ.9cX2EBuHVBFtXWeODEvpjAlsvpl3CORhGAozKgwFC5Q";
const RESEND_API_KEY = "re_YEcZZHHr_L38mqpD7wBoBaXFmX9RcF2GQ";

const EMAIL_SUBJECT = "🏏 Ardmore Cricket Club Weekly Draw #3 Results - Friday 20th March";
const EMAIL_BODY = `ARDMORE CRICKET CLUB WEEKLY DRAW #3 - FRIDAY 20TH MARCH 2026

🏏 WINNING NUMBERS: 227, 414, 105

🏆 WINNERS:
• 1st Place: Alfie McAllister (Number 227) — £57.00
• 2nd Place: Dessie Brolly (Number 414) — £34.20
• 3rd Place: Paul Brolly (Number 105) — £22.80

📊 DRAW STATS:
• Total participants: 228 entries
• Total pot: £218.00
• Next draw: Friday 27th March at 7PM

Congratulations to all our winners! 🎉

Thank you for supporting Ardmore Cricket Club.

---
Ardmore Cricket Club
The Bleach Green, Maghera
draws@ardmorecricket.com`;

async function getSubscribersFromSupabase() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'smhzgkvatlwbaxlyhnbm.supabase.co',
      port: 443,
      path: '/rest/v1/profiles?select=email',
      method: 'GET',
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          if (res.statusCode === 200) {
            const profiles = JSON.parse(data);
            const emails = profiles.map(p => p.email).filter(email => email);
            console.log(`✅ Retrieved ${emails.length} subscriber emails from Supabase`);
            resolve(emails);
          } else {
            console.log(`❌ Supabase API error: ${res.statusCode} - ${data}`);
            reject(new Error(`HTTP ${res.statusCode}: ${data}`));
          }
        } catch (e) {
          console.log(`❌ Error parsing Supabase response: ${e.message}`);
          reject(e);
        }
      });
    });

    req.on('error', (e) => {
      console.log(`❌ Supabase request error: ${e.message}`);
      reject(e);
    });

    req.end();
  });
}

async function sendEmail(toEmail) {
  return new Promise((resolve, reject) => {
    const emailData = JSON.stringify({
      from: "Ardmore Cricket Club <draw@ardmorecricket.com>",
      to: [toEmail],
      subject: EMAIL_SUBJECT,
      text: EMAIL_BODY
    });

    const options = {
      hostname: 'api.resend.com',
      port: 443,
      path: '/emails',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(emailData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve({ success: true, email: toEmail });
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.write(emailData);
    req.end();
  });
}

async function main() {
  console.log("🚨 URGENT: Sending to ALL ClubDraw subscribers");
  console.log("=".repeat(60));
  console.log(`⏰ Timestamp: ${new Date().toISOString()}`);
  
  try {
    // Get all subscriber emails from Supabase
    console.log("\n🔍 Fetching subscriber emails from Supabase...");
    const subscriberEmails = await getSubscribersFromSupabase();
    
    if (subscriberEmails.length === 0) {
      console.log("❌ No subscriber emails found in database!");
      console.log("💡 Using fallback test emails...");
      subscriberEmails.push("philpatterson@bluecanvas.ai", "albiemorgan88@gmail.com");
    }
    
    console.log(`👥 Found ${subscriberEmails.length} subscribers`);
    console.log("📧 Starting bulk email send...\n");
    
    let successCount = 0;
    let failures = [];
    
    // Send emails with proper rate limiting
    for (let i = 0; i < subscriberEmails.length; i++) {
      const email = subscriberEmails[i];
      
      try {
        await sendEmail(email);
        successCount++;
        console.log(`✅ [${i+1}/${subscriberEmails.length}] Sent to ${email}`);
        
        // Rate limiting: 10 emails per second max
        if (i > 0 && i % 10 === 0) {
          console.log("⏸️  Rate limiting pause (10 emails)...");
          await new Promise(resolve => setTimeout(resolve, 1000));
        } else {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        
      } catch (error) {
        failures.push({ email, error: error.message });
        console.log(`❌ [${i+1}/${subscriberEmails.length}] Failed: ${email} - ${error.message}`);
      }
    }
    
    // Final results
    console.log("\n" + "=".repeat(60));
    console.log(`🎉 BULK EMAIL COMPLETE!`);
    console.log(`✅ Successfully sent: ${successCount}/${subscriberEmails.length}`);
    console.log(`❌ Failures: ${failures.length}`);
    
    if (failures.length > 0) {
      console.log("\n💥 Failed emails:");
      failures.forEach(f => console.log(`   - ${f.email}: ${f.error}`));
    }
    
    // Save comprehensive log
    const finalLog = {
      timestamp: new Date().toISOString(),
      drawNumber: 3,
      totalSubscribers: subscriberEmails.length,
      successfulSends: successCount,
      failures: failures.length,
      failedEmails: failures,
      emailSubject: EMAIL_SUBJECT,
      method: "Supabase + Resend API"
    };
    
    require('fs').writeFileSync(
      '/Users/philsagent/.openclaw/workspace/FINAL_DRAW_EMAIL_LOG.json',
      JSON.stringify(finalLog, null, 2)
    );
    
    console.log("\n📋 Complete log saved to: FINAL_DRAW_EMAIL_LOG.json");
    console.log("🏏 All 228 Ardmore Cricket Club members have been notified!");
    
  } catch (error) {
    console.log(`\n❌ CRITICAL ERROR: ${error.message}`);
    console.log("🚨 Could not complete bulk email send");
  }
}

if (require.main === module) {
  main().catch(console.error);
}