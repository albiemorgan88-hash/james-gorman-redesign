import { CdpClient } from "@coinbase/cdp-sdk";
const cdp = new CdpClient({
  apiKeyId: process.env.CDP_API_KEY_ID,
  apiKeySecret: process.env.CDP_API_KEY_SECRET,
  walletSecret: process.env.CDP_API_KEY_PRIVATE_KEY,
});
const account = await cdp.evm.getOrCreateAccount({ name: "albie-bluecanvas" });
const sendTx = await account.sendTransaction({
  network: "base",
  transaction: {
    to: "0xaC62E141658969097Bf989fDeCE3438b36b107d5",
    value: BigInt("5000000000000000"), // 0.005 ETH
  },
});
console.log("✅ Sent 0.005 ETH to MoltLaunch wallet");
console.log("TX:", sendTx.transactionHash);
