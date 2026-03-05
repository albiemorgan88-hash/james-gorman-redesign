#!/usr/bin/env python3
"""Generate and update meta descriptions for blog posts missing small-details."""

import os, json, time, requests

TOKEN = os.environ["WEBFLOW_API_TOKEN"]
COLLECTION_ID = "67e4825804e6baf1d5246f5b"
HEADERS = {"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"}

# Posts needing meta descriptions (id, name) - all with empty small-details
# Plus the 46-char one that's too short
posts_to_fix = {
    "696e5bc7adb662a1ce908992": "How to Make Your Business AI-First",
    "696e5b51e0a7643107a8cc56": "AI Support Northern Ireland",
    "696e31b2e1c4e833c20963a4": "AI Business Development Tools",
    "696e2f74c6362c5b99163c7b": "What is the Best LLM Right Now?",
    "696e2ee476c61027eaf9efa2": "Claude Cowork: What's It Good For, and What's the Future?",
    "693acbd908fcf4ac29e8c60c": "Will AI take my job?",
    "693acb552484078f6bd84134": "AI training frameworks for corporates",
    "693acae26ca997ad8390d794": "AI in Northern Ireland",
    "693ac96bb8eecdbb5bc57679": "Using AI in healthcare",
    "6939e1edbf004c842b38df72": "Using AI in Schools",
    "691e0e4a30123b1b099d0fb3": "Is AI a Bubble?",
    "691e0d733cae746a30f2513a": "Has AI Hit a Plateau?",
    "691e0d052040cae137d6913d": "The Current Status of AI Agents",
    "68fa93190113889da52c82e1": "Upskilling Junior Staff in AI",
    "68fa927fd6638673c6b710df": "AI in Construction",
    "68fa91fc1f07d11ee0ddfbd3": "AI in Dentistry",
    "68fa919a377e0c706802bd3c": "Integrating AI into Healthcare",
    "68fa9118304f5e0e9c322ed5": "AI in Education",
    "68ef7bb5ca8791fb753e8068": "UK Grants For Embedding AI",
    "68ef7b61ad221b534b25f1ee": "Using AI For My Business",
    "68ef7b060e80ef9756398d7a": "What Is Reinforcement Learning (RL)?",
    "68ef7aad440a53f22ab1e960": "MATRIX Report Northern Ireland",
    "68ef7a1008d77d31eb1f1917": "When Will AGI Happen?",
    "68d5455359994e6a84651227": "Training corporates to become AI-first",
    "68d544dead560080fbf19453": "Proven use cases of AI",
    "68d544750069dd75ab3d8563": "AI Compute Power",
    "68cc1b4067d844000e9bc2ab": "Agent 3: The Autonomous Coding Agent",
    "68cc1ae0e0eacb3e99503fcf": "What are Evals?",
    "68cc19e55c358361895d690e": "What are MCPs?",
    "68c2efa07abfb50aef529705": "AI Infrastructure",
    "68c2eedc23648bdb0ad29446": "Agentic AI",
    "68c2ed6bc12a9f76952d4146": "Sovereign AI",
    "68bf4356079f117e7a6f5e69": "ChatGPT, Claude, Perplexity, Gemini, Grok: Which AI Tool Should I Use?",
    "68bf42807e6bf8d769d6c161": "Learning AI for Free",
    "68bf41882760419df00d0843": "Organisational AI Training",
    "68b6fdca1b27571308bff434": "How Can Countries Positively Regulate AI?",
    "68b6fd0b711654c27218266a": "Is AI a Bubble?",
    "68b6f8eaa00b6bc258a09c0d": "Agentic AI Use Cases",
    "68b1df91f86399839f4e8459": "AI, Northern Ireland 2025",
    "68af849319be1716b1adfcbf": "When Will the UK Have Super Intelligence?",
    "68af834c22d1c625c204bbae": "Encouraging Your Team to Embrace AI",
    "68af8219aaa2732e97a86639": "AI Job Displacement: The Rise of AI Agents and the Future of Work",
    "68a634abfc2b66aa26aaac77": "Training Staff on AI",
    "68a6343869b52b88056c2d48": "AI Data Security",
    "68a63394870a79e3d38e3066": "Building AI Automations",
    "689632baec160dc298d3572a": "Can the UK Become an AI Superpower?",
    "6896321c18a03c79104239b2": "5 Sectors Being Disrupted by AI",
    "6896302346c8f63a50888e93": "AI Corporate Coaching",
    "6890db646313454392264f42": "3 AI Startups in London to Watch",
    "6890d8a1c178effe0a5a2507": "Being an Early Adopter of AI",
    "6890d7f225ded153f27a46d3": "15 Amazing AI Tools for Business",
    "688def5a81d1b62072caa6c1": "How Northern Ireland Can Become a Leader in AI",
    "688ded68961d84e35873d857": "Getting Started with AI",
    "688ded0f196aa50a998d6d7d": "AI Developments in 2025",
    "68822fac55633f2528414210": "Small Business Using AI",
    "68822f3a7406797d7f3ecef3": "AI Consultancy Northern Ireland",
    "68822ecc46a057d5fb68f732": "AI Consultancy Ireland",
    "6876ac98da6a4e1a0c07636a": "Generating Images and Video with AI",
    "6876abf2c20c34b9381a8769": "Can I Replace My Staff with AI Agents?",
    "6876ab7c2e39b3b9783db3eb": "Generating Marketing Content with AI",
    "686d9f683a5c5187b946e62d": "AI Early Adoption",
    "686d9f1878b6286cd9513e4d": "Building Autonomous Agents",
    "686d9eba7ebc8efdde835661": "Using AI in Accountancy Practices",
    "686b6a6eb0cbf7606cc3573b": "Using AI in Construction",
    "686b6a1450fc0bc249d7c05f": "Using AI in Legal Practice",
    "686b699e4bd3b3f0cb038371": "The Future of AI in Northern Ireland",
    "6867e7ba2c3649f4c2b78a92": "Private AI for Enterprise",
    "6867e7392c2b42de90591d37": "AI for B2B Sales Automation",
    "6867e6c707f4afa177410e63": "Using AI to win tenders",
    "6863f23c7324cbae67c33bb5": "AI for B2B Sales Automation",
    "6863f1ca6130157064099782": "Best AI Tools for Small Business 2025",
    "6863f1682f00a86d45cd1a2a": "How to Scale Your Business with AI",
    "6862e368d2fd254f7daadc1d": "Reduce Headcount with AI",
    "6861be7f2910c4c57e74a528": "AI Business Coaching",
    "68533450c7c1a6948b760df1": "Ongoing AI Business Support: Why You Need On-Demand Expertise",
    "6853337a6bcbbab2803ee8e8": "AI Tools for Business Development",
    "6849c0264435ad5c3ba3af84": "Sales AI Agents",
    "68475ead550bae76595c6d3f": "5 Business Use Cases of AI in Northern Ireland",
    "683e07d314540e5fab599258": "Using AI for Writing Tenders",
    "683740de6b773d07bd979de7": "AI Chat GPT Consulting",
    "6830820772498ec8788f9111": "How To Use AI In Business Development",
    "68250f75514948d0c9a40a5d": "AI Marketing",
    "681d2d428dbb9e0212dc2df1": "AI Sales Coaching",
    "67fd2244de11945381ade945": "AI for Business Development and AI Marketing in the UK",
}

