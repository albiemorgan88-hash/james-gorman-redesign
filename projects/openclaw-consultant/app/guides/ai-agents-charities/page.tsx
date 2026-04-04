import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Charities UK",
  description: "How AI agents can automate donor management, volunteer coordination, grant applications, and supporter communications for UK charities and nonprofits. Maximize impact while reducing admin costs.",
  keywords: [
    "ai agents charities",
    "charity automation uk",
    "nonprofit ai software",
    "charity fundraising ai",
    "volunteer management ai",
    "charity ai assistant",
    "nonprofit automation",
    "charity management ai uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-charities" },
  openGraph: {
    title: "AI Agents for Charities UK",
    description: "How AI agents can automate donor management, volunteer coordination, grant applications, and supporter communications for UK charities and nonprofits.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-charities",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Donor Management",
    timeSpent: "20-30 hours per week",
    timeSaved: "80% automation possible",
    automations: [
      "Automated donor segmentation and targeting",
      "Personalized thank-you messages and updates", 
      "Gift Aid claim processing and submission",
      "Donor journey tracking and engagement scoring"
    ],
    impact: "Increase donor retention and lifetime value"
  },
  {
    area: "Fundraising Campaigns",
    timeSpent: "15-25 hours per week",
    timeSaved: "75% reduction possible",
    automations: [
      "Multi-channel campaign management and optimization",
      "Social media content generation and scheduling",
      "Email campaign personalization and automation",
      "Crowdfunding platform integration and management"
    ],
    impact: "Reach more donors with less manual effort"
  },
  {
    area: "Volunteer Coordination",
    timeSpent: "12-20 hours per week", 
    timeSaved: "85% time savings",
    automations: [
      "Volunteer recruitment and onboarding",
      "Skills matching and opportunity recommendations",
      "Schedule coordination and shift management",
      "Training tracking and certification management"
    ],
    impact: "Better volunteer utilization and satisfaction"
  },
  {
    area: "Grant Applications",
    timeSpent: "10-18 hours per week",
    timeSaved: "70% automation possible", 
    automations: [
      "Grant opportunity identification and tracking",
      "Application form completion and submission",
      "Impact measurement and reporting automation",
      "Compliance monitoring and deadline management"
    ],
    impact: "Apply for more grants with higher success rates"
  }
];

const useCases = [
  {
    useCase: "Intelligent Donor Engagement",
    problem: "Limited staff time means donors receive generic communications and many lapse without personal follow-up",
    solution: "AI creates personalized donor journeys, automates thank-you messages, and identifies at-risk supporters for intervention",
    implementation: "Donor database connects to AI system that segments supporters and delivers targeted communications automatically",
    benefits: ["35% increase in donor retention", "Personalized at scale", "Early churn prediction", "Automated stewardship"]
  },
  {
    useCase: "Smart Volunteer Management", 
    problem: "Matching volunteers to suitable opportunities manually is time-consuming and often suboptimal",
    solution: "AI analyzes volunteer skills, availability, and preferences to automatically suggest optimal opportunities",
    implementation: "Volunteer portal uses AI to match people to roles, manage schedules, and track training requirements",
    benefits: ["Better volunteer-role matching", "Reduced coordinator workload", "Higher volunteer satisfaction", "Improved retention"]
  },
  {
    useCase: "Automated Grant Applications",
    problem: "Small charities lack capacity to identify and apply for all relevant grant opportunities",
    solution: "AI monitors grant databases, identifies suitable opportunities, and assists with application completion",
    implementation: "Grant tracking system alerts to opportunities and pre-populates applications with charity data",
    benefits: ["3x more grant applications", "Higher success rates", "Deadline compliance", "Better opportunity matching"]
  }
];

const roiExample = {
  practiceSize: "Mid-sized UK charity with £2M annual income and 15 staff",
  currentCosts: "Fundraising staff overhead (£120,000/year), lost donors due to poor follow-up (£200,000/year), missed grant opportunities (£150,000/year)",
  aiImplementation: "Comprehensive charity AI automation across fundraising, volunteer management, and grants",
  savings: "£75,000/year reduced staff overhead, £140,000/year improved donor retention, £100,000/year additional grants secured",
  totalSaving: "£315,000/year",
  roi: "1,575% ROI within first year"
};

