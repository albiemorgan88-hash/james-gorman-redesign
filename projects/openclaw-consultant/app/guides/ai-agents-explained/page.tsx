import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents Explained: What They Are and How They Work",
  description: "Clear, jargon-free explanation of AI agents. Learn what they are, how they work, the different types, and how businesses across the UK are using them in 2026.",
  keywords: [
    "ai agents explained",
    "what are ai agents",
    "how do ai agents work",
    "ai agent types",
    "ai agents for beginners",
    "ai agents business",
    "ai agent technology",
    "understanding ai agents",
    "what is an ai agent",
    "ai agent definition",
    "ai agent vs chatbot"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-explained" },
  openGraph: {
    title: "AI Agents Explained: What They Are and How They Work",
    description: "Clear, jargon-free explanation of AI agents. Learn what they are, how they work, and how UK businesses are using them.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-explained",
    type: "article",
  },
};

const agentTypes = [
  {
    type: "Reactive Agents",
    description: "Respond to specific triggers with pre-defined actions. Think of a chatbot that answers FAQs or an email filter that sorts incoming messages.",
    complexity: "Simple",
    example: "A customer service bot that detects keywords and routes enquiries to the right department",
    bestFor: "Repetitive, rule-based tasks with predictable inputs"
  },
  {
    type: "Goal-Based Agents",
    description: "Given an objective, they plan and execute steps to achieve it. They can adapt if their initial approach doesn't work.",
    complexity: "Moderate",
    example: "A research agent tasked with finding and summarising competitor pricing — it searches, compares, and compiles a report",
    bestFor: "Multi-step tasks that need flexibility"
  },
  {
    type: "Learning Agents",
    description: "Improve their performance over time based on outcomes. They remember what works and adjust their approach.",
    complexity: "Advanced",
    example: "A sales agent that learns which email subject lines get the best response rates for your specific audience",
    bestFor: "Tasks where optimisation through experience matters"
  },
  {
    type: "Multi-Agent Systems",
    description: "Teams of specialised agents working together, each handling a different part of a complex workflow.",
    complexity: "Advanced",
    example: "One agent monitors social media mentions, another drafts responses, a third escalates urgent issues to a human",
    bestFor: "Complex business processes that span multiple systems"
  }
];

const components = [
  {
    name: "Perception",
    explanation: "The agent takes in information — from APIs, databases, emails, web pages, or user inputs. This is its window into the world.",
    analogy: "Like a new employee reading through their inbox and checking shared drives on their first day."
  },
  {
    name: "Reasoning",
    explanation: "Using a large language model (LLM) as its brain, the agent interprets what it's perceived, considers its goals, and decides what to do next.",
    analogy: "Like an experienced worker deciding which task to tackle first based on urgency and importance."
  },
  {
    name: "Action",
    explanation: "The agent executes its decision — sending an email, updating a database, calling an API, generating a report, or asking a human for clarification.",
    analogy: "Like a team member completing a task and moving to the next item on their to-do list."
  },
  {
    name: "Memory",
    explanation: "The agent remembers previous interactions, decisions, and outcomes. This context makes it more effective over time.",
    analogy: "Like a colleague who remembers that client X prefers phone calls over emails."
  }
];

const comparisons = [
  {
    feature: "Can take independent action",
    chatbot: "❌ Only responds when asked",
    traditional: "❌ Follows fixed scripts",
    aiAgent: "✅ Plans and executes tasks autonomously"
  },
  {
    feature: "Handles unexpected inputs",
    chatbot: "⚠️ Falls back to 'I don't understand'",
    traditional: "❌ Breaks or stops",
    aiAgent: "✅ Adapts and finds alternatives"
  },
  {
    feature: "Connects to business systems",
    chatbot: "⚠️ Limited integrations",
    traditional: "✅ Pre-built connectors",
    aiAgent: "✅ Flexible API integration"
  },
  {
    feature: "Learns from outcomes",
    chatbot: "❌ Static responses",
    traditional: "❌ No learning capability",
    aiAgent: "✅ Improves over time"
  },
  {
    feature: "Multi-step task completion",
    chatbot: "❌ Single-turn responses",
    traditional: "⚠️ Linear sequences only",
    aiAgent: "✅ Complex, branching workflows"
  }
];

const realWorldExamples = [
  {
    scenario: "A customer emails asking about their order status",
    chatbotResponse: "A chatbot might reply: 'Please check your order status at [link]' — redirecting the customer to do the work themselves.",
    agentResponse: "An AI agent reads the email, looks up the order in your system, checks the courier tracking, and replies with the specific status — 'Your order #4521 was dispatched yesterday and is expected tomorrow by 2pm.'"
  },
  {
    scenario: "An invoice arrives with a different format than usual",
    traditionalResponse: "Traditional automation fails because the invoice doesn't match the expected template. It sits in an error queue until someone processes it manually.",
    agentResponse: "An AI agent reads the invoice, identifies the key information regardless of format, validates it against the purchase order, and processes it — flagging any discrepancies for human review."
  },
  {
    scenario: "A job application comes in for an open role",
    manualResponse: "An HR administrator reads the CV, compares it against the job spec, decides whether to shortlist, and sends an acknowledgement email. This takes 10-15 minutes per application.",
    agentResponse: "An AI agent reads the CV, scores it against the role requirements, adds it to the shortlist or sends a polite rejection, and updates the recruitment tracker — in under 30 seconds."
  }
];

