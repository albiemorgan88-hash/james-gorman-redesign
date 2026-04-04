import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI for Law Firms: Legal Automation",
  description: "Complete guide to AI implementation in UK law firms. Legal research automation, document review, case management, and compliance solutions for solicitors.",
  keywords: [
    "ai for law firms uk",
    "legal ai implementation",
    "legal automation uk", 
    "ai legal research",
    "document review ai",
    "legal tech solutions",
    "law firm automation",
    "legal practice ai"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-for-legal-uk" },
  openGraph: {
    title: "AI for Law Firms: Legal Automation",
    description: "Transform legal practice with AI-powered research, document review, and case management. Efficiency gains and compliance solutions for UK solicitors.",
    url: "https://openclawconsultant.co.uk/guides/ai-for-legal-uk",
    type: "article",
  },
};

export default function AIForLegalUKPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Legal AI</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI for UK <span className="text-orange">Law Firms</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Transform legal practice with AI-powered research, document analysis, and case management. Learn how UK law firms are automating routine tasks whilst maintaining professional standards and client confidentiality.
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
              UK law firms implementing AI are reporting 45% reductions in research time and 38% improvements in document review accuracy. From automated legal research to contract analysis, AI is revolutionising legal practice whilst maintaining professional ethical standards.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              This comprehensive guide shows UK solicitors and barristers exactly how to implement AI solutions that enhance legal practice and client service. Learn from successful implementations across commercial, family, criminal, and property law practices.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Core AI Applications in UK Legal Practice</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">45%</div>
                <div className="text-slate-600 text-sm">Legal research time saved</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">62%</div>
                <div className="text-slate-600 text-sm">Document review efficiency</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H9v6H5V3H3v10zm0 8h8v-6H9v2H5v-2H3v6zm10 0h8V11h-2v6h-4v-6h-2v10zm0-12h8V3h-2v4h-4V3h-2v6z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">33%</div>
                <div className="text-slate-600 text-sm">Billable hour increase</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">88%</div>
                <div className="text-slate-600 text-sm">Client satisfaction scores</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Legal Research & Case Analysis</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Applications:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Automated case law research and precedent identification</li>
                      <li>• Statutory interpretation and regulatory analysis</li>
                      <li>• Legal memo and brief generation assistance</li>
                      <li>• Cross-referencing and citation verification</li>
                      <li>• Comparative jurisdiction analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Practice Impact:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• 40-60% reduction in research time</li>
                      <li>• 25-35% improvement in case coverage</li>
                      <li>• 30-45% faster brief preparation</li>
                      <li>• 50-70% more comprehensive precedent analysis</li>
                      <li>• 20-30% increase in billable efficiency</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Document Review & Contract Analysis</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">AI Solutions:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Automated contract clause extraction and analysis</li>
                      <li>• Due diligence document screening</li>
                      <li>• Risk identification and compliance checking</li>
                      <li>• Contract comparison and redlining</li>
                      <li>• Disclosure document categorisation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Efficiency Gains:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• 60-80% faster document review</li>
                      <li>• 35-50% improvement in accuracy</li>
                      <li>• 70-85% reduction in manual sorting</li>
                      <li>• 45-60% decrease in review costs</li>
                      <li>• 90% improvement in consistency</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Case Management & Client Communication</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Implementation Areas:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Automated case timeline and deadline management</li>
                      <li>• Client communication and update generation</li>
                      <li>• Invoice and time recording assistance</li>
                      <li>• Court filing and procedural compliance</li>
                      <li>• Resource allocation and scheduling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Practice Benefits:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• 50% reduction in administrative overhead</li>
                      <li>• 95% improvement in deadline compliance</li>
                      <li>• 40% increase in client responsiveness</li>
                      <li>• 30% improvement in time capture accuracy</li>
                      <li>• 80% reduction in scheduling conflicts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">UK Legal AI Success Stories</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Commercial Law Firm</h3>
                    <p className="text-slate-600 text-sm">Mid-tier commercial firm with 45 solicitors across three offices</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    520% ROI
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2">Challenge:</h4>
                  <p className="text-slate-600 text-sm mb-4">Managing large-scale due diligence projects and contract reviews for M&A transactions</p>
                  
                  <h4 className="font-semibold text-slate-800 mb-2">AI Solution:</h4>
                  <p className="text-slate-600 text-sm mb-4">Implemented AI-powered document review and contract analysis platform for due diligence</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Review Speed</div>
                    <div className="text-green-700 font-semibold text-sm">73% faster</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Cost Reduction</div>
                    <div className="text-green-700 font-semibold text-sm">48%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Client Satisfaction</div>
                    <div className="text-green-700 font-semibold text-sm">41% improvement</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Deal Capacity</div>
                    <div className="text-green-700 font-semibold text-sm">35% increase</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Family Law Practice</h3>
                    <p className="text-slate-600 text-sm">Specialist family law firm handling divorce and custody cases</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    380% ROI
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2">Challenge:</h4>
                  <p className="text-slate-600 text-sm mb-4">Managing high caseloads whilst maintaining personalised client service and accurate documentation</p>
                  
                  <h4 className="font-semibold text-slate-800 mb-2">AI Solution:</h4>
                  <p className="text-slate-600 text-sm mb-4">AI-assisted case management, document drafting, and client communication systems</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Caseload Capacity</div>
                    <div className="text-green-700 font-semibold text-sm">42% increase</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Document Accuracy</div>
                    <div className="text-green-700 font-semibold text-sm">89% improvement</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Client Response Time</div>
                    <div className="text-green-700 font-semibold text-sm">67% faster</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Billing Efficiency</div>
                    <div className="text-green-700 font-semibold text-sm">38% improvement</div>
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
                      <span>Assess current document management and research workflows</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Identify highest-value repetitive tasks for automation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Establish data security and client confidentiality protocols</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Ensure SRA compliance and professional conduct alignment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Start with document review or legal research pilots</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Expert Support:</h4>
                    <div className="space-y-2 text-slate-600 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas AI consultancy</a> for legal AI strategy</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span>Connect with workforce impacts via <a href="https://uktradejobs.com" className="text-orange hover:text-orange-hover">UK Trade Jobs, our careers platform</a></span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Professional Standards</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Client Confidentiality</h4>
                      <p className="text-slate-600 text-sm">Robust data protection ensuring client information remains secure and privileged</p>
                    </div>
                    <div className="border-l-4 border-blue pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Professional Judgement</h4>
                      <p className="text-slate-600 text-sm">AI augments rather than replaces legal expertise and professional responsibility</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Quality Assurance</h4>
                      <p className="text-slate-600 text-sm">Comprehensive review processes ensure AI outputs meet professional standards</p>
                    </div>
                    <div className="border-l-4 border-purple pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Regulatory Compliance</h4>
                      <p className="text-slate-600 text-sm">Ongoing adherence to SRA principles and emerging legal technology guidance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Legal AI FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What are the most valuable AI applications for UK law firms?</h3>
                <p className="text-slate-600 text-sm">
                  Most valuable applications include document review and analysis (60-80% time savings), legal research automation (40-60% efficiency gains), contract management (35-50% accuracy improvement), and case management (30-45% productivity increase). Start with document review for immediate impact.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How do law firms ensure AI compliance with SRA professional standards?</h3>
                <p className="text-slate-600 text-sm">
                  Compliance requires maintaining professional judgement oversight, ensuring client confidentiality through secure AI systems, implementing quality assurance processes, maintaining accurate records, and following SRA guidance on legal technology. AI augments but doesn't replace professional responsibility.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What budget should UK law firms allocate for AI implementation?</h3>
                <p className="text-slate-600 text-sm">
                  Budget varies by firm size and practice areas. Small firms (1-10 solicitors): £15K-£50K annually. Medium firms (10-50): £50K-£200K. Large firms (50+): £200K-£1M+. Expect 12-18 month payback periods with 300-500% ROI through increased billable efficiency.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How do legal AI systems protect client confidentiality and privilege?</h3>
                <p className="text-slate-600 text-sm">
                  Protection through end-to-end encryption, access controls, audit trails, data residency compliance, secure hosting environments, and professional privilege preservation. Choose AI providers with legal industry experience and robust security certifications.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How long does it take to see benefits from legal AI investments?</h3>
                <p className="text-slate-600 text-sm">
                  Benefits timeline varies: document review (immediate-3 months), research automation (2-6 months), case management (3-9 months). Most firms see measurable efficiency gains within 6 months, with full workflow optimisation achieved over 12-18 months.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Should law firms build AI capabilities internally or use external solutions?</h3>
                <p className="text-slate-600 text-sm">
                  Most firms benefit from specialist AI solutions designed for legal practice, combined with expert implementation support from consultancies like Blue Canvas AI. This approach ensures professional compliance, security standards, and faster deployment than internal development.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How does AI impact legal careers and professional development?</h3>
                <p className="text-slate-600 text-sm">
                  AI enhances rather than replaces legal expertise. It automates routine tasks, allowing lawyers to focus on strategy, client relationships, and complex legal analysis. Firms investing in AI training and technology adoption attract top talent and improve job satisfaction.
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
            Transform Your <span className="text-orange">Legal Practice</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a comprehensive legal AI assessment. I'll analyse your workflows, identify automation opportunities, and create an implementation plan that enhances practice efficiency whilst maintaining professional standards.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Legal AI Assessment
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
              Enhance Your Practice with AI
            </h2>
            <p className="text-slate-600 text-lg">
              Book a consultation to discuss how AI can transform your legal operations whilst maintaining the highest professional standards.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}