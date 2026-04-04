import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Invoice Processing: Cut Admin 80%",
  description: "Transform invoice processing with AI automation. Eliminate manual data entry, accelerate approvals, and cut administrative time by 80% with intelligent invoice workflows.",
  keywords: [
    "ai invoice processing",
    "automated invoice processing",
    "invoice automation ai", 
    "ai accounts payable",
    "invoice ocr automation",
    "intelligent invoice processing",
    "automated invoice approval",
    "ai financial automation"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-invoice-processing" },
  openGraph: {
    title: "AI Invoice Processing: Cut Admin 80%",
    description: "Eliminate manual invoice processing with AI automation. Faster approvals, reduced errors, and massive time savings for UK businesses.",
    url: "https://openclawconsultant.co.uk/guides/ai-invoice-processing",
    type: "article",
  },
};

export default function AIInvoiceProcessingPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Finance AI</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Invoice Processing: <span className="text-orange">Cut Admin Time 80%</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Transform your invoice processing with AI-powered automation that eliminates manual data entry, accelerates approvals, and reduces processing time by up to 80%. Learn how businesses are revolutionising their accounts payable operations.
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
            <p className="text-xl text-muted-dark leading-relaxed mb-8">
              UK businesses implementing AI invoice processing see average time savings of 80% and accuracy improvements of 95%. From intelligent document capture to automated approval workflows, AI is transforming how companies manage their accounts payable operations.
            </p>
            
            <p className="text-muted-dark leading-relaxed mb-8">
              This comprehensive guide shows businesses exactly how to implement AI-powered invoice processing that eliminates manual work and accelerates cash flow management. Learn from successful implementations across manufacturing, retail, professional services, and enterprise sectors.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Core AI Applications in Invoice Processing</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">80%</div>
                <div className="text-muted-dark text-sm">Processing time reduction</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">95%</div>
                <div className="text-muted-dark text-sm">Data extraction accuracy</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H9v6H5V3H3v10zm0 8h8v-6H9v2H5v-2H3v6zm10 0h8V11h-2v6h-4v-6h-2v10zm0-12h8V3h-2v4h-4V3h-2v6z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">92%</div>
                <div className="text-muted-dark text-sm">Straight-through processing</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">£45k</div>
                <div className="text-muted-dark text-sm">Average annual savings</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Intelligent Document Capture & OCR</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">AI-Powered Features:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Advanced OCR with machine learning enhancement</li>
                      <li>• Automatic invoice classification and routing</li>
                      <li>• Smart data field extraction and validation</li>
                      <li>• Multi-format support (PDF, email, scanned documents)</li>
                      <li>• Vendor-specific template learning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Processing Benefits:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• 95-99% data extraction accuracy</li>
                      <li>• 85-95% reduction in manual data entry</li>
                      <li>• 70-90% faster document processing</li>
                      <li>• 60-80% fewer data entry errors</li>
                      <li>• 24/7 automated invoice capture</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Automated Approval Workflows</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Workflow Intelligence:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Smart routing based on amount and category</li>
                      <li>• Automated PO matching and 3-way verification</li>
                      <li>• Exception handling and escalation rules</li>
                      <li>• Mobile-friendly approval interfaces</li>
                      <li>• Deadline tracking and reminder automation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Approval Efficiency:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• 75-85% faster approval cycles</li>
                      <li>• 90-95% straight-through processing for routine invoices</li>
                      <li>• 50-70% reduction in approval bottlenecks</li>
                      <li>• 80-90% improvement in deadline compliance</li>
                      <li>• 60-75% fewer manual approval interventions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Fraud Detection & Compliance</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Security Features:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Intelligent duplicate invoice detection</li>
                      <li>• Vendor verification and validation</li>
                      <li>• Anomaly detection for suspicious patterns</li>
                      <li>• Automated compliance checking</li>
                      <li>• Audit trail and documentation automation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Risk Mitigation:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• 99% duplicate invoice prevention</li>
                      <li>• 95% reduction in fraudulent payments</li>
                      <li>• 100% audit trail completeness</li>
                      <li>• 90% improvement in compliance reporting</li>
                      <li>• Real-time risk scoring and alerts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI Invoice Processing Success Stories</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-border-light">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Manufacturing Company</h3>
                    <p className="text-muted-dark text-sm">Mid-sized manufacturer processing 2,000+ invoices monthly</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    475% ROI
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-2">Challenge:</h4>
                  <p className="text-muted-dark text-sm mb-4">Manual processing of complex supplier invoices causing payment delays, approval bottlenecks, and data entry errors</p>
                  
                  <h4 className="font-semibold text-dark mb-2">AI Solution:</h4>
                  <p className="text-muted-dark text-sm mb-4">Implemented intelligent OCR, automated 3-way matching, and smart approval workflows with mobile access</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Processing Time</div>
                    <div className="text-green-700 font-semibold text-sm">From 5 to 1 day</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Data Accuracy</div>
                    <div className="text-green-700 font-semibold text-sm">98.5%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Staff Time Saved</div>
                    <div className="text-green-700 font-semibold text-sm">160 hrs/month</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Early Payment Discounts</div>
                    <div className="text-green-700 font-semibold text-sm">£18k captured</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-border-light">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Professional Services Firm</h3>
                    <p className="text-muted-dark text-sm">Legal practice with multiple offices processing varied supplier invoices</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    380% ROI
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-2">Challenge:</h4>
                  <p className="text-muted-dark text-sm mb-4">Diverse invoice formats, multiple approval hierarchies, and partner-level approval requirements creating processing delays</p>
                  
                  <h4 className="font-semibold text-dark0 mb-2">AI Solution:</h4>
                  <p className="text-muted-dark text-sm mb-4">AI-powered multi-format processing with intelligent routing and mobile approval capabilities</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Approval Speed</div>
                    <div className="text-green-700 font-semibold text-sm">78% faster</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Processing Errors</div>
                    <div className="text-green-700 font-semibold text-sm">-89%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Late Payment Fees</div>
                    <div className="text-green-700 font-semibold text-sm">Eliminated</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Partner Satisfaction</div>
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
                  <div className="space-y-3 text-muted-dark text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Audit current invoice processing workflow and volume</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Identify invoice formats and vendor requirements</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Start with OCR and data extraction automation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Integrate with existing ERP and accounting systems</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Establish baseline processing time and accuracy metrics</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-dark mb-3">Expert Support:</h4>
                    <div className="space-y-2 text-muted-dark text-sm">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas AI consultancy</a> for invoice processing strategy</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span>Automate with <a href="https://heypinchy.com" className="text-orange hover:text-orange-hover">Pinchy</a> for workflow automation</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Success Factors</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-medium text-dark mb-1">Clean Data Integration</h4>
                      <p className="text-muted-dark text-sm">Seamless connection with ERP and accounting systems is crucial</p>
                    </div>
                    <div className="border-l-4 border-blue pl-4">
                      <h4 className="font-medium text-dark mb-1">Change Management</h4>
                      <p className="text-muted-dark text-sm">Staff training and gradual rollout ensure smooth adoption</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-dark mb-1">Exception Handling</h4>
                      <p className="text-muted-dark text-sm">Clear processes for unusual invoices maintain efficiency</p>
                    </div>
                    <div className="border-l-4 border-purple pl-4">
                      <h4 className="font-medium text-dark mb-1">Continuous Improvement</h4>
                      <p className="text-muted-dark text-sm">Regular system tuning optimises accuracy and performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI Invoice Processing FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What are the most effective AI applications for invoice processing?</h3>
                <p className="text-muted-dark text-sm">
                  Most effective applications include intelligent OCR and data extraction (95-99% accuracy), automated approval workflows (75-85% faster cycles), fraud detection (99% duplicate prevention), and ERP integration. Start with OCR automation for immediate manual entry reduction.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How much can businesses save with AI invoice processing?</h3>
                <p className="text-muted-dark text-sm">
                  Typical savings include: small businesses (100-500 invoices/month): £15K-£45K annually. Mid-size (500-2000): £45K-£150K. Large enterprises (2000+): £150K-£500K+. Most see 300-500% ROI within 12-18 months through reduced labour costs and early payment discounts.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How accurate is AI at extracting invoice data compared to manual entry?</h3>
                <p className="text-muted-dark text-sm">
                  Modern AI systems achieve 95-99% accuracy in data extraction, compared to 85-92% for manual entry. AI also provides consistency, working 24/7 without fatigue-related errors. Machine learning continuously improves accuracy as it processes more invoices from your vendors.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What invoice formats can AI systems handle?</h3>
                <p className="text-muted-dark text-sm">
                  AI systems process PDFs, scanned documents, email attachments, EDI formats, and mobile photos. Advanced systems learn vendor-specific layouts and can handle multi-page invoices, tables, and various currencies. Integration capabilities support most ERP and accounting software.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How long does it take to implement AI invoice processing?</h3>
                <p className="text-muted-dark text-sm">
                  Implementation typically takes 4-12 weeks: setup and integration (2-4 weeks), training and testing (2-4 weeks), rollout and optimisation (2-4 weeks). Phased implementations can deliver immediate benefits whilst fine-tuning accuracy and workflows.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Should businesses build invoice AI internally or use external solutions?</h3>
                <p className="text-muted-dark text-sm">
                  Most businesses benefit from proven AI platforms integrated by specialists like Blue Canvas. This provides faster implementation, proven accuracy, and ongoing support whilst avoiding the complexity and cost of building AI capabilities internally.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How does AI invoice processing impact finance team roles?</h3>
                <p className="text-muted-dark text-sm">
                  AI eliminates routine data entry and allows finance teams to focus on analysis, vendor relationships, cash flow optimisation, and strategic activities. Teams typically see increased job satisfaction as they move from repetitive tasks to higher-value financial analysis and business partnering.
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
            Transform Your <span className="text-orange">Invoice Processing</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a comprehensive invoice processing assessment. I'll analyse your current workflow, calculate potential savings, and create an automation plan that delivers immediate ROI.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Invoice AI Assessment
          </a>
        </div>
      </section>

      {/* Contact Form */}
      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-customer-service-automation-uk" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Customer Service Automation UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-appointment-booking" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Appointment Booking for Business</h3>
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
              Eliminate Manual Invoice Processing
            </h2>
            <p className="text-muted-dark text-lg">
              Book a consultation to discuss how AI can transform your accounts payable operations and free up your team.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}