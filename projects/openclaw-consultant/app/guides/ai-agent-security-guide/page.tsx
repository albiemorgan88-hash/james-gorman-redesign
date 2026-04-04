import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agent Security: Keeping Your Data Safe | OpenClaw Consultant",
  description: "Learn how to secure AI agents in your business. Covers data encryption, access controls, prompt injection defence, GDPR compliance, and enterprise security frameworks.",
  keywords: [
    "ai agent security",
    "ai data security uk",
    "ai agent data protection",
    "secure ai agents",
    "ai gdpr compliance",
    "ai prompt injection defence",
    "enterprise ai security",
    "ai agent access control"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agent-security-guide" },
  openGraph: {
    title: "AI Agent Security: Keeping Your Data Safe",
    description: "Learn how to secure AI agents in your business. Covers data encryption, access controls, prompt injection defence, and GDPR compliance.",
    url: "https://openclawconsultant.co.uk/guides/ai-agent-security-guide",
    type: "article",
  },
};

const securityLayers = [
  {
    area: "Data Encryption",
    timeSpent: "Most sensitive: client data, financial records, PII",
    timeSaved: "AES-256 at rest, TLS 1.3 in transit",
    automations: [
      "End-to-end encryption for all agent-to-agent communication",
      "Encrypted storage for conversation logs and memory files",
      "Key rotation policies with automated certificate management",
      "Zero-knowledge architecture where agents process but never store raw data"
    ],
    impact: "Data stays protected even if infrastructure is compromised"
  },
  {
    area: "Access Controls & Permissions",
    timeSpent: "Critical: who and what can each agent access?",
    timeSaved: "Principle of least privilege enforced",
    automations: [
      "Role-based access control (RBAC) for each agent in your fleet",
      "Scoped API tokens — agents only access the systems they need",
      "Time-limited credentials that expire and auto-rotate",
      "Audit logs tracking every action every agent takes"
    ],
    impact: "No agent can access more than its job requires"
  },
  {
    area: "Prompt Injection Defence",
    timeSpent: "Growing threat: adversarial inputs targeting AI agents",
    timeSaved: "Multi-layer input validation",
    automations: [
      "Input sanitisation before any data reaches the language model",
      "Instruction hierarchy — system prompts cannot be overridden by user input",
      "Output validation to catch data exfiltration attempts",
      "Canary tokens and tripwires to detect injection attempts in real time"
    ],
    impact: "Agents follow your instructions, not an attacker's"
  },
  {
    area: "Compliance & Audit",
    timeSpent: "GDPR, ICO, industry regulators all require accountability",
    timeSaved: "Automated compliance monitoring",
    automations: [
      "Full audit trail of every agent decision and data access",
      "Automated GDPR subject access request handling",
      "Data retention policies enforced automatically",
      "Regular compliance reports generated without manual work"
    ],
    impact: "Regulatory confidence without the paperwork burden"
  }
];

const useCases = [
  {
    useCase: "Secure Multi-Agent Orchestration",
    problem: "When multiple AI agents collaborate, data flows between them — creating potential leak points and expanded attack surfaces",
    solution: "Implement a zero-trust architecture where every agent authenticates before each interaction, data is encrypted in transit between agents, and a central security policy governs what data each agent can see",
    implementation: "Tools like OpenClaw enforce permission boundaries at the agent level. Each agent operates in its own sandboxed environment with scoped credentials and monitored outputs",
    benefits: ["No single agent can access everything", "Compromised agent cannot spread laterally", "Full visibility into data flows", "Automatic policy enforcement"]
  },
  {
    useCase: "Client Data Processing Without Exposure",
    problem: "Professional services firms need AI agents to process sensitive client data but cannot risk that data being exposed, stored improperly, or sent to third-party APIs",
    solution: "On-premise or private cloud deployment where AI models run locally. Data never leaves your infrastructure. Agents process information in memory and discard it after task completion",
    implementation: "Deploy local language models behind your firewall. Use API gateways that strip PII before any data reaches external services. Maintain encrypted local stores for agent memory",
    benefits: ["Client data never leaves your network", "Full GDPR compliance by design", "No third-party data processing agreements needed", "Client confidence in your data handling"]
  },
  {
    useCase: "Automated Threat Detection",
    problem: "AI agents operating 24/7 create new attack vectors that traditional security monitoring tools don't understand — unusual API calls, data exfiltration attempts, compromised agent behaviour",
    solution: "AI-powered security monitoring that understands normal agent behaviour patterns and flags anomalies. A security agent watches your other agents",
    implementation: "Deploy a dedicated security monitoring agent that analyses logs, API calls, and data flows across your agent fleet. Set alerting thresholds and automated response playbooks",
    benefits: ["24/7 monitoring without human fatigue", "Catches subtle anomalies humans miss", "Automated incident response", "Continuous improvement from each detected threat"]
  }
];

