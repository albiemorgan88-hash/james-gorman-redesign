import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI in UK Healthcare: Practical Guide",
  description: "Complete guide to AI implementation in UK healthcare. Patient care optimisation, clinical decision support, and NHS compliance strategies for healthcare providers.",
  keywords: [
    "ai for healthcare uk",
    "healthcare ai implementation",
    "nhs ai compliance", 
    "clinical ai solutions",
    "ai patient care uk",
    "healthcare automation uk",
    "medical ai applications",
    "healthcare analytics ai"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-for-healthcare-uk" },
  openGraph: {
    title: "AI in UK Healthcare: Practical Guide",
    description: "Transform healthcare delivery with AI. Patient care optimisation, clinical decision support, and compliance frameworks for UK healthcare providers.",
    url: "https://openclawconsultant.co.uk/guides/ai-for-healthcare-uk",
    type: "article",
  },
};

export default function AIForHealthcareUKPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Healthcare AI</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI in UK <span className="text-orange">Healthcare</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Transform patient care with AI-powered clinical decision support, operational efficiency, and predictive analytics. Learn how UK healthcare providers are implementing AI solutions whilst maintaining NHS compliance and patient safety standards.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                18 min read
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
              UK healthcare providers implementing AI are reporting 34% improvements in diagnostic accuracy and 28% reductions in administrative workload. From predictive patient monitoring to automated clinical workflows, AI is revolutionising care delivery whilst maintaining strict compliance standards.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              This comprehensive guide shows UK healthcare organisations exactly how to implement AI solutions that improve patient outcomes and operational efficiency. Learn from successful implementations across NHS trusts, private hospitals, and primary care practices.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Core AI Applications in UK Healthcare</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">34%</div>
                <div className="text-slate-600 text-sm">Diagnostic accuracy improvement</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">42%</div>
                <div className="text-slate-600 text-sm">Administrative time saved</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H9v6H5V3H3v10zm0 8h8v-6H9v2H5v-2H3v6zm10 0h8V11h-2v6h-4v-6h-2v10zm0-12h8V3h-2v4h-4V3h-2v6z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">26%</div>
                <div className="text-slate-600 text-sm">Readmission reduction</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">91%</div>
                <div className="text-slate-600 text-sm">Patient satisfaction scores</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Clinical Decision Support</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Applications:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• AI-powered diagnostic imaging analysis</li>
                      <li>• Drug interaction and allergy alerts</li>
                      <li>• Treatment pathway recommendations</li>
                      <li>• Risk stratification and early warning systems</li>
                      <li>• Clinical protocol compliance monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Clinical Impact:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• 25-40% reduction in diagnostic errors</li>
                      <li>• 30-50% faster radiology reporting</li>
                      <li>• 20-35% improvement in treatment outcomes</li>
                      <li>• 45-60% reduction in adverse drug events</li>
                      <li>• 35-55% increase in guideline adherence</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Predictive Analytics & Patient Monitoring</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">AI Solutions:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Early sepsis detection algorithms</li>
                      <li>• Patient deterioration prediction</li>
                      <li>• Readmission risk assessment</li>
                      <li>• Capacity planning and bed management</li>
                      <li>• Chronic disease progression monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Patient Benefits:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• 40-60% faster intervention response</li>
                      <li>• 25-40% reduction in ICU transfers</li>
                      <li>• 30-50% decrease in hospital-acquired infections</li>
                      <li>• 20-35% improvement in discharge planning</li>
                      <li>• 45-65% better chronic disease management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Administrative Automation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Implementation Areas:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Automated medical coding and billing</li>
                      <li>• Appointment scheduling optimisation</li>
                      <li>• Clinical documentation assistance</li>
                      <li>• Patient flow and resource management</li>
                      <li>• Regulatory compliance monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Operational Improvements:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• 50-70% reduction in coding time</li>
                      <li>• 80% improvement in scheduling efficiency</li>
                      <li>• 60% faster documentation completion</li>
                      <li>• 35% increase in staff productivity</li>
                      <li>• 90% reduction in compliance errors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">UK Healthcare AI Success Stories</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">NHS Trust</h3>
                    <p className="text-slate-600 text-sm">Large NHS Foundation Trust serving 750,000+ patients</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    £2.8M Savings
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2">Challenge:</h4>
                  <p className="text-slate-600 text-sm mb-4">Reducing emergency readmissions and improving patient flow through A&E departments</p>
                  
                  <h4 className="font-semibold text-slate-800 mb-2">AI Solution:</h4>
                  <p className="text-slate-600 text-sm mb-4">Implemented predictive analytics for readmission risk and AI-powered patient flow optimisation</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Readmission Reduction</div>
                    <div className="text-green-700 font-semibold text-sm">31%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">A&E Wait Times</div>
                    <div className="text-green-700 font-semibold text-sm">28% reduction</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Bed Occupancy</div>
                    <div className="text-green-700 font-semibold text-sm">15% improvement</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Staff Satisfaction</div>
                    <div className="text-green-700 font-semibold text-sm">42% increase</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Private Healthcare Group</h3>
                    <p className="text-slate-600 text-sm">Multi-site private healthcare provider with 12 hospitals</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    450% ROI
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2">Challenge:</h4>
                  <p className="text-slate-600 text-sm mb-4">Improving diagnostic accuracy and reducing clinical variability across multiple sites</p>
                  
                  <h4 className="font-semibold text-slate-800 mb-2">AI Solution:</h4>
                  <p className="text-slate-600 text-sm mb-4">AI-assisted radiology reporting and clinical decision support systems across all locations</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Diagnostic Accuracy</div>
                    <div className="text-green-700 font-semibold text-sm">38% improvement</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Reporting Speed</div>
                    <div className="text-green-700 font-semibold text-sm">65% faster</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Patient Outcomes</div>
                    <div className="text-green-700 font-semibold text-sm">29% better</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Clinical Consistency</div>
                    <div className="text-green-700 font-semibold text-sm">85% standardisation</div>
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
                      <span>Assess current data infrastructure and integration capabilities</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Identify highest-impact use cases for patient outcomes</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Establish clinical governance and AI oversight committees</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Ensure GDPR compliance and patient consent frameworks</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Start with pilot programs in controlled clinical areas</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Expert Support:</h4>
                    <div className="space-y-2 text-slate-600 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas AI consultancy</a> for healthcare AI strategy</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span>Connect with workforce impacts via <a href="https://uktradejobs.com" className="text-orange hover:text-orange-hover">UK Trade Jobs, our careers platform</a></span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Compliance Factors</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Clinical Safety</h4>
                      <p className="text-slate-600 text-sm">Rigorous testing and validation protocols ensure AI systems meet medical device standards</p>
                    </div>
                    <div className="border-l-4 border-blue pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Data Governance</h4>
                      <p className="text-slate-600 text-sm">Comprehensive frameworks for patient data protection and clinical audit trails</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Staff Training</h4>
                      <p className="text-slate-600 text-sm">Clinical staff education on AI capabilities, limitations, and decision-making support</p>
                    </div>
                    <div className="border-l-4 border-purple pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Regulatory Alignment</h4>
                      <p className="text-slate-600 text-sm">Ongoing compliance with MHRA, NHS standards, and emerging AI regulations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Healthcare AI FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What are the most effective AI applications for UK healthcare providers?</h3>
                <p className="text-slate-600 text-sm">
                  Most impactful applications include diagnostic imaging analysis (25-40% accuracy improvement), clinical decision support (30-50% faster protocols), predictive patient monitoring (40-60% faster interventions), and administrative automation (50-70% efficiency gains). Start with decision support for immediate clinical value.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How do healthcare providers ensure AI systems comply with NHS and MHRA standards?</h3>
                <p className="text-slate-600 text-sm">
                  Compliance requires clinical validation studies, medical device certification where applicable, comprehensive risk assessments, clinical governance frameworks, audit trails, and ongoing monitoring. Work with experienced AI healthcare consultants to navigate regulatory requirements.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What budget should UK healthcare organisations allocate for AI implementation?</h3>
                <p className="text-slate-600 text-sm">
                  Budget varies by organisation size and scope. Small practices: £50K-£200K annually. Medium trusts: £200K-£1M. Large NHS trusts: £1M-£5M+. Expect 18-24 month payback periods with significant long-term savings through improved efficiency and patient outcomes.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How do healthcare AI systems protect patient privacy and data security?</h3>
                <p className="text-slate-600 text-sm">
                  Protection through data minimisation, pseudonymisation, encryption, access controls, GDPR compliance, clinical audit trails, and NHS Data Security and Protection Toolkit adherence. Patient consent frameworks ensure transparency about AI use in care delivery.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How long does it take to see clinical benefits from healthcare AI investments?</h3>
                <p className="text-slate-600 text-sm">
                  Benefits timeline varies: administrative automation (2-4 months), clinical decision support (6-12 months), predictive analytics (8-15 months). Most healthcare providers see meaningful clinical improvements within 12-18 months, with full system optimisation achieved over 2-3 years.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Should healthcare providers build AI capabilities internally or partner with specialists?</h3>
                <p className="text-slate-600 text-sm">
                  Most successful implementations use partnership approaches: collaborate with healthcare AI specialists like Blue Canvas AI for strategy and implementation, leverage proven clinical AI platforms, and build internal governance capabilities. This ensures clinical safety whilst accelerating deployment.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How does AI impact healthcare staff roles and patient relationships?</h3>
                <p className="text-slate-600 text-sm">
                  AI augments rather than replaces clinical expertise. It reduces administrative burden, enhances diagnostic capabilities, and provides decision support, allowing staff more time for direct patient care. Proper implementation strengthens rather than weakens the clinician-patient relationship.
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
            Transform <span className="text-orange">Patient Care</span> with AI
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a comprehensive healthcare AI assessment. I'll analyse your clinical workflows, identify high-impact opportunities, and create a compliant implementation plan that improves patient outcomes.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Healthcare AI Assessment
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
              Improve Patient Outcomes with AI
            </h2>
            <p className="text-slate-600 text-lg">
              Book a consultation to discuss how AI can transform your healthcare delivery whilst maintaining the highest clinical standards.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}