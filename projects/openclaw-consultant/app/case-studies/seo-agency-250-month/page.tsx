import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Study: £250/Month SEO Agency with OpenClaw',
  description: 'How Blue Canvas built a £250/month SEO agency using just one OpenClaw agent. Complete breakdown of setup, workflows, and revenue generation.',
  alternates: { canonical: 'https://openclawconsultant.co.uk/case-studies/seo-agency-250-month' },
};

export default function SEOAgencyCaseStudy() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full font-medium">
              Case Study
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            £250/Month SEO Agency with One OpenClaw Agent
          </h1>
          
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            How Blue Canvas automated an entire SEO agency workflow using OpenClaw, 
            generating consistent £250/month recurring revenue from day one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#implementation" className="bg-blue-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-400 transition-colors inline-block text-center">
              See Implementation
            </Link>
            <Link href="#contact" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-dark transition-colors inline-block text-center">
              Build Your Agency
            </Link>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-dark">Agency Performance Metrics</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-500">£250</div>
              <div className="text-sm text-muted-dark mt-1">Monthly Recurring Revenue</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-green-500">8 pages</div>
              <div className="text-sm text-muted-dark mt-1">Published in 24 hours</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-purple-500">23 crons</div>
              <div className="text-sm text-muted-dark mt-1">Automated workflows</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-orange-500">95%</div>
              <div className="text-sm text-muted-dark mt-1">Automation rate</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Challenge */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">The Challenge</h2>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <h3 className="text-lg font-semibold text-red-800 mb-3">Traditional SEO Agency Problems</h3>
            <ul className="text-red-700 space-y-2">
              <li>• High overhead costs (staff, office, tools)</li>
              <li>• Time-intensive manual tasks (content creation, audits, reporting)</li>
              <li>• Difficulty scaling without proportional cost increases</li>
              <li>• Client acquisition requiring significant marketing spend</li>
              <li>• Inconsistent quality when delegating to junior staff</li>
            </ul>
          </div>
          
          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-muted-dark text-lg">
            "I wanted to prove that one person with the right AI agent could deliver 
            the same results as a traditional 5-person SEO agency — at a fraction of the cost."
            <footer className="text-sm text-muted mt-2">— Blue Canvas, Blue Canvas AI</footer>
          </blockquote>
        </section>

        {/* Solution Overview */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">The OpenClaw Solution</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Automated SEO Audits</h3>
                <p className="text-muted-dark text-sm">
                  Agent automatically crawls client websites, runs technical SEO audits, 
                  and generates comprehensive reports with actionable recommendations.
                </p>
              </div>
              
              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Content Generation</h3>
                <p className="text-muted-dark text-sm">
                  AI-powered content creation based on keyword research, competitor analysis, 
                  and client brand voice. Published directly to client websites.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Performance Monitoring</h3>
                <p className="text-muted-dark text-sm">
                  Continuous tracking of rankings, traffic, and conversions. 
                  Automated monthly reporting sent directly to clients.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Technical Implementation</h3>
                <p className="text-muted-dark text-sm">
                  Automated fixing of technical SEO issues: meta tags, schema markup, 
                  internal linking, and site speed optimizations.
                </p>
              </div>
              
              <div className="border-l-4 border-pink-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Client Communication</h3>
                <p className="text-muted-dark text-sm">
                  Proactive client updates, progress reports, and strategy recommendations 
                  delivered via their preferred channels.
                </p>
              </div>
              
              <div className="border-l-4 border-indigo-400 pl-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Competitor Intelligence</h3>
                <p className="text-muted-dark text-sm">
                  Automated monitoring of competitor strategies, backlink opportunities, 
                  and market gap identification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Details */}
        <section id="implementation" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">Implementation Breakdown</h2>
          
          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Phase 1: Core SEO Engine (Week 1)</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">Technical Setup</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• OpenClaw agent with SEO-focused personality</li>
                    <li>• Ahrefs API integration for keyword data</li>
                    <li>• Google Search Console connectivity</li>
                    <li>• PageSpeed Insights automation</li>
                    <li>• Webflow CMS integration</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">Automated Workflows</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• Daily keyword ranking checks</li>
                    <li>• Weekly technical SEO audits</li>
                    <li>• Content gap analysis</li>
                    <li>• Competitor backlink monitoring</li>
                    <li>• Site speed performance tracking</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-white p-4 rounded-lg">
                <p className="text-sm text-muted-dark">
                  <strong>Result:</strong> Fully functional SEO monitoring and audit system. 
                  First client onboarded with immediate value delivery.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-4">Phase 2: Content Automation (Week 2)</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700">Content Pipeline</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Automated keyword research</li>
                    <li>• Content brief generation</li>
                    <li>• AI writing with brand voice training</li>
                    <li>• SEO optimization (meta, headings, internal links)</li>
                    <li>• Direct publishing to client CMS</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-green-700">Quality Control</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Plagiarism checking</li>
                    <li>• Readability scoring</li>
                    <li>• Fact verification</li>
                    <li>• Brand voice consistency</li>
                    <li>• Client approval workflow</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-white p-4 rounded-lg">
                <p className="text-sm text-muted-dark">
                  <strong>Achievement:</strong> 8 high-quality blog posts published in 24 hours. 
                  Client called the output "fantastic" — indistinguishable from human work.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-purple-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Phase 3: Client Management (Week 3)</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-purple-700">Reporting System</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Automated monthly reports</li>
                    <li>• Custom dashboard creation</li>
                    <li>• Progress visualization</li>
                    <li>• ROI calculations</li>
                    <li>• Strategic recommendations</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-purple-700">Communication</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Weekly progress updates</li>
                    <li>• Proactive issue alerts</li>
                    <li>• Strategy adjustment proposals</li>
                    <li>• Performance celebrations</li>
                    <li>• Educational content sharing</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-white p-4 rounded-lg">
                <p className="text-sm text-muted-dark">
                  <strong>Outcome:</strong> Client retention rate of 100%. Positive feedback on 
                  communication quality and proactive service approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results & ROI */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">Results & ROI Analysis</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-dark mb-4">Financial Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-semibold">Monthly Revenue:</span>
                  <span className="text-green-600 font-bold">£250</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-semibold">Monthly Costs:</span>
                  <span className="text-blue-600 font-bold">£47</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <span className="font-semibold">Net Profit:</span>
                  <span className="text-purple-600 font-bold">£203</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                  <span className="font-semibold">Profit Margin:</span>
                  <span className="text-orange-600 font-bold">81.2%</span>
                </div>
              </div>
              
              <div className="mt-6 text-sm text-muted-dark">
                <h4 className="font-semibold mb-2">Cost Breakdown:</h4>
                <ul className="space-y-1">
                  <li>• OpenClaw Pro: £19/month</li>
                  <li>• Ahrefs API: £20/month</li>
                  <li>• Hosting & Tools: £8/month</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-dark mb-4">Operational Metrics</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-cream rounded-lg">
                  <div className="text-2xl font-bold text-dark">4 hours</div>
                  <div className="text-sm text-muted-dark">Weekly time investment</div>
                </div>
                
                <div className="p-4 bg-cream rounded-lg">
                  <div className="text-2xl font-bold text-dark">£50.75</div>
                  <div className="text-sm text-muted-dark">Hourly rate (equivalent)</div>
                </div>
                
                <div className="p-4 bg-cream rounded-lg">
                  <div className="text-2xl font-bold text-dark">95%</div>
                  <div className="text-sm text-muted-dark">Automated tasks</div>
                </div>
                
                <div className="p-4 bg-cream rounded-lg">
                  <div className="text-2xl font-bold text-dark">100%</div>
                  <div className="text-sm text-muted-dark">Client retention</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-yellow-50 rounded-xl">
            <h4 className="font-semibold text-yellow-800 mb-3">Scaling Potential</h4>
            <p className="text-yellow-700 text-sm">
              With current automation level, the system could handle 5-10 similar clients 
              with minimal additional effort. Projected revenue: £1,250-£2,500/month 
              with 90%+ profit margins.
            </p>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-8">Technical Architecture</h2>
          
          <div className="bg-cream p-8 rounded-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-dark mb-4">Core Agent</h3>
                <ul className="text-sm text-muted-dark space-y-2">
                  <li>• OpenClaw with SEO personality</li>
                  <li>• Custom memory system</li>
                  <li>• 23 automated cron jobs</li>
                  <li>• Multi-channel communication</li>
                  <li>• Subagent orchestration</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-dark mb-4">Integrations</h3>
                <ul className="text-sm text-muted-dark space-y-2">
                  <li>• Ahrefs API (keywords, backlinks)</li>
                  <li>• Google Search Console</li>
                  <li>• Google Analytics 4</li>
                  <li>• PageSpeed Insights</li>
                  <li>• Webflow CMS API</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-dark mb-4">Automation</h3>
                <ul className="text-sm text-muted-dark space-y-2">
                  <li>• Daily ranking monitoring</li>
                  <li>• Weekly audit generation</li>
                  <li>• Content publishing pipeline</li>
                  <li>• Client report delivery</li>
                  <li>• Issue detection & alerts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps for Readers */}
        <section id="contact" className="bg-gray-900 text-white p-8 rounded-xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Build Your Own AI-Powered Agency</h2>
            <p className="text-gray-300 mb-6">
              This case study demonstrates proven systems and workflows. 
              We can help you implement the same automation for your business or build 
              your own AI-powered service agency.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">What You Get:</h3>
              <ul className="text-sm text-gray-300 space-y-2 text-left max-w-md mx-auto">
                <li>• Complete OpenClaw setup and configuration</li>
                <li>• All automation workflows from this case study</li>
                <li>• Integration with your preferred tools</li>
                <li>• Training and documentation</li>
                <li>• 3 months of support and optimization</li>
              </ul>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#" className="bg-blue-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-400 transition-colors">
                Book Strategy Call (£0)
              </Link>
              <Link href="#" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-dark transition-colors">
                View Pricing
              </Link>
            </div>
            
            <p className="text-xs text-muted mt-4">
              30-minute strategy call to discuss your specific needs. 
              No obligation, no sales pressure.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}