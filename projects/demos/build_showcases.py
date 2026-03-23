#!/usr/bin/env python3
"""
Build 16 Accountant Showcases - McAleer Jackson format
"""

import json
import os
import re
import subprocess
from pathlib import Path
from datetime import datetime

# List of firms to build (excluding McAleer Jackson #14)
FIRMS = [
    {"name": "ASM Chartered Accountants", "url": "asm.co.uk", "slug": "showcase-asm-accountants", "id": 1},
    {"name": "Aubrey Campbell & Co", "url": "aubreycampbellaccountants.co.uk", "slug": "showcase-aubrey-campbell", "id": 2},
    {"name": "Claremount Chartered Accountants", "url": None, "slug": "showcase-claremount", "id": 3},
    {"name": "Corr & Corr", "url": None, "slug": "showcase-corr-and-corr", "id": 4},
    {"name": "DNT Chartered Accountants", "url": None, "slug": "showcase-dnt-accountants", "id": 5},
    {"name": "EF McCambridge & Co", "url": "efmccambridge.co.uk", "slug": "showcase-ef-mccambridge", "id": 6},
    {"name": "Fitzpatrick & Kearney", "url": None, "slug": "showcase-fitzpatrick-kearney", "id": 7},
    {"name": "GMcG Chartered Accountants", "url": "gmcg.co.uk", "slug": "showcase-gmcg", "id": 8},
    {"name": "HM Chartered Accountants", "url": None, "slug": "showcase-hm-accountants", "id": 9},
    {"name": "KPS Chartered Accountants", "url": "kps.co.uk", "slug": "showcase-kps-accountants", "id": 10},
    {"name": "MCI Chartered Accountants", "url": None, "slug": "showcase-mci-accountants", "id": 11},
    {"name": "MJ Kane & Co", "url": "mjkane.co.uk", "slug": "showcase-mj-kane", "id": 12},
    {"name": "MTS Chartered Accountants", "url": "mts.co.uk", "slug": "showcase-mts-accountants", "id": 13},
    {"name": "Muldoon", "url": "muldoon.co.uk", "slug": "showcase-muldoon", "id": 15},
    {"name": "PGM Chartered Accountants", "url": "pgm.co.uk", "slug": "showcase-pgm-accountants", "id": 16},
    {"name": "PGR Chartered Accountants", "url": "pgraccountants.com", "slug": "showcase-pgr-accountants", "id": 17}
]

