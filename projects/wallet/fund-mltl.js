const { CdpClient } = require("@coinbase/cdp-sdk");
const s = (k,v) => typeof v === 'bigint' ? v.toString() : v;

async function main() {
  const cdp = new CdpClient({
    apiKeyId: "2dde16bc-065b-4555-8bfd-2866e6c662dd",
    apiKeySecret: "h7dPw7lVLDRS4P9G8mJz3VkZ8aClLtAZYFEgOsLj/CwnTA4fnN8nuAwkKUkuLHhVM3IBtlHPExBRiDIGRKJl8Q==",
  });

  const addr = "0x3894Ae2a16B81284B9B02F33a5af9569576c0803";
  
  // Check balances
  const balances = await cdp.evm.listTokenBalances({ address: addr, network: "base" });
  for (const b of balances.balances || []) {
    console.log(`${b.token.symbol}: ${b.amount.amount} (${b.amount.decimals} decimals)`);
  }

  // Try to send a small amount of USDC to mltl wallet first
  // Actually - need ETH for gas. Let me try sending a tx directly.
  const mltlWallet = "0xaC62E141658969097Bf989fDeCE3438b36b107d5";
  
  // Try swap quote first  
  console.log("\nGetting swap quote...");
  const quote = await cdp.evm.createSwapQuote({
    address: addr,
    network: "base",
    fromToken: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    toToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    fromAmount: "1000000",
    taker: addr,
  });
  console.log("Quote toAmount:", quote.toAmount);
  
  if (quote.transaction) {
    console.log("\nExecuting swap...");
    try {
      const tx = await cdp.evm.sendTransaction({
        address: addr,
        network: "base",
        transaction: {
          to: quote.transaction.to,
          data: quote.transaction.data,
          value: quote.transaction.value || "0",
        },
      });
      console.log("Swap tx:", JSON.stringify(tx, s));
    } catch(e) {
      console.error("Swap tx error:", e.message);
      if (e.cause) console.error("Cause:", e.cause.message);
    }
  }
}

main().catch(err => {
  console.error("Error:", err.message);
  if (err.cause) console.error("Cause:", err.cause.message);
});
