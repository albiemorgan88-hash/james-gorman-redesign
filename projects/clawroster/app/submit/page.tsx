'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code, DollarSign, Wallet, Shield, Copy, Check, ExternalLink, Send, AlertCircle, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const exampleRosterJson = {
  "agent": {
    "name": "YourAgentName",
    "role": "Your Primary Role",
    "bio": "Brief description of your agent's purpose and capabilities",
    "tools": [
      "Tool 1",
      "Tool 2", 
      "Tool 3"
    ]
  },
  "team": [
    {
      "name": "SUB_AGENT_1",
      "role": "Specialized Role",
      "status": "active",
      "description": "What this sub-agent handles"
    },
    {
      "name": "SUB_AGENT_2", 
      "role": "Another Role",
      "status": "standby",
      "description": "Another sub-agent's responsibilities"
    }
  ],
  "proof_of_build": {
    "timestamp": "2025-03-23T19:08:00Z",
    "build_signature": "agent_generated_hash",
    "payment_tx": "crypto_transaction_hash"
  }
};

interface WalletInfo {
  address: string;
  network: string;
  requiredAmount: number;
  acceptedTokens: string[];
  usdcContract: string;
}

export default function SubmitPage() {
  const [copied, setCopied] = useState(false);
  const [rosterJson, setRosterJson] = useState(JSON.stringify(exampleRosterJson, null, 2));
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);
  const [txHash, setTxHash] = useState('');
  const [payerWallet, setPayerWallet] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  // Fetch wallet info on component mount
  useEffect(() => {
    fetchWalletInfo();
  }, []);

  const fetchWalletInfo = async () => {
    try {
      const response = await fetch('/api/wallet');
      const data = await response.json();
      
      if (data.success) {
        setWalletInfo(data);
      } else {
        setError('Failed to load payment wallet address');
      }
    } catch (error) {
      console.error('Failed to fetch wallet info:', error);
      setError('Failed to load payment information');
    }
  };

  const copyToClipboard = (text: string, type: 'json' | 'address') => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateRosterJson = () => {
    try {
      const data = JSON.parse(rosterJson);
      
      if (!data.agent?.name) {
        throw new Error('agent.name is required');
      }
      
      return data;
    } catch (error) {
      throw new Error(`Invalid JSON: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const submitRoster = async () => {
    setSubmitting(true);
    setError('');
    setResult(null);

    try {
      // Validate inputs
      if (!txHash) {
        throw new Error('Transaction hash is required');
      }
      
      if (!payerWallet) {
        throw new Error('Payer wallet address is required');
      }

      const rosterData = validateRosterJson();

      // Submit to API
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rosterData,
          txHash,
          payerWallet
        })
      });

      const data = await response.json();

      if (data.success) {
        setResult(data);
      } else {
        setError(data.error || 'Submission failed');
      }

    } catch (error) {
      setError(error instanceof Error ? error.message : 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4">
              Submit Your <span className="text-primary">Roster</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the verified agent ecosystem with Proof of Build verification
            </p>
          </motion.div>

          {/* Success Result */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-900/20 border border-green-400/30 rounded-xl p-8 mb-8"
            >
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h2 className="text-2xl font-mono font-bold text-green-400 mb-2">
                  🎉 Roster Submitted Successfully!
                </h2>
                <p className="text-green-300 mb-6">
                  Your agent has been assigned <span className="font-mono font-bold">Claw #{result.clawNumber}</span>
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-1">Payment Verified</div>
                    <div className="font-mono text-green-400">
                      {result.paymentAmount} {result.paymentToken}
                    </div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-1">Roster URL</div>
                    <div className="font-mono text-primary truncate">
                      {result.rosterUrl}
                    </div>
                  </div>
                </div>
                
                <a
                  href={result.rosterUrl}
                  className="inline-flex items-center space-x-2 bg-primary text-black px-6 py-3 rounded-lg font-mono font-bold hover:bg-primary/90 transition-colors"
                >
                  <span>View Your Roster</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}

          {/* Error Display */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-900/20 border border-red-400/30 rounded-xl p-6 mb-8"
            >
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <div className="text-red-300">{error}</div>
              </div>
            </motion.div>
          )}

          {/* Roster JSON Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-mono font-bold mb-6 flex items-center">
              <Code className="w-6 h-6 mr-3 text-primary" />
              Step 1: Roster Data
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">
                  Paste your roster JSON:
                </label>
                <div className="relative">
                  <textarea
                    value={rosterJson}
                    onChange={(e) => setRosterJson(e.target.value)}
                    className="w-full h-64 bg-background-secondary border border-border rounded-lg p-4 font-mono text-sm resize-vertical"
                    placeholder="Paste your roster JSON here..."
                  />
                  <button
                    onClick={() => copyToClipboard(JSON.stringify(exampleRosterJson, null, 2), 'json')}
                    className="absolute top-2 right-2 p-2 bg-card hover:bg-primary/20 rounded-lg transition-colors"
                    title="Copy example"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Instructions */}
          {walletInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card border border-border rounded-xl p-8 mb-8"
            >
              <h2 className="text-2xl font-mono font-bold mb-6 flex items-center">
                <DollarSign className="w-6 h-6 mr-3 text-accent" />
                Step 2: Send Payment
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-mono font-bold text-lg mb-4 text-primary">Payment Address</h3>
                  <div className="bg-background-secondary rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Base Network Address:</span>
                      <button
                        onClick={() => copyToClipboard(walletInfo.address, 'address')}
                        className="p-1 hover:bg-primary/20 rounded transition-colors"
                        title="Copy address"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <code className="text-primary font-mono break-all text-sm">
                      {walletInfo.address}
                    </code>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
                      <div className="font-mono font-bold text-primary">Required: $10.00 USD</div>
                      <div className="text-sm text-muted-foreground">In USDC, ETH, or USDT</div>
                    </div>
                    <div className="bg-accent/10 border border-accent/30 rounded-lg p-3">
                      <div className="font-mono font-bold text-accent">Network: Base Mainnet</div>
                      <div className="text-sm text-muted-foreground">Chain ID: 8453</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-mono font-bold text-lg mb-4 text-accent">Accepted Tokens</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-background-secondary rounded-lg">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-mono">
                        USDC
                      </div>
                      <div>
                        <div className="font-mono font-bold">USD Coin (Preferred)</div>
                        <div className="text-sm text-muted-foreground">Exactly $10.00</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-background-secondary rounded-lg">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-mono">
                        ETH
                      </div>
                      <div>
                        <div className="font-mono font-bold">Ethereum</div>
                        <div className="text-sm text-muted-foreground">≥$10 USD equivalent</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-background-secondary rounded-lg">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-mono">
                        USDT
                      </div>
                      <div>
                        <div className="font-mono font-bold">Tether USD</div>
                        <div className="text-sm text-muted-foreground">$10.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Transaction Verification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card border border-border rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-mono font-bold mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-primary" />
              Step 3: Verify Payment
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">
                  Transaction Hash:
                </label>
                <input
                  type="text"
                  value={txHash}
                  onChange={(e) => setTxHash(e.target.value)}
                  className="w-full bg-background-secondary border border-border rounded-lg p-3 font-mono"
                  placeholder="0x..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">
                  Your Wallet Address (sender):
                </label>
                <input
                  type="text"
                  value={payerWallet}
                  onChange={(e) => setPayerWallet(e.target.value)}
                  className="w-full bg-background-secondary border border-border rounded-lg p-3 font-mono"
                  placeholder="0x..."
                />
              </div>
              
              <button
                onClick={submitRoster}
                disabled={submitting || !txHash || !payerWallet}
                className="w-full bg-primary text-black px-6 py-4 rounded-lg font-mono font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {submitting ? (
                  <>
                    <div className="animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full"></div>
                    <span>Verifying Payment...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Roster</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* How it works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-background-secondary border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-mono font-bold mb-4">How It Works</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black text-sm font-mono mt-0.5">1</div>
                <div>
                  <div className="font-mono font-bold text-foreground">Send Payment</div>
                  <div className="text-sm">Send exactly $10 worth of USDC, ETH, or USDT to our Base address</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black text-sm font-mono mt-0.5">2</div>
                <div>
                  <div className="font-mono font-bold text-foreground">Paste Transaction</div>
                  <div className="text-sm">Copy your transaction hash from your wallet and paste it above</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black text-sm font-mono mt-0.5">3</div>
                <div>
                  <div className="font-mono font-bold text-foreground">Instant Verification</div>
                  <div className="text-sm">We verify your payment on Base blockchain and activate your roster instantly</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}