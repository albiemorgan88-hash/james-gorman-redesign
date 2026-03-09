#!/usr/bin/env python3
"""Comprehensive Google Ads Performance Report for Blue Canvas — v2."""

import os
import sys
from datetime import datetime
from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

CUSTOMER_ID = "8018514760"

def get_client():
    config = {
        "developer_token": os.environ["GOOGLE_ADS_DEVELOPER_TOKEN"],
        "client_id": os.environ["GOOGLE_ADS_CLIENT_ID"],
        "client_secret": os.environ["GOOGLE_ADS_CLIENT_SECRET"],
        "refresh_token": os.environ["GOOGLE_ADS_REFRESH_TOKEN"],
        "use_proto_plus": True,
    }
    return GoogleAdsClient.load_from_dict(config)

def micros_to_currency(micros):
    return micros / 1_000_000 if micros else 0

def safe_pct(num, denom):
    return (num / denom * 100) if denom else 0

def run_query(client, query):
    service = client.get_service("GoogleAdsService")
    response = service.search(customer_id=CUSTOMER_ID, query=query)
    return list(response)

def section_campaign_overview(client):
    lines = ["## 1. Campaign Overview\n"]
    
    q = """
    SELECT campaign.name, campaign.status, campaign.id,
           campaign_budget.amount_micros,
           metrics.cost_micros, metrics.impressions, metrics.clicks,
           metrics.ctr, metrics.average_cpc, metrics.conversions,
           metrics.cost_per_conversion
    FROM campaign
    WHERE campaign.status != 'REMOVED'
    """
    rows = run_query(client, q)
    
    for row in rows:
        c = row.campaign
        m = row.metrics
        budget = micros_to_currency(row.campaign_budget.amount_micros)
        spend = micros_to_currency(m.cost_micros)
        avg_cpc = micros_to_currency(m.average_cpc)
        cpp = micros_to_currency(m.cost_per_conversion) if m.cost_per_conversion else 0
        
        lines.append(f"**Campaign:** {c.name} (ID: {c.id})")
        lines.append(f"- **Status:** {c.status.name}")
        lines.append(f"- **Daily Budget:** £{budget:.2f}")
        lines.append(f"- **Total Spend:** £{spend:.2f}")
        lines.append(f"- **Impressions:** {m.impressions:,}")
        lines.append(f"- **Clicks:** {m.clicks:,}")
        lines.append(f"- **CTR:** {m.ctr*100:.2f}%")
        lines.append(f"- **Avg CPC:** £{avg_cpc:.2f}")
        lines.append(f"- **Conversions:** {m.conversions:.1f}")
        lines.append(f"- **Cost/Conversion:** £{cpp:.2f}" if m.conversions > 0 else "- **Cost/Conversion:** N/A (no conversions)")
        lines.append("")
    
    # Daily breakdown
    lines.append("### Daily Spend Breakdown\n")
    q_daily = """
    SELECT segments.date, campaign.name,
           metrics.cost_micros, metrics.impressions, metrics.clicks,
           metrics.ctr, metrics.average_cpc, metrics.conversions
    FROM campaign
    WHERE campaign.status != 'REMOVED'
      AND segments.date DURING LAST_30_DAYS
    ORDER BY segments.date ASC
    """
    daily_rows = run_query(client, q_daily)
    
    if daily_rows:
        lines.append("| Date | Campaign | Spend | Impressions | Clicks | CTR | Avg CPC | Conv |")
        lines.append("|------|----------|-------|-------------|--------|-----|---------|------|")
        for row in daily_rows:
            d = row.segments.date
            m = row.metrics
            spend = micros_to_currency(m.cost_micros)
            avg_cpc = micros_to_currency(m.average_cpc)
            lines.append(f"| {d} | {row.campaign.name} | £{spend:.2f} | {m.impressions:,} | {m.clicks} | {m.ctr*100:.2f}% | £{avg_cpc:.2f} | {m.conversions:.0f} |")
        lines.append("")
    else:
        lines.append("No daily data found.\n")
    
    return "\n".join(lines)

