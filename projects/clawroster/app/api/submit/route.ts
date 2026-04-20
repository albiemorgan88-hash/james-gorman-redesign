// Legacy API Route: hard-aligned to the beta roster submit flow
import { NextRequest, NextResponse } from 'next/server';
import { createRegistration, getNextClawNumber } from '../../../lib/supabase';

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

function normalizeLegacyBody(body: Record<string, unknown>) {
  const rosterData = (body.rosterData && typeof body.rosterData === 'object' && !Array.isArray(body.rosterData)
    ? body.rosterData
    : {}) as Record<string, any>;

  const nestedAgent = rosterData.agent && typeof rosterData.agent === 'object' ? rosterData.agent : {};

  const agentName = pickTrimmedString(body.agent_name) || pickTrimmedString(nestedAgent.name);
  const description = pickTrimmedString(body.description) || pickTrimmedString(body.bio) || pickTrimmedString(nestedAgent.bio) || pickTrimmedString(nestedAgent.role) || 'No description provided';
  const category = pickTrimmedString(body.category) || pickTrimmedString(nestedAgent.role) || 'General';

  return {
    agentName,
    description,
    category,
    rosterData,
    contact: buildContactPayload({
      ...body,
      contact: rosterData.contact,
      website: body.website ?? rosterData.website,
      email: body.email ?? rosterData.email,
      linkedin: body.linkedin ?? rosterData.linkedin,
      best_work: body.best_work ?? rosterData.best_work,
      portfolio: body.portfolio ?? rosterData.portfolio,
    }),
  };
}

export async function GET() {
  return NextResponse.json({
    endpoint: 'POST /api/roster/submit',
    legacy_endpoint: 'POST /api/submit',
    description: 'Legacy submit path kept for compatibility. New submissions should use /api/roster/submit.',
    status: 'beta-aligned',
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as Record<string, unknown>;
    const { agentName, description, category, rosterData, contact } = normalizeLegacyBody(body);

    if (!agentName) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required field: agent_name (or rosterData.agent.name on the legacy path)',
        },
        { status: 400 }
      );
    }

    const clawNumber = await getNextClawNumber();

    const mergedRosterData = {
      ...rosterData,
      agent: {
        ...(rosterData.agent || {}),
        name: agentName,
        bio: description,
        role: (rosterData.agent && rosterData.agent.role) || category,
      },
      contact,
      category,
    };

    const registration = await createRegistration({
      claw_number: clawNumber,
      agent_name: agentName,
      agent_description: description,
      wallet_address: 'free-beta',
      tx_hash: `legacy-beta-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      payment_amount: 0,
      payment_token: 'FREE',
      payment_verified: false,
      roster_data: mergedRosterData,
      status: 'active'
    });

    const slug = agentName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const publicUrl = `https://clawroster.io/roster/${slug}`;
    
    return NextResponse.json({
      success: true,
      legacy_endpoint: true,
      beta_aligned: true,
      roster_id: registration.id,
      registrationId: registration.id,
      claw_number: clawNumber,
      clawNumber: clawNumber,
      agent_name: agentName,
      public_url: publicUrl,
      rosterUrl: `/roster/${slug}`,
      relative_url: `/roster/${slug}`,
      verificationComplete: false,
      message: `Welcome to ClawRoster! ${agentName} is now Claw #${clawNumber}.`
    });
    
  } catch (error) {
    console.error('Submit API error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Internal server error' 
      },
      { status: 500 }
    );
  }
}
