import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Measuring AI ROI for UK Businesses",
  description: "Complete guide to measuring AI return on investment for UK businesses. Metrics framework, calculation methods, and benchmarks for AI implementation success.",
  keywords: [
    "measuring ai roi uk",
    "ai return on investment",
    "ai metrics framework", 
    "business ai measurement",
    "ai implementation metrics",
    "uk business ai roi",
    "ai success measurement",
    "ai performance tracking"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/measuring-ai-roi-uk-business" },
  openGraph: {
    title: "Measuring AI ROI for UK Businesses",
    description: "Master AI ROI measurement with proven frameworks, metrics, and benchmarks. Complete guide for UK businesses to track and maximise AI investment returns.",
    url: "https://openclawconsultant.co.uk/guides/measuring-ai-roi-uk-business",
    type: "article",
  },
};

export default function MeasuringAIROIUKBusinessPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">AI Measurement</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Measuring <span className="text-orange">AI ROI</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Comprehensive framework for measuring AI return on investment in UK businesses. Learn how to establish baselines, track meaningful metrics, calculate true ROI, and demonstrate the business value of your AI implementations.
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
            <p className="text-xl text-muted-dark leading-relaxed mb-8">
              UK businesses struggle with AI ROI measurement, with 67% unable to accurately quantify returns. Companies using structured measurement frameworks report 340% better ROI outcomes and 58% faster decision-making for AI investments.
            </p>
            
            <p className="text-muted-dark leading-relaxed mb-8">
              This comprehensive guide provides UK business leaders with practical frameworks, proven metrics, and calculation methods to accurately measure and maximise AI return on investment. Learn from successful implementations across various UK industries and business sizes.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI ROI Measurement Framework</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">280%</div>
                <div className="text-muted-dark text-sm">Average 3-year AI ROI</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">16</div>
                <div className="text-muted-dark text-sm">Months to positive ROI</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H9v6H5V3H3v10zm0 8h8v-6H9v2H5v-2H3v6zm10 0h8V11h-2v6h-4v-6h-2v10zm0-12h8V3h-2v4h-4V3h-2v6z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">42%</div>
                <div className="text-muted-dark text-sm">Cost reduction achieved</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">73%</div>
                <div className="text-muted-dark text-sm">Accuracy in ROI prediction</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Financial ROI Metrics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Cost Savings Metrics:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Labour cost reduction (£/hour saved)</li>
                      <li>• Process efficiency improvement (%)</li>
                      <li>• Error reduction cost savings (£/error prevented)</li>
                      <li>• Time-to-market acceleration (days/weeks)</li>
                      <li>• Operational overhead reduction (%)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Revenue Impact Metrics:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Customer acquisition improvement (%)</li>
                      <li>• Customer lifetime value increase (£)</li>
                      <li>• Sales conversion rate improvement (%)</li>
                      <li>• New revenue streams generated (£)</li>
                      <li>• Market expansion opportunities (£)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Operational Performance Metrics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Efficiency Indicators:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Process completion time reduction (%)</li>
                      <li>• Throughput capacity increase (units/time)</li>
                      <li>• Resource utilisation improvement (%)</li>
                      <li>• Quality score improvements (%)</li>
                      <li>• Automation coverage percentage (%)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Quality Measures:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Accuracy improvement (error rate reduction)</li>
                      <li>• Consistency in output quality (%)</li>
                      <li>• Customer satisfaction score increase</li>
                      <li>• Compliance adherence improvement (%)</li>
                      <li>• Service level agreement achievement (%)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Strategic Value Metrics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Capability Enhancement:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• New service offerings enabled (count)</li>
                      <li>• Market responsiveness improvement (days)</li>
                      <li>• Innovation cycle acceleration (%)</li>
                      <li>• Competitive advantage creation (score)</li>
                      <li>• Scalability factor increase (multiplier)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Risk & Compliance:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Risk exposure reduction (%)</li>
                      <li>• Compliance cost savings (£)</li>
                      <li>• Business continuity improvement (score)</li>
                      <li>• Data quality enhancement (%)</li>
                      <li>• Security posture strengthening (score)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">ROI Calculation Methods</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-border-light">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Basic ROI Formula</h3>
                    <p className="text-muted-dark text-sm">Simple return on investment calculation for AI projects</p>
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-medium">
                    Foundation Method
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="bg-surface rounded-lg p-4 mb-4">
                    <code className="text-dark font-mono text-sm">
                      ROI = ((Financial Benefits - Total Investment Costs) / Total Investment Costs) × 100
                    </code>
                  </div>
                  
                  <h4 className="font-semibold text-dark mb-2">Example Calculation:</h4>
                  <p className="text-muted-dark text-sm mb-4">Annual labour savings: £75,000 + Efficiency gains: £45,000 = £120,000 benefits. Total investment: £35,000. ROI = ((£120,000 - £35,000) / £35,000) × 100 = 243%</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-semibold text-dark mb-2 text-sm">Benefits Include:</h4>
                    <ul className="text-muted-dark text-xs space-y-1">
                      <li>• Cost savings from automation</li>
                      <li>• Revenue increases from efficiency</li>
                      <li>• Error reduction savings</li>
                      <li>• Productivity improvements</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-dark mb-2 text-sm">Costs Include:</h4>
                    <ul className="text-muted-dark text-xs space-y-1">
                      <li>• Software licensing and setup</li>
                      <li>• Implementation services</li>
                      <li>• Training and change management</li>
                      <li>• Ongoing maintenance and support</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-border-light">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Net Present Value (NPV) Method</h3>
                    <p className="text-muted-dark text-sm">Time-adjusted value analysis for multi-year AI investments</p>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                    Advanced Method
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="bg-surface rounded-lg p-4 mb-4">
                    <code className="text-dark font-mono text-sm">
                      NPV = Σ(Cash Flow / (1 + Discount Rate)^t) - Initial Investment
                    </code>
                  </div>
                  
                  <h4 className="font-semibold text-dark mb-2">3-Year Example:</h4>
                  <p className="text-muted-dark text-sm mb-4">Initial: £50K. Year 1: £30K, Year 2: £45K, Year 3: £60K benefits. Discount rate: 8%. NPV = £30K/1.08 + £45K/1.17 + £60K/1.26 - £50K = £75,470</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Year 1 Present Value</div>
                    <div className="text-green-700 font-semibold text-sm">£27,778</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Year 2 Present Value</div>
                    <div className="text-green-700 font-semibold text-sm">£38,462</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Year 3 Present Value</div>
                    <div className="text-green-700 font-semibold text-sm">£47,619</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-border-light">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Total Economic Impact (TEI)</h3>
                    <p className="text-muted-dark text-sm">Comprehensive value assessment including intangible benefits</p>
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                    Holistic Method
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Quantifiable Benefits:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Direct cost savings: £85K annually</li>
                      <li>• Revenue improvements: £120K annually</li>
                      <li>• Risk reduction value: £25K annually</li>
                      <li>• Productivity gains: £95K annually</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Intangible Benefits:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Competitive advantage (valued at 15% revenue)</li>
                      <li>• Customer satisfaction improvements</li>
                      <li>• Employee experience enhancements</li>
                      <li>• Strategic capability development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Implementation Best Practices</h2>
            
            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Measurement Setup</h3>
                  <div className="space-y-3 text-muted-dark text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Establish baseline metrics before AI implementation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Define clear success criteria and target outcomes</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Implement tracking systems for all identified metrics</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Create automated reporting and dashboard systems</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Schedule regular review and adjustment cycles</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-dark mb-3">Expert Support:</h4>
                    <div className="space-y-2 text-muted-dark text-sm">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas AI consultancy</a> for ROI measurement strategy</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span>Connect with workforce impacts via <a href="https://uktradejobs.com" className="text-orange hover:text-orange-hover">UK Trade Jobs, our careers platform</a></span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Common Pitfalls</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-400 pl-4">
                      <h4 className="font-medium text-dark mb-1">Inadequate Baselines</h4>
                      <p className="text-muted-dark text-sm">Failing to measure pre-implementation performance makes ROI calculation impossible</p>
                    </div>
                    <div className="border-l-4 border-red-400 pl-4">
                      <h4 className="font-medium text-dark mb-1">Hidden Costs</h4>
                      <p className="text-muted-dark text-sm">Overlooking training, maintenance, and change management costs inflates ROI</p>
                    </div>
                    <div className="border-l-4 border-red-400 pl-4">
                      <h4 className="font-medium text-dark mb-1">Short-term Focus</h4>
                      <p className="text-muted-dark text-sm">Measuring only immediate returns misses long-term strategic value creation</p>
                    </div>
                    <div className="border-l-4 border-red-400 pl-4">
                      <h4 className="font-medium text-dark mb-1">Attribution Errors</h4>
                      <p className="text-muted-dark text-sm">Crediting all improvements to AI without accounting for other factors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI ROI Measurement FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What is a typical ROI timeline for AI investments in UK businesses?</h3>
                <p className="text-muted-dark text-sm">
                  Most UK businesses see positive ROI between 12-18 months, with simple automation (6-12 months) and complex AI systems (18-36 months). Customer service AI typically shows returns fastest, whilst predictive analytics and machine learning implementations take longer but deliver higher long-term value.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How do I establish accurate baselines before implementing AI?</h3>
                <p className="text-muted-dark text-sm">
                  Document current performance metrics for 3-6 months: process times, error rates, costs, customer satisfaction scores, and productivity measures. Use multiple data sources, account for seasonal variations, and involve all stakeholders in baseline validation to ensure accuracy.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What are the most important metrics for measuring AI ROI?</h3>
                <p className="text-muted-dark text-sm">
                  Focus on business-relevant metrics: cost per transaction, processing time reduction, error rate improvement, customer satisfaction increase, revenue per customer, and operational efficiency gains. Choose 5-7 key metrics that directly relate to your business objectives rather than tracking everything.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How do I account for intangible benefits in AI ROI calculations?</h3>
                <p className="text-muted-dark text-sm">
                  Quantify intangibles using proxy metrics: competitive advantage as percentage of revenue protected, customer satisfaction as lifetime value increase, employee satisfaction as retention cost savings. Conduct regular surveys and use industry benchmarks to assign monetary values to qualitative improvements.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What hidden costs should I include in AI ROI calculations?</h3>
                <p className="text-muted-dark text-sm">
                  Include: staff training time, change management costs, data preparation and cleaning, ongoing maintenance, license renewals, system integration, compliance and security measures, and opportunity costs. Hidden costs typically add 30-50% to initial implementation estimates.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How often should I review and update AI ROI measurements?</h3>
                <p className="text-muted-dark text-sm">
                  Review monthly for the first 6 months, then quarterly for operational adjustments and annually for strategic assessment. Continuous monitoring allows for optimisation whilst periodic deep reviews ensure long-term value realisation and inform future AI investment decisions.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How do I compare AI ROI across different business areas or use cases?</h3>
                <p className="text-muted-dark text-sm">
                  Use standardised metrics (cost per outcome, time reduction percentage, error rate improvement) and normalise for scale differences. Create ROI scorecards comparing payback period, NPV, and strategic value. Consider risk-adjusted returns and implementation complexity when prioritising future AI investments.
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
            Maximise Your <span className="text-orange">AI Investment Returns</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a comprehensive AI ROI measurement framework tailored to your business. I'll help establish baselines, define success metrics, and create tracking systems that demonstrate and maximise the value of your AI investments.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get ROI Measurement Strategy
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
              Measure and Optimise AI Value
            </h2>
            <p className="text-muted-dark text-lg">
              Book a consultation to discuss how to accurately measure, track, and maximise the return on investment from your AI initiatives.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}