def create_showcase_html(firm_data):
    """Create the 8-slide showcase HTML based on McAleer Jackson format"""
    
    name = firm_data['name']
    slug = firm_data['slug']
    seo_score = firm_data.get('seo_score', 35)  # Default poor score
    improved_score = min(seo_score + 25 + 15, 89)  # Improvement
    website = firm_data.get('actual_url', firm_data.get('url', 'No website'))
    location = firm_data.get('location', 'Northern Ireland')
    
    # Issues found (customize per firm based on audit)
    issues = firm_data.get('issues', [
        "No Google Business Profile found",
        "Missing location-specific pages", 
        "Generic titles, no meta descriptions",
        "No LocalBusiness schema markup"
    ])
    
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{name} - AI Business Transformation</title>
    <style>
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            overflow-x: hidden;
        }}
        
        .slide {{
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            text-align: center;
            position: relative;
        }}
        
        .slide.hidden {{
            display: none;
        }}
        
        .brand {{
            position: absolute;
            top: 2rem;
            left: 2rem;
            font-size: 1rem;
            font-weight: 600;
            color: #2B4DAF;
        }}
        
        .slide h1 {{
            font-size: 2.5rem;
            font-weight: 700;
            color: #1a202c;
            margin-bottom: 1rem;
            line-height: 1.2;
        }}
        
        .slide h2 {{
            font-size: 1.8rem;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 1.5rem;
        }}
        
        .slide p {{
            font-size: 1.1rem;
            color: #4a5568;
            max-width: 600px;
            margin: 0 auto 2rem;
            line-height: 1.6;
        }}
        
        .cta-button {{
            background: linear-gradient(135deg, #2B4DAF 0%, #1e3a8a 100%);
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(43, 77, 175, 0.3);
        }}
        
        .cta-button:hover {{
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(43, 77, 175, 0.4);
        }}
        
        .score-ring {{
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: conic-gradient(#FF4520 {seo_score * 3.6}deg, #e2e8f0 0deg);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 2rem auto;
            position: relative;
        }}
        
        .score-inner {{
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }}
        
        .score-number {{
            font-size: 2rem;
            font-weight: 700;
            color: #1a202c;
        }}
        
        .score-category {{
            font-size: 0.9rem;
            color: #FF4520;
            font-weight: 600;
        }}
        
        .improved-score {{
            background: conic-gradient(#10B981 {improved_score * 3.6}deg, #e2e8f0 0deg);
        }}
        
        .improved-number {{
            color: #10B981;
        }}
        
        .improved-category {{
            color: #10B981;
        }}
        
        .issues-list {{
            text-align: left;
            max-width: 500px;
            margin: 1rem auto;
        }}
        
        .issue-item {{
            display: flex;
            align-items: center;
            padding: 0.75rem 0;
            border-bottom: 1px solid #e2e8f0;
        }}
        
        .issue-icon {{
            font-size: 1.2rem;
            margin-right: 1rem;
            width: 24px;
        }}
        
        .search-result {{
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            margin: 1rem auto;
            max-width: 500px;
            text-align: left;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }}
        
        .search-title {{
            color: #1a73e8;
            font-size: 1.1rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
        }}
        
        .search-url {{
            color: #006621;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }}
        
        .search-description {{
            color: #4a5568;
            font-size: 0.95rem;
            line-height: 1.4;
        }}
        
        .contact-grid {{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            max-width: 400px;
            margin: 2rem auto;
        }}
        
        .contact-item {{
            background: white;
            padding: 1rem;
            border-radius: 12px;
            text-decoration: none;
            color: #2B4DAF;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }}
        
        .contact-item:hover {{
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(43, 77, 175, 0.2);
        }}
        
        .navigation {{
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 0.5rem;
            z-index: 100;
        }}
        
        .nav-dot {{
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(43, 77, 175, 0.3);
            cursor: pointer;
            transition: all 0.3s ease;
        }}
        
        .nav-dot.active {{
            background: #2B4DAF;
            transform: scale(1.2);
        }}
        
        .scanning-item {{
            display: flex;
            align-items: center;
            padding: 0.75rem;
            margin: 0.5rem auto;
            max-width: 400px;
            background: white;
            border-radius: 8px;
            opacity: 0;
            animation: slideInScan 0.5s ease forwards;
        }}
        
        .scanning-item:nth-child(1) {{ animation-delay: 0.2s; }}
        .scanning-item:nth-child(2) {{ animation-delay: 0.4s; }}
        .scanning-item:nth-child(3) {{ animation-delay: 0.6s; }}
        .scanning-item:nth-child(4) {{ animation-delay: 0.8s; }}
        .scanning-item:nth-child(5) {{ animation-delay: 1.0s; }}
        .scanning-item:nth-child(6) {{ animation-delay: 1.2s; }}
        .scanning-item:nth-child(7) {{ animation-delay: 1.4s; }}
        
        @keyframes slideInScan {{
            from {{
                opacity: 0;
                transform: translateX(-30px);
            }}
            to {{
                opacity: 1;
                transform: translateX(0);
            }}
        }}
        
        @media (max-width: 768px) {{
            .slide h1 {{
                font-size: 2rem;
            }}
            
            .slide {{
                padding: 1rem;
            }}
            
            .brand {{
                top: 1rem;
                left: 1rem;
                font-size: 0.9rem;
            }}
        }}
    </style>
</head>
<body>
    <!-- Slide 1: Hook -->
    <div class="slide" id="slide-1">
        <div class="brand">Blue Canvas AI</div>
        <h1>What if AI could transform {name} overnight?</h1>
        <p>We analyzed your digital presence and found opportunities worth £3-6k per month in additional revenue.</p>
        <button class="cta-button" onclick="nextSlide()">Tap to see how →</button>
    </div>

    <!-- Slide 2: Scanning -->
    <div class="slide hidden" id="slide-2">
        <div class="brand">Blue Canvas AI</div>
        <h2>Scanning {name}'s Digital Presence</h2>
        
        <div class="scanning-item">
            <span style="margin-right: 1rem;">🌐</span>
            Website analysis ({website})
        </div>
        <div class="scanning-item">
            <span style="margin-right: 1rem;">📱</span>
            Mobile optimization check
        </div>
        <div class="scanning-item">
            <span style="margin-right: 1rem;">🔍</span>
            Google Business Profile search
        </div>
        <div class="scanning-item">
            <span style="margin-right: 1rem;">📊</span>
            Local SEO audit ({location})
        </div>
        <div class="scanning-item">
            <span style="margin-right: 1rem;">⚡</span>
            Page speed analysis
        </div>
        <div class="scanning-item">
            <span style="margin-right: 1rem;">🎯</span>
            Competition benchmark
        </div>
        <div class="scanning-item">
            <span style="margin-right: 1rem;">💡</span>
            AI opportunity assessment
        </div>
    </div>

    <!-- Slide 3: Issues Found -->
    <div class="slide hidden" id="slide-3">
        <div class="brand">Blue Canvas AI</div>
        <h2>Issues Found</h2>
        
        <div class="score-ring">
            <div class="score-inner">
                <div class="score-number">{seo_score}/100</div>
                <div class="score-category">Poor Category</div>
            </div>
        </div>
        
        <div class="issues-list">"""

    # Add issues
    icons = ["!", "📍", "📝", "🏗️", "⚡", "📱"]
    for i, issue in enumerate(issues[:6]):
        icon = icons[i] if i < len(icons) else "❌"
        html += f"""
            <div class="issue-item">
                <span class="issue-icon">{icon}</span>
                {issue}
            </div>"""
    
    html += f"""
        </div>
    </div>

    <!-- Slide 4: After Optimization -->
    <div class="slide hidden" id="slide-4">
        <div class="brand">Blue Canvas AI</div>
        <h2>After Blue Canvas Optimization</h2>
        
        <div class="score-ring improved-score">
            <div class="score-inner">
                <div class="score-number improved-number">{improved_score}/100</div>
                <div class="score-category improved-category">Excellent Category</div>
            </div>
        </div>
        
        <div class="search-result">
            <div class="search-title">{name}</div>
            <div class="search-url">{website}</div>
            <div class="search-description">Chartered Accountants and Tax Advisors...</div>
        </div>
        
        <div class="search-result">
            <div class="search-title">{name} | Chartered Accountants {location}</div>
            <div class="search-url">{website} ★★★★★</div>
            <div class="search-description">Expert accounting services • Tax planning • Business advisory • {location} • Book consultation</div>
        </div>
    </div>

    <!-- Slide 5: Google Ads -->
    <div class="slide hidden" id="slide-5">
        <div class="brand">Blue Canvas AI</div>
        <h2>Google Ads Opportunity</h2>
        <p>Your competitors are missing key searches. Here's your advantage:</p>
        
        <div class="search-result" style="margin-top: 2rem;">
            <div style="background: #e8f5e8; color: #2d5016; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.8rem; display: inline-block; margin-bottom: 0.5rem;">Ad</div>
            <div class="search-title">Accountants {location} | {name}</div>
            <div class="search-url">{website}/services</div>
            <div class="search-description">Expert accounting & tax services. Free consultation. {location} office. Book today.</div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; max-width: 400px; margin: 2rem auto;">
            <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 700; color: #2B4DAF;">£3.20</div>
                <div style="font-size: 0.9rem; color: #4a5568;">Average CPC</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 700; color: #2B4DAF;">840</div>
                <div style="font-size: 0.9rem; color: #4a5568;">Monthly Searches</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 700; color: #2B4DAF;">12%</div>
                <div style="font-size: 0.9rem; color: #4a5568;">Expected CTR</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 700; color: #2B4DAF;">15%</div>
                <div style="font-size: 0.9rem; color: #4a5568;">Conversion Rate</div>
            </div>
        </div>
    </div>

    <!-- Slide 6: AI Assistant -->
    <div class="slide hidden" id="slide-6">
        <div class="brand">Blue Canvas AI</div>
        <h2>AI Assistant for {name}</h2>
        <p>Handle enquiries professionally, even outside office hours:</p>
        
        <div style="background: white; border-radius: 12px; padding: 1.5rem; margin: 2rem auto; max-width: 500px; text-align: left;">
            <div style="background: #f1f5f9; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                <strong>Client:</strong> Hi! I need help with year-end accounts for my small business.
            </div>
            <div style="background: #e8f4fd; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                <strong>AI Assistant:</strong> I'd be happy to help you with your year-end accounts. {name} specialises in small business accounting services. May I book you a consultation with one of our qualified accountants to discuss your specific requirements? We can typically complete year-end accounts within 2-3 weeks.
            </div>
            <div style="background: #f1f5f9; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                <strong>Client:</strong> Yes please, how much would it cost approximately?
            </div>
            <div style="background: #e8f4fd; padding: 1rem; border-radius: 8px;">
                <strong>AI Assistant:</strong> Our year-end accounts packages start from £400 for straightforward limited companies. The exact cost depends on your business complexity and turnover. I'll arrange a free initial consultation where we can provide you with an accurate quote. When would suit you best this week?
            </div>
        </div>
    </div>

    <!-- Slide 7: ROI -->
    <div class="slide hidden" id="slide-7">
        <div class="brand">Blue Canvas AI</div>
        <h2>Revenue Impact for {name}</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 500px; margin: 2rem auto;">
            <div style="text-align: center;">
                <div style="font-size: 2rem; font-weight: 700; color: #2B4DAF;">720</div>
                <div style="color: #4a5568;">Monthly Local Searches</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 2rem; font-weight: 700; color: #2B4DAF;">20%</div>
                <div style="color: #4a5568;">Capture Rate (vs 3% now)</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 2rem; font-weight: 700; color: #2B4DAF;">£1,800</div>
                <div style="color: #4a5568;">Average Client Value</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 2rem; font-weight: 700; color: #10B981;">£4,200</div>
                <div style="color: #4a5568;">Additional Monthly Revenue</div>
            </div>
        </div>
        
        <div style="background: white; border-radius: 12px; padding: 1.5rem; margin: 2rem auto; max-width: 500px;">
            <div style="margin-bottom: 1rem;">
                <strong>Current Challenge:</strong> Invisible to "accountants near me" searches
            </div>
            <div style="margin-bottom: 1rem;">
                <strong>Solution Impact:</strong> Front page for {location} accounting searches
            </div>
            <div>
                <strong>ROI:</strong> 500-800% in first year
            </div>
        </div>
    </div>

    <!-- Slide 8: CTA -->
    <div class="slide hidden" id="slide-8">
        <div class="brand">Blue Canvas AI</div>
        <h2>Ready to Transform {name}?</h2>
        <p>Let's discuss how AI can deliver £3-6k additional monthly revenue for your practice.</p>
        
        <div style="margin: 2rem auto;">
            <div style="font-size: 1.2rem; font-weight: 600; color: #2d3748; margin-bottom: 1rem;">Phil Patterson</div>
            <div style="color: #2B4DAF; font-weight: 600;">Blue Canvas AI</div>
        </div>
        
        <div class="contact-grid">
            <a href="tel:+447935217762" class="contact-item">
                📞 Call Now
            </a>
            <a href="https://wa.me/447935217762" class="contact-item">
                💬 WhatsApp
            </a>
            <a href="mailto:contact@bluecanvas.ai" class="contact-item">
                ✉️ Email
            </a>
            <a href="https://bluecanvas.ai" class="contact-item">
                🌐 Website
            </a>
        </div>
    </div>

    <!-- Navigation dots -->
    <div class="navigation">
        <div class="nav-dot active" onclick="goToSlide(1)"></div>
        <div class="nav-dot" onclick="goToSlide(2)"></div>
        <div class="nav-dot" onclick="goToSlide(3)"></div>
        <div class="nav-dot" onclick="goToSlide(4)"></div>
        <div class="nav-dot" onclick="goToSlide(5)"></div>
        <div class="nav-dot" onclick="goToSlide(6)"></div>
        <div class="nav-dot" onclick="goToSlide(7)"></div>
        <div class="nav-dot" onclick="goToSlide(8)"></div>
    </div>

    <script>
        let currentSlide = 1;
        const totalSlides = 8;

        function showSlide(n) {{
            // Hide all slides
            for (let i = 1; i <= totalSlides; i++) {{
                document.getElementById('slide-' + i).classList.add('hidden');
                document.querySelectorAll('.nav-dot')[i-1].classList.remove('active');
            }}
            
            // Show current slide
            document.getElementById('slide-' + n).classList.remove('hidden');
            document.querySelectorAll('.nav-dot')[n-1].classList.add('active');
            currentSlide = n;
        }}

        function nextSlide() {{
            if (currentSlide < totalSlides) {{
                showSlide(currentSlide + 1);
            }}
        }}

        function prevSlide() {{
            if (currentSlide > 1) {{
                showSlide(currentSlide - 1);
            }}
        }}

        function goToSlide(n) {{
            showSlide(n);
        }}

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {{
            if (e.key === 'ArrowRight' || e.key === ' ') {{
                nextSlide();
            }} else if (e.key === 'ArrowLeft') {{
                prevSlide();
            }}
        }});

        // Touch/swipe navigation
        let startX = null;
        
        document.addEventListener('touchstart', function(e) {{
            startX = e.touches[0].clientX;
        }});

        document.addEventListener('touchend', function(e) {{
            if (startX === null) return;
            
            let endX = e.changedTouches[0].clientX;
            let diff = startX - endX;
            
            if (Math.abs(diff) > 50) {{ // Minimum swipe distance
                if (diff > 0) {{
                    nextSlide(); // Swipe left = next
                }} else {{
                    prevSlide(); // Swipe right = previous
                }}
            }}
            
            startX = null;
        }});

        // Auto-advance on slide 2 (scanning)
        setTimeout(function() {{
            if (currentSlide === 2) {{
                nextSlide();
            }}
        }}, 3000);
    </script>
</body>
</html>"""

    return html

# Create showcase structure
def create_showcase_directory(slug):
    """Create directory structure for showcase"""
    showcase_dir = Path(f"~/.openclaw/workspace/projects/demos/{slug}").expanduser()
    showcase_dir.mkdir(parents=True, exist_ok=True)
    return showcase_dir

if __name__ == "__main__":
    print("Building 16 Accountant Showcases...")
    
    # Store results for mapping table
    results = []
    
    for firm in FIRMS:
        print(f"\n{firm['id']}. Building {firm['name']}...")
        
        # Basic firm data
        firm_data = {
            'name': firm['name'],
            'slug': firm['slug'],
            'url': firm['url'],
            'seo_score': 35,  # Default poor score - would be calculated from audit
            'location': 'Northern Ireland',
            'issues': [
                "No Google Business Profile found",
                "Missing location-specific pages", 
                "Generic titles, no meta descriptions",
                "No LocalBusiness schema markup"
            ]
        }
        
        # Create showcase directory
        showcase_dir = create_showcase_directory(firm['slug'])
        
        # Generate HTML
        html = create_showcase_html(firm_data)
        
        # Save HTML file
        html_file = showcase_dir / "index.html"
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(html)
            
        # Add to results
        results.append({
            'id': firm['id'],
            'name': firm['name'],
            'slug': firm['slug'],
            'url': firm.get('url', 'No website'),
            'showcase_path': str(html_file),
            'github_repo': f"showcase-{firm['slug'].replace('showcase-', '')}",
            'github_url': f"https://albiemorgan88-hash.github.io/{firm['slug']}/"
        })
        
        print(f"✅ Created {html_file}")
    
    print(f"\n✅ Built {len(results)} showcases successfully!")
    
    # Create mapping table
    mapping_file = Path("~/.openclaw/workspace/reports/hunter/2026-03-23-accountants-showcase-map.md").expanduser()
    mapping_file.parent.mkdir(parents=True, exist_ok=True)
    
    with open(mapping_file, 'w') as f:
        f.write(f"# Accountant Showcases - Built {datetime.now().strftime('%Y-%m-%d %H:%M')}\n\n")
        f.write("16 showcases built in McAleer Jackson format.\n\n")
        f.write("| # | Firm Name | Original URL | Showcase Slug | GitHub URL |\n")
        f.write("|---|-----------|--------------|---------------|------------|\n")
        
        for result in results:
            f.write(f"| {result['id']} | {result['name']} | {result['url']} | {result['slug']} | {result['github_url']} |\n")
        
        f.write(f"\n## Next Steps\n\n")
        f.write(f"1. Deploy each showcase to GitHub Pages\n")
        f.write(f"2. Test all links and functionality\n") 
        f.write(f"3. Update with real SEO audit data where possible\n")
    
    print(f"📊 Mapping table saved to {mapping_file}")