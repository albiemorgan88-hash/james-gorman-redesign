import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI for Financial Services UK",
  description: "Complete guide to AI implementation in UK financial services. FCA-compliant fraud detection, risk assessment, customer service automation for banks and fintech.",
  keywords: [
    "ai for financial services uk",
    "fintech ai implementation",
    "banking ai compliance", 
    "ai fraud detection uk",
    "financial automation fca",
    "ai risk assessment",
    "banking ai solutions",
    "financial services ai"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-for-financial-services-uk" },
  openGraph: {
    title: "AI for Financial Services UK",
    description: "Transform financial services with FCA-compliant AI. Fraud detection, risk assessment, and customer service automation for UK banks and fintech.",
    url: "https://openclawconsultant.co.uk/guides/ai-for-financial-services-uk",
    type: "article",
  },
};

export default function AIForFinancialServicesUKPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Financial AI</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI for UK <span className="text-orange">Financial Services</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Transform financial operations with FCA-compliant AI solutions for fraud detection, risk assessment, and customer service automation. Learn how UK banks and fintech companies are implementing AI whilst maintaining regulatory compliance.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                17 min read
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
              UK financial services firms implementing AI are reporting 56% improvements in fraud detection accuracy and 43% reductions in operational costs. From real-time risk assessment to automated compliance monitoring, AI is transforming financial operations whilst maintaining strict regulatory standards.
            </p>
            
            <p className="text-muted-dark leading-relaxed mb-8">
              This comprehensive guide shows UK banks, building societies, and fintech companies exactly how to implement AI solutions that improve customer service and operational efficiency whilst ensuring FCA compliance. Learn from successful implementations across retail banking, wealth management, and insurance sectors.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Core AI Applications in UK Financial Services</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">56%</div>
                <div className="text-muted-dark text-sm">Fraud detection accuracy</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">74%</div>
                <div className="text-muted-dark text-sm">Faster loan processing</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H9v6H5V3H3v10zm0 8h8v-6H9v2H5v-2H3v6zm10 0h8V11h-2v6h-4v-6h-2v10zm0-12h8V3h-2v4h-4V3h-2v6z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">81%</div>
                <div className="text-muted-dark text-sm">Customer query automation</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">43%</div>
                <div className="text-muted-dark text-sm">Operational cost reduction</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Fraud Detection & Risk Management</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Applications:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Real-time transaction monitoring and fraud detection</li>
                      <li>• Credit risk assessment and scoring</li>
                      <li>• Anti-money laundering (AML) pattern detection</li>
                      <li>• Know Your Customer (KYC) verification</li>
                      <li>• Market risk and portfolio optimisation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Risk Improvements:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• 50-70% improvement in fraud detection rates</li>
                      <li>• 60-80% reduction in false positives</li>
                      <li>• 30-50% faster risk assessment processing</li>
                      <li>• 40-60% improvement in credit decisioning accuracy</li>
                      <li>• 85-95% automation in KYC compliance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Customer Service & Experience</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">AI Solutions:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Intelligent chatbots and virtual assistants</li>
                      <li>• Personalised financial product recommendations</li>
                      <li>• Automated customer onboarding</li>
                      <li>• Sentiment analysis and complaint routing</li>
                      <li>• Robo-advisory and portfolio management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Service Enhancements:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• 24/7 customer support availability</li>
                      <li>• 70-85% reduction in query resolution time</li>
                      <li>• 80% of routine inquiries handled automatically</li>
                      <li>• 35-50% increase in customer satisfaction</li>
                      <li>• 60-75% improvement in onboarding speed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Regulatory Compliance & Operations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Implementation Areas:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Automated regulatory reporting and monitoring</li>
                      <li>• Stress testing and scenario analysis</li>
                      <li>• Document processing and data extraction</li>
                      <li>• Trade surveillance and market abuse detection</li>
                      <li>• Algorithmic trading and execution optimisation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Operational Benefits:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• 90% reduction in manual compliance tasks</li>
                      <li>• 50-70% faster regulatory report generation</li>
                      <li>• 95% improvement in document processing accuracy</li>
                      <li>• 40-60% reduction in operational risk</li>
                      <li>• 75% decrease in compliance-related errors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">UK Financial Services AI Success Stories</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-border-light">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Regional Bank</h3>
                    <p className="text-muted-dark text-sm">Mid-tier UK bank serving retail and business customers</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    £4.7M Savings
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-2">Challenge:</h4>
                  <p className="text-muted-dark text-sm mb-4">Improving fraud detection whilst reducing customer friction and false positive rates</p>
                  
                  <h4 className="font-semibold text-dark mb-2">AI Solution:</h4>
                  <p className="text-muted-dark text-sm mb-4">Implemented real-time AI fraud detection and risk scoring across all payment channels</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Fraud Detection</div>
                    <div className="text-green-700 font-semibold text-sm">68% improvement</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">False Positives</div>
                    <div className="text-green-700 font-semibold text-sm">73% reduction</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Processing Speed</div>
                    <div className="text-green-700 font-semibold text-sm">89% faster</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Customer Satisfaction</div>
                    <div className="text-green-700 font-semibold text-sm">47% increase</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-border-light">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Fintech Lending Platform</h3>
                    <p className="text-muted-dark text-sm">Digital lending startup serving UK SME market</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    840% ROI
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-2">Challenge:</h4>
                  <p className="text-muted-dark text-sm mb-4">Scaling credit decisioning whilst maintaining low default rates and regulatory compliance</p>
                  
                  <h4 className="font-semibold text-dark mb-2">AI Solution:</h4>
                  <p className="text-muted-dark text-sm mb-4">AI-powered credit scoring, automated underwriting, and real-time risk monitoring</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Decision Speed</div>
                    <div className="text-green-700 font-semibold text-sm">94% faster</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Default Rates</div>
                    <div className="text-green-700 font-semibold text-sm">38% reduction</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Application Volume</div>
                    <div className="text-green-700 font-semibold text-sm">425% increase</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Operational Costs</div>
                    <div className="text-green-700 font-semibold text-sm">62% reduction</div>
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
                      <span>Assess current data infrastructure and regulatory requirements</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Identify highest-impact use cases for customer and compliance value</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Establish model governance and risk management frameworks</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Ensure FCA compliance and consumer duty alignment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Start with fraud detection or customer service pilots</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-dark mb-3">Expert Support:</h4>
                    <div className="space-y-2 text-muted-dark text-sm">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas AI consultancy</a> for financial services AI strategy</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span>Connect with workforce impacts via <a href="https://uktradejobs.com" className="text-orange hover:text-orange-hover">UK Trade Jobs, our careers platform</a></span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Compliance Framework</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-medium text-dark mb-1">Model Governance</h4>
                      <p className="text-muted-dark text-sm">Robust validation, testing, and monitoring ensuring AI models meet regulatory standards</p>
                    </div>
                    <div className="border-l-4 border-blue pl-4">
                      <h4 className="font-medium text-dark mb-1">Consumer Protection</h4>
                      <p className="text-muted-dark text-sm">Fair treatment, transparency, and explainability in AI-driven customer decisions</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-dark mb-1">Risk Management</h4>
                      <p className="text-muted-dark text-sm">Comprehensive oversight of AI risks including bias, reliability, and operational resilience</p>
                    </div>
                    <div className="border-l-4 border-purple pl-4">
                      <h4 className="font-medium text-dark mb-1">Data Security</h4>
                      <p className="text-muted-dark text-sm">Robust data protection ensuring customer information remains secure and compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Financial Services AI FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What are the most valuable AI applications for UK financial services firms?</h3>
                <p className="text-muted-dark text-sm">
                  Most valuable applications include fraud detection (50-70% accuracy improvement), credit risk assessment (60-80% faster processing), customer service automation (70-85% query resolution), and regulatory compliance (90% task automation). Start with fraud detection for immediate risk reduction.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How do financial services firms ensure AI compliance with FCA regulations?</h3>
                <p className="text-muted-dark text-sm">
                  Compliance requires model governance frameworks, algorithmic accountability, consumer duty alignment, bias monitoring, explainability requirements, and ongoing model validation. Implement robust testing, documentation, and audit trails for all AI systems impacting customer outcomes.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What budget should UK financial services firms allocate for AI implementation?</h3>
                <p className="text-muted-dark text-sm">
                  Budget varies by firm size and scope. Small fintech: £100K-£500K annually. Mid-tier banks: £500K-£2M. Large institutions: £2M-£20M+. Expect 12-18 month payback periods with 200-800% ROI through fraud reduction, efficiency gains, and revenue growth.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How do AI systems protect customer data and financial privacy?</h3>
                <p className="text-muted-dark text-sm">
                  Protection through encryption, access controls, data minimisation, pseudonymisation, secure cloud infrastructure, audit trails, and GDPR compliance. Financial AI systems require the highest security standards due to sensitive customer and transaction data.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How long does it take to see benefits from financial services AI investments?</h3>
                <p className="text-muted-dark text-sm">
                  Benefits timeline varies: fraud detection (2-4 months), customer service (3-6 months), risk assessment (6-12 months). Most firms see measurable improvements within 6-9 months, with full operational optimisation achieved over 18-24 months as models learn and adapt.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Should financial services firms build AI capabilities internally or use external solutions?</h3>
                <p className="text-muted-dark text-sm">
                  Most successful implementations use hybrid approaches: partner with financial AI specialists like Blue Canvas AI for strategy, use regulated AI platforms for standard functions, and build internal governance capabilities. This ensures compliance whilst accelerating deployment.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How does AI impact financial services workforce and customer relationships?</h3>
                <p className="text-muted-dark text-sm">
                  AI enhances rather than replaces financial expertise. It automates routine tasks, improves decision-making, and enables staff to focus on complex advisory services and relationship management. Proper implementation strengthens customer trust through better service and reduced errors.
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
            Transform Your <span className="text-orange">Financial Operations</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a comprehensive financial services AI assessment. I'll analyse your operations, identify compliance-first opportunities, and create an implementation plan that drives measurable results.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Financial AI Assessment
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
              Enhance Financial Services with AI
            </h2>
            <p className="text-muted-dark text-lg">
              Book a consultation to discuss how AI can transform your financial operations whilst maintaining the highest regulatory standards.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}