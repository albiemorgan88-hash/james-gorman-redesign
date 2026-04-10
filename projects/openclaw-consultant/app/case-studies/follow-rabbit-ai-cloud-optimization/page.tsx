import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Study: Follow Rabbit AI Cloud Optimisation with OpenClaw',
  description:
    'How Follow Rabbit, a Google Cloud cost optimisation platform, is using OpenClaw to automate internal operations with custom skills, memory, and multi-agent workflows.',
  alternates: {
    canonical: 'https://openclawconsultant.co.uk/case-studies/follow-rabbit-ai-cloud-optimization',
  },
};

const customerWordmarks = [
  'Nordstrom',
  'Lufthansa Group',
  'Bell',
  'Rakuten',
  'Servier',
  'Trivago',
  'Karrot',
  'ResearchGate',
];

export default function FollowRabbitCaseStudy() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full font-medium">
              Case Study
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            How a Cloud Cost Optimisation SaaS Uses OpenClaw to Automate Internal Operations
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mb-8">
            Follow Rabbit helps enterprise teams cut Google Cloud waste at scale. Now, in an early-stage
            engagement with Blue Canvas, they&apos;re using OpenClaw to tighten their own internal operations with
            persistent memory, custom skills, workflow automation, and multi-agent orchestration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#implementation"
              className="bg-blue-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-400 transition-colors inline-block text-center"
            >
              See Implementation
            </Link>
            <Link
              href="#contact"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-dark transition-colors inline-block text-center"
            >
              Build Something Similar
            </Link>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-dark">Engagement Snapshot</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-500">$50M+</div>
              <div className="text-sm text-muted-dark mt-1">Saved with Rabbit automation</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-green-500">32%</div>
              <div className="text-sm text-muted-dark mt-1">Average BigQuery cost reduction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-purple-500">£1k</div>
              <div className="text-sm text-muted-dark mt-1">OpenClaw setup fee</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-orange-500">£500</div>
              <div className="text-sm text-muted-dark mt-1">Monthly retainer</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Customer Proof */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">Why This Client Matters</h2>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Follow Rabbit at a Glance</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• Google Cloud cost optimisation platform focused on BigQuery and wider GCP efficiency</li>
              <li>• Automates cost-focused code reviews and optimisation PRs</li>
              <li>• Covers BigQuery, GKE, Cloud Storage, Compute Engine, Cloud Run, and anomaly detection</li>
              <li>• Operates as Follow Rabbit PTE Ltd and is a Google Cloud Partner</li>
              <li>• Working with major brands, including Lufthansa Group, Rakuten, Trivago, and Nordstrom</li>
            </ul>
          </div>

          <div className="bg-white border border-border-light rounded-xl p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
              <h3 className="text-xl font-semibold text-dark">Customer Logo Wall</h3>
              <span className="text-sm text-muted-dark">Text wordmarks used here, no external assets hotlinked</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {customerWordmarks.map((customer) => (
                <div
                  key={customer}
                  className="bg-cream border border-border-light rounded-lg px-4 py-5 text-center text-sm font-semibold text-dark"
                >
                  {customer}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">The Challenge</h2>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <h3 className="text-lg font-semibold text-red-800 mb-3">Even Strong SaaS Teams Hit Internal Ops Friction</h3>
            <ul className="text-red-700 space-y-2">
              <li>• Internal knowledge gets scattered across chats, docs, and ad hoc processes</li>
              <li>• Customer onboarding steps can become inconsistent as the team grows</li>
              <li>• Reporting and internal updates eat time that should go into product and delivery</li>
              <li>• Competitive monitoring and content tasks slip when engineering work takes priority</li>
              <li>• Smart teams still need a system for repeatable execution, not just clever people</li>
            </ul>
          </div>

          <p className="text-lg text-muted-dark leading-relaxed">
            That&apos;s the context for this project. Follow Rabbit already helps enterprises optimise cloud spend.
            The OpenClaw engagement is about applying the same operational discipline internally, so routine work
            gets captured, delegated, and run consistently.
          </p>
        </section>

        {/* Solution Overview */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">The OpenClaw Solution</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Persistent Memory</h3>
                <p className="text-muted-dark text-sm">
                  Keep client context, internal process notes, onboarding checklists, and workflow state in one place,
                  so repeat tasks do not restart from zero each time.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Custom Skills</h3>
                <p className="text-muted-dark text-sm">
                  Build targeted OpenClaw skills for Follow Rabbit&apos;s real workflows rather than forcing everything into
                  generic chat prompts or brittle automation tools.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Automated Workflows</h3>
                <p className="text-muted-dark text-sm">
                  Turn repetitive internal work into scheduled or trigger-based routines, including reporting, task
                  prep, summaries, and handoffs.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Multi-Agent Orchestration</h3>
                <p className="text-muted-dark text-sm">
                  Split research, writing, monitoring, and operational follow-up across specialist subagents instead of
                  jamming every task into one general assistant.
                </p>
              </div>

              <div className="border-l-4 border-pink-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Operational Visibility</h3>
                <p className="text-muted-dark text-sm">
                  Create clearer internal reporting loops so key updates, tasks, and recurring priorities do not stay
                  trapped in someone&apos;s head.
                </p>
              </div>

              <div className="border-l-4 border-indigo-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Flexible Rollout</h3>
                <p className="text-muted-dark text-sm">
                  Start with a focused setup, then expand into higher-value automations once the operating rhythm and
                  team fit are proven.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Details */}
        <section id="implementation" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">Implementation Breakdown</h2>

          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: Initial OpenClaw Setup</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">Core Foundations</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• OpenClaw environment configured for internal operations use</li>
                    <li>• Memory structure shaped around recurring team workflows</li>
                    <li>• Initial skills designed around Follow Rabbit&apos;s operating model</li>
                    <li>• Business context and repeatable tasks documented for reuse</li>
                    <li>• Basic orchestration patterns set up for specialist subagents</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">Current Focus</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Reduce admin overhead around onboarding and internal follow-up</li>
                    <li>• Improve consistency across recurring operational tasks</li>
                    <li>• Capture team knowledge in a form agents can use repeatedly</li>
                    <li>• Build a clean base for further workflow automation</li>
                    <li>• Keep rollout practical rather than overengineering early</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg">
                <p className="text-sm text-muted-dark">
                  <strong>Status:</strong> Early-stage engagement with the initial OpenClaw setup and workflow design in
                  progress.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-4">Phase 2: Workflow Rollout</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700">Likely Automations</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Automated customer onboarding checklists and handoffs</li>
                    <li>• Internal reporting summaries and action tracking</li>
                    <li>• Competitive monitoring with structured updates</li>
                    <li>• Content assistance for internal and external communications</li>
                    <li>• Follow-up reminders and recurring operational prompts</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-700">What OpenClaw Adds</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Statefulness across tasks instead of isolated one-off chats</li>
                    <li>• Skills built for the company&apos;s actual workflows</li>
                    <li>• Agents that can hand work between each other cleanly</li>
                    <li>• Reusable prompts, memory, and guardrails for repeat work</li>
                    <li>• A practical path from ad hoc tasks to systemised operations</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg">
                <p className="text-sm text-muted-dark">
                  <strong>Approach:</strong> Roll out high-frequency use cases first, then widen the footprint once the
                  first internal loops are stable.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Phase 3: Operational Expansion</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-purple-700">Potential Next Steps</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Broader multi-agent handoffs across operations and content</li>
                    <li>• Better reporting visibility for leadership updates</li>
                    <li>• More proactive monitoring of market and competitor movement</li>
                    <li>• Tighter internal documentation and memory hygiene</li>
                    <li>• Expanded workflow coverage as the team proves ROI internally</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-purple-700">Expected Payoff</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Less manual coordination work</li>
                    <li>• Faster onboarding and task execution</li>
                    <li>• More consistency across recurring processes</li>
                    <li>• Better visibility on what needs action next</li>
                    <li>• More time kept for product and customer value work</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg">
                <p className="text-sm text-muted-dark">
                  <strong>Important:</strong> These are the operational gains the engagement is designed to deliver, not
                  claimed outcomes from a finished deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Operating Use Cases */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">Operational Use Cases We&apos;re Building For</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-dark mb-4">Internal Operations</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg gap-4">
                  <span className="font-semibold">Customer onboarding workflows</span>
                  <span className="text-green-600 font-bold text-sm">Priority use case</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg gap-4">
                  <span className="font-semibold">Internal reporting and summaries</span>
                  <span className="text-blue-600 font-bold text-sm">High frequency</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg gap-4">
                  <span className="font-semibold">Competitive monitoring</span>
                  <span className="text-purple-600 font-bold text-sm">Ongoing signal</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg gap-4">
                  <span className="font-semibold">Content support and drafting</span>
                  <span className="text-orange-600 font-bold text-sm">Scalable output</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-dark mb-4">OpenClaw Architecture Fit</h3>

              <div className="space-y-4">
                <div className="p-4 bg-cream rounded-lg">
                  <div className="text-2xl font-bold text-dark">Memory-first</div>
                  <div className="text-sm text-muted-dark">Persistent context instead of scattered notes</div>
                </div>

                <div className="p-4 bg-cream rounded-lg">
                  <div className="text-2xl font-bold text-dark">Skill-based</div>
                  <div className="text-sm text-muted-dark">Reusable workflows tailored to the team</div>
                </div>

                <div className="p-4 bg-cream rounded-lg">
                  <div className="text-2xl font-bold text-dark">Multi-agent</div>
                  <div className="text-sm text-muted-dark">Specialist agents for research, reporting, and execution</div>
                </div>

                <div className="p-4 bg-cream rounded-lg">
                  <div className="text-2xl font-bold text-dark">Automation-ready</div>
                  <div className="text-sm text-muted-dark">Scheduled workflows and handoffs as operations mature</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why the Fit Works */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">Why the Fit Makes Sense</h2>

          <div className="bg-cream p-8 rounded-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-dark mb-4">Serious Product Team</h3>
                <ul className="text-sm text-muted-dark space-y-2">
                  <li>• Strong technical buyer profile</li>
                  <li>• Clear operational leverage points</li>
                  <li>• Real need for repeatable internal systems</li>
                  <li>• High-value time best spent on product and clients</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-dark mb-4">Good OpenClaw Use Case</h3>
                <ul className="text-sm text-muted-dark space-y-2">
                  <li>• Recurring workflows with context dependency</li>
                  <li>• Multi-step internal processes</li>
                  <li>• Clear benefit from memory and orchestration</li>
                  <li>• Scope to add more skills over time</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-dark mb-4">Commercial Model</h3>
                <ul className="text-sm text-muted-dark space-y-2">
                  <li>• £1,000 initial setup</li>
                  <li>• £500 monthly retainer</li>
                  <li>• Practical phased rollout</li>
                  <li>• Room for expansion as value becomes visible</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 rounded-xl">
            <h4 className="font-semibold text-yellow-800 mb-3">Current Project Position</h4>
            <p className="text-yellow-700 text-sm">
              Blue Canvas is working with Rory and Aco on an early OpenClaw rollout. This page reflects the direction,
              design, and operating model of the engagement, not a finished transformation story.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-gray-900 text-white p-8 rounded-xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need OpenClaw for Internal Ops?</h2>
            <p className="text-gray-300 mb-6">
              If your team already has strong products and solid people but too much manual internal work, OpenClaw can
              give you a proper operating layer, not just another chatbot.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">What Blue Canvas Can Build:</h3>
              <ul className="text-sm text-gray-300 space-y-2 text-left max-w-md mx-auto">
                <li>• OpenClaw setup and configuration for your business</li>
                <li>• Custom skills built around your actual workflows</li>
                <li>• Persistent memory and operating rules</li>
                <li>• Multi-agent task orchestration</li>
                <li>• Ongoing monthly support and iteration</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-blue-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-400 transition-colors"
              >
                View Pricing
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-dark transition-colors"
              >
                See More Case Studies
              </Link>
            </div>

            <p className="text-xs text-muted mt-4">
              Early-stage work, practical rollout, no made-up claims.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
