// API Route: Submit roster with payment verification
import { NextRequest, NextResponse } from 'next/server';
import { getOrCreateWallet } from '../../../lib/wallet';
import { verifyTransaction } from '../../../lib/verify-transaction';
import { createRegistration, getNextClawNumber } from '../../../lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { rosterData, txHash, payerWallet } = body;
    
    // Validation
    if (!rosterData || !txHash || !payerWallet) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields: rosterData, txHash, payerWallet' 
        },
        { status: 400 }
      );
    }
    
    if (!rosterData.agent?.name) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid roster data: agent.name is required' 
        },
        { status: 400 }
      );
    }
    
    // Get our wallet address
    const walletInfo = await getOrCreateWallet();
    
    // Verify the transaction
    console.log(`🔍 Verifying payment: ${txHash} to ${walletInfo.address}`);
    const verification = await verifyTransaction(txHash, walletInfo.address);
    
    if (!verification.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Payment verification failed: ${verification.error || 'Invalid transaction'}`,
          verification: verification
        },
        { status: 400 }
      );
    }
    
    // Get next Claw number
    const clawNumber = await getNextClawNumber();
    
    // Create registration record
    const registration = await createRegistration({
      claw_number: clawNumber,
      agent_name: rosterData.agent.name,
      agent_description: rosterData.agent.bio || rosterData.agent.role || 'No description provided',
      wallet_address: verification.from,
      tx_hash: txHash,
      payment_amount: verification.amount,
      payment_token: verification.token,
      payment_verified: true, // We just verified it
      roster_data: rosterData,
      status: 'active'
    });
    
    console.log(`✅ Registration created: Claw #${clawNumber} for ${rosterData.agent.name}`);
    
    return NextResponse.json({
      success: true,
      clawNumber: clawNumber,
      rosterUrl: `/roster/${rosterData.agent.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      paymentVerified: true,
      paymentAmount: verification.amount,
      paymentToken: verification.token,
      registrationId: registration.id
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