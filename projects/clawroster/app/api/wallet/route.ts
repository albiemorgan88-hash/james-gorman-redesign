// API Route: Get ClawRoster verification wallet address
import { NextRequest, NextResponse } from 'next/server';
import { getOrCreateWallet } from '../../../lib/wallet';

export async function GET(request: NextRequest) {
  try {
    const walletInfo = await getOrCreateWallet();
    
    return NextResponse.json({
      success: true,
      address: walletInfo.address,
      network: 'base-mainnet',
      requiredAmount: 10,
      acceptedTokens: ['USDC', 'ETH', 'USDT'],
      usdcContract: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'
    });
    
  } catch (error) {
    console.error('Wallet API error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to get wallet address' 
      },
      { status: 500 }
    );
  }
}