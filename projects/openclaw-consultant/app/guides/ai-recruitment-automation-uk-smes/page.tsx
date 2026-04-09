import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI for Recruitment: Automating Hiring for UK SMEs | OpenClaw Guide",
  description: "Complete guide to automating recruitment with AI for UK SMEs. CV screening, interview scheduling, candidate communication, and UK employment law compliance.",
  keywords: [
    "ai recruitment automation uk",
    "automated hiring uk sme",
    "ai cv screening",
    "recruitment automation tools",
    "ai interview scheduling",
    "uk employment law ai recruitment",
    "openclaw recruitment automation",
    "hiring automation small business"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-recruitment-automation-uk-smes" },
  openGraph: {
    title: "AI for Recruitment: Automating Hiring for UK SMEs | OpenClaw Guide",
    description: "Learn to automate recruitment with AI agents. CV screening, interview scheduling, candidate communication — all compliant with UK employment law.",
    url: "https://openclawconsultant.co.uk/guides/ai-recruitment-automation-uk-smes",
    type: "article",
  },
};

const recruitmentStages = [
  {
    stage: "Job Posting & Distribution",
    manualTime: "3-5 hours per role",
    automatedTime: "15 minutes per role",
    saving: "90%",
    tasks: [
      "Auto-generate job descriptions from role briefs",
      "Distribute to multiple job boards simultaneously",
      "Tailor listings for Indeed, Reed, LinkedIn, Totaljobs",
      "Track posting performance and optimise wording",
      "Manage budget across paid and free channels"
    ],
    aiCapabilities: [
      "Natural language generation for compelling descriptions",
      "A/B testing of job titles and descriptions",
      "Automatic reposting for underperforming listings",
      "Keyword optimisation for job board search algorithms"
    ]
  },
  {
    stage: "CV Screening & Shortlisting",
    manualTime: "2-3 minutes per CV × hundreds of CVs",
    automatedTime: "Instant batch processing",
    saving: "95%",
    tasks: [
      "Parse CVs in any format (PDF, Word, LinkedIn profiles)",
      "Score candidates against role requirements",
      "Flag missing qualifications or red flags",
      "Rank candidates by overall suitability",
      "Generate shortlist with reasoning for each decision"
    ],
    aiCapabilities: [
      "Natural language understanding of varied CV formats",
      "Skills matching beyond simple keyword search",
      "Experience-level assessment and career trajectory analysis",
      "Bias detection and fairness monitoring"
    ]
  },
  {
    stage: "Candidate Communication",
    manualTime: "15-30 mins per candidate",
    automatedTime: "Fully automated",
    saving: "85%",
    tasks: [
      "Personalised acknowledgement emails on application",
      "Interview invitation with calendar integration",
      "Pre-interview preparation information packs",
      "Status updates at each recruitment stage",
      "Professional rejection notifications with feedback"
    ],
    aiCapabilities: [
      "Personalised messaging at scale",
      "Multi-channel communication (email, SMS, WhatsApp)",
      "Sentiment-appropriate tone for different stages",
      "Automatic follow-up sequences"
    ]
  },
  {
    stage: "Interview Scheduling",
    manualTime: "20-45 mins per interview",
    automatedTime: "Self-service booking",
    saving: "90%",
    tasks: [
      "Check interviewer availability across calendars",
      "Send booking links with available time slots",
      "Handle rescheduling and cancellations",
      "Send reminders to both parties",
      "Coordinate panel interviews across multiple diaries"
    ],
    aiCapabilities: [
      "Calendar integration with Google, Outlook, iCal",
      "Timezone handling for remote interviews",
      "Smart slot suggestions based on preferences",
      "Automatic conflict resolution"
    ]
  },
  {
    stage: "Onboarding Preparation",
    manualTime: "4-8 hours per new hire",
    automatedTime: "1 hour per new hire",
    saving: "80%",
    tasks: [
      "Generate offer letters and contracts",
      "Collect new starter documentation",
      "Set up IT accounts and equipment requests",
      "Schedule induction sessions and training",
      "Complete right-to-work and DBS checks"
    ],
    aiCapabilities: [
      "Template-based document generation",
      "Automated document collection and verification",
      "Integration with HR and IT systems",
      "Compliance checklist tracking"
    ]
  }
];

