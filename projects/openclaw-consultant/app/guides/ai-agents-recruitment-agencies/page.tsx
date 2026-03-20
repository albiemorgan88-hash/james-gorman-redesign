import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Recruitment Agencies: Automate Sourcing & Screening | UK Recruitment AI",
  description: "How AI agents can automate candidate sourcing, CV screening, interview scheduling, and client management for UK recruitment agencies. Increase placements and reduce time-to-fill.",
  keywords: [
    "ai agents recruitment",
    "recruitment automation uk",
    "ai cv screening",
    "automated candidate sourcing",
    "recruitment ai assistant",
    "ai for recruiters",
    "recruitment agency automation",
    "ai recruitment software uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-recruitment-agencies" },
  openGraph: {
    title: "AI Agents for Recruitment Agencies: Automate Sourcing & Screening | UK Recruitment AI",
    description: "How AI agents can automate candidate sourcing, CV screening, interview scheduling, and client management for UK recruitment agencies.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-recruitment-agencies",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Candidate Sourcing",
    timeSpent: "20-25 hours per week",
    timeSaved: "75% automation possible",
    automations: [
      "Multi-platform candidate discovery and outreach",
      "LinkedIn and job board automated searches", 
      "Passive candidate identification and engagement",
      "Talent pool maintenance and nurturing"
    ],
    impact: "10x more candidates contacted per recruiter"
  },
  {
    area: "CV Screening",
    timeSpent: "15-20 hours per week",
    timeSaved: "90% reduction possible",
    automations: [
      "Automated CV parsing and scoring",
      "Skills matching against job requirements",
      "Experience validation and ranking",
      "Red flag identification and filtering"
    ],
    impact: "Only review pre-qualified, ranked candidates"
  },
  {
    area: "Interview Coordination",
    timeSpent: "10-15 hours per week", 
    timeSaved: "80% time savings",
    automations: [
      "Automated interview scheduling",
      "Calendar coordination with multiple parties",
      "Interview reminder and preparation emails",
      "Feedback collection and collation"
    ],
    impact: "Seamless scheduling without back-and-forth"
  },
  {
    area: "Client Management",
    timeSpent: "12-18 hours per week",
    timeSaved: "70% automation possible", 
    automations: [
      "Candidate presentation and shortlisting",
      "Progress updates and status reports",
      "Reference checking automation",
      "Offer negotiation and acceptance tracking"
    ],
    impact: "More responsive client service and faster fills"
  }
];

const useCases = [
  {
    useCase: "Intelligent Candidate Sourcing",
    problem: "Manually searching job boards and LinkedIn for hours yields few qualified candidates",
    solution: "AI agent searches 50+ platforms simultaneously, scores candidates, and sends personalised outreach messages",
    implementation: "Set search criteria once, AI continuously finds and contacts relevant candidates across all platforms",
    benefits: ["500% more candidate outreach", "Higher response rates", "Better quality matches", "24/7 sourcing"]
  },
  {
    useCase: "Smart CV Screening", 
    problem: "Reviewing hundreds of CVs manually takes days and misses qualified candidates",
    solution: "AI instantly parses, scores and ranks CVs against job requirements with detailed match analysis",
    implementation: "Upload job spec once, AI automatically screens all incoming CVs and creates shortlists",
    benefits: ["10x faster screening", "Zero human bias", "Detailed match scoring", "Never miss good candidates"]
  },
  {
    useCase: "Automated Interview Pipeline",
    problem: "Coordinating interviews with candidates, clients and panels creates endless email chains",
    solution: "AI manages entire interview process from initial scheduling to feedback collection",
    implementation: "AI accesses calendars, finds optimal times, sends invites and collects structured feedback",
    benefits: ["Zero scheduling conflicts", "Faster interview cycles", "Complete feedback capture", "Professional experience"]
  }
];

const roiExample = {
  practiceSize: "15-person recruitment agency in London",
  currentCosts: "5 senior recruiters (£250,000/year), missed placements due to slow processes (£50,000/year), manual admin overhead (£30,000/year)",
  aiImplementation: "Full recruitment AI automation across sourcing, screening and coordination",
  savings: "£120,000/year in recruiter productivity gains, £35,000/year from faster fills, £25,000/year reduced admin costs",
  totalSaving: "£180,000/year",
  roi: "900% ROI within first year"
};

const faqs = [
  {
    question: "Can AI really identify the best candidates better than experienced recruiters?",
    answer: "AI doesn't replace recruiter judgment but enhances it dramatically. AI can process thousands of profiles simultaneously, never gets tired, and consistently applies the same criteria. It finds candidates human recruiters would miss due to time constraints, then presents them ranked and scored for human review."
  },
  {
    question: "How does AI sourcing compare to traditional recruiting methods?",
    answer: "AI sourcing is 10x faster and covers more platforms than humanly possible. It searches job boards, social media, professional networks, and company websites simultaneously. AI also tracks candidate engagement and optimises outreach messages for better response rates."
  },
  {
    question: "What about the personal touch that candidates expect?",
    answer: "AI handles the initial screening and admin, freeing up recruiters for more meaningful candidate interactions. Candidates actually prefer faster responses and clearer process communication that AI enables. The human touch comes in relationship building and final decision making."
  },
  {
    question: "How quickly can recruitment AI be implemented?",
    answer: "Basic CV screening and candidate sourcing can be live within 2 weeks. Interview scheduling automation typically takes 3-4 weeks to integrate with existing systems. Full pipeline automation including client reporting usually takes 6-8 weeks for complete implementation."
  },
  {
    question: "Does AI work with existing recruitment software and databases?",
    answer: "Yes, our AI integrates with major recruitment platforms including Bullhorn, AccessPay, JobAdder, and others. It can also work with custom databases and CRM systems. The AI acts as a layer on top of your existing tools, enhancing rather than replacing them."
  }
];

export default function AIAgentsRecruitmentPage() {
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
              Automate candidate sourcing, CV screening, interview coordination, and client management. Make more placements in less time.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
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
              <div className="text-4xl font-bold text-orange mb-2">10x</div>
              <div className="text-muted">More candidates contacted per day</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">90%</div>
              <div className="text-muted">Faster CV screening and shortlisting</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">50%</div>
              <div className="text-muted">Reduction in time-to-fill positions</div>
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
              Four key areas where AI automation delivers immediate productivity gains for recruitment agencies.
            </p>
          </div>

          <div className="space-y-8">
            {automationAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
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
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real Recruitment AI Use Cases
            </h2>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-surface rounded-box p-8">
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
              Real ROI Example: London Recruitment Agency
            </h2>
          </div>

          <div className="bg-white rounded-box p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Before AI Automation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Practice Size:</div>
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
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Recruitment AI Automation FAQs
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface rounded-box p-6">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{faq.question}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Phil Patterson */}
      <section className="bg-light py-16">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h3 className="font-heading font-bold text-xl text-dark mb-4">About Phil Patterson</h3>
          <p className="text-muted max-w-[600px] mx-auto text-sm">
            Phil Patterson helps UK recruitment agencies implement AI automation from his base in Derry, Northern Ireland. 
            With extensive experience in recruitment technology and AI systems, Phil understands the unique challenges facing 
            recruitment agencies and designs automation solutions that increase placement rates while reducing manual overhead.
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
                Free consultation to assess your current recruitment processes and identify where AI automation can 
                10x your candidate sourcing while reducing time-to-fill by 50%.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  No obligation process assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI calculation for your agency
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Custom implementation roadmap
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Recruitment AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your recruitment agency</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}