const faqs = [
  {
    question: "Is AI appropriate for charities that rely on personal relationships and human connection?",
    answer: "AI enhances rather than replaces human relationships by handling administrative tasks and freeing up staff for meaningful donor and beneficiary interactions. AI can personalize communications at scale, ensure no supporter is forgotten, and identify when human intervention is most needed."
  },
  {
    question: "How can small charities with limited budgets afford AI implementation?",
    answer: "Our AI solutions are designed to pay for themselves quickly through increased donations, successful grant applications, and reduced administrative costs. Many implementations achieve ROI within 6 months. We also offer scaled pricing and implementation plans for smaller charities."
  },
  {
    question: "Can AI help with charity compliance and regulatory reporting?",
    answer: "Yes, AI can automate much of the compliance burden including Gift Aid processing, charity commission reporting, GDPR compliance for supporter data, and impact measurement. This reduces errors and frees up staff time for mission-critical work."
  },
  {
    question: "How does charity AI integrate with existing fundraising and volunteer management systems?",
    answer: "Our AI works with major charity platforms including JustGiving, Virgin Money Giving, VolunteerHub, and Salesforce Nonprofit Cloud. It can also integrate with custom databases and CRM systems commonly used by UK charities."
  },
  {
    question: "What about data protection and privacy concerns with donor information?",
    answer: "Charity AI systems are built with privacy-by-design principles and full GDPR compliance. Donor data remains secure and is only used to improve their experience and engagement. Supporters have full control over their data and can opt out of automated communications at any time."
  }
];

export default function AIAgentsCharitiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Charities & Nonprofits</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Automate donor management, fundraising campaigns, volunteer coordination, and grant applications. Maximize your impact while reducing administrative costs.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Charity Automations
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
              <div className="text-4xl font-bold text-orange mb-2">35%</div>
              <div className="text-muted">Increase in donor retention rates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">3x</div>
              <div className="text-muted">More grant applications submitted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">60%</div>
              <div className="text-muted">Reduction in admin overhead costs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Charities Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI automation delivers immediate productivity gains for charities and nonprofit organizations.
            </p>
          </div>

          <div className="space-y-8">
            {automationAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-3">{area.area}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="text-red-500">Currently: {area.timeSpent}</div>
                      <div className="text-green-600 font-semibold">{area.timeSaved}</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-dark mb-3">Automations Available:</h4>
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
                    <h4 className="font-semibold text-dark mb-3">Impact:</h4>
                    <p className="text-orange font-medium text-sm">{area.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real Charity AI Use Cases
            </h2>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8">
                <h3 className="font-heading font-bold text-2xl text-dark mb-6">{useCase.useCase}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">The Problem:</h4>
                      <p className="text-muted text-sm">{useCase.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">AI Solution:</h4>
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
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real ROI Example: UK Charity with £2M Annual Income
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Before AI Automation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Organization Size:</div>
                    <div className="text-muted text-sm">{roiExample.practiceSize}</div>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Annual Costs:</div>
                    <div className="text-muted text-sm">{roiExample.currentCosts}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">After AI Implementation:</h3>
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
                    <div className="font-semibold text-orange text-lg">Total Annual Saving: {roiExample.totalSaving}</div>
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
              Charity AI Automation FAQs
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
            Blue Canvas helps UK charities and nonprofit organizations implement AI automation from his base in Derry, Northern Ireland. 
            With extensive experience in charity technology and fundraising systems, Phil understands the unique challenges facing 
            nonprofit organizations and designs automation solutions that maximize impact while minimizing administrative overhead.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Transform Your
                <br />
                <span className="text-orange">Charity's Impact</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your current charity operations and identify where AI automation can 
                increase donor retention by 35% while reducing administrative costs by 60%.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  No obligation charity assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI calculation for your organization
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Custom implementation roadmap
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Charity AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your charity or nonprofit</p>
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
            <a href="/guides/ai-agents-accountants" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Accountants UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-construction" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Construction Companies</h3>
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
    </>
  );
}