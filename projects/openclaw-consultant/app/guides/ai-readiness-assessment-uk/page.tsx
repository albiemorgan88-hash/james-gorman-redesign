import type { Metadata } from "next";
import GuideLandingPage from "@/components/GuideLandingPage";

export const metadata: Metadata = {
  title: "AI Readiness Assessment UK: What Buyers Should Check Before Spending",
  description: "A practical UK guide to AI readiness assessments, covering workflows, data, governance, risk, ownership, and what a credible consultant should actually deliver.",
  keywords: [
    "ai readiness assessment uk",
    "ai readiness assessment",
    "ai consultant uk",
    "ai implementation uk",
    "blue canvas"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-readiness-assessment-uk" },
  openGraph: {
    title: "AI Readiness Assessment UK: What Buyers Should Check Before Spending",
    description: "A practical UK guide to AI readiness assessments, covering workflows, data, governance, risk, ownership, and what a credible consultant should actually deliver.",
    url: "https://openclawconsultant.co.uk/guides/ai-readiness-assessment-uk",
    type: "article",
  },
};

const stats = [
  { value: "1 scorecard", label: "Across workflows, data, risk, and ownership" },
  { value: "30 days", label: "Enough to move from theory to pilot" },
  { value: "0 fluff", label: "No vendor theatre required" },
];

const sections = [
  {
    id: "why-readiness",
    title: "Why an AI readiness assessment matters in the UK",
    html: "<p>Most UK firms do not have an AI problem. They have a workflow clarity problem. Leaders know there is pressure to move, but they are less sure which process deserves attention first, what risks sit behind the data, or who will own the rollout once the consultant disappears.</p><p>That is where a readiness assessment earns its keep. It should not be a vague maturity score or a pile of buzzwords. It should tell you, in plain language, whether the business is ready to run a worthwhile pilot, what must be fixed first, and where AI would create more disruption than value.</p><p>For SMEs, this matters even more. You do not have spare headcount to babysit bad implementations. A proper readiness review lets you protect cash, choose a sane first use case, and avoid buying a stack before the business case exists.</p>",
  },
  {
    id: "what-to-review",
    title: "What a serious readiness review should cover",
    html: "<p>The first area is workflow quality. Which tasks are repetitive, frequent, time-sensitive, and measurable. Inbox handling, lead routing, reporting, onboarding admin, document extraction, scheduling, and internal knowledge support are common candidates because the baseline pain is easy to see.</p><p>The second area is data fitness. Where does the information live, how clean is it, who can access it, and how often is it wrong. If the source data is messy or split across tools, the recommendation changes quickly. Good AI cannot rescue poor process design forever.</p><p>The third area is governance. Who approves output, what counts as a risky mistake, and which workflows need a human in the loop. UK buyers should also check GDPR exposure, vendor logging, access controls, and whether staff are already using shadow AI tools without any guardrails.</p><p>The final area is delivery capacity. Someone needs to own the process, success metric, prompt or rule design, and feedback loop. If nobody owns the new workflow, the project will stall even if the technology works.</p>",
  },
  {
    id: "outputs",
    title: "What the business should get at the end",
    html: "<p>A strong readiness assessment ends with a ranked action plan. Not a giant deck. Not a tool shopping list. A ranked plan.</p><p>That plan should show the best first pilot, the workflows that are worth postponing, the blockers that need fixing first, and the guardrails required for rollout. It should include expected impact, delivery effort, and downside risk in terms a finance or operations lead can understand.</p><p>The useful output is usually a shortlist of three buckets: do now, prepare next, and avoid for now. That gives the buyer a commercial path instead of abstract confidence scores.</p><p>Useful next reading on this site includes <a href=\"/guides/ai-audit-for-business\">AI Audit for Business</a>, <a href=\"/guides/ai-consultancy-costs-uk\">AI Consultancy Costs UK</a>, and <a href=\"/guides/openclaw-vs-zapier-vs-make\">OpenClaw vs Zapier vs Make</a>.</p>",
  },
  {
    id: "mistakes",
    title: "Common mistakes buyers make before rollout",
    html: "<p>The first mistake is buying software before naming the workflow owner. The second is confusing enthusiasm from one department with operational readiness across the business. The third is skipping measurement. If you cannot define time saved, response speed improved, error rate reduced, or conversion uplift expected, you are not ready to expand.</p><p>Another common error is treating AI as a single decision. It is not. A sensible programme starts with one workflow, one owner, one success metric, and one review loop. Buyers who insist on that structure usually move faster than those trying to design an all-company transformation on day one.</p><p>If you want the short version, readiness means the workflow is clear, the data is usable, the risk is understood, and the owner is named. Miss one of those and the project gets expensive very quickly.</p>",
  },
];

const faqs = [
  { question: "What is an AI readiness assessment?", answer: "It is a practical review of workflows, data, risk, governance, and internal ownership to judge whether AI should be piloted now, later, or not at all in a given area." },
  { question: "Who should be involved?", answer: "Usually operations, the person who owns the workflow, and someone responsible for data or compliance. You do not need a huge committee." },
  { question: "How long should it take?", answer: "For an SME, a focused readiness review can usually be completed in days, then turned into a 30 to 60 day pilot plan." },
  { question: "Is readiness different from an AI audit?", answer: "They overlap. A readiness assessment leans harder on whether the business can implement safely and successfully, not just where opportunities exist." },
  { question: "What should the final deliverable look like?", answer: "A ranked action plan with priorities, blockers, guardrails, and a recommended first pilot, written in plain business language." },
  { question: "Can a readiness assessment tell us not to use AI yet?", answer: "Yes, and that is often valuable. Good advice includes knowing when not to force the technology into a weak process." },
];

const relatedGuides = [
  { href: "/guides/ai-audit-for-business", title: "AI Audit for Business" },
  { href: "/guides/ai-consultancy-costs-uk", title: "AI Consultancy Costs UK" },
  { href: "/guides/ai-governance-policy-template", title: "AI Governance Policy Template" },
  { href: "/guides/openclaw-vs-zapier-vs-make", title: "OpenClaw vs Zapier vs Make" },
];

export default function AIReadinessAssessmentUKPage() {
  return (
    <GuideLandingPage
      badge="Commercial AI Guide 2026"
      title="AI Readiness Assessment UK"
      intro="If you are about to spend on AI, a readiness assessment should tell you what is genuinely worth piloting, what needs fixing first, and where the risk sits. That is the job, not theatre."
      stats={stats}
      sections={sections}
      faqs={faqs}
      relatedGuides={relatedGuides}
      sidebarTitle="Readiness without theatre"
      sidebarBody="A credible review reduces uncertainty. It should narrow choices, not make the work sound bigger than it is."
      sidebarPoints={[
        "Start with the workflow, not the tool.",
        "Name an owner before you approve a pilot.",
        "Keep measurements boring and commercial.",
      ]}
      assessmentIntro="Blue Canvas reviews the workflow, pressure-tests the data and approval path, and gives you a straight answer on what to pilot first."
      practicalTakeaway="A readiness assessment is only useful if it produces a clear first move. If the output does not tell you what to do next month, it was not specific enough."
      takeawayCards={[
        { title: "Score the workflow", text: "Frequency, pain, measurability, and downside risk tell you more than AI excitement ever will." },
        { title: "Fix blockers early", text: "Messy data, missing ownership, and unclear approvals kill more pilots than weak models." },
        { title: "Pilot tightly", text: "One workflow, one owner, one metric is still the fastest route to proof." },
      ]}
    />
  );
}
