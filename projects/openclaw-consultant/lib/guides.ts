// Curated guide catalogue + category definitions for /guides and
// /guides/category/{slug}. Data moved verbatim from app/guides/page.tsx
// during the June 2026 consolidation; helpers dedupe consolidated hrefs
// and normalise titles for slugs that were 301-merged into survivors.

import { existsSync, readdirSync } from "fs";
import { join } from "path";

export interface Guide {
  title: string;
  href: string;
  category: string;
}

export interface BuyerGuide {
  title: string;
  href: string;
  tag: string;
  readTime: string;
  description: string;
}

export interface GuideCategory {
  slug: string;
  name: string;
  description: string;
}

const guidesData: Record<string, Guide[]> = {
  "CRM & Ops Platforms": [
    { title: "OpenClaw HubSpot Automation", href: "/guides/openclaw-hubspot-automation", category: "CRM" },
    { title: "OpenClaw Shopify Automation", href: "/guides/openclaw-shopify-automation", category: "Ecommerce" },
    { title: "OpenClaw Xero Automation", href: "/guides/openclaw-xero-automation", category: "Finance" },
    { title: "OpenClaw QuickBooks Automation", href: "/guides/openclaw-quickbooks-automation", category: "Finance" },
    { title: "OpenClaw Salesforce Automation", href: "/guides/openclaw-salesforce-automation", category: "CRM" },
    { title: "OpenClaw Pipedrive Automation", href: "/guides/openclaw-pipedrive-automation", category: "CRM" },
    { title: "OpenClaw Zendesk Automation", href: "/guides/openclaw-zendesk-automation", category: "Support" },
    { title: "OpenClaw Intercom Automation", href: "/guides/openclaw-intercom-automation", category: "Support" },
    { title: "OpenClaw Stripe Automation", href: "/guides/openclaw-stripe-automation", category: "Payments" },
    { title: "OpenClaw Calendly Automation", href: "/guides/openclaw-calendly-automation", category: "Scheduling" },
    { title: "OpenClaw Asana Automation", href: "/guides/openclaw-asana-automation", category: "Projects" },
    { title: "OpenClaw ClickUp Automation", href: "/guides/openclaw-clickup-automation", category: "Projects" },
  ],
  "Platform Automation": [
    { title: "OpenClaw Google Workspace Automation", href: "/guides/openclaw-google-workspace-automation", category: "Platform" },
    { title: "OpenClaw Microsoft 365 Automation", href: "/guides/openclaw-microsoft-365-automation", category: "Platform" },
    { title: "OpenClaw WordPress Automation", href: "/guides/openclaw-wordpress-automation", category: "Platform" },
    { title: "OpenClaw Webflow Automation", href: "/guides/openclaw-webflow-automation", category: "Platform" },
    { title: "OpenClaw Wix Automation", href: "/guides/openclaw-wix-automation", category: "Platform" },
    { title: "OpenClaw Airtable Automation", href: "/guides/openclaw-airtable-automation", category: "Platform" },
    { title: "OpenClaw Notion Automation", href: "/guides/openclaw-notion-automation", category: "Platform" },
    { title: "OpenClaw Slack Automation", href: "/guides/openclaw-slack-automation", category: "Platform" },
  ],
  "Getting Started": [
    { title: "What is OpenClaw? Complete Guide 2026", href: "/guides/what-is-openclaw-2026", category: "Getting Started" },
    { title: "OpenClaw Beginner Guide 2026", href: "/guides/openclaw-beginner-guide", category: "Getting Started" },
    { title: "Best AI Agents 2026", href: "/guides/best-ai-agents-2026", category: "Getting Started" },
    { title: "OpenClaw Tutorial for Beginners", href: "/guides/openclaw-tutorial-beginners", category: "Getting Started" },
    { title: "Getting Started with AI Automation", href: "/guides/getting-started-ai-automation", category: "Getting Started" },
    { title: "Set Up an AI Agent for Your Business", href: "/guides/setup-ai-agent-business", category: "Getting Started" },
    { title: "What Is Agentic AI? The Complete Guide", href: "/guides/what-is-agentic-ai", category: "Getting Started" },
    { title: "OpenClaw Setup for Business", href: "/guides/openclaw-setup-business", category: "Getting Started" },
  ],
  "Setup Guides": [
    { title: "OpenClaw Setup Guide for Mac 2026", href: "/guides/openclaw-setup-mac", category: "Setup" },
    { title: "OpenClaw Setup Guide for Windows", href: "/guides/openclaw-setup-windows", category: "Setup" },
    { title: "OpenClaw Telegram Setup Guide", href: "/guides/openclaw-setup-telegram", category: "Setup" },
    { title: "OpenClaw WhatsApp Setup Guide", href: "/guides/openclaw-setup-whatsapp", category: "Setup" },
    { title: "OpenClaw Discord Bot Setup Guide", href: "/guides/openclaw-discord-setup", category: "Setup" },
    { title: "Installing Pinchy: Setup Guide 2026", href: "/guides/installing-pinchy", category: "Setup" },
    { title: "OpenClaw Setup Service UK", href: "/guides/openclaw-setup-service-uk", category: "Setup" },
    { title: "OpenClaw Installation Service", href: "/guides/openclaw-installation-service", category: "Setup" },
  ],
  "OpenClaw Features": [
    { title: "OpenClaw Skills: Complete Guide", href: "/guides/openclaw-skills-guide", category: "Features" },
    { title: "OpenClaw Cron Jobs: Automation Guide", href: "/guides/openclaw-cron-jobs", category: "Features" },
    { title: "OpenClaw Memory Management Guide", href: "/guides/openclaw-memory-management", category: "Features" },
    { title: "OpenClaw Browser Automation Guide", href: "/guides/openclaw-browser-automation", category: "Features" },
    { title: "OpenClaw Email Inbox Management", href: "/guides/openclaw-email-inbox-management", category: "Features" },
    { title: "OpenClaw Integrations Guide", href: "/guides/openclaw-integrations-guide", category: "Features" },
    { title: "Connect OpenClaw to Moltbook", href: "/guides/openclaw-moltbook-guide", category: "Features" },
    { title: "OpenClaw + WhatsApp Business Guide", href: "/guides/openclaw-whatsapp-business", category: "Features" },
    { title: "OpenClaw Social Media Automation", href: "/guides/openclaw-social-media-management", category: "Features" },
    { title: "OpenClaw for Customer Support", href: "/guides/openclaw-customer-support", category: "Features" },
    { title: "OpenClaw E-commerce Automation", href: "/guides/openclaw-ecommerce-automation", category: "Features" },
  ],
  "Teams & Enterprise": [
    { title: "OpenClaw Safe Setup Checklist", href: "/guides/openclaw-safe-setup-checklist", category: "Enterprise" },
    { title: "OpenClaw MCP Server Guide", href: "/guides/openclaw-mcp-server-guide", category: "Enterprise" },
    { title: "OpenClaw Agent Permissions", href: "/guides/openclaw-agent-permissions", category: "Enterprise" },
    { title: "OpenClaw Approval Workflows", href: "/guides/openclaw-approval-workflows", category: "Enterprise" },
    { title: "AI Agent Monitoring UK", href: "/guides/ai-agent-monitoring-uk", category: "Enterprise" },
    { title: "Human-in-the-Loop AI Agents", href: "/guides/ai-agent-human-in-the-loop", category: "Enterprise" },
    { title: "Build an OpenClaw Agent Team", href: "/guides/openclaw-agent-team", category: "Enterprise" },
    { title: "OpenClaw Agent Team Setup Guide", href: "/guides/openclaw-agent-team-setup", category: "Enterprise" },
    { title: "OpenClaw for Teams: Multi-Agent Guide", href: "/guides/openclaw-for-teams", category: "Enterprise" },
    { title: "AI Agent Memory Systems", href: "/guides/ai-agent-memory-systems", category: "Enterprise" },
    { title: "Multi-Agent Orchestration: Running AI Agent Teams", href: "/guides/multi-agent-orchestration", category: "Enterprise" },
    { title: "Enterprise OpenClaw Deployment Guide", href: "/guides/openclaw-enterprise-deployment", category: "Enterprise" },
    { title: "OpenClaw Enterprise Deployment", href: "/guides/openclaw-enterprise-deployment", category: "Enterprise" },
    { title: "OpenClaw Deployment Service UK", href: "/guides/openclaw-deployment-service-uk", category: "Enterprise" },
    { title: "OpenClaw Agent Deployment", href: "/guides/openclaw-agent-deployment", category: "Enterprise" },
    { title: "OpenClaw + Pinchy Enterprise Stack", href: "/guides/openclaw-pinchy-enterprise-stack", category: "Enterprise" },
    { title: "OpenClaw Enterprise Security & GDPR", href: "/guides/openclaw-enterprise-security-compliance", category: "Enterprise" },
    { title: "OpenClaw Security Best Practices", href: "/guides/openclaw-security-best-practices", category: "Enterprise" },
    { title: "OpenClaw Security & Compliance Guide", href: "/guides/openclaw-security-best-practices", category: "Enterprise" },
    { title: "OpenClaw Performance Optimisation", href: "/guides/openclaw-performance-optimization-guide", category: "Enterprise" },
    { title: "OpenClaw Business Integration Guide", href: "/guides/openclaw-business-systems-integration", category: "Enterprise" },
  ],
  "Comparisons": [
    { title: "What Is NanoClaw? Lightweight AI Assistant Guide", href: "/guides/what-is-nanoclaw", category: "Alternative" },
    { title: "OpenClaw Alternatives", href: "/guides/openclaw-alternatives", category: "Alternative" },
    { title: "OpenClaw vs ChatGPT: Key Differences", href: "/guides/openclaw-vs-chatgpt", category: "Comparison" },
    { title: "OpenClaw vs LangGraph: Framework Fit", href: "/guides/openclaw-vs-langgraph", category: "Comparison" },
    { title: "OpenClaw vs AutoGPT: Business Agents", href: "/guides/openclaw-vs-autogpt", category: "Comparison" },
    { title: "OpenClaw vs Flowise: Workflow Tools", href: "/guides/openclaw-vs-flowise", category: "Comparison" },
    { title: "OpenClaw vs Dify: AI Apps or Agents", href: "/guides/openclaw-vs-dify", category: "Comparison" },
    { title: "OpenClaw vs Zapier vs Make", href: "/guides/openclaw-vs-zapier-vs-make", category: "Comparison" },
    { title: "OpenClaw vs n8n: Which to Choose?", href: "/guides/openclaw-vs-n8n", category: "Comparison" },
    { title: "OpenClaw vs AutoGen Comparison", href: "/guides/openclaw-vs-autogen", category: "Comparison" },
    { title: "OpenClaw vs CrewAI Comparison", href: "/guides/openclaw-vs-crew-ai", category: "Comparison" },
    { title: "AI Agent Frameworks Compared", href: "/guides/ai-agent-frameworks-compared", category: "Comparison" },
    { title: "OpenClaw vs Claude Code Comparison", href: "/guides/openclaw-vs-claude-code", category: "Comparison" },
    { title: "OpenClaw vs Copilot Studio", href: "/guides/openclaw-vs-copilot-studio", category: "Comparison" },
    { title: "OpenClaw vs VA: Cost Comparison 2026", href: "/guides/openclaw-vs-virtual-assistant-cost", category: "Comparison" },
    { title: "OpenClaw vs Virtual Assistant Costs", href: "/guides/openclaw-vs-virtual-assistant-cost", category: "Comparison" },
    { title: "OpenClaw vs Hiring Staff", href: "/guides/openclaw-vs-hiring-staff", category: "Comparison" },
    { title: "Pinchy vs Manual OpenClaw Management", href: "/guides/pinchy-vs-manual", category: "Comparison" },
    { title: "OpenClaw vs Manus", href: "/guides/openclaw-vs-manus", category: "Comparison" },
  ],
  "Pricing & ROI": [
    { title: "OpenClaw Pricing & Costs Explained", href: "/guides/openclaw-pricing-explained", category: "Pricing" },
    { title: "AI Agent Costs UK: Full Pricing Guide", href: "/guides/ai-agent-cost-uk", category: "Pricing" },
    { title: "AI Consultancy Costs UK", href: "/guides/ai-consultancy-costs-uk", category: "Pricing" },
    { title: "OpenClaw Consultant Cost UK", href: "/guides/openclaw-consultant-cost-uk", category: "Pricing" },
    { title: "OpenClaw Setup Service Cost UK", href: "/guides/openclaw-setup-service-cost-uk", category: "Pricing" },
    { title: "OpenClaw Proof of Concept Cost UK", href: "/guides/openclaw-proof-of-concept-cost-uk", category: "Pricing" },
    { title: "OpenClaw Custom Skills Cost UK", href: "/guides/openclaw-custom-skills-cost-uk", category: "Pricing" },
    { title: "OpenClaw Managed Service Cost UK", href: "/guides/openclaw-managed-service-cost-uk", category: "Pricing" },
    { title: "OpenClaw Retainer UK", href: "/guides/openclaw-retainer-uk", category: "Pricing" },
    { title: "AI Automation ROI Calculator", href: "/guides/openclaw-roi-calculator-guide", category: "Pricing" },
    { title: "Measuring AI ROI for UK Businesses", href: "/guides/ai-agents-roi-guide", category: "Pricing" },
    { title: "OpenClaw ROI for Business", href: "/guides/openclaw-roi-for-business", category: "Pricing" },
    { title: "AI Automation vs Outsourcing: UK Guide", href: "/guides/ai-automation-vs-outsourcing", category: "Pricing" },
    { title: "AI Employee vs Outsourcing", href: "/guides/ai-employee-vs-outsourcing", category: "Pricing" },
    { title: "OpenClaw for Accountants: Automation", href: "/guides/openclaw-accountants-automation", category: "Pricing" },
  ],
  "Industry Guides": [
    { title: "AI Agents for Accountants UK", href: "/guides/ai-agents-for-accountants", category: "Industry" },
    { title: "AI Agents for Charities UK", href: "/guides/ai-agents-charities", category: "Industry" },
    { title: "AI Agents for Construction Companies", href: "/guides/ai-agents-construction", category: "Industry" },
    { title: "AI Agents for Dental Practices UK", href: "/guides/ai-agents-dentists", category: "Industry" },
    { title: "AI Agents for Estate Agents UK", href: "/guides/ai-agents-estate-agents", category: "Industry" },
    { title: "AI Agents for Gyms & Fitness Studios", href: "/guides/ai-agents-gyms-fitness", category: "Industry" },
    { title: "AI Agents for Logistics Companies", href: "/guides/ai-agents-for-logistics", category: "Industry" },
    { title: "AI Agents for Property Management", href: "/guides/ai-agents-for-property-management", category: "Industry" },
    { title: "AI Agents for Recruitment Agencies", href: "/guides/ai-agents-for-recruitment", category: "Industry" },
    { title: "AI Agents for Restaurants & Hospitality", href: "/guides/ai-agents-restaurants", category: "Industry" },
    { title: "AI Agents for Salons & Spas UK", href: "/guides/ai-agents-salons-spas", category: "Industry" },
    { title: "AI Agents for Solicitors & Law Firms", href: "/guides/ai-agents-for-solicitors", category: "Industry" },
    { title: "AI Agents for Veterinary Practices", href: "/guides/ai-agents-veterinary", category: "Industry" },
    { title: "AI for Construction: Automation Guide", href: "/guides/ai-agents-construction", category: "Industry" },
    { title: "AI for Dentists: Practice Automation", href: "/guides/ai-agents-dentists", category: "Industry" },
    { title: "AI for Financial Services UK", href: "/guides/ai-for-financial-services-uk", category: "Industry" },
    { title: "AI for Gyms: Member Retention & Growth", href: "/guides/ai-agents-gyms-fitness", category: "Industry" },
    { title: "AI in UK Healthcare: Practical Guide", href: "/guides/ai-agents-for-healthcare", category: "Industry" },
    { title: "AI for Hotels & Hospitality UK", href: "/guides/ai-agents-restaurants", category: "Industry" },
    { title: "AI for Law Firms: Legal Automation", href: "/guides/ai-agents-for-solicitors", category: "Industry" },
    { title: "AI in UK Manufacturing: Guide", href: "/guides/ai-for-manufacturing-uk", category: "Industry" },
    { title: "AI for Plumbers & Trade Businesses", href: "/guides/ai-for-plumbers-uk", category: "Industry" },
    { title: "AI for UK Retail: Growth Guide", href: "/guides/ai-for-retail-uk", category: "Industry" },
    { title: "AI for Schools: Admin & Wellbeing", href: "/guides/ai-agents-for-education", category: "Industry" },
    { title: "AI Agents for Education", href: "/guides/ai-agents-for-education", category: "Industry" },
    { title: "AI Agents for Supply Chain Management", href: "/guides/ai-agents-for-supply-chain", category: "Industry" },
    { title: "AI Agents for Real Estate", href: "/guides/ai-agents-for-real-estate", category: "Industry" },
    { title: "AI Agents for Finance", href: "/guides/ai-agents-for-finance", category: "Industry" },
    { title: "AI Agents for Procurement", href: "/guides/ai-agents-for-procurement", category: "Industry" },
    { title: "AI Agents for Insurance Brokers", href: "/guides/ai-agents-for-insurance-brokers", category: "Industry" },
  ],
  "AI Business Strategy": [
    { title: "AI Consultancy UK", href: "/guides/ai-consultancy-uk", category: "Strategy" },
    { title: "AI Automation Agency UK", href: "/guides/ai-automation-agency-uk", category: "Strategy" },
    { title: "AI Agent Implementation Plan UK", href: "/guides/ai-agent-implementation-plan-uk", category: "Strategy" },
    { title: "AI Transformation Strategy 2026", href: "/guides/ai-transformation-strategy-2026", category: "Strategy" },
    { title: "AI Workforce Planning 2026", href: "/guides/ai-workforce-planning-2026", category: "Strategy" },
    { title: "AI Governance & Compliance UK", href: "/guides/ai-governance-compliance-uk", category: "Strategy" },
    { title: "AI Risk Management Framework", href: "/guides/ai-risk-management-framework", category: "Strategy" },
    { title: "Enterprise AI Deployment UK Guide", href: "/guides/enterprise-ai-deployment-uk", category: "Strategy" },
    { title: "AI Compliance Automation: GDPR & More", href: "/guides/ai-compliance-automation", category: "Strategy" },
    { title: "AI Agents and Compliance Risk", href: "/guides/ai-agents-compliance-risk", category: "Strategy" },
    { title: "AI Audit for Business", href: "/guides/openclaw-audit-service", category: "Strategy" },
    { title: "AI Readiness Assessment UK", href: "/guides/ai-readiness-assessment-guide", category: "Strategy" },
    { title: "AI Readiness Assessment Guide", href: "/guides/ai-readiness-assessment-guide", category: "Strategy" },
    { title: "AI Operations Consultant UK", href: "/guides/ai-operations-consultant-uk", category: "Strategy" },
    { title: "AI Implementation Consultant UK", href: "/guides/ai-implementation-consultant-uk", category: "Strategy" },
    { title: "AI Implementation Services UK", href: "/guides/ai-implementation-services-uk", category: "Strategy" },
    { title: "OpenClaw Consultant UK", href: "/guides/openclaw-consultant-uk", category: "Strategy" },
    { title: "Hire an OpenClaw Expert", href: "/guides/hire-openclaw-expert", category: "Strategy" },
    { title: "AI Automation Consultant UK", href: "/guides/ai-automation-consultant-uk", category: "Strategy" },
    { title: "AI Employees for Business", href: "/guides/ai-employees-for-business", category: "Strategy" },
    { title: "AI Agents for Business", href: "/guides/ai-agents-for-business", category: "Strategy" },
    { title: "Agentic AI for Business", href: "/guides/agentic-ai-for-business", category: "Strategy" },
    { title: "AI Training for Employees", href: "/guides/ai-training-for-employees", category: "Strategy" },
    { title: "OpenClaw Proof of Concept UK", href: "/guides/openclaw-proof-of-concept-uk", category: "Strategy" },
    { title: "OpenClaw Implementation Consultant UK", href: "/guides/openclaw-implementation-consultant-uk", category: "Strategy" },
    { title: "OpenClaw Audit Service", href: "/guides/openclaw-audit-service", category: "Strategy" },
    { title: "OpenClaw Managed Service UK", href: "/guides/openclaw-managed-service-uk", category: "Strategy" },
    { title: "AI Managed Services UK", href: "/guides/openclaw-managed-service-uk", category: "Strategy" },
    { title: "AI Managed Service Provider UK", href: "/guides/openclaw-managed-service-uk", category: "Strategy" },
    { title: "OpenClaw Migration Service", href: "/guides/openclaw-migration-service", category: "Strategy" },
    { title: "OpenClaw Compliance Checklist UK", href: "/guides/openclaw-compliance-checklist-uk", category: "Strategy" },
    { title: "AI Governance Policy Template", href: "/guides/ai-governance-policy-template", category: "Strategy" },
  ],
  "AI Automation": [
    { title: "AI Customer Service Automation UK", href: "/guides/ai-agents-for-customer-support", category: "Automation" },
    { title: "AI Workflow Automation UK", href: "/guides/ai-workflow-automation-uk", category: "Automation" },
    { title: "AI Email Automation UK", href: "/guides/ai-email-automation-uk", category: "Automation" },
    { title: "AI Receptionist UK", href: "/guides/ai-receptionist-uk", category: "Automation" },
    { title: "AI Inbox Triage Automation", href: "/guides/ai-inbox-triage-automation", category: "Automation" },
    { title: "AI Lead Response Automation UK", href: "/guides/ai-lead-response-automation-uk", category: "Automation" },
    { title: "AI Reporting Automation UK", href: "/guides/openclaw-reporting-automation", category: "Automation" },
    { title: "OpenClaw CRM Automation", href: "/guides/openclaw-crm-automation", category: "Automation" },
    { title: "OpenClaw SEO Automation", href: "/guides/openclaw-seo-automation", category: "Automation" },
    { title: "OpenClaw Content Engine", href: "/guides/openclaw-content-engine", category: "Automation" },
    { title: "OpenClaw for Recruitment Agencies", href: "/guides/openclaw-for-recruitment-agencies", category: "Automation" },
    { title: "OpenClaw HR Automation", href: "/guides/openclaw-hr-automation", category: "Automation" },
    { title: "OpenClaw Operations Dashboard", href: "/guides/openclaw-operations-dashboard", category: "Automation" },
    { title: "OpenClaw Lead Generation Automation", href: "/guides/openclaw-lead-generation-automation", category: "Automation" },
    { title: "OpenClaw Document Processing", href: "/guides/openclaw-document-processing", category: "Automation" },
    { title: "OpenClaw Meeting Notes Workflow", href: "/guides/openclaw-meeting-notes-workflow", category: "Automation" },
    { title: "OpenClaw Sales Automation", href: "/guides/openclaw-sales-automation", category: "Automation" },
    { title: "OpenClaw Customer Onboarding", href: "/guides/openclaw-customer-onboarding", category: "Automation" },
    { title: "OpenClaw Invoice Processing", href: "/guides/openclaw-invoice-processing", category: "Automation" },
    { title: "OpenClaw Reporting Automation", href: "/guides/openclaw-reporting-automation", category: "Automation" },
    { title: "OpenClaw Support Ticket Automation", href: "/guides/openclaw-support-ticket-automation", category: "Automation" },
    { title: "OpenClaw Booking Automation", href: "/guides/openclaw-booking-automation", category: "Automation" },
    { title: "Workshop Booking Automation", href: "/guides/workshop-booking-automation", category: "Automation" },
    { title: "OpenClaw Calendar Automation", href: "/guides/openclaw-calendar-automation", category: "Automation" },
    { title: "OpenClaw Form-to-CRM Automation", href: "/guides/openclaw-form-to-crm-automation", category: "Automation" },
    { title: "OpenClaw Gravity Forms Automation", href: "/guides/openclaw-gravity-forms-automation", category: "Automation" },
    { title: "OpenClaw Zoho CRM Automation", href: "/guides/openclaw-zoho-crm-automation", category: "Automation" },
    { title: "OpenClaw Reminder Workflows", href: "/guides/openclaw-reminder-workflows", category: "Automation" },
    { title: "OpenClaw Admin Dashboard", href: "/guides/openclaw-admin-dashboard", category: "Automation" },
    { title: "OpenClaw for Training Providers", href: "/guides/openclaw-for-training-providers", category: "Automation" },
    { title: "OpenClaw Error Monitoring Workflows", href: "/guides/openclaw-error-monitoring-workflows", category: "Automation" },
    { title: "AI Appointment Booking for Business", href: "/guides/openclaw-booking-automation", category: "Automation" },
    { title: "AI Chatbots for UK Businesses", href: "/guides/ai-chatbot-for-business-uk", category: "Automation" },
    { title: "Automate Customer Onboarding with AI", href: "/guides/openclaw-customer-onboarding", category: "Automation" },
    { title: "AI Data Analysis for SMEs", href: "/guides/ai-data-analysis-for-smes", category: "Automation" },
    { title: "AI Inventory Management Guide", href: "/guides/ai-inventory-management", category: "Automation" },
    { title: "AI Invoice Processing: Cut Admin 80%", href: "/guides/openclaw-invoice-processing", category: "Automation" },
    { title: "AI Social Media Management for Business", href: "/guides/ai-social-media-management", category: "Automation" },
    { title: "Automate Accounts & Bookkeeping with AI", href: "/guides/automate-accounts-bookkeeping-ai", category: "Automation" },
    { title: "Managing AI Agent Teams: Practical Guide", href: "/guides/ai-agent-team-management", category: "Automation" },
    { title: "AI Agents for Customer Support", href: "/guides/ai-agents-for-customer-support", category: "Automation" },
    { title: "OpenClaw Training for Teams", href: "/guides/openclaw-training-for-teams", category: "Automation" },
    { title: "OpenClaw Custom Skills Development", href: "/guides/openclaw-custom-skills-development", category: "Automation" },
    { title: "Top 10 OpenClaw Skills for Business", href: "/guides/top-10-openclaw-skills", category: "Automation" },
  ],
};

