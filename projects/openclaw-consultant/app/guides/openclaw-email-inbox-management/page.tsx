import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Email Inbox Management",
  description: "Complete guide to automating email management with OpenClaw. Learn email sorting, auto-responses, follow-up automation, and inbox organization strategies.",
  keywords: [
    "openclaw email management",
    "automated email sorting", 
    "openclaw inbox automation",
    "email workflow automation",
    "automated email responses",
    "openclaw email assistant",
    "inbox zero automation",
    "email productivity automation"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-email-inbox-management" },
  openGraph: {
    title: "OpenClaw Email Inbox Management",
    description: "Complete guide to automating email management with OpenClaw. Learn email sorting, auto-responses, and follow-up automation.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-email-inbox-management",
    type: "article",
  },
};

const emailFeatures = [
  {
    feature: "Intelligent Email Sorting",
    description: "Automatically categorize and prioritize emails based on content and sender",
    capabilities: ["Priority scoring", "Category assignment", "Spam filtering", "VIP identification"],
    automationLevel: "95%"
  },
  {
    feature: "Automated Responses",
    description: "Generate contextual responses for common inquiries and requests",
    capabilities: ["Template responses", "Personalized replies", "Meeting scheduling", "Information requests"],
    automationLevel: "85%"
  },
  {
    feature: "Follow-up Management",
    description: "Track conversations and automate follow-up communications",
    capabilities: ["Response tracking", "Reminder systems", "Escalation workflows", "CRM integration"],
    automationLevel: "90%"
  },
  {
    feature: "Email Analytics",
    description: "Comprehensive insights into email patterns and productivity",
    capabilities: ["Response time analysis", "Email volume tracking", "Sender analysis", "Productivity metrics"],
    automationLevel: "100%"
  }
];

const workflowExamples = [
  {
    scenario: "Customer Inquiry Processing",
    trigger: "New customer email received",
    steps: [
      "Analyze email content and classify inquiry type",
      "Check customer database for history and context",
      "Generate appropriate response or route to specialist",
      "Schedule follow-up if required",
      "Update CRM with interaction details"
    ]
  },
  {
    scenario: "Meeting Request Handling",
    trigger: "Email contains meeting request keywords",
    steps: [
      "Extract proposed meeting details and participants",
      "Check calendar availability for all parties",
      "Generate meeting invite or suggest alternatives",
      "Send confirmation and calendar entries",
      "Set up automated reminders"
    ]
  }
];

export default function OpenClawEmailInboxManagementPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw Agents for
              <br />
              <span className="text-orange">Email Inbox Management</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Transform your email workflow with intelligent automation. From sorting to responses, OpenClaw handles your inbox so you can focus on what matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#features" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Explore Email Automation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Comprehensive Email Automation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {emailFeatures.map((feature, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-xl text-dark">{feature.feature}</h3>
                  <span className="text-green-600 font-medium text-sm">{feature.automationLevel}</span>
                </div>
                <p className="text-muted mb-4">{feature.description}</p>
                
                <div>
                  <h4 className="font-semibold text-dark mb-2">Key Capabilities:</h4>
                  <ul className="space-y-1">
                    {feature.capabilities.map((capability, idx) => (
                      <li key={idx} className="text-muted text-sm flex gap-2">
                        <span className="text-orange">▸</span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real Email Workflow Examples
            </h2>
          </div>

          <div className="space-y-8">
            {workflowExamples.map((workflow, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-4">{workflow.scenario}</h3>
                <p className="text-muted mb-4"><strong>Trigger:</strong> {workflow.trigger}</p>
                
                <div>
                  <h4 className="font-semibold text-dark mb-3">Automated Steps:</h4>
                  <ol className="space-y-2">
                    {workflow.steps.map((step, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="bg-orange text-white font-bold text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-muted text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Related Guides */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-skills-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Skills: Complete Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-cron-jobs" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Cron Jobs: Automation Guide</h3>
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

      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Automate Your
                <br />
                <span className="text-orange">Email Management</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your email automation opportunities and design a custom inbox management solution.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Email Automation Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Discover your email automation potential</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}