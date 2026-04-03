import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Appointment Booking: Never Miss a Lead Again | OpenClaw",
  description: "How AI appointment booking systems capture leads 24/7, reduce no-shows, and automate scheduling for UK service businesses. Costs, tools, and implementation guide.",
  keywords: [
    "ai appointment booking",
    "automated appointment scheduling",
    "ai booking system uk",
    "never miss a lead",
    "appointment booking automation",
    "ai scheduling software",
    "24/7 booking system",
    "service business booking ai"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-appointment-booking" },
  openGraph: {
    title: "AI Appointment Booking: Never Miss a Lead Again | OpenClaw",
    description: "Complete guide to AI appointment booking for UK service businesses. Capture leads 24/7, reduce no-shows by 40%, and automate your scheduling.",
    url: "https://openclawconsultant.co.uk/guides/ai-appointment-booking",
    type: "article",
  },
};

export default function AIAppointmentBookingPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">AI Booking</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Appointment Booking: <span className="text-orange">Never Miss a Lead Again</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              62% of calls to UK service businesses go unanswered during busy periods. Every missed call is a potential customer lost to a competitor. AI appointment booking captures those leads 24/7 — by phone, web, WhatsApp, or social media — and books them in automatically.
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
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              For any business that lives on appointments — salons, dental practices, plumbers, solicitors, consultants, physios — every missed enquiry is lost revenue. The average UK service business misses 20-40% of inbound calls, and most of those callers won&apos;t ring back. They&apos;ll Google the next result instead.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              AI appointment booking isn&apos;t just about having a calendar on your website. Modern AI systems handle the entire booking journey: answering questions, qualifying the enquiry, checking availability, booking the slot, sending confirmations, and managing reminders. They work across every channel your customers use — and they never take a lunch break.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">The Cost of Missed Calls</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">62%</div>
                <div className="text-slate-600 text-sm">Calls missed during peak</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">85%</div>
                <div className="text-slate-600 text-sm">Won&apos;t call back</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">40%</div>
                <div className="text-slate-600 text-sm">No-show reduction with AI</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">£25K+</div>
                <div className="text-slate-600 text-sm">Revenue lost annually</div>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Consider a salon that charges £50 average per appointment and misses 5 calls a day. That&apos;s £250 in potential revenue, every single day. Even converting half of those missed calls would add £30,000 to annual revenue. For higher-value services like solicitors or consultants, the numbers are even more stark — one missed £500 consultation per week adds up to £26,000 per year.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">How AI Appointment Booking Works</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Multi-Channel Lead Capture</h3>
                <p className="text-slate-600 text-sm mb-4">
                  AI booking assistants sit across every channel your customers use. Someone messages at 11pm on Instagram? The AI responds, qualifies the enquiry, and books an appointment — all before you wake up. It handles website chat, WhatsApp, Facebook Messenger, Instagram DMs, SMS, and even phone calls with AI voice agents.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Channels Covered:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Website chatbot with booking widget</li>
                      <li>• WhatsApp Business automated responses</li>
                      <li>• Facebook and Instagram DM integration</li>
                      <li>• Google Business Profile messaging</li>
                      <li>• AI phone answering for missed calls</li>
                      <li>• SMS two-way conversation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">What the AI Handles:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Answering common questions about services and pricing</li>
                      <li>• Qualifying leads (what they need, when, budget)</li>
                      <li>• Checking real-time availability</li>
                      <li>• Booking confirmed appointments</li>
                      <li>• Sending confirmations and calendar invites</li>
                      <li>• Collecting deposit payments where applicable</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Smart Scheduling and Optimisation</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Beyond basic calendar management, AI scheduling optimises your diary for maximum efficiency. It considers travel time between jobs (for mobile services), resource requirements, staff skills, and even customer preferences to build the most productive schedule possible.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Intelligent Features:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Buffer time between appointments</li>
                      <li>• Travel time calculation for mobile services</li>
                      <li>• Resource and room allocation</li>
                      <li>• Priority scheduling for high-value services</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">No-Show Prevention:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Multi-stage reminders (48hr, 24hr, 2hr)</li>
                      <li>• Easy rescheduling via text or chat</li>
                      <li>• Automatic waitlist filling for cancellations</li>
                      <li>• Deposit collection for high-value bookings</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Post-Booking Automation</h3>
                <p className="text-slate-600 text-sm mb-4">
                  The appointment is just the beginning. AI continues working after the booking: sending pre-appointment instructions, collecting feedback afterwards, prompting reviews, and scheduling follow-ups. This turns one-time customers into long-term clients.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Before the Appointment:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Pre-appointment forms and questionnaires</li>
                      <li>• Directions and parking information</li>
                      <li>• What to bring / preparation instructions</li>
                      <li>• Easy rescheduling if plans change</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">After the Appointment:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Thank you messages and satisfaction surveys</li>
                      <li>• Google review requests (timed for best results)</li>
                      <li>• Rebooking prompts at the right interval</li>
                      <li>• Referral programme invitations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Industry-Specific Applications</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <h3 className="font-heading text-lg font-bold text-navy mb-3">Healthcare and Dental</h3>
                <p className="text-slate-600 text-sm">NHS and private appointment management, patient triage, recall systems, and treatment plan follow-ups. See our detailed <a href="/guides/ai-for-dentists-uk" className="text-orange hover:text-orange-hover">AI for dental practices</a> guide.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <h3 className="font-heading text-lg font-bold text-navy mb-3">Trade Services</h3>
                <p className="text-slate-600 text-sm">Job booking with travel time optimisation, quote request handling, and emergency callout prioritisation. Perfect for plumbers, electricians, and heating engineers. Check out our <a href="/guides/ai-for-plumbers-uk" className="text-orange hover:text-orange-hover">AI for plumbers</a> guide.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <h3 className="font-heading text-lg font-bold text-navy mb-3">Salons and Beauty</h3>
                <p className="text-slate-600 text-sm">Stylist-specific booking, service duration management, upselling during booking, and client preference tracking for personalised experiences.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <h3 className="font-heading text-lg font-bold text-navy mb-3">Professional Services</h3>
                <p className="text-slate-600 text-sm">Consultation booking for solicitors, accountants, and financial advisers with lead qualification, conflict checking, and document collection before the meeting.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Cost and ROI</h2>
            
            <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-medium text-slate-800">Solution Level</th>
                      <th className="text-center py-3 font-medium text-orange">Monthly Cost</th>
                      <th className="text-center py-3 font-medium text-blue">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b">
                      <td className="py-3">Basic (chatbot + calendar)</td>
                      <td className="py-3 text-center">£50-£150</td>
                      <td className="py-3 text-center">Solo operators, small practices</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Standard (multi-channel + reminders)</td>
                      <td className="py-3 text-center">£150-£400</td>
                      <td className="py-3 text-center">Growing businesses, 2-5 staff</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Premium (AI voice + full automation)</td>
                      <td className="py-3 text-center">£400-£1,000</td>
                      <td className="py-3 text-center">Multi-site, high-volume booking</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Typical ROI</td>
                      <td className="py-3 text-center font-semibold text-orange" colSpan={2}>5-10× return within 3 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Implementation</h3>
                  <div className="space-y-3 text-slate-600 text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Audit current booking process and missed lead rate</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Choose channels (web, WhatsApp, phone, social)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Integrate with existing calendar/CRM</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Configure services, availability, and pricing</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Test thoroughly before going live</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Expert Support</h3>
                  <div className="space-y-2 text-slate-600 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                      <span><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas</a> designs and implements AI booking systems that integrate with your existing business tools.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                      <span>Automate WhatsApp booking conversations with <a href="https://heypinchy.com" className="text-orange hover:text-orange-hover">Pinchy</a>.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI Appointment Booking FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Will AI booking feel impersonal to my customers?</h3>
                <p className="text-slate-600 text-sm">
                  Modern AI booking assistants are remarkably natural. They&apos;re trained on your business&apos;s tone and knowledge base, so responses feel personal and helpful. Most customers prefer instant 24/7 responses to being put on hold or waiting for a callback. You can always set the AI to hand off to a human for complex requests.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Does it integrate with my existing calendar and booking system?</h3>
                <p className="text-slate-600 text-sm">
                  Yes. AI booking tools integrate with Google Calendar, Outlook, Calendly, Acuity, Setmore, and most industry-specific platforms (Dentally, Treatwell, SimplyBook, ServiceM8). The key is real-time two-way sync so availability is always accurate.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What happens when the AI can&apos;t handle a request?</h3>
                <p className="text-slate-600 text-sm">
                  Good AI systems have clear escalation paths. If a query is too complex, the AI captures the customer&apos;s details and preferred callback time, then alerts your team. The customer gets a prompt human follow-up rather than an unhelpful automated loop.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How effective are AI reminders at reducing no-shows?</h3>
                <p className="text-slate-600 text-sm">
                  AI-powered multi-stage reminders (48-hour, 24-hour, 2-hour before) reduce no-shows by 35-45% compared to no reminders, and by 15-20% compared to basic SMS reminders. The AI personalises timing and channel based on each customer&apos;s past behaviour.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Can AI handle bookings that need deposits or payments?</h3>
                <p className="text-slate-600 text-sm">
                  Yes. Most AI booking platforms integrate with Stripe or other payment processors to collect deposits at booking time. This both secures the appointment and dramatically reduces no-shows — customers who&apos;ve paid a deposit are 80% less likely to miss their appointment.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Is AI phone answering realistic enough for professional services?</h3>
                <p className="text-slate-600 text-sm">
                  AI voice agents have improved dramatically. Modern systems handle natural conversation, answer questions, and book appointments by phone with high customer satisfaction. For professional services, most businesses start with AI handling overflow and after-hours calls before expanding to primary answering.
                </p>
              </div>
            </div>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Losing Leads to <span className="text-orange">Missed Calls</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a free assessment of how many leads your business is losing and how AI booking can recover them. We&apos;ll audit your current process and recommend the right solution.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Your Free Booking Audit
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Never Miss Another Lead
            </h2>
            <p className="text-slate-600 text-lg">
              Book a consultation to discuss AI appointment booking for your business.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