const complianceRequirements = [
  {
    area: "Equality Act 2010",
    description: "Prevents discrimination in recruitment based on protected characteristics",
    risks: [
      "AI bias in CV screening against protected groups",
      "Discriminatory language in job descriptions",
      "Unintended screening-out of disabled candidates",
      "Age discrimination through experience requirements"
    ],
    safeguards: [
      "Regular bias audits of AI screening criteria",
      "Inclusive language checks on all job postings",
      "Reasonable adjustment processes for disabled candidates",
      "Human review of AI shortlisting decisions",
      "Anonymised screening options to reduce unconscious bias"
    ]
  },
  {
    area: "UK GDPR & Data Protection",
    description: "Governs how candidate personal data is collected, processed, and stored",
    risks: [
      "Collecting excessive candidate data",
      "Retaining data beyond necessary periods",
      "Sharing data with third parties without consent",
      "Automated decision-making without human oversight"
    ],
    safeguards: [
      "Privacy notices at point of data collection",
      "Defined data retention periods (typically 6 months post-decision)",
      "Lawful basis established for each processing activity",
      "Right to human review of automated decisions (Article 22)",
      "Data protection impact assessment for AI screening tools"
    ]
  },
  {
    area: "Right to Work Checks",
    description: "Legal requirement to verify candidates' eligibility to work in the UK",
    risks: [
      "Discriminatory checking practices",
      "Incorrect document verification",
      "Missing checks before employment starts",
      "Inadequate record keeping"
    ],
    safeguards: [
      "Consistent checking process for all candidates",
      "AI-assisted document verification with human confirmation",
      "Automated reminders for time-limited permissions",
      "Secure digital storage of verification records",
      "Regular compliance audits"
    ]
  },
  {
    area: "Employment Agencies Act 1973",
    description: "Regulations for businesses acting as employment agencies or businesses",
    risks: [
      "Charging candidates fees (prohibited)",
      "Misrepresenting job terms or conditions",
      "Failing to keep required records"
    ],
    safeguards: [
      "Clear terms of engagement for all parties",
      "Accurate job information in all communications",
      "Comprehensive record keeping automation",
      "Regular regulatory compliance reviews"
    ]
  }
];

const costAnalysis = {
  traditional: {
    internalRecruiter: {
      salary: "£28,000-£40,000",
      cost_per_hire: "£4,000-£6,000",
      time_to_hire: "35-45 days",
      capacity: "15-20 roles per year"
    },
    recruitmentAgency: {
      fee: "15-25% of first year salary",
      cost_per_hire: "£4,500-£12,500",
      time_to_hire: "20-35 days",
      capacity: "Unlimited (at cost)"
    }
  },
  aiAutomated: {
    setup: "£3,000-£5,500",
    monthly: "£200-£400",
    cost_per_hire: "£800-£1,500",
    time_to_hire: "15-25 days",
    capacity: "Unlimited"
  }
};

const industryExamples = [
  {
    industry: "Technology SME",
    company: "Software Company (45 staff, 20 hires/year)",
    challenge: "Spending £90,000+ annually on recruitment agency fees with inconsistent quality",
    solution: "AI-powered CV screening, automated candidate communication, and interview scheduling",
    results: {
      "Cost per hire": "Reduced from £4,500 to £1,200",
      "Time to hire": "Reduced from 38 to 18 days",
      "Quality of hire": "Improved 90-day retention by 25%",
      "Annual savings": "£66,000"
    },
    roi: "520%"
  },
  {
    industry: "Hospitality Group",
    company: "Restaurant Chain (8 locations, 60+ hires/year)",
    challenge: "High turnover requiring constant recruitment, managers spending 15+ hours weekly on hiring",
    solution: "Automated job posting, instant CV screening, WhatsApp-based candidate communication",
    results: {
      "Manager time saved": "12 hours per week",
      "Application response time": "From 3 days to 15 minutes",
      "Candidate drop-off": "Reduced by 60%",
      "Annual savings": "£42,000"
    },
    roi: "380%"
  },
  {
    industry: "Professional Services",
    company: "Accounting Practice (30 staff, 8 hires/year)",
    challenge: "Senior partners spending billable hours on recruitment rather than client work",
    solution: "End-to-end recruitment automation from posting to onboarding preparation",
    results: {
      "Partner time reclaimed": "180 billable hours/year",
      "Revenue impact": "£45,000 additional billing",
      "Hire quality": "Better candidate experience scores",
      "Annual savings": "£38,000"
    },
    roi: "440%"
  }
];

