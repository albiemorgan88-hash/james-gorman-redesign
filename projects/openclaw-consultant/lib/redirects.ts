// Permanent (301) redirects for consolidated guide slugs.
// Source of truth for middleware.ts; keep in sync with CONSOLIDATION.csv
// and KEYWORD-MAP.csv at the project root. Destinations must never appear
// as keys here (no redirect chains).

export const GUIDE_REDIRECTS: Record<string, string> = {
  // T1 duplicate consolidation (see CONSOLIDATION.csv)
  "how-to-build-an-ai-agent": "/guides/how-to-build-ai-agent",
  "ai-readiness-assessment-uk": "/guides/ai-readiness-assessment-guide",
  "enterprise-openclaw-deployment": "/guides/openclaw-enterprise-deployment",
  "openclaw-vs-zapier-make-n8n": "/guides/openclaw-vs-zapier-vs-make",
  "openclaw-vs-va-cost-comparison": "/guides/openclaw-vs-virtual-assistant-cost",
  "openclaw-security-compliance": "/guides/openclaw-security-best-practices",
  "ai-agents-accountants": "/guides/ai-agents-for-accountants",
  "ai-agents-solicitors": "/guides/ai-agents-for-solicitors",
  "ai-agents-logistics": "/guides/ai-agents-for-logistics",
  "ai-agents-property-management": "/guides/ai-agents-for-property-management",
  "ai-agents-recruitment-agencies": "/guides/ai-agents-for-recruitment",
  "ai-agent-for-customer-service": "/guides/ai-agents-for-customer-support",
  "what-is-an-ai-agent": "/guides/ai-agents-explained",

  // T2 generic slugs with a clear agent-family equivalent (see KEYWORD-MAP.csv)
  "ai-automation-for-accountants": "/guides/ai-agents-for-accountants",
  "ai-for-construction-companies": "/guides/ai-agents-construction",
  "ai-customer-service-automation-uk": "/guides/ai-agents-for-customer-support",
  "ai-for-dentists-uk": "/guides/ai-agents-dentists",
  "ai-for-gyms-uk": "/guides/ai-agents-gyms-fitness",
  "ai-for-legal-uk": "/guides/ai-agents-for-solicitors",
  "ai-for-healthcare-uk": "/guides/ai-agents-for-healthcare",
  "ai-for-hospitality-uk": "/guides/ai-agents-restaurants",
  "ai-for-schools-uk": "/guides/ai-agents-for-education",
  "ai-recruitment-automation-uk-smes": "/guides/ai-agents-for-recruitment",
  "ai-invoice-processing": "/guides/openclaw-invoice-processing",
  "ai-customer-onboarding": "/guides/openclaw-customer-onboarding",
  "ai-reporting-automation-uk": "/guides/openclaw-reporting-automation",
  "ai-automation-roi-calculator": "/guides/openclaw-roi-calculator-guide",
  "measuring-ai-roi-uk-business": "/guides/ai-agents-roi-guide",
  "ai-managed-services-uk": "/guides/openclaw-managed-service-uk",
  "ai-managed-service-provider-uk": "/guides/openclaw-managed-service-uk",
  "ai-appointment-booking": "/guides/openclaw-booking-automation",
  "ai-audit-for-business": "/guides/openclaw-audit-service",
};
