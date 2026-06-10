import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI for Gyms: Member Retention & Growth",
  description: "How UK gyms and fitness businesses use AI to boost member retention, automate marketing, and reduce churn. Practical guide with costs, tools, and ROI data.",
  keywords: [
    "ai for gyms uk",
    "gym member retention ai",
    "fitness business ai automation",
    "gym marketing automation",
    "ai gym management",
    "reduce gym churn ai",
    "fitness club ai tools",
    "gym crm ai"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-for-gyms-uk" },
  openGraph: {
    title: "AI for Gyms: Member Retention & Growth",
    description: "Practical guide to AI tools for UK gyms. Reduce churn, automate marketing, and personalise member experiences with smart automation.",
    url: "https://openclawconsultant.co.uk/guides/ai-for-gyms-uk",
    type: "article",
  },
};

export default function AIForGymsUKPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Fitness AI</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI for Gyms and Fitness: <span className="text-orange">Member Retention and Marketing</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              The UK fitness industry loses roughly 50% of its members every year. AI-powered retention and marketing tools are helping smart gym operators cut churn by up to 30% and fill classes without burning through ad budgets. Here&apos;s the practical playbook.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                13 min read
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
              The UK fitness market is worth over £5 billion, with around 7,200 gyms and health clubs serving 10.5 million members. But the industry&apos;s biggest problem isn&apos;t attracting new members — it&apos;s keeping them. Average annual churn sits at 30-50%, which means gyms spend a fortune on acquisition only to watch members walk out the back door.
            </p>
            
            <p className="text-muted-dark leading-relaxed mb-8">
              AI changes this equation fundamentally. By predicting which members are at risk of leaving, personalising their experience, and automating the marketing that keeps them engaged, AI tools are giving UK gym operators a genuine competitive edge. This guide covers what works, what it costs, and how to get started.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">The Retention Crisis: Why Gyms Need AI</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">30%</div>
                <div className="text-muted-dark text-sm">Churn reduction possible</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">5-7×</div>
                <div className="text-muted-dark text-sm">Cheaper to retain than acquire</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">£240</div>
                <div className="text-muted-dark text-sm">Avg lifetime value per member</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">67%</div>
                <div className="text-muted-dark text-sm">Leave within first 90 days</div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-dark leading-relaxed">
                Acquiring a new gym member costs £50-£150 in the UK through marketing, promotions, and onboarding. Retaining an existing member costs a fraction of that. Yet most gyms pour 80% of their marketing budget into acquisition and 20% into retention — exactly backwards from what the data supports.
              </p>
              <p className="text-muted-dark leading-relaxed">
                The critical insight? Most members who cancel show behavioural warning signs weeks or months before they leave: declining visit frequency, missed classes, reduced engagement with the app. AI spots these patterns and triggers interventions before the cancellation request arrives.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI Applications for Gym Operators</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">1. Predictive Churn Analytics</h3>
                <p className="text-muted-dark text-sm mb-4">
                  This is the single highest-impact AI application for gyms. Machine learning models analyse visit frequency, class attendance patterns, time-of-day preferences, payment history, and engagement data to score each member&apos;s churn risk on a weekly basis.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Risk Signals Tracked:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Visit frequency declining over 2+ weeks</li>
                      <li>• Shifting from peak to off-peak visits</li>
                      <li>• Stopping class bookings</li>
                      <li>• App engagement dropping</li>
                      <li>• Payment failures or downgrades</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Automated Interventions:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Personalised &quot;We miss you&quot; messages</li>
                      <li>• Free PT session offers for at-risk members</li>
                      <li>• Class recommendations based on past preferences</li>
                      <li>• Staff alerts for high-value at-risk members</li>
                      <li>• Membership freeze options before cancellation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">2. Personalised Marketing Automation</h3>
                <p className="text-muted-dark text-sm mb-4">
                  Blanket marketing emails get 2% open rates. Personalised, behaviour-triggered communications get 25-40%. AI segments your member base and delivers the right message at the right time through the right channel — email, SMS, push notification, or WhatsApp.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Smart Campaigns:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• New member onboarding sequences (first 90 days)</li>
                      <li>• Class recommendations based on interests and schedule</li>
                      <li>• Milestone celebrations (100 visits, anniversaries)</li>
                      <li>• Re-engagement for lapsed members</li>
                      <li>• Referral programme promotion to engaged members</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Channel Optimisation:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• AI determines best channel per member</li>
                      <li>• Send time optimisation for maximum engagement</li>
                      <li>• A/B testing of subject lines and offers</li>
                      <li>• WhatsApp for high-value personal touches</li>
                      <li>• Push notifications for time-sensitive offers</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">3. Class and Capacity Optimisation</h3>
                <p className="text-muted-dark text-sm mb-4">
                  AI analyses attendance patterns, weather data, seasonal trends, and local events to predict demand and optimise class schedules. This means fewer half-empty classes and fewer members turned away from popular sessions.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Scheduling Intelligence:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Predict attendance for each class and time slot</li>
                      <li>• Dynamic pricing for peak vs off-peak</li>
                      <li>• Automatic waitlist management</li>
                      <li>• Instructor scheduling optimisation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Revenue Impact:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• 15-25% improvement in class fill rates</li>
                      <li>• Reduced instructor costs through better scheduling</li>
                      <li>• Higher member satisfaction from available classes</li>
                      <li>• Data-driven decisions on new class launches</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple/5 to-orange/5 rounded-xl p-6 border border-purple/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">4. Lead Generation and Conversion</h3>
                <p className="text-muted-dark text-sm mb-4">
                  AI chatbots on your website and social media channels handle enquiries 24/7, qualify leads, book trial sessions, and follow up automatically. They convert browsers into bookers whilst your team focuses on delivering great experiences on the gym floor.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Conversion Tools:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• 24/7 chatbot answering membership queries</li>
                      <li>• Automated trial session booking</li>
                      <li>• Lead scoring based on engagement</li>
                      <li>• Social media ad to booking automation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Follow-Up Automation:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Post-trial nurture sequences</li>
                      <li>• Abandoned sign-up recovery</li>
                      <li>• Review and testimonial collection</li>
                      <li>• Referral programme automation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Cost and ROI for UK Gyms</h2>
            
            <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10 mb-8">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">Investment vs Return</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-medium text-dark">AI Tool</th>
                      <th className="text-center py-3 font-medium text-orange">Monthly Cost</th>
                      <th className="text-center py-3 font-medium text-blue">Monthly Impact</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-dark">
                    <tr className="border-b">
                      <td className="py-3">Churn prediction + retention</td>
                      <td className="py-3 text-center">£150-£400</td>
                      <td className="py-3 text-center">Save 10-20 members/mo</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Marketing automation</td>
                      <td className="py-3 text-center">£100-£300</td>
                      <td className="py-3 text-center">+25% email engagement</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">AI chatbot + lead conversion</td>
                      <td className="py-3 text-center">£80-£250</td>
                      <td className="py-3 text-center">+15% trial conversions</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Total Investment</td>
                      <td className="py-3 text-center font-semibold text-orange">£330-£950/mo</td>
                      <td className="py-3 text-center font-semibold text-blue">3-5× ROI typical</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-muted-dark leading-relaxed">
              For a 1,000-member gym with £40/month average membership, retaining just 15 extra members per month through AI-powered interventions adds £7,200 in annual revenue — far exceeding the cost of the tools. When you add improved lead conversion and marketing efficiency, most gyms see 3-5× return on their AI investment within the first year.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Getting Started</h2>
            
            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Implementation Roadmap</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-medium text-dark mb-1">Week 1-2: Audit</h4>
                      <p className="text-muted-dark text-sm">Review current churn rate, member data quality, and existing systems (Gym Master, ClubRight, Mindbody, etc.)</p>
                    </div>
                    <div className="border-l-4 border-blue pl-4">
                      <h4 className="font-medium text-dark mb-1">Week 3-4: Deploy Quick Wins</h4>
                      <p className="text-muted-dark text-sm">Implement automated onboarding sequences and basic churn alerts</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-dark mb-1">Month 2-3: Full Automation</h4>
                      <p className="text-muted-dark text-sm">Roll out predictive churn, AI chatbot, and marketing automation</p>
                    </div>
                    <div className="border-l-4 border-purple pl-4">
                      <h4 className="font-medium text-dark mb-1">Month 4+: Optimise</h4>
                      <p className="text-muted-dark text-sm">Refine models based on real data, expand to class optimisation</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Expert Support</h3>
                  <div className="space-y-2 text-muted-dark text-sm">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                      <span><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas</a> helps gym operators implement AI retention and marketing systems that integrate with existing membership platforms.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                      <span>Automate member communications with <a href="https://heypinchy.com" className="text-orange hover:text-orange-hover">Pinchy</a> workflow automation.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                      <span>Looking for AI talent to build your fitness tech? Browse agent teams on <a href="https://clawroster.io" className="text-orange hover:text-orange-hover">ClawRoster</a>.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI for Gyms FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Does AI actually reduce gym member churn?</h3>
                <p className="text-muted-dark text-sm">
                  Yes. Gyms using predictive churn analytics report 20-35% reductions in monthly cancellations. The key is early intervention — AI identifies at-risk members 4-6 weeks before they would typically cancel, giving your team time to re-engage them with personalised offers and outreach.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What gym management software integrates with AI tools?</h3>
                <p className="text-muted-dark text-sm">
                  Most major UK gym management platforms — Gym Master, ClubRight, Mindbody, Glofox, and TeamUp — offer API access for AI integration. Some have built-in AI features, whilst others connect through middleware. The integration complexity varies, so check compatibility before committing.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Is AI marketing suitable for independent gyms or only chains?</h3>
                <p className="text-muted-dark text-sm">
                  Independent gyms often benefit more from AI marketing than chains, because the tools level the playing field. A single-site gym with 500 members can deliver the same personalised experience as a national chain with thousands of staff. The costs are proportionate — you don&apos;t need a massive budget to start.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How does AI personalise the member experience?</h3>
                <p className="text-muted-dark text-sm">
                  AI analyses each member&apos;s behaviour — when they visit, which classes they attend, their fitness goals, and engagement patterns — to deliver personalised class recommendations, workout suggestions, and communications. Members feel the gym &quot;knows&quot; them, which builds loyalty and reduces the urge to try competitors.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What data do I need to start using AI for retention?</h3>
                <p className="text-muted-dark text-sm">
                  At minimum, you need member check-in data (visit dates and times), membership start dates, and cancellation history. Class booking data, email engagement metrics, and payment history make the models significantly more accurate. Most gyms already have this data in their management software — it just needs connecting.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How quickly can we see results from gym AI tools?</h3>
                <p className="text-muted-dark text-sm">
                  Marketing automation shows results within 2-4 weeks (improved email engagement, more trial bookings). Churn reduction typically becomes measurable at the 6-8 week mark as AI-triggered interventions start preventing cancellations. Full ROI visibility usually takes 3-4 months.
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
            Stop Losing <span className="text-orange">Members</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a free churn analysis and AI strategy assessment for your gym. We&apos;ll show you exactly where members are dropping off and how AI can plug the gaps.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Your Free Gym AI Assessment
          </a>
        </div>
      </section>

      {/* Contact Form */}
      
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
              AI-Powered Gym Growth
            </h2>
            <p className="text-muted-dark text-lg">
              Book a consultation to discuss how AI can boost retention, fill classes, and grow your membership base.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