const myths = [
  {
    myth: "AI agents are just fancy chatbots",
    reality: "Chatbots respond to conversations. AI agents take independent action — they can research, decide, execute, and report back without being prompted at every step. A chatbot answers questions; an agent completes tasks."
  },
  {
    myth: "AI agents will replace all human workers",
    reality: "AI agents excel at repetitive, data-heavy work. They're terrible at creativity, empathy, complex negotiation, and strategic thinking. The businesses winning with AI agents are augmenting their teams, not replacing them."
  },
  {
    myth: "You need to be technical to use AI agents",
    reality: "Modern platforms like OpenClaw offer no-code and low-code options. You need to understand your business processes clearly, but you don't need to write Python. That said, a good implementation partner makes a huge difference."
  },
  {
    myth: "AI agents are too expensive for small businesses",
    reality: "Open-source platforms have zero licensing costs. A small business can run useful AI agents for under £50/month in API and hosting costs. The ROI typically pays for itself within the first month of automation."
  }
];

const faqs = [
  {
    question: "What is the difference between AI and an AI agent?",
    answer: "AI is the broad technology — machine learning, natural language processing, computer vision. An AI agent is a specific application of AI that can perceive its environment, make decisions, and take actions autonomously. Think of AI as electricity and an AI agent as a specific appliance that uses it."
  },
  {
    question: "Are AI agents safe to use in a business?",
    answer: "Yes, when implemented properly. Modern AI agents include guardrails — limits on what actions they can take, human approval workflows for sensitive decisions, and comprehensive logging. The key is proper configuration. Our guide on AI agent security covers this in detail."
  },
  {
    question: "How do AI agents learn about my business?",
    answer: "Through a process called grounding — connecting the agent to your business data, documents, and systems. This might mean giving it access to your CRM, knowledge base, or standard operating procedures. The agent uses this context to make informed decisions specific to your business."
  },
  {
    question: "Can AI agents work with my existing software?",
    answer: "Most modern AI agent platforms integrate with popular business tools through APIs. If your software has an API (most SaaS tools do), an agent can interact with it. Common integrations include CRMs like HubSpot, accounting tools like Xero, and communication platforms like Slack and Teams."
  },
  {
    question: "How long does it take to set up an AI agent?",
    answer: "A simple reactive agent can be configured in hours. A goal-based agent handling a specific business process typically takes 1-2 weeks. A full multi-agent system spanning multiple departments might take 4-8 weeks. The timeline depends mainly on data readiness and process clarity."
  },
  {
    question: "What's the best AI agent platform for beginners?",
    answer: "OpenClaw offers a good balance of power and accessibility, with templates for common business use cases. If you're already in the Microsoft ecosystem, Copilot Studio is another accessible option. Check our best AI agents 2026 guide for a full comparison."
  },
  {
    question: "Do AI agents need the internet to work?",
    answer: "Not necessarily. AI agents can run entirely on your own infrastructure (self-hosted) or in the cloud. Self-hosted agents process everything locally — your data never leaves your network. Cloud-based agents use internet-connected AI services. The choice depends on your data sensitivity and infrastructure preferences."
  },
  {
    question: "Can AI agents make mistakes?",
    answer: "Yes. AI agents can make errors, especially with ambiguous or unusual inputs. This is why well-designed implementations include guardrails — confidence thresholds below which the agent asks a human, audit logging for all actions, and approval workflows for high-stakes decisions. The goal isn't perfection but better accuracy and speed than the manual alternative."
  },
  {
    question: "How much does an AI agent cost?",
    answer: "Simple AI agents can run for under £50/month. Business-grade agents handling significant workloads typically cost £100-500/month in running costs (hosting + API calls). Enterprise deployments can be more. Implementation (setup, integration, testing) is usually a one-off cost of £2,000-10,000. See our pricing page for specific packages."
  },
  {
    question: "What's the difference between AI agents and RPA?",
    answer: "RPA (Robotic Process Automation) follows fixed rules — click here, copy that, paste there. AI agents understand context and make decisions. RPA breaks when a screen layout changes; an AI agent adapts. For a detailed comparison, see our guide on AI agents vs RPA."
  }
];

