import { CdpClient } from "@coinbase/cdp-sdk";

const apiKeyId = process.env.CDP_API_KEY_ID;
const apiKeySecret = process.env.CDP_API_KEY_SECRET;
const walletSecret = process.env.CDP_API_KEY_PRIVATE_KEY;

const USDC_BASE = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const WETH_BASE = "0x4200000000000000000000000000000000000006"; // WETH (ETH wrapper)
const ETH_TOKEN = "eth"; // native ETH identifier

const cdp = new CdpClient({ apiKeyId, apiKeySecret, walletSecret });

async function main() {
  // Step 1: Get account
  console.log("Getting account 'albie-bluecanvas'...");
  const account = await cdp.evm.getOrCreateAccount({ name: "albie-bluecanvas" });
  console.log("Account address:", account.address);

  // Step 2: Check USDC balance
  console.log("\nChecking USDC balance...");
  const balances = await account.listTokenBalances({ network: "base" });
  console.log("Raw balances response:", JSON.stringify(balances, (_, v) => typeof v === 'bigint' ? v.toString() : v, 2));
  
  let usdcBalance = null;
  const balanceList = balances?.balances || [];
  for (const b of balanceList) {
    const amt = b.amount?.amount || "0";
    const dec = b.amount?.decimals || 0;
    const human = Number(amt) / Math.pow(10, dec);
    console.log(`  ${b.token?.symbol}: ${human}`);
    if (b.token?.symbol === "USDC" || b.token?.contractAddress?.toLowerCase() === USDC_BASE.toLowerCase()) {
      usdcBalance = amt;
    }
  }
  
  if (!usdcBalance || BigInt(usdcBalance) === 0n) {
    console.log("\n⚠️  No USDC in CDP wallet. Cannot swap.");
    process.exit(1);
  }

  const usdcHuman = Number(usdcBalance) / 1e6;
  console.log(`\nUSDC available: ${usdcBalance} raw (${usdcHuman} USDC)`);

  // We want to swap 10 USDC (10000000 raw units), or all if less
  const swapAmount = BigInt(usdcBalance) > 10000000n ? "10000000" : usdcBalance;
  const swapHuman = Number(swapAmount) / 1e6;
  console.log(`Will swap: ${swapHuman} USDC`);

  // Step 3: Approve Permit2 contract to spend USDC
  const PERMIT2 = "0x000000000022d473030f116ddee9f6b43ac78ba3";
  console.log("\nApproving Permit2 contract to spend USDC...");
  
  // ERC20 approve ABI: approve(address spender, uint256 amount)
  const approveData = "0x095ea7b3" + 
    PERMIT2.slice(2).padStart(64, "0") + 
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"; // max approval
  
  const approveTx = await account.sendTransaction({
    network: "base",
    transaction: {
      to: USDC_BASE,
      data: approveData,
      value: 0n,
    },
  });
  console.log("Approval tx:", approveTx.transactionHash || approveTx);

  // Step 4: Get swap price
  console.log("\nGetting swap price...");
  const swapPrice = await cdp.evm.getSwapPrice({
    network: "base",
    fromToken: USDC_BASE,
    toToken: WETH_BASE,
    fromAmount: swapAmount,
    taker: account.address,
  });
  
  console.log("Swap price response:", JSON.stringify(swapPrice, (_, v) => typeof v === 'bigint' ? v.toString() : v, 2));
  
  if (swapPrice.liquidityAvailable) {
    const toAmt = swapPrice.toAmount?.amount || swapPrice.toAmount;
    console.log(`Expected ETH output: ${toAmt}`);
  } else {
    console.log("No liquidity available for this swap");
    process.exit(1);
  }

  // Step 5: Execute swap
  console.log(`\nExecuting ${swapHuman} USDC → WETH swap...`);
  const result = await account.swap({
    network: "base",
    fromToken: USDC_BASE,
    toToken: WETH_BASE,
    fromAmount: BigInt(swapAmount),
    slippageBps: 100, // 1% slippage
  });
  
  const transactionHash = result.transactionHash || result;

  console.log("\n✅ Swap successful!");
  console.log("Transaction hash:", transactionHash);
  console.log(`Explorer: https://basescan.org/tx/${transactionHash}`);
}

main().catch(err => {
  console.error("❌ Error:", err.message);
  if (err.cause) console.error("Cause:", err.cause);
  process.exit(1);
});
