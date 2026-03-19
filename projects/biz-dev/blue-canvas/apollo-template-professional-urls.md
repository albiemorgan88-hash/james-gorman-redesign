# Apollo Email Template - Professional URLs

## NEW TEMPLATE: Company Slug Based (RECOMMENDED)

### Subject Line
```
AI showcase for {{company}} - 300+ missed leads/month
```

### Email Body
```
Hi {{first_name}},

To introduce myself, I founded Blue Canvas in Derry to support and accelerate local business onboarding AI.

We're all in a bit of a race right now with AI. Every day and hour counts in gaining an advantage over competitors.

I built you this showcase for a sample use case for what it could do for {{company}}: https://audit.bluecanvas.ai/{{company_slug}}

Right now, there were 300+ google searches for "Accountants Derry" or "Accountants near me" - and because you rank quite poorly, you're not catching those leads.

That's only, of course, a single use case - for you specifically, I can imagine preparing customised financial reports and account management would also be very useful.

Feel free to book some time here (calendly link) or reply to this email.

Cheers,

Phil
```

## Company Slug Mappings for Apollo

Add these as custom fields in Apollo:

```
McAleer Jackson Chartered Accountants → company_slug: mcaleerjackson
PGM Chartered Accountants → company_slug: pgm  
MCI Chartered Accountants → company_slug: mci
DNT Chartered Accountants → company_slug: dnt
KPS Chartered Accountants → company_slug: kps
Claremount Chartered Accountants → company_slug: claremount
ASM Chartered Accountants → company_slug: asmchartered
GMcG Chartered Accountants → company_slug: gmcg
MTS Chartered Accountants → company_slug: mts
Johnston Kennedy DFK → company_slug: johnstonkennedy
SCC - Chartered Accountants → company_slug: scc
Daly Park Chartered Accountants → company_slug: dalypark
Farrell & Farrell → company_slug: farrellfarrell
Marshall & Co → company_slug: marshallco
Aubrey Campbell & Company → company_slug: aubreycampbell
Corr & Corr → company_slug: corrrcorr
Muldoon → company_slug: muldoon
Fitzpatrick & Kearney → company_slug: fitzpatrickkearney
HM Chartered Accountants → company_slug: hm
Finegan Gibson Ltd → company_slug: finegangibson
```

## FALLBACK: Email Parameter (Current Working)

If you can't set up company_slug custom fields immediately, use:

```
I built you this showcase for a sample use case for what it could do for {{company}}: https://audit.bluecanvas.ai/?ref={{email}}
```

## Professional URLs Generated:

✅ **https://audit.bluecanvas.ai/mcaleerjackson**
✅ **https://audit.bluecanvas.ai/asmchartered**  
✅ **https://audit.bluecanvas.ai/gmcg**
✅ **https://audit.bluecanvas.ai/claremount**

vs.

❌ **https://showcase-redirect.vercel.app/?email=someone@company.co.uk**

## Setup Steps:

1. **Deploy updated redirect system** to Vercel
2. **Set up audit.bluecanvas.ai DNS** (CNAME to cname.vercel-dns.com)
3. **Add domain in Vercel** project settings
4. **Update Apollo template** with company_slug field
5. **Test with sample URLs**

## Test URLs (After DNS Setup):
- https://audit.bluecanvas.ai/mcaleerjackson
- https://audit.bluecanvas.ai/asmchartered
- https://audit.bluecanvas.ai/gmcg
- https://audit.bluecanvas.ai/?ref=oonagh.arg@mcaleerjackson.co.uk (fallback)

**This creates professional, branded URLs that don't expose technical details!**