import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Gyms & Fitness Studios",
  description: "How AI agents can automate member onboarding, class scheduling, personal training, and retention for UK gyms and fitness studios. Increase membership while reducing churn.",
  keywords: [
    "ai agents gyms",
    "fitness automation uk",
    "gym management ai",
    "fitness studio automation",
    "ai personal trainer",
    "gym member retention ai",
    "fitness class scheduling",
    "gym ai assistant uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-gyms-fitness" },
  openGraph: {
    title: "AI Agents for Gyms & Fitness Studios",
    description: "How AI agents can automate member onboarding, class scheduling, personal training, and retention for UK gyms and fitness studios.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-gyms-fitness",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Member Onboarding",
    timeSpent: "12-18 hours per week",
    timeSaved: "85% automation possible",
    automations: [
      "Automated membership sign-ups and payments",
      "Fitness goal assessment and program creation", 
      "Equipment orientation and safety training",
      "First workout scheduling and trainer matching"
    ],
    impact: "Faster onboarding and better member retention"
  },
  {
    area: "Class Management",
    timeSpent: "15-25 hours per week",
    timeSaved: "80% reduction possible",
    automations: [
      "Automated class scheduling and capacity management",
      "Member booking and waitlist coordination",
      "Instructor scheduling and substitute management",
      "Equipment setup and room preparation alerts"
    ],
    impact: "Optimized class utilization and member satisfaction"
  },
  {
    area: "Member Engagement",
    timeSpent: "10-20 hours per week", 
    timeSaved: "90% time savings",
    automations: [
      "Personalized workout recommendations",
      "Progress tracking and milestone celebrations",
      "Retention alerts and re-engagement campaigns",
      "Social challenges and community building"
    ],
    impact: "Higher member retention and lifetime value"
  },
  {
    area: "Personal Training",
    timeSpent: "20-30 hours per week",
    timeSaved: "60% automation possible", 
    automations: [
      "AI-powered workout plan generation",
      "Form correction and exercise guidance",
      "Progress monitoring and plan adjustments",
      "Nutrition planning and meal suggestions"
    ],
    impact: "Scale personal training to all members"
  }
];

const useCases = [
  {
    useCase: "Smart Member Retention System",
    problem: "High member churn due to lack of engagement and plateau in results",
    solution: "AI monitors member activity, predicts churn risk, and automatically triggers personalized retention campaigns",
    implementation: "Track gym visits, workout intensity, and goal progress to identify at-risk members and deliver targeted interventions",
    benefits: ["35% reduction in churn", "Early intervention alerts", "Personalized re-engagement", "Data-driven retention"]
  },
  {
    useCase: "AI Personal Training Assistant", 
    problem: "Limited trainer capacity means most members don't get personalized guidance",
    solution: "AI creates custom workout plans, provides form feedback, and adjusts programs based on member progress",
    implementation: "Members receive AI-generated workouts via mobile app with video guidance and real-time form analysis",
    benefits: ["Every member gets personal training", "Consistent form correction", "Adaptive programs", "Scalable guidance"]
  },
  {
    useCase: "Intelligent Class Optimization",
    problem: "Popular classes fill up while others run empty, leading to member frustration and revenue loss",
    solution: "AI analyzes member preferences, predicts demand, and optimizes class schedules for maximum utilization",
    implementation: "Smart scheduling algorithm considers member history, seasonal trends, and capacity to optimize timetables",
    benefits: ["95% class utilization", "Reduced member frustration", "Higher revenue per class", "Better resource allocation"]
  }
];

const roiExample = {
  practiceSize: "500-member fitness studio in Manchester",
  currentCosts: "Member churn costs (£45,000/year), underutilized classes (£20,000/year), personal trainer capacity limits (£35,000/year)",
  aiImplementation: "Comprehensive gym AI automation across retention, training and scheduling",
  savings: "£32,000/year from reduced churn, £15,000/year from optimized classes, £25,000/year from AI personal training",
  totalSaving: "£72,000/year",
  roi: "1,200% ROI within first year"
};

const faqs = [
  {
    question: "Can AI really provide effective personal training guidance?",
    answer: "AI personal training combines video analysis for form correction, adaptive program design based on progress data, and 24/7 availability. While it doesn't replace human trainers, it extends their expertise to every member and provides consistent, personalized guidance that would be impossible to scale manually."
  },
  {
    question: "How does AI help with member retention in fitness businesses?",
    answer: "AI identifies early warning signs of member disengagement by analyzing visit patterns, workout intensity, and goal progress. It can predict churn risk weeks in advance and automatically trigger personalized retention campaigns, special offers, or trainer outreach to re-engage at-risk members."
  },
  {
    question: "What about the personal relationship aspect that members value?",
    answer: "AI enhances rather than replaces human relationships by handling routine tasks and freeing up trainers for meaningful member interactions. AI can identify which members need encouragement, celebrate achievements automatically, and alert trainers when personal intervention would be most effective."
  },
  {
    question: "How does fitness AI integrate with existing gym management software?",
    answer: "Our AI integrates with major fitness platforms including Mindbody, Glofox, Zen Planner, and others. It can also work with custom booking systems and member management tools. The AI layer enhances your existing infrastructure without requiring a complete system replacement."
  },
  {
    question: "How quickly can gym AI automation be implemented?",
    answer: "Basic member engagement and retention systems can be live within 3-4 weeks. Class optimization typically takes 4-6 weeks to analyze patterns and implement. Full AI personal training integration usually takes 8-10 weeks including trainer onboarding and member app deployment."
  }
];

export default function AIAgentsGymsFitnessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Gyms & Fitness Studios</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Automate member onboarding, class scheduling, personal training, and retention programs. Scale your business while keeping members engaged.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Fitness Automations
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
              <div className="text-muted">Reduction in member churn rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">10x</div>
              <div className="text-muted">More members receiving personal guidance</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">95%</div>
              <div className="text-muted">Class utilization optimization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Fitness Businesses Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI automation delivers immediate productivity gains for gyms and fitness studios.
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
              Real Fitness AI Use Cases
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
              Real ROI Example: Manchester Fitness Studio
            </h2>
          </div>

          <div className="bg-white rounded-box p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Before AI Automation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Business Size:</div>
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
              Fitness AI Automation FAQs
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
            Phil Patterson helps UK gyms and fitness studios implement AI automation from his base in Derry, Northern Ireland. 
            With extensive experience in fitness technology and member engagement systems, Phil understands the unique challenges 
            facing fitness businesses and designs automation solutions that increase member retention while scaling operations efficiently.
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
                <span className="text-orange">Fitness Business</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your current fitness operations and identify where AI automation can 
                reduce member churn by 35% while scaling personal training to all members.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  No obligation fitness business assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI calculation for your gym
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Custom implementation roadmap
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Fitness AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your gym or fitness studio</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-agents-accountants" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Accountants UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-charities" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Charities UK</h3>
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
    </>
  );
}