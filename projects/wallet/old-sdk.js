const { Coinbase, Wallet } = require("@coinbase/coinbase-sdk");

async function main() {
  Coinbase.configure({
    apiKeyName: "2dde16bc-065b-4555-8bfd-2866e6c662dd",
    privateKey: "h7dPw7lVLDRS4P9G8mJz3VkZ8aClLtAZYFEgOsLj/CwnTA4fnN8nuAwkKUkuLHhVM3IBtlHPExBRiDIGRKJl8Q==",
  });

  // List wallets
  try {
    const wallets = await Wallet.listWallets();
    console.log("Wallets found:", wallets.data.length);
    for (const w of wallets.data) {
      console.log(`  ID: ${w.getId()}, Network: ${w.getNetworkId()}`);
      // Try to set seed and get addresses
      try {
        await w.setSeed("oGdiU85BNCqG0PlF9PeJ5pU32jjwQMiB");
        const addr = await w.getDefaultAddress();
        console.log(`  Address: ${addr.getId()}`);
        const balances = await w.listBalances();
        console.log(`  Balances:`, balances);
      } catch(e2) {
        console.log(`  setSeed error: ${e2.message}`);
      }
    }
  } catch(e) {
    console.error("Error:", e.apiCode, e.apiMessage || e.message);
  }
}

main().catch(err => console.error("Fatal:", err));