export const buyerGuides: BuyerGuide[] = [
  {
    title: "AI Consultancy UK",
    href: "/guides/ai-consultancy-uk",
    tag: "Consulting",
    readTime: "7 min read",
    description: "How UK businesses should buy practical AI consultancy, scope the first workflow, and avoid vague transformation work.",
  },
  {
    title: "AI Automation Agency UK",
    href: "/guides/ai-automation-agency-uk",
    tag: "Automation",
    readTime: "7 min read",
    description: "What a useful automation agency should deliver before a business commits to tools, integrations, or an agent rollout.",
  },
  {
    title: "AI Implementation Services UK",
    href: "/guides/ai-implementation-services-uk",
    tag: "Implementation",
    readTime: "7 min read",
    description: "A practical route from AI idea to controlled pilot, live workflow, monitoring, and post-launch improvement.",
  },
  {
    title: "OpenClaw Safe Setup Checklist",
    href: "/guides/openclaw-safe-setup-checklist",
    tag: "Safety",
    readTime: "8 min read",
    description: "A practical permission matrix for agent access, approval gates, audit evidence, logging and rollback before a pilot touches real systems.",
  },
  {
    title: "OpenClaw Consultant UK",
    href: "/guides/openclaw-consultant-uk",
    tag: "Consulting",
    readTime: "7 min read",
    description: "What good OpenClaw consulting should include, when outside help is worth it, and how to avoid paying for vague AI theatre.",
  },
  {
    title: "OpenClaw Consultant Cost UK",
    href: "/guides/openclaw-consultant-cost-uk",
    tag: "Pricing",
    readTime: "6 min read",
    description: "A straight view of UK OpenClaw consultant pricing, from audits and pilots through implementation and managed support.",
  },
  {
    title: "OpenClaw Setup Service Cost UK",
    href: "/guides/openclaw-setup-service-cost-uk",
    tag: "Setup Pricing",
    readTime: "6 min read",
    description: "What a proper OpenClaw setup project should cost, what should be included, and how to avoid paying for a half-finished install.",
  },
  {
    title: "OpenClaw Proof of Concept Cost UK",
    href: "/guides/openclaw-proof-of-concept-cost-uk",
    tag: "Pilot Pricing",
    readTime: "6 min read",
    description: "What a focused OpenClaw pilot should cost, what the budget should buy, and how to avoid funding a vague experiment.",
  },
  {
    title: "OpenClaw Custom Skills Cost UK",
    href: "/guides/openclaw-custom-skills-cost-uk",
    tag: "Build Pricing",
    readTime: "7 min read",
    description: "What bespoke OpenClaw skill development usually costs and how buyers avoid paying for the wrong custom build.",
  },
  {
    title: "OpenClaw Managed Service Cost UK",
    href: "/guides/openclaw-managed-service-cost-uk",
    tag: "Support Pricing",
    readTime: "6 min read",
    description: "What monthly OpenClaw support usually costs, what a retainer should include, and when the spend is commercially justified.",
  },
  {
    title: "OpenClaw Proof of Concept UK",
    href: "/guides/openclaw-proof-of-concept-uk",
    tag: "Pilot",
    readTime: "6 min read",
    description: "How to run a focused pilot that proves one workflow properly, instead of funding a fuzzy AI experiment.",
  },
  {
    title: "OpenClaw Custom Skills Development",
    href: "/guides/openclaw-custom-skills-development",
    tag: "Custom Skills",
    readTime: "7 min read",
    description: "When bespoke OpenClaw skills are worth building, how to scope them properly, and what good delivery should look like.",
  },
  {
    title: "OpenClaw Migration Service",
    href: "/guides/openclaw-migration-service",
    tag: "Migration",
    readTime: "7 min read",
    description: "When moving from ChatGPT, Zapier, or patchwork automations makes sense, and how to avoid recreating old mess on a new stack.",
  },
  {
    title: "OpenClaw Audit Service",
    href: "/guides/openclaw-audit-service",
    tag: "Audit",
    readTime: "7 min read",
    description: "What to review before you automate anything serious, including workflow fit, ownership, data risk, and approval points.",
  },
];

