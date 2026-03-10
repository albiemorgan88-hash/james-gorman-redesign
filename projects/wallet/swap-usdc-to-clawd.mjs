import { CdpClient } from "@coinbase/cdp-sdk";

const apiKeyId = process.env.CDP_API_KEY_ID;
const apiKeySecret = process.env.CDP_API_KEY_SECRET;
const walletSecret = process.env.CDP_API_KEY_PRIVATE_KEY;

const USDC_BASE = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const WETH_BASE = "0x4200000000000000000000000000000000000006";
const CLAWD_BASE = "0x9f86dB9fc6f7c9408e8Fda3Ff8ce4e78ac7a6b07";
const PERMIT2 = "0x000000000022d473030f116ddee9f6b43ac78ba3";
const UNISWAP_V3_ROUTER = "0x2626664c2603336E57B271c5C0b26F421741e481";

const SWAP_AMOUNT = 15000000n; // 15 USDC (6 decimals)

const cdp = new CdpClient({ apiKeyId, apiKeySecret, walletSecret });

// ABI encode helpers
function encodeFunctionCall(selector, ...args) {
  return "0x" + selector + args.map(a => a.padStart(64, "0")).join("");
}

function toHex(n) {
  return BigInt(n).toString(16);
}

async function tryCdpSwap(account) {
  console.log("\n--- Attempting CDP SDK native swap USDC → CLAWD ---");
  try {
    const swapPrice = await cdp.evm.getSwapPrice({
      network: "base",
      fromToken: USDC_BASE,
      toToken: CLAWD_BASE,
      fromAmount: SWAP_AMOUNT.toString(),
      taker: account.address,
    });
    
    console.log("Swap price response:", JSON.stringify(swapPrice, (_, v) => typeof v === 'bigint' ? v.toString() : v, 2));
    
    if (!swapPrice.liquidityAvailable) {
      console.log("No liquidity via CDP SDK. Falling back to Uniswap V3 router.");
      return null;
    }

    // Approve Permit2 first
    console.log("Approving Permit2...");
    const approveData = "0x095ea7b3" + 
      PERMIT2.slice(2).padStart(64, "0") + 
      "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
    
    const approveTx = await account.sendTransaction({
      network: "base",
      transaction: { to: USDC_BASE, data: approveData, value: 0n },
    });
    console.log("Approval tx:", approveTx.transactionHash);

    // Execute swap
    console.log("Executing CDP swap...");
    const result = await account.swap({
      network: "base",
      fromToken: USDC_BASE,
      toToken: CLAWD_BASE,
      fromAmount: SWAP_AMOUNT,
      slippageBps: 300, // 3% slippage
    });
    
    return result.transactionHash || result;
  } catch (err) {
    console.log("CDP swap failed:", err.message);
    return null;
  }
}

