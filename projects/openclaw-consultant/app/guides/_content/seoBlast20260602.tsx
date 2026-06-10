import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

type BlastGuide = {
  title: string;
  highlight?: string;
  badge: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  audience: string;
  fit: string;
  firstMove: string;
  systems: string[];
  workflows: string[];
  guardrails: string[];
  metric: string;
  category: "comparison" | "governance" | "implementation";
};

const commonRelatedGuides = [
  { href: "/guides/openclaw-consultant-uk", title: "OpenClaw Consultant UK" },
  { href: "/guides/openclaw-security-best-practices", title: "OpenClaw Security Best Practices" },
  { href: "/guides/openclaw-implementation-consultant-uk", title: "OpenClaw Implementation Consultant UK" },
  { href: "/guides/ai-agent-frameworks-compared", title: "AI Agent Frameworks Compared" },
];

const guides: Record<string, BlastGuide> = {
  "openclaw-vs-langgraph": {
    title: "OpenClaw vs LangGraph",
    highlight: "For Business Teams",
    badge: "AI Agent Framework Comparison 2026",
    description: "A practical comparison of OpenClaw and LangGraph for teams choosing between business-operated agents and developer-built graph workflows.",
    metaTitle: "OpenClaw vs LangGraph: Which AI Agent Framework Fits?",
    metaDescription: "Compare OpenClaw vs LangGraph for business workflows, state control, integrations, governance, setup effort, and when each agent framework fits best.",
    keywords: ["openclaw vs langgraph", "langgraph alternative", "ai agent framework comparison", "openclaw langgraph", "langgraph for business"],
    audience: "business owners, operations leads, and technical teams comparing AI agent frameworks",
    fit: "OpenClaw fits when the agent needs to operate through messaging, files, browser tasks, memory, scheduled work, and approvals. LangGraph fits when an engineering team wants fine control over state transitions and is ready to own the orchestration layer.",
    firstMove: "choose the operating model before choosing the framework",
    systems: ["team chat channels and task queues", "files, browser sessions, and operational records", "approval gates for customer, finance, or compliance actions", "developer-owned graph logic where state control is critical"],
    workflows: ["Run internal operator-style agents with human approvals.", "Build product-grade graph workflows where state routing must be explicit.", "Compare pilot complexity before committing to a framework.", "Map which actions need business review versus code-level orchestration."],
    guardrails: ["Do not pick LangGraph just because it is powerful if the team cannot maintain it.", "Do not pick OpenClaw if the real need is a deeply engineered product workflow.", "Keep data access scoped in either model.", "Define ownership for monitoring, logs, and rollback before the pilot."],
    metric: "Measure setup time, maintenance burden, approval quality, workflow reliability, and how quickly the team can improve the agent after real use.",
    category: "comparison",
  },
  "openclaw-vs-autogpt": {
    title: "OpenClaw vs AutoGPT",
    highlight: "Practical Comparison",
    badge: "AI Agent Tool Comparison 2026",
    description: "How OpenClaw compares with AutoGPT for teams that need reliable business workflows rather than open-ended autonomous experiments.",
    metaTitle: "OpenClaw vs AutoGPT: Business Agent Comparison",
    metaDescription: "Compare OpenClaw vs AutoGPT for business automation, reliability, approvals, tool access, monitoring, and practical AI agent implementation.",
    keywords: ["openclaw vs autogpt", "autogpt alternative", "ai agent tools comparison", "openclaw autogpt", "business ai agents"],
    audience: "teams evaluating autonomous agents for real business operations",
    fit: "OpenClaw is better suited to repeatable business workflows with scoped tools, memory, channel access, and human review. AutoGPT is more useful as an exploratory agent pattern or experiment where the goal is broad autonomous task execution.",
    firstMove: "separate experiments from operational workflows",
    systems: ["customer inboxes and internal task lists", "browser and file workflows", "approval logs and rollback notes", "experimental research tasks where autonomy is being tested"],
    workflows: ["Turn a business process into a reviewed agent workflow.", "Use AutoGPT-style experimentation to explore broad task ideas.", "Move proven experiments into guarded operational routines.", "Document what the agent may do, suggest, and never do."],
    guardrails: ["Avoid open-ended autonomy around customers, money, legal issues, or regulated data.", "Require approval for sends, updates, purchases, and deletions.", "Monitor repeated failures rather than trusting a single demo.", "Keep a written operating rule for each live workflow."],
    metric: "Measure completion quality, human correction rate, failed action count, time saved, and whether the agent reliably follows the operating rule.",
    category: "comparison",
  },
  "openclaw-vs-flowise": {
    title: "OpenClaw vs Flowise",
    highlight: "Agent Workflows",
    badge: "No-Code AI Workflow Comparison 2026",
    description: "A buyer-focused comparison of OpenClaw and Flowise for teams choosing between visual AI chains and operational agent workflows.",
    metaTitle: "OpenClaw vs Flowise: AI Workflow Tool Comparison",
    metaDescription: "Compare OpenClaw vs Flowise for AI workflows, no-code setup, agent operations, integrations, approvals, and business automation use cases.",
    keywords: ["openclaw vs flowise", "flowise alternative", "no code ai workflow", "ai workflow tools", "openclaw flowise"],
    audience: "teams comparing no-code AI workflow builders and agent operating systems",
    fit: "Flowise is useful for visual LLM chains, prototypes, retrieval flows, and chat interfaces. OpenClaw fits better when the agent must operate across tools, messages, files, browser work, scheduled tasks, and ongoing human approvals.",
    firstMove: "decide whether the need is a chain, a chatbot, or an operator",
    systems: ["knowledge bases and retrieval sources", "team inboxes, files, and task systems", "chat interfaces and internal command channels", "approval queues and live operating logs"],
    workflows: ["Prototype a knowledge assistant before operational rollout.", "Run a recurring agent workflow with scheduled checks.", "Connect approvals before customer-facing actions.", "Use visual flows where the path is predictable and agents where work is variable."],
    guardrails: ["Do not confuse a good demo flow with a maintained business process.", "Keep retrieval sources reviewed and current.", "Limit tool permissions during pilots.", "Assign a human owner for exceptions and failed runs."],
    metric: "Measure answer quality, exception volume, maintenance effort, approval speed, and how often the workflow needs human rescue.",
    category: "comparison",
  },
  "openclaw-vs-dify": {
    title: "OpenClaw vs Dify",
    highlight: "Business AI Apps",
    badge: "AI App Builder Comparison 2026",
    description: "A practical comparison of OpenClaw and Dify for teams choosing between AI app building and agent-led business operations.",
    metaTitle: "OpenClaw vs Dify: AI App Builder or Agent Workflow?",
    metaDescription: "Compare OpenClaw vs Dify for AI app building, agent workflows, knowledge apps, approvals, integrations, and business automation.",
    keywords: ["openclaw vs dify", "dify alternative", "ai app builder comparison", "ai agent workflow tool", "openclaw dify"],
    audience: "business and technical teams choosing an AI app or agent workflow platform",
    fit: "Dify is a strong fit for building AI applications, chatbots, and knowledge tools. OpenClaw is a better fit when the agent needs to work like an operator across communication channels, files, browser sessions, scheduled tasks, and reviewable actions.",
    firstMove: "decide whether users need an app interface or an operating agent",
    systems: ["knowledge apps and prompt workflows", "business inboxes, files, and browser tasks", "internal notifications and approval messages", "run logs, memory, and scheduled checks"],
    workflows: ["Build a controlled AI app for a defined user journey.", "Create an agent workflow that monitors, drafts, routes, and reports.", "Connect a knowledge app to a human approval process.", "Move from app responses to action workflows only when trust is proven."],
    guardrails: ["Do not let app-style responses create unapproved business actions.", "Keep sensitive data permissions narrow.", "Review claims, advice, and customer messaging before publishing.", "Document how the AI app or agent is monitored after launch."],
    metric: "Measure user adoption, output usefulness, approval time, error rate, and the operational value created after the tool leaves prototype stage.",
    category: "comparison",
  },
  "openclaw-mcp-server-guide": {
    title: "OpenClaw MCP Server",
    highlight: "Guide",
    badge: "Model Context Protocol Guide 2026",
    description: "How businesses should think about MCP servers for OpenClaw, including what to connect, what to restrict, and how to avoid unsafe tool access.",
    metaTitle: "OpenClaw MCP Server Guide: Safe Tool Access for Agents",
    metaDescription: "A practical OpenClaw MCP server guide covering tool access, permissions, integrations, business use cases, approval rules, and safe rollout.",
    keywords: ["openclaw mcp server", "openclaw mcp", "model context protocol openclaw", "mcp server for business", "ai agent tool access"],
    audience: "teams connecting OpenClaw to real business tools through MCP servers",
    fit: "MCP is useful when OpenClaw needs structured access to tools, data, or actions without hardcoding every integration. The value comes from giving the agent the right context and the right limits, not from exposing every tool at once.",
    firstMove: "connect one low-risk tool before expanding access",
    systems: ["documents, calendars, CRMs, and project tools", "internal databases and reporting sources", "browser and web search helpers", "approval systems, logs, and monitoring"],
    workflows: ["Expose a read-only reporting tool to answer operational questions.", "Let OpenClaw prepare CRM updates without writing automatically.", "Connect a file or document tool with folder-level limits.", "Build a review queue for tool calls that affect customers or money."],
    guardrails: ["Prefer read-only access for the first pilot.", "Separate harmless lookup tools from tools that mutate records.", "Log every tool call with source context.", "Require approval for sends, deletions, financial actions, and sensitive updates."],
    metric: "Measure useful tool-call rate, failed-call rate, avoided manual lookup time, approval volume, and whether logs are clear enough to audit.",
    category: "governance",
  },
  "openclaw-agent-permissions": {
    title: "OpenClaw Agent Permissions",
    highlight: "For Business",
    badge: "AI Agent Governance Guide 2026",
    description: "A practical permission model for OpenClaw agents covering read access, write access, approvals, secrets, data boundaries, and rollback.",
    metaTitle: "OpenClaw Agent Permissions: Safe Access Model for Business",
    metaDescription: "Plan OpenClaw agent permissions with scoped access, approval gates, read/write separation, secret handling, logs, and rollback rules.",
    keywords: ["openclaw agent permissions", "ai agent permissions", "openclaw security", "ai agent access control", "openclaw governance"],
    audience: "businesses preparing OpenClaw agents for real operational systems",
    fit: "Permissions should match the workflow, not the ambition of the project. A support triage agent does not need finance access. A finance draft agent does not need broad admin rights. Scope is the difference between useful automation and unnecessary risk.",
    firstMove: "write a simple permission matrix before connecting tools",
    systems: ["user accounts, API keys, and MCP tools", "CRM, finance, support, and document platforms", "approval channels and exception queues", "logs, backups, and rollback records"],
    workflows: ["Separate read-only, draft, write, and admin actions.", "Approve external messages before sending.", "Review record updates before the agent writes to core systems.", "Rotate credentials and remove unused permissions after pilots."],
    guardrails: ["Never use owner-level access when workflow-level access is enough.", "Keep secrets out of prompts, documents, and chat messages.", "Use separate credentials for separate workflows where possible.", "Remove access when a pilot ends or changes owner."],
    metric: "Measure over-permissioned tools, blocked risky actions, credential age, audit completeness, and how often human approval catches a bad action.",
    category: "governance",
  },
  "openclaw-approval-workflows": {
    title: "OpenClaw Approval Workflows",
    highlight: "Guide",
    badge: "Human Review Workflow Guide 2026",
    description: "How to design OpenClaw approval workflows so agents can draft, check, route, and report without silently taking risky action.",
    metaTitle: "OpenClaw Approval Workflows: Human Review for AI Agents",
    metaDescription: "Design OpenClaw approval workflows for customer messages, CRM updates, finance actions, compliance tasks, and safe agent rollout.",
    keywords: ["openclaw approval workflow", "ai agent approval workflow", "human review ai agents", "openclaw human in the loop", "ai workflow approvals"],
    audience: "teams building OpenClaw workflows that need human sign-off",
    fit: "Approval workflows are essential when the agent touches customer trust, money, legal obligations, HR, healthcare, data privacy, or public content. The agent can still create leverage, but the final action remains visible and owned.",
    firstMove: "classify each action as auto, review, or never",
    systems: ["chat channels for approval requests", "CRM and support updates", "finance, booking, and document workflows", "audit logs and exception reports"],
    workflows: ["Draft a customer reply and ask the owner to approve.", "Prepare a CRM update with source evidence attached.", "Route sensitive cases to a named person.", "Summarise rejected approvals so the workflow improves."],
    guardrails: ["Keep approval prompts short and specific.", "Show the source evidence behind the suggested action.", "Make reject and edit options as easy as approve.", "Never hide who approved a live action."],
    metric: "Measure approval speed, edit rate, rejection reasons, escaped errors, and the number of risky actions prevented before launch.",
    category: "governance",
  },
  "ai-agent-monitoring-uk": {
    title: "AI Agent Monitoring",
    highlight: "For UK Businesses",
    badge: "AI Operations Guide 2026",
    description: "A practical guide to monitoring AI agents after launch, including failures, drift, approvals, logs, business metrics, and support ownership.",
    metaTitle: "AI Agent Monitoring UK: Logs, Failures and Governance",
    metaDescription: "Learn how UK businesses should monitor AI agents with logs, failure alerts, approval metrics, drift checks, data controls, and support ownership.",
    keywords: ["ai agent monitoring uk", "monitor ai agents", "ai agent logs", "ai agent governance uk", "openclaw monitoring"],
    audience: "UK businesses running AI agents in live workflows",
    fit: "Monitoring is what turns a promising AI workflow into an operated service. It shows whether the agent is saving time, causing rework, drifting from policy, or quietly failing in the background.",
    firstMove: "monitor one workflow before scaling to more teams",
    systems: ["run logs and tool-call logs", "approval decisions and reviewer edits", "business KPIs such as response time or backlog age", "error alerts, owner notifications, and review notes"],
    workflows: ["Track failed runs and repeated tool errors.", "Review approval edits to identify weak prompts or bad rules.", "Alert an owner when the agent cannot complete a task.", "Create weekly summaries of value, risk, and improvement items."],
    guardrails: ["Do not rely on the agent to self-report success without external checks.", "Keep sensitive logs access-controlled.", "Review failures by workflow owner, not just by developer.", "Pause automation when drift or repeated errors appear."],
    metric: "Measure failure rate, human edit rate, time saved, unresolved exceptions, customer impact, and how quickly fixes are applied.",
    category: "governance",
  },
  "ai-agent-human-in-the-loop": {
    title: "Human-in-the-Loop AI Agents",
    highlight: "Business Guide",
    badge: "AI Governance Guide 2026",
    description: "How to design human-in-the-loop AI agent workflows that move faster without removing accountability from important decisions.",
    metaTitle: "Human-in-the-Loop AI Agents: Practical Business Guide",
    metaDescription: "Design human-in-the-loop AI agent workflows for approvals, risk control, customer trust, compliance, and practical business automation.",
    keywords: ["human in the loop ai agents", "human review ai workflows", "ai agent governance", "human approval ai", "ai agent risk control"],
    audience: "businesses that want AI speed without losing control of important decisions",
    fit: "Human-in-the-loop design works when the agent can gather context, draft work, check rules, and propose actions while people approve decisions with downside. It is especially valuable in sales, support, finance, HR, legal, healthcare, and public communications.",
    firstMove: "put people at the points of risk, not at every tiny step",
    systems: ["approval channels and reviewer queues", "customer communication tools", "records that need accurate updates", "logs that show who approved what and why"],
    workflows: ["Let the agent prepare replies while people approve final sends.", "Let the agent extract details while people approve record changes.", "Let the agent flag exceptions rather than acting on them automatically.", "Use reviewer edits as training signal for better operating rules."],
    guardrails: ["Do not overload reviewers with low-value approvals.", "Make approval criteria clear before launch.", "Keep high-risk actions manual until evidence supports automation.", "Record the decision trail for sensitive workflows."],
    metric: "Measure approval load, escaped errors, time saved before approval, reviewer edits, and confidence to automate lower-risk steps later.",
    category: "governance",
  },
  "ai-agent-implementation-plan-uk": {
    title: "AI Agent Implementation Plan",
    highlight: "UK Guide",
    badge: "AI Rollout Planning Guide 2026",
    description: "A step-by-step implementation plan for UK businesses rolling out AI agents across one workflow, from audit to pilot, approvals, monitoring, and scale.",
    metaTitle: "AI Agent Implementation Plan UK: Pilot to Rollout",
    metaDescription: "A practical AI agent implementation plan for UK businesses covering workflow selection, pilots, approvals, monitoring, data protection, and rollout.",
    keywords: ["ai agent implementation plan uk", "implement ai agents", "ai agent rollout plan", "ai automation implementation uk", "openclaw implementation plan"],
    audience: "UK businesses moving from AI interest to a live agent pilot",
    fit: "A good implementation plan starts with one business workflow, one owner, one data boundary, one approval model, and one metric. It avoids the trap of trying to transform every team before the first workflow has proven value.",
    firstMove: "pick the workflow with the clearest pain and lowest unsafe downside",
    systems: ["workflow maps and process notes", "data sources and integration points", "approval, monitoring, and support channels", "pilot metrics and rollout decision records"],
    workflows: ["Audit candidate workflows for frequency, risk, and measurable value.", "Build a narrow pilot with draft-first behaviour.", "Run monitored approvals before live writes.", "Decide whether to scale, pause, or rebuild based on evidence."],
    guardrails: ["Do not start with the most sensitive workflow.", "Do not skip ownership, approval, or monitoring because the demo looks good.", "Keep data protection and access control in the plan from day one.", "Document what changes when the pilot becomes live operations."],
    metric: "Measure time saved, delay reduced, errors avoided, approval quality, support demand, and commercial confidence to expand the agent responsibly.",
    category: "implementation",
  },
};

