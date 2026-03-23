#!/usr/bin/env node
// Create a real ClawRoster wallet using Coinbase CDP SDK

import { Coinbase } from '@coinbase/coinbase-sdk';
import fs from 'fs';
import path from 'path';

// Configure Coinbase SDK
const cdp = new Coinbase({
  apiKeyName: process.env.CDP_API_KEY_NAME,
  privateKey: process.env.CDP_API_KEY_PRIVATE_KEY,
  keyId: process.env.CDP_API_KEY_ID,
  keySecret: process.env.CDP_API_KEY_SECRET,
});

console.log('🔧 Creating ClawRoster wallet on Base mainnet...');

try {
  // Create a new wallet on Base mainnet
  const wallet = await cdp.createWallet({
    networkId: 'base-mainnet'
  });
  
  console.log(`✅ Wallet created: ${wallet.getDefaultAddress()}`);
  console.log(`🆔 Wallet ID: ${wallet.getId()}`);
  
  // Get wallet data for secure storage
  const walletData = wallet.export();
  
  // Prepare wallet info for storage
  const walletInfo = {
    address: wallet.getDefaultAddress().toString(),
    walletId: wallet.getId(),
    network: 'base-mainnet',
    created: new Date().toISOString(),
    walletData: walletData, // Encrypted wallet seed/keys
  };
  
  // Save to secrets file
  const secretsPath = path.join(process.env.HOME, '.openclaw', 'workspace', 'secrets', 'clawroster-wallet.json');
  fs.writeFileSync(secretsPath, JSON.stringify(walletInfo, null, 2), { mode: 0o600 });
  
  console.log(`💾 Wallet saved to: ${secretsPath}`);
  console.log(`💰 ClawRoster wallet address: ${walletInfo.address}`);
  
  // Output for the script
  console.log('WALLET_ADDRESS=' + walletInfo.address);
  console.log('WALLET_ID=' + walletInfo.walletId);
  
} catch (error) {
  console.error('❌ Failed to create wallet:', error);
  process.exit(1);
}