// Category routing for /guides/category/{slug}. Names must match guidesData keys.
export const guideCategories: GuideCategory[] = [
  { slug: "getting-started", name: "Getting Started", description: "What OpenClaw is, what it costs, and how to take the first step safely." },
  { slug: "setup", name: "Setup Guides", description: "Installation, configuration, and safe-setup walkthroughs for OpenClaw." },
  { slug: "features", name: "OpenClaw Features", description: "Skills, memory, browser automation, and the platform capabilities that matter." },
  { slug: "teams-enterprise", name: "Teams & Enterprise", description: "Agent teams, enterprise deployment, governance, and security at scale." },
  { slug: "comparisons", name: "Comparisons", description: "OpenClaw vs ChatGPT, Zapier, Make, n8n, Copilot, and the rest of the field." },
  { slug: "pricing-roi", name: "Pricing & ROI", description: "What OpenClaw costs to run, what consulting costs, and how to judge the return." },
  { slug: "industry", name: "Industry Guides", description: "Sector-specific agent guides for UK firms - legal, accounting, property, logistics, and more." },
  { slug: "ai-business-strategy", name: "AI Business Strategy", description: "Readiness, governance, and strategy guides for buying AI properly." },
  { slug: "ai-automation", name: "AI Automation", description: "Workflow-by-workflow automation guides, from inbox triage to invoicing." },
  { slug: "platform-automation", name: "Platform Automation", description: "OpenClaw working with the platforms your business already runs on." },
  { slug: "crm-ops-platforms", name: "CRM & Ops Platforms", description: "HubSpot, Salesforce, Xero, Shopify, and other platform-specific automation guides." },
  { slug: "more-guides", name: "More Guides", description: "Every other published guide, auto-listed until it earns a curated home." },
];

