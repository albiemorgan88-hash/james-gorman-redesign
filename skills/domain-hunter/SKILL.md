---
name: domain-hunter
description: Spot and acquire high-value domain names in the AI/automation space before they're taken. Monitor domain marketplaces, expiring domains, and trending keywords for opportunities. Use when scanning for domain investment opportunities, checking domain availability, or executing purchases. Albie has a USDC wallet on Base for execution.
---

# Domain Hunter

Spot, evaluate, and acquire AI-related domains as lead-gen assets or investments for Blue Canvas.

## Strategy

Blue Canvas already owns 7 tool-specific domains funneling to bluecanvas.ai. The play is expanding this with:
1. **Category-killer domains** — Short, memorable AI/automation terms
2. **Tool-specific domains** — [tool]consultant.co.uk pattern (proven model)
3. **Keyword domains** — Match high-volume search terms
4. **Trending domains** — New AI tools/platforms before they blow up

## Wallet

- **Address:** `0x3894Ae2a16B81284B9B02F33a5af9569576c0803` (Base)
- **Balance:** Check via CDP SDK before any purchase
- **Credentials:** `~/.config/cdp/credentials.json`

## Spending Rules

| Price | Action |
|-------|--------|
| Under $15 | Auto-buy if score ≥ 8/10. Notify PJ after. |
| $15 - $50 | Notify PJ first. Buy only with explicit approval. |
| Over $50 | Always ask PJ. Present full analysis. |

**NEVER** spend more than 50% of wallet balance on a single domain.

## Scoring Domains (out of 10)

| Factor | Weight | Criteria |
|--------|--------|----------|
| Keyword volume | 3 | Monthly search volume for exact match |
| Brandability | 2 | Short, memorable, pronounceable |
| Extension | 2 | .com = 2, .co.uk/.ai = 1.5, .io = 1, other = 0.5 |
| Competition | 1.5 | Are competitors using similar domains? |
| Blue Canvas fit | 1.5 | Does it fit our satellite/funnel model? |

## Domain Checking

### WHOIS via CLI
```bash
whois {domain} 2>/dev/null | grep -i "status\|expir\|registrar\|creation"
```

### Availability via web
- Check registrars: GoDaddy, Namecheap, Google Domains
- Expiring domains: ExpiredDomains.net, NameJet, DropCatch

## Monitoring Sources

Scan these for trending tools/platforms that need domains:
- **Moltbook** — New agent tools and platforms mentioned
- **Product Hunt** — AI launches
- **Hacker News** — Trending AI projects
- **Twitter/X** — AI tool announcements
- **Semrush** — Rising keywords in AI/automation space

## Current Portfolio (Blue Canvas)

Already owned (by PJ on GoDaddy):
- openclawconsultant.co.uk ✅ (live satellite)
- openclawsetup.co.uk (parked)
- zapierconsultant.co.uk ✅ (live satellite)
- aiagentsetup.co.uk ✅ (live satellite)
- n8nconsultant.co.uk (parked)
- lovableconsultant.co.uk (parked)
- claudecodeconsultant.co.uk (parked)

## High-Priority Targets

Domains to watch/acquire:
- **aiaudit.co.uk** — #1 target keyword (320 vol/mo)
- **aiaudit.com** — Premium if available
- **aiconsultant.co.uk** — Direct match
- **[newtool]consultant.co.uk** — As new AI tools emerge
- **aiemployee.co.uk** — Matches "Albie as a Service" positioning

## Workflow

1. **Scan** — Check trending AI tools, Moltbook, news for emerging opportunities
2. **Check** — Verify domain availability via WHOIS/registrar
3. **Score** — Rate using scoring matrix above
4. **Decide** — Auto-buy or notify PJ based on spending rules
5. **Report** — Log all findings in daily memory, purchased domains in MEMORY.md

## Purchasing Domains with Crypto

Most registrars don't accept USDC directly. Options:
- **Namecheap** — Accepts crypto (Bitcoin, ETH) for domain purchases
- **Unstoppable Domains** — NFT domains, crypto-native
- **ENS** — .eth domains on Ethereum
- **PJ buys on GoDaddy** — Albie spots, PJ executes (default for .co.uk)

For crypto-native purchases, may need to swap USDC to ETH via CDP SDK.

## Alert Template

When opportunity found, message PJ:

```
🔍 Domain Opportunity

Domain: {domain}
Score: {x}/10
Available: Yes/No
Price: ~${price}
Why: {brief reason}

Action: [Auto-buying / Need your approval / PJ to buy on GoDaddy]
```
