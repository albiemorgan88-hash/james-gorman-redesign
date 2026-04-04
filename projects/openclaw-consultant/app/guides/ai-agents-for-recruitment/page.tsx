import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Recruitment Agencies: Candidate Screening at Scale",
  description: "How AI agents help recruitment agencies automate candidate screening, CV parsing, interview scheduling, and client matching. Place more candidates with less admin.",
  keywords: [
    "ai agents recruitment agencies",
    "ai candidate screening",
    "recruitment automation uk",
    "ai cv parsing",
    "automated recruitment",
    "ai for recruiters",
    "recruitment agency automation",
    "ai talent sourcing"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-for-recruitment" },
  openGraph: {
    title: "AI Agents for Recruitment Agencies: Candidate Screening at Scale",
    description: "How AI agents help recruitment agencies automate candidate screening, CV parsing, interview scheduling, and client matching.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-for-recruitment",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Candidate Screening",
    timeSpent: "25-35 hours per week per recruiter",
    timeSaved: "85% automation possible",
    automations: [
      "CV parsing and skills extraction against job requirements",
      "Automated screening questionnaires and scoring",
      "Right-to-work and qualification verification",
      "Candidate ranking by match quality and availability"
    ],
    impact: "Screen 500 CVs in the time it takes to read 50"
  },
  {
    area: "Candidate Sourcing",
    timeSpent: "15-20 hours per week",
    timeSaved: "70% reduction possible",
    automations: [
      "Multi-platform candidate search (LinkedIn, job boards, databases)",
      "Passive candidate identification and outreach",
      "Talent pool building and nurturing campaigns",
      "Competitor employee tracking and approach timing"
    ],
    impact: "Find candidates your competitors haven't spotted"
  },
  {
    area: "Interview Coordination",
    timeSpent: "8-12 hours per week",
    timeSaved: "90% time savings",
    automations: [
      "Automated diary matching between candidates and hiring managers",
      "Interview confirmation and reminder workflows",
      "Video interview scheduling and link distribution",
      "Feedback collection and consolidation after interviews"
    ],
    impact: "Zero scheduling ping-pong, faster time-to-interview"
  },
  {
    area: "Client & Candidate Communication",
    timeSpent: "10-15 hours per week",
    timeSaved: "65% automation possible",
    automations: [
      "Automated status updates to candidates at each stage",
      "Client shortlist presentation with structured profiles",
      "Rejection communications with personalised feedback",
      "Market insight reports for client hiring managers"
    ],
    impact: "Everyone stays informed without constant chasing"
  }
];

const useCases = [
  {
    useCase: "High-Volume CV Screening",
    problem: "A single job advert generates 200+ applications. Recruiters spend days reading CVs, most of which are unsuitable",
    solution: "AI agent parses every CV against job requirements, scores candidates on skills match, experience level, and cultural indicators, then presents a ranked shortlist",
    implementation: "Applications flow into the AI screening engine. Recruiters see a dashboard of ranked candidates with match scores and key highlights",
    benefits: ["95% screening time reduction", "Consistent evaluation criteria", "No suitable candidates overlooked", "Bias reduction through structured scoring"]
  },
  {
    useCase: "Automated Candidate Nurturing",
    problem: "Great candidates slip through the cracks because recruiters are too busy with active roles to maintain relationships",
    solution: "AI agent maintains ongoing communication with talent pools — sharing relevant roles, market insights, and check-ins at optimal intervals",
    implementation: "Candidates are tagged by skills and preferences. The agent sends personalised content and role alerts, flagging re-engaged candidates to recruiters",
    benefits: ["Warm candidates when you need them", "Reduced cost-per-hire", "Stronger employer brand", "Higher candidate satisfaction"]
  },
  {
    useCase: "Client Reporting & Market Intelligence",
    problem: "Clients want market data and hiring insights but producing reports takes hours away from actual recruiting",
    solution: "AI agent generates real-time market reports — salary benchmarks, availability trends, competitor hiring activity — automatically for each client",
    implementation: "Reports are generated from live data sources and your own placement history, branded and delivered on schedule",
    benefits: ["Value-add that wins retained contracts", "Zero time spent on report creation", "Data-driven client conversations", "Competitive differentiation"]
  }
];

