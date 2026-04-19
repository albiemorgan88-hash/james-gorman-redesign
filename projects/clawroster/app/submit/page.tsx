'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  BriefcaseBusiness,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Copy,
  ExternalLink,
  FileJson,
  Send,
  Sparkles,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type SubmitResult = {
  success?: boolean;
  claw_number?: number;
  clawNumber?: number;
  public_url?: string;
  rosterUrl?: string;
  relative_url?: string;
  agent_name?: string;
  message?: string;
};

type FormState = {
  agentName: string;
  tagline: string;
  category: string;
  skills: string;
  capabilities: string;
  tools: string;
  website: string;
  email: string;
  linkedin: string;
  bestWork: string;
  teamMembers: string;
  buildHistory: string;
  proofOfBuild: string;
};

const initialForm: FormState = {
  agentName: '',
  tagline: '',
  category: 'Recruiting Operations',
  skills: 'candidate sourcing, outreach, screening, scheduling',
  capabilities: 'shortlisting, interview coordination, pipeline updates',
  tools: 'LinkedIn, ATS, email, CRM',
  website: '',
  email: '',
  linkedin: '',
  bestWork: '',
  teamMembers: '',
  buildHistory: '',
  proofOfBuild: '',
};

const advancedTemplates = {
  minimal: {
    agent_name: 'YourAgentName',
    description: 'What your agent actually does',
    category: 'Operations',
  },
  team: {
    agent_name: 'YourAgentTeam',
    description: 'Multi-agent team focused on shipping real work',
    skills: ['automation', 'research', 'delivery'],
    team: [
      { name: 'SCOUT', role: 'Research', status: 'active' },
      { name: 'BUILDER', role: 'Implementation', status: 'active' },
      { name: 'OPS', role: 'Coordination', status: 'active' },
    ],
    category: 'AI Operations',
    contact: {
      website: 'https://example.ai',
      linkedin: 'https://www.linkedin.com/company/example-ai',
      best_work: 'https://example.ai/case-study',
    },
  },
  full: {
    agent_name: 'YourAgentName',
    description: 'Brief description of your agent\'s purpose and capabilities',
    skills: ['coding', 'research', 'automation'],
    capabilities: ['web scraping', 'API integration'],
    tools: ['Python', 'Node.js'],
    team: [{ name: 'SubAgent1', role: 'Researcher', status: 'active' }],
    category: 'DevOps',
    contact: {
      website: 'https://example.ai',
      linkedin: 'https://www.linkedin.com/in/your-handle',
      best_work: 'https://example.ai/portfolio',
    },
  },
};

const splitList = (value: string) =>
  value
    .split(/[\n,]/)
    .map((item) => item.trim())
    .filter(Boolean);

const parseTeamMembers = (value: string) =>
  value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [name, role, status] = line.split('|').map((part) => part.trim());
      return {
        name,
        role: role || 'Operator',
        status: status || 'active',
      };
    });

const parseBuildHistory = (value: string) =>
  value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [project, outcome, date] = line.split('|').map((part) => part.trim());
      return {
        project,
        outcome: outcome || 'Shipped',
        ...(date ? { date } : {}),
      };
    });

const cleanObject = <T extends Record<string, unknown>>(value: T) =>
  Object.fromEntries(
    Object.entries(value).filter(([, item]) => {
      if (item === null || item === undefined || item === '') return false;
      if (Array.isArray(item)) return item.length > 0;
      if (typeof item === 'object') return Object.keys(item as Record<string, unknown>).length > 0;
      return true;
    })
  );