def section_ad_groups(client):
    lines = ["## 2. Ad Group Performance\n"]
    
    q = """
    SELECT ad_group.name, ad_group.status, ad_group.id,
           campaign.name,
           metrics.cost_micros, metrics.impressions, metrics.clicks,
           metrics.ctr, metrics.average_cpc, metrics.conversions,
           metrics.cost_per_conversion
    FROM ad_group
    WHERE ad_group.status != 'REMOVED'
    ORDER BY metrics.clicks DESC
    """
    rows = run_query(client, q)
    
    if rows:
        lines.append("| Ad Group | Campaign | Status | Impressions | Clicks | CTR | Spend | Avg CPC | Conv |")
        lines.append("|----------|----------|--------|-------------|--------|-----|-------|---------|------|")
        for row in rows:
            ag = row.ad_group
            m = row.metrics
            spend = micros_to_currency(m.cost_micros)
            avg_cpc = micros_to_currency(m.average_cpc)
            lines.append(f"| {ag.name} | {row.campaign.name} | {ag.status.name} | {m.impressions:,} | {m.clicks} | {m.ctr*100:.2f}% | £{spend:.2f} | £{avg_cpc:.2f} | {m.conversions:.0f} |")
        lines.append("")
    else:
        lines.append("No ad groups found.\n")
    
    return "\n".join(lines)

def section_keywords(client):
    lines = ["## 3. Full Keyword Report\n"]
    
    q = """
    SELECT ad_group_criterion.keyword.text,
           ad_group_criterion.keyword.match_type,
           ad_group_criterion.status,
           ad_group.name,
           metrics.impressions, metrics.clicks, metrics.ctr,
           metrics.average_cpc, metrics.cost_micros, metrics.conversions,
           ad_group_criterion.quality_info.quality_score
    FROM keyword_view
    WHERE ad_group_criterion.status != 'REMOVED'
    ORDER BY metrics.clicks DESC
    """
    rows = run_query(client, q)
    
    if rows:
        lines.append("| Keyword | Match Type | Status | Ad Group | Impr | Clicks | CTR | Avg CPC | Cost | Conv | QS |")
        lines.append("|---------|-----------|--------|----------|------|--------|-----|---------|------|------|----|")
        for row in rows:
            kw = row.ad_group_criterion.keyword
            m = row.metrics
            status = row.ad_group_criterion.status.name
            spend = micros_to_currency(m.cost_micros)
            avg_cpc = micros_to_currency(m.average_cpc)
            qs = row.ad_group_criterion.quality_info.quality_score
            qs_str = str(qs) if qs and qs > 0 else "—"
            lines.append(f"| {kw.text} | {kw.match_type.name} | {status} | {row.ad_group.name} | {m.impressions:,} | {m.clicks} | {m.ctr*100:.2f}% | £{avg_cpc:.2f} | £{spend:.2f} | {m.conversions:.0f} | {qs_str} |")
        lines.append("")
    else:
        lines.append("No keywords found.\n")
    
    return "\n".join(lines)

