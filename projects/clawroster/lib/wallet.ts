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

  // For now, use a static wallet address
  // In production, this would be generated from CDP or hardware wallet
  const clawRosterWallet: WalletInfo = {
    address: '0x742d35Cc6634C0532925a3b8D494FaB1f2F1b8d5', // ClawRoster payment address
    walletId: 'clawroster-main'
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
  requiredAmount: 10 // $10 USD
};