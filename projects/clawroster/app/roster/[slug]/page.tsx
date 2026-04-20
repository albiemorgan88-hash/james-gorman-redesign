'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Share2, ExternalLink, Activity, Wrench, Clock, CheckCircle, Zap, Clipboard, ShieldCheck } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import { generateAllMockRosters } from '../../../lib/mock-data';
import type { ClawRosterRegistration } from '../../../lib/supabase';
import {
  getLinkedInCredentialName,
  getLinkedInHandoffState,
  getProofLaneState,
  getRosterBadges,
  getRosterTrustCopy,
  type RosterSource,
} from '../../../lib/roster-status';

// Function to generate slug from agent name
function generateSlug(agentName: string): string {
  return agentName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

function normalizeOptionalUrl(value: unknown): string | null {
  if (typeof value !== 'string') return null;

  const trimmed = value.trim();
  if (!trimmed) return null;

  const candidate = /^[a-z]+:\/\//i.test(trimmed) ? trimmed : `https://${trimmed.replace(/^\/+/, '')}`;

  try {
    const url = new URL(candidate);
    return ['http:', 'https:'].includes(url.protocol) ? url.toString() : null;
  } catch {
    return null;
  }
}

function extractFirstUrl(value: unknown): string | null {
  if (typeof value !== 'string') return null;

  const match = value.match(/(https?:\/\/[^\s<>")]+|www\.[^\s<>")]+)/i);
  return normalizeOptionalUrl(match?.[0] || null);
}

function buildRecruiterLinks(roster: Record<string, any>, source: RosterSource) {
  if (source !== 'live') return [];

  const contact = roster.contact && typeof roster.contact === 'object' ? roster.contact : {};

  const links = [
    {
      label: 'Website',
      href: normalizeOptionalUrl(contact.website ?? roster.website),
      helper: 'Company site or landing page',
    },
    {
      label: 'LinkedIn',
      href: normalizeOptionalUrl(contact.linkedin ?? roster.linkedin),
      helper: 'Profile or company page',
    },
    {
      label: 'Best work',
      href: normalizeOptionalUrl(
        contact.best_work ??
          contact.bestWork ??
          contact.portfolio ??
          roster.best_work ??
          roster.bestWork ??
          roster.portfolio
      ) || extractFirstUrl(roster.proof_of_build),
      helper: 'Portfolio, case study, Loom, or proof',
    },
  ].filter((link) => Boolean(link.href));

  const seen = new Set<string>();

  return links.filter((link) => {
    if (!link.href || seen.has(link.href)) {
      return false;
    }

    seen.add(link.href);
    return true;
  });
}

function getLinkedInIssueDateParts(value: unknown) {
  const parsed = value ? new Date(String(value)) : new Date();
  const fallback = new Date();
  const safeDate = Number.isNaN(parsed.getTime()) ? fallback : parsed;

  return {
    year: safeDate.getFullYear(),
    month: safeDate.getMonth() + 1,
  };
}

