# Moltlaunch Registration Guide — Albie / Blue Canvas
**Date:** 2026-02-22  
**Status:** Research complete — ready to execute if PJ approves

---

## TL;DR

✅ **Can be done 100% programmatically** — no browser/MetaMask needed  
✅ **No dangerous token approvals** — just a tiny gas tx + API calls  
✅ **Cost: ~$0.003** (needs a tiny amount of ETH on Base for gas)  
⚠️ **We need ETH** — our wallet only has USDC, need to swap ~$0.50 worth to ETH first  

---

## Exact Steps to Register

### Prerequisites
- Our wallet: `0x3894Ae2a16B81284B9B02F33a5af9569576c0803` (Base chain)
- Need: tiny amount of ETH on Base (~0.0001 ETH / $0.28 is more than enough)
- Current balance: ~107 USDC, 0 ETH → **must swap a small amount first**

### Option A: Via CLI (Recommended — simplest)

```bash
# 1. Install CLI
npm i -g moltlaunch

# 2. Import our existing wallet
mltl wallet import --key 0x<PRIVATE_KEY>

# 3. Register (no token = direct ETH payments, zero fees)
mltl register \
  --name "Albie" \
  --description "AI-powered SEO audits, website analysis, and content strategy. Built by Blue Canvas." \
  --skills "seo,website-audit,content-strategy,local-seo,technical-seo" \
  --image ./albie-avatar.png

# 4. Create gig listings
mltl gig create --agent <id> \
  --title "SEO Site Audit" \
  --description "Comprehensive SEO audit: technical issues, keyword gaps, competitor analysis, actionable recommendations" \
  --price 0.01 \
  --delivery "24h" \
  --category audit

mltl gig create --agent <id> \
  --title "Website Performance Analysis" \
  --description "PageSpeed, Core Web Vitals, UX analysis with prioritised fix list" \
  --price 0.005 \
  --delivery "12h" \
  --category audit

mltl gig create --agent <id> \
  --title "SEO Blog Post" \
  --description "Keyword-targeted, SEO-optimised blog post (1000-2000 words)" \
  --price 0.003 \
  --delivery "24h" \
  --category content

# 5. Set up profile
mltl profile --agent <id> \
  --tagline "AI SEO agent by Blue Canvas" \
  --website "https://bluecanvas.ai" \
  --response-time "< 1 hour"

# 6. Monitor inbox
mltl inbox --json
```

### Option B: Via API (Programmatic — for CDP SDK integration)

**Step 1: On-chain identity (ERC-8004)**
- Contract: `0x8004A169FB4a3325136EB29fA0ceB6D2e539a432` on Base
- Call `register(string)` where string = base64-encoded JSON with name, description, image
- Cost: ~0.000001 ETH (~$0.003)
- Returns: agent token ID (e.g. `0x46fb`)

**Step 2: Index registration (API)**
- Sign EIP-191 message: `moltlaunch:register:<agentId>:<timestamp>:<nonce>`
- POST to `https://api.moltlaunch.com/api/agents/register` with agentId, name, description, skills, priceWei, wallet, timestamp, nonce, signature

**Step 3: Create gig listings (API)**
- POST to `https://api.moltlaunch.com/api/agents/<id>/gigs` with title, description, priceWei, deliveryTime, category

**Step 4: Monitor for tasks**
- GET `https://api.moltlaunch.com/api/tasks/inbox?agent=<id>`
- Poll every ~5 minutes when idle

---

## Smart Contracts Involved

| Contract | Address | Purpose | Risk |
|----------|---------|---------|------|
| ERC-8004 Identity Registry | `0x8004A169FB4a3325136EB29fA0ceB6D2e539a432` | Agent identity (NFT mint) | LOW — just mints an NFT |
| Escrow | `0x5Df1ffa02c8515a0Fed7d0e5d6375FcD2c1950Ee` | Holds ETH during jobs | MEDIUM — only holds funds during active tasks |

### Token Approvals Required: **NONE**
- Registration = call `register(string)` → mints an NFT. No ERC-20 approvals.
- No need to approve any tokens for spending.
- ETH payments go through escrow only when actively doing a job.

---

## Information Required

| Field | Required | Our Value |
|-------|----------|-----------|
| Name | Yes | "Albie" |
| Description | Yes | "AI-powered SEO audits, website analysis, and content strategy" |
| Skills | Yes | seo, website-audit, content-strategy, local-seo, technical-seo |
| Wallet | Yes | 0x3894Ae2a16B81284B9B02F33a5af9569576c0803 |
| Image | Optional | Need to create/provide avatar |
| Token symbol | Optional | Skip — use direct ETH payments (zero fees) |

---

## Fees

| Item | Cost |
|------|------|
| ERC-8004 registration | ~$0.003 (gas) |
| Index registration | Free |
| Gig listings | Free |
| Platform fee on completed work | **0%** (no-token mode) |
| Cancellation by client | 10% to agent |
| Dispute | 15% fee |

---

## Security Assessment

### ✅ Safe
- **No token approvals** — cannot drain wallet
- **No unlimited spending permissions** — registration is just an NFT mint
- **ETH only at risk during active escrow** — and only the quoted amount
- **Base L2** — gas costs negligible, worst case lose a few cents

### ⚠️ Moderate Concerns
- Escrow contract is **unaudited** (vibe-coded platform)
- Platform is **13 days old** — could disappear
- Dispute resolution by unnamed "admin"
- BUT: risk is limited to funds actively in escrow during a job — we control when/if we accept work

### 🔒 Our Exposure
- **Registration:** ~$0.003 at risk. That's it.
- **Per job:** only the ETH locked in escrow for that specific task (and we're the agent receiving, not paying)
- **Wallet draining risk:** **ZERO** — no approvals, no permissions granted

---

## Recommendation

**✅ SAFE TO PROCEED with registration.**

The registration itself is virtually risk-free (~$0.003, no token approvals, no wallet permissions). The only real risk is in escrow during active jobs — and as the agent (not client), our ETH isn't at risk; we're receiving payments, not depositing.

### Before Executing:
1. **Swap ~$1 USDC → ETH on Base** (for gas — way more than needed but gives buffer)
2. **Choose CLI vs API approach** — CLI is simpler, API gives more control for automation
3. **Prepare an avatar image** for Albie
4. **Set up a monitoring cron** to check inbox periodically

### Using CDP SDK:
Our `@coinbase/cdp-sdk` can handle both the swap and the contract calls programmatically. No browser needed at any point.

---

## Sources
- [Moltlaunch skill.md](https://moltlaunch.com/skill.md) (v2.15.0) — official agent integration docs
- [Aurora AI dev.to walkthrough](https://dev.to/theauroraai/registering-an-autonomous-ai-agent-on-a-decentralized-marketplace-moltlaunch-a3d) — step-by-step from another autonomous agent
- [Moltlaunch How It Works](https://moltlaunch.com/how/) — official flow docs
- [Escrow contract](https://basescan.org/address/0x5Df1ffa02c8515a0Fed7d0e5d6375FcD2c1950Ee) — on-chain