function list(items: string[]) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function categoryText(category: BlastGuide["category"]) {
  if (category === "comparison") return "The useful comparison is not which tool sounds more advanced. It is which tool fits the work, the team, and the risk profile.";
  if (category === "implementation") return "Implementation works best when the first agent proves value in a real workflow before the business scales access or spend.";
  return "Governance should make the workflow faster and safer at the same time. It is there to make useful automation easier to trust.";
}

export function getSeoBlastMetadata(slug: string): Metadata {
  const guide = guides[slug];
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: guide.keywords,
    alternates: { canonical: `https://openclawconsultant.co.uk/guides/${slug}` },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `https://openclawconsultant.co.uk/guides/${slug}`,
      type: "article",
    },
  };
}

export function SeoBlastGuidePage({ slug }: { slug: string }) {
  const guide = guides[slug];

  return (
    <GuidePageTemplate
      canonicalPath={`/guides/${slug}`}
      badge={guide.badge}
      title={guide.title}
      highlight={guide.highlight}
      description={guide.description}
      primaryCtaLabel="Read the guide"
      primaryCtaHref="#guide"
      secondaryCtaLabel="Plan this properly"
      secondaryCtaHref="#assessment"
      stats={[
        { value: "1 workflow", label: "Start with the process you can measure" },
        { value: "Clear owner", label: "Make support and approval visible" },
        { value: "Scoped risk", label: "Expand only after evidence" },
      ]}
      sections={[
        {
          id: "fit",
          title: "Where this fits",
          html: `<p>${guide.fit}</p><p>For ${guide.audience}, the first move is to ${guide.firstMove}. That keeps the decision grounded in operating reality instead of tool hype.</p>`,
        },
        {
          id: "systems",
          title: "Systems to map first",
          html: `<p>Before choosing or building the workflow, map the systems, permissions, and review points involved:</p><ul>${list(guide.systems)}</ul><p>This stops the project drifting from a practical pilot into a broad, fragile implementation.</p>`,
        },
        {
          id: "workflows",
          title: "Useful workflows to test",
          html: `<p>These are sensible candidates for a focused first pass:</p><ul>${list(guide.workflows)}</ul><p>Each workflow should have a named owner, a clear trigger, and an obvious definition of success.</p>`,
        },
        {
          id: "guardrails",
          title: "Guardrails and review rules",
          html: `<p>The important question is not whether an agent can take action. It is which actions should be automatic, which should be reviewed, and which should stay human-owned.</p><ul>${list(guide.guardrails)}</ul><p>Related reading: <a href="/guides/openclaw-agent-permissions">OpenClaw Agent Permissions</a>, <a href="/guides/openclaw-approval-workflows">OpenClaw Approval Workflows</a>, and <a href="/guides/ai-agent-monitoring-uk">AI Agent Monitoring UK</a>.</p>`,
        },
        {
          id: "measurement",
          title: "How to measure the decision",
          html: `<p>${guide.metric}</p><p>If the numbers do not improve, tighten the workflow before adding more tools, integrations, or autonomy.</p>`,
        },
      ]}
      faqs={[
        { question: "Is this suitable for a first AI agent project?", answer: "Yes, if the workflow is narrow, frequent, measurable, and has a clear owner. Avoid starting with the highest-risk process in the business." },
        { question: "Should the agent act automatically?", answer: "Start with drafts, checks, summaries, and suggested updates. Automatic actions should come later after quality, approvals, logging, and rollback are proven." },
        { question: "What should be reviewed by a human?", answer: "Customer messages, financial actions, legal or HR matters, public content, sensitive data decisions, deletions, and material record updates should usually be reviewed first." },
        { question: "How does Blue Canvas help?", answer: "Blue Canvas can map the workflow, define permissions, build the first OpenClaw pilot, add approval gates, and monitor whether the agent is genuinely creating value." },
      ]}
      relatedGuides={commonRelatedGuides}
      sidebarTitle="Decision rule"
      sidebarPoints={[
        "Pick the workflow before picking extra tools.",
        "Keep risky actions reviewed until evidence supports automation.",
        "Measure operational improvement, not demo impressiveness.",
      ]}
      assessmentDescription="Blue Canvas can review the workflow, identify the safest first agent use case, and build a practical OpenClaw rollout plan with permissions, approvals, and monitoring included."
      contactTitle="Book an OpenClaw workflow review"
      contactDescription="Tell us what process you want the agent to improve"
      practicalTakeawayTitle="Practical takeaway"
      practicalTakeawayText={categoryText(guide.category)}
    />
  );
}
