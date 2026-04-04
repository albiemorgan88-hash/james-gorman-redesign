import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Automation vs Outsourcing: UK Guide",
  description: "Complete cost-benefit analysis of AI automation versus outsourcing for UK SMEs. ROI calculations, implementation strategies, and decision framework for business operations.",
  keywords: [
    "ai automation vs outsourcing uk",
    "ai roi for smes",
    "automation cost comparison", 
    "uk sme ai investment",
    "outsourcing alternatives ai",
    "business process automation",
    "ai implementation costs uk",
    "sme digital transformation"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-automation-vs-outsourcing" },
  openGraph: {
    title: "AI Automation vs Outsourcing: UK Guide",
    description: "Compare AI automation and outsourcing costs for UK SMEs. ROI analysis, decision framework, and implementation strategies for optimal business operations.",
    url: "https://openclawconsultant.co.uk/guides/ai-automation-vs-outsourcing",
    type: "article",
  },
};

export default function AIAutomationVsOutsourcingPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">SME Strategy</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Automation vs <span className="text-orange">Outsourcing</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Comprehensive cost-benefit analysis of AI automation versus traditional outsourcing for UK SMEs. Learn how to make data-driven decisions about business operations, calculate true ROI, and choose the optimal strategy for your growth stage.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                15 min read
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
              UK SMEs implementing AI automation are achieving 340% average ROI versus traditional outsourcing over 3 years. Whilst outsourcing provides immediate relief, AI automation offers long-term cost advantages, greater control, and scalable efficiency gains.
            </p>
            
            <p className="text-muted-dark leading-relaxed mb-8">
              This comprehensive analysis provides UK business owners with the data and framework needed to make informed decisions between AI automation and outsourcing. Compare real costs, implementation timelines, and strategic benefits to choose the optimal approach for your business.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Cost Comparison Analysis</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">18</div>
                <div className="text-muted-dark text-sm">Month break-even point</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">65%</div>
                <div className="text-muted-dark text-sm">Cost reduction by year 3</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H9v6H5V3H3v10zm0 8h8v-6H9v2H5v-2H3v6zm10 0h8V11h-2v6h-4v-6h-2v10zm0-12h8V3h-2v4h-4V3h-2v6z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">3x</div>
                <div className="text-muted-dark text-sm">Capacity increase potential</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">340%</div>
                <div className="text-muted-dark text-sm">3-year AI automation ROI</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Year 1 Cost Analysis</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">AI Automation:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Initial implementation: £15K-£75K</li>
                      <li>• Software licensing: £5K-£25K annually</li>
                      <li>• Training and setup: £3K-£15K</li>
                      <li>• Ongoing maintenance: £2K-£10K annually</li>
                      <li><strong>Total Year 1: £25K-£125K</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Traditional Outsourcing:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Customer service: £25K-£80K annually</li>
                      <li>• Data entry/admin: £15K-£45K annually</li>
                      <li>• Marketing services: £20K-£60K annually</li>
                      <li>• Financial processing: £10K-£30K annually</li>
                      <li><strong>Total Year 1: £70K-£215K</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">3-Year Total Cost of Ownership</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">AI Automation Path:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Year 1: £25K-£125K (setup + operations)</li>
                      <li>• Year 2: £7K-£35K (licensing + maintenance)</li>
                      <li>• Year 3: £7K-£35K (licensing + maintenance)</li>
                      <li>• Additional capacity: No extra cost</li>
                      <li><strong>3-Year Total: £39K-£195K</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Outsourcing Path:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Year 1: £70K-£215K (service contracts)</li>
                      <li>• Year 2: £75K-£230K (inflation + growth)</li>
                      <li>• Year 3: £80K-£245K (continued inflation)</li>
                      <li>• Scale-up costs: Additional £20K-£60K</li>
                      <li><strong>3-Year Total: £245K-£750K</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Strategic Benefits Comparison</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">AI Automation Advantages:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• 24/7 availability and consistency</li>
                      <li>• Complete data ownership and control</li>
                      <li>• Instant scalability without additional costs</li>
                      <li>• Continuous improvement and learning</li>
                      <li>• No dependency on external suppliers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Outsourcing Advantages:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Immediate implementation and expertise</li>
                      <li>• Lower upfront investment required</li>
                      <li>• Access to specialist skills and knowledge</li>
                      <li>• Predictable monthly costs</li>
                      <li>• Reduced management overhead</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Decision Framework for UK SMEs</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-border-light">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Choose AI Automation When:</h3>
                    <p className="text-muted-dark text-sm">High-volume, predictable processes with growth potential</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    Long-term Value
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Process Characteristics:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• High-volume, repetitive tasks ({'>'}1000/month)</li>
                      <li>• Rule-based or pattern-based processes</li>
                      <li>• Digital data inputs and outputs</li>
                      <li>• Clear success metrics and quality standards</li>
                      <li>• Growth trajectory requiring scalability</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Business Readiness:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Available upfront investment (£25K-£125K)</li>
                      <li>• 12-18 month payback tolerance</li>
                      <li>• Digital infrastructure and data systems</li>
                      <li>• Internal change management capability</li>
                      <li>• Long-term growth and efficiency focus</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-border-light">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Choose Outsourcing When:</h3>
                    <p className="text-muted-dark text-sm">Specialist skills, immediate relief, or temporary solutions needed</p>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                    Immediate Solution
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Process Characteristics:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Specialist expertise or knowledge required</li>
                      <li>• Creative or strategic thinking involved</li>
                      <li>• Complex human judgement and nuance</li>
                      <li>• Variable volume or seasonal patterns</li>
                      <li>• Temporary or project-based requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Business Situation:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Limited upfront capital availability</li>
                      <li>• Immediate capacity relief required</li>
                      <li>• Uncertain volume or duration</li>
                      <li>• Lack of internal technical capabilities</li>
                      <li>• Focus on core business activities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Hybrid Implementation Strategy</h2>
            
            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Phase 1: Immediate Relief</h3>
                  <div className="space-y-3 text-muted-dark text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Outsource high-priority pain points for immediate relief</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Document current processes and data flows</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Identify highest-volume, rule-based tasks</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Begin building internal data infrastructure</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Calculate ROI for AI automation opportunities</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-dark mb-3">Timeline: Months 1-6</h4>
                    <div className="space-y-2 text-muted-dark text-sm">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span>Outsourcing provides immediate capacity relief</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span>Foundation building for future AI automation</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Phase 2: AI Transition</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-medium text-dark mb-1">Pilot Implementation</h4>
                      <p className="text-muted-dark text-sm">Begin with highest-ROI automation opportunities whilst maintaining outsourced backup</p>
                    </div>
                    <div className="border-l-4 border-blue pl-4">
                      <h4 className="font-medium text-dark mb-1">Gradual Migration</h4>
                      <p className="text-muted-dark text-sm">Progressively move processes from outsourcing to automation as systems prove reliable</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-dark mb-1">Hybrid Operations</h4>
                      <p className="text-muted-dark text-sm">Maintain outsourcing for complex tasks whilst automating routine operations</p>
                    </div>
                    <div className="border-l-4 border-purple pl-4">
                      <h4 className="font-medium text-dark mb-1">Expert Partnership</h4>
                      <p className="text-muted-dark text-sm"><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas AI guidance</a> ensures optimal transition strategy and implementation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI vs Outsourcing FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What is the typical break-even point for AI automation versus outsourcing?</h3>
                <p className="text-muted-dark text-sm">
                  Most UK SMEs reach break-even between 12-24 months, with the average at 18 months. High-volume processes (&gt;5000 transactions/month) typically break even faster (9-15 months), whilst complex implementations may take 24-36 months but deliver higher long-term ROI.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How do I calculate the true ROI of AI automation versus outsourcing?</h3>
                <p className="text-muted-dark text-sm">
                  Calculate total cost of ownership including: setup costs, licensing, training, maintenance (AI) versus service fees, management overhead, scaling costs (outsourcing). Factor in capacity improvements, data ownership value, and strategic flexibility. Include hidden costs like contract renegotiation and knowledge transfer.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Which business processes are best suited for AI automation versus outsourcing?</h3>
                <p className="text-muted-dark text-sm">
                  Best for AI: high-volume data processing, customer service queries, invoice processing, inventory management, social media scheduling. Best for outsourcing: strategic consulting, creative design, complex analysis, irregular projects, specialist technical skills requiring human expertise.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Can I implement a hybrid approach using both AI automation and outsourcing?</h3>
                <p className="text-muted-dark text-sm">
                  Yes, hybrid approaches often deliver optimal results. Use outsourcing for immediate relief and specialist tasks whilst building AI automation capabilities. Gradually transition routine, high-volume processes to automation whilst maintaining outsourced support for complex, strategic, or creative work.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What factors should influence my decision between AI automation and outsourcing?</h3>
                <p className="text-muted-dark text-sm">
                  Consider: transaction volume, process complexity, growth projections, available capital, timeline requirements, data sensitivity, strategic importance, internal capabilities, and long-term business goals. Higher volume and growth potential favour automation; complexity and specialist skills favour outsourcing.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How do I prepare my business for AI automation implementation?</h3>
                <p className="text-muted-dark text-sm">
                  Start with process documentation, data quality improvement, staff training planning, and technology infrastructure assessment. Establish clear success metrics, implementation timelines, and change management processes. Consider starting with outsourcing whilst building automation capabilities.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What are the risks of choosing AI automation over outsourcing?</h3>
                <p className="text-muted-dark text-sm">
                  Risks include: higher upfront investment, longer implementation timeline, technical complexity, staff training requirements, and potential system failures. Mitigate through phased implementation, expert guidance from consultancies like Blue Canvas AI, robust testing, and maintaining backup processes during transition.
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
            Make the Right <span className="text-orange">Strategic Choice</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a comprehensive analysis comparing AI automation and outsourcing for your specific business processes. I'll calculate true ROI, implementation costs, and create a customised strategy that optimises your operations.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Strategic Assessment
          </a>
        </div>
      </section>

      {/* Contact Form */}
      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-pricing-explained" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Pricing & Costs Explained</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-cost-uk" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Costs UK: Full Pricing Guide 2026</h3>
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
              Optimise Your Business Operations
            </h2>
            <p className="text-muted-dark text-lg">
              Book a consultation to discuss the optimal balance of AI automation and outsourcing for your business growth and efficiency goals.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}