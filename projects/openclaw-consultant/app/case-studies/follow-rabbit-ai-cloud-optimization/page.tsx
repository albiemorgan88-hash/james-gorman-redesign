import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Study: Follow Rabbit OpenClaw Implementation',
  description:
    'How Follow Rabbit, a Google Cloud cost optimisation platform, engaged Blue Canvas to implement OpenClaw for internal operations, onboarding workflows, and repeatable team execution.',
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

const publicProof = [
  {
    value: '$50M+',
    label: 'Publicly claimed savings delivered by Rabbit automation',
  },
  {
    value: '32%',
    label: 'Average BigQuery cost reduction claimed on Rabbit site',
  },
  {
    value: 'Google Cloud',
    label: 'Partner positioning shown on the Follow Rabbit website',
  },
  {
    value: 'BigQuery + GCP',
    label: 'Core optimisation focus presented publicly by Follow Rabbit',
  },
];

const engagementSnapshot = [
  {
    value: 'In progress',
    label: 'OpenClaw onboarding and implementation stage',
  },
  {
    value: '£1k',
    label: 'Initial setup fee paid',
  },
  {
    value: '£500/mo',
    label: 'Monthly retainer agreed',
  },
  {
    value: 'Internal ops',
    label: 'Primary scope for the first rollout',
  },
];

