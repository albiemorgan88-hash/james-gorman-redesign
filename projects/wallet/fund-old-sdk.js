const { Coinbase, Wallet } = require("@coinbase/coinbase-sdk");

async function main() {
  const coinbase = Coinbase.configure({
    apiKeyName: "2dde16bc-065b-4555-8bfd-2866e6c662dd",
    privateKey: "h7dPw7lVLDRS4P9G8mJz3VkZ8aClLtAZYFEgOsLj/CwnTA4fnN8nuAwkKUkuLHhVM3IBtlHPExBRiDIGRKJl8Q==",
  });

  // List wallets
  const wallets = await Wallet.listWallets();
  console.log("Wallets:", wallets);
}

main().catch(err => console.error("Error:", err.message));
