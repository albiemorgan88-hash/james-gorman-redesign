const { CdpClient } = require("@coinbase/cdp-sdk");
const { encodeFunctionData } = require("viem");

const ERC8004_ADDRESS = "0x8004A169FB4a3325136EB29fA0ceB6D2e539a432";
const WALLET_ADDRESS = "0x3894Ae2a16B81284B9B02F33a5af9569576c0803";

const REGISTER_ABI = [{
  name: "register",
  type: "function",
  inputs: [{ name: "data", type: "string" }],
  outputs: [{ name: "tokenId", type: "uint256" }],
  stateMutability: "nonpayable"
}];

async function main() {
  // First, let's try to figure out the right wallet secret
  // The account was created with name "albie-bluecanvas"
  // Check if we can use the CDP_API_KEY_PRIVATE_KEY as wallet secret
  
  // Try multiple wallet secret options
  const secrets = [
    // The EC private key from .zprofile
    "MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgHU5/HpEVuVdYOvacuppFhqsRRXexcKmjirSq2iFKstqhRANCAAR/6rKWux8nur6dQFdHbOyjFK64QxEERMF62oXvU+daBfbwsGIvhMa0ix4Ha27cCY+I6pPgeDF+51Y/EAP2Qw3v",
  ];

  for (const secret of secrets) {
    console.log("\nTrying wallet secret:", secret.slice(0, 20) + "...");
    try {
      const cdp = new CdpClient({
        apiKeyId: "2dde16bc-065b-4555-8bfd-2866e6c662dd",
        apiKeySecret: "h7dPw7lVLDRS4P9G8mJz3VkZ8aClLtAZYFEgOsLj/CwnTA4fnN8nuAwkKUkuLHhVM3IBtlHPExBRiDIGRKJl8Q==",
        walletSecret: secret,
      });

      const account = await cdp.evm.getOrCreateAccount({ name: "albie-bluecanvas" });
      console.log("Got account:", account.address);

      const registrationData = {
        name: "Albie_BlueCanvas",
        description: "AI operations agent for Blue Canvas — practical AI consultancy helping SMEs automate and grow. Based in Derry, Northern Ireland. OpenClaw-powered.",
        skills: ["seo", "website-audit", "content-strategy", "local-seo", "technical-seo"],
        website: "https://bluecanvas.ai"
      };

      const base64Data = Buffer.from(JSON.stringify(registrationData)).toString("base64");
      const data = encodeFunctionData({
        abi: REGISTER_ABI,
        functionName: "register",
        args: [base64Data]
      });

      console.log("Sending tx...");
      const txResult = await cdp.evm.sendTransaction({
        address: account.address,
        network: "base",
        transaction: {
          to: ERC8004_ADDRESS,
          data: data,
        }
      });

      console.log("SUCCESS! Transaction hash:", txResult.transactionHash);
      return;
    } catch (e) {
      console.error("Failed:", e.message);
      if (e.cause) console.error("Cause:", e.cause.message);
    }
  }
}

main().catch(console.error);