def section_search_terms(client):
    lines = ["## 4. Search Terms Report\n"]
    
    q = """
    SELECT search_term_view.search_term,
           campaign.name, ad_group.name,
           metrics.impressions, metrics.clicks, metrics.ctr,
           metrics.cost_micros, metrics.conversions
    FROM search_term_view
    ORDER BY metrics.clicks DESC
    LIMIT 200
    """
    rows = run_query(client, q)
    
    if rows:
        lines.append("| Search Term | Campaign | Ad Group | Impr | Clicks | CTR | Cost | Conv |")
        lines.append("|-------------|----------|----------|------|--------|-----|------|------|")
        
        flagged = []
        for row in rows:
            st = row.search_term_view.search_term
            m = row.metrics
            spend = micros_to_currency(m.cost_micros)
            lines.append(f"| {st} | {row.campaign.name} | {row.ad_group.name} | {m.impressions:,} | {m.clicks} | {m.ctr*100:.2f}% | £{spend:.2f} | {m.conversions:.0f} |")
            
            irrelevant_signals = ["free", "course", "tutorial", "what is", "meaning", "definition",
                                  "salary", "job", "career", "reddit", "wiki", "youtube",
                                  "download", "template", "example", "sample", "cheap", "diy"]
            lower_st = st.lower()
            if any(sig in lower_st for sig in irrelevant_signals):
                flagged.append((st, spend, m.clicks))
            elif spend > 5 and m.conversions == 0 and m.clicks > 2:
                flagged.append((st, spend, m.clicks))
        
        lines.append("")
        
        if flagged:
            lines.append("### ⚠️ Potentially Irrelevant / Wasted Search Terms\n")
            lines.append("Consider adding as **negative keywords**:\n")
            for term, cost, clicks in flagged:
                lines.append(f"- **\"{term}\"** — £{cost:.2f} spent, {clicks} clicks, 0 conversions")
            lines.append("")
    else:
        lines.append("No search term data available (may need more campaign runtime).\n")
    
    return "\n".join(lines)

def section_ad_copy(client):
    lines = ["## 5. Ad Copy Report\n"]
    
    q = """
    SELECT ad_group_ad.ad.responsive_search_ad.headlines,
           ad_group_ad.ad.responsive_search_ad.descriptions,
           ad_group_ad.status,
           ad_group_ad.ad.type,
           ad_group_ad.policy_summary.approval_status,
           ad_group.name, campaign.name,
           metrics.impressions, metrics.clicks, metrics.ctr,
           metrics.cost_micros
    FROM ad_group_ad
    WHERE ad_group_ad.status != 'REMOVED'
    """
    rows = run_query(client, q)
    
    if rows:
        for i, row in enumerate(rows, 1):
            ad = row.ad_group_ad
            m = row.metrics
            spend = micros_to_currency(m.cost_micros)
            
            lines.append(f"### Ad {i} — {row.ad_group.name} ({row.campaign.name})")
            lines.append(f"- **Status:** {ad.status.name}")
            lines.append(f"- **Type:** {ad.ad.type_.name}")
            try:
                lines.append(f"- **Approval:** {ad.policy_summary.approval_status.name}")
            except:
                lines.append("- **Approval:** Unknown")
            
            try:
                headlines = ad.ad.responsive_search_ad.headlines
                if headlines:
                    lines.append("- **Headlines:**")
                    for h in headlines:
                        pinned = ""
                        try:
                            if h.pinned_field and h.pinned_field.name not in ("UNSPECIFIED", "UNKNOWN"):
                                pinned = f" (pinned: {h.pinned_field.name})"
                        except:
                            pass
                        lines.append(f"  - {h.text}{pinned}")
            except:
                pass
            
            try:
                descs = ad.ad.responsive_search_ad.descriptions
                if descs:
                    lines.append("- **Descriptions:**")
                    for d in descs:
                        pinned = ""
                        try:
                            if d.pinned_field and d.pinned_field.name not in ("UNSPECIFIED", "UNKNOWN"):
                                pinned = f" (pinned: {d.pinned_field.name})"
                        except:
                            pass
                        lines.append(f"  - {d.text}{pinned}")
            except:
                pass
            
            lines.append(f"- **Performance:** {m.impressions:,} impr | {m.clicks} clicks | {m.ctr*100:.2f}% CTR | £{spend:.2f} spend")
            lines.append("")
    else:
        lines.append("No ads found.\n")
    
    return "\n".join(lines)

