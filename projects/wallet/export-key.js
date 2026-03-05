const crypto = require("crypto");
const jose = require("jose");

async function makeJwt(apiKeyId, apiKeySecret, method, path) {
  const decoded = Buffer.from(apiKeySecret, "base64");
  const seed = decoded.subarray(0, 32);
  
  // Derive correct public key
  const pkcs8Prefix = Buffer.from("302e020100300506032b657004220420", "hex");
  const pkcs8Der = Buffer.concat([pkcs8Prefix, seed]);
  const keyObj = crypto.createPrivateKey({ key: pkcs8Der, format: "der", type: "pkcs8" });
  const pubKeyObj = crypto.createPublicKey(keyObj);
  const spki = pubKeyObj.export({ format: "der", type: "spki" });
  const derivedPub = spki.subarray(-32);
  
  const jwk = { kty: "OKP", crv: "Ed25519", d: seed.toString("base64url"), x: derivedPub.toString("base64url") };
  const key = await jose.importJWK(jwk, "EdDSA");
  
  const now = Math.floor(Date.now() / 1000);
  return await new jose.SignJWT({
    sub: apiKeyId,
    uri: `${method} api.cdp.coinbase.com${path}`,
  })
    .setProtectedHeader({ alg: "EdDSA", kid: apiKeyId, typ: "JWT", nonce: crypto.randomUUID() })
    .setIssuedAt(now)
    .setNotBefore(now)
    .setExpirationTime(now + 120)
    .sign(key);
}

async function main() {
  const apiKeyId = "2dde16bc-065b-4555-8bfd-2866e6c662dd";
  const apiKeySecret = "h7dPw7lVLDRS4P9G8mJz3VkZ8aClLtAZYFEgOsLj/CwnTA4fnN8nuAwkKUkuLHhVM3IBtlHPExBRiDIGRKJl8Q==";
  const addr = "0x3894Ae2a16B81284B9B02F33a5af9569576c0803";
  
  // Try to export account
  const path = `/platform/v2/evm/accounts/${addr}/export`;
  const jwt = await makeJwt(apiKeyId, apiKeySecret, "POST", path);
  
  const resp = await fetch(`https://api.cdp.coinbase.com${path}`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  
  console.log("Status:", resp.status);
  const body = await resp.text();
  console.log("Body:", body);
}

main().catch(err => console.error("Error:", err));
