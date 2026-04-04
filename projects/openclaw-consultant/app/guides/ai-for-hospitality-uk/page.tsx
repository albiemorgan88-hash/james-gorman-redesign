import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI for Hotels & Hospitality UK",
  description: "Transform your UK hotel or hospitality business with AI. Guest personalisation, revenue management, operations automation, and booking optimisation strategies for hotels.",
  keywords: [
    "ai for hotels uk",
    "hospitality ai implementation",
    "hotel ai solutions", 
    "hospitality automation uk",
    "ai revenue management hotels",
    "hotel booking ai",
    "guest service ai",
    "hospitality analytics ai"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-for-hospitality-uk" },
  openGraph: {
    title: "AI for Hotels & Hospitality UK",
    description: "Boost hotel performance with AI-powered guest personalisation, revenue management, and operations automation. Implementation guide for UK hospitality businesses.",
    url: "https://openclawconsultant.co.uk/guides/ai-for-hospitality-uk",
    type: "article",
  },
};

export default function AIForHospitalityUKPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Hospitality AI</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI for UK <span className="text-orange">Hotels & Hospitality</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Transform your hospitality business with AI-powered guest personalisation, intelligent revenue management, and automated operations. Learn how leading UK hotels are using AI to enhance guest experiences, optimise pricing, and increase profitability.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                16 min read
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
              UK hotels implementing AI are seeing average revenue increases of 32% and guest satisfaction improvements of 45%. From intelligent revenue management to personalised guest experiences, AI is revolutionising how hospitality businesses operate and deliver exceptional service.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              This comprehensive guide shows UK hospitality operators exactly how to implement AI solutions that drive measurable business growth. Learn from successful implementations across boutique hotels, chains, B&Bs, restaurants, and event venues throughout the UK.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Core AI Applications in UK Hospitality</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">18%</div>
                <div className="text-slate-600 text-sm">Revenue per room increase</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">85%</div>
                <div className="text-slate-600 text-sm">Occupancy rate optimisation</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H9v6H5V3H3v10zm0 8h8v-6H9v2H5v-2H3v6zm10 0h8V11h-2v6h-4v-6h-2v10zm0-12h8V3h-2v4h-4V3h-2v6z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">67%</div>
                <div className="text-slate-600 text-sm">Front desk efficiency gain</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">91%</div>
                <div className="text-slate-600 text-sm">Guest satisfaction scores</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Revenue Management & Dynamic Pricing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">AI-Powered Solutions:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Real-time demand forecasting and pricing</li>
                      <li>• Market competitor rate monitoring</li>
                      <li>• Event-based pricing adjustments</li>
                      <li>• Seasonal and weather-driven optimisation</li>
                      <li>• Package and upsell recommendations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Financial Impact:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• 15-25% increase in average daily rate</li>
                      <li>• 10-20% improvement in RevPAR</li>
                      <li>• 8-15% boost in total revenue</li>
                      <li>• 20-30% better yield management</li>
                      <li>• 25-40% increase in ancillary revenue</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Guest Experience Personalisation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Personalisation Features:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Customised room preferences and amenities</li>
                      <li>• Personalised dining and activity recommendations</li>
                      <li>• Targeted promotional offers</li>
                      <li>• Automated guest communication</li>
                      <li>• Loyalty programme optimisation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Guest Satisfaction Benefits:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• 40-60% increase in repeat bookings</li>
                      <li>• 30-45% improvement in review scores</li>
                      <li>• 25-35% higher guest lifetime value</li>
                      <li>• 50-70% better upselling success rates</li>
                      <li>• 35-50% increase in direct bookings</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Operations Automation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Automated Processes:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Check-in/check-out automation</li>
                      <li>• Housekeeping scheduling and optimisation</li>
                      <li>• Maintenance request management</li>
                      <li>• Inventory and procurement automation</li>
                      <li>• Staff scheduling and resource allocation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Operational Improvements:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• 40-60% reduction in check-in wait times</li>
                      <li>• 30-50% improvement in housekeeping efficiency</li>
                      <li>• 25-35% decrease in operational costs</li>
                      <li>• 50-70% faster service issue resolution</li>
                      <li>• 20-30% improvement in staff productivity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">UK Hospitality AI Success Stories</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Boutique Hotel Chain</h3>
                    <p className="text-slate-600 text-sm">15-property boutique hotel group across UK cities</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    380% ROI
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2">Challenge:</h4>
                  <p className="text-slate-600 text-sm mb-4">Competing with larger chains on personalisation whilst maintaining boutique charm and optimising rates across diverse locations</p>
                  
                  <h4 className="font-semibold text-slate-800 mb-2">AI Solution:</h4>
                  <p className="text-slate-600 text-sm mb-4">Implemented guest preference tracking, dynamic pricing, and automated concierge services across all properties</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">RevPAR Growth</div>
                    <div className="text-green-700 font-semibold text-sm">28%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Guest Satisfaction</div>
                    <div className="text-green-700 font-semibold text-sm">4.7/5</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Repeat Bookings</div>
                    <div className="text-green-700 font-semibold text-sm">52% increase</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Operational Efficiency</div>
                    <div className="text-green-700 font-semibold text-sm">43% improvement</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Country House Hotel</h3>
                    <p className="text-slate-600 text-sm">Historic 4-star hotel and events venue in the Cotswolds</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    450% ROI
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2">Challenge:</h4>
                  <p className="text-slate-600 text-sm mb-4">Managing complex wedding and event bookings whilst optimising room rates for leisure guests during peak seasons</p>
                  
                  <h4 className="font-semibold text-slate-800 mb-2">AI Solution:</h4>
                  <p className="text-slate-600 text-sm mb-4">AI-powered event planning, guest journey personalisation, and intelligent inventory management</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Wedding Revenue</div>
                    <div className="text-green-700 font-semibold text-sm">41% increase</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Guest Spend</div>
                    <div className="text-green-700 font-semibold text-sm">35% higher</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Planning Efficiency</div>
                    <div className="text-green-700 font-semibold text-sm">60% faster</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Customer Reviews</div>
                    <div className="text-green-700 font-semibold text-sm">4.9/5</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Implementation Roadmap</h2>
            
            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Getting Started</h3>
                  <div className="space-y-3 text-slate-600 text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Audit current guest data and booking systems</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Identify highest-impact AI opportunities for your property type</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Start with revenue management or guest personalisation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Ensure data integration across all guest touchpoints</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Establish baseline performance metrics</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Expert Support:</h4>
                    <div className="space-y-2 text-slate-600 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas AI consultancy</a> for hospitality AI strategy</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span>Build AI agent teams with <a href="https://clawroster.io" className="text-orange hover:text-orange-hover">ClawRoster</a> for operations</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Success Factors</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Guest Data Integration</h4>
                      <p className="text-slate-600 text-sm">Unified guest profiles across all systems are essential for personalisation</p>
                    </div>
                    <div className="border-l-4 border-blue pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Staff Adoption</h4>
                      <p className="text-slate-600 text-sm">Train your team to leverage AI insights for better guest service</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Guest Privacy</h4>
                      <p className="text-slate-600 text-sm">Transparent data practices build trust and enhance guest relationships</p>
                    </div>
                    <div className="border-l-4 border-purple pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Continuous Learning</h4>
                      <p className="text-slate-600 text-sm">Regular system optimisation drives long-term performance gains</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Hospitality AI FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What are the most effective AI applications for UK hotels?</h3>
                <p className="text-slate-600 text-sm">
                  Most effective applications include dynamic revenue management (15-25% RevPAR increase), guest personalisation (40-60% repeat booking lift), operational automation (30-50% efficiency gains), and intelligent booking management. Start with revenue management for quickest financial impact.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How much should hotels invest in AI technology?</h3>
                <p className="text-slate-600 text-sm">
                  Investment varies by hotel size: boutique hotels (20-50 rooms): £15K-£50K annually. Mid-size (50-150 rooms): £50K-£150K. Large hotels (150+ rooms): £150K-£500K+. Most properties see positive ROI within 8-15 months with 250-450% returns over 3 years.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How does AI improve guest satisfaction without feeling impersonal?</h3>
                <p className="text-slate-600 text-sm">
                  AI enhances human service rather than replacing it. By anticipating guest needs, providing relevant recommendations, and enabling staff to focus on high-value interactions, AI actually makes service more personal and attentive whilst maintaining authentic hospitality.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What guest data is needed for effective hotel AI implementation?</h3>
                <p className="text-slate-600 text-sm">
                  Essential data includes booking history, stay preferences, spending patterns, service requests, feedback, and demographic information. Integration with PMS, booking engines, and guest communication platforms creates comprehensive profiles for personalisation.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How quickly can hotels see ROI from AI investments?</h3>
                <p className="text-slate-600 text-sm">
                  ROI timeline varies by application: revenue management (2-6 months), guest personalisation (3-9 months), operational automation (4-12 months). Most hotels achieve positive returns within 12 months, with full benefits realised over 18-24 months as AI systems optimise.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Should hotels build AI capabilities internally or use external providers?</h3>
                <p className="text-slate-600 text-sm">
                  Most hotels benefit from partnering with AI specialists like Blue Canvas for strategy and implementation, using proven hospitality AI platforms, and developing internal capabilities for ongoing management. This approach balances speed, expertise, and cost control.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How does AI impact hotel staff roles and employment?</h3>
                <p className="text-slate-600 text-sm">
                  AI typically enhances staff capabilities rather than replacing roles. While automating routine tasks, it enables staff to focus on guest relationships, problem-solving, and high-value services. Invest in training to help staff leverage AI insights effectively.
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
            Transform Your <span className="text-orange">Hospitality Business</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a comprehensive hospitality AI assessment. I'll analyse your operations, identify high-impact opportunities, and create an implementation plan that enhances guest experiences and drives profitability.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Hospitality AI Assessment
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
              Enhance Your Guest Experience with AI
            </h2>
            <p className="text-slate-600 text-lg">
              Book a consultation to discuss how AI can transform your hospitality operations and guest satisfaction.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}