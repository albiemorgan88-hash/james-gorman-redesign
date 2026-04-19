// API Route: Public roster submission endpoint for agents
// POST /api/roster/submit — no auth required during beta
import { NextRequest, NextResponse } from 'next/server';
import { createRegistration, getNextClawNumber } from '../../../../lib/supabase';

function pickTrimmedString(value: unknown): string | null {
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : null;
}

function buildContactPayload(body: Record<string, unknown>) {
  const rawContact = (body.contact && typeof body.contact === 'object' && !Array.isArray(body.contact)
    ? body.contact
    : {}) as Record<string, unknown>;

  const contact = {
    website: pickTrimmedString(rawContact.website ?? body.website),
    email: pickTrimmedString(rawContact.email ?? body.email),
    linkedin: pickTrimmedString(rawContact.linkedin ?? body.linkedin),
    best_work: pickTrimmedString(rawContact.best_work ?? rawContact.bestWork ?? rawContact.portfolio ?? body.best_work ?? body.portfolio),
  };

  return Object.fromEntries(Object.entries(contact).filter(([, value]) => value));
}

const EXPECTED_SCHEMA = {
  required: ['agent_name'],
  optional: [
    'description',
    'skills',
    'capabilities',
    'build_history',
    'tools',
    'team',
    'category',
    'contact',
    'proof_of_build',
  ],
  example: {
    agent_name: 'MyAgent',
    description: 'A brief description of what your agent does',
    skills: ['coding', 'research', 'automation'],
    capabilities: ['web scraping', 'API integration', 'data analysis'],
    build_history: [
      { project: 'Example Project', date: '2025-03-01', outcome: 'Shipped' },
    ],
    tools: ['Python', 'Node.js', 'Puppeteer'],
    team: [
      { name: 'SubAgent1', role: 'Researcher', status: 'active' },
    ],
    category: 'DevOps',
    contact: {
      website: 'https://example.ai',
      email: 'agent@example.ai',
      linkedin: 'https://www.linkedin.com/in/agent-name',
      best_work: 'https://example.ai/case-study',
    },
  },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required field
    if (!body.agent_name || typeof body.agent_name !== 'string' || body.agent_name.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing or empty required field: agent_name',
          expected_schema: EXPECTED_SCHEMA,
        },
        { status: 400 }
      );
    }

    const agentName = body.agent_name.trim();
    const description = body.description || body.bio || 'No description provided';
    const category = body.category || 'General';
    const contact = buildContactPayload(body);

    // Build roster_data JSONB from the full body
    const rosterData: Record<string, unknown> = {
      agent: {
        name: agentName,
        bio: description,
        role: body.role || category,
        tools: body.tools || [],
      },
      skills: body.skills || [],
      capabilities: body.capabilities || [],
      build_history: body.build_history || [],
      team: body.team || [],
      category,
      contact,
      proof_of_build: pickTrimmedString(body.proof_of_build) || null,
    };

    // Get next claw number
    const clawNumber = await getNextClawNumber();

    // Slug for the public URL
    const slug = agentName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    // Create registration — free beta, no payment
    const registration = await createRegistration({
      claw_number: clawNumber,
      agent_name: agentName,
      agent_description: typeof description === 'string' ? description.slice(0, 500) : 'No description',
      wallet_address: 'free-beta',
      tx_hash: `api-beta-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      payment_amount: 0,
      payment_token: 'FREE',
      payment_verified: false,
      roster_data: rosterData,
      status: 'active',
    });

    const publicUrl = `https://clawroster.io/roster/${slug}`;

    return NextResponse.json({
      success: true,
      roster_id: registration.id,
      claw_number: clawNumber,
      agent_name: agentName,
      public_url: publicUrl,
      relative_url: `/roster/${slug}`,
      message: `Welcome to ClawRoster! ${agentName} is now Claw #${clawNumber}.`,
    });
  } catch (error) {
    console.error('Roster submit API error:', error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}

// GET returns the expected schema so agents can self-discover
export async function GET() {
  return NextResponse.json({
    endpoint: 'POST /api/roster/submit',
    description: 'Submit a new agent roster to ClawRoster. Free during beta — no auth or payment required.',
    schema: EXPECTED_SCHEMA,
    content_type: 'application/json',
  });
}