const roiExample = {
  practiceSize: "Mid-size financial services firm, 200 employees",
  currentCosts: "Data breach average cost: £3.4m (IBM 2024). Compliance team: 4 staff at £240,000/year. Annual penetration testing: £30,000",
  aiImplementation: "Comprehensive AI agent security framework with automated monitoring, access controls, and compliance reporting",
  savings: "90% reduction in breach risk exposure, £120,000/year compliance staff reallocation, £20,000/year reduced audit costs",
  totalSaving: "£140,000/year + incalculable breach prevention",
  roi: "800% ROI on security investment within 18 months"
};

const faqs = [
  {
    question: "Can AI agents be hacked?",
    answer: "Like any software, AI agents have attack surfaces — but they're different from traditional software. The main risks are prompt injection (tricking the agent into following malicious instructions), data exfiltration (getting the agent to leak sensitive information), and privilege escalation (an agent accessing systems it shouldn't). Proper security architecture mitigates all three. The key is treating agents like employees: give them only the access they need, monitor what they do, and have clear policies."
  },
  {
    question: "How do AI agents comply with GDPR?",
    answer: "AI agents must follow the same GDPR principles as any data processor. This means lawful basis for processing, data minimisation (agents only access what they need), storage limitation (automatic deletion of processed data), and full audit trails. Well-architected agents actually make GDPR compliance easier because every action is logged automatically — something human employees rarely achieve consistently."
  },
  {
    question: "What is prompt injection and how do you prevent it?",
    answer: "Prompt injection is when malicious input tricks an AI agent into ignoring its instructions and following the attacker's instead. For example, a customer support agent might receive a message containing hidden instructions to reveal system prompts or internal data. Defence involves input sanitisation, instruction hierarchy enforcement (system prompts always override user input), output validation, and monitoring for unusual agent behaviour. No single defence is sufficient — you need layers."
  },
  {
    question: "Should AI agents run on-premise or in the cloud?",
    answer: "It depends on your data sensitivity and regulatory requirements. For most businesses, a private cloud deployment with proper encryption and access controls is sufficient. For highly regulated industries (financial services, healthcare, legal), on-premise deployment or UK-based private cloud ensures data sovereignty. The key question is: where does your data go, and who can access it? If you can answer both clearly, your deployment model is likely appropriate."
  },
  {
    question: "How do you monitor AI agents for security issues?",
    answer: "Effective monitoring combines automated log analysis, anomaly detection, and regular audits. Every agent action should be logged with timestamps, data accessed, and outcomes. Set baselines for normal behaviour and alert on deviations — unusual API calls, unexpected data access patterns, or agents attempting to exceed their permissions. Tools like OpenClaw provide built-in audit trails and permission boundaries that make monitoring straightforward."
  },
  {
    question: "What happens if an AI agent makes an error with sensitive data?",
    answer: "This is why containment architecture matters. Agents should operate with the principle of least privilege — if an agent processing invoices makes an error, it cannot affect your HR data because it never had access. Automated rollback capabilities, versioned actions, and human-in-the-loop checkpoints for high-stakes operations all reduce the blast radius of any single error."
  }
];

export default function AIAgentSecurityGuidePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agent Security:
              <br />
              <span className="text-orange">Keeping Your Data Safe</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              AI agents are powerful — but power without security is a liability. Here&apos;s how to deploy agents that protect your data, satisfy regulators, and keep your business safe.
            </p>
            <a
              href="#security-layers"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Security Framework
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange mb-2">£3.4m</div>
              <div className="text-muted">Average UK data breach cost (IBM 2024)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">90%</div>
              <div className="text-muted">Breach risk reduction with proper agent security</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">100%</div>
              <div className="text-muted">Audit trail coverage with automated logging</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Layers */}
      <section id="security-layers" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              The Four Pillars of AI Agent Security
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Every secure AI deployment needs these four layers working together. Miss one and you&apos;ve got a gap attackers will find.
            </p>
          </div>

          <div className="space-y-8">
            {securityLayers.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-3">{area.area}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="text-red-500">{area.timeSpent}</div>
                      <div className="text-green-600 font-semibold">{area.timeSaved}</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-dark mb-3">Key Controls:</h4>
                    <ul className="space-y-2">
                      {area.automations.map((automation, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                          <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                          {automation}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Outcome:</h4>
                    <p className="text-orange font-medium text-sm">{area.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Security Matters Now */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Why AI Agent Security Cannot Be an Afterthought
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <p>
              Most businesses adopting AI agents focus on what agents can do — and rightly so. The productivity gains are enormous. But AI agents aren&apos;t just software tools. They&apos;re autonomous actors that read your data, make decisions, and take actions on your behalf. That&apos;s a fundamentally different security challenge from a spreadsheet or a database.
            </p>
            <p>
              Traditional security tools weren&apos;t built for this. Firewalls protect network boundaries, but your AI agent is already inside the network. Antivirus catches known malware, but prompt injection attacks are text — they look like normal input. Access controls manage human users, but an AI agent might need access to ten different systems to complete a single task.
            </p>
            <p>
              The answer isn&apos;t to avoid AI agents — that&apos;s leaving money on the table. The answer is to build security into your agent architecture from day one. <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a> designs agent deployments with security as a first-class concern, not a bolt-on. And platforms like OpenClaw provide the infrastructure to enforce permission boundaries, audit trails, and sandboxed execution at the agent level.
            </p>
            <p>
              The ICO is paying attention. GDPR enforcement around AI is increasing. The firms that get agent security right now will have a competitive advantage over those scrambling to retrofit it later.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Security Architecture in Practice
            </h2>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-2xl text-dark mb-6">{useCase.useCase}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">The Risk:</h4>
                      <p className="text-muted text-sm">{useCase.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">The Solution:</h4>
                      <p className="text-muted text-sm">{useCase.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue mb-3">Implementation:</h4>
                      <p className="text-muted text-sm">{useCase.implementation}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-orange flex gap-2 items-start">
                          <span className="flex-shrink-0">▸</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              The Cost of Getting Security Right (vs. Wrong)
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Without Proper Security:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Organisation:</div>
                    <div className="text-muted text-sm">{roiExample.practiceSize}</div>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Risk Exposure:</div>
                    <div className="text-muted text-sm">{roiExample.currentCosts}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">With AI Security Framework:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <div className="font-semibold text-dark">Implementation:</div>
                    <div className="text-muted text-sm">{roiExample.aiImplementation}</div>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <div className="font-semibold text-dark">Annual Savings:</div>
                    <div className="text-muted text-sm">{roiExample.savings}</div>
                  </div>
                  <div className="border-l-4 border-orange pl-4">
                    <div className="font-semibold text-orange text-lg">Total Annual Value: {roiExample.totalSaving}</div>
                    <div className="text-orange font-semibold">{roiExample.roi}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Agent Security: FAQs
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{faq.question}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Blue Canvas */}
      <section className="bg-light py-16">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h3 className="font-heading font-bold text-xl text-dark mb-4">About Blue Canvas</h3>
          <p className="text-muted max-w-[600px] mx-auto text-sm">
            Blue Canvas advises UK businesses on secure AI agent deployment from his base in Derry, Northern Ireland. 
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil helps 
            organisations implement AI automation with enterprise-grade security, ensuring compliance with GDPR and 
            industry-specific regulations.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Secure Your
                <br />
                <span className="text-orange">AI Agent Deployment</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free security assessment for your AI agent architecture. We&apos;ll identify vulnerabilities, recommend controls, and build a security roadmap that satisfies regulators and protects your data.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Security architecture review
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  GDPR compliance assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Threat model and mitigation plan
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">AI Security Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a comprehensive security review for your AI deployment</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-enterprise-deployment" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Deploying OpenClaw in Enterprise</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/multi-agent-systems-explained" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Multi-Agent Systems Explained</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-roi-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent ROI Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/building-ai-agent-team" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Building an AI Agent Team</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