// Slugs that absorbed consolidated duplicates - curated entries pointing at
// them may carry the old title; normalise for display.
const TITLE_OVERRIDES: Record<string, string> = {
  "/guides/ai-agents-for-accountants": "AI Agents for Accountants",
  "/guides/ai-agents-for-solicitors": "AI Agents for Solicitors",
  "/guides/ai-agents-for-logistics": "AI Agents for Logistics",
  "/guides/ai-agents-for-property-management": "AI Agents for Property Management",
  "/guides/ai-agents-for-recruitment": "AI Agents for Recruitment Agencies",
  "/guides/ai-agents-for-customer-support": "AI Agents for Customer Support",
  "/guides/ai-agents-explained": "AI Agents Explained",
  "/guides/how-to-build-ai-agent": "How to Build an AI Agent",
  "/guides/ai-readiness-assessment-guide": "AI Readiness Assessment Guide",
  "/guides/openclaw-enterprise-deployment": "OpenClaw Enterprise Deployment",
  "/guides/openclaw-vs-zapier-vs-make": "OpenClaw vs Zapier vs Make vs n8n",
  "/guides/openclaw-vs-virtual-assistant-cost": "OpenClaw vs Virtual Assistant: Cost Comparison",
  "/guides/openclaw-security-best-practices": "OpenClaw Security Best Practices",
  "/guides/ai-agents-construction": "AI Agents for Construction",
  "/guides/ai-agents-dentists": "AI Agents for Dental Practices",
  "/guides/ai-agents-gyms-fitness": "AI Agents for Gyms & Fitness",
  "/guides/ai-agents-for-healthcare": "AI Agents for Healthcare",
  "/guides/ai-agents-restaurants": "AI Agents for Restaurants & Hospitality",
  "/guides/ai-agents-for-education": "AI Agents for Education",
  "/guides/openclaw-invoice-processing": "OpenClaw Invoice Processing",
  "/guides/openclaw-customer-onboarding": "OpenClaw Customer Onboarding",
  "/guides/openclaw-reporting-automation": "OpenClaw Reporting Automation",
  "/guides/openclaw-roi-calculator-guide": "OpenClaw ROI Calculator Guide",
  "/guides/ai-agents-roi-guide": "AI Agent ROI Guide",
  "/guides/openclaw-managed-service-uk": "OpenClaw Managed Service UK",
  "/guides/openclaw-booking-automation": "OpenClaw Booking Automation",
  "/guides/openclaw-audit-service": "OpenClaw Audit Service",
};