# Hand-crafted meta descriptions - 140-155 chars each, with natural keyword inclusion
descriptions = {
    "696e5bc7adb662a1ce908992": "Learn how to make your business AI-first with practical strategies for AI automation and integration. Expert AI consulting tips for UK companies.",
    "696e5b51e0a7643107a8cc56": "Discover AI support services in Northern Ireland. From AI consulting to automation, learn how local businesses are transforming with AI technology.",
    "696e31b2e1c4e833c20963a4": "Explore the best AI business development tools for 2026. Boost sales, automate outreach, and grow faster with AI-powered solutions for your business.",
    "696e2f74c6362c5b99163c7b": "Comparing the best large language models in 2026 — GPT, Claude, Gemini and more. Find out which LLM is right for your AI automation and business needs.",
    "696e2ee476c61027eaf9efa2": "What is Claude Cowork and how can it help your business? Explore Anthropic's collaborative AI assistant and its future potential for AI automation.",
    "693acbd908fcf4ac29e8c60c": "Will AI take your job? Explore the real impact of AI automation on UK employment, which roles are at risk, and how to future-proof your career.",
    "693acb552484078f6bd84134": "Discover proven AI training frameworks for corporates. Upskill your team with structured AI learning paths designed for business transformation in the UK.",
    "693acae26ca997ad8390d794": "Explore the AI landscape in Northern Ireland — from AI consultancy and startups to government support. See how NI businesses are embracing AI automation.",
    "693ac96bb8eecdbb5bc57679": "How AI is transforming healthcare — from diagnostics to patient care. Explore real-world use cases of AI automation in the UK healthcare sector.",
    "6939e1edbf004c842b38df72": "How AI is reshaping education in the UK. Explore benefits, risks, and practical ways schools can integrate AI tools to enhance teaching and learning.",
    "691e0e4a30123b1b099d0fb3": "Is AI a bubble about to burst? We examine the evidence, market trends, and why AI adoption for business is still accelerating across the UK in 2026.",
    "691e0d733cae746a30f2513a": "Has AI development hit a plateau? Explore the latest breakthroughs, scaling challenges, and what the future holds for AI automation and business adoption.",
    "691e0d052040cae137d6913d": "What is the current status of AI agents in 2026? Explore how autonomous agents are evolving and transforming AI automation for business across the UK.",
    "68fa93190113889da52c82e1": "How to upskill junior staff in AI — practical frameworks and tools to build AI-ready teams. Expert AI consulting advice for forward-thinking UK businesses.",
    "68fa927fd6638673c6b710df": "How AI is transforming the construction industry — from project planning to safety monitoring. Explore AI automation use cases for UK construction firms.",
    "68fa91fc1f07d11ee0ddfbd3": "AI in dentistry is revolutionising diagnostics, treatment planning, and patient care. Explore how dental practices across the UK are adopting AI tools.",
    "68fa919a377e0c706802bd3c": "A practical guide to integrating AI into healthcare. From diagnostics to admin automation, discover how UK healthcare providers are leveraging AI tools.",
    "68fa9118304f5e0e9c322ed5": "How AI is transforming education — from personalised learning to admin automation. Practical insights for UK schools, universities, and training providers.",
    "68ef7bb5ca8791fb753e8068": "Discover UK grants and funding available for embedding AI into your business. A comprehensive guide to AI funding opportunities for UK companies in 2026.",
    "68ef7b61ad221b534b25f1ee": "Wondering how to use AI for your business? Practical tips on AI automation, tools, and strategies to boost productivity. Expert AI consulting guidance.",
    "68ef7b060e80ef9756398d7a": "What is reinforcement learning and why does it matter? A plain-English guide to RL, how it powers AI agents, and its real-world business applications.",
    "68ef7aad440a53f22ab1e960": "Explore the MATRIX Report and what it means for Northern Ireland's technology future. Key insights on AI, innovation, and economic growth opportunities.",
    "68ef7a1008d77d31eb1f1917": "When will AGI actually happen? We explore expert predictions, current progress, and what artificial general intelligence means for UK businesses and society.",
    "68d5455359994e6a84651227": "A practical guide to training corporates to become AI-first. Proven strategies for organisational AI adoption, from leadership buy-in to hands-on upskilling.",
    "68d544dead560080fbf19453": "Explore proven use cases of AI across industries — from sales automation to customer service. See how UK businesses are getting real ROI from AI consulting.",
    "68d544750069dd75ab3d8563": "Understanding AI compute power — what it is, why it matters, and how it shapes the future of AI for business. Essential reading for UK technology leaders.",
    "68cc1b4067d844000e9bc2ab": "Meet Agent 3, the autonomous coding agent transforming software development. Explore how AI agents are changing how businesses build and ship code in 2026.",
    "68cc1ae0e0eacb3e99503fcf": "What are evals in AI and why do they matter? Learn how AI evaluation frameworks help businesses measure model performance and choose the right AI tools.",
    "68cc19e55c358361895d690e": "What are MCPs (Model Context Protocols)? Learn how this emerging standard connects AI models to tools and data, and why it matters for AI automation.",
    "68c2efa07abfb50aef529705": "A guide to AI infrastructure — from cloud compute to deployment pipelines. Essential knowledge for UK businesses building scalable AI automation systems.",
    "68c2eedc23648bdb0ad29446": "What is agentic AI and why is it the next frontier? Explore how autonomous AI agents are transforming business processes and AI automation across the UK.",
    "68c2ed6bc12a9f76952d4146": "What is sovereign AI and why are nations investing in it? Explore how the UK and other countries are building independent AI infrastructure and capabilities.",
    "68bf4356079f117e7a6f5e69": "ChatGPT vs Claude vs Perplexity vs Gemini vs Grok — which AI tool is best for your business? An honest comparison to help you choose the right AI platform.",
    "68bf42807e6bf8d769d6c161": "Learn AI for free with these top resources, courses, and tools. A practical guide for UK professionals looking to build AI skills without spending a penny.",
    "68bf41882760419df00d0843": "How to implement organisational AI training that sticks. Proven frameworks for upskilling your entire team, from AI consultancy experts in the UK.",
    "68b6fdca1b27571308bff434": "How can countries positively regulate AI? Explore global approaches to AI governance, the UK's strategy, and how smart regulation can drive AI innovation.",
    "68b6fd0b711654c27218266a": "Is AI investment a bubble? Analysing the hype vs reality of AI for business, market valuations, and why smart UK companies are still investing in AI now.",
    "68b6f8eaa00b6bc258a09c0d": "Discover real-world agentic AI use cases transforming businesses in 2026. From autonomous workflows to AI automation, see what's possible for UK companies.",
    "68b1df91f86399839f4e8459": "The state of AI in Northern Ireland in 2025. Explore local AI initiatives, business adoption, funding, and how NI companies are leveraging AI consulting.",
    "68af849319be1716b1adfcbf": "When will the UK achieve superintelligence? Explore AI progress, government strategy, and expert timelines for advanced AI development in the United Kingdom.",
    "68af834c22d1c625c204bbae": "Practical strategies for encouraging your team to embrace AI. Overcome resistance, build confidence, and drive AI adoption across your UK business.",
    "68af8219aaa2732e97a86639": "AI job displacement is real — but so are the opportunities. Explore how AI agents are reshaping work and what UK businesses and workers should do now.",
    "68a634abfc2b66aa26aaac77": "A practical guide to training staff on AI tools and workflows. Build an AI-ready workforce with proven strategies from leading UK AI consultancy experts.",
    "68a6343869b52b88056c2d48": "How to keep your data secure when using AI. Essential AI data security practices for UK businesses adopting AI automation and AI-powered tools in 2026.",
    "68a63394870a79e3d38e3066": "Learn how to build AI automations that save time and reduce costs. Step-by-step guide to AI workflow automation for UK businesses of all sizes.",
    "689632baec160dc298d3572a": "Can the UK become an AI superpower? Explore the UK's strengths, challenges, and strategy for global AI leadership. What it means for AI consulting and business.",
    "6896321c18a03c79104239b2": "Discover 5 sectors being massively disrupted by AI — from healthcare to finance. See how AI automation is transforming industries across the UK and beyond.",
    "6896302346c8f63a50888e93": "AI corporate coaching to help your leadership team embrace AI. Expert AI consultancy for UK businesses ready to transform their operations with AI automation.",
    "6890db646313454392264f42": "Three exciting AI startups in London to watch in 2026. Discover the innovative companies pushing the boundaries of AI for business and AI automation in the UK.",
    "6890d8a1c178effe0a5a2507": "Why being an early adopter of AI gives your business a competitive edge. Practical advice on getting ahead with AI automation from UK AI consulting experts.",
    "6890d7f225ded153f27a46d3": "Discover 15 amazing AI tools for business in 2025 — from automation to analytics. Handpicked recommendations from UK AI consultancy experts at Blue Canvas.",
    "688def5a81d1b62072caa6c1": "How Northern Ireland can become a leader in AI. Exploring NI's potential for AI innovation, investment, and how local businesses can benefit from AI consulting.",
    "688ded68961d84e35873d857": "Getting started with AI for your business — a beginner's guide to AI tools, automation, and strategy. Expert AI consulting advice for UK companies in 2026.",
    "688ded0f196aa50a998d6d7d": "Key AI developments in 2025 that every business should know. From AI agents to new models, stay informed on the trends shaping AI for business in the UK.",
    "68822fac55633f2528414210": "How small businesses are using AI to compete with larger rivals. Practical AI automation strategies and tools for SMEs across the UK and Northern Ireland.",
    "68822f3a7406797d7f3ecef3": "Leading AI consultancy in Northern Ireland. Blue Canvas helps NI businesses transform with AI automation, strategy, and hands-on AI consulting support.",
    "68822ecc46a057d5fb68f732": "Expert AI consultancy for Irish businesses. Discover how Blue Canvas helps companies across Ireland implement AI automation and AI-powered business solutions.",
    "6876ac98da6a4e1a0c07636a": "How to generate stunning images and video with AI tools. A practical guide to AI-powered content creation for UK businesses looking to boost their marketing.",
    "6876abf2c20c34b9381a8769": "Can you replace staff with AI agents? An honest look at what AI automation can and can't do, and how UK businesses should approach AI workforce planning.",
    "6876ab7c2e39b3b9783db3eb": "How to generate marketing content with AI — from blog posts to social media. Practical AI automation tips for UK businesses looking to scale content creation.",
    "686d9f683a5c5187b946e62d": "Why early AI adoption matters for your business. Learn how to get ahead of competitors with AI automation and smart AI strategy from UK AI consultancy experts.",
    "686d9f1878b6286cd9513e4d": "A guide to building autonomous AI agents for your business. Explore frameworks, tools, and real-world use cases for agentic AI automation in the UK.",
    "686d9eba7ebc8efdde835661": "How AI is transforming accountancy practices — from bookkeeping automation to client insights. Practical AI tools and strategies for UK accounting firms.",
    "686b6a6eb0cbf7606cc3573b": "How AI is revolutionising the construction industry. Explore practical AI automation use cases for UK construction companies looking to boost productivity.",
    "686b6a1450fc0bc249d7c05f": "How AI is transforming legal practice — from contract review to research automation. Discover practical AI tools and strategies for UK law firms in 2026.",
    "686b699e4bd3b3f0cb038371": "Explore the future of AI in Northern Ireland. How NI businesses, government, and education are shaping a thriving AI ecosystem with local AI consultancy support.",
    "6867e7ba2c3649f4c2b78a92": "Private AI for enterprise — how to deploy secure, on-premise AI solutions for your business. Expert guidance on private AI infrastructure for UK companies.",
    "6867e7392c2b42de90591d37": "How AI is automating B2B sales — from lead generation to outreach. Discover AI automation tools and strategies to accelerate your UK business pipeline.",
    "6867e6c707f4afa177410e63": "How to use AI to win tenders and bids. Practical AI automation strategies for UK businesses looking to improve proposal quality and success rates.",
    "6863f23c7324cbae67c33bb5": "Transform your B2B sales with AI automation. From prospecting to closing deals, discover how UK businesses are using AI agents to accelerate revenue growth.",
    "6863f1ca6130157064099782": "The best AI tools for small business in 2025. Curated recommendations for AI automation, productivity, and growth — chosen by UK AI consultancy experts.",
    "6863f1682f00a86d45cd1a2a": "How to scale your business with AI — from automating operations to AI-powered growth strategies. Expert AI consulting advice for ambitious UK companies.",
    "6862e368d2fd254f7daadc1d": "Can AI help you reduce headcount costs? Explore how AI automation can streamline operations, boost efficiency, and reshape your UK business workforce strategy.",
    "6861be7f2910c4c57e74a528": "AI business coaching to help your company embrace AI. Expert AI consultancy and hands-on coaching for UK businesses ready to transform with AI automation.",
    "68533450c7c1a6948b760df1": "Why your business needs ongoing AI support, not just a one-off project. Discover the value of on-demand AI consulting expertise for UK companies in 2026.",
    "6853337a6bcbbab2803ee8e8": "The best AI tools for business development in 2026. Discover AI-powered solutions for lead gen, outreach, and pipeline growth from UK AI consultancy experts.",
    "6849c0264435ad5c3ba3af84": "How sales AI agents are transforming B2B revenue. Explore autonomous AI tools that prospect, qualify, and engage leads — built for UK business growth.",
    "68475ead550bae76595c6d3f": "Discover 5 real business use cases of AI in Northern Ireland. See how local NI companies are using AI automation and AI consulting to drive growth and efficiency.",
    "683e07d314540e5fab599258": "How to use AI for writing tenders and proposals. Boost win rates with AI-powered drafting, research, and review tools — practical advice from UK AI consultants.",
    "683740de6b773d07bd979de7": "Expert ChatGPT consulting for UK businesses. Learn how to get real value from ChatGPT and other AI tools with professional AI consultancy and training.",
    "6830820772498ec8788f9111": "How to use AI in business development — from lead generation to deal closing. Practical AI automation strategies and tools for UK companies looking to grow.",
    "68250f75514948d0c9a40a5d": "How AI is transforming marketing for UK businesses. Explore AI automation tools and strategies for content, ads, SEO, and campaigns from AI consultancy experts.",
    "681d2d428dbb9e0212dc2df1": "AI sales coaching to boost your team's performance. Discover how AI-powered coaching tools and AI consultancy can transform your UK sales operation in 2026.",
    "67fd2244de11945381ade945": "AI for business development and marketing in the UK. Expert AI consultancy helping companies leverage AI automation to grow revenue and win more clients.",
}

