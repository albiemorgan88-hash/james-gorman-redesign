// API Route: Get ClawRoster verification wallet address
import { NextRequest, NextResponse } from 'next/server';
import { getOrCreateWallet, BASE_CONFIG } from '../../../lib/wallet';

export async function GET(request: NextRequest) {
  try {
    const walletInfo = await getOrCreateWallet();
    
    return NextResponse.json({
      success: true,
      address: walletInfo.address,
      network: 'base-mainnet',
      requiredAmount: BASE_CONFIG.requiredAmount,
      acceptedTokens: ['USDC', 'ETH', 'USDT'],
      usdcContract: BASE_CONFIG.usdcContract,
      usdtContract: BASE_CONFIG.usdtContract
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