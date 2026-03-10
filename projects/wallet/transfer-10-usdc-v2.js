const { CdpClient } = require("@coinbase/cdp-sdk");
const fs = require("fs");

const USDC_BASE = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const DEST = "0xaC62E141658969097Bf989fDeCE3438b36b107d5";
const SOURCE = "0x3894Ae2a16B81284B9B02F33a5af9569576c0803";
const AMOUNT_USDC = "10000000"; // 10 USDC (6 decimals)
const s = (k, v) => (typeof v === "bigint" ? v.toString() : v);

// Load wallet_secret from credentials.json (still valid for signing)
const creds = JSON.parse(
  fs.readFileSync(require("os").homedir() + "/.config/cdp/credentials.json", "utf8")
);

async function main() {
  // Use env vars for API auth (current keys) + wallet_secret from creds file
  const apiKeyId = process.env.CDP_API_KEY_ID;
  const apiKeySecret = process.env.CDP_API_KEY_SECRET || process.env.CDP_API_KEY_PRIVATE_KEY;
  
  console.log("API Key ID:", apiKeyId?.slice(0, 8) + "...");
  console.log("Has API Secret:", !!apiKeySecret);
  console.log("Has Wallet Secret:", !!creds.wallet_secret);
  console.log("");

  const cdp = new CdpClient({
    apiKeyId: apiKeyId,
    apiKeySecret: apiKeySecret,
    walletSecret: creds.wallet_secret,
  });
  console.log("CDP client initialized");

  // Check balances
  console.log("\n--- Current Balances ---");
  const balances = await cdp.evm.listTokenBalances({
    address: SOURCE,
    network: "base",
  });
  for (const b of balances.balances || []) {
    const amt = parseFloat(b.amount.amount) / Math.pow(10, parseInt(b.amount.decimals));
    console.log(`${b.token.symbol}: ${amt}`);
  }

  // Build ERC20 transfer calldata
  const transferData =
    "0xa9059cbb" +
    DEST.slice(2).toLowerCase().padStart(64, "0") +
    BigInt(AMOUNT_USDC).toString(16).padStart(64, "0");

  console.log("\n--- Transferring 10 USDC ---");
  console.log(`From: ${SOURCE}`);
  console.log(`To:   ${DEST}`);

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
  console.log("Result:", JSON.stringify(result, s, 2));
  
  if (result.transactionHash) {
    console.log(`\nBaseScan: https://basescan.org/tx/${result.transactionHash}`);
  }
}

main().catch((err) => {
  console.error("Fatal:", err.message);
  if (err.cause) console.error("Cause:", JSON.stringify(err.cause, null, 2));
  process.exit(1);
});
