#!/usr/bin/env node
// Create a real ClawRoster wallet using Coinbase CDP SDK - Fixed version

const { Coinbase, Wallet } = require('@coinbase/coinbase-sdk');

// Configure Coinbase SDK with environment variables
Coinbase.configure({
  apiKeyName: process.env.CDP_API_KEY_NAME,
  privateKey: process.env.CDP_API_KEY_PRIVATE_KEY,
});

console.log('🔧 Creating ClawRoster wallet on Base mainnet...');

async function createWallet() {
  try {
    // Create a new wallet on Base mainnet
    const wallet = await Wallet.create({
      networkId: 'base-mainnet'
    });
    
    console.log(`✅ Wallet created: ${await wallet.getDefaultAddress()}`);
    console.log(`🆔 Wallet ID: ${wallet.getId()}`);
    
    // Get wallet data for secure storage
    const walletData = wallet.export();
    
    // Prepare wallet info for storage
    const walletInfo = {
      address: (await wallet.getDefaultAddress()).toString(),
      walletId: wallet.getId(),
      network: 'base-mainnet',
      created: new Date().toISOString(),
      walletData: walletData, // Encrypted wallet seed/keys
    };
    
    // Save to secrets file
    const fs = require('fs');
    const path = require('path');
    const secretsPath = path.join(process.env.HOME, '.openclaw', 'workspace', 'secrets', 'clawroster-wallet.json');
    fs.writeFileSync(secretsPath, JSON.stringify(walletInfo, null, 2), { mode: 0o600 });
    
    console.log(`💾 Wallet saved to: ${secretsPath}`);
    console.log(`💰 ClawRoster wallet address: ${walletInfo.address}`);
    
    // Output for the script
    console.log('WALLET_ADDRESS=' + walletInfo.address);
    console.log('WALLET_ID=' + walletInfo.walletId);
    
    return walletInfo;
    
  } catch (error) {
    console.error('❌ Failed to create wallet:', error.message);
    console.error('Full error:', error);
    
    // Fallback to ethers.js approach
    console.log('🔄 Falling back to ethers.js approach...');
    return createEthersWallet();
  }
}

async function createEthersWallet() {
  const { ethers } = require('ethers');
  const fs = require('fs');
  const path = require('path');
  
  // Generate a new random wallet
  const wallet = ethers.Wallet.createRandom();
  
  const walletInfo = {
    address: wallet.address,
    privateKey: wallet.privateKey,
    mnemonic: wallet.mnemonic?.phrase || null,
    network: 'base-mainnet',
    created: new Date().toISOString(),
    type: 'ethers-generated'
  };
  
  // Save to secrets file
  const secretsPath = path.join(process.env.HOME, '.openclaw', 'workspace', 'secrets', 'clawroster-wallet.json');
  fs.writeFileSync(secretsPath, JSON.stringify(walletInfo, null, 2), { mode: 0o600 });
  
  console.log(`✅ Ethers wallet created: ${wallet.address}`);
  console.log(`💾 Wallet saved to: ${secretsPath}`);
  console.log(`💰 ClawRoster wallet address: ${wallet.address}`);
  
  console.log('WALLET_ADDRESS=' + wallet.address);
  console.log('WALLET_ID=ethers-' + wallet.address.slice(2, 12));
  
  return walletInfo;
}

createWallet().catch(console.error);