# Validate lengths
print("Validating description lengths...")
issues = []
for item_id, desc in descriptions.items():
    length = len(desc)
    if length < 140 or length > 160:
        issues.append(f"  {item_id}: {length}c - {posts_to_fix[item_id]}")
if issues:
    print(f"WARNING: {len(issues)} descriptions outside 140-160 char range:")
    for i in issues:
        print(i)
else:
    print("All descriptions within target range.")

print(f"\nTotal posts to update: {len(descriptions)}")
print("Starting updates (staged only, no publish)...\n")

results = []
errors = []

for item_id, desc in descriptions.items():
    title = posts_to_fix[item_id]
    url = f"https://api.webflow.com/v2/collections/{COLLECTION_ID}/items/{item_id}"
    payload = {"fieldData": {"small-details": desc}}
    
    try:
        resp = requests.patch(url, headers=HEADERS, json=payload)
        if resp.status_code == 200:
            results.append((item_id, title, desc, len(desc)))
            print(f"✓ {title[:50]} ({len(desc)}c)")
        else:
            errors.append((item_id, title, resp.status_code, resp.text[:200]))
            print(f"✗ {title[:50]} - {resp.status_code}: {resp.text[:100]}")
    except Exception as e:
        errors.append((item_id, title, 0, str(e)))
        print(f"✗ {title[:50]} - ERROR: {e}")
    
    time.sleep(0.3)  # Rate limiting

