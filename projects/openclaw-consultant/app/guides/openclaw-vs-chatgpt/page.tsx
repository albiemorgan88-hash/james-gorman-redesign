import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import GuideArticleJsonLd from "@/components/GuideArticleJsonLd";

const canonicalPath = "/guides/openclaw-vs-chatgpt";
const pageTitle = "OpenClaw vs ChatGPT: Key Differences for Business Use";
const pageDescription =
  "Compare OpenClaw and ChatGPT for business use, including memory, automation, tool access, privacy trade-offs, setup effort, and when each tool fits best.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "openclaw vs chatgpt",
    "openclaw chatgpt comparison",
    "openclaw vs chatgpt business",
    "ai agent vs chatbot",
    "openclaw chatgpt differences",
    "business ai comparison",
    "openclaw or chatgpt",
    "ai platform comparison"
  ],
  alternates: { canonical: `https://openclawconsultant.co.uk${canonicalPath}` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `https://openclawconsultant.co.uk${canonicalPath}`,
    type: "article",
  },
};

const comparisonTable = [
  {
    feature: "Memory & Context",
    chatgpt: "Keeps context inside a conversation and may support memory features, but it is still primarily a conversational interface.",
    openclaw: "Can maintain workspace memory and operating rules when configured, so context can carry across recurring agent work.",
    winner: "openclaw"
  },
  {
    feature: "Automation Capabilities",
    chatgpt: "Can assist with tasks and tools, but most workflows still need user initiation and review.",
    openclaw: "Can run scheduled or delegated workflows when scoped with approvals, logs, and recovery checks.",
    winner: "openclaw"
  },
  {
    feature: "Tool Integration",
    chatgpt: "Works with built-in tools, connectors, APIs, and custom GPT actions depending on plan and setup.",
    openclaw: "Can be extended with skills, APIs, files, and business tools when configured safely.",
    winner: "openclaw"
  },
  {
    feature: "Customization",
    chatgpt: "Custom GPTs with basic instructions and file uploads.",
    openclaw: "Custom skills and operating rules for defined business logic and workflows.",
    winner: "openclaw"
  },
  {
    feature: "Multi-Agent Workflows",
    chatgpt: "Primarily conversation-centred; team and agent features depend on product setup.",
    openclaw: "Can be structured as multiple specialist agents or skills with clear boundaries.",
    winner: "openclaw"
  },
  {
    feature: "Data Privacy",
    chatgpt: "Data processed on OpenAI's servers. Privacy policies apply.",
    openclaw: "Can run on infrastructure you control, but model providers and connected tools still need data-flow review.",
    winner: "openclaw"
  },
  {
    feature: "Setup Complexity",
    chatgpt: "Instant access. No technical setup required.",
    openclaw: "Requires technical setup and configuration.",
    winner: "chatgpt"
  },
  {
    feature: "Cost Structure",
    chatgpt: "Subscription or API costs. Current plan pricing should be checked at purchase time.",
    openclaw: "Setup, hosting, model usage and support costs. Economics depend on volume and supervision needs.",
    winner: "depends"
  },
  {
    feature: "Learning Curve",
    chatgpt: "Intuitive conversation interface. Minimal learning required.",
    openclaw: "Steeper learning curve for advanced features and customization.",
    winner: "chatgpt"
  },
  {
    feature: "Business Workflow Integration",
    chatgpt: "Strong for reviewed assistance, but complex workflows can involve manual context switching.",
    openclaw: "Better suited to recurring workflows where tool access, memory, approvals and logs matter.",
    winner: "openclaw"
  }
];