export default function AIAgentsExplainedPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents
              <br />
              <span className="text-orange">Explained</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              No jargon. No hype. Just a clear explanation of what AI agents are, how they work, and why UK businesses are adopting them at record pace in 2026.
            </p>
            <a
              href="#how-they-work"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              How AI Agents Work
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* What Is an AI Agent */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 not-prose">
              What Is an AI Agent?
            </h2>
            <p>
              An AI agent is software that can <strong>perceive its environment, make decisions, and take actions</strong> to achieve a goal — without needing a human to guide every step.
            </p>
            <p>
              Think of it like hiring a new team member who never sleeps, never forgets, and can process information at superhuman speed. You give them a goal (&ldquo;process all incoming invoices&rdquo; or &ldquo;respond to customer enquiries within 2 minutes&rdquo;) and they figure out how to achieve it.
            </p>
            <p>
              Unlike traditional automation (which follows rigid scripts), AI agents can handle unexpected situations. If an invoice is in an unusual format, a traditional script breaks. An AI agent reads the document, understands the context, and processes it correctly — or asks a human for help if it&apos;s genuinely uncertain.
            </p>
            <p>
              For a deeper dive into how businesses are using them right now, see our <a href="/guides/ai-agent-examples" className="text-orange hover:underline">AI Agent Examples</a> guide.
            </p>
          </div>
        </div>
      </section>

      {/* How They Work */}
      <section id="how-they-work" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              How AI Agents Work: The Four Components
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Every AI agent, from a simple email sorter to a complex business automation system, has these four core components.
            </p>
          </div>

          <div className="space-y-8">
            {components.map((component, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div>
                    <div className="text-orange font-bold text-4xl mb-2">{index + 1}</div>
                    <h3 className="font-heading font-bold text-xl text-dark">{component.name}</h3>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">What It Does:</h4>
                    <p className="text-muted text-sm">{component.explanation}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Think of It Like:</h4>
                    <p className="text-orange text-sm font-medium">{component.analogy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of AI Agents */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Types of AI Agents
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Not all AI agents are created equal. The right type depends on what you need them to do.
            </p>
          </div>

          <div className="space-y-8">
            {agentTypes.map((agent, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-2">{agent.type}</h3>
                    <div className="text-sm text-orange font-semibold">Complexity: {agent.complexity}</div>
                  </div>
                  <div>
                    <p className="text-muted text-sm">{agent.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Example:</h4>
                    <p className="text-muted text-sm">{agent.example}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Best For:</h4>
                    <p className="text-orange text-sm font-medium">{agent.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Agent vs Chatbot vs Traditional Automation
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px] bg-white rounded-2xl overflow-hidden shadow-card">
              <thead>
                <tr className="border-b-2 border-orange">
                  <th className="text-left py-4 px-6 text-dark font-bold">Capability</th>
                  <th className="text-center py-4 px-4 text-dark font-bold">Chatbot</th>
                  <th className="text-center py-4 px-4 text-dark font-bold">Traditional Automation</th>
                  <th className="text-center py-4 px-4 text-dark font-bold">AI Agent</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-dark">{row.feature}</td>
                    <td className="text-center py-4 px-4 text-muted text-xs">{row.chatbot}</td>
                    <td className="text-center py-4 px-4 text-muted text-xs">{row.traditional}</td>
                    <td className="text-center py-4 px-4 text-muted text-xs">{row.aiAgent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              See the Difference in Action
            </h2>
          </div>

          <div className="space-y-8">
            {realWorldExamples.map((example, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Scenario: {example.scenario}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="border-l-4 border-red-400 pl-4">
                    <h4 className="font-semibold text-red-600 mb-2">Without an AI Agent:</h4>
                    <p className="text-muted text-sm">{example.chatbotResponse || example.traditionalResponse || example.manualResponse}</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-600 mb-2">With an AI Agent:</h4>
                    <p className="text-muted text-sm">{example.agentResponse}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Myths */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Common Myths About AI Agents
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-8">
            {myths.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-red-600 mb-3">Myth: &ldquo;{item.myth}&rdquo;</h3>
                <p className="text-muted text-sm leading-relaxed"><strong className="text-dark">Reality:</strong> {item.reality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 not-prose">
              Why AI Agents Matter Now
            </h2>
            <p>
              AI agents aren&apos;t new as a concept — researchers have discussed them for decades. What&apos;s changed is that large language models (LLMs) like GPT-4 and Claude have given agents something they never had before: <strong>the ability to understand context and communicate naturally</strong>.
            </p>
            <p>
              Combined with platforms like <a href="/" className="text-orange hover:underline">OpenClaw</a> that orchestrate multiple agents working together, we&apos;re seeing the first truly useful AI agents deployed in real businesses.
            </p>
            <p>
              For UK businesses, the timing is particularly interesting. The UK government&apos;s pro-innovation approach to AI regulation means fewer barriers to adoption than in the EU — and across most <a href="/guides/ai-agent-use-cases" className="text-orange hover:underline">AI agent use cases</a>, early movers have a massive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Agents Explained: FAQs
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
            Blue Canvas is a UK-based AI consultancy that makes AI agents accessible to businesses of all sizes. 
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil Patterson helps 
            organisations understand, evaluate, and implement AI agent solutions that deliver real business value.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ready to Explore
                <br />
                <span className="text-orange">AI Agents for Your Business?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Book a free consultation to understand how AI agents could transform your specific workflows — with real numbers, not vague promises.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Plain-English explanation of what&apos;s possible
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Assessment of your automation opportunities
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  No obligation, no hard sell
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Free AI Agent Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Discover what AI agents can do for your business</p>
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
            <a href="/guides/best-ai-agents-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Best AI Agents 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-examples" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Examples: Real-World Use Cases</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/autonomous-ai-agents" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Autonomous AI Agents</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
