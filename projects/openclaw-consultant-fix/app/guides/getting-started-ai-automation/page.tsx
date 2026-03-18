import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Getting Started with AI Automation: A Beginner's Guide | UK Businesses 2026",
  description: "Complete beginner's guide to AI automation for UK businesses. Learn what AI automation is, how to get started, common use cases, and implementation strategies.",
  keywords: [
    "getting started ai automation",
    "ai automation beginners guide",
    "business ai automation uk",
    "ai automation for beginners",
    "how to start ai automation",
    "business automation guide",
    "ai tools for business",
    "automation strategy guide"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/getting-started-ai-automation" },
  openGraph: {
    title: "Getting Started with AI Automation: A Beginner's Guide | UK Businesses 2026",
    description: "Complete beginner's guide to AI automation for UK businesses. Learn implementation strategies and common use cases.",
    url: "https://openclawconsultant.co.uk/guides/getting-started-ai-automation",
    type: "article",
  },
};

const automationLevels = [
  {
    level: "Level 1: Basic Task Automation",
    description: "Simple, repetitive tasks that follow clear rules",
    examples: ["Email template responses", "Calendar scheduling", "Data entry", "File organization"],
    difficulty: "Easy",
    timeToImplement: "1-2 weeks",
    tools: ["ChatGPT", "Zapier", "IFTTT"],
    roi: "Immediate"
  },
  {
    level: "Level 2: Workflow Automation", 
    description: "Multi-step processes with decision points",
    examples: ["Lead qualification pipelines", "Customer onboarding", "Invoice processing", "Content creation workflows"],
    difficulty: "Medium",
    timeToImplement: "2-4 weeks", 
    tools: ["OpenClaw", "Microsoft Power Automate", "Custom solutions"],
    roi: "2-4 weeks"
  },
  {
    level: "Level 3: Intelligent Automation",
    description: "Complex processes requiring reasoning and learning",
    examples: ["Customer service automation", "Market analysis", "Strategic planning", "Quality assurance"],
    difficulty: "Advanced",
    timeToImplement: "1-3 months",
    tools: ["OpenClaw", "Custom AI agents", "Enterprise platforms"],
    roi: "1-3 months"
  }
];

const gettingStartedSteps = [
  {
    step: 1,
    title: "Audit Your Current Processes",
    description: "Identify which tasks take the most time and follow predictable patterns",
    actions: [
      "List all weekly repetitive tasks",
      "Track time spent on each task for one week", 
      "Identify tasks with clear inputs and outputs",
      "Note tasks that require similar decisions repeatedly"
    ],
    outcome: "Clear picture of automation opportunities ranked by impact"
  },
  {
    step: 2,
    title: "Start with Quick Wins",
    description: "Choose 1-2 simple automations that will deliver immediate value",
    actions: [
      "Pick tasks that save 5+ hours per week",
      "Start with tasks that don't require complex decision-making",
      "Choose processes that are already well-documented",
      "Avoid mission-critical processes for first attempts"
    ],
    outcome: "Successful automation experience and measurable time savings"
  },
  {
    step: 3,
    title: "Choose Your Automation Tool",
    description: "Select the right platform based on your technical capabilities and requirements",
    actions: [
      "Assess your team's technical skills",
      "Consider integration requirements",
      "Evaluate budget and time constraints",
      "Test tools with pilot projects"
    ],
    outcome: "Confident tool selection aligned with your capabilities"
  },
  {
    step: 4,
    title: "Implement and Measure",
    description: "Deploy your first automation and track the results",
    actions: [
      "Start small with one workflow",
      "Monitor performance and time savings",
      "Gather feedback from team members", 
      "Document lessons learned"
    ],
    outcome: "Working automation with proven ROI and team buy-in"
  },
  {
    step: 5,
    title: "Scale and Expand",
    description: "Apply lessons learned to automate additional processes",
    actions: [
      "Identify next highest-impact automation",
      "Apply lessons from first implementation",
      "Gradually increase complexity",
      "Build internal automation capabilities"
    ],
    outcome: "Growing automation program with compound benefits"
  }
];

const commonMistakes = [
  {
    mistake: "Automating Broken Processes",
    description: "Trying to automate inefficient or poorly designed workflows without fixing them first",
    consequence: "Automation amplifies existing problems and creates more confusion",
    solution: "Document and optimize processes before automating. If humans can't follow it consistently, don't automate it yet."
  },
  {
    mistake: "Starting Too Ambitious",
    description: "Attempting to automate complex, mission-critical processes as first projects",
    consequence: "High failure risk, team frustration, and wasted time and budget",
    solution: "Start with simple, non-critical tasks. Build confidence and expertise before tackling complex workflows."
  },
  {
    mistake: "Ignoring Change Management",
    description: "Implementing automation without preparing the team or managing the transition",
    consequence: "Team resistance, adoption failure, and return to manual processes",
    solution: "Involve team members in planning, provide training, and start with assistive automation rather than replacement."
  },
  {
    mistake: "No Success Metrics",
    description: "Implementing automation without clear ways to measure success and ROI",
    consequence: "Unable to prove value or identify areas for improvement",
    solution: "Define specific metrics before starting: time saved, errors reduced, customer satisfaction improved."
  },
  {
    mistake: "Set and Forget Mentality",
    description: "Assuming automation will work perfectly forever without monitoring or optimization",
    consequence: "Performance degradation, missed opportunities, and frustrated users",
    solution: "Regular monitoring, performance reviews, and continuous optimization based on changing business needs."
  }
];