const usesCaseScenarios = [
  {
    scenario: "Individual Content Creation",
    task: "Writing blog posts, emails, and marketing copy",
    chatgpt: {
      approach: "Manual conversation-based content creation with iterative refinement",
      strengths: ["Quick to start", "Great for creative brainstorming", "Easy refinement through chat"],
      limitations: ["No memory of previous work", "Manual process each time", "No automation"]
    },
    openclaw: {
      approach: "Automated content pipelines with templates, brand guidelines, and publishing workflows", 
      strengths: ["Can use persistent brand guidance", "Can support scheduled publishing workflows", "Can incorporate reviewed feedback"],
      limitations: ["Requires setup", "Overkill for one-off content"]
    },
    recommendation: "ChatGPT for occasional content. OpenClaw for regular content production."
  },
  {
    scenario: "Customer Support",
    task: "Responding to customer inquiries and support tickets",
    chatgpt: {
      approach: "Manual responses with ChatGPT assistance for complex queries",
      strengths: ["Good for complex problem-solving", "Human oversight", "Flexible responses"],
      limitations: ["No ticket integration", "No automation", "Doesn't learn from cases"]
    },
    openclaw: {
      approach: "Ticket routing, draft responses, escalation rules, and CRM updates with review gates",
      strengths: ["Can operate on agreed schedules", "Can learn from reviewed cases", "Can handle defined support workflows"],
      limitations: ["Requires significant setup", "May miss nuanced customer needs"]
    },
    recommendation: "ChatGPT for complex support. OpenClaw for high-volume, routine support automation."
  },
  {
    scenario: "Business Analytics",
    task: "Generating reports and analyzing business performance", 
    chatgpt: {
      approach: "Manual data analysis with uploaded files and conversational exploration",
      strengths: ["Good for ad-hoc analysis", "Flexible questioning", "Easy data exploration"],
      limitations: ["No real-time data access", "Manual data preparation", "No automation"]
    },
    openclaw: {
      approach: "Scheduled reports with data pulls from approved business systems",
      strengths: ["Connected data access where permitted", "Scheduled reporting", "Repeatable trend checks"],
      limitations: ["Requires integration setup", "Less flexible for ad-hoc analysis"]
    },
    recommendation: "ChatGPT for exploratory analysis. OpenClaw for automated business intelligence."
  }
];

const migrationConsiderations = [
  {
    from: "ChatGPT Only",
    to: "ChatGPT + OpenClaw",
    when: "You need automation but want to keep ChatGPT for creative work",
    approach: "Use ChatGPT for brainstorming and creative tasks. OpenClaw for business process automation."
  },
  {
    from: "ChatGPT Only", 
    to: "OpenClaw Only",
    when: "Your work is primarily business-focused with repetitive workflows",
    approach: "Migrate gradually. Start with highest-value automation, expand over time."
  },
  {
    from: "No AI",
    to: "ChatGPT First",
    when: "You're new to AI and want to test the waters",
    approach: "Start with ChatGPT to understand AI capabilities, then evaluate OpenClaw for automation."
  },
  {
    from: "No AI",
    to: "OpenClaw First", 
    when: "You have clear business automation needs and technical resources",
    approach: "Go direct to OpenClaw if you have specific business processes ready to automate."
  }
];

const faqItems = [
  {
    question: "Can I use both OpenClaw and ChatGPT together?",
    answer:
      "Yes. Many teams use ChatGPT for creative work, brainstorming, and reviewed analysis, while using OpenClaw for recurring workflows that need memory, tool access, scheduling, and logs.",
  },
  {
    question: "Which is more cost-effective for business use?",
    answer:
      "It depends on usage, setup effort, supervision, and support needs. ChatGPT has lower setup friction. OpenClaw can make sense when recurring workflows justify infrastructure, model, and maintenance costs.",
  },
  {
    question: "Is OpenClaw harder to use than ChatGPT?",
    answer:
      "Initial setup is usually more technical. Once configured, daily use can be simple, but the deployment still needs clear operating rules, access controls, review gates, and maintenance.",
  },
  {
    question: "Can OpenClaw do everything ChatGPT can do?",
    answer:
      "No direct comparison is perfect. OpenClaw can use large language models and adds agent infrastructure, memory, tools, and automation. ChatGPT remains stronger for immediate conversational use with minimal setup.",
  },
  {
    question: "Should I start with ChatGPT or go straight to OpenClaw?",
    answer:
      "Start with ChatGPT if you are still learning where AI helps. Consider OpenClaw when you have a repeatable workflow, clear tool access requirements, and enough value to justify a controlled deployment.",
  },
  {
    question: "How do I migrate ChatGPT workflows to OpenClaw?",
    answer:
      "Document the repetitive prompts, inputs, outputs, approval points, and tools involved. Convert the clearest, highest-value pattern into a small OpenClaw pilot before widening access.",
  },
];

