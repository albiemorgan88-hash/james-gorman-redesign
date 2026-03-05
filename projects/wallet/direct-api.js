const crypto = require("crypto");
const jose = require("jose");

async function makeJwt(apiKeyId, apiKeySecret, method, url) {
  const decoded = Buffer.from(apiKeySecret, "base64");
  const seed = decoded.subarray(0, 32);
  const pkcs8Prefix = Buffer.from("302e020100300506032b657004220420", "hex");
  const pkcs8Der = Buffer.concat([pkcs8Prefix, seed]);
  const keyObj = crypto.createPrivateKey({ key: pkcs8Der, format: "der", type: "pkcs8" });
  const pubKeyObj = crypto.createPublicKey(keyObj);
  const spki = pubKeyObj.export({ format: "der", type: "spki" });
  const derivedPub = spki.subarray(-32);
  const jwk = { kty: "OKP", crv: "Ed25519", d: seed.toString("base64url"), x: derivedPub.toString("base64url") };
  const key = await jose.importJWK(jwk, "EdDSA");
  const parsedUrl = new URL(url);
  const now = Math.floor(Date.now() / 1000);
  return await new jose.SignJWT({
    sub: apiKeyId, iss: "cdp", aud: ["cdp_service"],
    uris: [`${method} ${parsedUrl.host}${parsedUrl.pathname}`],
  }).setProtectedHeader({ alg: "EdDSA", kid: apiKeyId, typ: "JWT", nonce: crypto.randomUUID() })
    .setIssuedAt(now).setNotBefore(now).setExpirationTime(now + 120).sign(key);
}

const apiKeyId = "2dde16bc-065b-4555-8bfd-2866e6c662dd";
const apiKeySecret = "h7dPw7lVLDRS4P9G8mJz3VkZ8aClLtAZYFEgOsLj/CwnTA4fnN8nuAwkKUkuLHhVM3IBtlHPExBRiDIGRKJl8Q==";

async function apiCall(method, path, body) {
  const url = `https://api.cdp.coinbase.com/platform${path}`;
  const jwt = await makeJwt(apiKeyId, apiKeySecret, method, url);
  const opts = {
    method,
    headers: { "Authorization": `Bearer ${jwt}`, "Content-Type": "application/json" },
  };
  if (body) opts.body = JSON.stringify(body);
  const resp = await fetch(url, opts);
  const text = await resp.text();
  console.log(`${method} ${path}: ${resp.status}`);
  try { return JSON.parse(text); } catch { console.log(text); return null; }
}

async function main() {
  // List v1 wallets
  const wallets = await apiCall("GET", "/v1/wallets");
  console.log("Wallets:", JSON.stringify(wallets, null, 2));
  
  if (wallets?.data) {
    for (const w of wallets.data) {
      console.log(`\nWallet ${w.id}:`);
      // Get addresses
      const addrs = await apiCall("GET", `/v1/wallets/${w.id}/addresses`);
      console.log("Addresses:", JSON.stringify(addrs, null, 2));
    }
  }
}

main().catch(err => console.error("Error:", err));
