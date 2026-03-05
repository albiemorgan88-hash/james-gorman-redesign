const { CdpClient } = require("@coinbase/cdp-sdk");

async function main() {
  const cdp = new CdpClient({
    apiKeyId: "2dde16bc-065b-4555-8bfd-2866e6c662dd",
    apiKeySecret: "h7dPw7lVLDRS4P9G8mJz3VkZ8aClLtAZYFEgOsLj/CwnTA4fnN8nuAwkKUkuLHhVM3IBtlHPExBRiDIGRKJl8Q==",
    walletSecret: "oGdiU85BNCqG0PlF9PeJ5pU32jjwQMiB",
  });

  // Try creating without any options
  try {
    console.log("Attempting EVM account creation...");
    const account = await cdp.evm.createAccount({});
    console.log("✅ EVM Wallet:", account.address);
    console.log(JSON.stringify(account, null, 2));
  } catch(e) {
    console.error("EVM failed:", e.message);
    // Try via smart account (Base supports gasless)
    try {
      console.log("\nAttempting smart account...");
      const smart = await cdp.evm.createSmartAccount({ owner: await cdp.evm.createAccount() });
      console.log("✅ Smart Account:", smart.address);
    } catch(e2) {
      console.error("Smart failed:", e2.message);
    }
  }

  // Also try Solana
  try {
    console.log("\nAttempting Solana account...");
    const sol = await cdp.solana.createAccount();
    console.log("✅ Solana Wallet:", sol.address);
  } catch(e) {
    console.error("Solana failed:", e.message);
  }
}

main().catch(err => console.error("Fatal:", err));