export function titleFromSlug(slug: string) {
  const specialWords: Record<string, string> = {
    ai: "AI",
    autogen: "AutoGen",
    chatgpt: "ChatGPT",
    eu: "EU",
    gdpr: "GDPR",
    n8n: "n8n",
    openclaw: "OpenClaw",
    roi: "ROI",
    smes: "SMEs",
    uk: "UK",
    va: "VA",
    vs: "vs",
  };

  return slug
    .split("-")
    .map((word) => {
      if (specialWords[word]) return specialWords[word];
      if (/^\d+$/.test(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function getGuideRoutes() {
  try {
    const guidesDir = join(process.cwd(), "app", "guides");

    return readdirSync(guidesDir, { withFileTypes: true })
      .filter((entry) => {
        return (
          entry.isDirectory() &&
          !entry.name.startsWith("[") &&
          !entry.name.startsWith(".") &&
          !entry.name.startsWith("_") &&
          entry.name !== "category" &&
          existsSync(join(guidesDir, entry.name, "page.tsx"))
        );
      })
      .map((entry) => entry.name)
      .sort();
  } catch {
    return [];
  }
}

function normalise(guides: Guide[]): Guide[] {
  const seen = new Set<string>();
  const out: Guide[] = [];
  for (const guide of guides) {
    if (seen.has(guide.href)) continue;
    seen.add(guide.href);
    out.push({ ...guide, title: TITLE_OVERRIDES[guide.href] ?? guide.title });
  }
  return out;
}

/** Curated sections with consolidated hrefs deduped and titles normalised. */
export function getCuratedSections(): Record<string, Guide[]> {
  const result: Record<string, Guide[]> = {};
  for (const [name, guides] of Object.entries(guidesData)) {
    result[name] = normalise(guides);
  }
  return result;
}

/** Published guides not present in any curated section ("More Guides"). */
export function getAdditionalGuides(): Guide[] {
  const listed = new Set(
    Object.values(guidesData)
      .flat()
      .map((guide) => guide.href),
  );
  return getGuideRoutes()
    .filter((slug) => !listed.has(`/guides/${slug}`))
    .map((slug) => ({
      title: titleFromSlug(slug),
      href: `/guides/${slug}`,
      category: "More",
    }));
}

export function getCategory(slug: string) {
  return guideCategories.find((c) => c.slug === slug);
}

/** Guides for one category page. */
export function getGuidesForCategory(slug: string): Guide[] {
  const category = getCategory(slug);
  if (!category) return [];
  if (category.slug === "more-guides") return getAdditionalGuides();
  return getCuratedSections()[category.name] ?? [];
}

/** Total distinct published guide pages (used for the hub count badge). */
export function getTotalGuideCount() {
  return getGuideRoutes().length;
}