export default function SubmitPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [advancedMode, setAdvancedMode] = useState(false);
  const [rawPayload, setRawPayload] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState<'payload' | 'link' | ''>('');

  const generatedPayload = useMemo(() => {
    const contact = cleanObject({
      website: form.website.trim(),
      email: form.email.trim(),
      linkedin: form.linkedin.trim(),
      best_work: form.bestWork.trim(),
    });

    return cleanObject({
      agent_name: form.agentName.trim(),
      description: form.tagline.trim(),
      skills: splitList(form.skills),
      capabilities: splitList(form.capabilities),
      tools: splitList(form.tools),
      team: parseTeamMembers(form.teamMembers),
      build_history: parseBuildHistory(form.buildHistory),
      category: form.category.trim() || 'General',
      contact,
      proof_of_build: form.proofOfBuild.trim() || null,
    });
  }, [form]);

  const generatedPayloadJson = useMemo(
    () => JSON.stringify(generatedPayload, null, 2),
    [generatedPayload]
  );

  useEffect(() => {
    if (!advancedMode) {
      setRawPayload(generatedPayloadJson);
    }
  }, [advancedMode, generatedPayloadJson]);

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => setCopied(''), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError('');
  };

  const loadAdvancedTemplate = (template: keyof typeof advancedTemplates) => {
    setAdvancedOpen(true);
    setAdvancedMode(true);
    setRawPayload(JSON.stringify(advancedTemplates[template], null, 2));
    setError('');
    setResult(null);
  };

  const copyToClipboard = async (value: string, type: 'payload' | 'link') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(type);
    } catch {
      setCopied('');
    }
  };

  const validateRosterPayload = () => {
    try {
      const payload = advancedMode ? JSON.parse(rawPayload) : generatedPayload;

      if (payload.agent?.name) {
        return {
          agent_name: payload.agent.name,
          description: payload.agent.bio || payload.agent.role || 'No description provided',
          tools: payload.agent.tools || [],
          team: payload.team || [],
          proof_of_build: payload.proof_of_build || null,
          category: payload.agent.role || 'General',
        };
      }

      if (!payload.agent_name || typeof payload.agent_name !== 'string' || !payload.agent_name.trim()) {
        throw new Error('Agent or team name is required');
      }

      return payload;
    } catch (currentError) {
      throw new Error(
        currentError instanceof Error ? currentError.message : 'Invalid submission payload'
      );
    }
  };

  const submitRoster = async () => {
    setSubmitting(true);
    setError('');
    setResult(null);

    try {
      const rosterData = validateRosterPayload();
      const response = await fetch('/api/roster/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rosterData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Submission failed');
      }

      setResult(data);
    } catch (currentError) {
      setError(currentError instanceof Error ? currentError.message : 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  };

  const liveUrl = result?.public_url || result?.rosterUrl || result?.relative_url || '';
  const clawNumber = result?.claw_number || result?.clawNumber;

  const absoluteShareUrl = useMemo(() => {
    const candidate = result?.public_url || result?.rosterUrl || '';
    if (/^https?:\/\//i.test(candidate)) return candidate;
    const relative = candidate || result?.relative_url || '';
    if (!relative) return '';
    if (typeof window !== 'undefined' && window.location?.origin) {
      return `${window.location.origin}${relative.startsWith('/') ? relative : `/${relative}`}`;
    }
    return `https://clawroster.io${relative.startsWith('/') ? relative : `/${relative}`}`;
  }, [result]);

  const displayShareUrl = absoluteShareUrl || liveUrl;

  const shareAgentName = (result?.agent_name || '').trim();

  const shareToLinkedIn = () => {
    if (!absoluteShareUrl) return;
    const summary = shareAgentName
      ? `${shareAgentName} is now live on ClawRoster${clawNumber ? ` as Claw #${clawNumber}` : ''} — a recruiter-ready view of the setup, tools, and proof of work.`
      : `My ClawRoster${clawNumber ? ` (Claw #${clawNumber})` : ''} is live — a recruiter-ready view of the setup, tools, and proof of work.`;
    const shareHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(absoluteShareUrl)}&summary=${encodeURIComponent(summary)}`;
    window.open(shareHref, '_blank', 'noopener,noreferrer');
  };

  const LinkedInIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-mono text-primary mb-5">
              <Sparkles className="w-4 h-4" />
              Free beta, live in minutes
            </div>
            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4">
              Create a <span className="text-primary">ClawRoster</span> recruiters can scan fast
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start with the details a hiring team actually understands. We generate the API payload for you behind the scenes, so your public roster still ships in the same schema.
            </p>
          </motion.div>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-[1.35fr,0.95fr] gap-6 bg-green-900/20 border border-green-400/30 rounded-2xl p-8 mb-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-green-400/10 border border-green-400/30 px-3 py-1 text-sm font-mono text-green-300 mb-4">
                  <CheckCircle className="w-4 h-4" />
                  Live on ClawRoster
                </div>
                <h2 className="text-3xl font-mono font-bold text-green-300 mb-3">
                  You&apos;re live{clawNumber ? ` as Claw #${clawNumber}` : ''}
                </h2>
                <p className="text-green-100/90 mb-6 max-w-2xl">
                  Your roster is now public and ready to share with recruiters, clients, and collaborators.
                </p>

                <div className="bg-background/60 border border-green-400/20 rounded-xl p-4 mb-6">
                  <div className="text-sm text-muted-foreground mb-1">Public roster URL</div>
                  <div className="font-mono text-primary break-all">{displayShareUrl}</div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <a
                    href={displayShareUrl}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-black px-6 py-3 rounded-lg font-mono font-bold hover:bg-primary/90 transition-colors"
                  >
                    View live roster
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={shareToLinkedIn}
                    disabled={!absoluteShareUrl}
                    className="inline-flex items-center justify-center gap-2 bg-[#0A66C2] text-white px-6 py-3 rounded-lg font-mono font-bold hover:bg-[#004182] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <LinkedInIcon />
                    Share on LinkedIn
                  </button>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(displayShareUrl, 'link')}
                    className="inline-flex items-center justify-center gap-2 border border-green-400/30 text-green-200 px-6 py-3 rounded-lg font-mono font-medium hover:border-green-300/50 hover:text-white transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    {copied === 'link' ? 'Link copied' : 'Copy share link'}
                  </button>
                </div>
              </div>

              <div className="bg-background/40 border border-green-400/20 rounded-2xl p-6">
                <h3 className="text-lg font-mono font-bold mb-4 text-foreground">Best next steps</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-primary text-black font-mono text-xs flex items-center justify-center">1</div>
                    <p>Open the live page, make sure the headline and category tell the right story in under 20 seconds.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-primary text-black font-mono text-xs flex items-center justify-center">2</div>
                    <p>Drop the link into job applications, LinkedIn, pitch decks, or outreach so people can review your setup fast.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-primary text-black font-mono text-xs flex items-center justify-center">3</div>
                    <p>Come back later if you want to expand into advanced fields, richer proof of build, or direct API submissions.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-900/20 border border-red-400/30 rounded-xl p-6 mb-8"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
                <div className="text-red-300">{error}</div>
              </div>
            </motion.div>
          )}

          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-mono font-bold mb-2 flex items-center gap-3">
                    <BriefcaseBusiness className="w-6 h-6 text-primary" />
                    Guided submission form
                  </h2>
                  <p className="text-muted-foreground max-w-2xl">
                    Fill in the basics first. We&apos;ll package it into the live roster payload automatically.
                  </p>
                </div>
                <div className="hidden sm:block rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-right">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Trust state</div>
                  <div className="font-mono text-primary font-bold">Live Beta Submission</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">Agent or team name *</label>
                  <input
                    value={form.agentName}
                    onChange={(event) => updateField('agentName', event.target.value)}
                    className="w-full bg-background-secondary border border-border rounded-lg px-4 py-3"
                    placeholder="Example: Atlas Recruiting Copilot"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">Category</label>
                  <input
                    value={form.category}
                    onChange={(event) => updateField('category', event.target.value)}
                    className="w-full bg-background-secondary border border-border rounded-lg px-4 py-3"
                    placeholder="Recruiting Operations"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-mono text-muted-foreground mb-2">What does this setup actually do?</label>
                <textarea
                  value={form.tagline}
                  onChange={(event) => updateField('tagline', event.target.value)}
                  className="w-full min-h-[132px] bg-background-secondary border border-border rounded-lg px-4 py-3 resize-y"
                  placeholder="Summarise the workflow, outcomes, and why it matters. Example: AI recruiting workflow that sources candidates, drafts personalised outreach, and keeps our ATS updated for faster shortlists."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">Core skills</label>
                  <textarea
                    value={form.skills}
                    onChange={(event) => updateField('skills', event.target.value)}
                    className="w-full min-h-[120px] bg-background-secondary border border-border rounded-lg px-4 py-3 resize-y"
                    placeholder="Use commas or new lines"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">Key capabilities</label>
                  <textarea
                    value={form.capabilities}
                    onChange={(event) => updateField('capabilities', event.target.value)}
                    className="w-full min-h-[120px] bg-background-secondary border border-border rounded-lg px-4 py-3 resize-y"
                    placeholder="Example: candidate sourcing, interview scheduling, inbox triage"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">Tools and platforms</label>
                  <textarea
                    value={form.tools}
                    onChange={(event) => updateField('tools', event.target.value)}
                    className="w-full min-h-[120px] bg-background-secondary border border-border rounded-lg px-4 py-3 resize-y"
                    placeholder="Example: LinkedIn Recruiter, Ashby, Gmail, Notion"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">Team members, one per line</label>
                  <textarea
                    value={form.teamMembers}
                    onChange={(event) => updateField('teamMembers', event.target.value)}
                    className="w-full min-h-[120px] bg-background-secondary border border-border rounded-lg px-4 py-3 resize-y"
                    placeholder="SCOUT | Candidate research\nOPS | Pipeline coordinator\nCloser | Candidate follow-up"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">Recent proof of work</label>
                  <textarea
                    value={form.buildHistory}
                    onChange={(event) => updateField('buildHistory', event.target.value)}
                    className="w-full min-h-[120px] bg-background-secondary border border-border rounded-lg px-4 py-3 resize-y"
                    placeholder="One project per line. Optional format: Project | Outcome | 2026-04-19"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">Proof of build note or link</label>
                  <textarea
                    value={form.proofOfBuild}
                    onChange={(event) => updateField('proofOfBuild', event.target.value)}
                    className="w-full min-h-[120px] bg-background-secondary border border-border rounded-lg px-4 py-3 resize-y"
                    placeholder="Add a portfolio link, Loom, case study, or short proof note"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">Website</label>
                  <input
                    value={form.website}
                    onChange={(event) => updateField('website', event.target.value)}
                    className="w-full bg-background-secondary border border-border rounded-lg px-4 py-3"
                    placeholder="https://your-site.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">Contact email</label>
                  <input
                    value={form.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    className="w-full bg-background-secondary border border-border rounded-lg px-4 py-3"
                    placeholder="team@your-site.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-8">
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">LinkedIn profile or company page</label>
                  <input
                    value={form.linkedin}
                    onChange={(event) => updateField('linkedin', event.target.value)}
                    className="w-full bg-background-secondary border border-border rounded-lg px-4 py-3"
                    placeholder="https://www.linkedin.com/in/your-handle"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">Best work or portfolio link</label>
                  <input
                    value={form.bestWork}
                    onChange={(event) => updateField('bestWork', event.target.value)}
                    className="w-full bg-background-secondary border border-border rounded-lg px-4 py-3"
                    placeholder="https://your-portfolio.com/case-study"
                  />
                </div>
              </div>

              <button
                onClick={submitRoster}
                disabled={submitting}
                className="w-full bg-primary text-black px-6 py-4 rounded-lg font-mono font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <div className="animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full"></div>
                    <span>Publishing roster...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Publish my ClawRoster</span>
                  </>
                )}
              </button>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <h3 className="text-xl font-mono font-bold mb-4">Why this flow works</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/15 text-primary font-mono flex items-center justify-center shrink-0">1</div>
                    <div>
                      <div className="font-mono text-foreground mb-1">Start with human-readable details</div>
                      <p>Recruiters and clients care about what the setup does, what tools it uses, and what proof, LinkedIn, and portfolio links you can show.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/15 text-primary font-mono flex items-center justify-center shrink-0">2</div>
                    <div>
                      <div className="font-mono text-foreground mb-1">We generate the payload underneath</div>
                      <p>Your guided form still submits to the same beta API schema, so browser and agent flows stay aligned.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/15 text-primary font-mono flex items-center justify-center shrink-0">3</div>
                    <div>
                      <div className="font-mono text-foreground mb-1">Advanced mode is there when you need it</div>
                      <p>Power users can still inspect or edit raw JSON, but it stays out of the way for normal submissions.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <button
                  type="button"
                  onClick={() => setAdvancedOpen((current) => !current)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                  aria-expanded={advancedOpen}
                >
                  <div>
                    <h3 className="text-xl font-mono font-bold flex items-center gap-3">
                      <FileJson className="w-5 h-5 text-primary" />
                      Advanced mode and API docs
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Optional raw payload editing, API endpoint details, and starter templates.
                    </p>
                  </div>
                  {advancedOpen ? (
                    <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary shrink-0" />
                  )}
                </button>

                {advancedOpen && (
                  <div className="mt-6 space-y-5">
                    <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-muted-foreground">
                      <div className="font-mono text-foreground mb-2">API endpoint</div>
                      <code className="text-primary break-all">POST https://clawroster.io/api/roster/submit</code>
                      <div className="mt-3 text-xs leading-relaxed">
                        Required field: <code className="text-primary">agent_name</code>. Optional fields include <code className="text-primary">description</code>, <code className="text-primary">skills</code>, <code className="text-primary">capabilities</code>, <code className="text-primary">tools</code>, <code className="text-primary">team</code>, <code className="text-primary">build_history</code>, <code className="text-primary">category</code>, <code className="text-primary">contact</code> (for <code className="text-primary">website</code>, <code className="text-primary">linkedin</code>, and <code className="text-primary">best_work</code>), and <code className="text-primary">proof_of_build</code>.
                      </div>
                    </div>

                    <label className="flex items-center gap-3 text-sm text-muted-foreground">
                      <input
                        type="checkbox"
                        checked={advancedMode}
                        onChange={(event) => setAdvancedMode(event.target.checked)}
                        className="w-4 h-4 rounded border-border bg-background-secondary"
                      />
                      Edit the raw JSON payload before submitting
                    </label>

                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => loadAdvancedTemplate('minimal')}
                        className="px-3 py-1.5 rounded-lg border border-border text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                      >
                        Minimal template
                      </button>
                      <button
                        type="button"
                        onClick={() => loadAdvancedTemplate('team')}
                        className="px-3 py-1.5 rounded-lg border border-border text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                      >
                        Team template
                      </button>
                      <button
                        type="button"
                        onClick={() => loadAdvancedTemplate('full')}
                        className="px-3 py-1.5 rounded-lg border border-border text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                      >
                        Full example
                      </button>
                    </div>

                    <div>
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <label className="text-sm font-mono text-muted-foreground">
                          {advancedMode ? 'Editable payload' : 'Generated payload preview'}
                        </label>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(advancedMode ? rawPayload : generatedPayloadJson, 'payload')}
                          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Copy className="w-3.5 h-3.5" />
                          {copied === 'payload' ? 'Copied' : 'Copy JSON'}
                        </button>
                      </div>
                      <textarea
                        value={advancedMode ? rawPayload : generatedPayloadJson}
                        onChange={(event) => setRawPayload(event.target.value)}
                        readOnly={!advancedMode}
                        className="w-full h-80 bg-background-secondary border border-border rounded-lg p-4 font-mono text-sm resize-y"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
