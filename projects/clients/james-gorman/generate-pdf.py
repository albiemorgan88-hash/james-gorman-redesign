#!/usr/bin/env python3
"""Generate Blue Canvas branded SEO Baseline Report PDF for James Gorman Property."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm, cm
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable, KeepTogether
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# Brand colours
BLUE = HexColor('#2B4DAF')
ORANGE = HexColor('#FF4520')
DARK = HexColor('#1a1a2e')
LIGHT_GREY = HexColor('#f8f9fa')
MED_GREY = HexColor('#6c757d')
WHITE = white
TABLE_HEADER_BG = HexColor('#2B4DAF')
TABLE_ALT_BG = HexColor('#f0f4ff')
RED_BG = HexColor('#fff0f0')
GREEN_BG = HexColor('#f0fff0')
YELLOW_BG = HexColor('#fffff0')

OUTPUT = os.path.expanduser('~/.openclaw/workspace/projects/clients/james-gorman/James-Gorman-Property-SEO-Baseline-Report.pdf')

def build_pdf():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=A4,
        topMargin=20*mm,
        bottomMargin=20*mm,
        leftMargin=20*mm,
        rightMargin=20*mm,
    )
    
    styles = getSampleStyleSheet()
    
    # Custom styles
    styles.add(ParagraphStyle(
        'BCTitle', parent=styles['Title'],
        fontSize=28, leading=34, textColor=DARK,
        spaceAfter=6*mm, alignment=TA_LEFT,
        fontName='Helvetica-Bold'
    ))
    styles.add(ParagraphStyle(
        'BCHeading1', parent=styles['Heading1'],
        fontSize=18, leading=22, textColor=BLUE,
        spaceBefore=8*mm, spaceAfter=4*mm,
        fontName='Helvetica-Bold',
        borderWidth=0, borderPadding=0,
    ))
    styles.add(ParagraphStyle(
        'BCHeading2', parent=styles['Heading2'],
        fontSize=14, leading=18, textColor=DARK,
        spaceBefore=5*mm, spaceAfter=3*mm,
        fontName='Helvetica-Bold',
    ))
    styles.add(ParagraphStyle(
        'BCHeading3', parent=styles['Heading3'],
        fontSize=11, leading=14, textColor=BLUE,
        spaceBefore=3*mm, spaceAfter=2*mm,
        fontName='Helvetica-Bold',
    ))
    styles.add(ParagraphStyle(
        'BCBody', parent=styles['Normal'],
        fontSize=10, leading=14, textColor=DARK,
        spaceAfter=2*mm, fontName='Helvetica',
    ))
    styles.add(ParagraphStyle(
        'BCBodyBold', parent=styles['Normal'],
        fontSize=10, leading=14, textColor=DARK,
        spaceAfter=2*mm, fontName='Helvetica-Bold',
    ))
    styles.add(ParagraphStyle(
        'BCBullet', parent=styles['Normal'],
        fontSize=10, leading=14, textColor=DARK,
        leftIndent=15, spaceAfter=1*mm, fontName='Helvetica',
        bulletIndent=5, bulletFontSize=10,
    ))
    styles.add(ParagraphStyle(
        'BCSmall', parent=styles['Normal'],
        fontSize=8, leading=10, textColor=MED_GREY,
        fontName='Helvetica',
    ))
    styles.add(ParagraphStyle(
        'BCFooter', parent=styles['Normal'],
        fontSize=8, leading=10, textColor=MED_GREY,
        fontName='Helvetica', alignment=TA_CENTER,
    ))
    
    elements = []
    
    # =============================================
    # COVER PAGE
    # =============================================
    elements.append(Spacer(1, 30*mm))
    
    # Logo header - styled text
    logo_data = [
        [Paragraph('<font color="#2B4DAF" size="32"><b>BLUE</b></font> <font color="#FF4520" size="32"><b>CANVAS</b></font>', styles['Normal'])]
    ]
    logo_table = Table(logo_data, colWidths=[170*mm])
    logo_table.setStyle(TableStyle([
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    elements.append(logo_table)
    
    # Orange accent line
    elements.append(Spacer(1, 3*mm))
    elements.append(HRFlowable(width='40%', thickness=3, color=ORANGE, spaceAfter=15*mm))
    
    elements.append(Spacer(1, 15*mm))
    
    elements.append(Paragraph('SEO Baseline Report', ParagraphStyle(
        'CoverTitle', parent=styles['Title'],
        fontSize=36, leading=42, textColor=DARK,
        fontName='Helvetica-Bold', alignment=TA_LEFT,
    )))
    
    elements.append(Spacer(1, 5*mm))
    
    elements.append(Paragraph('James Gorman Property', ParagraphStyle(
        'CoverSubtitle', parent=styles['Title'],
        fontSize=22, leading=28, textColor=BLUE,
        fontName='Helvetica-Bold', alignment=TA_LEFT,
    )))
    
    elements.append(Paragraph('jamesgormanproperty.com', ParagraphStyle(
        'CoverDomain', parent=styles['Normal'],
        fontSize=14, leading=18, textColor=MED_GREY,
        fontName='Helvetica', alignment=TA_LEFT,
    )))
    
    elements.append(Spacer(1, 30*mm))
    
    # Cover info box
    cover_info = [
        ['Prepared by', 'Phil Patterson, Blue Canvas'],
        ['Date', '12 March 2026'],
        ['Contact', 'contact@bluecanvas.ai'],
        ['Website', 'bluecanvas.ai'],
    ]
    cover_table = Table(cover_info, colWidths=[40*mm, 120*mm])
    cover_table.setStyle(TableStyle([
        ('TEXTCOLOR', (0,0), (0,-1), MED_GREY),
        ('TEXTCOLOR', (1,0), (1,-1), DARK),
        ('FONTNAME', (0,0), (0,-1), 'Helvetica'),
        ('FONTNAME', (1,0), (1,-1), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('LINEBELOW', (0,0), (-1,-2), 0.5, HexColor('#e0e0e0')),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    elements.append(cover_table)
    
    elements.append(PageBreak())
    
    # =============================================
    # HEADER HELPER
    # =============================================
    def add_header():
        """Add a small branded header to each section page."""
        header_data = [
            [
                Paragraph('<font color="#2B4DAF" size="10"><b>BLUE</b></font> <font color="#FF4520" size="10"><b>CANVAS</b></font>', styles['Normal']),
                Paragraph('<font color="#999999" size="8">SEO Baseline Report — James Gorman Property</font>', ParagraphStyle('rh', parent=styles['Normal'], alignment=TA_RIGHT)),
            ]
        ]
        ht = Table(header_data, colWidths=[60*mm, 110*mm])
        ht.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('LINEBELOW', (0,0), (-1,-1), 1, ORANGE),
            ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ]))
        elements.append(ht)
        elements.append(Spacer(1, 6*mm))
    
    def make_table(headers, rows, col_widths=None):
        """Create a branded table."""
        data = [headers] + rows
        if not col_widths:
            col_widths = [170*mm / len(headers)] * len(headers)
        t = Table(data, colWidths=col_widths, repeatRows=1)
        style_cmds = [
            ('BACKGROUND', (0,0), (-1,0), TABLE_HEADER_BG),
            ('TEXTCOLOR', (0,0), (-1,0), WHITE),
            ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
            ('FONTSIZE', (0,0), (-1,0), 9),
            ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
            ('FONTSIZE', (0,1), (-1,-1), 9),
            ('BOTTOMPADDING', (0,0), (-1,-1), 6),
            ('TOPPADDING', (0,0), (-1,-1), 6),
            ('LEFTPADDING', (0,0), (-1,-1), 6),
            ('RIGHTPADDING', (0,0), (-1,-1), 6),
            ('GRID', (0,0), (-1,-1), 0.5, HexColor('#dee2e6')),
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('ROWBACKGROUNDS', (0,1), (-1,-1), [WHITE, TABLE_ALT_BG]),
        ]
        t.setStyle(TableStyle(style_cmds))
        return t
    
    def status_icon(status):
        if status == 'red':
            return '<font color="#dc3545">●</font>'
        elif status == 'green':
            return '<font color="#28a745">●</font>'
        elif status == 'yellow':
            return '<font color="#ffc107">●</font>'
        return ''
    
    # =============================================
    # 1. EXECUTIVE SUMMARY
    # =============================================
    add_header()
    elements.append(Paragraph('1. Executive Summary', styles['BCHeading1']))
    
    elements.append(Paragraph(
        'James Gorman Property has a solid local brand presence in Derry with excellent Trustpilot reviews and '
        'strong social media engagement. However, the website has <b>severe technical SEO issues</b> that are '
        'preventing it from reaching its organic search potential.',
        styles['BCBody']
    ))
    
    elements.append(Spacer(1, 3*mm))
    elements.append(Paragraph('Critical Findings', styles['BCHeading2']))
    
    findings = [
        '<b>All page URLs use generic "blank-X" slugs</b> — e.g., /blank-3 for Lettings. This is the single biggest SEO issue.',
        '<b>Mobile performance score of 36/100</b> with a 44.2s Largest Contentful Paint.',
        '<b>No Google Business Profile detected</b> — a massive gap for a local estate agent.',
        '<b>Zero citation/directory presence</b> — not on Yell, Thomson, Yelp, or FreeIndex.',
        '<b>No blog or content strategy</b> — zero long-tail keyword capture.',
        '<b>No OG image set</b> — social shares display no preview image.',
        '<b>Footer social links point to Wix defaults</b> — Instagram, Facebook, etc. link to Wix, not JGP.',
    ]
    for f in findings:
        elements.append(Paragraph(f'• {f}', styles['BCBullet']))
    
    elements.append(Spacer(1, 4*mm))
    
    # Opportunity box
    opp_data = [[Paragraph(
        '<b>The opportunity is significant.</b> Competitors are established but most have basic, dated websites. '
        'With proper technical fixes, a Google Business Profile, citation building, and targeted content, '
        'James Gorman Property can dominate local search within 3–6 months.',
        ParagraphStyle('opp', parent=styles['BCBody'], textColor=BLUE)
    )]]
    opp_table = Table(opp_data, colWidths=[165*mm])
    opp_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), HexColor('#eef2ff')),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('ROUNDEDCORNERS', [4,4,4,4]),
        ('BOX', (0,0), (-1,-1), 1, BLUE),
    ]))
    elements.append(opp_table)
    
    elements.append(PageBreak())
    
    # =============================================
    # 2. CURRENT PERFORMANCE
    # =============================================
    add_header()
    elements.append(Paragraph('2. Current Performance', styles['BCHeading1']))
    
    elements.append(Paragraph('Domain Overview', styles['BCHeading2']))
    
    domain_rows = [
        ['Platform', 'Wix'],
        ['SSL Certificate', 'Let\'s Encrypt (expires 25 May 2026)'],
        ['HTTPS', 'Active with HSTS'],
        ['www Redirect', 'Non-www redirects to www'],
        ['HTTP to HTTPS', 'Redirect in place'],
        ['Indexed Pages', '~10 pages indexed'],
        ['Schema Markup', 'WebSite only (minimal)'],
        ['Trustpilot', 'Multiple 5-star reviews'],
    ]
    elements.append(make_table(['Metric', 'Value'], domain_rows, [50*mm, 120*mm]))
    
    elements.append(Spacer(1, 4*mm))
    elements.append(Paragraph('Ahrefs Data (Preliminary)', styles['BCHeading2']))
    elements.append(Paragraph(
        '<i>Note: Full Ahrefs data will be pulled via dashboard once site access is granted. '
        'API returned "Insufficient plan" and free tools blocked by CAPTCHA.</i>',
        styles['BCSmall']
    ))
    
    ahrefs_rows = [
        ['Domain Rating (DR)', '~5–10 (new domain, minimal backlinks)'],
        ['Referring Domains', '<10 estimated'],
        ['Organic Keywords', 'Minimal — primarily branded terms'],
        ['Organic Traffic', '<50 visits/month estimated'],
        ['Known Backlinks', 'PropertyPal, PropertyNews, HomesNI, Trustpilot, social profiles'],
    ]
    elements.append(make_table(['Metric', 'Value'], ahrefs_rows, [50*mm, 120*mm]))
    
    elements.append(Spacer(1, 4*mm))
    elements.append(Paragraph('PageSpeed Insights', styles['BCHeading2']))
    
    psi_rows = [
        ['Performance', '36 (Poor)', '85 (Good)'],
        ['Accessibility', '100 (Good)', '100 (Good)'],
        ['Best Practices', '100 (Good)', '96 (Good)'],
        ['SEO', '100 (Good)', '100 (Good)'],
    ]
    elements.append(make_table(['Category', 'Mobile', 'Desktop'], psi_rows, [60*mm, 55*mm, 55*mm]))
    
    elements.append(Spacer(1, 3*mm))
    elements.append(Paragraph('Core Web Vitals — Mobile', styles['BCHeading3']))
    
    cwv_rows = [
        ['Largest Contentful Paint (LCP)', '44.2s', 'CRITICAL'],
        ['First Contentful Paint (FCP)', '3.6s', 'POOR'],
        ['Total Blocking Time (TBT)', '1,250ms', 'POOR'],
        ['Cumulative Layout Shift (CLS)', '0.003', 'GOOD'],
        ['Speed Index', '7.7s', 'POOR'],
        ['Time to Interactive', '44.2s', 'CRITICAL'],
    ]
    elements.append(make_table(['Metric', 'Value', 'Rating'], cwv_rows, [70*mm, 45*mm, 55*mm]))
    
    elements.append(Spacer(1, 3*mm))
    elements.append(Paragraph('Core Web Vitals — Desktop', styles['BCHeading3']))
    
    cwv_d_rows = [
        ['LCP', '1.2s', 'GOOD'],
        ['FCP', '0.9s', 'GOOD'],
        ['TBT', '250ms', 'NEEDS WORK'],
        ['CLS', '0.001', 'GOOD'],
        ['Speed Index', '1.4s', 'GOOD'],
    ]
    elements.append(make_table(['Metric', 'Value', 'Rating'], cwv_d_rows, [70*mm, 45*mm, 55*mm]))
    
    elements.append(Spacer(1, 3*mm))
    elements.append(Paragraph('Key Performance Issues', styles['BCHeading3']))
    issues = [
        'JavaScript execution time: 2.8s (mobile) / 1.4s (desktop)',
        'Multiple page redirects: Adding 780ms on mobile',
        'Main thread work: 4.9s on mobile',
        'Document request latency: 150ms+ on mobile',
        'LCP element not discoverable by browser preloader',
    ]
    for i in issues:
        elements.append(Paragraph(f'• {i}', styles['BCBullet']))
    
    elements.append(PageBreak())
    
    # =============================================
    # 3. TECHNICAL AUDIT
    # =============================================
    add_header()
    elements.append(Paragraph('3. Technical Audit Findings', styles['BCHeading1']))
    
    # Critical issues
    elements.append(Paragraph('<font color="#dc3545">■</font> Critical Issues', styles['BCHeading2']))
    
    elements.append(Paragraph('URL Structure — All Pages Use "blank-X" Slugs', styles['BCHeading3']))
    elements.append(Paragraph(
        'This is the most damaging technical issue. Every page has a non-descriptive URL that provides '
        'zero keyword relevance and looks unprofessional in search results.',
        styles['BCBody']
    ))
    
    url_rows = [
        ['Sales', '/blank', '/sales'],
        ['Lettings', '/blank-3', '/lettings'],
        ['Our Story', '/blank-4', '/about'],
        ['Services', '/blank-5', '/services'],
        ['Contact Us', '/blank-7', '/contact'],
        ['Search Homes', '/blank-10', '/properties'],
        ['Meadowbank Court', '/blank-11', '/meadowbank-court-derry'],
        ['Valuation', '/blank-12', '/free-property-valuation-derry'],
        ['Merchants View', '/blank-15', '/merchants-view-derry'],
        ['Selling Your Home', '/items-1/i-am-a-title-02', '/sell-your-home'],
    ]
    elements.append(make_table(['Page', 'Current URL', 'Recommended'], url_rows, [40*mm, 55*mm, 75*mm]))
    
    elements.append(Spacer(1, 4*mm))
    elements.append(Paragraph('No Google Business Profile (GBP)', styles['BCHeading3']))
    elements.append(Paragraph(
        'No GBP listing found for James Gorman Property. For a local estate agent, this means '
        'no visibility in Google Maps, no Knowledge Panel, no Google Reviews, and no Map Pack presence. '
        'This is the highest-ROI fix available.',
        styles['BCBody']
    ))
    
    elements.append(Spacer(1, 3*mm))
    elements.append(Paragraph('No Blog or Content Pages', styles['BCHeading3']))
    elements.append(Paragraph(
        'The site has zero blog posts or informational content. This means no long-tail keyword capture '
        '("best areas to buy in Derry", "property market Derry 2026"), no internal linking opportunities, '
        'and no topical authority building.',
        styles['BCBody']
    ))
    
    elements.append(Spacer(1, 3*mm))
    elements.append(Paragraph('Footer Social Links Point to Wix Defaults', styles['BCHeading3']))
    elements.append(Paragraph(
        'The footer social icons link to Wix corporate accounts (Instagram/Wix, Facebook/WixStudio, etc.) '
        'instead of James Gorman Property\'s profiles. This must be fixed immediately.',
        styles['BCBody']
    ))
    
    elements.append(Spacer(1, 4*mm))
    elements.append(Paragraph('<font color="#ffc107">■</font> Important Issues', styles['BCHeading2']))
    
    important_issues = [
        '<b>Missing OG image:</b> No preview image appears when the site is shared on social media.',
        '<b>Title tag:</b> Contains redundant "property" — should be "James Gorman Property | Estate Agent in Derry | Sales &amp; Lettings".',
        '<b>Minimal schema markup:</b> Only WebSite schema present. Missing LocalBusiness, RealEstateAgent, Organization, Review schemas.',
        '<b>Sitemap needs cleanup:</b> Contains all blank-X URLs; needs updating after URL restructure.',
        '<b>Email typo in footer:</b> "Lettings@jamesgormaproperty.com" is missing an \'n\'.',
    ]
    for i in important_issues:
        elements.append(Paragraph(f'• {i}', styles['BCBullet']))
    
    elements.append(Spacer(1, 4*mm))
    elements.append(Paragraph('<font color="#28a745">■</font> What\'s Working Well', styles['BCHeading2']))
    
    good_items = [
        'SSL/HTTPS properly configured with HSTS',
        'www/non-www redirect correctly consolidating to www',
        'HTTP to HTTPS redirect working',
        'Mobile viewport set correctly',
        'Meta descriptions present and descriptive',
        'Canonical tags present',
        'Accessibility score: 100/100',
        'Excellent Trustpilot reviews embedded on site',
    ]
    for i in good_items:
        elements.append(Paragraph(f'<font color="#28a745"><b>+</b></font> {i}', styles['BCBullet']))
    
    elements.append(PageBreak())
    
    # =============================================
    # 4. COMPETITOR LANDSCAPE
    # =============================================
    add_header()
    elements.append(Paragraph('4. Competitor Landscape', styles['BCHeading1']))
    
    elements.append(Paragraph('Top Competitors — "Estate Agent Derry"', styles['BCHeading2']))
    
    comp_rows = [
        ['1', 'Daniel Henry', 'danielhenry.co.uk', '1968', '50+ years, multi-location'],
        ['2', 'EO\'C Estate Agents', 'eocestateagents.com', '—', 'Strong NW presence'],
        ['3', 'Pauline Elliott', 'paulineelliott-\nestateagents.com', '—', 'New development focus'],
        ['4', 'Robert Quigley', 'robertquigley.co.uk', '—', 'Established Derry brand'],
        ['5', 'Montgomery & McCleery', 'montgomerymccleery.com', '100+ yr', 'Heritage brand'],
        ['6', 'City Property', 'citypropertyestateagents.com', '—', 'Simple comprehensive service'],
        ['7', 'Robert Ferris', 'robertferris.co.uk', '30+ yr', 'Decades of local trust'],
        ['8', 'Oakland Agents', 'oaklandestateagents.co.uk', '—', 'Active Derry presence'],
    ]
    elements.append(make_table(
        ['#', 'Company', 'Domain', 'Est.', 'Key Strengths'],
        comp_rows,
        [8*mm, 35*mm, 45*mm, 15*mm, 67*mm]
    ))
    
    elements.append(Spacer(1, 4*mm))
    elements.append(Paragraph('What Competitors Do That James Doesn\'t', styles['BCHeading2']))
    
    comp_gaps = [
        '<b>Proper URL structures</b> — descriptive slugs like /property-valuations, /about-us',
        '<b>Blog/content sections</b> — area guides, market updates, buying advice',
        '<b>Google Business Profiles</b> — optimised GBP listings with reviews and photos',
        '<b>Directory citations</b> — listed on Yell, Thomson Local, FreeIndex, etc.',
        '<b>Local SEO pages</b> — area-specific landing pages targeting BT postcodes',
        '<b>Multi-location coverage</b> — dedicated pages per area (Daniel Henry: Derry, Limavady, Coleraine)',
    ]
    for g in comp_gaps:
        elements.append(Paragraph(f'• {g}', styles['BCBullet']))
    
    elements.append(Spacer(1, 4*mm))
    elements.append(Paragraph('James\'s Competitive Advantages', styles['BCHeading2']))
    
    advantages = [
        '<b>Modern, social-first marketing</b> — strong Instagram, TikTok, and social presence older agents lack',
        '<b>Excellent Trustpilot reviews</b> — genuine, detailed stories from real clients',
        '<b>Younger, relatable brand</b> — appeals to first-time buyers and digital-native sellers',
        '<b>Merchants View exclusive</b> — exclusive access to a premium new build development',
        '<b>Personal touch</b> — "work directly alongside our Managing Director" proposition',
    ]
    for a in advantages:
        elements.append(Paragraph(f'<font color="#28a745"><b>+</b></font> {a}', styles['BCBullet']))
    
    elements.append(PageBreak())
    
    # =============================================
    # 5. LOCAL SEO STATUS
    # =============================================
    add_header()
    elements.append(Paragraph('5. Local SEO Status', styles['BCHeading1']))
    
    elements.append(Paragraph('Google Business Profile', styles['BCHeading2']))
    
    gbp_rows = [
        ['GBP Listing', 'NOT FOUND'],
        ['Google Maps Presence', 'NOT VISIBLE'],
        ['Knowledge Panel', 'NOT APPEARING'],
        ['Google Reviews', 'NONE (no GBP)'],
    ]
    elements.append(make_table(['Check', 'Status'], gbp_rows, [60*mm, 110*mm]))
    
    elements.append(Spacer(1, 2*mm))
    
    # Priority box
    pri_data = [[Paragraph(
        '<b>PRIORITY: CRITICAL</b> — Setting up and optimising a Google Business Profile is the single '
        'highest-ROI action for a local estate agent. It drives Map Pack visibility, click-to-call, '
        'directions, and review aggregation.',
        ParagraphStyle('pri', parent=styles['BCBody'], textColor=HexColor('#dc3545'))
    )]]
    pri_table = Table(pri_data, colWidths=[165*mm])
    pri_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), RED_BG),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('BOX', (0,0), (-1,-1), 1, HexColor('#dc3545')),
    ]))
    elements.append(pri_table)
    
    elements.append(Spacer(1, 4*mm))
    elements.append(Paragraph('Citations & Directories', styles['BCHeading2']))
    
    cit_rows = [
        ['Yell.com', 'NO'],
        ['Thomson Local', 'NO'],
        ['Yelp', 'NO'],
        ['FreeIndex', 'NO'],
        ['192.com', 'NO'],
        ['Scoot', 'NO'],
        ['PropertyPal', 'YES'],
        ['PropertyNews', 'YES'],
        ['HomesNI', 'YES'],
        ['Trustpilot', 'YES'],
        ['Facebook', 'YES'],
        ['Instagram', 'YES'],
        ['TikTok', 'YES'],
        ['LinkedIn', 'YES'],
    ]
    elements.append(make_table(['Directory', 'Listed?'], cit_rows, [80*mm, 90*mm]))
    
    elements.append(Spacer(1, 4*mm))
    elements.append(Paragraph('NAP Consistency', styles['BCHeading2']))
    elements.append(Paragraph(
        'NAP (Name, Address, Phone) is inconsistent across platforms. The full business address is not '
        'displayed on the website. Address information varies between PropertyPal (12 Clearwater, BT47 6BE) '
        'and other sources. Consistent NAP across all listings is critical for local SEO.',
        styles['BCBody']
    ))
    
    nap_issues = [
        'Full business address not displayed on website',
        'NAP not consistent across platforms (address missing from most)',
        'No structured LocalBusiness schema markup',
        'Email typo: "Lettings@jamesgormaproperty.com" (missing \'n\')',
    ]
    for n in nap_issues:
        elements.append(Paragraph(f'<font color="#ffc107"><b>!</b></font> {n}', styles['BCBullet']))
    
    elements.append(PageBreak())
    
    # =============================================
    # 6. QUICK WINS
    # =============================================
    add_header()
    elements.append(Paragraph('6. Quick Wins (Prioritised)', styles['BCHeading1']))
    
    elements.append(Paragraph('<font color="#dc3545">■</font> Week 1 — Immediate Impact', styles['BCHeading2']))
    
    w1_rows = [
        ['1', 'Set up Google Business Profile', 'Critical', '30 mins'],
        ['2', 'Fix footer social links (remove Wix defaults)', 'High', '10 mins'],
        ['3', 'Fix email typo in footer', 'High', '5 mins'],
        ['4', 'Add OG image for social sharing', 'Medium', '15 mins'],
        ['5', 'Add LocalBusiness schema markup', 'Medium', '20 mins'],
    ]
    elements.append(make_table(['#', 'Action', 'Impact', 'Effort'], w1_rows, [8*mm, 95*mm, 30*mm, 37*mm]))
    
    elements.append(Spacer(1, 4*mm))
    elements.append(Paragraph('<font color="#ffc107">■</font> Week 2–3 — URL &amp; Content Fixes', styles['BCHeading2']))
    
    w2_rows = [
        ['6', 'Rename all page URLs from blank-X to descriptive slugs', 'Critical', '1–2 hrs'],
        ['7', 'Optimise homepage title tag', 'Medium', '5 mins'],
        ['8', 'Add full business address to footer', 'Medium', '10 mins'],
        ['9', 'Set up Google Search Console', 'Medium', '15 mins'],
        ['10', 'Set up Google Analytics (GA4)', 'Medium', '15 mins'],
    ]
    elements.append(make_table(['#', 'Action', 'Impact', 'Effort'], w2_rows, [8*mm, 95*mm, 30*mm, 37*mm]))
    
    elements.append(Spacer(1, 4*mm))
    elements.append(Paragraph('<font color="#28a745">■</font> Week 3–4 — Authority Building', styles['BCHeading2']))
    
    w3_rows = [
        ['11', 'Submit to 15+ business directories', 'Medium', '2 hrs'],
        ['12', 'Create first 3 blog posts (area guides)', 'Medium', '3–4 hrs'],
        ['13', 'Add Review schema (Trustpilot aggregate)', 'Medium', '30 mins'],
        ['14', 'Optimise PropertyPal & PropertyNews profiles', 'Low', '30 mins'],
        ['15', 'Start encouraging Google reviews', 'Medium', 'Ongoing'],
    ]
    elements.append(make_table(['#', 'Action', 'Impact', 'Effort'], w3_rows, [8*mm, 95*mm, 30*mm, 37*mm]))
    
    elements.append(Spacer(1, 6*mm))
    
    # Expected impact box
    impact_data = [[Paragraph(
        '<b>Expected Impact</b><br/><br/>'
        '• <b>GBP setup</b> → Immediate visibility in local map pack results<br/>'
        '• <b>URL fixes</b> → 20–40% improvement in page-level ranking potential<br/>'
        '• <b>Citation building</b> → Steady climb in local search authority over 4–8 weeks<br/>'
        '• <b>Content creation</b> → Long-tail traffic growth from month 2 onwards<br/>'
        '• <b>Mobile performance</b> → Improved engagement (within Wix platform constraints)',
        ParagraphStyle('imp', parent=styles['BCBody'], textColor=DARK)
    )]]
    impact_table = Table(impact_data, colWidths=[165*mm])
    impact_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), GREEN_BG),
        ('LEFTPADDING', (0,0), (-1,-1), 12),
        ('RIGHTPADDING', (0,0), (-1,-1), 12),
        ('TOPPADDING', (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('BOX', (0,0), (-1,-1), 1, HexColor('#28a745')),
    ]))
    elements.append(impact_table)
    
    # =============================================
    # FOOTER ON LAST PAGE
    # =============================================
    elements.append(Spacer(1, 15*mm))
    elements.append(HRFlowable(width='100%', thickness=1, color=ORANGE, spaceAfter=3*mm))
    elements.append(Paragraph(
        'Blue Canvas | AI-Powered SEO & Digital Strategy | bluecanvas.ai | contact@bluecanvas.ai',
        styles['BCFooter']
    ))
    elements.append(Paragraph(
        'This report is confidential and prepared exclusively for James Gorman Property.',
        styles['BCFooter']
    ))
    elements.append(Paragraph('Next report: Friday 20 March 2026', styles['BCFooter']))
    
    # Build
    doc.build(elements)
    print(f'PDF generated: {OUTPUT}')

if __name__ == '__main__':
    build_pdf()
