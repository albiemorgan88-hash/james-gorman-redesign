// ClawRoster Wallet Setup for Base Mainnet
export interface WalletInfo {
  address: string;
  walletId: string;
}

let cachedWallet: WalletInfo | null = null;

export async function getOrCreateWallet(): Promise<WalletInfo> {
  // Return cached wallet if available
  if (cachedWallet) {
    return cachedWallet;
  }

  // Real ClawRoster wallet created via ethers.js
  // Private keys are securely stored in ~/.openclaw/workspace/secrets/
  const clawRosterWallet: WalletInfo = {
    address: '0xCf7A349AEC9c8E1ca5974850ee41b0B354c225D5', // ClawRoster payment address
    walletId: 'ethers-Cf7A349AEC'
  };

  // Cache the wallet info
  cachedWallet = clawRosterWallet;
  
  console.log(`💰 ClawRoster wallet ready: ${clawRosterWallet.address}`);
  return clawRosterWallet;
}

// Constants for Base network
export const BASE_CONFIG = {
  rpcUrl: 'https://mainnet.base.org',
  chainId: 8453,
  usdcContract: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  usdtContract: '0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2',
  requiredAmount: 10 // $10 USD
};