export default function OpenClawVsChatGPTPage() {
  return (
    <>
      <GuideArticleJsonLd canonicalPath={canonicalPath} title={pageTitle} description={pageDescription} faqs={faqItems} />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-white/50">
              <a href="/" className="hover:text-white">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/guides" className="hover:text-white">Guides</a>
              <span aria-hidden="true">/</span>
              <span className="text-white/70">OpenClaw vs ChatGPT</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">AI Platform Comparison 2026</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw vs ChatGPT:
              <br />
              <span className="text-orange">What's the Difference?</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Detailed comparison of OpenClaw and ChatGPT for business use. Learn which platform fits your needs and when to use each.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#comparison"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                See Full Comparison
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Quick Summary */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                The Quick Answer
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <h3 className="font-heading font-bold text-lg text-dark mb-3">Choose ChatGPT When:</h3>
                  <ul className="space-y-2 text-sm text-muted-dark">
                    <li className="flex gap-2 items-start">
                      <span className="text-blue mt-0.5 flex-shrink-0">•</span>
                      You need quick, conversational AI assistance
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-blue mt-0.5 flex-shrink-0">•</span>
                      Creative work like writing and brainstorming
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-blue mt-0.5 flex-shrink-0">•</span>
                      Ad-hoc analysis and problem-solving
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-blue mt-0.5 flex-shrink-0">•</span>
                      You want to start using AI immediately
                    </li>
                  </ul>
                </div>
                
                <div className="bg-navy text-white rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-lg mb-3">Choose OpenClaw When:</h3>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li className="flex gap-2 items-start">
                      <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                      You need business process automation
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                      Persistent memory across conversations is critical
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                      Integration with business tools and databases
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                      Scheduled operations with review gates and logs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-surface rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-dark mb-6">Why Not Both?</h3>
              <p className="text-muted leading-relaxed mb-6">
                Many businesses use both platforms for different purposes. ChatGPT for creative work and brainstorming, OpenClaw for business automation and workflows.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted text-sm">Creative & Ad-hoc Work</span>
                  <span className="text-blue font-semibold">ChatGPT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted text-sm">Business Automation</span>
                  <span className="text-orange font-semibold">OpenClaw</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted text-sm">Quick Analysis</span>
                  <span className="text-blue font-semibold">ChatGPT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted text-sm">Ongoing Operations</span>
                  <span className="text-orange font-semibold">OpenClaw</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section id="comparison" className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Feature-by-Feature Comparison
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Detailed breakdown of key differences between OpenClaw and ChatGPT across 10 important business dimensions.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-surface rounded-2xl">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 text-dark font-heading font-bold">Feature</th>
                  <th className="text-left p-6 text-blue font-heading font-bold">ChatGPT</th>
                  <th className="text-left p-6 text-orange font-heading font-bold">OpenClaw</th>
                  <th className="text-center p-6 text-dark font-heading font-bold">Winner</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="p-6 text-dark font-medium">{row.feature}</td>
                    <td className="p-6 text-muted text-sm leading-relaxed">{row.chatgpt}</td>
                    <td className="p-6 text-muted text-sm leading-relaxed">{row.openclaw}</td>
                    <td className="p-6 text-center">
                      {row.winner === "chatgpt" && <span className="text-blue font-bold">ChatGPT</span>}
                      {row.winner === "openclaw" && <span className="text-orange font-bold">OpenClaw</span>}
                      {row.winner === "depends" && <span className="text-muted font-bold">Depends</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Case Scenarios */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real-World Scenarios: Which to Choose?
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              How ChatGPT and OpenClaw compare in common business scenarios with specific recommendations.
            </p>
          </div>

          <div className="space-y-12">
            {usesCaseScenarios.map((scenario, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="mb-8">
                  <h3 className="font-heading font-bold text-2xl text-dark mb-3">{scenario.scenario}</h3>
                  <p className="text-muted text-lg">{scenario.task}</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* ChatGPT Approach */}
                  <div className="border border-blue/20 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue text-white font-bold text-sm px-3 py-1 rounded">ChatGPT</div>
                    </div>
                    <p className="text-muted text-sm mb-4">{scenario.chatgpt.approach}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-green-600 font-semibold text-sm mb-2">Strengths:</h4>
                        <ul className="space-y-1">
                          {scenario.chatgpt.strengths.map((strength, i) => (
                            <li key={i} className="text-xs text-green-600 flex gap-2 items-start">
                              <span>✓</span> {strength}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-red-500 font-semibold text-sm mb-2">Limitations:</h4>
                        <ul className="space-y-1">
                          {scenario.chatgpt.limitations.map((limitation, i) => (
                            <li key={i} className="text-xs text-red-500 flex gap-2 items-start">
                              <span>✗</span> {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* OpenClaw Approach */}
                  <div className="border border-orange/20 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-orange text-white font-bold text-sm px-3 py-1 rounded">OpenClaw</div>
                    </div>
                    <p className="text-muted text-sm mb-4">{scenario.openclaw.approach}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-green-600 font-semibold text-sm mb-2">Strengths:</h4>
                        <ul className="space-y-1">
                          {scenario.openclaw.strengths.map((strength, i) => (
                            <li key={i} className="text-xs text-green-600 flex gap-2 items-start">
                              <span>✓</span> {strength}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-red-500 font-semibold text-sm mb-2">Limitations:</h4>
                        <ul className="space-y-1">
                          {scenario.openclaw.limitations.map((limitation, i) => (
                            <li key={i} className="text-xs text-red-500 flex gap-2 items-start">
                              <span>✗</span> {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-navy text-white rounded-2xl p-6">
                  <h4 className="font-semibold text-orange mb-3">Recommendation:</h4>
                  <p className="text-white/80 text-sm">{scenario.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Paths */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Migration Paths & Getting Started
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              How to move between platforms or decide where to start based on your current situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {migrationConsiderations.map((path, index) => (
              <div key={index} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-white/60 text-sm">{path.from}</span>
                    <span className="text-orange">→</span>
                    <span className="text-orange font-semibold">{path.to}</span>
                  </div>
                  <p className="text-white/80 text-sm font-medium">{path.when}</p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Approach:</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{path.approach}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              OpenClaw vs ChatGPT Questions
            </h2>
          </div>
          
          <div className="space-y-0">
            {faqItems.map((faq, i) => (
              <details key={i} className="group border-b border-border">
                <summary className="flex justify-between items-center py-5 cursor-pointer font-heading font-semibold text-dark hover:text-blue transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="text-orange text-xl ml-4 group-open:rotate-45 transition-transform duration-200 flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="text-muted text-sm leading-relaxed pb-5 pr-8">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange py-16">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
            Still Unsure Which Platform Is Right for You?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Free consultation to assess your specific needs and recommend the right AI platform approach for your business goals.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Get Platform Recommendation →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-vs-zapier-vs-make" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw vs Zapier vs Make</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-vs-n8n" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw vs n8n: Which to Choose?</h3>
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

      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Practical Guidance
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Get Personalized AI
                <br />
                <span className="text-orange">Platform Recommendations</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to evaluate your specific business needs and recommend whether ChatGPT, OpenClaw, or both platforms are the better fit.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">⚖️</span>
                  <span>Objective platform comparison for your use case</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📋</span>
                  <span>Assessment of your current workflows and needs</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🎯</span>
                  <span>Clear recommendation with implementation path</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Platform Recommendation</h3>
              <p className="text-white/40 text-sm mb-6">Tell us about your AI needs and current situation</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
