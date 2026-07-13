#!/usr/bin/env python3
from __future__ import annotations

import datetime as dt
import html
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parent
DATA = json.loads((OUT / "HIP_Week_6_SEO_Update_2026-06-01-data.json").read_text())


def load_publish_log() -> list[dict]:
    rows: list[dict] = []
    for path in sorted((ROOT / "blog-drafts").glob("ahrefs-blast-2026-*/publish-result.json")):
        data = json.loads(path.read_text())
        date = data.get("date", "")[:10]
        if date < "2026-05-16":
            continue
        rows.append(
            {
                "date": date,
                "count": data.get("count", len(data.get("results", []))),
                "batch": path.parent.name,
                "links": [
                    {
                        "title": item.get("title", item.get("slug", "")),
                        "slug": item.get("slug", ""),
                        "url": item.get("link", ""),
                        "keyword": item.get("target_keyword", ""),
                    }
                    for item in data.get("results", [])
                ],
            }
        )
    return rows


def pct(value: float) -> str:
    return f"{value * 100:.1f}%"


def num(value: int | float) -> str:
    if isinstance(value, float) and not value.is_integer():
        return f"{value:,.1f}"
    return f"{int(value):,}"


def delta(now: int | float, before: int | float) -> str:
    diff = now - before
    sign = "+" if diff >= 0 else ""
    return f"{sign}{num(diff)}"


def esc(value: object) -> str:
    return html.escape(str(value))


