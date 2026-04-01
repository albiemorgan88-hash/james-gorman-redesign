import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Governance and Compliance for UK Organisations | OpenClaw",
  description: "Complete AI governance framework for UK organisations. GDPR compliance, ethical AI guidelines, risk management, audit trails, and regulatory best practices.",
  keywords: [
    "ai governance uk",
    "ai compliance framework",
    "uk gdpr ai compliance",
    "ethical ai guidelines",
    "ai risk management",
    "ai audit framework",
    "ai regulatory compliance",
    "responsible ai uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-governance-compliance-uk" },
  openGraph: {
    title: "AI Governance and Compliance for UK Organisations | OpenClaw",
    description: "Build robust AI governance frameworks with UK regulatory compliance. GDPR, ethical AI, risk management, and audit strategies.",
    url: "https://openclawconsultant.co.uk/guides/ai-governance-compliance-uk",
    type: "article",
  },
};

export default function AIGovernanceComplianceUKPage() {
  return (
    <>
      {/* Article Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">AI Governance</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Governance & <span className="text-orange">Compliance UK</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Build robust AI governance frameworks for UK organisations. Complete guide to GDPR compliance, ethical AI implementation, risk management, audit processes, and regulatory best practices for responsible AI deployment.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                20 min read
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

      {/* Main Content */}
      <article className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              As AI becomes integral to UK business operations, robust governance and compliance frameworks are no longer optional—they're essential for sustainable success. With the UK's evolving AI regulatory landscape and increasing scrutiny on algorithmic decision-making, organisations need comprehensive strategies that balance innovation with responsibility.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              This guide provides UK organisations with a practical framework for implementing AI governance that ensures regulatory compliance, mitigates risks, and builds stakeholder trust. From GDPR requirements to ethical AI principles, you'll learn how to establish governance structures that support both innovation and accountability.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">UK AI Regulatory Landscape</h2>
            
            <div className="bg-blue/5 border border-blue/20 rounded-xl p-6 mb-8">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">Current UK AI Regulations</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue pl-4">
                  <h4 className="font-medium text-slate-800 mb-1">UK GDPR & Data Protection Act 2018</h4>
                  <p className="text-slate-600 text-sm">Rights regarding automated decision-making, data processing lawfulness, privacy by design requirements</p>
                </div>
                <div className="border-l-4 border-orange pl-4">
                  <h4 className="font-medium text-slate-800 mb-1">Equality Act 2010</h4>
                  <p className="text-slate-600 text-sm">Non-discrimination requirements for AI systems affecting protected characteristics</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-slate-800 mb-1">Sector-Specific Regulations</h4>
                  <p className="text-slate-600 text-sm">FCA guidance (financial services), MHRA regulations (healthcare), Employment Rights Act (HR)</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">£17.5M</div>
                <div className="text-slate-600 text-sm">Maximum GDPR fine</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">72 hrs</div>
                <div className="text-slate-600 text-sm">Breach notification</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H9v6H5V3H3v10zm0 8h8v-6H9v2H5v-2H3v6zm10 0h8V11h-2v6h-4v-6h-2v10zm0-12h8V3h-2v4h-4V3h-2v6z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">30 days</div>
                <div className="text-slate-600 text-sm">Subject access response</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">DPIA</div>
                <div className="text-slate-600 text-sm">Required for high-risk AI</div>
              </div>
            </div>
          </section>

          {/* AI Governance Framework */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI Governance Framework Components</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">1. AI Strategy & Policy</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Components:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• AI vision and strategic objectives</li>
                      <li>• Risk appetite and tolerance levels</li>
                      <li>• Ethical AI principles and values</li>
                      <li>• Compliance requirements mapping</li>
                      <li>• Stakeholder roles and responsibilities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Implementation:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Board-level AI strategy approval</li>
                      <li>• AI policy documentation and communication</li>
                      <li>• Regular policy review and updates</li>
                      <li>• Employee training and awareness</li>
                      <li>• External stakeholder engagement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">2. AI Risk Management</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Risk Categories:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Algorithmic bias and discrimination</li>
                      <li>• Data privacy and security breaches</li>
                      <li>• Regulatory non-compliance</li>
                      <li>• Operational and technical failures</li>
                      <li>• Reputational and stakeholder risks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Mitigation Strategies:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• AI risk assessment frameworks</li>
                      <li>• Continuous monitoring and testing</li>
                      <li>• Incident response procedures</li>
                      <li>• Insurance and liability coverage</li>
                      <li>• Regular risk review and updates</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">3. Data Governance & Quality</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Data Management:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Data quality standards and metrics</li>
                      <li>• Data lineage and traceability</li>
                      <li>• Access controls and security measures</li>
                      <li>• Retention and deletion policies</li>
                      <li>• Third-party data agreements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Privacy Protection:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Privacy by design implementation</li>
                      <li>• Data minimisation principles</li>
                      <li>• Anonymisation and pseudonymisation</li>
                      <li>• Subject rights management</li>
                      <li>• Cross-border transfer safeguards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* GDPR Compliance Framework */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">GDPR Compliance for AI Systems</h2>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 mb-8">
              <h3 className="font-heading text-lg font-bold text-navy mb-4">Article 22 - Automated Decision-Making</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Prohibited</h4>
                  <p className="text-red-700 text-sm">Solely automated decisions with legal/significant effects without safeguards</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Permitted</h4>
                  <p className="text-orange-700 text-sm">With explicit consent, contract necessity, or legal authorisation</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Required</h4>
                  <p className="text-green-700 text-sm">Human review rights, explanation of logic, challenge mechanisms</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="font-semibold text-navy mb-3">Data Protection Impact Assessment (DPIA) Requirements</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-slate-800 mb-2">When Required:</h5>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• Systematic monitoring of public areas</li>
                      <li>• Large-scale processing of sensitive data</li>
                      <li>• Automated decision-making with legal effects</li>
                      <li>• Profiling with significant effects</li>
                      <li>• New technologies with high privacy risk</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-800 mb-2">DPIA Content:</h5>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• Processing description and purposes</li>
                      <li>• Necessity and proportionality assessment</li>
                      <li>• Risk identification and analysis</li>
                      <li>• Mitigation measures and safeguards</li>
                      <li>• Consultation and review processes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="font-semibold text-navy mb-3">Individual Rights in AI Systems</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h5 className="font-medium text-slate-800">Information Rights</h5>
                    <ul className="text-slate-600 text-sm">
                      <li>• Right to be informed about AI processing</li>
                      <li>• Meaningful information about logic</li>
                      <li>• Significance and consequences</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-slate-800">Control Rights</h5>
                    <ul className="text-slate-600 text-sm">
                      <li>• Right to object to automated decisions</li>
                      <li>• Right to human intervention</li>
                      <li>• Right to contest and correct</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-slate-800">Data Rights</h5>
                    <ul className="text-slate-600 text-sm">
                      <li>• Right of access to AI decisions</li>
                      <li>• Right to rectification and erasure</li>
                      <li>• Right to data portability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Ethics Framework */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Ethical AI Implementation</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-orange/5 to-orange/10 rounded-xl p-6 border border-orange/20">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Core Ethical Principles</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-1">Fairness & Non-Discrimination</h4>
                      <p className="text-slate-600 text-sm">AI systems must treat all individuals fairly without bias or discrimination</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-1">Transparency & Explainability</h4>
                      <p className="text-slate-600 text-sm">AI decisions must be understandable and explainable to affected individuals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-1">Human Oversight</h4>
                      <p className="text-slate-600 text-sm">Meaningful human control and intervention must be maintained in AI systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-1">Accountability</h4>
                      <p className="text-slate-600 text-sm">Clear responsibility and liability for AI system outcomes and decisions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue/5 to-blue/10 rounded-xl p-6 border border-blue/20">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Implementation Framework</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-blue/20">
                    <h4 className="font-medium text-slate-800 mb-2">Ethics Review Board</h4>
                    <p className="text-slate-600 text-sm">Cross-functional team to review AI projects for ethical compliance</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue/20">
                    <h4 className="font-medium text-slate-800 mb-2">Bias Testing Protocols</h4>
                    <p className="text-slate-600 text-sm">Regular testing for algorithmic bias across protected characteristics</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue/20">
                    <h4 className="font-medium text-slate-800 mb-2">Explainability Requirements</h4>
                    <p className="text-slate-600 text-sm">Documentation and tools to explain AI decisions to stakeholders</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue/20">
                    <h4 className="font-medium text-slate-800 mb-2">Continuous Monitoring</h4>
                    <p className="text-slate-600 text-sm">Ongoing assessment of AI system performance and ethical compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Roadmap */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI Governance Implementation Roadmap</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-orange text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Foundation (Months 1-3)</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Establish Governance:</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• Form AI ethics committee</li>
                      <li>• Develop AI policy framework</li>
                      <li>• Conduct current state assessment</li>
                      <li>• Define roles and responsibilities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Legal & Compliance:</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• Review regulatory requirements</li>
                      <li>• Update privacy policies</li>
                      <li>• Establish DPIA processes</li>
                      <li>• Implement data governance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Implementation (Months 4-9)</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Technical Controls:</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• Deploy monitoring systems</li>
                      <li>• Implement bias testing</li>
                      <li>• Build audit trail systems</li>
                      <li>• Create explainability tools</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Process & Training:</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• Train staff on AI governance</li>
                      <li>• Establish review processes</li>
                      <li>• Create incident procedures</li>
                      <li>• Conduct pilot assessments</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Optimisation (Months 10-12)</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Continuous Improvement:</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• Regular governance reviews</li>
                      <li>• Process optimisation</li>
                      <li>• Stakeholder feedback integration</li>
                      <li>• Best practice adoption</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Maturity Development:</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• Advanced monitoring capabilities</li>
                      <li>• Automated compliance checks</li>
                      <li>• Industry leadership initiatives</li>
                      <li>• External validation processes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI Governance FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What are the key components of an AI governance framework?</h3>
                <p className="text-slate-600 text-sm">
                  Key components include AI strategy and policy, risk management frameworks, data governance, ethical guidelines, compliance monitoring, audit and accountability mechanisms, stakeholder engagement processes, and continuous improvement systems. Effective governance requires board oversight, cross-functional committees, clear roles and responsibilities, and regular assessment and review processes.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How does UK GDPR apply to AI systems?</h3>
                <p className="text-slate-600 text-sm">
                  UK GDPR applies to AI systems processing personal data. Key requirements include lawful basis for processing, privacy by design, Data Protection Impact Assessments for high-risk AI, individual rights regarding automated decision-making, transparency about AI logic and consequences, and safeguards for solely automated decisions with legal or significant effects.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">When is a DPIA required for AI systems?</h3>
                <p className="text-slate-600 text-sm">
                  A DPIA is required for AI systems involving systematic monitoring, large-scale processing of sensitive data, automated decision-making with legal effects, profiling with significant effects, or use of new technologies with high privacy risks. The assessment must evaluate necessity, proportionality, risks to individuals, and mitigation measures.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How can organisations ensure AI systems are fair and unbiased?</h3>
                <p className="text-slate-600 text-sm">
                  Ensure fairness through diverse training data, regular bias testing across protected characteristics, algorithmic auditing, human oversight of decisions, transparent decision processes, impact assessments on different groups, continuous monitoring, and corrective measures. Establish bias detection metrics and regular review processes.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What are the penalties for AI governance failures in the UK?</h3>
                <p className="text-slate-600 text-sm">
                  Penalties include GDPR fines up to £17.5 million or 4% of annual turnover, discrimination claims under Equality Act 2010, sector-specific sanctions (FCA, MHRA), reputational damage, civil liability, and operational restrictions. Effective governance significantly reduces these risks through proactive compliance and risk management.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How often should AI governance frameworks be reviewed?</h3>
                <p className="text-slate-600 text-sm">
                  Review governance frameworks quarterly for operational effectiveness, annually for strategic alignment, and immediately following regulatory changes, incidents, or significant system updates. Regular reviews should assess policy effectiveness, compliance status, risk landscape changes, stakeholder feedback, and emerging best practices.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Should organisations seek external expertise for AI governance?</h3>
                <p className="text-slate-600 text-sm">
                  External expertise is valuable for framework development, regulatory compliance assessment, technical implementation guidance, and ongoing assurance. Consider consultancies like Blue Canvas AI for strategic governance planning, legal specialists for compliance, and technical partners like Pinchy for implementation. ClawRoster can help manage AI governance teams effectively.
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
            Build Robust <span className="text-orange">AI Governance</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a comprehensive AI governance assessment. I'll review your current compliance posture, identify gaps, and create a tailored governance framework that ensures responsible AI deployment.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Governance Assessment
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Establish AI Governance Framework
            </h2>
            <p className="text-slate-600 text-lg">
              Book a consultation to develop comprehensive AI governance and compliance strategies tailored to your organisation's needs.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}