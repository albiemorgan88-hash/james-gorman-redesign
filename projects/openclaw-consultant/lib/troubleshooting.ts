// Troubleshooting hub data. ARTICLE STUBS: outline structure only.
// Fix steps marked TODO_OWNER must be written from Phil's real incident
// notes before these pages are indexed. Where an in-repo incident note
// exists it is cited in `sources` (workspace-relative paths, for the
// owner's reference only — never rendered on the page).

export const TODO_OWNER = "TODO-OWNER: fix steps to be written from real incident notes. Do not publish invented steps.";

export interface TroubleshootingCategory {
  slug: string;
  title: string;
  description: string;
}

export interface TroubleshootingArticle {
  slug: string;
  category: string;
  title: string;
  metaDescription: string;
  symptom: string[];
  cause: string[] | typeof TODO_OWNER;
  fixSteps: string[] | typeof TODO_OWNER;
  whenToGetHelp: string;
  datePublished: string;
  dateModified: string;
  /** Workspace-relative incident notes this outline was drafted from. NOT rendered. */
  sources: string[];
}

export const AUTHOR = {
  name: "Phil Patterson",
  jobTitle: "Founder",
  organisation: "Blue Canvas AI",
} as const;

export const categories: TroubleshootingCategory[] = [
  {
    slug: "connectivity",
    title: "Connectivity & Gateway",
    description: "Gateway startup failures, dropped connections, and channel pairing problems.",
  },
  {
    slug: "auth-and-access",
    title: "Authentication & Access",
    description: "OAuth token expiry, credential problems, and sandbox configurations that remove tool access.",
  },
  {
    slug: "platform",
    title: "Platform & Dependencies",
    description: "Model routing, container runtimes, and breakage after updates.",
  },
  {
    slug: "performance",
    title: "Performance & Scheduling",
    description: "Memory pressure in multi-agent setups and scheduled jobs that do not run.",
  },
  {
    slug: "memory-and-identity",
    title: "Memory & Identity",
    description: "Agent memory files, identity files, and persistence problems.",
  },
];

