import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI for Plumbers & Trade Businesses",
  description: "How UK plumbers and trade businesses use AI to automate job bookings, quoting, invoicing, and customer communication. Save 10+ hours per week and win more jobs.",
  keywords: [
    "ai for plumbers uk",
    "ai for trade businesses",
    "plumber automation software",
    "ai job booking plumber",
    "trade business ai tools",
    "plumber invoicing automation",
    "ai quoting software trades",
    "plumber scheduling software uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-for-plumbers-uk" },
  openGraph: {
    title: "AI for Plumbers & Trade Businesses",
    description: "How UK plumbers and trade businesses use AI to automate bookings, quoting, and admin. Practical guide with costs and ROI for sole traders and small teams.",
    url: "https://openclawconsultant.co.uk/guides/ai-for-plumbers-uk",
    type: "article",
  },
};

export default function AIForPlumbersUKPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Trades AI</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI for Plumbers and <span className="text-orange">Trade Businesses</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              The average UK plumber spends 15+ hours a week on admin — quoting, invoicing, chasing payments, answering calls. That&apos;s nearly two full working days lost to paperwork instead of billable jobs. AI automation can claw most of that time back, and you don&apos;t need to be tech-savvy to set it up.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                12 min read
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                Updated April 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-dark leading-relaxed mb-8">
              If you&apos;re a plumber, electrician, or any other trades professional, your phone is probably your office. Between missed calls from potential customers, late-night quote requests sitting in your inbox, and a shoebox full of receipts, admin eats into the time you could be earning. AI tools built for trade businesses are changing that — handling the boring bits so you can focus on the work that pays.
            </p>
            
            <p className="text-muted-dark leading-relaxed mb-8">
              This guide covers practical AI applications for UK plumbers and trade businesses — from one-person operations to teams of 10+. No jargon, no hype, just tools that are working for tradespeople right now.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">The Admin Problem Every Tradesperson Knows</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">15+ hrs</div>
                <div className="text-muted-dark text-sm">Weekly admin time</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">40%</div>
                <div className="text-muted-dark text-sm">Calls missed on-site</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">£18K</div>
                <div className="text-muted-dark text-sm">Lost revenue from missed leads</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">60 days</div>
                <div className="text-muted-dark text-sm">Average invoice payment time</div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-dark leading-relaxed">
                A Federation of Master Builders survey found that sole traders and small trade firms spend an average of 15 hours per week on non-billable admin work. For a plumber charging £50-£80 per hour, that&apos;s £750-£1,200 in lost earnings every single week. Over a year, you&apos;re looking at £40,000-£60,000 in potential revenue that never materialises because you&apos;re buried in paperwork.
              </p>
              <p className="text-muted-dark leading-relaxed">
                The biggest pain points are consistent across the trades: missed phone calls when you&apos;re elbow-deep in a job, quotes that take hours to write up in the evening, invoices that go out late and get paid even later, and zero visibility over your pipeline. AI tools solve each of these problems — and they&apos;re surprisingly affordable for even a one-person operation.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Key AI Applications for Trade Businesses</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">1. Never Miss a Lead Again: AI Call and Message Handling</h3>
                <p className="text-muted-dark text-sm mb-4">
                  When you&apos;re under a sink or up a ladder, you can&apos;t answer the phone. And every missed call is a potential customer who rings the next plumber on Google instead. AI call handling answers every call, takes job details, and books appointments — even at midnight on a Saturday.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">What It Does:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Answers calls and WhatsApp messages 24/7</li>
                      <li>• Takes job details (location, problem description, urgency)</li>
                      <li>• Books appointments into your calendar automatically</li>
                      <li>• Sends confirmations to the customer via text</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Typical Results:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• 95% of enquiries captured (vs 60% without)</li>
                      <li>• 3-5 extra jobs booked per week</li>
                      <li>• Customers rate the speed of response highly</li>
                      <li>• Emergency callouts triaged and prioritised</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">2. Instant Quoting and Estimating</h3>
                <p className="text-muted-dark text-sm mb-4">
                  Writing quotes at the kitchen table after a 10-hour day is nobody&apos;s idea of fun. AI quoting tools let you generate professional quotes in minutes — on-site, from your phone. Take a photo of the job, describe what&apos;s needed, and the system builds the quote using your standard rates and materials pricing.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Features:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Photo-based job assessment and quoting</li>
                      <li>• Pre-built templates for common jobs (boiler service, bathroom fit, etc.)</li>
                      <li>• Automatic materials costing from supplier catalogues</li>
                      <li>• One-tap quote sending via email or WhatsApp</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Impact:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Quotes sent same day (not 3 days later)</li>
                      <li>• 30% higher quote-to-job conversion rate</li>
                      <li>• Professional presentation builds customer confidence</li>
                      <li>• Accurate materials costing protects your margins</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">3. Invoicing, Payments, and Cash Flow</h3>
                <p className="text-muted-dark text-sm mb-4">
                  Late invoicing is the silent killer of trade businesses. If you send the invoice a week after the job, the customer&apos;s already forgotten the urgency. AI invoicing tools generate and send invoices the moment a job is marked complete — with integrated card payments so customers can pay instantly.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Automation:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Auto-generate invoices from completed job cards</li>
                      <li>• Integrated card and bank transfer payments</li>
                      <li>• Automatic payment reminders at 7, 14, and 30 days</li>
                      <li>• Receipt capture and expense tracking for tax returns</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Cash Flow Results:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Average payment time drops from 60 to 14 days</li>
                      <li>• 90%+ invoices paid within 30 days</li>
                      <li>• Zero time spent chasing payments manually</li>
                      <li>• Tax return prep reduced from days to hours</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple/5 to-orange/5 rounded-xl p-6 border border-purple/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">4. Job Scheduling and Route Planning</h3>
                <p className="text-muted-dark text-sm mb-4">
                  If you&apos;re running multiple jobs a day, the order you visit them matters. AI scheduling considers job location, estimated duration, traffic patterns, and customer availability to build the most efficient route — saving fuel and fitting more jobs into each day.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Smart Scheduling:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Route-optimised daily schedules</li>
                      <li>• Automatic customer notifications with arrival windows</li>
                      <li>• Emergency job insertion without derailing the day</li>
                      <li>• Team job allocation for multi-person operations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Efficiency Gains:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• 20-30% reduction in driving time between jobs</li>
                      <li>• 1-2 extra jobs fitted per week from better routing</li>
                      <li>• Fuel savings of £100-£200 per month</li>
                      <li>• Fewer late arrivals and happier customers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Costs and ROI for Trade Businesses</h2>
            
            <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10 mb-8">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">What It Costs vs What You Get Back</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-medium text-dark">AI Solution</th>
                      <th className="text-center py-3 font-medium text-orange">Monthly Cost</th>
                      <th className="text-center py-3 font-medium text-blue">Annual Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-dark">
                    <tr className="border-b">
                      <td className="py-3">AI call/message handling</td>
                      <td className="py-3 text-center">£50-£150</td>
                      <td className="py-3 text-center">£8,000-£18,000 (won leads)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Quoting and estimating</td>
                      <td className="py-3 text-center">£30-£80</td>
                      <td className="py-3 text-center">£5,000-£10,000 (time saved + wins)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Invoicing and payments</td>
                      <td className="py-3 text-center">£20-£60</td>
                      <td className="py-3 text-center">£4,000-£8,000 (faster payments)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Scheduling and route planning</td>
                      <td className="py-3 text-center">£30-£80</td>
                      <td className="py-3 text-center">£3,000-£6,000 (fuel + extra jobs)</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Full Stack</td>
                      <td className="py-3 text-center font-semibold text-orange">£130-£370/mo</td>
                      <td className="py-3 text-center font-semibold text-blue">£20,000-£42,000/yr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">Sole Trader vs Small Team</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-dark mb-3">Sole Traders:</h4>
                  <ul className="space-y-2 text-muted-dark text-sm">
                    <li>• Start with call handling and invoicing — biggest bang for buck</li>
                    <li>• Total cost under £100/month for the essentials</li>
                    <li>• Phone-based tools mean no laptop needed on-site</li>
                    <li>• Capture every lead even when you&apos;re mid-job</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-3">Teams (3-10 people):</h4>
                  <ul className="space-y-2 text-muted-dark text-sm">
                    <li>• Job allocation and scheduling become critical at scale</li>
                    <li>• Multi-user quoting means consistent pricing across the team</li>
                    <li>• Real-time visibility: know where every engineer is</li>
                    <li>• Customer communication stays professional regardless of who&apos;s assigned</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Getting Started: Week-by-Week Plan</h2>
            
            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Week 1-2: Stop Losing Leads</h3>
                  <div className="space-y-3 text-muted-dark text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Set up AI call answering for missed calls</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Connect WhatsApp Business for customer messaging</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Automated booking confirmations and reminders</span>
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-navy mb-4 mt-8">Week 3-4: Get Paid Faster</h3>
                  <div className="space-y-3 text-muted-dark text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Set up AI-powered invoicing with card payments</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Automate payment reminders and chase-ups</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Digital receipt capture for expenses</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Expert Support</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-medium text-dark mb-1">AI for Trade Businesses</h4>
                      <p className="text-muted-dark text-sm"><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas</a> specialises in setting up AI automation for trade businesses across the UK — from sole traders to 20-person teams.</p>
                    </div>
                    <div className="border-l-4 border-blue pl-4">
                      <h4 className="font-medium text-dark mb-1">WhatsApp Automation</h4>
                      <p className="text-muted-dark text-sm">Automate customer communication on WhatsApp with <a href="https://heypinchy.com" className="text-orange hover:text-orange-hover">Pinchy</a> — send quotes, confirmations, and updates without lifting a finger.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI for Plumbers FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Do I need to be tech-savvy to use AI tools?</h3>
                <p className="text-muted-dark text-sm">
                  Not at all. Most modern AI tools for tradespeople are designed to work from your phone with minimal setup. If you can use WhatsApp and take a photo, you can use these tools. Many plumbers and electricians are up and running within a day. <a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas</a> offers hands-on setup support if you want help getting started.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How does AI call handling work when I&apos;m on a job?</h3>
                <p className="text-muted-dark text-sm">
                  When you can&apos;t answer, the AI picks up after a set number of rings (or all calls if you prefer). It greets the caller naturally, asks about their problem, takes their details, and books a callback or appointment slot. You get an instant notification with the summary. The caller gets a professional experience instead of voicemail — which most people just hang up on.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Will customers know they&apos;re talking to an AI?</h3>
                <p className="text-muted-dark text-sm">
                  Modern AI voice and chat tools are remarkably natural. For WhatsApp and text-based communication, most customers won&apos;t notice. For phone calls, the AI identifies itself — transparency matters — but customers overwhelmingly prefer getting an immediate, helpful response to reaching voicemail. Satisfaction rates are typically 85%+ for AI-handled enquiries.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What about Gas Safe and compliance record-keeping?</h3>
                <p className="text-muted-dark text-sm">
                  AI job management tools can help maintain Gas Safe records, generate landlord certificates, and keep a digital trail of every job. Some integrate directly with Gas Safe Online for registration lookups. Digital records are actually more reliable than paper ones for compliance purposes — and they&apos;re backed up automatically.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Can AI help me get more Google reviews?</h3>
                <p className="text-muted-dark text-sm">
                  Yes — this is one of the easiest wins. After completing a job, the AI automatically sends a friendly review request via text or WhatsApp with a direct link to your Google Business Profile. Tradespeople using automated review requests typically see a 3-5x increase in reviews within the first three months. More reviews means higher Google rankings means more enquiries.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How much does all this cost for a sole trader?</h3>
                <p className="text-muted-dark text-sm">
                  You can get started with AI call handling and basic invoicing for under £100 per month. A full setup with quoting, scheduling, and review automation runs £150-£300 per month. Compare that to the £750+ per week in billable time you lose to admin, and the maths is straightforward. Most tradespeople see a positive return within the first month.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">I already use Checkatrade/MyBuilder — does AI replace those?</h3>
                <p className="text-muted-dark text-sm">
                  AI doesn&apos;t replace lead platforms — it makes you better at converting the leads they send you. When a Checkatrade lead comes in, AI ensures you respond instantly (speed of response is the #1 factor in winning the job), sends a professional quote quickly, and follows up automatically. You&apos;ll win a higher percentage of the leads you&apos;re already paying for.
                </p>
              </div>
            </div>
          </section>

        </div>
      </article>

      <section className="py-16 bg-navy">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Automate Your <span className="text-orange">Trade Business</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a free assessment of how AI can save you 10+ hours a week on admin, win more jobs, and get paid faster. We&apos;ll map the right tools to your trade and budget.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Your Free Trade Business AI Assessment
          </a>
        </div>
      </section>

      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-agents-for-accountants" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Accountants UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-charities" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Charities UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-surface">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              AI Automation for Plumbers and Trade Businesses
            </h2>
            <p className="text-muted-dark text-lg">
              Book a consultation to discuss how AI can transform your trade business operations and free up your time for billable work.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
