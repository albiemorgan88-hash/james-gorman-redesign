#!/usr/bin/env python3
"""
Google Ads Daily Optimisation Script for Blue Canvas
Account: 801-851-4760 | Campaign: Blue Canvas - AI Audit
⚠️ NEVER touches Storage Centre NI account
"""

import os
import sys
import json
from datetime import datetime, timedelta
from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

# Config
CUSTOMER_ID = os.environ.get("GOOGLE_ADS_ACCOUNT_ID", "801-851-4760").replace("-", "")
MANAGER_ID = os.environ.get("GOOGLE_ADS_MANAGER_ID", "396-378-6948").replace("-", "")
REPORT_DIR = os.path.expanduser("~/.openclaw/workspace/reports/google-ads")

# Safety check
assert CUSTOMER_ID == "8018514760", f"WRONG ACCOUNT! Got {CUSTOMER_ID}. Aborting."

def get_client():
    config = {
        "developer_token": os.environ["GOOGLE_ADS_DEVELOPER_TOKEN"],
        "client_id": os.environ["GOOGLE_ADS_CLIENT_ID"],
        "client_secret": os.environ["GOOGLE_ADS_CLIENT_SECRET"],
        "refresh_token": os.environ["GOOGLE_ADS_REFRESH_TOKEN"],
        "use_proto_plus": True,
    }
    return GoogleAdsClient.load_from_dict(config, version="v23")

def query(client, query_text):
    service = client.get_service("GoogleAdsService")
    results = []
    try:
        response = service.search_stream(customer_id=CUSTOMER_ID, query=query_text)
        for batch in response:
            for row in batch.results:
                results.append(row)
    except GoogleAdsException as ex:
        print(f"API Error: {ex.failure.errors[0].message}", file=sys.stderr)
        raise
    return results

def mutate_negative_keywords(client, campaign_id, keywords):
    """Add negative keywords to the campaign"""
    if not keywords:
        return []
    service = client.get_service("CampaignCriterionService")
    operations = []
    for kw in keywords:
        op = client.get_type("CampaignCriterionOperation")
        criterion = op.create
        criterion.campaign = client.get_service("CampaignService").campaign_path(CUSTOMER_ID, campaign_id)
        criterion.negative = True
        criterion.keyword.text = kw
        criterion.keyword.match_type = client.enums.KeywordMatchTypeEnum.EXACT
        operations.append(op)
    
    try:
        response = service.mutate_campaign_criteria(customer_id=CUSTOMER_ID, operations=operations)
        return [r.resource_name for r in response.results]
    except GoogleAdsException as ex:
        print(f"Error adding negatives: {ex.failure.errors[0].message}", file=sys.stderr)
        return []