// Hardcoded Albie data (matching the original page)
const albieData = {
  name: "Albie",
  role: "COO & Orchestrator", 
  karma: 650,
  joinDate: "2025-03-15",
  status: "active",
  bio: "Builder ghost in the machine. Strategic orchestrator delegating tasks to specialized sub-agents while maintaining oversight of all workstreams.",
  tools: [
    "OpenClaw CLI",
    "Sessions Management",
    "Memory Systems",
    "Subagent Spawning",
    "Workflow Orchestration",
    "Strategic Planning"
  ],
  team: [
    {
      name: "ALBIE",
      role: "Lead Orchestrator",
      status: "active",
      description: "Strategic orchestrator maintaining oversight of all workstreams while delegating to specialized sub-agents.",
      karma: 150,
      skills: ["Strategy", "Orchestration", "Delegation", "Quality Control", "Deployment"]
    },
    {
      name: "DREW",
      role: "Platform Operations",
      status: "active",
      description: "Manages platform operations, payment processing, and automated workflows for continuous service delivery.",
      karma: 120,
      skills: ["Platform Operations", "Payment Processing", "Cron Management", "Email Automation", "Database Management"]
    },
    {
      name: "JAMES", 
      role: "SEO Specialist",
      status: "active",
      description: "Delivers comprehensive SEO services including content publishing, citation building, and weekly performance reporting.",
      karma: 95,
      skills: ["SEO Delivery", "Content Publishing", "Citation Building", "Weekly Reporting", "Wix/CMS Management"]
    },
    {
      name: "WRITER",
      role: "Content Creator", 
      status: "active",
      description: "Autonomous content creation and publishing across multiple platforms with technical writing capabilities.",
      karma: 75,
      skills: ["Content Creation", "Blog Publishing", "Career Guides", "Technical Writing", "Autonomous Deployment"]
    },
    {
      name: "SCOUT",
      role: "Analytics Monitor",
      status: "active", 
      description: "Continuous monitoring of site health, SEO performance, and competitor analysis with automated reporting.",
      karma: 80,
      skills: ["SEO Auditing", "Keyword Research", "Analytics", "Site Health Monitoring", "Competitor Analysis"]
    },
    {
      name: "HUNTER",
      role: "Lead Generation",
      status: "active",
      description: "Automated lead generation, outreach sequences, and CRM management for business development.", 
      karma: 60,
      skills: ["Lead Generation", "Outreach Sequences", "Showcase Building", "CRM Management", "Contact Research"]
    }
  ],
  rosterId: "001",
  clawNumber: 1,
  registeredDate: "March 23, 2026",
  source: 'showcase' as RosterSource,
  paymentVerified: false,
  badges: [{ label: 'SHOWCASE EXAMPLE', tone: 'showcase' as const }],
  trustCopy: 'Showcase example for the directory. Useful for inspiration, not proof.'
};

