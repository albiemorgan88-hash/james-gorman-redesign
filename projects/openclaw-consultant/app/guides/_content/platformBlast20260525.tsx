import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

type PlatformGuide = {
  title: string; highlight: string; badge: string; description: string; metaTitle: string; metaDescription: string; keywords: string[]; platform: string; buyer: string; first: string; systems: string[]; workflows: string[]; guardrails: string[]; metric: string;
};

const commonRelatedGuides = [
  {
    "href": "/guides/openclaw-integrations-guide",
    "title": "OpenClaw Integrations Guide"
  },
  {
    "href": "/guides/openclaw-business-systems-integration",
    "title": "OpenClaw Business Systems Integration"
  },
  {
    "href": "/guides/openclaw-security-best-practices",
    "title": "OpenClaw Security Best Practices"
  },
  {
    "href": "/guides/openclaw-implementation-consultant-uk",
    "title": "OpenClaw Implementation Consultant UK"
  }
];

const guides: Record<string, PlatformGuide> = {
  "openclaw-google-workspace-automation": {
    "title": "OpenClaw Google Workspace",
    "highlight": "Automation",
    "badge": "Google Workspace Workflow Guide 2026",
    "description": "How UK teams can connect OpenClaw to Gmail, Google Drive, Docs, Sheets, and Calendar workflows without losing approval control.",
    "metaTitle": "OpenClaw Google Workspace Automation: Gmail, Drive and Calendar",
    "metaDescription": "A practical guide to OpenClaw Google Workspace automation for Gmail triage, Drive documents, Sheets updates, Calendar reminders, and approval-safe workflows.",
    "keywords": [
      "openclaw google workspace automation",
      "openclaw gmail automation",
      "google workspace ai agent",
      "gmail workflow automation uk",
      "openclaw calendar automation"
    ],
    "platform": "Google Workspace",
    "buyer": "Google Workspace teams",
    "first": "Gmail triage and follow-up drafting",
    "systems": [
      "Gmail inboxes and shared mailboxes",
      "Google Drive folders and document handoffs",
      "Google Sheets trackers and lightweight operations logs",
      "Google Calendar reminders, follow-ups, and meeting prep"
    ],
    "workflows": [
      "Summarise new Gmail threads and identify the required next action.",
      "Draft replies for enquiries, support requests, supplier updates, or internal approvals.",
      "Watch Drive folders for missing files and prepare reminder notes.",
      "Update a Sheets tracker after a human approves the extracted details.",
      "Prepare calendar briefings from email context, documents, and previous notes."
    ],
    "guardrails": [
      "Start in draft-only mode for external emails.",
      "Restrict Drive access to the folders the workflow actually needs.",
      "Keep deletions, external sends, calendar changes, and sensitive customer messages human-approved.",
      "Log source links so every summary can be traced back to the original email or document."
    ],
    "metric": "Measure inbox response time, missed follow-ups, manual copy-paste into Sheets, time spent finding documents, and human edit rate on drafted replies."
  },
  "openclaw-microsoft-365-automation": {
    "title": "OpenClaw Microsoft 365",
    "highlight": "Automation",
    "badge": "Microsoft 365 Workflow Guide 2026",
    "description": "How teams can use OpenClaw across Outlook, SharePoint, OneDrive, Excel, Teams, and Planner with clear human approval gates.",
    "metaTitle": "OpenClaw Microsoft 365 Automation: Outlook, Teams and SharePoint",
    "metaDescription": "A practical guide to OpenClaw Microsoft 365 automation for Outlook, SharePoint, OneDrive, Excel, Teams, Planner, and approval-safe workflows.",
    "keywords": [
      "openclaw microsoft 365 automation",
      "openclaw outlook automation",
      "teams ai workflow",
      "sharepoint automation ai",
      "microsoft 365 ai agent"
    ],
    "platform": "Microsoft 365",
    "buyer": "Microsoft 365 teams",
    "first": "Outlook triage and Teams handoff preparation",
    "systems": [
      "Outlook inboxes and shared mailboxes",
      "SharePoint and OneDrive document libraries",
      "Excel trackers and operational workbooks",
      "Teams channels, meeting notes, and Planner task lists"
    ],
    "workflows": [
      "Summarise Outlook threads and prepare response drafts.",
      "Turn Teams meeting notes into decisions, blockers, and owner actions.",
      "Check SharePoint libraries for missing policy, supplier, or project documents.",
      "Prepare Excel update drafts from approved source information.",
      "Create Planner task suggestions after a manager reviews the output."
    ],
    "guardrails": [
      "Do not allow automatic external sends until the workflow is proven.",
      "Limit SharePoint and OneDrive permissions to specific libraries.",
      "Keep HR, finance, legal, complaints, and client commitments human-owned.",
      "Use clear logs for any task creation, file movement, or record update."
    ],
    "metric": "Measure response speed, meeting action completion, document-chasing time, duplicated updates, and reviewer edits on OpenClaw drafts."
  },
  "openclaw-wordpress-automation": {
    "title": "OpenClaw WordPress",
    "highlight": "Automation",
    "badge": "WordPress Workflow Guide 2026",
    "description": "How OpenClaw can support WordPress content operations, form enquiries, draft updates, SEO checks, and moderation without risky unattended publishing.",
    "metaTitle": "OpenClaw WordPress Automation: Forms, Content and SEO Checks",
    "metaDescription": "A practical guide to OpenClaw WordPress automation for form triage, content drafts, SEO checks, moderation, plugin-safe workflows, and approval rules.",
    "keywords": [
      "openclaw wordpress automation",
      "wordpress ai automation",
      "openclaw wordpress forms",
      "wordpress content workflow ai",
      "wordpress seo automation"
    ],
    "platform": "WordPress",
    "buyer": "WordPress site owners",
    "first": "form enquiry triage and content-draft preparation",
    "systems": [
      "Contact forms, quote forms, and booking forms",
      "WordPress posts, pages, drafts, and media workflows",
      "SEO metadata, internal links, and content QA",
      "Moderation queues, support requests, and plugin-generated notifications"
    ],
    "workflows": [
      "Summarise form submissions and prepare CRM-ready notes.",
      "Draft blog updates, FAQs, landing-page sections, or meta descriptions for approval.",
      "Check published pages for missing titles, descriptions, broken links, or thin sections.",
      "Prepare internal-link recommendations between related WordPress pages.",
      "Route urgent enquiries or website issues to the right person."
    ],
    "guardrails": [
      "Avoid unattended publishing unless there is explicit approval and rollback logic.",
      "Treat admin credentials and plugin permissions as high-risk.",
      "Keep claims, prices, medical/legal/financial statements, and customer replies reviewed.",
      "Test changes in staging or draft mode before touching live pages."
    ],
    "metric": "Measure enquiry response speed, content preparation time, SEO issue count, internal-link coverage, and rework after editorial review."
  },
  "openclaw-webflow-automation": {
    "title": "OpenClaw Webflow",
    "highlight": "Automation",
    "badge": "Webflow Workflow Guide 2026",
    "description": "How OpenClaw can support Webflow CMS updates, SEO QA, landing-page drafts, and site-health checks while keeping publishing controlled.",
    "metaTitle": "OpenClaw Webflow Automation: CMS, SEO and Publishing Workflows",
    "metaDescription": "A practical guide to OpenClaw Webflow automation for CMS drafts, SEO checks, landing pages, broken links, content QA, and safe publishing workflows.",
    "keywords": [
      "openclaw webflow automation",
      "webflow cms automation",
      "webflow seo automation",
      "openclaw webflow cms",
      "ai webflow workflow"
    ],
    "platform": "Webflow",
    "buyer": "Webflow site owners",
    "first": "CMS draft preparation and SEO QA",
    "systems": [
      "Webflow CMS collections, item drafts, and field updates",
      "Static page metadata, titles, descriptions, and canonical logic",
      "Sitemaps, internal links, redirects, and live-page checks",
      "Landing-page copy, schema, and publishing checklists"
    ],
    "workflows": [
      "Create CMS draft items from approved content briefs.",
      "Flag missing or overlong SEO titles and meta descriptions.",
      "Find broken internal links before or after publishing.",
      "Prepare landing-page sections and FAQ blocks for review.",
      "Generate live verification reports after a Webflow publish."
    ],
    "guardrails": [
      "Separate staging from live publishing unless the owner has approved direct deploys.",
      "Never overwrite CMS fields without a preview or backup report.",
      "Keep commercial claims, client names, and contact forms checked before publishing.",
      "Run live URL checks after changes to confirm the site actually reflects the update."
    ],
    "metric": "Measure time spent preparing CMS items, SEO defects found before publish, broken links avoided, publish QA time, and live page pass rate."
  },
  "openclaw-wix-automation": {
    "title": "OpenClaw Wix",
    "highlight": "Automation",
    "badge": "Wix Workflow Guide 2026",
    "description": "How OpenClaw can support Wix blog drafts, SEO housekeeping, enquiry triage, and content workflows for small business sites.",
    "metaTitle": "OpenClaw Wix Automation: Blog Drafts, SEO and Enquiries",
    "metaDescription": "A practical guide to OpenClaw Wix automation for blog drafts, SEO metadata, internal links, form enquiries, content QA, and small business workflows.",
    "keywords": [
      "openclaw wix automation",
      "wix ai automation",
      "wix blog automation",
      "wix seo workflow",
      "openclaw wix forms"
    ],
    "platform": "Wix",
    "buyer": "Wix site owners",
    "first": "blog draft and enquiry-triage support",
    "systems": [
      "Wix blog posts, drafts, categories, and SEO fields",
      "Contact forms, enquiry notifications, and booking requests",
      "Service pages, internal links, and local SEO content",
      "Content calendars, update checklists, and live QA reports"
    ],
    "workflows": [
      "Prepare Wix blog drafts from a keyword or service brief.",
      "Draft meta titles and descriptions for existing pages.",
      "Summarise enquiries and prepare follow-up messages.",
      "Find thin service pages that need clearer commercial copy.",
      "Check live pages for missing metadata or broken internal links."
    ],
    "guardrails": [
      "Use draft mode and review before publishing.",
      "Do not send enquiry replies without owner approval during rollout.",
      "Keep login/session access scoped and protected.",
      "Avoid mass edits that cannot be easily checked or rolled back."
    ],
    "metric": "Measure draft creation speed, metadata issue reduction, enquiry response time, page QA pass rate, and human edit time."
  },
  "openclaw-airtable-automation": {
    "title": "OpenClaw Airtable",
    "highlight": "Automation",
    "badge": "Airtable Workflow Guide 2026",
    "description": "How OpenClaw can work with Airtable bases for CRM notes, operations trackers, content pipelines, approvals, and reporting workflows.",
    "metaTitle": "OpenClaw Airtable Automation: CRM, Trackers and Approvals",
    "metaDescription": "A practical guide to OpenClaw Airtable automation for CRM records, operations trackers, content pipelines, approvals, reporting, and safe update rules.",
    "keywords": [
      "openclaw airtable automation",
      "airtable ai workflow",
      "airtable crm automation",
      "openclaw operations tracker",
      "airtable approval workflow"
    ],
    "platform": "Airtable",
    "buyer": "Airtable operators",
    "first": "record summarisation and approval-ready updates",
    "systems": [
      "CRM bases, lead records, and sales notes",
      "Operations trackers, task tables, and status fields",
      "Content calendars, approval queues, and asset records",
      "Reporting views, exception lists, and owner dashboards"
    ],
    "workflows": [
      "Summarise new records and identify missing fields.",
      "Draft Airtable updates from emails, forms, or meeting notes.",
      "Create exception lists for stale opportunities, late tasks, or missing approvals.",
      "Prepare content-pipeline records from approved briefs.",
      "Generate weekly status summaries from selected views."
    ],
    "guardrails": [
      "Start with suggested updates before allowing automatic writes.",
      "Restrict base and table access to the workflow scope.",
      "Protect deletions, status changes with external consequences, and finance fields.",
      "Keep a change log so updates can be reviewed and reversed."
    ],
    "metric": "Measure record completeness, manual update time, stale-task reduction, pipeline visibility, and correction rate after suggested updates."
  },
  "openclaw-notion-automation": {
    "title": "OpenClaw Notion",
    "highlight": "Automation",
    "badge": "Notion Workflow Guide 2026",
    "description": "How OpenClaw can turn Notion into a more useful operations workspace with briefs, decisions, task routing, meeting notes, and knowledge-base upkeep.",
    "metaTitle": "OpenClaw Notion Automation: Tasks, Notes and Knowledge Bases",
    "metaDescription": "A practical guide to OpenClaw Notion automation for meeting notes, task routing, briefs, knowledge bases, project updates, and approval-safe workflows.",
    "keywords": [
      "openclaw notion automation",
      "notion ai workflow",
      "notion task automation",
      "openclaw knowledge base",
      "notion meeting notes automation"
    ],
    "platform": "Notion",
    "buyer": "Notion workspaces",
    "first": "meeting-note to task and decision workflow",
    "systems": [
      "Notion project databases, task boards, and operating docs",
      "Meeting notes, decisions, and action registers",
      "Knowledge-base pages, SOPs, and internal FAQs",
      "Content calendars, project briefs, and client workspaces"
    ],
    "workflows": [
      "Turn meeting notes into decisions, actions, owners, and deadlines.",
      "Update project pages from approved status summaries.",
      "Find stale SOPs or knowledge-base pages that need review.",
      "Draft new internal FAQ entries from repeated questions.",
      "Prepare weekly workspace summaries for managers."
    ],
    "guardrails": [
      "Do not let an agent rewrite source-of-truth pages without review.",
      "Protect client spaces, HR notes, strategy docs, and financial records with scoped access.",
      "Keep task creation visible so owners know what changed.",
      "Use human approval for external or client-facing outputs."
    ],
    "metric": "Measure meeting follow-through, stale pages, task ownership clarity, internal search time, and edits required on AI-prepared summaries."
  },
  "openclaw-slack-automation": {
    "title": "OpenClaw Slack",
    "highlight": "Automation",
    "badge": "Slack Workflow Guide 2026",
    "description": "How OpenClaw can monitor Slack channels, summarise decisions, create follow-ups, and reduce missed handoffs without becoming noisy.",
    "metaTitle": "OpenClaw Slack Automation: Summaries, Follow-Ups and Alerts",
    "metaDescription": "A practical guide to OpenClaw Slack automation for channel summaries, decision logs, follow-ups, alerts, support triage, and low-noise approval workflows.",
    "keywords": [
      "openclaw slack automation",
      "slack ai workflow",
      "slack channel summary automation",
      "openclaw team alerts",
      "slack follow up automation"
    ],
    "platform": "Slack",
    "buyer": "Slack teams",
    "first": "channel summary and follow-up capture",
    "systems": [
      "Team channels, project channels, support channels, and alert channels",
      "Decision threads, blockers, handoffs, and owner mentions",
      "Standup updates, release notes, and client-support escalation points",
      "Task tools, CRMs, knowledge bases, and reporting destinations"
    ],
    "workflows": [
      "Summarise busy channels into decisions, blockers, and next actions.",
      "Detect unresolved questions and prepare follow-up reminders.",
      "Route support or sales messages to the right owner.",
      "Create draft task updates from approved Slack conversations.",
      "Prepare daily or weekly digest notes without flooding the team."
    ],
    "guardrails": [
      "Avoid noisy bots that post too often or mention people unnecessarily.",
      "Keep private channels, HR issues, complaints, and commercial commitments controlled.",
      "Start with summaries to a private review destination before public channel posting.",
      "Log what source messages informed each summary or task."
    ],
    "metric": "Measure missed follow-ups, time spent catching up, unresolved questions, task creation accuracy, and whether teams mute or keep using the workflow."
  }
};

