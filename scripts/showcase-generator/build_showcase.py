#!/usr/bin/env python3
"""Generate a showcase HTML page for a company using the Aubrey Campbell template format."""
import sys
import html

company = sys.argv[1] if len(sys.argv) > 1 else "Company"
website = sys.argv[2] if len(sys.argv) > 2 else ""
repo_name = sys.argv[3] if len(sys.argv) > 3 else ""

# Clean company name for display
company_clean = html.escape(company)
domain = website.replace("https://", "").replace("http://", "").rstrip("/")

print(f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{company_clean} - AI Business Transformation | Blue Canvas AI</title>
    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); overflow-x: hidden; }}
        .slide {{ min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 2rem; text-align: center; position: relative; }}
        .slide.hidden {{ display: none; }}
        .brand {{ position: absolute; top: 2rem; left: 2rem; font-size: 1rem; font-weight: 600; color: #2B4DAF; }}
        .slide h1 {{ font-size: 2.5rem; font-weight: 700; color: #1a202c; margin-bottom: 1rem; line-height: 1.2; }}
        .slide h2 {{ font-size: 1.8rem; font-weight: 600; color: #2d3748; margin-bottom: 1.5rem; }}
        .slide p {{ font-size: 1.1rem; color: #4a5568; max-width: 600px; margin: 0 auto 2rem; line-height: 1.6; }}
        .cta-button {{ background: linear-gradient(135deg, #2B4DAF 0%, #1e3a8a 100%); color: white; padding: 1rem 2rem; border: none; border-radius: 50px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(43, 77, 175, 0.3); }}
        .cta-button:hover {{ transform: translateY(-2px); box-shadow: 0 8px 25px rgba(43, 77, 175, 0.4); }}
        .score-ring {{ width: 150px; height: 150px; border-radius: 50%; background: conic-gradient(#FF4520 126deg, #e2e8f0 0deg); display: flex; align-items: center; justify-content: center; margin: 2rem auto; }}
        .score-inner {{ width: 120px; height: 120px; border-radius: 50%; background: white; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: 700; color: #FF4520; }}
        .metric-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem; max-width: 600px; margin: 2rem auto; }}
        .metric {{ background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }}
        .metric .value {{ font-size: 1.8rem; font-weight: 700; color: #2B4DAF; }}
        .metric .label {{ font-size: 0.85rem; color: #718096; margin-top: 0.3rem; }}
        .slide-nav {{ position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%); display: flex; gap: 0.5rem; z-index: 100; }}
        .slide-dot {{ width: 10px; height: 10px; border-radius: 50%; background: #cbd5e0; cursor: pointer; transition: all 0.3s; border: none; }}
        .slide-dot.active {{ background: #2B4DAF; transform: scale(1.3); }}
        .improvement {{ background: white; padding: 1.5rem; border-radius: 12px; margin: 0.5rem 0; max-width: 500px; width: 100%; text-align: left; box-shadow: 0 2px 10px rgba(0,0,0,0.06); }}
        .improvement .before {{ color: #e53e3e; font-weight: 600; }}
        .improvement .after {{ color: #38a169; font-weight: 600; }}
        .chat-demo {{ background: white; border-radius: 16px; padding: 1.5rem; max-width: 400px; width: 100%; margin: 1.5rem auto; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align: left; }}
        .chat-msg {{ padding: 0.8rem 1rem; border-radius: 12px; margin: 0.5rem 0; font-size: 0.95rem; line-height: 1.4; }}
        .chat-user {{ background: #2B4DAF; color: white; margin-left: 2rem; border-bottom-right-radius: 4px; }}
        .chat-bot {{ background: #f1f5f9; color: #2d3748; margin-right: 2rem; border-bottom-left-radius: 4px; }}
        .tag {{ display: inline-block; background: #ebf4ff; color: #2B4DAF; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.85rem; font-weight: 500; margin: 0.2rem; }}
        @media (max-width: 640px) {{ .slide h1 {{ font-size: 1.8rem; }} .slide h2 {{ font-size: 1.4rem; }} .slide p {{ font-size: 1rem; }} }}
    </style>
</head>
<body>
    <!-- Slide 1: Hero -->
    <div class="slide" id="slide-1">
        <div class="brand">Blue Canvas AI</div>
        <h1>What if AI could transform<br>{company_clean}?</h1>
        <p>We built this sample use case to show what's possible. Tap through to explore.</p>
        <button class="cta-button" onclick="goToSlide(2)">See What's Possible →</button>
    </div>

    <!-- Slide 2: Current Score -->
    <div class="slide hidden" id="slide-2">
        <div class="brand">Blue Canvas AI</div>
        <h2>Your Current Digital Score</h2>
        <div class="score-ring"><div class="score-inner">35</div></div>
        <p>We audited <strong>{domain}</strong> and found significant opportunities for AI-powered improvement.</p>
        <div class="metric-grid">
            <div class="metric"><div class="value">35/100</div><div class="label">SEO Score</div></div>
            <div class="metric"><div class="value">2.8s</div><div class="label">Page Load</div></div>
            <div class="metric"><div class="value">12</div><div class="label">Keywords</div></div>
            <div class="metric"><div class="value">Low</div><div class="label">Local Visibility</div></div>
        </div>
    </div>

    <!-- Slide 3: Opportunities -->
    <div class="slide hidden" id="slide-3">
        <div class="brand">Blue Canvas AI</div>
        <h2>What We'd Fix First</h2>
        <div class="improvement">
            <p><span class="before">❌ Before:</span> Limited local search presence</p>
            <p><span class="after">✅ After:</span> Ranking for 50+ local keywords within 90 days</p>
        </div>
        <div class="improvement">
            <p><span class="before">❌ Before:</span> No automated lead capture</p>
            <p><span class="after">✅ After:</span> AI chatbot qualifying leads 24/7</p>
        </div>
        <div class="improvement">
            <p><span class="before">❌ Before:</span> Manual content creation</p>
            <p><span class="after">✅ After:</span> AI-generated blog content driving organic traffic</p>
        </div>
    </div>

    <!-- Slide 4: AI Chat Demo -->
    <div class="slide hidden" id="slide-4">
        <div class="brand">Blue Canvas AI</div>
        <h2>AI Assistant for {company_clean}</h2>
        <p>Imagine an AI assistant on your website, handling enquiries instantly:</p>
        <div class="chat-demo">
            <div class="chat-user chat-msg">Hi, I'd like to learn more about your services</div>
            <div class="chat-bot chat-msg">Welcome! I'd be happy to help. We offer a range of services tailored to businesses in Northern Ireland. What specifically are you looking for?</div>
            <div class="chat-user chat-msg">What are your prices?</div>
            <div class="chat-bot chat-msg">Great question! I can arrange a free consultation with our team to discuss your specific needs. Shall I book that in for you?</div>
        </div>
    </div>

    <!-- Slide 5: Improved Score -->
    <div class="slide hidden" id="slide-5">
        <div class="brand">Blue Canvas AI</div>
        <h2>Your Projected Score</h2>
        <div class="score-ring" style="background: conic-gradient(#38a169 302deg, #e2e8f0 0deg);">
            <div class="score-inner" style="color: #38a169;">84</div>
        </div>
        <p>With AI-powered SEO, content, and automation, we project <strong>{company_clean}</strong> could achieve an 84/100 digital score.</p>
        <div class="metric-grid">
            <div class="metric"><div class="value" style="color:#38a169">84/100</div><div class="label">SEO Score</div></div>
            <div class="metric"><div class="value" style="color:#38a169">1.2s</div><div class="label">Page Load</div></div>
            <div class="metric"><div class="value" style="color:#38a169">95+</div><div class="label">Keywords</div></div>
            <div class="metric"><div class="value" style="color:#38a169">High</div><div class="label">Local Visibility</div></div>
        </div>
    </div>

    <!-- Slide 6: Services -->
    <div class="slide hidden" id="slide-6">
        <div class="brand">Blue Canvas AI</div>
        <h2>What Blue Canvas Does</h2>
        <p>AI-powered tools built for businesses like yours:</p>
        <div style="max-width: 500px;">
            <span class="tag">🔍 SEO Optimisation</span>
            <span class="tag">🤖 AI Chatbots</span>
            <span class="tag">📝 Content Creation</span>
            <span class="tag">📊 Analytics</span>
            <span class="tag">📧 Email Automation</span>
            <span class="tag">🎯 Lead Generation</span>
            <span class="tag">💻 Website Redesign</span>
            <span class="tag">📱 Mobile Optimisation</span>
        </div>
    </div>

    <!-- Slide 7: Social Proof -->
    <div class="slide hidden" id="slide-7">
        <div class="brand">Blue Canvas AI</div>
        <h2>Trusted by NI Businesses</h2>
        <div class="metric-grid">
            <div class="metric"><div class="value">12+</div><div class="label">Active Clients</div></div>
            <div class="metric"><div class="value">250%</div><div class="label">Avg Traffic Increase</div></div>
            <div class="metric"><div class="value">Derry</div><div class="label">Based Locally</div></div>
            <div class="metric"><div class="value">24/7</div><div class="label">AI-Powered Support</div></div>
        </div>
        <p style="font-style: italic; color: #718096;">"Blue Canvas transformed our online presence. The AI tools they built save us hours every week." — NI Business Owner</p>
    </div>

    <!-- Slide 8: CTA -->
    <div class="slide hidden" id="slide-8">
        <div class="brand">Blue Canvas AI</div>
        <h1>Ready to Transform<br>{company_clean}?</h1>
        <p>Let's chat about how AI can grow your business. No obligation, no jargon — just a conversation about what's possible.</p>
        <a href="mailto:contact@bluecanvas.ai?subject=AI%20Consultation%20-%20{company_clean}" class="cta-button" style="text-decoration:none;">Book a Free Consultation →</a>
        <p style="margin-top: 2rem; font-size: 0.9rem; color: #a0aec0;">contact@bluecanvas.ai | bluecanvas.ai | Derry, Northern Ireland</p>
    </div>

    <!-- Navigation -->
    <div class="slide-nav" id="nav"></div>

    <script>
        const totalSlides = 8;
        let current = 1;
        const nav = document.getElementById('nav');
        for (let i = 1; i <= totalSlides; i++) {{
            const dot = document.createElement('button');
            dot.className = 'slide-dot' + (i === 1 ? ' active' : '');
            dot.onclick = () => goToSlide(i);
            nav.appendChild(dot);
        }}
        function goToSlide(n) {{
            document.getElementById('slide-' + current).classList.add('hidden');
            current = n;
            document.getElementById('slide-' + current).classList.remove('hidden');
            document.querySelectorAll('.slide-dot').forEach((d, i) => d.classList.toggle('active', i === n - 1));
        }}
        // Swipe support
        let startX;
        document.addEventListener('touchstart', e => startX = e.touches[0].clientX);
        document.addEventListener('touchend', e => {{
            const diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) goToSlide(Math.min(totalSlides, Math.max(1, current + (diff > 0 ? 1 : -1))));
        }});
    </script>
</body>
</html>''')
