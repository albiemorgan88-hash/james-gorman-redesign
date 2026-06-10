import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Data Analysis for SMEs",
  description: "Transform your business data with AI-powered analytics for UK SMEs. Convert Excel spreadsheets into actionable insights, automate reporting, and make data-driven decisions.",
  keywords: [
    "ai data analysis sme",
    "small business data analytics",
    "ai spreadsheet analysis", 
    "automated business reporting",
    "sme business intelligence",
    "data insights for small business",
    "ai excel automation",
    "uk sme analytics"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-data-analysis-for-smes" },
  openGraph: {
    title: "AI Data Analysis for SMEs",
    description: "Unlock hidden business insights with AI-powered data analysis for UK SMEs. Automate reporting, identify trends, and make data-driven decisions.",
    url: "https://openclawconsultant.co.uk/guides/ai-data-analysis-for-smes",
    type: "article",
  },
};

export default function AIDataAnalysisForSMEsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">SME Analytics</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Data Analysis for SMEs: <span className="text-orange">Spreadsheets to Insights</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Transform your business data with AI-powered analytics designed for UK SMEs. Convert Excel spreadsheets into actionable insights, automate reporting, and make confident data-driven decisions without needing a data science team.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                16 min read
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                Updated April 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-dark leading-relaxed mb-8">
              UK SMEs implementing AI data analysis see average decision-making speed improvements of 67% and identify 3-5 new business opportunities per month from previously hidden patterns in their data. Most are sitting on goldmines of insights trapped in spreadsheets.
            </p>
            
            <p className="text-muted-dark leading-relaxed mb-8">
              This comprehensive guide shows UK small and medium businesses exactly how to implement AI-powered data analysis without massive investment or technical expertise. Transform your existing data into competitive advantages.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">The SME Data Challenge</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">89%</div>
                <div className="text-muted-dark text-sm">SMEs use Excel for data</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">15hrs</div>
                <div className="text-muted-dark text-sm">Weekly reporting time</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H9v6H5V3H3v10zm0 8h8v-6H9v2H5v-2H3v6zm10 0h8V11h-2v6h-4v-6h-2v10zm0-12h8V3h-2v4h-4V3h-2v6z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">23%</div>
                <div className="text-muted-dark text-sm">Use data for decisions</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">£18k</div>
                <div className="text-muted-dark text-sm">Average hidden insights value</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200 mb-8">
              <h3 className="font-heading text-lg font-bold text-red-800 mb-4">Common SME Data Problems:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Data scattered across multiple spreadsheets</li>
                    <li>• Manual report compilation taking hours</li>
                    <li>• Missed trends and patterns in sales data</li>
                    <li>• Reactive decisions based on gut feeling</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Inconsistent data formats and standards</li>
                    <li>• No real-time visibility into performance</li>
                    <li>• Limited forecasting and planning capability</li>
                    <li>• Opportunities missed due to data blindness</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI Analytics Solutions for SMEs</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Intelligent Data Processing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">AI-Powered Features:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Automated data cleaning and standardisation</li>
                      <li>• Smart connection of disparate data sources</li>
                      <li>• Pattern recognition and anomaly detection</li>
                      <li>• Natural language query interfaces</li>
                      <li>• Predictive trend analysis and forecasting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Business Benefits:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• 85-95% reduction in report preparation time</li>
                      <li>• 3-5x faster insight discovery</li>
                      <li>• 40-60% improvement in forecast accuracy</li>
                      <li>• Real-time business performance visibility</li>
                      <li>• Automated alerts for critical changes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Key Analytics Areas for SMEs</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-border-light">
                    <h5 className="font-semibold text-dark mb-3">Sales & Revenue</h5>
                    <ul className="space-y-2 text-muted-dark text-xs">
                      <li>• Customer lifetime value analysis</li>
                      <li>• Sales pipeline forecasting</li>
                      <li>• Product performance trends</li>
                      <li>• Seasonal pattern identification</li>
                      <li>• Customer segmentation insights</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-border-light">
                    <h5 className="font-semibold text-dark mb-3">Operations</h5>
                    <ul className="space-y-2 text-muted-dark text-xs">
                      <li>• Inventory optimisation</li>
                      <li>• Supply chain efficiency</li>
                      <li>• Process bottleneck identification</li>
                      <li>• Quality control monitoring</li>
                      <li>• Resource allocation insights</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-border-light">
                    <h5 className="font-semibold text-dark mb-3">Financial</h5>
                    <ul className="space-y-2 text-muted-dark text-xs">
                      <li>• Cash flow forecasting</li>
                      <li>• Profitability analysis by segment</li>
                      <li>• Budget vs actual variance tracking</li>
                      <li>• Cost centre performance</li>
                      <li>• Financial health indicators</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">SME-Friendly Analytics Tools</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">No-Code Solutions:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Microsoft Power BI with AI features</li>
                      <li>• Tableau Public for visualisation</li>
                      <li>• Google Analytics Intelligence</li>
                      <li>• Zoho Analytics with ML insights</li>
                      <li>• Qlik Sense associative engine</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Implementation Benefits:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Quick setup (2-6 weeks)</li>
                      <li>• Budget-friendly pricing (£20-£200/month)</li>
                      <li>• No technical expertise required</li>
                      <li>• Scalable as business grows</li>
                      <li>• Strong community and support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">UK SME Analytics Success Stories</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-border-light">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Local Restaurant Chain</h3>
                    <p className="text-muted-dark text-sm">5-location family restaurant business in Yorkshire</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    £47k Annual Savings
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-2">Challenge:</h4>
                  <p className="text-muted-dark text-sm mb-4">Manual tracking of sales, inventory, and staff performance across locations. Weekly reporting took 12+ hours and decisions were reactive.</p>
                  
                  <h4 className="font-semibold text-dark mb-2">AI Solution:</h4>
                  <p className="text-muted-dark text-sm mb-4">Implemented Power BI with AI insights connecting POS data, inventory systems, and staff schedules for real-time dashboards</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Food Waste</div>
                    <div className="text-green-700 font-semibold text-sm">-31%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Staff Efficiency</div>
                    <div className="text-green-700 font-semibold text-sm">+18%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Revenue Growth</div>
                    <div className="text-green-700 font-semibold text-sm">+24%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Report Time</div>
                    <div className="text-green-700 font-semibold text-sm">12h → 30min</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-border-light">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Manufacturing SME</h3>
                    <p className="text-muted-dark text-sm">Specialist engineering components manufacturer, 45 employees</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    £83k Cost Reduction
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-2">Challenge:</h4>
                  <p className="text-muted-dark text-sm mb-4">Complex production data scattered across Excel sheets, difficulty predicting material needs, and reactive maintenance causing downtime</p>
                  
                  <h4 className="font-semibold text-dark mb-2">AI Solution:</h4>
                  <p className="text-muted-dark text-sm mb-4">Tableau with AI-powered predictive analytics for production planning, inventory optimisation, and equipment maintenance forecasting</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Inventory Costs</div>
                    <div className="text-green-700 font-semibold text-sm">-29%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Production Efficiency</div>
                    <div className="text-green-700 font-semibold text-sm">+22%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Equipment Downtime</div>
                    <div className="text-green-700 font-semibold text-sm">-67%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-muted mb-1">Forecast Accuracy</div>
                    <div className="text-green-700 font-semibold text-sm">+89%</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Implementation Roadmap for SMEs</h2>
            
            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Quick Start Process</h3>
                  <div className="space-y-3 text-muted-dark text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                      <span>Audit existing data sources and identify key questions you want answered</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                      <span>Start with one business area (sales, operations, or finance)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                      <span>Choose appropriate tool based on budget and complexity</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">4</div>
                      <span>Clean and standardise your data (most critical step)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">5</div>
                      <span>Build initial dashboards and train your team</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">6</div>
                      <span>Expand to other areas based on initial success</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-dark mb-3">Expert Support:</h4>
                    <div className="space-y-2 text-muted-dark text-sm">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas AI consultancy</a> for SME analytics strategy</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span>Connect workforce via <a href="https://uktradejobs.com" className="text-orange hover:text-orange-hover">UK Trade Jobs</a> platform</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Investment Tiers</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h5 className="font-medium text-green-800 mb-2">Starter (£500-£2K/year)</h5>
                      <p className="text-green-700 text-sm mb-2">Google Analytics Intelligence, basic Power BI, or Zoho Analytics</p>
                      <ul className="text-green-600 text-xs space-y-1">
                        <li>• Suitable for simple reporting needs</li>
                        <li>• Basic AI insights and automation</li>
                        <li>• 1-3 data sources</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h5 className="font-medium text-blue-800 mb-2">Growth (£2K-£10K/year)</h5>
                      <p className="text-blue-700 text-sm mb-2">Power BI Pro, Tableau Creator, or Qlik Sense Business</p>
                      <ul className="text-blue-600 text-xs space-y-1">
                        <li>• Advanced analytics and forecasting</li>
                        <li>• Multiple data source integration</li>
                        <li>• Team collaboration features</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <h5 className="font-medium text-purple-800 mb-2">Advanced (£10K+/year)</h5>
                      <p className="text-purple-700 text-sm mb-2">Enterprise BI + custom AI development</p>
                      <ul className="text-purple-600 text-xs space-y-1">
                        <li>• Custom AI models and algorithms</li>
                        <li>• Real-time streaming analytics</li>
                        <li>• Advanced predictive capabilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">SME Data Analytics FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What's the minimum data volume needed for AI analytics to be useful?</h3>
                <p className="text-muted-dark text-sm">
                  AI analytics can provide value with as little as 6-12 months of transactional data. Modern tools work well with small datasets (1,000+ records) and improve over time. Start with what you have and benefits grow as data accumulates.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How much should UK SMEs budget for AI-powered data analytics?</h3>
                <p className="text-muted-dark text-sm">
                  Budget varies by business size: micro businesses (1-10 employees): £500-£3K annually. Small (10-50): £3K-£15K. Medium (50-250): £15K-£50K. Include tools, data preparation, training, and initial consulting for realistic planning.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Can AI analytics work with data stored in Excel spreadsheets?</h3>
                <p className="text-muted-dark text-sm">
                  Yes, most modern BI tools excel at connecting to Excel files and can automatically clean, standardise, and enhance spreadsheet data. However, moving to proper databases or cloud storage improves performance and reliability as you scale.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Do I need technical expertise to implement analytics for my SME?</h3>
                <p className="text-muted-dark text-sm">
                  Modern no-code analytics tools are designed for business users. With basic Excel skills, you can create powerful dashboards and insights. Consider initial consulting for setup and training, then manage internally as competence grows.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How quickly can SMEs see ROI from AI analytics investments?</h3>
                <p className="text-muted-dark text-sm">
                  Most SMEs see initial value within 4-8 weeks through time savings and quick wins. Full ROI typically achieved in 3-9 months through better decision-making, cost reductions, and revenue opportunities. Start with high-impact, low-complexity use cases.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What data security considerations apply to SME analytics?</h3>
                <p className="text-muted-dark text-sm">
                  Ensure GDPR compliance, use cloud providers with UK data centres, implement role-based access controls, and maintain audit trails. Most reputable BI platforms include enterprise-grade security. Consider data anonymisation for sensitive information.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How do I choose between different analytics tools for my business?</h3>
                <p className="text-muted-dark text-sm">
                  Consider your data sources, team technical skills, budget, and growth plans. Power BI suits Microsoft-centric SMEs, Tableau excels at visualisation, Google Analytics Intelligence works for web-focused businesses. Start with trials before committing.
                </p>
              </div>
            </div>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Unlock Your <span className="text-orange">Hidden Data Insights</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a comprehensive data analytics assessment for your SME. I'll analyse your current data, identify opportunities, and create an implementation plan that delivers quick wins and long-term value.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get SME Analytics Assessment
          </a>
        </div>
      </section>

      {/* Contact Form */}
      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-agents-for-customer-support" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Customer Service Automation UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-booking-automation" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Appointment Booking for Business</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-surface">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Turn Your Data Into Competitive Advantage
            </h2>
            <p className="text-muted-dark text-lg">
              Book a consultation to discuss your data analytics needs and discover how AI can transform your business insights.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}