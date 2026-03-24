// ClawRoster Transaction Verification for Base Mainnet
import { BASE_CONFIG } from './wallet';

export interface TransactionVerification {
  isValid: boolean;
  amount: number;
  token: string;
  from: string;
  to: string;
  error?: string;
}

// Verify a transaction on Base mainnet
export async function verifyTransaction(txHash: string, expectedRecipient: string): Promise<TransactionVerification> {
  try {
    console.log(`🔍 Verifying transaction: ${txHash}`);
    
    // Fetch transaction from Base RPC
    const response = await fetch(BASE_CONFIG.rpcUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_getTransactionByHash',
        params: [txHash],
        id: 1,
      }),
    });
    
    if (!response.ok) {
      throw new Error(`RPC request failed: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (data.error) {
      throw new Error(`RPC error: ${data.error.message}`);
    }
    
    const tx = data.result;
    
    if (!tx) {
      return {
        isValid: false,
        amount: 0,
        token: 'UNKNOWN',
        from: '',
        to: '',
        error: 'Transaction not found'
      };
    }
    
    // Get transaction receipt
    const receiptResponse = await fetch(BASE_CONFIG.rpcUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_getTransactionReceipt',
        params: [txHash],
        id: 2,
      }),
    });
    
    const receiptData = await receiptResponse.json();
    const receipt = receiptData.result;
    
    // Check if transaction was successful
    if (receipt.status !== '0x1') {
      return {
        isValid: false,
        amount: 0,
        token: 'FAILED',
        from: tx.from,
        to: tx.to,
        error: 'Transaction failed'
      };
    }
    
    // Check if it's a direct ETH transfer
    if (tx.to?.toLowerCase() === expectedRecipient.toLowerCase() && tx.input === '0x') {
      const ethAmount = parseInt(tx.value, 16) / 1e18;
      
      return {
        isValid: ethAmount >= BASE_CONFIG.requiredAmount,
        amount: ethAmount,
        token: 'ETH',
        from: tx.from,
        to: tx.to
      };
    }
    
    // Check if it's a USDC transfer
    if (tx.to?.toLowerCase() === BASE_CONFIG.usdcContract.toLowerCase()) {
      // Parse ERC-20 transfer from logs
      const transferLog = receipt.logs?.find((log: any) => 
        log.topics[0] === '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef' // Transfer event
      );
      
      if (transferLog) {
        const to = '0x' + transferLog.topics[2].slice(26); // Remove padding
        const amountHex = transferLog.data;
        const amount = parseInt(amountHex, 16) / 1e6; // USDC has 6 decimals
        
        const isToCorrectRecipient = to.toLowerCase() === expectedRecipient.toLowerCase();
        
        return {
          isValid: isToCorrectRecipient && amount >= BASE_CONFIG.requiredAmount,
          amount: amount,
          token: 'USDC',
          from: tx.from,
          to: to
        };
      }
    }
    
    // Check if it's a USDT transfer
    if (tx.to?.toLowerCase() === BASE_CONFIG.usdtContract?.toLowerCase()) {
      // Parse ERC-20 transfer from logs
      const transferLog = receipt.logs?.find((log: any) => 
        log.topics[0] === '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef' // Transfer event
      );
      
      if (transferLog) {
        const to = '0x' + transferLog.topics[2].slice(26); // Remove padding
        const amountHex = transferLog.data;
        const amount = parseInt(amountHex, 16) / 1e6; // USDT also has 6 decimals on Base
        
        const isToCorrectRecipient = to.toLowerCase() === expectedRecipient.toLowerCase();
        
        return {
          isValid: isToCorrectRecipient && amount >= BASE_CONFIG.requiredAmount,
          amount: amount,
          token: 'USDT',
          from: tx.from,
          to: to
        };
      }
    }
    
    return {
      isValid: false,
      amount: 0,
      token: 'UNKNOWN',
      from: tx.from,
      to: tx.to || '',
      error: 'Unsupported transaction type'
    };
    
  } catch (error) {
    console.error('Transaction verification failed:', error);
    return {
      isValid: false,
      amount: 0,
      token: 'ERROR',
      from: '',
      to: '',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}