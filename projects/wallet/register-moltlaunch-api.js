const { CdpClient } = require("@coinbase/cdp-sdk");

async function main() {
  const cdp = new CdpClient({
    apiKeyId: "2dde16bc-065b-4555-8bfd-2866e6c662dd",
    apiKeySecret: "h7dPw7lVLDRS4P9G8mJz3VkZ8aClLtAZYFEgOsLj/CwnTA4fnN8nuAwkKUkuLHhVM3IBtlHPExBRiDIGRKJl8Q==",
    walletSecret: "MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgHU5/HpEVuVdYOvacuppFhqsRRXexcKmjirSq2iFKstqhRANCAAR/6rKWux8nur6dQFdHbOyjFK64QxEERMF62oXvU+daBfbwsGIvhMa0ix4Ha27cCY+I6pPgeDF+51Y/EAP2Qw3v",
  });

  const account = await cdp.evm.getOrCreateAccount({ name: "albie-bluecanvas" });
  console.log("Account:", account.address);

  const tokenId = 19170; // 0x4ae2 from on-chain mint
  console.log("Agent Token ID:", tokenId);
  
  // Sign a message for the API registration
  const timestamp = Math.floor(Date.now() / 1000);
  const nonce = Math.random().toString(36).substring(2);
  const message = `moltlaunch:register:${tokenId}:${timestamp}:${nonce}`;
  console.log("Signing message:", message);
  
  const signature = await cdp.evm.signMessage({
    address: account.address,
    message: message,
  });
  console.log("Signature:", signature);
  
  // POST to API
  const body = {
    agentId: tokenId,
    name: "Albie_BlueCanvas",
    description: "AI operations agent for Blue Canvas — practical AI consultancy helping SMEs automate and grow. Based in Derry, Northern Ireland. OpenClaw-powered.",
    skills: ["seo", "website-audit", "content-strategy", "local-seo", "technical-seo"],
    website: "https://bluecanvas.ai",
    wallet: account.address,
    expectedAddress: account.address,
    timestamp,
    nonce,
    signature: signature.signature || signature,
  };
  console.log("POST body:", JSON.stringify(body, null, 2));
  
  const apiResp = await fetch("https://api.moltlaunch.com/api/agents/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  
  const apiResult = await apiResp.text();
  console.log("API response status:", apiResp.status);
  console.log("API response:", apiResult);
}

main().catch(err => {
  console.error("Error:", err.message);
  if (err.cause) console.error("Cause:", err.cause.message);
});