export const articles: TroubleshootingArticle[] = [
  {
    slug: "gateway-connection-failures",
    category: "connectivity",
    title: "OpenClaw Gateway Connection Failures",
    metaDescription:
      "Troubleshooting OpenClaw gateway connection failures: token mismatches, restart procedure, proxy header warnings, and when to get help.",
    symptom: [
      "Channels stop receiving or sending messages even though the agent process appears to be running.",
      "Gateway logs show token mismatch errors after a credential change.",
      "Doctor/status output reports warnings such as untrusted reverse-proxy headers.",
    ],
    cause: [
      "Gateway auth token out of sync between the gateway and connected clients after rotation.",
      "Gateway bound to loopback with empty trustedProxies while being exposed through a reverse proxy.",
    ],
    fixSteps: TODO_OWNER,
    whenToGetHelp:
      "If a gateway restart does not restore the connection, or the failure repeats after every credential rotation, the configuration needs a proper review.",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    sources: ["memory/2026-02-17.md", "memory/2026-03-07.md", "memory/2026-03-15.md"],
  },
  {
    slug: "oauth-token-expiry",
    category: "auth-and-access",
    title: "OAuth Token Expiry in OpenClaw Integrations",
    metaDescription:
      "What to do when OpenClaw integrations stop working because OAuth tokens have expired: recognising the failure, re-auth flow, and prevention.",
    symptom: [
      "Integrations (Google Search Console, Google Ads, model provider) silently stop returning data or fail with HTTP 400/401 on refresh.",
      "Scheduled jobs that depend on an integration start failing while everything else works.",
    ],
    cause: [
      "Refresh token expired or revoked, so the refresh flow fails rather than the original grant.",
      "Token stored with missing scopes for the API being called.",
    ],
    fixSteps: TODO_OWNER,
    whenToGetHelp:
      "If re-authentication has to be repeated more than once a month, the token storage or scope setup is wrong and worth fixing properly.",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    sources: ["MISTAKES.md", "memory/2026-04-03.md", "memory/2026-03-06.md"],
  },
  {
    slug: "model-routing-misconfiguration",
    category: "platform",
    title: "Model Routing Misconfiguration",
    metaDescription:
      "Diagnosing OpenClaw model routing problems: requests going to the wrong model, unexpected costs, and degraded answers after config changes.",
    symptom: [
      "Responses suddenly look lower quality, slower, or far more expensive than expected.",
      "Different channels or subagents behave inconsistently for the same prompt.",
    ],
    cause: TODO_OWNER,
    fixSteps: TODO_OWNER,
    whenToGetHelp:
      "If you cannot tell which model each agent is actually using, get the routing audited before costs accumulate.",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    sources: [],
  },
  {
    slug: "docker-colima-dependency-issues",
    category: "platform",
    title: "Docker and Colima Dependency Issues on macOS",
    metaDescription:
      "Fixing OpenClaw container runtime problems on macOS: Docker/Colima not running, socket errors, and containers failing to start.",
    symptom: [
      "Agent containers fail to start with socket or daemon-not-running errors.",
      "Everything worked until a macOS restart or runtime update, then containers stopped launching.",
    ],
    cause: TODO_OWNER,
    fixSteps: TODO_OWNER,
    whenToGetHelp:
      "If the runtime needs manual nursing after every reboot, the launchd/service setup should be fixed once rather than patched daily.",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    sources: [],
  },
  {
    slug: "sandbox-config-removes-tool-access",
    category: "auth-and-access",
    title: "Sandbox Configuration Removing Tool Access",
    metaDescription:
      "When OpenClaw sandbox settings silently remove network or runtime access: failed API calls, missing HTTP clients, and how to scope sandboxes correctly.",
    symptom: [
      "Agents report that external APIs are unreachable while the same call works from a normal shell.",
      "Tasks fail because the sandbox lacks expected runtimes or an HTTP client.",
    ],
    cause: [
      "Sandbox profile blocks outbound network access to required APIs.",
      "Sandbox image or profile does not include the runtimes the task assumes.",
    ],
    fixSteps: TODO_OWNER,
    whenToGetHelp:
      "If loosening the sandbox feels like the only fix, get the profile reviewed instead — removing isolation to make a task pass is how incidents start.",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    sources: ["memory/2026-04-22.md"],
  },
  {
    slug: "agent-memory-identity-file-problems",
    category: "memory-and-identity",
    title: "Agent Memory and Identity File Problems",
    metaDescription:
      "Troubleshooting OpenClaw agent memory and identity files: lost context, corrupted memory, and identity files that stop loading.",
    symptom: [
      "The agent forgets standing instructions or recent context it previously retained.",
      "Identity or memory files fail to load after an edit or sync.",
    ],
    cause: TODO_OWNER,
    fixSteps: TODO_OWNER,
    whenToGetHelp:
      "If memory loss repeats or identity files keep drifting, the persistence setup needs review before important context is lost for good.",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    sources: [],
  },
  {
    slug: "ram-pressure-multi-agent",
    category: "performance",
    title: "RAM Pressure in Multi-Agent Setups",
    metaDescription:
      "Diagnosing memory pressure when running multiple OpenClaw agents: swapping, slowdowns, killed processes, and sizing guidance.",
    symptom: [
      "The host slows to a crawl or starts swapping when several agents run concurrently.",
      "Agent processes are killed intermittently under load.",
    ],
    cause: TODO_OWNER,
    fixSteps: TODO_OWNER,
    whenToGetHelp:
      "If you are sizing a multi-agent rollout, capacity-plan before launch rather than after the first outage.",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    sources: [],
  },
  {
    slug: "cron-jobs-not-firing",
    category: "performance",
    title: "OpenClaw Cron Jobs Not Firing",
    metaDescription:
      "Troubleshooting OpenClaw scheduled jobs: crons that never run, run at the wrong time, or fire unexpectedly — and how to audit them.",
    symptom: [
      "A scheduled job stops producing output and nothing appears in the logs at the expected time.",
      "Jobs run at the wrong time after a timezone or DST change, or fire earlier than intended.",
    ],
    cause: TODO_OWNER,
    fixSteps: TODO_OWNER,
    whenToGetHelp:
      "If a cron drives anything customer-facing, do not rely on prompt-level guardrails — get endpoint-level locks reviewed.",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    sources: ["memory/2026-04-03.md", "MISTAKES.md"],
  },
  {
    slug: "channel-pairing-failures",
    category: "connectivity",
    title: "WhatsApp and Telegram Channel Pairing Failures",
    metaDescription:
      "Fixing OpenClaw channel pairing problems: WhatsApp QR/pairing failures, Telegram bots that connect but never respond, and allowlist pitfalls.",
    symptom: [
      "WhatsApp pairing fails or drops after authentication.",
      "A Telegram bot connects but group messages are silently ignored.",
    ],
    cause: [
      "Telegram groupPolicy set to allowlist with an empty allow-from list, so all group messages are dropped without an error.",
    ],
    fixSteps: TODO_OWNER,
    whenToGetHelp:
      "If pairing succeeds but messages still do not flow, the problem is usually policy configuration rather than the connection — worth a config review before re-pairing repeatedly.",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    sources: ["memory/2026-03-07.md"],
  },
  {
    slug: "update-breakage",
    category: "platform",
    title: "Breakage After OpenClaw Updates",
    metaDescription:
      "What breaks after OpenClaw updates and how to recover: stale config entries, changed defaults, and a safe update routine.",
    symptom: [
      "After an upgrade, the doctor/status output reports config warnings that were not there before.",
      "A channel or plugin that worked before the update stops loading.",
    ],
    cause: [
      "Upgrades can leave stale config entries behind (for example a stale channel plugin entry) that the new version warns about or ignores.",
    ],
    fixSteps: TODO_OWNER,
    whenToGetHelp:
      "If updates regularly take the assistant down, adopt a staged update routine with a rollback path instead of updating in place.",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    sources: ["memory/2026-03-23.md"],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function articlesInCategory(categorySlug: string) {
  return articles.filter((a) => a.category === categorySlug);
}