def render() -> str:
    w5 = DATA["week5"]
    w6 = DATA["week6"]
    ah = w6["ahrefs"]
    gsc = w6["gsc"]
    batches = load_publish_log()
    all_links = [link for batch in batches for link in batch["links"]]
    generated_label = dt.date.fromisoformat(DATA["generated"]).strftime("%-d %B %Y")

    batch_rows = "\n".join(
        f"<tr><td>{esc(batch['date'])}</td><td><strong>{batch['count']}</strong></td><td>{esc(batch['batch'])}</td><td>{', '.join(esc(link['slug']) for link in batch['links'][:3])}{'...' if len(batch['links']) > 3 else ''}</td></tr>"
        for batch in batches
    )
    keyword_rows = "\n".join(
        f"<tr><td><strong>{esc(row['keyword'])}</strong></td><td>{row['volume']}</td><td>{row['kd']}</td><td>{row['position']}</td><td>{row['traffic']}</td><td><span class='status-green'>{esc(row['status'])}</span></td><td><a href='{esc(row['url'])}'>{esc(row['url'].replace('https://hippsychology.com/', '/'))}</a></td></tr>"
        for row in w6["ahrefs_keywords"]
    )
    highlight_links = "\n".join(
        f"<li><strong>{esc(link['title'])}</strong><br><a href='{esc(link['url'])}'>{esc(link['url'])}</a></li>"
        for link in all_links[-18:]
    )

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HIP Psychology — Week 6 SEO Update</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
* {{ margin:0; padding:0; box-sizing:border-box; }}
body {{ font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif; line-height:1.55; color:#172033; background:#f6f9fb; font-size:14px; }}
.container {{ max-width:900px; margin:0 auto; padding:36px 22px; }}
.header {{ background:linear-gradient(135deg,#012547 0%, #035969 58%, #169f8e 100%); color:white; padding:42px 34px; border-radius:18px; text-align:center; margin-bottom:28px; position:relative; overflow:hidden; }}
.header:before {{ content:''; position:absolute; width:360px; height:360px; right:-120px; top:-150px; background:rgba(255,255,255,.10); border-radius:999px; }}
.logo-row {{ display:flex; justify-content:center; align-items:center; gap:18px; flex-wrap:wrap; margin-bottom:20px; position:relative; z-index:1; }}
.logo-card {{ background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); padding:10px 18px; border-radius:12px; font-weight:800; }}
.logo-img {{ max-height:46px; background:white; border-radius:10px; padding:7px 10px; }}
.bc {{ color:#ff6b35; }}
.badge {{ display:inline-block; background:#f5c542; color:#012547; font-weight:800; font-size:12px; padding:7px 15px; border-radius:999px; margin-bottom:14px; position:relative; z-index:1; }}
.header h1 {{ font-size:34px; line-height:1.1; letter-spacing:-.4px; margin-bottom:8px; position:relative; z-index:1; }}
.header p {{ color:#d9ffff; font-size:16px; position:relative; z-index:1; }}
.section {{ background:white; border:1px solid #e3edf3; border-radius:16px; padding:28px; margin:22px 0; box-shadow:0 8px 24px rgba(1,37,71,.06); }}
.section-title {{ font-size:22px; font-weight:800; color:#012547; text-transform:uppercase; letter-spacing:1.6px; text-align:center; margin-bottom:8px; }}
.section-subtitle {{ text-align:center; color:#607385; font-size:16px; margin-bottom:24px; }}
.metrics-grid {{ display:grid; grid-template-columns:repeat(auto-fit,minmax(185px,1fr)); gap:16px; margin:22px 0; }}
.metric-card {{ background:#f8fbfd; border:1px solid #dbeaf0; border-left:5px solid #169f8e; border-radius:12px; padding:18px; text-align:center; }}
.metric-card h3 {{ font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#607385; margin-bottom:8px; }}
.metric-card .value {{ font-size:30px; font-weight:800; color:#012547; }}
.metric-card .label {{ font-size:12px; color:#667; margin-top:3px; }}
.good {{ color:#12876f!important; }} .warn {{ color:#c77600!important; }} .flat {{ color:#56677a!important; }}
table {{ width:100%; border-collapse:collapse; margin:20px 0; background:white; border-radius:12px; overflow:hidden; box-shadow:0 3px 16px rgba(1,37,71,.06); }}
th {{ background:#012547; color:white; padding:14px 15px; text-align:left; font-size:12px; text-transform:uppercase; letter-spacing:.5px; }}
td {{ padding:13px 15px; border-bottom:1px solid #edf2f5; font-size:13px; vertical-align:top; }}
tr:last-child td {{ border-bottom:none; }}
a {{ color:#035969; text-decoration:none; word-break:break-word; }}
.arrow {{ color:#169f8e; font-weight:800; font-size:18px; }}
.status-green,.status-pending,.status-blue,.status-warn {{ display:inline-block; padding:4px 8px; border-radius:5px; font-size:11px; font-weight:800; }}
.status-green {{ background:#dff6ef; color:#0f6f5c; }} .status-pending {{ background:#fff4d9; color:#8a6100; }} .status-blue {{ background:#e6f4ff; color:#035969; }} .status-warn {{ background:#fff0d6; color:#925700; }}
.highlight {{ background:#e7f7f5; border-left:5px solid #169f8e; padding:18px; border-radius:0 12px 12px 0; margin:20px 0; color:#173447; }}
.highlight-warn {{ background:#fff8e5; border-left:5px solid #f5c542; padding:18px; border-radius:0 12px 12px 0; margin:20px 0; color:#4d3c0a; }}
.timeline-grid {{ display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:18px; }}
.timeline-card {{ background:#f8fbfd; border:1px solid #dbeaf0; border-left:5px solid #169f8e; border-radius:12px; padding:18px; }}
.timeline-card h4 {{ color:#012547; font-size:16px; margin-bottom:10px; }}
ul {{ margin-left:18px; }} li {{ margin:7px 0; color:#46596a; }}
.two-col {{ columns:2; column-gap:30px; }}
.footer {{ text-align:center; margin-top:34px; padding:24px; border-top:3px solid #ff6b35; color:#657687; }}
.footer strong {{ color:#1b1464; }}
.small {{ font-size:12px; color:#718293; }}
@media print {{ body {{ background:white; }} .container {{ padding:0; }} .section {{ box-shadow:none; break-inside:avoid; }} a {{ color:#035969; }} }}
@media (max-width:700px) {{ .two-col {{ columns:1; }} .header h1 {{ font-size:28px; }} }}
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <div class="logo-row">
      <img class="logo-img" src="{esc(DATA['logo_url'])}" alt="HIP Psychology logo">
      <div class="logo-card"><span class="bc">Blue Canvas</span> AI</div>
    </div>
    <div class="badge">WEEK 6 SEO UPDATE</div>
    <h1>HIP Psychology SEO Progress</h1>
    <p>Week 6 movement report for hippsychology.com • Prepared for Cormac Venney • {generated_label}</p>
  </div>

  <div class="section">
    <div class="section-title">Executive Summary</div>
    <div class="section-subtitle">The site is now moving from content build-out into early ranking discovery.</div>
    <div class="metrics-grid">
      <div class="metric-card"><h3>Live Site Size</h3><div class="value good">{num(w6['site_size'])}</div><div class="label">{w6['wp_posts_total']} posts + {w6['wp_pages_total']} pages via WP API</div></div>
      <div class="metric-card"><h3>New Posts Since Week 5</h3><div class="value good">{w6['new_posts_since_week5']}</div><div class="label">Fresh school wellbeing posts</div></div>
      <div class="metric-card"><h3>Total New Posts</h3><div class="value good">{w6['new_posts_since_2026_04_10']}</div><div class="label">Since 10 Apr baseline</div></div>
      <div class="metric-card"><h3>GSC Impressions</h3><div class="value good">{num(gsc['last30']['impressions'])}</div><div class="label">1-30 May 2026</div></div>
      <div class="metric-card"><h3>Ahrefs Ref. Domains</h3><div class="value good">{num(ah['live_refdomains'])}</div><div class="label">{delta(ah['live_refdomains'], w5['ahrefs']['live_refdomains'])} vs Week 5</div></div>
      <div class="metric-card"><h3>Ahrefs Backlinks</h3><div class="value good">{num(ah['live_backlinks'])}</div><div class="label">{delta(ah['live_backlinks'], w5['ahrefs']['live_backlinks'])} vs Week 5</div></div>
    </div>
    <div class="highlight"><strong>Read this in plain English:</strong> HIP now has a much bigger search footprint than it did at Week 5. We added <strong>{w6['new_posts_since_week5']} more posts</strong>, took the live post count from <strong>{w5['wp_posts_total']} to {w6['wp_posts_total']}</strong>, and Ahrefs is now seeing early non-brand rankings for <strong>pupil wellbeing</strong> and <strong>define pastoral support</strong>. Search Console is also showing wider discovery, with <strong>{num(gsc['last30']['impressions'])} impressions</strong> across May.</div>
  </div>

  <div class="section">
    <div class="section-title">Movement Since Week 5</div>
    <table>
      <thead><tr><th>Metric</th><th>Week 5: 15 May</th><th></th><th>Week 6: 1 Jun</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td><strong>Live site size</strong></td><td>{w5['site_size']} URLs</td><td class="arrow">→</td><td>{w6['site_size']} URLs</td><td><span class="status-green">+{w6['site_size'] - w5['site_size']}</span></td></tr>
        <tr><td><strong>WordPress posts</strong></td><td>{w5['wp_posts_total']}</td><td class="arrow">→</td><td>{w6['wp_posts_total']}</td><td><span class="status-green">+{w6['wp_posts_total'] - w5['wp_posts_total']}</span></td></tr>
        <tr><td><strong>Native post sitemap URLs</strong></td><td>{w5['native_post_sitemap_locs']}</td><td class="arrow">→</td><td>{w6['native_post_sitemap_locs']}</td><td><span class="status-green">Sitemap-ready</span></td></tr>
        <tr><td><strong>Ahrefs organic keywords</strong></td><td>{w5['ahrefs']['org_keywords']}</td><td class="arrow">→</td><td>{ah['org_keywords']}</td><td><span class="status-green">+{ah['org_keywords'] - w5['ahrefs']['org_keywords']}</span></td></tr>
        <tr><td><strong>Ahrefs organic traffic estimate</strong></td><td>{w5['ahrefs']['org_traffic']}</td><td class="arrow">→</td><td>{ah['org_traffic']}</td><td><span class="status-green">+{ah['org_traffic'] - w5['ahrefs']['org_traffic']}</span></td></tr>
        <tr><td><strong>Ahrefs referring domains</strong></td><td>{w5['ahrefs']['live_refdomains']}</td><td class="arrow">→</td><td>{ah['live_refdomains']}</td><td><span class="status-green">{delta(ah['live_refdomains'], w5['ahrefs']['live_refdomains'])}</span></td></tr>
        <tr><td><strong>Ahrefs backlinks</strong></td><td>{w5['ahrefs']['live_backlinks']}</td><td class="arrow">→</td><td>{ah['live_backlinks']}</td><td><span class="status-green">{delta(ah['live_backlinks'], w5['ahrefs']['live_backlinks'])}</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="section">
    <div class="section-title">Live Ahrefs SEO Data</div>
    <div class="section-subtitle">Ahrefs is starting to show the early effect of the new topical footprint.</div>
    <div class="metrics-grid">
      <div class="metric-card"><h3>Domain Rating</h3><div class="value warn">{ah['dr']}</div><div class="label">{ah['dr_change_last_month']} last month</div></div>
      <div class="metric-card"><h3>Organic Keywords</h3><div class="value good">{ah['org_keywords']}</div><div class="label">+{ah['org_keywords_change_last_month']} last month</div></div>
      <div class="metric-card"><h3>Organic Traffic</h3><div class="value good">{ah['org_traffic']}</div><div class="label">+{ah['org_traffic_change_last_month']} last month</div></div>
      <div class="metric-card"><h3>Organic Pages</h3><div class="value good">{ah['organic_pages']}</div><div class="label">pages with Ahrefs visibility</div></div>
      <div class="metric-card"><h3>Crawled Pages</h3><div class="value good">{ah['crawled_pages']}</div><div class="label">{ah['crawled_200']} return 200 OK</div></div>
      <div class="metric-card"><h3>5XX Errors</h3><div class="value good">{ah['crawled_5xx']}</div><div class="label">No server errors found</div></div>
    </div>
    <table>
      <thead><tr><th>Keyword</th><th>Volume</th><th>KD</th><th>Position</th><th>Traffic</th><th>Status</th><th>Ranking URL</th></tr></thead>
      <tbody>{keyword_rows}</tbody>
    </table>
    <div class="highlight-warn"><strong>Note:</strong> Ahrefs API access was available but the account had zero API units left at pull time, so live Ahrefs data was extracted from the logged-in Site Explorer UI instead of the API.</div>
  </div>

  <div class="section">
    <div class="section-title">Search Console Signal</div>
    <div class="section-subtitle">First-party Google data shows much wider discovery across May.</div>
    <table>
      <thead><tr><th>Period</th><th>Clicks</th><th>Impressions</th><th>CTR</th><th>Avg Position</th><th>What it means</th></tr></thead>
      <tbody>
        <tr><td>{gsc['week5_period']['start']} to {gsc['week5_period']['end']}</td><td>{gsc['week5_period']['clicks']}</td><td>{num(gsc['week5_period']['impressions'])}</td><td>{pct(gsc['week5_period']['ctr'])}</td><td>{gsc['week5_period']['position']:.1f}</td><td>Week 5 comparison window.</td></tr>
        <tr><td>{gsc['last30']['start']} to {gsc['last30']['end']}</td><td><strong>{gsc['last30']['clicks']}</strong></td><td><strong>{num(gsc['last30']['impressions'])}</strong></td><td>{pct(gsc['last30']['ctr'])}</td><td>{gsc['last30']['position']:.1f}</td><td>Impressions are up strongly; clicks are still mostly brand-led while new pages mature.</td></tr>
        <tr><td>{gsc['last7']['start']} to {gsc['last7']['end']}</td><td>{gsc['last7']['clicks']}</td><td>{num(gsc['last7']['impressions'])}</td><td>{pct(gsc['last7']['ctr'])}</td><td>{gsc['last7']['position']:.1f}</td><td>Recent weekly snapshot after the largest content pushes.</td></tr>
      </tbody>
    </table>
    <div class="highlight"><strong>Interpretation:</strong> This is the normal early SEO pattern. Google is testing many more pages, so impressions rise before clicks fully follow. The practical job now is to let the new pages index, improve internal links, and tighten titles/metas on pages that show impressions but weak CTR.</div>
  </div>

  <div class="section">
    <div class="section-title">What We Delivered Since Week 5</div>
    <div class="section-subtitle">{w6['new_posts_since_week5']} new posts across school wellbeing, pastoral care, anxiety, staff support and safeguarding-adjacent topics.</div>
    <div class="timeline-grid">
      <div class="timeline-card"><h4>Content Production</h4><ul><li>Published {w6['new_posts_since_week5']} additional WordPress posts after the Week 5 report.</li><li>Expanded the site from {w5['wp_posts_total']} posts to {w6['wp_posts_total']} posts.</li><li>Strengthened clusters around pupil wellbeing, pastoral support, anxiety, emotional regulation, school refusal, trauma-informed practice and nurture provision.</li></ul></div>
      <div class="timeline-card"><h4>Technical QA</h4><ul><li>Each batch was checked for live HTTP 200 status.</li><li>Recent posts include Article and FAQPage JSON-LD.</li><li>QA checked one-H1 structure, H2 depth, contact CTA, latest feed inclusion and WordPress post sitemap inclusion.</li></ul></div>
      <div class="timeline-card"><h4>Search Readiness</h4><ul><li>All {w6['native_post_sitemap_locs']} post URLs appear in the native WordPress post sitemap.</li><li>Search Console sitemap submissions were completed on 25 May.</li><li>New non-brand Ahrefs rankings now appear for pupil wellbeing and pastoral support intent.</li></ul></div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Publishing Log Since Week 5</div>
    <table><thead><tr><th>Date</th><th>Posts Added</th><th>Batch</th><th>Sample Slugs</th></tr></thead><tbody>{batch_rows}</tbody></table>
  </div>

  <div class="section">
    <div class="section-title">Recent Content Highlights</div>
    <div class="two-col"><ul>{highlight_links}</ul></div>
  </div>

  <div class="section">
    <div class="section-title">Technical Notes</div>
    <table>
      <thead><tr><th>Check</th><th>Current Status</th><th>Action</th></tr></thead>
      <tbody>
        <tr><td>WordPress post sitemap</td><td><span class="status-green">{w6['native_post_sitemap_locs']} post URLs live</span></td><td>Use native WordPress sitemap as source of truth.</td></tr>
        <tr><td>Legacy sitemap</td><td><span class="status-warn">{w6['legacy_sitemap_locs']} URLs only</span></td><td>Replace or de-prioritise stale /sitemap.xml route.</td></tr>
        <tr><td>Ahrefs crawl</td><td><span class="status-green">{ah['crawled_200']} OK, {ah['crawled_5xx']} 5XX</span></td><td>Review the one 404 and one other 4XX when convenient.</td></tr>
        <tr><td>Backlink profile</td><td><span class="status-green">{ah['live_refdomains']} live referring domains</span></td><td>Next win is quality/authority, not just more posts.</td></tr>
      </tbody>
    </table>
  </div>

  <div class="section">
    <div class="section-title">Next 30 Days</div>
    <div class="timeline-grid">
      <div class="timeline-card"><h4>1. Indexation & CTR</h4><ul><li>Monitor GSC impressions for the new {w6['new_posts_since_week5']} posts.</li><li>Find pages with impressions but low CTR.</li><li>Rewrite titles/metas for the highest-impression opportunities.</li></ul></div>
      <div class="timeline-card"><h4>2. Internal Links</h4><ul><li>Link from service/workshop pages into the strongest educational articles.</li><li>Add related-article blocks between cluster pages.</li><li>Push high-intent readers toward /contact-us/ and school workshop pages.</li></ul></div>
      <div class="timeline-card"><h4>3. Authority</h4><ul><li>Prioritise quality citations and school/education-relevant links.</li><li>Use the strongest articles as outreach assets.</li><li>Do not over-publish before Google has had time to process this batch.</li></ul></div>
    </div>
  </div>

  <div class="footer">
    <p><strong>Prepared by Blue Canvas AI</strong> • bluecanvas.ai</p>
    <p>Data sources: Ahrefs Site Explorer UI, Google Search Console API, hippsychology.com WordPress REST API, live WordPress sitemaps, and Blue Canvas delivery logs. Report generated {generated_label}.</p>
  </div>
</div>
</body>
</html>"""


def main() -> int:
    html_text = render()
    html_path = OUT / "HIP_Week_6_SEO_Update_2026-06-01.html"
    html_path.write_text(html_text)
    print(html_path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