export default function FollowRabbitCaseStudy() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full font-medium">
              Case Study
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Follow Rabbit: Early OpenClaw Rollout for Internal Operations
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mb-8">
            Follow Rabbit helps engineering and data teams reduce Google Cloud waste. Blue Canvas is now
            implementing OpenClaw as an internal operating layer to support onboarding, knowledge capture,
            recurring team workflows, and cleaner execution behind the scenes.
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

      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-dark">Engagement Snapshot</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {engagementSnapshot.map((item) => (
              <div key={item.label} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-blue-500">{item.value}</div>
                <div className="text-sm text-muted-dark mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">About Follow Rabbit</h2>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Public positioning from the Follow Rabbit website</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• BigQuery and wider Google Cloud cost optimisation platform</li>
              <li>• Automated optimisation PRs and cost-focused code reviews</li>
              <li>• Product coverage across BigQuery, GKE, Cloud Storage, Compute Engine, Cloud Run, and anomaly detection</li>
              <li>• Google Cloud Partner positioning shown publicly</li>
              <li>• Enterprise customer logos shown publicly, including Lufthansa Group, Rakuten, Trivago, and Nordstrom</li>
            </ul>
          </div>

          <div className="mb-8 bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <p className="text-yellow-800 text-sm leading-relaxed">
              Important: the figures and customer proof below describe Follow Rabbit&apos;s own public product
              positioning. They are not claimed outcomes from the Blue Canvas or OpenClaw implementation,
              which is still in rollout.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8 text-center">
            {publicProof.map((item) => (
              <div key={item.label} className="bg-white p-6 rounded-xl shadow-sm border border-border-light">
                <div className="text-2xl font-bold text-dark">{item.value}</div>
                <div className="text-sm text-muted-dark mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-border-light rounded-xl p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
              <h3 className="text-xl font-semibold text-dark">Selected public customer logos</h3>
              <span className="text-sm text-muted-dark">Text wordmarks only, no hotlinked external assets</span>
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

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">The Opportunity</h2>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <h3 className="text-lg font-semibold text-red-800 mb-3">Strong technical teams still need operating systems</h3>
            <ul className="text-red-700 space-y-2">
              <li>• Internal knowledge can end up spread across chats, docs, and individual heads</li>
              <li>• Customer onboarding steps are easy to handle manually at first, then become inconsistent</li>
              <li>• Reporting, follow-up, and internal admin can quietly drain time from product and delivery work</li>
              <li>• Valuable recurring tasks often exist, but not yet in a reusable system</li>
              <li>• Technical founders usually do not need more ideas, they need cleaner execution loops</li>
            </ul>
          </div>

          <p className="text-lg text-muted-dark leading-relaxed">
            That is the shape of this engagement. Follow Rabbit already has a strong commercial story in cloud cost
            optimisation. The Blue Canvas brief is different: use OpenClaw to make internal execution more structured,
            repeatable, and easier to hand off as the company grows.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">Why OpenClaw Fits</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Persistent memory</h3>
                <p className="text-muted-dark text-sm">
                  Store company context, operating notes, onboarding details, and recurring task state in a form that
                  can be reused instead of recreated.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Custom skills</h3>
                <p className="text-muted-dark text-sm">
                  Shape agent behaviour around real operating workflows rather than relying on generic prompts or loose
                  chat habits.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Workflow automation</h3>
                <p className="text-muted-dark text-sm">
                  Turn repeat admin, reporting, monitoring, and handoff work into routines the team can trust.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Multi-agent orchestration</h3>
                <p className="text-muted-dark text-sm">
                  Split research, drafting, monitoring, and execution across specialist agents when a single assistant
                  would become noisy or unreliable.
                </p>
              </div>

              <div className="border-l-4 border-pink-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Operational visibility</h3>
                <p className="text-muted-dark text-sm">
                  Make it easier to see what is done, what is waiting, and what needs a human decision next.
                </p>
              </div>

              <div className="border-l-4 border-indigo-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Phased rollout</h3>
                <p className="text-muted-dark text-sm">
                  Start with the highest-friction internal use cases, prove fit, then widen the footprint over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="implementation" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">Implementation Breakdown</h2>

          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: Foundations and onboarding</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">What is being set up</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Core OpenClaw environment for internal use</li>
                    <li>• Initial memory structure around business context and recurring work</li>
                    <li>• First-pass skill design for common team workflows</li>
                    <li>• Basic operating rules, guardrails, and reuse patterns</li>
                    <li>• Practical documentation so the setup can be extended cleanly</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">Why it matters</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Gives the team a structured base instead of ad hoc prompt usage</li>
                    <li>• Makes future automation easier to layer in</li>
                    <li>• Reduces the risk of knowledge staying trapped with one person</li>
                    <li>• Creates repeatable starting points for internal processes</li>
                    <li>• Keeps the rollout focused on real operations, not AI theatre</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg">
                <p className="text-sm text-muted-dark">
                  <strong>Status:</strong> This engagement is live but early. Setup, onboarding, and first workflow design
                  are in progress.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-4">Phase 2: First internal workflows</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700">Priority use cases</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Customer onboarding support and handoff structure</li>
                    <li>• Internal summaries, reporting, and action tracking</li>
                    <li>• Knowledge capture for recurring team questions and tasks</li>
                    <li>• Competitive or market monitoring with cleaner outputs</li>
                    <li>• Lightweight content and communication assistance where useful</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-700">How OpenClaw helps</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Keeps state between tasks rather than starting fresh every time</li>
                    <li>• Makes outputs more consistent through reusable skills</li>
                    <li>• Supports specialist agents for research, drafting, and follow-through</li>
                    <li>• Creates clearer handoffs between AI work and human decisions</li>
                    <li>• Improves repeatability without forcing heavyweight software processes</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg">
                <p className="text-sm text-muted-dark">
                  <strong>Approach:</strong> Start with high-frequency operational loops first, then expand once the team has
                  confidence in the setup.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Phase 3: Expansion and measurement</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-purple-700">Likely next steps</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Broader workflow coverage across operations and internal comms</li>
                    <li>• Better visibility into recurring work and pending actions</li>
                    <li>• Cleaner process documentation as new patterns emerge</li>
                    <li>• More deliberate use of specialist agents where they save time</li>
                    <li>• Review points to decide where the rollout should deepen next</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-purple-700">Expected upside</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Less manual coordination overhead</li>
                    <li>• Faster repeat work and fewer missed steps</li>
                    <li>• Better continuity when tasks move between people</li>
                    <li>• More time protected for product and customer-facing work</li>
                    <li>• A stronger operating layer as the business scales</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg">
                <p className="text-sm text-muted-dark">
                  <strong>Important:</strong> These are the intended operational benefits of the rollout, not finished outcome
                  claims from a completed project.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">What makes this commercially interesting</h2>

          <div className="bg-cream p-8 rounded-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-dark mb-4">Strong buyer profile</h3>
                <ul className="text-sm text-muted-dark space-y-2">
                  <li>• Technical, product-led team</li>
                  <li>• Clear understanding of operational leverage</li>
                  <li>• Already selling automation and efficiency externally</li>
                  <li>• Good fit for a systems-first implementation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-dark mb-4">Good OpenClaw use case</h3>
                <ul className="text-sm text-muted-dark space-y-2">
                  <li>• Recurring internal workflows with context dependency</li>
                  <li>• Need for memory, handoffs, and consistency</li>
                  <li>• Practical value from custom skills over generic chat</li>
                  <li>• Natural scope for phased expansion</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-dark mb-4">Simple commercial entry point</h3>
                <ul className="text-sm text-muted-dark space-y-2">
                  <li>• £1,000 setup fee</li>
                  <li>• £500 monthly retainer</li>
                  <li>• Clear initial scope</li>
                  <li>• Room to grow once value is proven</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 rounded-xl">
            <h4 className="font-semibold text-yellow-800 mb-3">Current project position</h4>
            <p className="text-yellow-700 text-sm">
              This is an implementation-in-progress case study. It shows the client fit, the operating problem, and the
              rollout shape, without pretending the work is further along than it is.
            </p>
          </div>
        </section>

        <section id="contact" className="bg-gray-900 text-white p-8 rounded-xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need OpenClaw behind a growing technical team?</h2>
            <p className="text-gray-300 mb-6">
              If your team already ships strong work but still relies on manual internal coordination, OpenClaw can help
              you build a more repeatable operating layer without bolting in heavyweight process for the sake of it.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">What Blue Canvas can implement:</h3>
              <ul className="text-sm text-gray-300 space-y-2 text-left max-w-md mx-auto">
                <li>• OpenClaw setup and internal operating design</li>
                <li>• Custom skills around recurring business workflows</li>
                <li>• Persistent memory and structured knowledge capture</li>
                <li>• Multi-agent handoffs for research, drafting, and operations</li>
                <li>• Ongoing support as the rollout matures</li>
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

            <p className="text-xs text-muted mt-4">Early-stage work, clear scope, no invented ROI.</p>
          </div>
        </section>
      </div>
    </>
  );
}
