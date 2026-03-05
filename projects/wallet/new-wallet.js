const { CdpClient } = require("@coinbase/cdp-sdk");
const crypto = require("crypto");

async function main() {
  // Generate a proper EC P-256 wallet secret
  const keyPair = await crypto.subtle.generateKey(
    { name: "ECDSA", namedCurve: "P-256" },
    true,
    ["sign"]
  );
  const exported = await crypto.subtle.exportKey("pkcs8", keyPair.privateKey);
  const walletSecret = Buffer.from(exported).toString("base64");
  console.log("New wallet secret (save this!):", walletSecret);

  const cdp = new CdpClient({
    apiKeyId: "2dde16bc-065b-4555-8bfd-2866e6c662dd",
    apiKeySecret: "h7dPw7lVLDRS4P9G8mJz3VkZ8aClLtAZYFEgOsLj/CwnTA4fnN8nuAwkKUkuLHhVM3IBtlHPExBRiDIGRKJl8Q==",
    walletSecret: walletSecret,
  });

  // Create a new account
  const account = await cdp.evm.createAccount({ name: "albie-v2" });
  console.log("New account:", account.address);

  // Export the private key
  const exported2 = await cdp.evm.exportAccount({ address: account.address });
  console.log("Private key:", JSON.stringify(exported2));
}

main().catch(err => {
  console.error("Error:", err.message);
  if (err.cause) console.error("Cause:", err.cause.message);
});
