const { CdpClient } = require("@coinbase/cdp-sdk");

async function main() {
  const cdp = new CdpClient({
    apiKeyId: "2dde16bc-065b-4555-8bfd-2866e6c662dd",
    apiKeySecret: "h7dPw7lVLDRS4P9G8mJz3VkZ8aClLtAZYFEgOsLj/CwnTA4fnN8nuAwkKUkuLHhVM3IBtlHPExBRiDIGRKJl8Q==",
  });

  // Try to get/list accounts without wallet secret
  try {
    const account = await cdp.evm.getOrCreateAccount({ name: "albie-main" });
    console.log("Account address:", account.address);
  } catch(e) {
    console.log("Error:", e.message);
    if (e.cause) console.log("Cause:", e.cause.message);
  }
}

main().catch(err => console.error("Fatal:", err));