print(f"\n\nDone! {len(results)} updated, {len(errors)} errors.")

# Save report
report_path = "/Users/philsagent/.openclaw/workspace/reports/blog-meta-fix-2026-02-24.md"
os.makedirs(os.path.dirname(report_path), exist_ok=True)

with open(report_path, "w") as f:
    f.write("# Blog Meta Description Fix — 2026-02-24\n\n")
    f.write(f"**Total updated:** {len(results)}  \n")
    f.write(f"**Errors:** {len(errors)}  \n")
    f.write(f"**Status:** Staged only (NOT published)  \n")
    f.write(f"**Field updated:** `small-details` (used as meta description template fallback)  \n\n")
    f.write("## Action Required\n")
    f.write("- Phil needs to publish staged items in Webflow Designer\n")
    f.write("- Phil should set SEO title template `{Name} | Blue Canvas` in Designer (can't be done via API)\n\n")
    f.write("## Updated Posts\n\n")
    f.write("| # | Title | Meta Description | Chars |\n")
    f.write("|---|-------|-----------------|-------|\n")
    for i, (item_id, title, desc, chars) in enumerate(results, 1):
        f.write(f"| {i} | {title} | {desc} | {chars} |\n")
    
    if errors:
        f.write("\n## Errors\n\n")
        for item_id, title, status, msg in errors:
            f.write(f"- **{title}** ({item_id}): {status} - {msg}\n")

print(f"\nReport saved to {report_path}")
