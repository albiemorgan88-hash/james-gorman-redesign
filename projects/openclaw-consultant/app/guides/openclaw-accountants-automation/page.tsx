import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw for Accountants: Automate Bookkeeping & Reporting | Complete Guide 2026",
  description: "Complete guide to automating accounting workflows with OpenClaw. Learn expense tracking, invoice processing, tax preparation, and financial reporting automation.",
  keywords: [
    "openclaw accounting automation",
    "automated bookkeeping", 
    "accounting workflow automation",
    "openclaw financial reporting",
    "automated expense tracking",
    "ai accounting assistant",
    "accounting process automation",
    "openclaw tax preparation"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-accountants-automation" },
  openGraph: {
    title: "OpenClaw for Accountants: Automate Bookkeeping & Reporting | Complete Guide 2026",
    description: "Complete guide to automating accounting workflows with OpenClaw. Learn expense tracking, invoice processing, and financial reporting.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-accountants-automation",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Invoice Processing & Management",
    description: "Automated invoice creation, processing, and payment tracking",
    automationLevel: "95%",
    tasks: ["OCR invoice scanning", "Vendor matching", "Payment scheduling", "Follow-up automation"],
    roiImpact: "80% reduction in processing time"
  },
  {
    area: "Expense Tracking & Categorization",
    description: "Smart expense categorization and policy compliance checking",
    automationLevel: "90%",
    tasks: ["Receipt scanning", "Auto-categorization", "Policy validation", "Approval workflows"],
    roiImpact: "90% faster expense processing"
  },
  {
    area: "Financial Reporting",
    description: "Automated report generation and analysis",
    automationLevel: "85%",
    tasks: ["Daily dashboards", "Monthly reports", "Variance analysis", "KPI tracking"],
    roiImpact: "Real-time financial insights"
  },
  {
    area: "Tax Preparation & Compliance",
    description: "Automated tax calculation and compliance monitoring",
    automationLevel: "75%",
    tasks: ["Tax calculations", "Deduction tracking", "Compliance checks", "Filing preparation"],
    roiImpact: "60% reduction in tax prep time"
  }
];

export default function OpenClawAccountantsAutomationPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw for Accountants
              <br />
              <span className="text-orange">Automate Everything</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Transform your accounting practice with intelligent automation. From bookkeeping to tax preparation, OpenClaw handles the routine work so you can focus on strategy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#automation" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Explore Automation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Key Accounting Automation Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {automationAreas.map((area, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{area.area}</h3>
                <p className="text-muted mb-4">{area.description}</p>
                
                <div className="mb-4">
                  <span className="text-green-600 font-medium">Automation: {area.automationLevel}</span>
                  <span className="text-orange font-medium ml-4">{area.roiImpact}</span>
                </div>

                <ul className="space-y-2">
                  {area.tasks.map((task, idx) => (
                    <li key={idx} className="text-muted text-sm flex gap-3">
                      <span className="text-orange">▸</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
                <span className="text-orange">Accounting Practice</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your accounting automation opportunities and design a custom implementation plan.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Accounting Automation Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Discover your accounting automation potential</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}