const roiExample = {
  practiceSize: "15-consultant recruitment agency in Birmingham",
  currentCosts: "3 resourcers on screening (£75,000/year), lost placements from slow response (£50,000/year), admin staff for scheduling (£30,000/year)",
  aiImplementation: "AI screening, automated scheduling, candidate nurturing, and client reporting",
  savings: "£50,000/year in resourcer reallocation, £35,000/year in recovered placements, £25,000/year in scheduling automation",
  totalSaving: "£110,000/year",
  roi: "1,300% ROI within first year"
};

const faqs = [
  {
    question: "Does AI screening discriminate against candidates?",
    answer: "When properly configured, AI screening actually reduces bias compared to human reviewers. Our systems evaluate against objective skills and experience criteria, not names, photos, or university prestige. We build in bias auditing and can demonstrate compliance with the Equality Act 2010 and upcoming EU AI Act requirements."
  },
  {
    question: "Will candidates know they're being screened by AI?",
    answer: "Transparency is important and increasingly required by regulation. We recommend clear communication that AI tools assist in the initial screening process. In practice, most candidates appreciate the faster response times and more consistent evaluation that AI screening provides."
  },
  {
    question: "How does AI handle niche or specialist roles?",
    answer: "AI agents learn your specific requirements and industry terminology. For specialist roles — say, a Kubernetes engineer with financial services experience — the agent understands the nuances that a generic keyword search would miss. It can identify transferable skills and adjacent experience that indicate strong candidates even when CVs don't match perfectly."
  },
  {
    question: "What about GDPR and candidate data?",
    answer: "Recruitment agencies already handle significant candidate data under GDPR. Our AI systems integrate with your existing data management practices, including consent management, retention policies, and subject access requests. All processing is documented and auditable, actually improving your GDPR compliance posture."
  },
  {
    question: "Can AI agents work with our existing ATS?",
    answer: "Yes. Our agents integrate with major applicant tracking systems including Bullhorn, Vincere, JobAdder, Mercury, and Broadbean. Data flows bidirectionally — the AI reads from and writes back to your ATS, maintaining it as your single source of truth."
  },
  {
    question: "How does this work for temp and contract recruitment?",
    answer: "Temp and contract recruitment is actually where AI delivers the fastest ROI. Speed is everything — the agent that matches and submits first wins the placement. AI agents can match candidates to requirements and send submissions within minutes of receiving a job order, 24/7. For agencies placing trades or industrial workers, check out <a href='https://uktradejobs.com' class='text-orange hover:underline'>UK Trade Jobs</a> for complementary job board reach."
  }
];

export default function AIAgentsForRecruitmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Recruitment Agencies</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Screen candidates at scale, automate interview scheduling, and nurture talent pools — so your recruiters focus on relationships and placements, not admin.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Recruitment Automations
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
              <div className="text-4xl font-bold text-orange mb-2">85%</div>
              <div className="text-muted">Less time screening candidates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">3x</div>
              <div className="text-muted">More placements per recruiter</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">£110k+</div>
              <div className="text-muted">Average annual savings per agency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Recruitment Agencies Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI automation transforms recruitment agency operations and profitability.
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
              Real Recruitment AI Use Cases
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
              Real ROI Example: Birmingham Recruitment Agency
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Before AI Automation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Agency Size:</div>
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
              AI for Recruitment: FAQs
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{faq.question}</h3>
                <p className="text-muted text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
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
            Blue Canvas helps UK recruitment agencies implement AI automation from his base in Derry, Northern Ireland. 
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil designs 
            systems that help recruiters spend less time on admin and more time on what actually makes placements — relationships.
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
                <span className="text-orange">Recruitment Agency</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your current workflows and identify where AI automation can help your recruiters place more candidates with less admin overhead.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  No obligation agency assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI calculation specific to your agency
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ATS integration planning
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Recruitment AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your recruitment agency</p>
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
            <a href="/guides/ai-agents-for-accountants" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Accountants</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/building-ai-agent-team" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Building an AI Agent Team</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-roi-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent ROI Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-customer-support" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Customer Support</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