def section_conversions(client):
    lines = ["## 6. Conversion Tracking Status\n"]
    
    q = """
    SELECT conversion_action.name, conversion_action.type,
           conversion_action.status, conversion_action.category,
           conversion_action.counting_type
    FROM conversion_action
    """
    try:
        rows = run_query(client, q)
        if rows:
            lines.append("| Conversion Action | Type | Status | Category | Counting |")
            lines.append("|-------------------|------|--------|----------|----------|")
            for row in rows:
                ca = row.conversion_action
                lines.append(f"| {ca.name} | {ca.type_.name} | {ca.status.name} | {ca.category.name} | {ca.counting_type.name} |")
            lines.append("")
        else:
            lines.append("**⚠️ No conversion actions configured.** This means no conversions are being tracked.\n")
            lines.append("**Recommendation:** Set up conversion tracking ASAP — at minimum:\n")
            lines.append("- Contact form submissions\n- Phone calls\n- Page visits (e.g. /thank-you)\n")
    except Exception as e:
        lines.append(f"Could not retrieve conversion actions: {e}\n")
    
    return "\n".join(lines)

def section_campaign_settings(client):
    lines = ["## 7. Campaign Settings\n"]
    
    q = """
    SELECT campaign.name, campaign.id,
           campaign.bidding_strategy_type,
           campaign.network_settings.target_google_search,
           campaign.network_settings.target_search_network,
           campaign.network_settings.target_content_network
    FROM campaign
    WHERE campaign.status != 'REMOVED'
    """
    rows = run_query(client, q)
    
    for row in rows:
        c = row.campaign
        lines.append(f"### {c.name}\n")
        lines.append(f"- **Bid Strategy:** {c.bidding_strategy_type.name}")
        pass  # start/end dates not available via this query
        lines.append(f"- **Networks:**")
        lines.append(f"  - Google Search: {'✅' if c.network_settings.target_google_search else '❌'}")
        lines.append(f"  - Search Partners: {'✅' if c.network_settings.target_search_network else '❌'}")
        lines.append(f"  - Display Network: {'✅' if c.network_settings.target_content_network else '❌'}")
        lines.append("")
    
    # Location targeting
    lines.append("### Location Targeting\n")
    q_loc = """
    SELECT campaign.name,
           campaign_criterion.location.geo_target_constant,
           campaign_criterion.negative
    FROM campaign_criterion
    WHERE campaign_criterion.type = 'LOCATION'
      AND campaign.status != 'REMOVED'
    """
    try:
        loc_rows = run_query(client, q_loc)
        if loc_rows:
            for row in loc_rows:
                neg = "❌ Excluded" if row.campaign_criterion.negative else "✅ Targeted"
                geo = row.campaign_criterion.location.geo_target_constant
                lines.append(f"- {neg}: {geo}")
        else:
            lines.append("No explicit location targeting found (may be targeting all locations).")
        lines.append("")
    except Exception as e:
        lines.append(f"Could not retrieve location targeting: {e}\n")
    
    # Resolve geo target names
    lines.append("### Location Names\n")
    try:
        q_geo = """
        SELECT campaign_criterion.location.geo_target_constant,
               campaign_criterion.negative,
               campaign.name
        FROM campaign_criterion
        WHERE campaign_criterion.type = 'LOCATION'
          AND campaign.status != 'REMOVED'
        """
        geo_rows = run_query(client, q_geo)
        if geo_rows:
            geo_service = client.get_service("GeoTargetConstantService")
            for row in geo_rows:
                geo_rn = row.campaign_criterion.location.geo_target_constant
                # Try to get geo name via query
                try:
                    q_name = f"""
                    SELECT geo_target_constant.name, geo_target_constant.country_code,
                           geo_target_constant.target_type, geo_target_constant.canonical_name
                    FROM geo_target_constant
                    WHERE geo_target_constant.resource_name = '{geo_rn}'
                    """
                    name_rows = run_query(client, q_name)
                    for nr in name_rows:
                        g = nr.geo_target_constant
                        neg = "Excluded" if row.campaign_criterion.negative else "Targeted"
                        lines.append(f"- **{neg}:** {g.canonical_name} ({g.target_type}, {g.country_code})")
                except:
                    lines.append(f"- {geo_rn}")
        lines.append("")
    except Exception as e:
        lines.append(f"Could not resolve location names: {e}\n")
    
    # Device performance
    lines.append("### Device Performance\n")
    q_device = """
    SELECT segments.device, campaign.name,
           metrics.impressions, metrics.clicks, metrics.ctr,
           metrics.cost_micros, metrics.conversions
    FROM campaign
    WHERE campaign.status != 'REMOVED'
    """
    try:
        dev_rows = run_query(client, q_device)
        if dev_rows:
            device_data = {}
            for row in dev_rows:
                dev = row.segments.device.name
                m = row.metrics
                if dev not in device_data:
                    device_data[dev] = {"impr": 0, "clicks": 0, "cost": 0, "conv": 0}
                device_data[dev]["impr"] += m.impressions
                device_data[dev]["clicks"] += m.clicks
                device_data[dev]["cost"] += m.cost_micros
                device_data[dev]["conv"] += m.conversions
            
            lines.append("| Device | Impressions | Clicks | CTR | Spend | Conv |")
            lines.append("|--------|-------------|--------|-----|-------|------|")
            for dev, d in device_data.items():
                spend = micros_to_currency(d["cost"])
                ctr = safe_pct(d["clicks"], d["impr"])
                lines.append(f"| {dev} | {d['impr']:,} | {d['clicks']} | {ctr:.2f}% | £{spend:.2f} | {d['conv']:.0f} |")
            lines.append("")
    except Exception as e:
        lines.append(f"Could not retrieve device data: {e}\n")
    
    # Ad schedule
    lines.append("### Ad Schedule\n")
    q_sched = """
    SELECT campaign.name,
           campaign_criterion.ad_schedule.day_of_week,
           campaign_criterion.ad_schedule.start_hour,
           campaign_criterion.ad_schedule.end_hour,
           campaign_criterion.bid_modifier
    FROM campaign_criterion
    WHERE campaign_criterion.type = 'AD_SCHEDULE'
      AND campaign.status != 'REMOVED'
    """
    try:
        sched_rows = run_query(client, q_sched)
        if sched_rows:
            for row in sched_rows:
                s = row.campaign_criterion.ad_schedule
                bm = row.campaign_criterion.bid_modifier
                lines.append(f"- {s.day_of_week.name}: {s.start_hour}:00 - {s.end_hour}:00 (bid modifier: {bm:.0%})")
        else:
            lines.append("No ad schedule set — ads running 24/7.")
        lines.append("")
    except Exception as e:
        lines.append(f"Could not retrieve ad schedule: {e}\n")
    
    return "\n".join(lines)

