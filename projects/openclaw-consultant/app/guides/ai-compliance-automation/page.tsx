import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Compliance Automation: GDPR, Health & Safety, and More | OpenClaw",
  description: "How UK businesses use AI to automate GDPR compliance, health and safety monitoring, regulatory reporting, and audit preparation. Cut compliance costs by 40-60%.",
  keywords: [
    "ai compliance automation uk",
    "gdpr automation tools",
    "ai health and safety compliance",
    "regulatory compliance ai",
    "automated compliance monitoring",
    "ai audit preparation",
    "compliance automation software uk",
    "gdpr ai tools business"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-compliance-automation" },
  openGraph: {
    title: "AI Compliance Automation: GDPR, Health & Safety, and More | OpenClaw",
    description: "How UK businesses use AI to automate compliance across GDPR, health and safety, financial regulations, and industry standards. Practical guide with costs and ROI.",
    url: "https://openclawconsultant.co.uk/guides/ai-compliance-automation",
    type: "article",
  },
};

export default function AIComplianceAutomationPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Compliance AI</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Compliance Automation: <span className="text-orange">GDPR, Health &amp; Safety, and More</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              UK businesses spend an estimated £2.5 billion per year on compliance activities — much of it on repetitive monitoring, reporting, and documentation that&apos;s ripe for automation. AI doesn&apos;t replace your compliance officer; it eliminates the manual drudgery that buries them.
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
              Compliance is the tax every UK business pays for the privilege of operating. GDPR, health and safety regulations, anti-money laundering rules, industry-specific standards — the list grows every year, and the penalties for getting it wrong are eye-watering. The ICO issued over £50 million in GDPR fines in 2025 alone, and HSE prosecutions resulted in £65 million in penalties.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              The good news? Most compliance work is pattern-based: monitor these data points, check these conditions, generate these reports, flag these exceptions. That&apos;s exactly what AI excels at. This guide covers practical AI compliance applications that UK businesses are using right now — across GDPR, health and safety, financial regulation, and industry-specific standards.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">The Compliance Burden: By the Numbers</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">40-60%</div>
                <div className="text-slate-600 text-sm">Cost reduction with AI</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">£50M+</div>
                <div className="text-slate-600 text-sm">ICO fines in 2025</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">24/7</div>
                <div className="text-slate-600 text-sm">Continuous monitoring</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">90%</div>
                <div className="text-slate-600 text-sm">Faster audit preparation</div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed">
                For SMEs, compliance is disproportionately expensive. A business with 50 employees faces many of the same regulatory requirements as one with 5,000, but without the dedicated legal and compliance teams. That&apos;s where AI levels the playing field — giving smaller businesses enterprise-grade compliance monitoring at a fraction of the cost.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The regulatory landscape is also accelerating. The UK&apos;s post-Brexit regulatory divergence, the AI Act ripple effects, new ESG reporting requirements, and evolving data protection standards mean businesses need to track more regulations across more jurisdictions than ever before. Manual spreadsheets and annual audits simply can&apos;t keep pace.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Key AI Compliance Applications</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">1. GDPR and Data Protection Automation</h3>
                <p className="text-slate-600 text-sm mb-4">
                  GDPR compliance isn&apos;t a one-off project — it&apos;s an ongoing obligation. AI tools continuously monitor your data processing activities, flag potential breaches, manage subject access requests, and maintain your records of processing activities automatically.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">What AI Automates:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Data mapping and records of processing activities (ROPA)</li>
                      <li>• Subject access request (SAR) processing and response</li>
                      <li>• Cookie consent management and compliance monitoring</li>
                      <li>• Data breach detection and 72-hour notification workflows</li>
                      <li>• Privacy impact assessments for new projects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Business Impact:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• SAR response time cut from weeks to days</li>
                      <li>• Continuous compliance vs annual audit panic</li>
                      <li>• Automatic documentation for ICO enquiries</li>
                      <li>• Reduced reliance on external DPO consultants</li>
                      <li>• Real-time dashboard showing compliance status</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">2. Health and Safety Monitoring</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Health and safety compliance is particularly suited to AI automation. From monitoring workplace conditions in real-time to automating risk assessments and incident reporting, AI turns reactive compliance into proactive prevention. Construction firms, manufacturers, and hospitality businesses see the biggest gains.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">AI-Powered Safety:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Real-time environmental monitoring (air quality, noise, temperature)</li>
                      <li>• Automated risk assessment generation and updates</li>
                      <li>• Digital incident reporting with automatic HSE notification</li>
                      <li>• PPE compliance monitoring using computer vision</li>
                      <li>• Training record tracking and certification expiry alerts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Compliance Benefits:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• 60% reduction in workplace incidents through early detection</li>
                      <li>• Instant audit trail for HSE inspections</li>
                      <li>• Automated RIDDOR reporting when thresholds are met</li>
                      <li>• COSHH assessments maintained and updated automatically</li>
                      <li>• Fire safety log automation and equipment check scheduling</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">3. Financial and Anti-Money Laundering (AML) Compliance</h3>
                <p className="text-slate-600 text-sm mb-4">
                  For accountancy firms, solicitors, estate agents, and financial services businesses, AML compliance is non-negotiable. AI dramatically reduces false positive rates in transaction monitoring whilst catching genuine suspicious activity that rule-based systems miss.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">AML Automation:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Automated KYC (Know Your Customer) checks</li>
                      <li>• Transaction monitoring with AI pattern detection</li>
                      <li>• Sanctions screening against PEP and sanctions lists</li>
                      <li>• Suspicious Activity Report (SAR) preparation</li>
                      <li>• Client risk scoring and ongoing due diligence</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Efficiency Gains:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• 70-80% reduction in false positive alerts</li>
                      <li>• KYC onboarding time cut from days to minutes</li>
                      <li>• Real-time screening vs batch processing</li>
                      <li>• Complete audit trail for FCA/SRA enquiries</li>
                      <li>• Automatic regulatory change tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple/5 to-orange/5 rounded-xl p-6 border border-purple/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">4. Industry-Specific Regulatory Compliance</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Every sector has its own compliance headaches. AI tools can be configured for industry-specific requirements — from CQC standards in healthcare to FCA regulations in finance, Ofsted requirements in education, and environmental compliance in manufacturing.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Sector Examples:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Healthcare: CQC inspection readiness, patient safety reporting</li>
                      <li>• Construction: CDM regulations, site safety compliance</li>
                      <li>• Food: HACCP monitoring, allergen management, EHO prep</li>
                      <li>• Education: safeguarding records, Ofsted evidence gathering</li>
                      <li>• Manufacturing: environmental permits, waste management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Cross-Sector Benefits:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Regulatory change alerts when laws are updated</li>
                      <li>• Automated evidence gathering for inspections</li>
                      <li>• Gap analysis against current regulatory standards</li>
                      <li>• Policy document generation and version control</li>
                      <li>• Staff compliance training tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Implementation Costs and ROI</h2>
            
            <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10 mb-8">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">Cost Breakdown by Compliance Area</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-medium text-slate-800">Compliance Area</th>
                      <th className="text-center py-3 font-medium text-orange">Monthly Cost</th>
                      <th className="text-center py-3 font-medium text-blue">Annual Saving</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b">
                      <td className="py-3">GDPR/data protection automation</td>
                      <td className="py-3 text-center">£200-£500</td>
                      <td className="py-3 text-center">£15,000-£40,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Health and safety monitoring</td>
                      <td className="py-3 text-center">£150-£400</td>
                      <td className="py-3 text-center">£10,000-£30,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">AML/KYC automation</td>
                      <td className="py-3 text-center">£300-£800</td>
                      <td className="py-3 text-center">£25,000-£60,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Industry-specific compliance</td>
                      <td className="py-3 text-center">£200-£600</td>
                      <td className="py-3 text-center">£12,000-£35,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Full Compliance Stack</td>
                      <td className="py-3 text-center font-semibold text-orange">£500-£1,500/mo</td>
                      <td className="py-3 text-center font-semibold text-blue">£50,000-£150,000/yr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">Beyond Cost Savings: Risk Reduction</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Penalty Avoidance:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• GDPR fines up to £17.5M or 4% of turnover</li>
                    <li>• HSE prosecution average fine: £150,000+</li>
                    <li>• FCA enforcement actions averaging £1M+ per case</li>
                    <li>• Reputational damage from public enforcement actions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Operational Benefits:</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Insurance premium reductions with demonstrable compliance</li>
                    <li>• Faster client onboarding in regulated industries</li>
                    <li>• Competitive advantage in procurement and tenders</li>
                    <li>• Reduced staff time on compliance activities</li>
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
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Month 1-2: Foundation</h3>
                  <div className="space-y-3 text-slate-600 text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Audit your current compliance obligations and gaps</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Implement GDPR automation (data mapping, SAR handling, consent)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Set up automated regulatory change monitoring</span>
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-navy mb-4 mt-8">Month 3-6: Expand</h3>
                  <div className="space-y-3 text-slate-600 text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Deploy industry-specific compliance monitoring</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Integrate H&amp;S monitoring with IoT sensors where applicable</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Build automated audit evidence packs</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Expert Support</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Compliance AI Strategy</h4>
                      <p className="text-slate-600 text-sm"><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas</a> helps UK businesses implement AI compliance automation — from GDPR to industry-specific regulations. We map your obligations and build the monitoring you need.</p>
                    </div>
                    <div className="border-l-4 border-blue pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Agent-Powered Compliance</h4>
                      <p className="text-slate-600 text-sm">See how AI agent teams handle compliance workflows on <a href="https://clawroster.io" className="text-orange hover:text-orange-hover">ClawRoster</a> — from automated monitoring to intelligent alerting.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Notification Automation</h4>
                      <p className="text-slate-600 text-sm">Use <a href="https://heypinchy.com" className="text-orange hover:text-orange-hover">Pinchy</a> to automate compliance notifications, approval workflows, and escalation chains via WhatsApp and email.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI Compliance Automation FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Can AI fully replace a compliance officer or DPO?</h3>
                <p className="text-slate-600 text-sm">
                  No — and it shouldn&apos;t try. AI handles the monitoring, documentation, and routine processing that eats 70-80% of a compliance professional&apos;s time. Your compliance officer or DPO still provides the judgement, interprets edge cases, and makes strategic decisions. Think of AI as giving them superpowers, not replacing them. For SMEs without a full-time compliance role, AI makes basic compliance affordable.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Is it safe to use AI for GDPR compliance given AI&apos;s own data processing?</h3>
                <p className="text-slate-600 text-sm">
                  Valid concern. Any AI compliance tool must itself be GDPR compliant — hosted in the UK or EU, with proper data processing agreements, and no training on your data. Look for tools with ISO 27001 certification and transparent data handling policies. The AI processes metadata and patterns, not the personal data itself, in most compliance monitoring scenarios.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How does AI handle regulatory changes and new legislation?</h3>
                <p className="text-slate-600 text-sm">
                  AI regulatory monitoring tools scan government gazettes, regulatory body publications, and legal databases continuously. When relevant changes are detected, they alert your team, assess the impact on your current compliance posture, and suggest necessary updates to policies and procedures. This is particularly valuable for post-Brexit regulatory divergence where UK and EU rules are increasingly different.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What size business benefits most from AI compliance tools?</h3>
                <p className="text-slate-600 text-sm">
                  The sweet spot is businesses with 20-500 employees — large enough to face serious compliance obligations but too small for dedicated compliance teams. However, even sole traders in regulated industries (financial advice, healthcare, legal) benefit from automated KYC, record-keeping, and regulatory monitoring. Enterprise businesses benefit from the scale — processing thousands of transactions or managing compliance across multiple jurisdictions.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How quickly can AI compliance tools be implemented?</h3>
                <p className="text-slate-600 text-sm">
                  Basic GDPR monitoring and SAR automation can be operational within 2-4 weeks. More complex implementations involving AML transaction monitoring or IoT-based H&amp;S monitoring typically take 2-3 months. The key factor is data integration — connecting the AI to your existing systems (CRM, accounting, HR, operations) where compliance-relevant data lives.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Will regulators accept AI-generated compliance documentation?</h3>
                <p className="text-slate-600 text-sm">
                  Yes — regulators care about the quality and completeness of documentation, not how it was produced. In fact, AI-generated compliance records are often more consistent and thorough than manual ones. The ICO has explicitly acknowledged that automated tools can support GDPR compliance. HSE accepts digital records and automated monitoring data. The key is maintaining human oversight and being able to explain your compliance processes.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What about the EU AI Act — do I need to worry about compliance for the AI tools themselves?</h3>
                <p className="text-slate-600 text-sm">
                  If you&apos;re selling into the EU or processing EU citizen data, the AI Act is relevant. Most compliance automation tools fall under &quot;limited risk&quot; or &quot;minimal risk&quot; categories, requiring transparency obligations but not the heavy requirements of &quot;high-risk&quot; AI systems. However, AI tools used in employment decisions, credit scoring, or law enforcement contexts face stricter requirements. <a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas</a> can help you navigate the intersection of AI compliance and AI regulation.
                </p>
              </div>
            </div>
          </section>

        </div>
      </article>

      <section className="py-16 bg-navy">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Automate Your <span className="text-orange">Compliance</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a free compliance automation assessment. We&apos;ll map your regulatory obligations and show you exactly which compliance tasks AI can handle — with costs and expected ROI.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Your Free Compliance AI Assessment
          </a>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              AI-Powered Compliance Automation
            </h2>
            <p className="text-slate-600 text-lg">
              Book a consultation to discuss how AI can reduce your compliance burden, cut costs, and keep you ahead of regulatory changes.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
