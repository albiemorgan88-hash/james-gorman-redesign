const { CdpClient } = require("@coinbase/cdp-sdk");

async function main() {
  const cdp = new CdpClient({
    apiKeyId: "2dde16bc-065b-4555-8bfd-2866e6c662dd",
    apiKeySecret: "h7dPw7lVLDRS4P9G8mJz3VkZ8aClLtAZYFEgOsLj/CwnTA4fnN8nuAwkKUkuLHhVM3IBtlHPExBRiDIGRKJl8Q==",
    walletSecret: "oGdiU85BNCqG0PlF9PeJ5pU32jjwQMiB",
  });

  // Get our account
  const account = await cdp.evm.getOrCreateAccount({ name: "albie-main" });
  console.log("Account address:", account.address);

  // Check ETH balance first
  const balance = await cdp.evm.getBalance({ address: account.address, network: "base" });
  console.log("ETH balance:", balance.toString());

  // Swap ~$1 USDC to ETH on Base
  // USDC on Base: 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913 (6 decimals)
  // $1 = 1000000 (1e6)
  try {
    const result = await cdp.evm.swap({
      address: account.address,
      network: "base",
      fromToken: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // USDC
      toToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", // ETH
      fromAmount: "1000000", // $1 USDC
    });
    console.log("Swap result:", JSON.stringify(result, null, 2));
  } catch (e) {
    console.log("Swap error:", e.message);
    if (e.cause) console.log("Cause:", e.cause);
    // Try alternative approach
    try {
      const result = await cdp.evm.swap({
        address: account.address,
        network: "base",
        fromToken: "usdc",
        toToken: "eth",
        fromAmount: "1000000",
      });
      console.log("Swap result (alt):", JSON.stringify(result, null, 2));
    } catch (e2) {
      console.log("Alt swap error:", e2.message);
    }
  }
}

main().catch(err => console.error("Fatal:", err));