function list(items: string[]) { return items.map((item) => `<li>${item}</li>`).join(""); }

export function getPlatformBlastMetadata(slug: string): Metadata {
  const guide = guides[slug];
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: guide.keywords,
    alternates: { canonical: `https://openclawconsultant.co.uk/guides/${slug}` },
    openGraph: { title: guide.metaTitle, description: guide.metaDescription, url: `https://openclawconsultant.co.uk/guides/${slug}`, type: "article" },
  };
}

export function PlatformBlastGuidePage({ slug }: { slug: string }) {
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
      secondaryCtaLabel="Plan this workflow"
      secondaryCtaHref="#assessment"
      stats={[{ value: "1 workflow", label: "Start with a controlled pilot" }, { value: "Scoped access", label: "Only connect what is needed" }, { value: "Approval first", label: "Prove quality before automation" }]}
      sections={[
        { id: "fit", title: `Where OpenClaw fits ${guide.platform}`, html: `<p>${guide.buyer} usually have the same practical problem: useful work is split between messages, files, trackers, calendars, and people. OpenClaw is valuable when it joins those handoffs without turning the platform into an uncontrolled black box.</p><p>A good first project is ${guide.first}. It is narrow enough to inspect, frequent enough to measure, and useful enough that the team can feel the difference quickly.</p>` },
        { id: "systems", title: "Systems and handoffs to map", html: `<p>Before building anything, map the exact places OpenClaw needs to read from, write to, or prepare work for review. For ${guide.platform}, the common touchpoints are:</p><ul>${list(guide.systems)}</ul><p>The point is not to connect every possible integration on day one. The point is to connect the minimum path that removes a real operational drag.</p>` },
        { id: "workflows", title: "Useful workflows to test", html: `<p>These are practical candidates for a first pilot:</p><ul>${list(guide.workflows)}</ul><p>Each workflow should have an owner, a review rule, and one success metric before it goes live.</p>` },
        { id: "guardrails", title: "Approval and security guardrails", html: `<p>Platform automation becomes risky when permissions are broad and outcomes are vague. Keep the first version constrained:</p><ul>${list(guide.guardrails)}</ul><p>For most small teams, the strongest setup is assisted automation first: OpenClaw prepares, checks, drafts, routes, or reminds, while people approve actions that affect customers, money, compliance, or trust.</p>` },
        { id: "measurement", title: "How to measure value", html: `<p>${guide.metric}</p><p>If the workflow creates more activity but does not reduce delay, errors, rework, or missed handoffs, tighten the process before adding more integrations. Related reading: <a href="/guides/openclaw-integrations-guide">OpenClaw Integrations Guide</a>, <a href="/guides/openclaw-security-best-practices">OpenClaw Security Best Practices</a>, and <a href="/guides/openclaw-implementation-consultant-uk">OpenClaw Implementation Consultant UK</a>.</p>` },
      ]}
      faqs={[{ question: `Can OpenClaw automate ${guide.platform}?`, answer: `Yes, if the workflow is scoped around specific handoffs, permissions, and review rules. ${guide.first} is a sensible first candidate.` }, { question: "Should actions run automatically?", answer: "Start with summaries, drafts, suggested updates, or review queues. Automatic writes should come later, after the workflow is stable and logged." }, { question: "What access should OpenClaw get?", answer: "Only the accounts, folders, channels, tables, or pages needed for the workflow. Avoid broad admin permissions for early pilots." }, { question: "How long does a pilot take?", answer: "A narrow workflow can usually show signal in a few weeks if it happens often enough and one person owns review." }]}
      relatedGuides={commonRelatedGuides}
      sidebarTitle={`${guide.platform} rollout rule`}
      sidebarPoints={["Connect the smallest useful workflow first.", "Keep external sends, deletions, and sensitive updates approved.", "Measure delay reduced, not just activity created."]}
      assessmentDescription={`Blue Canvas can map your ${guide.platform} workflow, define the access rules, and build an OpenClaw pilot with clear approvals and measurable outcomes.`}
      contactTitle={`Book a ${guide.platform} automation review`}
      contactDescription="Tell us what platform workflow is slow, repetitive, or easy to drop"
      practicalTakeawayText={`${guide.platform} automation works best when OpenClaw removes handoff drag without hiding responsibility. Start narrow, keep approval visible, and expand only after the pilot proves value.`}
    />
  );
}
