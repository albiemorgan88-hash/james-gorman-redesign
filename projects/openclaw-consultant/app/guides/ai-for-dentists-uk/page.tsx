import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI for Dentists: Practice Automation",
  description: "How UK dental practices use AI for appointment booking, patient management, reminders, and admin automation. Reduce no-shows by 40% and save 15+ hours per week.",
  keywords: [
    "ai for dentists uk",
    "dental practice ai automation",
    "ai appointment booking dentist",
    "dental patient management ai",
    "ai dental practice software",
    "dentist appointment automation",
    "nhs dental ai",
    "dental practice efficiency"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-for-dentists-uk" },
  openGraph: {
    title: "AI for Dentists: Practice Automation",
    description: "How UK dental practices use AI to automate appointments, reduce no-shows, and streamline patient management. Practical guide with costs and ROI.",
    url: "https://openclawconsultant.co.uk/guides/ai-for-dentists-uk",
    type: "article",
  },
};

export default function AIForDentistsUKPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Dental AI</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI for Dental Practices: <span className="text-orange">Appointment and Patient Management</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              UK dental practices lose an average of £30,000 per year to no-shows and admin inefficiency. AI-powered automation can recover most of that — whilst freeing your reception team to focus on patients, not phone tag. Here&apos;s exactly how it works.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                14 min read
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
              The average UK dental practice handles over 200 phone calls per week — appointment bookings, cancellations, reminders, and patient queries. That&apos;s nearly a full-time role just answering the phone. AI doesn&apos;t replace your receptionist; it handles the repetitive 80% so your team can manage the complex 20% that actually needs a human touch.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether you&apos;re a single-chair NHS practice or a multi-site private group, this guide covers practical AI applications that UK dental practices are using right now — not theoretical futures, but tools delivering measurable results today.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">The No-Show Problem: AI&apos;s Biggest Quick Win</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">40%</div>
                <div className="text-slate-600 text-sm">No-show reduction</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">15+ hrs</div>
                <div className="text-slate-600 text-sm">Admin time saved weekly</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">£30K</div>
                <div className="text-slate-600 text-sm">Annual revenue recovered</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">24/7</div>
                <div className="text-slate-600 text-sm">Online booking available</div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed">
                No-shows cost NHS dental practices between £20 and £50 per missed appointment, and private practices considerably more. The British Dental Association estimates that around 7-8% of appointments are missed across the UK — that&apos;s roughly one empty chair hour every day for a typical practice.
              </p>
              <p className="text-slate-600 leading-relaxed">
                AI-powered reminder systems go beyond simple SMS notifications. They analyse patient behaviour patterns to identify high-risk no-show patients, send personalised reminders at optimal times, and automatically offer cancellation slots to patients on waiting lists. The result? Practices using intelligent reminders report no-show reductions of 35-45%.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Key AI Applications for Dental Practices</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">1. Intelligent Appointment Scheduling</h3>
                <p className="text-slate-600 text-sm mb-4">
                  AI scheduling tools don&apos;t just fill slots — they optimise your diary. They consider treatment duration, equipment requirements, dentist preferences, and even patient anxiety levels to build efficient schedules that reduce downtime between appointments.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">What It Does:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Online booking integrated with practice management software</li>
                      <li>• Automatic waitlist management when cancellations occur</li>
                      <li>• Smart slot allocation based on treatment type</li>
                      <li>• Multi-channel booking (web, WhatsApp, phone)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Typical Results:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• 30% reduction in phone calls to reception</li>
                      <li>• 95%+ diary utilisation rate</li>
                      <li>• Patients book at evenings and weekends</li>
                      <li>• Fewer scheduling conflicts and double-bookings</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">2. Patient Communication Automation</h3>
                <p className="text-slate-600 text-sm mb-4">
                  From pre-appointment instructions to post-treatment follow-ups, AI handles the communication workflow that eats into your team&apos;s day. Chatbots answer common questions — &quot;Do you take NHS patients?&quot;, &quot;What&apos;s the cost of a crown?&quot; — instantly, any time of day.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Automated Messages:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Appointment confirmations and reminders (SMS, email, WhatsApp)</li>
                      <li>• Pre-appointment forms and medical history updates</li>
                      <li>• Post-treatment care instructions</li>
                      <li>• Recall and check-up reminders at 6-month intervals</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">AI Chatbot Capabilities:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Answer FAQs about treatments, prices, and opening hours</li>
                      <li>• Triage emergency enquiries</li>
                      <li>• Collect new patient information before first visit</li>
                      <li>• Handle rescheduling requests automatically</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">3. Treatment Planning and Patient Records</h3>
                <p className="text-slate-600 text-sm mb-4">
                  AI-assisted treatment planning tools analyse patient history, X-rays, and clinical notes to support dentists in diagnosis and treatment recommendations. They don&apos;t replace clinical judgement — they augment it with data-driven insights.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Clinical AI Tools:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• AI-assisted radiograph analysis for early detection</li>
                      <li>• Automated clinical note generation from voice dictation</li>
                      <li>• Treatment cost estimation and plan presentation</li>
                      <li>• Patient risk scoring for preventive care</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Admin Efficiency:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Automatic coding for NHS claims</li>
                      <li>• Insurance pre-authorisation assistance</li>
                      <li>• Digital consent form management</li>
                      <li>• Compliance audit trail automation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple/5 to-orange/5 rounded-xl p-6 border border-purple/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">4. Revenue and Marketing Automation</h3>
                <p className="text-slate-600 text-sm mb-4">
                  AI helps dental practices grow revenue through intelligent patient re-engagement, treatment acceptance follow-ups, and targeted marketing. Practices using AI marketing tools report 20-30% increases in treatment plan acceptance rates.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Revenue Growth:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Automated follow-up on unbooked treatment plans</li>
                      <li>• Lapsed patient re-engagement campaigns</li>
                      <li>• Review generation on Google and NHS Choices</li>
                      <li>• Referral programme automation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Local SEO and Marketing:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Google Business Profile optimisation</li>
                      <li>• Automated social media content scheduling</li>
                      <li>• Targeted ads for high-value treatments</li>
                      <li>• Patient satisfaction survey automation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Implementation Costs and ROI</h2>
            
            <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10 mb-8">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">Cost Breakdown for a Typical UK Practice</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-medium text-slate-800">AI Solution</th>
                      <th className="text-center py-3 font-medium text-orange">Monthly Cost</th>
                      <th className="text-center py-3 font-medium text-blue">Annual Saving</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b">
                      <td className="py-3">Online booking + reminders</td>
                      <td className="py-3 text-center">£80-£200</td>
                      <td className="py-3 text-center">£8,000-£15,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">AI chatbot (website + WhatsApp)</td>
                      <td className="py-3 text-center">£100-£300</td>
                      <td className="py-3 text-center">£6,000-£12,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Patient communication automation</td>
                      <td className="py-3 text-center">£50-£150</td>
                      <td className="py-3 text-center">£5,000-£10,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Marketing and review automation</td>
                      <td className="py-3 text-center">£100-£250</td>
                      <td className="py-3 text-center">£10,000-£25,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Total Package</td>
                      <td className="py-3 text-center font-semibold text-orange">£330-£900/mo</td>
                      <td className="py-3 text-center font-semibold text-blue">£29,000-£62,000/yr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">NHS vs Private Practice Considerations</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">NHS Practices:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Focus on reducing no-shows (direct revenue impact on UDAs)</li>
                    <li>• Automated NHS claim coding saves significant admin time</li>
                    <li>• Patient communication must comply with NHS data standards</li>
                    <li>• Lower budget threshold — start with booking and reminders</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Private Practices:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Treatment plan follow-up automation drives major revenue</li>
                    <li>• Premium patient experience expectations favour AI chatbots</li>
                    <li>• Marketing automation for cosmetic and elective treatments</li>
                    <li>• Higher budget allows full-stack implementation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Getting Started: A Practical Roadmap</h2>
            
            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Month 1-2: Quick Wins</h3>
                  <div className="space-y-3 text-slate-600 text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Implement online booking integrated with your practice management software</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Set up automated appointment reminders via SMS and email</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Deploy a website chatbot for FAQs and booking</span>
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-navy mb-4 mt-8">Month 3-6: Build Out</h3>
                  <div className="space-y-3 text-slate-600 text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Add WhatsApp Business integration for patient communication</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Automate recall reminders and lapsed patient outreach</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Implement review generation and Google Business Profile management</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Expert Support</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">AI Strategy for Dental</h4>
                      <p className="text-slate-600 text-sm"><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas</a> helps dental practices implement AI automation that integrates with existing practice management software.</p>
                    </div>
                    <div className="border-l-4 border-blue pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">WhatsApp Automation</h4>
                      <p className="text-slate-600 text-sm">Connect with patients on their preferred channel using <a href="https://heypinchy.com" className="text-orange hover:text-orange-hover">Pinchy</a> workflow automation.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Data Protection</h4>
                      <p className="text-slate-600 text-sm">All AI implementations must comply with GDPR, NHS data standards, and GDC record-keeping requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI for Dentists FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Is AI booking software compatible with Dentally, SOE, and other UK practice management systems?</h3>
                <p className="text-slate-600 text-sm">
                  Yes, most modern AI booking platforms integrate with popular UK dental software including Dentally, Software of Excellence (SOE), Exact, and Carestream Dental. Integration typically takes 2-4 weeks and your existing patient data migrates seamlessly.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How does AI handle dental emergencies and triage?</h3>
                <p className="text-slate-600 text-sm">
                  AI chatbots can be trained to recognise emergency keywords and symptoms, immediately escalating urgent cases to your emergency contact or directing patients to NHS 111. For non-urgent queries, the chatbot books appropriate appointments. This ensures genuine emergencies get fast responses whilst routine queries are handled automatically.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What about patient data security and GDPR compliance?</h3>
                <p className="text-slate-600 text-sm">
                  Any AI tool handling patient data must be GDPR compliant with UK-based or EU-based data hosting. Look for ISO 27001 certification, encryption at rest and in transit, and clear data processing agreements. Your practice remains the data controller, and patients must be informed about automated processing of their data.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Will patients actually use online booking and chatbots?</h3>
                <p className="text-slate-600 text-sm">
                  Research shows 67% of UK patients prefer online booking to phone calls, and that figure rises to 82% for under-40s. The key is offering multiple channels — phone remains available, but many patients actively prefer the convenience of booking at 10pm on a Sunday without waiting for Monday morning.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How quickly will we see ROI from dental AI tools?</h3>
                <p className="text-slate-600 text-sm">
                  Most practices see measurable results within 4-8 weeks. No-show reductions are typically the fastest win (visible within the first month), followed by admin time savings. Full ROI on a complete AI implementation usually takes 3-6 months, with the investment paying for itself many times over annually.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Can AI help with NHS dental contract management?</h3>
                <p className="text-slate-600 text-sm">
                  AI tools can help track UDA delivery, optimise appointment scheduling to meet contract targets, and automate claims coding. Some practices report 15-20% improvements in UDA delivery efficiency through better scheduling and reduced no-shows, helping avoid the financial penalties of under-delivery.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What&apos;s the difference between dental AI and standard practice management software?</h3>
                <p className="text-slate-600 text-sm">
                  Traditional practice management software stores data and manages workflows. AI adds intelligence on top — predicting no-shows, optimising schedules, automating patient communication, and generating insights from your data. Think of it as making your existing software significantly smarter rather than replacing it.
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
            Modernise Your <span className="text-orange">Dental Practice</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a free assessment of how AI can reduce no-shows, save admin time, and grow your practice revenue. We&apos;ll map the best tools to your existing setup and budget.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Your Free Dental AI Assessment
          </a>
        </div>
      </section>

      {/* Contact Form */}
      
      {/* Related Guides */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-agents-accountants" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Accountants UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-charities" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Charities UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              AI-Powered Dental Practice Management
            </h2>
            <p className="text-slate-600 text-lg">
              Book a consultation to discuss how AI automation can transform your dental practice operations.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
