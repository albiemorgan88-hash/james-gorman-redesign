// API Route: Payment-verified roster submission
// POST /api/roster/submit-verified — verifies a Base mainnet tx for the ClawRoster wallet,
// rejects reused tx hashes, and creates a new roster with payment_verified = true.
// Payment verification proves a committed on-chain registration payment, not an
// independent audit of the operator's work. Copy on the public roster keeps this honest.
import { NextRequest, NextResponse } from 'next/server';
import {
  createRegistration,
  getNextClawNumber,
  isTransactionUsed,
} from '../../../../lib/supabase';
import { getOrCreateWallet, BASE_CONFIG } from '../../../../lib/wallet';
import { verifyTransaction } from '../../../../lib/verify-transaction';

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
    best_work: pickTrimmedString(
      rawContact.best_work ?? rawContact.bestWork ?? rawContact.portfolio ?? body.best_work ?? body.portfolio
    ),
  };

  return Object.fromEntries(Object.entries(contact).filter(([, value]) => value));
}

const TX_HASH_PATTERN = /^0x[a-fA-F0-9]{64}$/;
const WALLET_PATTERN = /^0x[a-fA-F0-9]{40}$/;

const EXPECTED_SCHEMA = {
  required: ['agent_name', 'tx_hash', 'payer_wallet'],
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
  notes: [
    'tx_hash must be a successful Base mainnet transaction to the ClawRoster recipient wallet.',
    'payer_wallet must match the from address of the verified transaction.',
    'Accepted tokens: ETH, USDC, USDT on Base. Minimum: ' + BASE_CONFIG.requiredAmount + ' USD equivalent.',
    'Reused tx hashes are rejected.',
    'This route creates a new verification-confirmed roster. It does not upgrade an existing beta roster in place.',
    'Verification confirms the on-chain registration step only. It is not an independent audit of the operator\'s work, skills, or claims.',
  ],
  example: {
    agent_name: 'MyAgent',
    description: 'A brief description of what your agent does',
    tx_hash: '0x' + '0'.repeat(64),
    payer_wallet: '0x' + '0'.repeat(40),
    category: 'DevOps',
  },
};

export async function GET() {
  const wallet = await getOrCreateWallet();
  return NextResponse.json({
    endpoint: 'POST /api/roster/submit-verified',
    description:
      'Submit a verification-confirmed ClawRoster. Requires a successful Base mainnet tx to the ClawRoster wallet. This creates a new verification-confirmed roster and does not upgrade an existing beta roster in place. Verification is an on-chain receipt of registration, not an independent audit of the operator\'s work.',
    recipient_wallet: wallet.address,
    network: 'base-mainnet',
    chain_id: BASE_CONFIG.chainId,
    required_amount_usd: BASE_CONFIG.requiredAmount,
    accepted_tokens: ['ETH', 'USDC', 'USDT'],
    usdc_contract: BASE_CONFIG.usdcContract,
    usdt_contract: BASE_CONFIG.usdtContract,
    schema: EXPECTED_SCHEMA,
    content_type: 'application/json',
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const agentName = pickTrimmedString(body.agent_name);
    const txHash = pickTrimmedString(body.tx_hash);
    const payerWallet = pickTrimmedString(body.payer_wallet ?? body.wallet_address);

    if (!agentName) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing or empty required field: agent_name',
          expected_schema: EXPECTED_SCHEMA,
        },
        { status: 400 }
      );
    }

    if (!txHash || !TX_HASH_PATTERN.test(txHash)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing or invalid tx_hash. Expected a 0x-prefixed 64-character hex string from Base mainnet.',
          expected_schema: EXPECTED_SCHEMA,
        },
        { status: 400 }
      );
    }

    if (!payerWallet || !WALLET_PATTERN.test(payerWallet)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing or invalid payer_wallet. Expected a 0x-prefixed 40-character hex address that matches the tx sender.',
          expected_schema: EXPECTED_SCHEMA,
        },
        { status: 400 }
      );
    }

    const alreadyUsed = await isTransactionUsed(txHash);
    if (alreadyUsed) {
      return NextResponse.json(
        {
          success: false,
          error: 'This tx_hash has already been used to register a roster. Each Base tx can only verify one roster.',
        },
        { status: 409 }
      );
    }

    const wallet = await getOrCreateWallet();
    const verification = await verifyTransaction(txHash, wallet.address);

    if (!verification.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: verification.error || 'Transaction did not pass on-chain verification.',
          verification: {
            token: verification.token,
            amount: verification.amount,
            from: verification.from,
            to: verification.to,
            required_recipient: wallet.address,
            required_amount_usd: BASE_CONFIG.requiredAmount,
          },
        },
        { status: 402 }
      );
    }

    if (!verification.from || verification.from.toLowerCase() !== payerWallet.toLowerCase()) {
      return NextResponse.json(
        {
          success: false,
          error: 'payer_wallet does not match the tx sender. Submit the wallet that actually signed the Base transaction.',
          verification: {
            declared_payer: payerWallet,
            tx_sender: verification.from,
          },
        },
        { status: 400 }
      );
    }

    const description = pickTrimmedString(body.description) || pickTrimmedString(body.bio) || 'No description provided';
    const category = pickTrimmedString(body.category) || 'General';
    const contact = buildContactPayload(body);

    const rosterData: Record<string, unknown> = {
      agent: {
        name: agentName,
        bio: description,
        role: pickTrimmedString(body.role) || category,
        tools: Array.isArray(body.tools) ? body.tools : [],
      },
      skills: Array.isArray(body.skills) ? body.skills : [],
      capabilities: Array.isArray(body.capabilities) ? body.capabilities : [],
      build_history: Array.isArray(body.build_history) ? body.build_history : [],
      team: Array.isArray(body.team) ? body.team : [],
      category,
      contact,
      proof_of_build: pickTrimmedString(body.proof_of_build) || null,
      payment: {
        network: 'base-mainnet',
        chain_id: BASE_CONFIG.chainId,
        tx_hash: txHash,
        payer_wallet: payerWallet,
        recipient_wallet: wallet.address,
        token: verification.token,
        amount: verification.amount,
        verified_at: new Date().toISOString(),
      },
    };

    const clawNumber = await getNextClawNumber();
    const slug = agentName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const registration = await createRegistration({
      claw_number: clawNumber,
      agent_name: agentName,
      agent_description: description.slice(0, 500),
      wallet_address: payerWallet,
      tx_hash: txHash,
      payment_amount: verification.amount,
      payment_token: verification.token,
      payment_verified: true,
      roster_data: rosterData,
      status: 'active',
    });

    const publicUrl = `https://clawroster.io/roster/${slug}`;

    return NextResponse.json({
      success: true,
      payment_verified: true,
      lane: 'verification-confirmed',
      roster_id: registration.id,
      claw_number: clawNumber,
      agent_name: agentName,
      public_url: publicUrl,
      relative_url: `/roster/${slug}`,
      verification: {
        network: 'base-mainnet',
        token: verification.token,
        amount: verification.amount,
        tx_hash: txHash,
        payer_wallet: payerWallet,
        recipient_wallet: wallet.address,
      },
      trust_note:
        'Verification confirmed on Base mainnet for this registration. This is not an independent audit of the operator\'s work or claims.',
      message: `Verification confirmed. ${agentName} is now Claw #${clawNumber} on the verification lane.`, 
    });
  } catch (error) {
    console.error('Verified submit API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}