async function uniswapV3Swap(account) {
  console.log("\n--- Using Uniswap V3 Router: USDC → WETH → CLAWD ---");
  
  // Step 1: Approve USDC spending by the Uniswap V3 Router
  console.log("Approving Uniswap V3 Router to spend USDC...");
  const approveData = "0x095ea7b3" + 
    UNISWAP_V3_ROUTER.slice(2).padStart(64, "0") + 
    toHex(SWAP_AMOUNT).padStart(64, "0");
  
  const approveTx = await account.sendTransaction({
    network: "base",
    transaction: { to: USDC_BASE, data: approveData, value: 0n },
  });
  console.log("Approval tx:", approveTx.transactionHash);
  
  // Wait a moment for approval to confirm
  await new Promise(r => setTimeout(r, 3000));

  // Step 2: Build exactInput multi-hop swap path
  // Path encoding for Uniswap V3: tokenA (20 bytes) + fee (3 bytes) + tokenB (20 bytes) + fee (3 bytes) + tokenC (20 bytes)
  // USDC → (fee 500 = 0.05%) → WETH → (fee 10000 = 1%) → CLAWD
  // Try 500 bps for USDC/WETH (most liquid), and 10000 bps for WETH/CLAWD (smaller token)
  
  const path = USDC_BASE.slice(2).toLowerCase() + 
    "0001f4" + // 500 fee tier (0.05%)
    WETH_BASE.slice(2).toLowerCase() + 
    "002710" + // 10000 fee tier (1%)
    CLAWD_BASE.slice(2).toLowerCase();
  
  const pathBytes = Buffer.from(path, "hex");
  
  // ExactInputParams struct: (bytes path, address recipient, uint256 amountIn, uint256 amountOutMinimum)
  // exactInput selector: 0xb858183f (Uniswap V3 SwapRouter02 uses 0xb858183f for exactInput)
  // Actually SwapRouter02 on Base uses: exactInput((bytes,address,uint256,uint256))
  
  const deadline = Math.floor(Date.now() / 1000) + 600; // 10 min from now
  const amountOutMin = 0n; // We'll set to 0 for now (slippage handled by small amount)
  
  // ABI encode the ExactInputParams tuple
  // function exactInput(ExactInputParams calldata params) → (uint256 amountOut)
  // struct ExactInputParams { bytes path; address recipient; uint256 amountIn; uint256 amountOutMinimum; }
  // Note: SwapRouter02 doesn't have deadline in the struct (removed in V2)
  
  const recipientPadded = account.address.slice(2).toLowerCase().padStart(64, "0");
  const amountInPadded = toHex(SWAP_AMOUNT).padStart(64, "0");
  const amountOutMinPadded = toHex(amountOutMin).padStart(64, "0");
  
  // Encode the tuple with dynamic bytes
  // Offset to path data (4 * 32 = 128 = 0x80)
  const pathOffset = "0000000000000000000000000000000000000000000000000000000000000080";
  const pathLength = toHex(pathBytes.length).padStart(64, "0");
  const pathHex = pathBytes.toString("hex").padEnd(Math.ceil(pathBytes.length / 32) * 64, "0");
  
  const calldata = "0xb858183f" + // exactInput selector
    pathOffset +
    recipientPadded +
    amountInPadded +
    amountOutMinPadded +
    pathLength +
    pathHex;
  
  console.log(`Swapping ${Number(SWAP_AMOUNT) / 1e6} USDC via path: USDC → WETH → CLAWD`);
  console.log("Calldata length:", calldata.length);
  
  const swapTx = await account.sendTransaction({
    network: "base",
    transaction: {
      to: UNISWAP_V3_ROUTER,
      data: calldata,
      value: 0n,
    },
  });
  
  return swapTx.transactionHash;
}

async function checkClawdBalance(account) {
  // Call balanceOf on CLAWD token
  const balanceOfData = "0x70a08231" + account.address.slice(2).toLowerCase().padStart(64, "0");
  
  try {
    // Use eth_call via a public RPC
    const response = await fetch("https://mainnet.base.org", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "eth_call",
        params: [{ to: CLAWD_BASE, data: balanceOfData }, "latest"],
        id: 1,
      }),
    });
    const result = await response.json();
    const balance = BigInt(result.result || "0x0");
    return balance;
  } catch (err) {
    console.log("Could not check CLAWD balance:", err.message);
    return 0n;
  }
}

async function getClawdDecimals() {
  try {
    const response = await fetch("https://mainnet.base.org", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "eth_call",
        params: [{ to: CLAWD_BASE, data: "0x313ce567" }, "latest"],
        id: 1,
      }),
    });
    const result = await response.json();
    return Number(BigInt(result.result || "0x12"));
  } catch {
    return 18; // default
  }
}

async function main() {
  console.log("Initializing CDP client...");
  const account = await cdp.evm.getOrCreateAccount({ name: "albie-bluecanvas" });
  console.log("Account address:", account.address);

  // Check initial CLAWD balance
  const initialBalance = await checkClawdBalance(account);
  const decimals = await getClawdDecimals();
  console.log(`\nInitial CLAWD balance: ${initialBalance.toString()} (${Number(initialBalance) / Math.pow(10, decimals)} tokens)`);
  console.log(`CLAWD decimals: ${decimals}`);

  // Try CDP SDK swap first
  let txHash = await tryCdpSwap(account);
  
  // Fall back to Uniswap V3 router
  if (!txHash) {
    txHash = await uniswapV3Swap(account);
  }

  console.log("\n✅ Swap submitted!");
  console.log("Transaction hash:", txHash);
  console.log(`Explorer: https://basescan.org/tx/${txHash}`);

  // Wait and check final balance
  console.log("\nWaiting 10s for confirmation...");
  await new Promise(r => setTimeout(r, 10000));
  
  const finalBalance = await checkClawdBalance(account);
  const received = finalBalance - initialBalance;
  console.log(`\nFinal CLAWD balance: ${finalBalance.toString()} (${Number(finalBalance) / Math.pow(10, decimals)} tokens)`);
  console.log(`CLAWD received: ${received.toString()} (${Number(received) / Math.pow(10, decimals)} tokens)`);
}

main().catch(err => {
  console.error("❌ Error:", err.message);
  if (err.cause) console.error("Cause:", err.cause);
  if (err.stack) console.error(err.stack);
  process.exit(1);
});
