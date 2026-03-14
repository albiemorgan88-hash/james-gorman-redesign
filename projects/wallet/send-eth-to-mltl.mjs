import { CdpClient } from "@coinbase/cdp-sdk";

const cdp = new CdpClient({
  apiKeyId: process.env.CDP_API_KEY_ID,
  apiKeySecret: process.env.CDP_API_KEY_SECRET,
  walletSecret: process.env.CDP_API_KEY_PRIVATE_KEY,
});

const MOLTLAUNCH_WALLET = "0xaC62E141658969097Bf989fDeCE3438b36b107d5";

async function main() {
  const account = await cdp.evm.getOrCreateAccount({ name: "albie-bluecanvas" });
  console.log("CDP wallet:", account.address);
  
  // First unwrap WETH to ETH
  const WETH = "0x4200000000000000000000000000000000000006";
  const wethBalance = "4803012820938875"; // from the swap
  
  console.log("Unwrapping WETH to ETH...");
  // WETH withdraw ABI: withdraw(uint256)
  const withdrawData = "0x2e1a7d4d" + BigInt(wethBalance).toString(16).padStart(64, "0");
  
  const unwrapTx = await account.sendTransaction({
    network: "base",
    transaction: {
      to: WETH,
      data: withdrawData,
      value: 0n,
    },
  });
  console.log("Unwrap tx:", unwrapTx.transactionHash);
  
  // Now send ETH to MoltLaunch wallet
  // Send 0.004 ETH (keep some for gas)
  const sendAmount = BigInt("4000000000000000"); // 0.004 ETH
  
  console.log(`\nSending ${Number(sendAmount) / 1e18} ETH to MoltLaunch wallet...`);
  const sendTx = await account.sendTransaction({
    network: "base",
    transaction: {
      to: MOLTLAUNCH_WALLET,
      value: sendAmount,
    },
  });
  console.log("Send tx:", sendTx.transactionHash);
  console.log(`Explorer: https://basescan.org/tx/${sendTx.transactionHash}`);
  console.log("\n✅ Done! MoltLaunch wallet should now have ~0.005 ETH");
}

main().catch(err => {
  console.error("Error:", err.message);
  process.exit(1);
});