export default function AIRecruitmentAutomationUKSMEsPage() {
  return (
    <>
      {/* Article Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Recruitment Automation</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI for <span className="text-orange">Recruitment</span>: Automating Hiring for UK SMEs
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Stop spending thousands on recruitment agencies and weeks on manual hiring processes. 
              Learn how UK SMEs are using AI to cut hiring costs by 70% while finding better candidates faster.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                16 min read
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
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
              Recruitment is one of the most expensive and time-consuming activities for UK SMEs. The average cost-per-hire through a recruitment agency is £4,500-£12,500, and the process takes 35-45 days. AI automation can reduce both figures dramatically — while actually improving candidate quality and experience.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              This guide walks you through every stage of the recruitment process that can be automated, the UK compliance requirements you must follow, real cost comparisons, and implementation strategies that deliver ROI within months. Whether you hire 5 or 50 people per year, there's a compelling business case for AI-powered recruitment.
            </p>
          </div>

          {/* Recruitment Stage Automation */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Automating Every Stage of Recruitment</h2>
            
            <div className="space-y-8">
              {recruitmentStages.map((stage, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <h3 className="font-heading text-xl font-bold text-navy">{stage.stage}</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {stage.saving} time saved
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                      <span className="text-red-600 font-medium text-sm">Manual:</span>
                      <span className="text-slate-700 text-sm">{stage.manualTime}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                      <span className="text-green-600 font-medium text-sm">Automated:</span>
                      <span className="text-slate-700 text-sm">{stage.automatedTime}</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">What Gets Automated:</h4>
                      <ul className="space-y-2">
                        {stage.tasks.map((task, j) => (
                          <li key={j} className="flex items-start gap-2 text-slate-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">AI Capabilities:</h4>
                      <ul className="space-y-2">
                        {stage.aiCapabilities.map((cap, j) => (
                          <li key={j} className="flex items-start gap-2 text-slate-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-blue rounded-full mt-2 flex-shrink-0" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cost Comparison */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Cost Comparison: Traditional vs AI Recruitment</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <h3 className="font-heading text-lg font-bold text-navy mb-4">Internal Recruiter</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Salary:</span>
                    <span className="font-medium">{costAnalysis.traditional.internalRecruiter.salary}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Cost per hire:</span>
                    <span className="font-medium">{costAnalysis.traditional.internalRecruiter.cost_per_hire}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Time to hire:</span>
                    <span className="font-medium">{costAnalysis.traditional.internalRecruiter.time_to_hire}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Capacity:</span>
                    <span className="font-medium">{costAnalysis.traditional.internalRecruiter.capacity}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
                <h3 className="font-heading text-lg font-bold text-navy mb-4">Recruitment Agency</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Fee:</span>
                    <span className="font-medium">{costAnalysis.traditional.recruitmentAgency.fee}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Cost per hire:</span>
                    <span className="font-medium">{costAnalysis.traditional.recruitmentAgency.cost_per_hire}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Time to hire:</span>
                    <span className="font-medium">{costAnalysis.traditional.recruitmentAgency.time_to_hire}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Capacity:</span>
                    <span className="font-medium">{costAnalysis.traditional.recruitmentAgency.capacity}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200 ring-2 ring-green-300">
                <h3 className="font-heading text-lg font-bold text-navy mb-4">AI Automated (OpenClaw)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Setup:</span>
                    <span className="font-medium">{costAnalysis.aiAutomated.setup}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Cost per hire:</span>
                    <span className="font-medium text-green-700">{costAnalysis.aiAutomated.cost_per_hire}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Time to hire:</span>
                    <span className="font-medium text-green-700">{costAnalysis.aiAutomated.time_to_hire}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Capacity:</span>
                    <span className="font-medium text-green-700">{costAnalysis.aiAutomated.capacity}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-orange/10 rounded-lg border border-orange/20">
              <h4 className="font-semibold text-orange mb-2">Bottom Line:</h4>
              <p className="text-slate-700 text-sm">
                A UK SME making 20 hires per year via agencies at £6,000 per hire spends <strong>£120,000 annually</strong>. 
                With AI-automated recruitment (after £4,500 setup), the same 20 hires cost roughly <strong>£29,300</strong> — 
                a saving of <strong>£90,700 per year</strong>.
              </p>
            </div>
          </section>

          {/* UK Compliance */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">UK Legal Compliance for AI Recruitment</h2>
            
            <div className="bg-blue/5 border border-blue/20 rounded-xl p-6 mb-8">
              <p className="text-slate-700 text-sm mb-4">
                <strong>Critical:</strong> AI recruitment tools in the UK must comply with the Equality Act 2010, UK GDPR, and emerging AI regulation. 
                The ICO has published specific guidance on automated decision-making in recruitment that all businesses must follow.
              </p>
            </div>
            
            <div className="space-y-8">
              {complianceRequirements.map((req, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">{req.area}</h3>
                  <p className="text-slate-600 text-sm mb-6">{req.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">Key Risks:</h4>
                      <ul className="space-y-2">
                        {req.risks.map((risk, j) => (
                          <li key={j} className="flex items-start gap-2 text-slate-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3">Safeguards to Implement:</h4>
                      <ul className="space-y-2">
                        {req.safeguards.map((safeguard, j) => (
                          <li key={j} className="flex items-start gap-2 text-slate-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            {safeguard}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industry Examples */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">UK SME Success Stories</h2>
            
            <div className="space-y-8">
              {industryExamples.map((example, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-navy">{example.industry}</h3>
                      <p className="text-slate-600 text-sm">{example.company}</p>
                    </div>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                      {example.roi} ROI
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-2">Challenge:</h4>
                    <p className="text-slate-600 text-sm mb-4">{example.challenge}</p>
                    <h4 className="font-semibold text-slate-800 mb-2">Solution:</h4>
                    <p className="text-slate-600 text-sm">{example.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Results:</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {Object.entries(example.results).map(([metric, value], j) => (
                        <div key={j} className="bg-green-50 rounded-lg p-3 text-center">
                          <div className="text-sm font-medium text-slate-500 mb-1">{metric}</div>
                          <div className="text-navy font-semibold text-sm">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Implementation with OpenClaw */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Implementation with OpenClaw</h2>
            
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h3 className="font-heading text-xl font-bold text-navy mb-6">Recruitment Agent Architecture</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-4">AI Agent Configuration</h4>
                  <div className="bg-navy/5 rounded-lg p-4 mb-4">
                    <pre className="text-sm text-navy font-mono overflow-x-auto">
{`// Recruitment Automation Agent
const recruitmentAgent = {
  name: "hiring-assistant",
  model: "claude-sonnet-4",
  skills: [
    "cv-parser",
    "candidate-scorer",
    "email-communicator",
    "calendar-scheduler",
    "compliance-checker"
  ],
  channels: [
    "email", "whatsapp"
  ]
};`}
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-4">Typical Workflow</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-orange pl-4">
                      <h5 className="font-medium text-slate-800 mb-1">1. Inbound Application</h5>
                      <p className="text-slate-600 text-sm">CV arrives → parsed → scored → acknowledgement sent</p>
                    </div>
                    <div className="border-l-4 border-blue pl-4">
                      <h5 className="font-medium text-slate-800 mb-1">2. Screening</h5>
                      <p className="text-slate-600 text-sm">Shortlist generated → human review → interview invites</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-medium text-slate-800 mb-1">3. Scheduling</h5>
                      <p className="text-slate-600 text-sm">Calendar check → slot offered → confirmed → reminders</p>
                    </div>
                    <div className="border-l-4 border-purple pl-4">
                      <h5 className="font-medium text-slate-800 mb-1">4. Post-Interview</h5>
                      <p className="text-slate-600 text-sm">Outcome recorded → communications sent → onboarding triggered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Next Steps</h2>
            
            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Related Guides</h3>
                  <div className="space-y-3">
                    <a href="/guides/ai-automation-roi-calculator" className="block text-orange hover:text-orange-hover transition-colors font-medium">
                      → AI Automation ROI Calculator
                    </a>
                    <a href="/guides/openclaw-vs-zapier-vs-make" className="block text-orange hover:text-orange-hover transition-colors font-medium">
                      → Compare Automation Platforms
                    </a>
                    <a href="/guides/ai-customer-service-automation-uk" className="block text-orange hover:text-orange-hover transition-colors font-medium">
                      → AI Customer Service Automation
                    </a>
                    <a href="/guides/openclaw-enterprise-security-compliance" className="block text-orange hover:text-orange-hover transition-colors font-medium">
                      → Enterprise Security & Compliance
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Get Expert Help</h3>
                  <p className="text-slate-600 mb-4">
                    Recruitment automation with AI requires careful compliance planning. I can help you implement a solution that saves time and money while staying fully compliant with UK employment law.
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                      Recruitment process audit and automation roadmap
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                      Compliant AI screening and communication setup
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                      Integration with your existing HR systems
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Slash Your <span className="text-orange">Recruitment Costs</span>?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a free recruitment automation assessment. I'll show you exactly how much you can save and how quickly you can get AI-powered hiring live.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
            Get Free Assessment
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Automate Your Hiring Process
            </h2>
            <p className="text-slate-600 text-lg">
              Book a free consultation to discuss your recruitment automation requirements.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}