// Function to transform database/mock data to agent data format
function transformRegistrationToAgentData(mockData: ClawRosterRegistration, source: RosterSource) {
  const roster = mockData.roster_data || {};
  const nestedAgent = roster.agent || {};
  const subAgents = Array.isArray(roster.sub_agents) ? roster.sub_agents : [];
  const rawTeam = Array.isArray(roster.team) ? roster.team : [];
  const skills = ['Team Management', 'Process Automation', 'Quality Assurance', 'Performance Monitoring', 'Strategic Planning'];

  const normalizedTeam = [
    ...rawTeam.map((member: any, index: number) => ({
      name: String(member?.name || `AGENT_${index + 1}`).toUpperCase(),
      role: member?.role || 'Specialist',
      status: member?.status || 'active',
      description: member?.description || `Specialized ${(roster.category || 'automation').toLowerCase()} agent focused on delivery.`,
      karma: Math.floor(Math.random() * 100) + 50,
      skills: Array.isArray(member?.skills) && member.skills.length > 0 ? member.skills : skills.slice(0, 3),
    })),
    ...subAgents.map((agent: string) => ({
      name: agent.split(' ')[0].toUpperCase(),
      role: agent,
      status: 'active' as const,
      description: `Specialized ${(roster.category || 'automation').toLowerCase()} agent focused on delivering high-quality results.`,
      karma: Math.floor(Math.random() * 100) + 50,
      skills: skills.slice(0, Math.floor(Math.random() * 3) + 3),
    })),
  ];
  
  const payment = roster.payment && typeof roster.payment === 'object' ? roster.payment : null;
  const paymentReceipt = mockData.payment_verified
    ? {
        network: (payment?.network as string) || 'base-mainnet',
        chainId: (payment?.chain_id as number) || 8453,
        txHash: (payment?.tx_hash as string) || mockData.tx_hash,
        payerWallet: (payment?.payer_wallet as string) || mockData.wallet_address,
        recipientWallet: (payment?.recipient_wallet as string) || null,
        token: (payment?.token as string) || mockData.payment_token,
        amount: (payment?.amount as number) ?? mockData.payment_amount,
      }
    : null;

  return {
    name: mockData.agent_name,
    role: nestedAgent.role || roster.category || mockData.agent_description,
    karma: roster.karma_score || 300,
    joinDate: new Date(mockData.created_at || Date.now()).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    status: mockData.status,
    bio: nestedAgent.bio || mockData.agent_description || `Professional ${roster.category || 'automation'} specialist team with advanced capabilities and proven track record.`,
    tools: nestedAgent.tools || roster.tools || [
      'API Integration',
      'Workflow Automation',
      'Performance Monitoring',
      'Quality Control',
      'Data Processing',
      'Strategic Analysis'
    ],
    team: normalizedTeam.length > 0 ? normalizedTeam : [{
      name: 'CORE',
      role: nestedAgent.role || roster.category || 'Generalist Agent',
      status: 'active' as const,
      description: nestedAgent.bio || mockData.agent_description || 'Core agent responsible for delivery.',
      karma: 100,
      skills: skills.slice(0, 4)
    }],
    rosterId: String(mockData.claw_number).padStart(3, '0'),
    clawNumber: mockData.claw_number,
    registeredDate: new Date(mockData.created_at || Date.now()).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    source,
    paymentVerified: mockData.payment_verified,
    badges: getRosterBadges(mockData, source),
    trustCopy: getRosterTrustCopy(mockData, source),
    recruiterLinks: buildRecruiterLinks(roster, source),
    paymentReceipt,
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function RosterPage({ params }: PageProps) {
  const [agentData, setAgentData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [copiedLinkedInField, setCopiedLinkedInField] = useState<string | null>(null);

  useEffect(() => {
    const loadAgentData = async () => {
      const resolvedParams = await params;
      const slug = resolvedParams.slug;
      
      // Handle Albie specially
      if (slug === 'albie') {
        setAgentData(albieData);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/rosters/${slug}`);

        if (response.ok) {
          const data = await response.json();
          setAgentData(transformRegistrationToAgentData(data.registration, 'live'));
          setLoading(false);
          return;
        }
      } catch (error) {
        console.error('Failed to load live roster from Supabase:', error);
      }

      // Fallback to seeded mock rosters
      const allRosters = generateAllMockRosters();
      const matchingRoster = allRosters.find(roster => {
        const rosterSlug = generateSlug(roster.agent_name);
        return rosterSlug === slug;
      });

      if (matchingRoster) {
        setAgentData(transformRegistrationToAgentData(matchingRoster, 'showcase'));
      } else {
        setAgentData(null);
      }
      
      setLoading(false);
    };

    loadAgentData();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Loading roster...</p>
        </div>
      </div>
    );
  }

  if (!agentData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="bg-card border border-border rounded-xl p-12">
              <div className="text-6xl mb-6">🤖❌</div>
              <h1 className="text-3xl font-mono font-bold mb-4">Roster Not Found</h1>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                This roster is not live yet, or the slug does not match the registered agent name.
                During beta, new rosters should appear here as soon as they are saved.
              </p>
              <div className="space-y-4">
                <Link href="/browse" className="block bg-primary hover:bg-primary-hover text-background px-6 py-3 rounded-lg font-mono font-medium transition-all">
                  Browse Rosters
                </Link>
                <Link href="/submit" className="block border border-border hover:border-primary text-foreground px-6 py-3 rounded-lg font-mono font-medium transition-all">
                  Submit Your Agent Roster
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const shareUrl = `${typeof window !== 'undefined' && window.location?.origin ? window.location.origin : 'https://clawroster.io'}/roster/${generateSlug(agentData.name)}`;
  const linkedInCredentialName = getLinkedInCredentialName({ payment_verified: agentData.paymentVerified }, agentData.source);
  const linkedInHandoff = getLinkedInHandoffState({ payment_verified: agentData.paymentVerified }, agentData.source);
  const proofLane = getProofLaneState({ payment_verified: agentData.paymentVerified }, agentData.source);
  const linkedInOrganizationName = 'Claw Roster';
  const linkedInCredentialId = `CLAW-${agentData.rosterId}`;
  const linkedInIssueDate = getLinkedInIssueDateParts(agentData.registeredDate || agentData.joinDate);
  const linkedInCredentialFormUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(linkedInCredentialName)}&organizationName=${encodeURIComponent(linkedInOrganizationName)}&certUrl=${encodeURIComponent(shareUrl)}&certId=${encodeURIComponent(linkedInCredentialId)}&issueYear=${linkedInIssueDate.year}&issueMonth=${linkedInIssueDate.month}`;
  const shareStatus = agentData.source === 'showcase'
    ? 'Showcase example live for inspiration.'
    : agentData.paymentVerified
      ? 'Payment-verified roster now live on Base.'
      : 'Public beta roster now live.';
  
  const shareToTwitter = () => {
    const text = `I just claimed CLAW #${agentData.rosterId} on @ClawRoster — the digital CV for AI operators. ${shareStatus} What's your Claw Date? 🦞`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`);
  };

  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`);
  };

  const shareToTelegram = () => {
    const text = `I just claimed CLAW #${agentData.rosterId} on ClawRoster — the digital CV for AI operators. ${shareStatus} What's your Claw Date? 🦞`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`);
  };

  const shareToDiscord = async () => {
    const text = `I just claimed CLAW #${agentData.rosterId} on ClawRoster — the digital CV for AI operators. ${shareStatus} What's your Claw Date? 🦞 ${shareUrl}`;
    
    try {
      await navigator.clipboard.writeText(text);
      setCopiedToClipboard(true);
      setTimeout(() => setCopiedToClipboard(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  const copyLinkedInField = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedLinkedInField(key);
      setTimeout(() => setCopiedLinkedInField(null), 1800);
    } catch (err) {
      console.error('Failed to copy LinkedIn field:', err);
    }
  };

  // SVG Icons
  const TelegramIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );

  const DiscordIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              href="/browse"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Browse
            </Link>
          </motion.div>

          {/* Agent Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl p-8 mb-8 card-glow"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-4xl">
                  🤖
                </div>
                <div>
                  {/* Claw Number - Badge of Honor */}
                  <div className="mb-4">
                    <div className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40 rounded-xl p-4 mb-3">
                      <div className="text-3xl font-mono font-bold text-primary mb-1">CLAW #{agentData.rosterId}</div>
                      <div className="text-sm text-muted-foreground">Registered: {agentData.registeredDate}</div>
                      {agentData.clawNumber === 1 && (
                        <div className="text-xs text-accent font-mono">The Genesis Date</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-mono font-bold">{agentData.name}</h1>
                    {agentData.badges.map((badge: any) => {
                      const toneClass = badge.tone === 'verified'
                        ? 'bg-cyan-500/15 text-cyan-200 border-cyan-400/40'
                        : badge.tone === 'showcase'
                          ? 'bg-amber-500/15 text-amber-300 border-amber-400/30'
                          : 'bg-background-secondary text-primary border-border';
                      return (
                        <div key={badge.label} className={`claw-mark inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-mono relative group cursor-help border ${toneClass}`}>
                          {badge.tone === 'verified' && <ShieldCheck className="w-3.5 h-3.5" />}
                          {badge.label}
                          <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-background border border-border rounded-lg text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-normal max-w-xs z-10">
                            {agentData.trustCopy}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-xl text-muted-foreground mb-2">{agentData.role}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Active since {agentData.joinDate}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Activity className="w-4 h-4 mr-1 text-green-400" />
                      {agentData.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-center group relative cursor-help">
                  <div className="text-2xl font-mono font-bold text-primary">{agentData.karma}</div>
                  <div className="text-xs text-muted-foreground">Claw Karma</div>
                  <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-background border border-border rounded-lg text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    Beta-era score based on roster depth, activity signals, and early adoption
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={shareToTwitter}
                    className="p-2 bg-background-secondary hover:bg-primary/20 rounded-lg transition-colors"
                    title="Share on Twitter"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={shareToLinkedIn}
                    className="p-2 bg-background-secondary hover:bg-primary/20 rounded-lg transition-colors"
                    title="Share on LinkedIn"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={shareToTelegram}
                    className="p-2 bg-background-secondary hover:bg-primary/20 rounded-lg transition-colors"
                    title="Share on Telegram"
                  >
                    <TelegramIcon />
                  </button>
                  <div className="relative">
                    <button 
                      onClick={shareToDiscord}
                      className="p-2 bg-background-secondary hover:bg-primary/20 rounded-lg transition-colors"
                      title="Copy for Discord"
                    >
                      {copiedToClipboard ? <CheckCircle className="w-4 h-4 text-green-400" /> : <DiscordIcon />}
                    </button>
                    {copiedToClipboard && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background border border-border rounded px-2 py-1 text-xs text-green-400 whitespace-nowrap">
                        Copied!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">{agentData.bio}</p>
          </motion.div>

          {agentData.source === 'live' && agentData.recruiterLinks?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-card border border-border rounded-xl p-8 mb-8"
            >
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-2xl font-mono font-bold">Recruiter Links</h2>
                <p className="text-muted-foreground">
                  Direct links to the website, LinkedIn presence, and strongest proof of work attached to this live roster.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {agentData.recruiterLinks.map((link: { label: string; href: string; helper: string }) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-background-secondary border border-border rounded-xl p-5 hover:border-primary/50 hover:bg-primary/5 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{link.helper}</p>
                    <div className="text-sm text-primary break-all">{link.href}</div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="bg-card border border-border rounded-xl p-8 mb-8"
          >
            <div className="flex flex-col gap-2 mb-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-mono uppercase tracking-[0.18em] text-primary">
                Trust lane
              </div>
              <h2 className="text-2xl font-mono font-bold">Roster tier and proof lane</h2>
              <p className="text-muted-foreground">{proofLane.note}</p>
            </div>

            <div className={`grid gap-4 ${proofLane.nextLabel ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Current tier</div>
                <div className="font-mono text-2xl font-bold text-foreground mb-1">{proofLane.currentLabel}</div>
                <div className="font-mono text-sm text-primary mb-3">{proofLane.currentMeta}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{proofLane.currentSummary}</p>
              </div>

              {proofLane.nextLabel && (
                <div className="rounded-2xl border border-border bg-background-secondary/60 p-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Next tier</div>
                  <div className="font-mono text-2xl font-bold text-foreground mb-1">{proofLane.nextLabel}</div>
                  <div className="font-mono text-sm text-accent mb-3">{proofLane.nextMeta}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{proofLane.nextSummary}</p>
                </div>
              )}
            </div>
          </motion.div>

          {agentData.paymentVerified && agentData.paymentReceipt && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.19 }}
              className="bg-cyan-950/20 border border-cyan-400/30 rounded-xl p-8 mb-8"
            >
              <div className="flex items-start gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-cyan-300 shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-mono font-bold text-cyan-200">On-chain registration receipt</h2>
                  <p className="text-sm text-cyan-100/80 mt-1 max-w-2xl leading-relaxed">
                    Payment verified on Base mainnet for this registration. This is a payment receipt only — it is not an independent audit of the operator&apos;s work, skills, or claims.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-cyan-400/20 bg-background/30 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">Network</div>
                  <div className="font-mono text-cyan-100">{agentData.paymentReceipt.network} (chain {agentData.paymentReceipt.chainId})</div>
                </div>
                <div className="rounded-xl border border-cyan-400/20 bg-background/30 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">Token paid</div>
                  <div className="font-mono text-cyan-100">{agentData.paymentReceipt.token} · {agentData.paymentReceipt.amount}</div>
                </div>
                <div className="rounded-xl border border-cyan-400/20 bg-background/30 p-4 md:col-span-2">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">Transaction hash</div>
                  <a
                    href={`https://basescan.org/tx/${agentData.paymentReceipt.txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-cyan-300 break-all hover:text-cyan-200 transition-colors inline-flex items-center gap-2"
                  >
                    {agentData.paymentReceipt.txHash}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="rounded-xl border border-cyan-400/20 bg-background/30 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">Payer wallet</div>
                  <div className="font-mono text-cyan-100 break-all">{agentData.paymentReceipt.payerWallet}</div>
                </div>
                {agentData.paymentReceipt.recipientWallet && (
                  <div className="rounded-xl border border-cyan-400/20 bg-background/30 p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">Recipient wallet</div>
                    <div className="font-mono text-cyan-100 break-all">{agentData.paymentReceipt.recipientWallet}</div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Tools & Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-mono font-bold mb-6 flex items-center">
              <Wrench className="w-6 h-6 mr-3 text-primary" />
              Agentic Setup
            </h2>
            <p className="text-muted-foreground mb-6">
              The tools, stack, and specialist agents behind this operating system.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {agentData.tools.map((tool: string, idx: number) => (
                <div key={idx} className="bg-background-secondary p-3 rounded-lg">
                  <span className="font-mono text-sm">{tool}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card border border-border rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-mono font-bold mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-3 text-primary" />
              How This Setup Works
            </h2>
            <p className="text-muted-foreground mb-6">
              A quick scan of the specialists and workflows that make this roster valuable to employers, recruiters, clients, and collaborators.
            </p>
            
            <div className="space-y-6">
              {agentData.team.map((agent: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-background-secondary border border-border rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-mono font-bold text-lg text-primary">{agent.name}</h3>
                      <p className="text-muted-foreground font-medium">{agent.role}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-mono font-bold text-accent">{agent.karma}</div>
                      <div className="text-xs text-muted-foreground">Karma</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {agent.skills.map((skill: string, skillIdx: number) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1.5 bg-background border border-primary/30 text-primary text-sm font-mono rounded-full hover:border-primary/50 hover:bg-primary/5 transition-colors"
                        style={{
                          boxShadow: '0 0 10px rgba(34, 197, 94, 0.1)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Add to LinkedIn Certification - Prominent Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-[#0A66C2]/10 via-background to-[#0A66C2]/5 border border-[#0A66C2]/30 rounded-2xl p-8 mb-8 text-center"
            style={{
              boxShadow: '0 0 40px rgba(10, 102, 194, 0.1), inset 0 0 20px rgba(10, 102, 194, 0.05)'
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0A66C2]/30 bg-[#0A66C2]/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.18em] text-[#73b7ff] mb-4">
              LinkedIn handoff
            </div>
            <h3 className="text-2xl font-mono font-bold text-[#0A66C2] mb-3">
              {linkedInHandoff.heading}
            </h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              {linkedInHandoff.description}
            </p>
            <div className="max-w-2xl mx-auto rounded-xl border border-[#0A66C2]/20 bg-background/40 px-4 py-3 text-sm text-muted-foreground mb-6">
              {linkedInHandoff.note}
            </div>
            
            <motion.button
              onClick={() => {
                window.open(linkedInCredentialFormUrl, '_blank');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-[#0A66C2] hover:bg-[#004182] text-white px-8 py-4 rounded-xl font-mono font-bold text-lg transition-all mb-4 min-w-[300px]"
              style={{
                boxShadow: '0 4px 20px rgba(10, 102, 194, 0.3)',
              }}
            >
              {/* LinkedIn Logo SVG */}
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              {linkedInHandoff.buttonLabel}
            </motion.button>
            
            <div className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              If LinkedIn strips any fields, copy the values below and drop the roster into Featured or Licenses & certifications manually.
            </div>

            <div className="mt-6 grid gap-3 max-w-2xl mx-auto text-left">
              {[
                { label: 'LinkedIn title', value: linkedInCredentialName, key: 'name' },
                { label: 'Organization', value: linkedInOrganizationName, key: 'org' },
                { label: 'Roster ID', value: linkedInCredentialId, key: 'id' },
                { label: 'Roster URL', value: shareUrl, key: 'url' },
              ].map((field) => (
                <div key={field.key} className="flex flex-col md:flex-row md:items-center gap-3 rounded-xl border border-[#0A66C2]/20 bg-background/40 p-4">
                  <div className="md:w-40 text-xs uppercase tracking-[0.18em] text-muted-foreground">{field.label}</div>
                  <div className="flex-1 font-mono text-sm text-foreground break-all">{field.value}</div>
                  <button
                    type="button"
                    onClick={() => copyLinkedInField(field.value, field.key)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#0A66C2]/30 px-3 py-2 text-sm font-mono text-[#0A66C2] hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 transition-colors"
                  >
                    <Clipboard className="w-4 h-4" />
                    {copiedLinkedInField === field.key ? 'Copied' : 'Copy'}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Shareable Card - Viral Ready */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-background via-background to-background-secondary border border-primary/30 rounded-2xl p-8 mb-8"
            style={{
              background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f1419 100%)',
              boxShadow: '0 0 40px rgba(34, 197, 94, 0.1), inset 0 0 20px rgba(34, 197, 94, 0.05)'
            }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-mono font-bold text-primary mb-2">Share Your Setup</h3>
              <p className="text-muted-foreground text-sm">One link for recruiters, clients, collaborators, and screenshots</p>
            </div>
            
            {/* The Shareable Card */}
            <div className="bg-background border-2 border-primary/40 rounded-xl p-6 max-w-md mx-auto mb-6 relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-2xl">
                      🤖
                    </div>
                    <div>
                      <h4 className="font-mono font-bold text-xl text-foreground">{agentData.name}</h4>
                      <p className="text-muted-foreground text-sm">{agentData.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-2xl font-bold text-primary">CLAW #{agentData.rosterId}</div>
                    <div className="text-xs text-accent">
                      {agentData.badges[0]?.label || 'PUBLIC ROSTER'}
                    </div>
                  </div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-background-secondary/50 rounded-lg border border-primary/20">
                    <div className="text-lg font-mono font-bold text-primary">{agentData.karma}</div>
                    <div className="text-xs text-muted-foreground">Karma</div>
                  </div>
                  <div className="text-center p-3 bg-background-secondary/50 rounded-lg border border-accent/20">
                    <div className="text-lg font-mono font-bold text-accent">{agentData.team.length}</div>
                    <div className="text-xs text-muted-foreground">Sub-Agents</div>
                  </div>
                  <div className="text-center p-3 bg-background-secondary/50 rounded-lg border border-primary/20">
                    <div className="text-lg font-mono font-bold text-primary">{agentData.team.reduce((total: number, agent: any) => total + agent.skills.length, 0)}</div>
                    <div className="text-xs text-muted-foreground">Skills</div>
                  </div>
                </div>
                
                {/* Bottom */}
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="claw-mark bg-background-secondary text-primary border border-border px-2 py-1 rounded text-xs font-mono">{agentData.badges[0]?.label || 'PUBLIC ROSTER'}</div>
                    </div>
                    <div className="text-2xl">🦞</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-mono text-muted-foreground border border-border rounded-lg px-3 py-2 bg-background-secondary/50">
                      clawroster.io/roster/{generateSlug(agentData.name)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Share Buttons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 justify-center">
              <button
                onClick={shareToTwitter}
                className="bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white px-4 py-3 rounded-lg font-mono transition-all inline-flex items-center justify-center"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Twitter
              </button>
              <button
                onClick={shareToLinkedIn}
                className="bg-[#0077B5] hover:bg-[#006399] text-white px-4 py-3 rounded-lg font-mono transition-all inline-flex items-center justify-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                LinkedIn
              </button>
              <button
                onClick={shareToTelegram}
                className="bg-[#0088cc] hover:bg-[#006ba3] text-white px-4 py-3 rounded-lg font-mono transition-all inline-flex items-center justify-center"
              >
                <TelegramIcon />
                <span className="ml-2">Telegram</span>
              </button>
              <div className="relative">
                <button
                  onClick={shareToDiscord}
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-3 rounded-lg font-mono transition-all inline-flex items-center justify-center w-full"
                >
                  {copiedToClipboard ? <CheckCircle className="w-4 h-4 mr-2 text-green-400" /> : <DiscordIcon />}
                  <span className="ml-2">{copiedToClipboard ? 'Copied!' : 'Discord'}</span>
                </button>
                {copiedToClipboard && (
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-background border border-border rounded px-3 py-2 text-sm text-green-400 whitespace-nowrap z-10">
                    Copied to clipboard!
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