const industryStarterPacks = [
  {
    industry: "Professional Services",
    quickWins: ["Client onboarding emails", "Meeting scheduling", "Invoice reminders", "Project status updates"],
    nextLevel: ["Proposal generation", "Time tracking analysis", "Client communication workflows", "Document approval processes"],
    timeToValue: "2-3 weeks"
  },
  {
    industry: "E-commerce",
    quickWins: ["Order confirmations", "Shipping notifications", "Review requests", "Inventory alerts"],
    nextLevel: ["Customer segmentation", "Personalized recommendations", "Abandoned cart recovery", "Supplier communications"],
    timeToValue: "1-2 weeks"
  },
  {
    industry: "Healthcare/Wellness",
    quickWins: ["Appointment reminders", "Follow-up communications", "Patient check-ins", "Documentation"],
    nextLevel: ["Patient journey automation", "Treatment plan tracking", "Compliance monitoring", "Referral workflows"],
    timeToValue: "3-4 weeks"
  },
  {
    industry: "Real Estate",
    quickWins: ["Property enquiry responses", "Viewing confirmations", "Market updates", "Client communications"],
    nextLevel: ["Lead qualification", "Property descriptions", "Market analysis", "Transaction workflows"],
    timeToValue: "2-3 weeks"
  }
];

const readinessAssessment = [
  {
    question: "Do you have clearly documented business processes?",
    why: "Automation requires clear, consistent processes. If processes vary by person or aren't documented, start there first."
  },
  {
    question: "Can you identify 10+ hours of weekly repetitive tasks?",
    why: "You need sufficient volume to justify automation investment. Less than 10 hours weekly may not provide adequate ROI."
  },
  {
    question: "Is your team open to changing how they work?",
    why: "Successful automation requires team buy-in and willingness to adopt new workflows. Change management is crucial."
  },
  {
    question: "Do you have someone who can manage the automation project?",
    why: "Automation projects need dedicated ownership for planning, implementation, and ongoing optimization."
  },
  {
    question: "Is your business process relatively stable?",
    why: "If processes change frequently, automation may not be cost-effective. Stabilize workflows before automating."
  }
];

