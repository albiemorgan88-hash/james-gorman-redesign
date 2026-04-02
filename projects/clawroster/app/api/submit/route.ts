// API Route: Submit roster with on-chain verification
import { NextRequest, NextResponse } from 'next/server';
import { getOrCreateWallet } from '../../../lib/wallet';
import { verifyTransaction } from '../../../lib/verify-transaction';
import { createRegistration, getNextClawNumber, isTransactionUsed } from '../../../lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { rosterData, txHash, payerWallet } = body;
    
    // Validation
    if (!rosterData) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required field: rosterData' 
        },
        { status: 400 }
      );
    }
    
    // Free beta mode — skip payment verification if no txHash
    const isFreeSubmission = !txHash || !payerWallet;
    
    if (!rosterData.agent?.name) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid roster data: agent.name is required' 
        },
        { status: 400 }
      );
    }
    
    let verification: { isValid: boolean; from?: string; amount?: number; token?: string; error?: string } = { isValid: false };
    
    if (!isFreeSubmission) {
      // Check if transaction has already been used
      const alreadyUsed = await isTransactionUsed(txHash);
      if (alreadyUsed) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Transaction hash has already been used for another registration' 
          },
          { status: 400 }
        );
      }
      
      // Get our wallet address
      const walletInfo = await getOrCreateWallet();
      
      // Verify the transaction
      console.log(`🔍 Verifying transaction: ${txHash} to ${walletInfo.address}`);
      verification = await verifyTransaction(txHash, walletInfo.address);
      
      if (!verification.isValid) {
        return NextResponse.json(
          { 
            success: false, 
            error: `Transaction verification failed: ${verification.error || 'Invalid transaction'}`,
            verification: verification
          },
          { status: 400 }
        );
      }
    }
    
    // Get next Claw number
    const clawNumber = await getNextClawNumber();
    
    // Create registration record
    const registration = await createRegistration({
      claw_number: clawNumber,
      agent_name: rosterData.agent.name,
      agent_description: rosterData.agent.bio || rosterData.agent.role || 'No description provided',
      wallet_address: isFreeSubmission ? 'free-beta' : (verification.from || ''),
      tx_hash: isFreeSubmission ? `free-beta-${Date.now()}` : txHash,
      payment_amount: isFreeSubmission ? 0 : (verification.amount || 0),
      payment_token: isFreeSubmission ? 'FREE' : (verification.token || ''),
      payment_verified: !isFreeSubmission,
      roster_data: rosterData,
      status: 'active'
    });
    
    console.log(`✅ Registration created: Claw #${clawNumber} for ${rosterData.agent.name}`);
    
    return NextResponse.json({
      success: true,
      clawNumber: clawNumber,
      rosterUrl: `/roster/${rosterData.agent.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      verificationComplete: true,
      verificationAmount: verification.amount,
      verificationToken: verification.token,
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