def section_recommendations(client):
    lines = ["## 8. Recommendations\n"]
    
    # Try to pull Google's own recommendations
    lines.append("### Google Ads Auto-Recommendations\n")
    try:
        q = """
        SELECT recommendation.type
        FROM recommendation
        """
        rows = run_query(client, q)
        if rows:
            lines.append(f"Found {len(rows)} recommendation(s) from Google:\n")
            rec_types = {}
            for row in rows:
                rtype = row.recommendation.type_.name
                rec_types[rtype] = rec_types.get(rtype, 0) + 1
            for rtype, count in rec_types.items():
                lines.append(f"- **{rtype}**: {count} recommendation(s)")
            lines.append("")
        else:
            lines.append("No Google recommendations available.\n")
    except Exception as e:
        lines.append(f"Could not retrieve recommendations: {e}\n")
    
    lines.append("### Strategic Recommendations\n")
    lines.append("Based on the data above:\n")
    lines.append("#### Keywords")
    lines.append("- Review low-QS keywords (< 5) — improve ad relevance and landing page experience")
    lines.append("- Pause keywords with high spend but zero conversions after sufficient data (20+ clicks)")
    lines.append("- Add high-performing search terms as exact match keywords for better control")
    lines.append("- Consider adding long-tail variations of top performers")
    lines.append("")
    lines.append("#### Negative Keywords")
    lines.append("- Add all flagged irrelevant search terms (Section 4) as negative keywords immediately")
    lines.append("- Set up a shared negative keyword list for common irrelevant terms")
    lines.append("- Review weekly for new irrelevant queries")
    lines.append("")
    lines.append("#### Budget & Bidding")
    lines.append("- Review daily spend vs budget — if consistently under-spending, budget isn't the constraint")
    lines.append("- If CPC is high, consider manual CPC with enhanced CPC initially")
    lines.append("- Once conversion tracking is in place (20+ conversions), switch to Target CPA")
    lines.append("")
    lines.append("#### Conversion Tracking (CRITICAL)")
    lines.append("- If no conversions tracked: set up immediately — without it, Google can't optimize")
    lines.append("- Minimum: track contact form submissions (primary) and phone calls")
    lines.append("- Add Google Ads conversion tag to thank-you/confirmation page")
    lines.append("- Consider micro-conversions: time on site, key page visits")
    lines.append("")
    lines.append("#### Ad Copy")
    lines.append("- Ensure 3+ RSAs per ad group for adequate testing")
    lines.append("- Pin key USPs to headline position 1 for consistency")
    lines.append("- Test different CTAs: 'Get a Free Consultation' vs 'Book a Call' vs 'See How AI Can Help'")
    lines.append("")
    lines.append("#### Extensions")
    lines.append("- Add sitelink extensions (link to services, case studies, about, contact)")
    lines.append("- Add callout extensions (Free Consultation, NI Based, etc.)")
    lines.append("- Add structured snippets (Services: AI Strategy, Automation, etc.)")
    lines.append("- Add call extension with business phone")
    lines.append("")
    lines.append("#### Structure")
    lines.append("- Consider splitting into tighter ad groups by service type")
    lines.append("- Use SKAGs for top 3-5 converting keywords")
    lines.append("")
    lines.append("#### Device & Location")
    lines.append("- Review device performance — add bid adjustments for underperforming devices")
    lines.append("- Verify location targeting covers actual service area")
    lines.append("- If serving UK-wide, consider location bid adjustments for NI/Ireland")
    lines.append("")
    
    return "\n".join(lines)