export default function GettingStartedAIAutomationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">AI Automation Beginner's Guide</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Getting Started with
              <br />
              <span className="text-orange">AI Automation</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Complete beginner's guide to AI automation for UK businesses. Learn what's possible, how to start, and avoid common mistakes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#guide"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Start Learning
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Automation Levels */}
      <section id="guide" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              The Three Levels of AI Automation
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Understanding the spectrum of automation complexity helps you choose where to start and plan your automation journey.
            </p>
          </div>

          <div className="space-y-8">
            {automationLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                  <div>
                    <div className="bg-orange text-white font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center text-sm mb-3">
                      {index + 1}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-dark mb-2">{level.level}</h3>
                    <p className="text-muted text-sm">{level.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Examples:</h4>
                    <ul className="space-y-1">
                      {level.examples.map((example, i) => (
                        <li key={i} className="text-sm text-muted-dark flex gap-2 items-start">
                          <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs text-muted uppercase tracking-wider">Difficulty</span>
                      <div className={`font-semibold text-sm ${
                        level.difficulty === 'Easy' ? 'text-green-600' : 
                        level.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {level.difficulty}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-muted uppercase tracking-wider">Timeline</span>
                      <div className="font-semibold text-sm text-blue">{level.timeToImplement}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Recommended Tools:</h4>
                    <div className="space-y-1">
                      {level.tools.map((tool, i) => (
                        <div key={i} className="text-xs px-2 py-1 bg-surface text-muted-dark rounded">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-navy text-white rounded-box p-4">
                    <h4 className="text-white/80 font-semibold text-sm mb-2">ROI Timeline:</h4>
                    <div className="text-orange font-bold">{level.roi}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              5-Step Getting Started Process
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              A proven methodology to identify, implement, and scale AI automation in your business.
            </p>
          </div>

          <div className="space-y-8">
            {gettingStartedSteps.map((step) => (
              <div key={step.step} className="bg-surface rounded-box p-8 shadow-card">
                <div className="flex gap-6 items-start">
                  <div className="bg-orange text-white font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-dark mb-3">{step.title}</h3>
                    <p className="text-muted leading-relaxed mb-6">{step.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-dark mb-3">Key Actions:</h4>
                        <ul className="space-y-2">
                          {step.actions.map((action, i) => (
                            <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                              <span className="text-orange mt-0.5 flex-shrink-0">▸</span>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-3">Expected Outcome:</h4>
                        <p className="text-green-600 text-sm font-medium">{step.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Starter Packs */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Quick Start Ideas
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              Ready-to-implement automation ideas organized by industry for immediate value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryStarterPacks.map((pack, index) => (
              <div key={index} className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
                <h3 className="font-heading font-bold text-xl text-white mb-6">{pack.industry}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-green-400 font-semibold text-sm mb-3">Quick Wins (Start Here):</h4>
                    <ul className="space-y-2">
                      {pack.quickWins.map((win, i) => (
                        <li key={i} className="text-white/60 text-sm flex gap-2 items-start">
                          <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                          {win}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-orange font-semibold text-sm mb-3">Next Level (After Quick Wins):</h4>
                    <ul className="space-y-2">
                      {pack.nextLevel.map((next, i) => (
                        <li key={i} className="text-white/60 text-sm flex gap-2 items-start">
                          <span className="text-orange mt-0.5 flex-shrink-0">▸</span>
                          {next}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-white/20 pt-4">
                    <span className="text-white/40 text-xs">Time to Value: </span>
                    <span className="text-white font-semibold text-sm">{pack.timeToValue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              5 Common AI Automation Mistakes
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Learn from others' mistakes. These are the most common pitfalls when getting started with AI automation.
            </p>
          </div>

          <div className="space-y-6">
            {commonMistakes.map((mistake, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-red-500 text-white font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                      <h3 className="font-heading font-bold text-lg text-dark">{mistake.mistake}</h3>
                    </div>
                    <p className="text-muted text-sm">{mistake.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Consequence:</h4>
                    <p className="text-red-600 text-sm">{mistake.consequence}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Solution:</h4>
                    <p className="text-green-600 text-sm font-medium">{mistake.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Readiness Assessment */}
      <section className="bg-white py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Are You Ready for AI Automation?
            </h2>
            <p className="text-muted text-lg">
              Answer these questions to assess if your business is ready to start implementing AI automation.
            </p>
          </div>

          <div className="bg-surface rounded-box p-8">
            <h3 className="font-heading font-bold text-xl text-dark mb-8">Automation Readiness Checklist</h3>
            
            <div className="space-y-6">
              {readinessAssessment.map((item, index) => (
                <div key={index} className="bg-white rounded-box p-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 border-2 border-orange rounded-sm flex items-center justify-center">
                        <span className="text-orange text-sm">?</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-dark mb-2">{item.question}</h4>
                      <p className="text-muted text-sm italic">{item.why}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-navy text-white rounded-box">
              <h4 className="font-semibold text-orange mb-3">Scoring:</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>4-5 Yes:</strong> You're ready to start with Level 1-2 automation</li>
                <li><strong>2-3 Yes:</strong> Address gaps first, then start with simple Level 1 automation</li>
                <li><strong>0-1 Yes:</strong> Focus on process documentation and team preparation before automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Getting Started Questions
            </h2>
          </div>
          
          <div className="space-y-0">
            {[
              {
                q: "How long does it take to see results from AI automation?",
                a: "For simple automations (Level 1), you can see results within days. More complex workflows take 2-4 weeks to implement and optimize. The key is starting with quick wins that provide immediate value while building towards more sophisticated automation."
              },
              {
                q: "Do I need technical skills to implement AI automation?",
                a: "For basic automation using tools like ChatGPT and Zapier, no technical skills are required. More advanced automation like OpenClaw requires technical knowledge or working with consultants. Start simple and build capabilities over time."
              },
              {
                q: "What's the minimum budget needed to get started?",
                a: "You can start experimenting with free tools like ChatGPT (£20/month) and basic automation platforms. For business-grade automation, budget £500-2,000 for initial setup depending on complexity. The ROI typically justifies the investment within weeks."
              },
              {
                q: "How do I choose which processes to automate first?",
                a: "Focus on tasks that are: repetitive (done weekly/daily), time-consuming (5+ hours per week), rule-based (consistent inputs/outputs), and non-critical (safe to experiment). Document the current process clearly before automating."
              },
              {
                q: "What if my team resists automation?",
                a: "Involve your team in identifying automation opportunities and emphasize that automation handles boring tasks so they can focus on interesting work. Start with assistive automation that helps rather than replaces, and provide proper training and support."
              },
              {
                q: "Can small businesses really benefit from AI automation?",
                a: "Absolutely! Small businesses often benefit most because they have fewer resources and automation can have a bigger relative impact. Even saving 10 hours per week can be transformational for a small team."
              }
            ].map((faq, i) => (
              <details key={i} className="group border-b border-border">
                <summary className="flex justify-between items-center py-5 cursor-pointer font-heading font-semibold text-dark hover:text-blue transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-orange text-xl ml-4 group-open:rotate-45 transition-transform duration-200 flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="text-muted text-sm leading-relaxed pb-5 pr-8">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange py-16">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Start Your AI Automation Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Free consultation to identify your best automation opportunities and create a step-by-step implementation plan.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-btn font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Get Your Automation Roadmap →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Get Expert Help Starting
                <br />
                <span className="text-orange">Your Automation Journey</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your automation readiness, identify quick wins, and create a customized implementation roadmap for your business.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Automation Readiness Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Tell us about your business and automation goals</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}