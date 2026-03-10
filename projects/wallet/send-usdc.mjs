import { CdpClient } from "@coinbase/cdp-sdk";
import { readFileSync } from "fs";
import { homedir } from "os";
import { join } from "path";

// Load wallet_secret from credentials file (env doesn't have it)
const creds = JSON.parse(
  readFileSync(join(homedir(), ".config/cdp/credentials.json"), "utf8")
);

// env API key is active; try its private key as wallet secret too
const apiKeyId = process.env.CDP_API_KEY_ID;
const apiKeySecret = process.env.CDP_API_KEY_SECRET;
const walletSecret = process.env.CDP_API_KEY_PRIVATE_KEY; // EC private key might also be wallet secret

console.log("Initializing CDP client...");
console.log("API Key ID:", apiKeyId);
console.log("Wallet secret (first 30):", walletSecret?.substring(0, 30));

const cdp = new CdpClient({
  apiKeyId,
  apiKeySecret,
  walletSecret,
});

const TO_ADDRESS = "0xaC62E141658969097Bf989fDeCE3438b36b107d5";
const AMOUNT = 10000000n; // 10 USDC (6 decimals)

async function main() {
  try {
    // Get the existing account by name
    console.log("Getting account 'albie-bluecanvas'...");
    const account = await cdp.evm.getOrCreateAccount({ name: "albie-bluecanvas" });
    console.log("Account address:", account.address);

    // Send 10 USDC
    console.log(`\nSending 10 USDC to ${TO_ADDRESS}...`);
    const result = await account.transfer({
      to: TO_ADDRESS,
      amount: AMOUNT,
      token: "usdc",
      network: "base",
    });

    console.log("\n✅ Transfer successful!");
    console.log("Transaction hash:", result.transactionHash);
    console.log(`Explorer: https://basescan.org/tx/${result.transactionHash}`);
  } catch (error) {
    console.error("\n❌ Transfer failed:", error.message);
    if (error.cause) console.error("Cause:", error.cause);
    if (error.response?.data) console.error("Response:", JSON.stringify(error.response.data, null, 2));
    process.exit(1);
  }
}

main();