def main():
    print("Connecting to Google Ads API (no manager ID)...")
    client = get_client()
    
    report_sections = []
    report_sections.append(f"# Google Ads Deep Dive Report — Blue Canvas\n")
    report_sections.append(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    report_sections.append(f"**Account:** 801-851-4760\n")
    report_sections.append("---\n")
    
    sections = [
        ("Campaign Overview", section_campaign_overview),
        ("Ad Groups", section_ad_groups),
        ("Keywords", section_keywords),
        ("Search Terms", section_search_terms),
        ("Ad Copy", section_ad_copy),
        ("Conversions", section_conversions),
        ("Campaign Settings", section_campaign_settings),
        ("Recommendations", section_recommendations),
    ]
    
    for name, func in sections:
        print(f"Pulling {name}...")
        try:
            result = func(client)
            report_sections.append(result)
            report_sections.append("---\n")
        except GoogleAdsException as ex:
            error_msg = f"## {name}\n\n**Error:** "
            for error in ex.failure.errors:
                error_msg += f"{error.message} "
            report_sections.append(error_msg + "\n---\n")
            print(f"  ❌ Error in {name}: {[e.message for e in ex.failure.errors]}")
        except Exception as e:
            report_sections.append(f"## {name}\n\n**Error:** {str(e)}\n\n---\n")
            print(f"  ❌ Error in {name}: {e}")
    
    # Write report
    report = "\n".join(report_sections)
    os.makedirs("/Users/philsagent/.openclaw/workspace/reports", exist_ok=True)
    output_path = "/Users/philsagent/.openclaw/workspace/reports/google-ads-deep-dive-2026-03-09.md"
    with open(output_path, "w") as f:
        f.write(report)
    
    print(f"\n✅ Report saved to {output_path}")
    print(f"Report length: {len(report):,} characters")

if __name__ == "__main__":
    main()
