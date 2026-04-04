import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI in UK Manufacturing: Guide",
  description: "Complete guide to AI implementation in UK manufacturing. Predictive maintenance, quality control, supply chain optimisation, and Industry 4.0 transformation.",
  keywords: [
    "ai for manufacturing uk",
    "manufacturing ai implementation",
    "industry 4.0 uk", 
    "ai predictive maintenance",
    "manufacturing automation uk",
    "ai quality control",
    "smart manufacturing uk",
    "manufacturing analytics ai"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-for-manufacturing-uk" },
  openGraph: {
    title: "AI in UK Manufacturing: Guide",
    description: "Transform manufacturing operations with AI. Predictive maintenance, quality control, supply chain optimisation for UK manufacturers.",
    url: "https://openclawconsultant.co.uk/guides/ai-for-manufacturing-uk",
    type: "article",
  },
};

export default function AIForManufacturingUKPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Manufacturing AI</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI in UK <span className="text-orange">Manufacturing</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Transform manufacturing operations with AI-powered predictive maintenance, quality control, and supply chain optimisation. Learn how UK manufacturers are implementing Industry 4.0 solutions to boost productivity and competitiveness.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                19 min read
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
              UK manufacturers implementing AI are reporting 32% improvements in equipment efficiency and 27% reductions in production costs. From predictive maintenance to real-time quality control, AI is driving the Industry 4.0 transformation across UK manufacturing.
            </p>
            
            <p className="text-muted-dark leading-relaxed mb-8">
              This comprehensive guide shows UK manufacturers exactly how to implement AI solutions that increase productivity, reduce downtime, and improve competitiveness. Learn from successful implementations across automotive, aerospace, food production, and engineering sectors.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Core AI Applications in UK Manufacturing</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">47%</div>
                <div className="text-muted-dark text-sm">Unplanned downtime reduction</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">38%</div>
                <div className="text-muted-dark text-sm">Quality defect reduction</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H9v6H5V3H3v10zm0 8h8v-6H9v2H5v-2H3v6zm10 0h8V11h-2v6h-4v-6h-2v10zm0-12h8V3h-2v4h-4V3h-2v6z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">29%</div>
                <div className="text-muted-dark text-sm">Overall productivity increase</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">23%</div>
                <div className="text-muted-dark text-sm">Energy consumption reduction</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Predictive Maintenance & Asset Management</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Applications:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Equipment failure prediction and prevention</li>
                      <li>• Condition monitoring and anomaly detection</li>
                      <li>• Optimal maintenance scheduling</li>
                      <li>• Asset lifecycle optimisation</li>
                      <li>• Spare parts inventory management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Operational Impact:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• 40-60% reduction in unplanned downtime</li>
                      <li>• 25-40% decrease in maintenance costs</li>
                      <li>• 30-50% improvement in asset utilisation</li>
                      <li>• 20-35% extension in equipment lifespan</li>
                      <li>• 45-65% reduction in emergency repairs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Quality Control & Inspection Automation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">AI Solutions:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Computer vision for defect detection</li>
                      <li>• Real-time quality monitoring</li>
                      <li>• Statistical process control enhancement</li>
                      <li>• Product classification and sorting</li>
                      <li>• Compliance verification automation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Quality Improvements:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• 35-55% reduction in defect rates</li>
                      <li>• 60-80% faster inspection processes</li>
                      <li>• 90-95% improvement in detection accuracy</li>
                      <li>• 40-60% decrease in rework costs</li>
                      <li>• 25-40% improvement in customer satisfaction</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Supply Chain & Production Optimisation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Implementation Areas:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Demand forecasting and production planning</li>
                      <li>• Inventory optimisation and logistics</li>
                      <li>• Production schedule optimisation</li>
                      <li>• Energy consumption management</li>
                      <li>• Supplier performance analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Efficiency Gains:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• 20-35% improvement in forecast accuracy</li>
                      <li>• 30-45% reduction in inventory costs</li>
                      <li>• 25-40% increase in production throughput</li>
                      <li>• 15-30% decrease in energy consumption</li>
                      <li>• 35-50% improvement in delivery performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">UK Manufacturing AI Success Stories</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-border-light">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Automotive Parts Manufacturer</h3>
                    <p className="text-muted-dark text-sm">Mid-size automotive supplier with 3 UK production facilities</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    £3.2M Savings
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-2">Challenge:</h4>
                  <p className="text-muted-dark text-sm mb-4">Reducing quality defects and unplanned downtime to meet strict automotive industry standards</p>
                  
                  <h4 className="font-semibold text-dark mb-2">AI Solution:</h4>
                  <p className="text-muted-dark text-sm mb-4">Implemented predictive maintenance and computer vision quality control across all production lines</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Defect Reduction</div>
                    <div className="text-green-700 font-semibold text-sm">64%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Downtime Reduction</div>
                    <div className="text-green-700 font-semibold text-sm">52%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">OEE Improvement</div>
                    <div className="text-green-700 font-semibold text-sm">31%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Customer Satisfaction</div>
                    <div className="text-green-700 font-semibold text-sm">43% increase</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-border-light">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Food Processing Company</h3>
                    <p className="text-muted-dark text-sm">Large-scale food manufacturer with distribution across UK</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    670% ROI
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-2">Challenge:</h4>
                  <p className="text-muted-dark text-sm mb-4">Maintaining consistent quality whilst optimising production efficiency and reducing waste</p>
                  
                  <h4 className="font-semibold text-dark mb-2">AI Solution:</h4>
                  <p className="text-muted-dark text-sm mb-4">AI-powered production optimisation, quality monitoring, and supply chain forecasting</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Waste Reduction</div>
                    <div className="text-green-700 font-semibold text-sm">41%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Production Efficiency</div>
                    <div className="text-green-700 font-semibold text-sm">37% improvement</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Quality Consistency</div>
                    <div className="text-green-700 font-semibold text-sm">88% improvement</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Energy Savings</div>
                    <div className="text-green-700 font-semibold text-sm">28%</div>
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
                  <div className="space-y-3 text-muted-dark text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Assess current production data and connectivity infrastructure</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Identify highest-impact use cases for operational improvement</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Start with predictive maintenance or quality control pilots</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Establish data governance and security protocols</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Measure baseline KPIs before implementation</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-dark mb-3">Expert Support:</h4>
                    <div className="space-y-2 text-muted-dark text-sm">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas AI consultancy</a> for manufacturing AI strategy</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span>Connect with workforce impacts via <a href="https://uktradejobs.com" className="text-orange hover:text-orange-hover">UK Trade Jobs, our careers platform</a></span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Success Factors</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-medium text-dark mb-1">Data Quality</h4>
                      <p className="text-muted-dark text-sm">Clean, comprehensive operational data is essential for accurate AI insights and predictions</p>
                    </div>
                    <div className="border-l-4 border-blue pl-4">
                      <h4 className="font-medium text-dark mb-1">Workforce Integration</h4>
                      <p className="text-muted-dark text-sm">Training and change management ensure successful adoption and operational buy-in</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-dark mb-1">Scalable Infrastructure</h4>
                      <p className="text-muted-dark text-sm">Robust IT systems and connectivity support growing AI applications</p>
                    </div>
                    <div className="border-l-4 border-purple pl-4">
                      <h4 className="font-medium text-dark mb-1">Continuous Improvement</h4>
                      <p className="text-muted-dark text-sm">Regular optimisation and system refinement drive ongoing value</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Manufacturing AI FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What are the most impactful AI applications for UK manufacturers?</h3>
                <p className="text-muted-dark text-sm">
                  Most impactful applications include predictive maintenance (40-60% downtime reduction), quality control automation (35-55% defect reduction), production optimisation (25-40% throughput increase), and supply chain forecasting (20-35% accuracy improvement). Start with predictive maintenance for immediate ROI.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What budget should UK manufacturers allocate for AI implementation?</h3>
                <p className="text-muted-dark text-sm">
                  Budget varies by company size and scope. Small manufacturers (£5-50M revenue): £75K-£300K annually. Medium manufacturers (£50-500M): £300K-£1.5M. Large manufacturers (£500M+): £1.5M-£10M+. Expect 12-24 month payback periods with 200-600% ROI.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How do manufacturers prepare their data infrastructure for AI?</h3>
                <p className="text-muted-dark text-sm">
                  Preparation requires connecting machinery with IoT sensors, establishing data lakes, ensuring data quality and consistency, implementing cybersecurity measures, and creating real-time data pipelines. Most manufacturers need 3-6 months for proper data infrastructure setup.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How long does it take to see results from manufacturing AI investments?</h3>
                <p className="text-muted-dark text-sm">
                  Results timeline varies: predictive maintenance (3-6 months), quality control (2-4 months), production optimisation (6-12 months). Most manufacturers see measurable improvements within 6-9 months, with full system optimisation achieved over 18-24 months.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Should manufacturers build AI capabilities internally or partner with specialists?</h3>
                <p className="text-muted-dark text-sm">
                  Most successful implementations use hybrid approaches: partner with manufacturing AI specialists like Blue Canvas AI for strategy and deployment, use industrial AI platforms, and build internal capabilities for ongoing operation. This balances expertise with long-term control.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How does AI impact manufacturing workforce and skills requirements?</h3>
                <p className="text-muted-dark text-sm">
                  AI augments rather than replaces manufacturing workers. It automates routine monitoring and creates opportunities for higher-value roles in data analysis, system operation, and process improvement. Invest in upskilling programs to support workforce transition and retention.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What cybersecurity considerations are important for manufacturing AI?</h3>
                <p className="text-muted-dark text-sm">
                  Key considerations include network segmentation, endpoint security for IoT devices, secure data transmission, access controls, regular security audits, and incident response plans. Manufacturing AI systems require robust cybersecurity due to operational technology integration.
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
            Transform Your <span className="text-orange">Manufacturing Operations</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a comprehensive manufacturing AI assessment. I'll analyse your operations, identify automation opportunities, and create an implementation plan that drives measurable productivity gains.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Manufacturing AI Assessment
          </a>
        </div>
      </section>

      {/* Contact Form */}
      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-agents-accountants" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
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
              Optimise Production with AI
            </h2>
            <p className="text-muted-dark text-lg">
              Book a consultation to discuss how AI can transform your manufacturing operations and drive competitive advantage.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}