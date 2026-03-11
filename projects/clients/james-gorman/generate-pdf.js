const puppeteer = require('puppeteer');
const path = require('path');

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.6;
    color: #1a1a1a;
    padding: 50px 60px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 3px solid #2B4DAF;
  }
  .header-left h1 {
    font-size: 22pt;
    font-weight: 700;
    color: #2B4DAF;
    letter-spacing: -0.5px;
  }
  .header-left p {
    font-size: 9pt;
    color: #666;
    margin-top: 2px;
  }
  .header-right {
    text-align: right;
    font-size: 9pt;
    color: #666;
  }
  .doc-title {
    font-size: 16pt;
    font-weight: 700;
    color: #2B4DAF;
    margin-bottom: 25px;
    text-align: center;
  }
  .parties {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    gap: 40px;
  }
  .party {
    flex: 1;
    background: #f7f8fc;
    border-radius: 6px;
    padding: 16px 20px;
    border-left: 4px solid #2B4DAF;
  }
  .party.client {
    border-left-color: #FF4520;
  }
  .party-label {
    font-size: 8pt;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #888;
    margin-bottom: 4px;
  }
  .party-name {
    font-size: 12pt;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 2px;
  }
  .party-detail {
    font-size: 9pt;
    color: #555;
    line-height: 1.5;
  }
  h2 {
    font-size: 12pt;
    font-weight: 700;
    color: #2B4DAF;
    margin-top: 20px;
    margin-bottom: 8px;
    padding-bottom: 4px;
    border-bottom: 1px solid #e0e4ef;
  }
  p, li {
    font-size: 10.5pt;
    margin-bottom: 6px;
  }
  ul {
    padding-left: 20px;
    margin-bottom: 10px;
  }
  li {
    margin-bottom: 4px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;
  }
  th {
    background: #2B4DAF;
    color: white;
    font-size: 10pt;
    font-weight: 600;
    padding: 8px 14px;
    text-align: left;
  }
  td {
    padding: 8px 14px;
    border-bottom: 1px solid #e0e4ef;
    font-size: 10.5pt;
  }
  tr:nth-child(even) td { background: #f7f8fc; }
  .signatures {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    gap: 40px;
  }
  .sig-block {
    flex: 1;
  }
  .sig-block h3 {
    font-size: 11pt;
    font-weight: 700;
    color: #2B4DAF;
    margin-bottom: 8px;
  }
  .sig-block.client h3 {
    color: #FF4520;
  }
  .sig-line {
    border-bottom: 1px solid #333;
    margin: 25px 0 5px 0;
    width: 100%;
  }
  .sig-label {
    font-size: 9pt;
    color: #888;
  }
  .sig-name {
    font-size: 10pt;
    margin-top: 2px;
  }
  .footer {
    margin-top: 30px;
    padding-top: 15px;
    border-top: 2px solid #2B4DAF;
    font-size: 8.5pt;
    color: #888;
    text-align: center;
    font-style: italic;
  }
  .date-field {
    margin: 15px 0 25px 0;
    font-size: 10.5pt;
  }
  .date-field span {
    border-bottom: 1px solid #333;
    display: inline-block;
    width: 200px;
    margin-left: 5px;
  }
  strong { font-weight: 600; }
  .accent { color: #FF4520; }
</style>
</head>
<body>

<div class="header">
  <div class="header-left">
    <h1>Blue Canvas <span class="accent">AI</span></h1>
    <p>AI Consultancy &amp; Digital Strategy</p>
  </div>
  <div class="header-right">
    <p>bluecanvas.ai</p>
    <p>hello@bluecanvas.ai</p>
    <p>Derry, Northern Ireland</p>
  </div>
</div>

<div class="doc-title">SEO Services Engagement Letter</div>

<div class="parties">
  <div class="party">
    <div class="party-label">The Provider</div>
    <div class="party-name">Blue Canvas AI Ltd</div>
    <div class="party-detail">
      Company No. NI737502<br>
      22c Spacehub, Balliniska Road<br>
      Derry, BT48 0NA<br>
      bluecanvas.ai
    </div>
  </div>
  <div class="party client">
    <div class="party-label">The Client</div>
    <div class="party-name">James Gorman Property Ltd</div>
    <div class="party-detail">
      Company No. NI715437<br>
      12 Clearwater<br>
      Derry/Londonderry, BT47 6BE<br>
      jamesgormanproperty.com
    </div>
  </div>
</div>

<div class="date-field"><strong>Date:</strong> <span>&nbsp;</span></div>

<h2>1. Services</h2>
<p>Blue Canvas AI will provide the following SEO services for jamesgormanproperty.com:</p>
<ul>
  <li>Keyword research and strategy development</li>
  <li>On-page optimisation (titles, meta descriptions, headings, content structure)</li>
  <li>Technical SEO (site speed, crawlability, indexing, error resolution)</li>
  <li>Content optimisation and recommendations</li>
  <li>Local SEO strategy and implementation</li>
  <li>Google Business Profile management and optimisation</li>
  <li>Weekly performance reporting with Ahrefs data</li>
</ul>

<h2>2. Reporting</h2>
<p>The Provider will deliver a weekly report to the Client including:</p>
<ul>
  <li>Keyword ranking changes and trends</li>
  <li>Ahrefs performance data (domain rating, backlinks, organic traffic estimates)</li>
  <li>Summary of all work completed that week</li>
  <li>Recommendations and next steps</li>
</ul>

<h2>3. Fees &amp; Payment</h2>
<table>
  <tr><th>Item</th><th>Amount</th></tr>
  <tr><td>Onboarding fee (one-time)</td><td><strong>£100</strong></td></tr>
  <tr><td>Monthly retainer</td><td><strong>£250/month</strong></td></tr>
</table>
<ul>
  <li>The onboarding fee is due before work commences.</li>
  <li>The monthly retainer is due on the same date each calendar month, beginning one month after the start date.</li>
  <li>Payment terms: due on receipt of invoice. Late payments may incur a pause in services until the account is brought up to date.</li>
</ul>

<h2>4. Term &amp; Termination</h2>
<p>This agreement has a minimum term of <strong>6 months</strong> from the start date.</p>
<p>Neither party may give notice of termination before the end of <strong>Month 3</strong>. After Month 3, either party may terminate by giving <strong>1 calendar month's written notice</strong> (email is sufficient).</p>
<p>If no notice is given, the agreement continues on a <strong>rolling monthly basis</strong> after the initial 6-month term, with either party able to terminate by giving 1 calendar month's written notice at any time.</p>

<h2>5. Intellectual Property</h2>
<p>All work product, content, and materials created by Blue Canvas AI under this agreement are the property of James Gorman Property upon payment. This includes copy, optimised content, strategy documents, and any other deliverables.</p>

<h2>6. Confidentiality</h2>
<p>Both parties agree to keep confidential any business information, strategies, data, or proprietary information shared during this engagement. This includes analytics data, SEO strategies, pricing, and business plans. This obligation survives termination of the agreement.</p>

<h2>7. Limitation of Liability</h2>
<p>Blue Canvas AI will perform all services with reasonable skill and care. However:</p>
<ul>
  <li>SEO results depend on many factors outside the Provider's control (search engine algorithm changes, competitor activity, website hosting, etc.)</li>
  <li>The Provider does not guarantee specific rankings or traffic levels</li>
  <li>The Provider's total liability under this agreement shall not exceed the total fees paid by the Client in the 3 months preceding any claim</li>
</ul>

<h2>8. General</h2>
<ul>
  <li><strong>Communication:</strong> Day-to-day communication via phone, email, or WhatsApp as suits both parties.</li>
  <li><strong>Changes to scope:</strong> Any significant changes to the scope of services will be discussed and agreed in writing before implementation.</li>
  <li><strong>Governing law:</strong> This agreement is governed by the laws of Northern Ireland.</li>
</ul>

<div class="signatures">
  <div class="sig-block">
    <h3>Blue Canvas AI Ltd</h3>
    <div class="sig-name"><strong>Name:</strong> Phil Patterson</div>
    <div class="sig-line"></div>
    <div class="sig-label">Signature</div>
    <div class="sig-line"></div>
    <div class="sig-label">Date</div>
  </div>
  <div class="sig-block client">
    <h3>James Gorman Property Ltd</h3>
    <div class="sig-name"><strong>Name:</strong> James Gorman</div>
    <div class="sig-line"></div>
    <div class="sig-label">Signature</div>
    <div class="sig-line"></div>
    <div class="sig-label">Date</div>
  </div>
</div>

<div class="footer">
  This is a simple engagement letter intended to set out the terms of our working relationship clearly and fairly.<br>
  If anything's unclear, just ask — happy to talk it through.
</div>

</body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  const outputPath = path.join(__dirname, 'Blue-Canvas-AI-Engagement-Letter-James-Gorman.pdf');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  await browser.close();
  console.log('PDF generated:', outputPath);
})();
