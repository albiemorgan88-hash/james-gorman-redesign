const { CdpClient } = require("@coinbase/cdp-sdk");

async function main() {
  // Use new API key from env
  const cdp = new CdpClient({
    apiKeyId: process.env.CDP_API_KEY_NAME,
    apiKeySecret: process.env.CDP_API_KEY_PRIVATE_KEY,
  });

  // Try listing accounts  
  const accounts = await cdp.evm.listAccounts();
  console.log("Accounts:", JSON.stringify(accounts, null, 2));
}

main().catch(err => {
  console.error("Error:", err.message);
  if (err.cause) console.error("Cause:", err.cause.message);
});
