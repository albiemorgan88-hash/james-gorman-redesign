const { CdpClient } = require("@coinbase/cdp-sdk");
const fs = require("fs");

const USDC_BASE = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const DEST = "0xaC62E141658969097Bf989fDeCE3438b36b107d5";
const SOURCE = "0x3894Ae2a16B81284B9B02F33a5af9569576c0803";
const AMOUNT_USDC = "10000000"; // 10 USDC (6 decimals)
const s = (k, v) => (typeof v === "bigint" ? v.toString() : v);

async function main() {
  // Load credentials from file (has wallet_secret paired with wallet)
  const creds = JSON.parse(
    fs.readFileSync(
      require("os").homedir() + "/.config/cdp/credentials.json",
      "utf8"
    )
  );

  console.log("Source wallet:", SOURCE);
  console.log("Destination:", DEST);
  console.log("Amount: 10 USDC");
  console.log("Using API key:", creds.api_key_id.slice(0, 8) + "...");
  console.log("");

  // Try with credentials.json keys first
  let cdp;
  try {
    cdp = new CdpClient({
      apiKeyId: creds.api_key_id,
      apiKeySecret: creds.api_key_secret,
      walletSecret: creds.wallet_secret,
    });
    console.log("CDP client initialized with credentials.json keys");
  } catch (e) {
    console.log("Failed with creds.json, trying env vars...");
    cdp = new CdpClient({
      apiKeyId: process.env.CDP_API_KEY_ID,
      apiKeySecret: process.env.CDP_API_KEY_SECRET || process.env.CDP_API_KEY_PRIVATE_KEY,
    });
    console.log("CDP client initialized with env vars");
  }

  // Check current balances
  console.log("\n--- Current Balances ---");
  try {
    const balances = await cdp.evm.listTokenBalances({
      address: SOURCE,
      network: "base",
    });
    for (const b of balances.balances || []) {
      const amt = parseFloat(b.amount.amount) / Math.pow(10, parseInt(b.amount.decimals));
      console.log(`${b.token.symbol}: ${amt}`);
    }
  } catch (e) {
    console.log("Balance check error:", e.message);
  }

  // Step 1: Transfer 10 USDC
  console.log("\n--- Transferring 10 USDC ---");
  console.log(`From: ${SOURCE}`);
  console.log(`To:   ${DEST}`);
  console.log(`Amount: 10 USDC (${AMOUNT_USDC} raw)`);

  try {
    // Use sendTransaction with ERC20 transfer data
    // transfer(address,uint256) = 0xa9059cbb
    const transferData =
      "0xa9059cbb" +
      DEST.slice(2).toLowerCase().padStart(64, "0") +
      BigInt(AMOUNT_USDC).toString(16).padStart(64, "0");

    const result = await cdp.evm.sendTransaction({
      address: SOURCE,
      network: "base",
      transaction: {
        to: USDC_BASE,
        data: transferData,
        value: "0",
      },
    });
    console.log("\n✅ Transfer submitted!");
    console.log("Transaction:", JSON.stringify(result, s, 2));
    
    if (result.transactionHash) {
      console.log(`\nBaseScan: https://basescan.org/tx/${result.transactionHash}`);
    }
  } catch (e) {
    console.error("\n❌ Transfer failed:", e.message);
    if (e.cause) console.error("Cause:", e.cause.message || e.cause);
    
    // Try alternative: use the CDP transfer method if available
    console.log("\nTrying alternative transfer method...");
    try {
      const result = await cdp.evm.sendToken({
        address: SOURCE,
        network: "base",
        token: USDC_BASE,
        to: DEST,
        amount: AMOUNT_USDC,
      });
      console.log("\n✅ Transfer submitted (alt)!");
      console.log("Transaction:", JSON.stringify(result, s, 2));
    } catch (e2) {
      console.error("Alt transfer also failed:", e2.message);
      if (e2.cause) console.error("Cause:", e2.cause.message || e2.cause);
    }
  }
}

main().catch((err) => {
  console.error("Fatal:", err.message);
  if (err.cause) console.error("Cause:", err.cause);
  process.exit(1);
});
