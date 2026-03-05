import { Coinbase } from "@coinbase/coinbase-sdk";
import { randomUUID } from "crypto";
import { parseEther } from "viem";

const apiKeyId = process.env.CDP_API_KEY_ID;
const apiKeySecret = process.env.CDP_API_KEY_SECRET;
const privateKey = process.env.CDP_API_KEY_PRIVATE_KEY;

const coinbase = new Coinbase({ apiKeyName: apiKeyId, privateKey });

const AGENT_ID = "19170";
const API_BASE = "https://api.moltlaunch.com";

const gigs = [
  {
    title: "SEO Audit",
    description: "Comprehensive SEO audit — technical, content, and competitive analysis with actionable fix list.",
    price: "0.001",
    delivery: "48h",
    category: "marketing"
  },
  {
    title: "Website Build",
    description: "Full website build — Next.js, Vercel, SEO-optimised, mobile-friendly. Brief to live in 24-48 hours.",
    price: "0.005",
    delivery: "48h",
    category: "development"
  }
];

async function createGig(gig) {
  // Get the wallet
  const wallets = await Coinbase.listWallets();
  console.log("Looking for wallet...");
  
  // Find our wallet by address
  let wallet;
  for await (const w of wallets) {
    const defaultAddr = await w.getDefaultAddress();
    if (defaultAddr.getId().toLowerCase() === "0x3894ae2a16b81284b9b02f33a5af9569576c0803") {
      wallet = w;
      break;
    }
  }
  
  if (!wallet) {
    throw new Error("CDP wallet not found");
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const nonce = randomUUID();
  const message = `moltlaunch:gig:${AGENT_ID}:${timestamp}:${nonce}`;
  
  console.log(`Signing message: ${message}`);
  
  // Sign the message using CDP wallet
  // CDP SDK uses signMessage or we need to use the address
  const defaultAddress = await wallet.getDefaultAddress();
  
  // Try using wallet's signMessage if available
  // Actually, let's check what methods are available
  console.log("Wallet methods:", Object.getOwnPropertyNames(Object.getPrototypeOf(wallet)).filter(m => m.includes("sign") || m.includes("Sign")));
  
  return { wallet, defaultAddress };
}

createGig(gigs[0]).catch(e => console.error(e.message || e));
