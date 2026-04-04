import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Beginner Guide 2026's Guide | Complete Tutorial 2026",
  description: "Complete beginner's guide to OpenClaw. Learn what OpenClaw is, how it works, installation basics, and your first automation project step-by-step.",
  keywords: [
    "openclaw beginner guide",
    "getting started openclaw", 
    "openclaw tutorial",
    "openclaw for beginners",
    "how to use openclaw",
    "openclaw setup guide",
    "openclaw first project",
    "openclaw basics"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-beginner-guide" },
  openGraph: {
    title: "Getting Started with OpenClaw: A Beginner's Guide | Complete Tutorial 2026",
    description: "Complete beginner's guide to OpenClaw. Learn what it is, how it works, and create your first automation project.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-beginner-guide",
    type: "article",
  },
};

const gettingStartedSteps = [
  {
    step: 1,
    title: "Understand OpenClaw Basics",
    description: "Learn what OpenClaw is and how it differs from other AI tools",
    actions: ["Read our 'What is OpenClaw' guide", "Watch introduction videos", "Understand agent concepts"],
    timeRequired: "30 minutes"
  },
  {
    step: 2,
    title: "Plan Your First Project",
    description: "Choose a simple automation project to start with",
    actions: ["Identify repetitive tasks", "Choose email or social media automation", "Define success metrics"],
    timeRequired: "1 hour"
  },
  {
    step: 3,
    title: "Set Up OpenClaw Environment",
    description: "Install and configure OpenClaw for your first project",
    actions: ["Install OpenClaw gateway", "Configure basic settings", "Test connectivity"],
    timeRequired: "2-4 hours"
  },
  {
    step: 4,
    title: "Create Your First Agent",
    description: "Build a simple agent for your chosen automation",
    actions: ["Configure agent with basic skills", "Test agent responses", "Refine agent behavior"],
    timeRequired: "2-3 hours"
  },
  {
    step: 5,
    title: "Monitor and Optimize",
    description: "Track performance and make improvements",
    actions: ["Monitor agent performance", "Collect feedback", "Make incremental improvements"],
    timeRequired: "Ongoing"
  }
];

const firstProjects = [
  {
    project: "Email Management Assistant",
    difficulty: "Beginner",
    description: "Automate email sorting, responses, and follow-ups",
    benefits: ["Inbox zero achievement", "Faster response times", "Better organization"],
    timeToValue: "1-2 weeks"
  },
  {
    project: "Social Media Scheduler",
    difficulty: "Beginner",
    description: "Automated content posting across platforms",
    benefits: ["Consistent posting", "Better engagement", "Time savings"],
    timeToValue: "1 week"
  },
  {
    project: "Customer Support Bot",
    difficulty: "Intermediate",
    description: "Basic customer inquiry handling and routing",
    benefits: ["24/7 availability", "Faster responses", "Reduced workload"],
    timeToValue: "2-3 weeks"
  },
  {
    project: "Data Entry Automation",
    difficulty: "Intermediate",
    description: "Automate data collection and entry tasks",
    benefits: ["Eliminated manual work", "Higher accuracy", "Significant time savings"],
    timeToValue: "2-4 weeks"
  }
];

const commonChallenges = [
  {
    challenge: "Technical Setup Complexity",
    solution: "Start with professional setup assistance or use managed services",
    prevention: "Plan setup time realistically and get expert help for initial configuration"
  },
  {
    challenge: "Unrealistic Expectations",
    solution: "Begin with simple, well-defined tasks before expanding to complex workflows",
    prevention: "Set clear, measurable goals for initial projects and iterate gradually"
  },
  {
    challenge: "Integration Difficulties",
    solution: "Focus on one integration at a time and test thoroughly before adding more",
    prevention: "Choose standard integrations first, custom integrations later"
  },
  {
    challenge: "Inadequate Testing",
    solution: "Implement comprehensive testing before deploying to production",
    prevention: "Build testing into your workflow from day one"
  }
];

export default function OpenClawBeginnerGuidePage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Getting Started with
              <br />
              <span className="text-orange">OpenClaw: Beginner's Guide</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Complete step-by-step guide for OpenClaw beginners. Learn the basics, set up your first project, and start automating your business today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#steps" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Start Learning
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="steps" className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              5-Step Getting Started Process
            </h2>
          </div>

          <div className="space-y-8">
            {gettingStartedSteps.map((step, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8 shadow-card">
                <div className="flex items-start gap-6">
                  <div className="bg-orange text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <h3 className="font-heading font-bold text-xl text-dark">{step.title}</h3>
                      <span className="text-orange text-sm font-medium">{step.timeRequired}</span>
                    </div>
                    <p className="text-muted mb-4">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.actions.map((action, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-3">
                          <span className="text-orange mt-0.5">▸</span>
                          {action}
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

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Perfect First Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {firstProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg text-dark">{project.project}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>
                <p className="text-muted mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-dark mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {project.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-muted text-sm flex gap-2">
                        <span className="text-green-500">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <span className="text-muted text-sm">Time to Value: </span>
                  <span className="text-orange font-medium">{project.timeToValue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Common Challenges & Solutions
            </h2>
          </div>

          <div className="space-y-6">
            {commonChallenges.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{item.challenge}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-green-600">Solution:</h4>
                    <p className="text-muted text-sm">{item.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-orange">Prevention:</h4>
                    <p className="text-muted text-sm">{item.prevention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-tutorial-beginners" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Tutorial for Beginners</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-skills-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Skills: Complete Guide</h3>
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
                Get Expert Help
                <br />
                <span className="text-orange">Starting with OpenClaw</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to help you plan your first OpenClaw project and avoid common beginner mistakes.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Beginner's Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Get started with OpenClaw the right way</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}