def main():
    today = datetime.now().strftime("%Y-%m-%d")
    week_ago = (datetime.now() - timedelta(days=7)).strftime("%Y-%m-%d")
    month_start = datetime.now().replace(day=1).strftime("%Y-%m-%d")
    
    client = get_client()
    report = {}
    
    # ── 1. Campaign Performance ──
    print("📊 Pulling campaign performance...")
    
    # Today
    rows = query(client, f"""
        SELECT campaign.id, campaign.name, campaign.status,
               metrics.impressions, metrics.clicks, metrics.ctr,
               metrics.average_cpc, metrics.conversions, metrics.cost_micros,
               metrics.conversions_value, metrics.cost_per_conversion,
               campaign.campaign_budget
        FROM campaign
        WHERE campaign.name = 'Blue Canvas - AI Audit'
        AND segments.date = '{today}'
    """)
    
    today_data = {}
    campaign_id = None
    for row in rows:
        campaign_id = row.campaign.id
        today_data = {
            "impressions": row.metrics.impressions,
            "clicks": row.metrics.clicks,
            "ctr": f"{row.metrics.ctr * 100:.2f}%",
            "avg_cpc": f"£{row.metrics.average_cpc / 1_000_000:.2f}",
            "conversions": row.metrics.conversions,
            "cost": f"£{row.metrics.cost_micros / 1_000_000:.2f}",
            "status": row.campaign.status.name,
        }
    report["today"] = today_data
    
    # This week
    rows = query(client, f"""
        SELECT campaign.name,
               metrics.impressions, metrics.clicks, metrics.ctr,
               metrics.average_cpc, metrics.conversions, metrics.cost_micros,
               metrics.cost_per_conversion
        FROM campaign
        WHERE campaign.name = 'Blue Canvas - AI Audit'
        AND segments.date BETWEEN '{week_ago}' AND '{today}'
    """)
    
    week_data = {"impressions": 0, "clicks": 0, "conversions": 0.0, "cost_micros": 0}
    for row in rows:
        week_data["impressions"] += row.metrics.impressions
        week_data["clicks"] += row.metrics.clicks
        week_data["conversions"] += row.metrics.conversions
        week_data["cost_micros"] += row.metrics.cost_micros
    
    week_data["ctr"] = f"{(week_data['clicks']/max(week_data['impressions'],1))*100:.2f}%"
    week_data["avg_cpc"] = f"£{(week_data['cost_micros']/max(week_data['clicks'],1))/1_000_000:.2f}"
    week_data["cost"] = f"£{week_data['cost_micros']/1_000_000:.2f}"
    week_data["cpc_raw"] = week_data["cost_micros"]/max(week_data["clicks"],1)/1_000_000
    report["this_week"] = week_data
    
    # This month
    rows = query(client, f"""
        SELECT campaign.name,
               metrics.impressions, metrics.clicks, metrics.ctr,
               metrics.average_cpc, metrics.conversions, metrics.cost_micros,
               metrics.cost_per_conversion
        FROM campaign
        WHERE campaign.name = 'Blue Canvas - AI Audit'
        AND segments.date BETWEEN '{month_start}' AND '{today}'
    """)
    
    month_data = {"impressions": 0, "clicks": 0, "conversions": 0.0, "cost_micros": 0}
    for row in rows:
        month_data["impressions"] += row.metrics.impressions
        month_data["clicks"] += row.metrics.clicks
        month_data["conversions"] += row.metrics.conversions
        month_data["cost_micros"] += row.metrics.cost_micros
    
    month_data["ctr"] = f"{(month_data['clicks']/max(month_data['impressions'],1))*100:.2f}%"
    month_data["avg_cpc"] = f"£{(month_data['cost_micros']/max(month_data['clicks'],1))/1_000_000:.2f}"
    month_data["cost"] = f"£{month_data['cost_micros']/1_000_000:.2f}"
    report["this_month"] = month_data
    
    # ── 2. Search Terms Report ──
    print("🔍 Pulling search terms report...")
    rows = query(client, f"""
        SELECT search_term_view.search_term,
               metrics.impressions, metrics.clicks, metrics.ctr,
               metrics.cost_micros, metrics.conversions,
               segments.search_term_match_type
        FROM search_term_view
        WHERE campaign.name = 'Blue Canvas - AI Audit'
        AND segments.date BETWEEN '{week_ago}' AND '{today}'
        ORDER BY metrics.cost_micros DESC
        LIMIT 100
    """)
    
    search_terms = []
    junk_terms = []
    # Terms that indicate irrelevant traffic
    junk_signals = [
        "free", "cheap", "course", "tutorial", "learn", "salary", "job",
        "what is", "definition", "meaning", "example", "template",
        "download", "pdf", "book", "certification", "degree",
        "storage", "warehouse", "container",  # Storage Centre NI contamination
        "chatgpt", "openai", "midjourney", "dall-e",  # consumer AI
        "python", "coding", "programming",  # dev queries
    ]
    
    for row in rows:
        term = row.search_term_view.search_term
        clicks = row.metrics.clicks
        cost = row.metrics.cost_micros / 1_000_000
        conversions = row.metrics.conversions
        
        st = {
            "term": term,
            "impressions": row.metrics.impressions,
            "clicks": clicks,
            "ctr": f"{row.metrics.ctr * 100:.2f}%",
            "cost": f"£{cost:.2f}",
            "conversions": conversions,
        }
        search_terms.append(st)
        
        # Flag junk: high spend + no conversions + matches junk signals
        is_junk = any(signal in term.lower() for signal in junk_signals)
        if is_junk and conversions == 0:
            junk_terms.append(term)
        # Also flag high-cost zero-conversion terms (but only truly irrelevant ones)
        elif cost > 8 and conversions == 0 and clicks > 5:
            junk_terms.append(term)
    
    report["search_terms"] = search_terms
    report["junk_terms"] = junk_terms
    
    # ── 3. Keyword Performance ──
    print("🎯 Checking keyword performance...")
    rows = query(client, f"""
        SELECT ad_group_criterion.keyword.text,
               ad_group_criterion.keyword.match_type,
               ad_group_criterion.status,
               ad_group_criterion.quality_info.quality_score,
               ad_group_criterion.quality_info.creative_quality_score,
               ad_group_criterion.quality_info.search_predicted_ctr,
               ad_group_criterion.quality_info.post_click_quality_score,
               metrics.impressions, metrics.clicks, metrics.ctr,
               metrics.average_cpc, metrics.conversions, metrics.cost_micros,
               metrics.cost_per_conversion
        FROM keyword_view
        WHERE campaign.name = 'Blue Canvas - AI Audit'
        AND segments.date BETWEEN '{month_start}' AND '{today}'
        AND ad_group_criterion.status != 'REMOVED'
        ORDER BY metrics.cost_micros DESC
    """)
    
    keywords = []
    underperformers = []
    strong_performers = []
    
    for row in rows:
        kw_text = row.ad_group_criterion.keyword.text
        clicks = row.metrics.clicks
        cost = row.metrics.cost_micros / 1_000_000
        conversions = row.metrics.conversions
        cpc = row.metrics.average_cpc / 1_000_000
        qs = row.ad_group_criterion.quality_info.quality_score
        
        kw = {
            "keyword": kw_text,
            "match_type": row.ad_group_criterion.keyword.match_type.name,
            "status": row.ad_group_criterion.status.name,
            "quality_score": qs if qs > 0 else "N/A",
            "creative_quality": row.ad_group_criterion.quality_info.creative_quality_score.name if qs > 0 else "N/A",
            "predicted_ctr": row.ad_group_criterion.quality_info.search_predicted_ctr.name if qs > 0 else "N/A",
            "landing_page": row.ad_group_criterion.quality_info.post_click_quality_score.name if qs > 0 else "N/A",
            "impressions": row.metrics.impressions,
            "clicks": clicks,
            "ctr": f"{row.metrics.ctr * 100:.2f}%",
            "avg_cpc": f"£{cpc:.2f}",
            "conversions": conversions,
            "cost": f"£{cost:.2f}",
        }
        keywords.append(kw)
        
        # High spend, no conversions = underperformer
        if cost > 10 and conversions == 0:
            underperformers.append(kw)
        # Good conversions = strong
        if conversions > 0:
            strong_performers.append(kw)
    
    report["keywords"] = keywords
    report["underperformers"] = underperformers
    report["strong_performers"] = strong_performers
    
    # ── 4. Ad Performance (RSAs) ──
    print("📝 Checking ad performance...")
    rows = query(client, f"""
        SELECT ad_group_ad.ad.id,
               ad_group_ad.ad.responsive_search_ad.headlines,
               ad_group_ad.ad.responsive_search_ad.descriptions,
               ad_group_ad.ad.final_urls,
               ad_group_ad.policy_summary.approval_status,
               ad_group_ad.ad_strength,
               metrics.impressions, metrics.clicks, metrics.ctr,
               metrics.conversions, metrics.cost_micros,
               metrics.average_cpc
        FROM ad_group_ad
        WHERE campaign.name = 'Blue Canvas - AI Audit'
        AND segments.date BETWEEN '{month_start}' AND '{today}'
        AND ad_group_ad.status != 'REMOVED'
        ORDER BY metrics.impressions DESC
    """)
    
    ads = []
    for row in rows:
        headlines = [h.text for h in row.ad_group_ad.ad.responsive_search_ad.headlines] if row.ad_group_ad.ad.responsive_search_ad.headlines else []
        descriptions = [d.text for d in row.ad_group_ad.ad.responsive_search_ad.descriptions] if row.ad_group_ad.ad.responsive_search_ad.descriptions else []
        
        ad = {
            "ad_id": row.ad_group_ad.ad.id,
            "headlines": headlines[:5],  # First 5 for readability
            "descriptions": descriptions[:2],
            "ad_strength": row.ad_group_ad.ad_strength.name,
            "approval": row.ad_group_ad.policy_summary.approval_status.name,
            "impressions": row.metrics.impressions,
            "clicks": row.metrics.clicks,
            "ctr": f"{row.metrics.ctr * 100:.2f}%",
            "conversions": row.metrics.conversions,
            "cost": f"£{row.metrics.cost_micros / 1_000_000:.2f}",
        }
        ads.append(ad)
    
    report["ads"] = ads
    
    # ── 5. Add Negative Keywords ──
    negatives_added = []
    if campaign_id and junk_terms:
        print(f"🚫 Adding {len(junk_terms)} negative keywords...")
        # Check existing negatives first
        existing = query(client, f"""
            SELECT campaign_criterion.keyword.text
            FROM campaign_criterion
            WHERE campaign.id = {campaign_id}
            AND campaign_criterion.negative = TRUE
            AND campaign_criterion.type = 'KEYWORD'
        """)
        existing_kws = {row.campaign_criterion.keyword.text.lower() for row in existing}
        
        # SAFETY: never add a negative that matches an active keyword
        active_kw_texts = {kw["keyword"].lower() for kw in keywords}
        
        new_negatives = [t for t in junk_terms 
                         if t.lower() not in existing_kws 
                         and t.lower() not in active_kw_texts]
        if new_negatives:
            results = mutate_negative_keywords(client, campaign_id, new_negatives[:25])  # Max 25 at a time
            negatives_added = new_negatives[:25]
            print(f"  ✅ Added {len(results)} negative keywords")
    
    report["negatives_added"] = negatives_added
    
    # ── 6. Get existing negative keywords ──
    if campaign_id:
        existing_negs = query(client, f"""
            SELECT campaign_criterion.keyword.text,
                   campaign_criterion.keyword.match_type
            FROM campaign_criterion
            WHERE campaign.id = {campaign_id}
            AND campaign_criterion.negative = TRUE
            AND campaign_criterion.type = 'KEYWORD'
        """)
        report["existing_negatives"] = [row.campaign_criterion.keyword.text for row in existing_negs]
    
    # ── Generate Markdown Report ──
    print("📄 Generating report...")
    
    md = f"""# Google Ads Daily Report — Blue Canvas
**Date:** {today}  
**Account:** 801-851-4760  
**Campaign:** Blue Canvas - AI Audit  

---

## 📊 Performance Snapshot

### Today ({today})
| Metric | Value |
|--------|-------|
| Status | {today_data.get('status', 'N/A')} |
| Impressions | {today_data.get('impressions', 0)} |
| Clicks | {today_data.get('clicks', 0)} |
| CTR | {today_data.get('ctr', 'N/A')} |
| Avg CPC | {today_data.get('avg_cpc', 'N/A')} |
| Conversions | {today_data.get('conversions', 0)} |
| Cost | {today_data.get('cost', '£0.00')} |

### This Week ({week_ago} → {today})
| Metric | Value |
|--------|-------|
| Impressions | {week_data['impressions']} |
| Clicks | {week_data['clicks']} |
| CTR | {week_data['ctr']} |
| Avg CPC | {week_data['avg_cpc']} |
| Conversions | {week_data['conversions']} |
| Cost | {week_data['cost']} |

### This Month ({month_start} → {today})
| Metric | Value |
|--------|-------|
| Impressions | {month_data['impressions']} |
| Clicks | {month_data['clicks']} |
| CTR | {month_data['ctr']} |
| Avg CPC | {month_data['avg_cpc']} |
| Conversions | {month_data['conversions']} |
| Cost | {month_data['cost']} |

---

## 🔍 Search Terms (Top by Spend)

| Search Term | Impr | Clicks | CTR | Cost | Conv |
|-------------|------|--------|-----|------|------|
"""
    for st in search_terms[:30]:
        md += f"| {st['term']} | {st['impressions']} | {st['clicks']} | {st['ctr']} | {st['cost']} | {st['conversions']} |\n"
    
    if junk_terms:
        md += f"\n### ⚠️ Junk/Irrelevant Terms Found\n"
        for t in junk_terms:
            md += f"- `{t}`\n"
    
    md += f"""
---

## 🎯 Keyword Performance

| Keyword | Match | QS | Impr | Clicks | CTR | CPC | Conv | Cost |
|---------|-------|----|------|--------|-----|-----|------|------|
"""
    for kw in keywords:
        md += f"| {kw['keyword']} | {kw['match_type']} | {kw['quality_score']} | {kw['impressions']} | {kw['clicks']} | {kw['ctr']} | {kw['avg_cpc']} | {kw['conversions']} | {kw['cost']} |\n"
    
    if underperformers:
        md += "\n### 🔴 Underperformers (High Spend, No Conversions)\n"
        for kw in underperformers:
            md += f"- **{kw['keyword']}** ({kw['match_type']}) — {kw['cost']} spent, {kw['clicks']} clicks, 0 conversions\n"
    
    if strong_performers:
        md += "\n### 🟢 Strong Performers\n"
        for kw in strong_performers:
            md += f"- **{kw['keyword']}** ({kw['match_type']}) — {kw['conversions']} conversions at {kw['cost']}\n"
    
    md += f"""
---

## 📝 Ad Performance (RSAs)

"""
    for ad in ads:
        md += f"""### Ad #{ad['ad_id']}
- **Strength:** {ad['ad_strength']} | **Approval:** {ad['approval']}
- **Headlines:** {', '.join(ad['headlines'][:3])}...
- **Impressions:** {ad['impressions']} | **Clicks:** {ad['clicks']} | **CTR:** {ad['ctr']}
- **Conversions:** {ad['conversions']} | **Cost:** {ad['cost']}

"""
    
    md += "---\n\n## 🎯 Quality Scores\n\n"
    md += "| Keyword | QS | Ad Relevance | Expected CTR | Landing Page |\n"
    md += "|---------|----|--------------|--------------|--------------|\n"
    for kw in keywords:
        if kw['quality_score'] != "N/A":
            md += f"| {kw['keyword']} | {kw['quality_score']} | {kw['creative_quality']} | {kw['predicted_ctr']} | {kw['landing_page']} |\n"
    
    md += f"""
---

## 🚫 Negative Keywords

### Added Today ({len(negatives_added)})
"""
    if negatives_added:
        for n in negatives_added:
            md += f"- `{n}` (EXACT)\n"
    else:
        md += "- None added today\n"
    
    md += f"\n### All Active Negatives ({len(report.get('existing_negatives', []))})\n"
    for n in report.get("existing_negatives", []):
        md += f"- `{n}`\n"
    
    # Recommendations
    md += """
---

## 💡 Recommendations

"""
    recs = []
    
    # CPC analysis
    if week_data.get("cpc_raw", 0) > 3:
        recs.append("⚠️ **CPC is high (>£3).** Consider tightening match types or adding more negatives to reduce wasted spend.")
    
    # CTR analysis
    week_ctr = week_data["clicks"] / max(week_data["impressions"], 1) * 100
    if week_ctr < 3:
        recs.append("⚠️ **CTR below 3%.** Review ad copy — test more compelling headlines. Consider adding location/urgency in headlines.")
    elif week_ctr > 5:
        recs.append("✅ **CTR is strong (>5%).** Ads are resonating well with search intent.")
    
    # Conversion analysis
    if month_data["conversions"] == 0:
        recs.append("🔴 **Zero conversions this month.** Check: (1) conversion tracking is firing, (2) landing page loads fast, (3) CTA is clear. Consider adding a phone number extension.")
    
    # Quality score
    low_qs = [kw for kw in keywords if isinstance(kw['quality_score'], int) and kw['quality_score'] < 5]
    if low_qs:
        recs.append(f"⚠️ **{len(low_qs)} keywords have QS < 5.** Improve landing page relevance and ad copy alignment for: {', '.join(kw['keyword'] for kw in low_qs[:3])}")
    
    # Budget utilisation
    daily_spend = (month_data["cost_micros"] / 1_000_000) / max((datetime.now().day), 1)
    if daily_spend < 15:
        recs.append(f"💰 **Underspending** (avg £{daily_spend:.2f}/day vs £20 budget). Consider broadening keywords or raising bids.")
    elif daily_spend > 22:
        recs.append(f"💰 **Overspending** (avg £{daily_spend:.2f}/day). Budget may need adjustment or keywords need tightening.")
    
    if not recs:
        recs.append("✅ Campaign looks healthy. Continue monitoring.")
    
    for r in recs:
        md += f"- {r}\n"
    
    md += f"\n---\n*Generated automatically at {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*\n"
    
    # Save report
    os.makedirs(REPORT_DIR, exist_ok=True)
    report_path = os.path.join(REPORT_DIR, f"daily-{today}.md")
    with open(report_path, "w") as f:
        f.write(md)
    
    print(f"\n✅ Report saved to {report_path}")
    print(md)

if __name__ == "__main__":
    main()
