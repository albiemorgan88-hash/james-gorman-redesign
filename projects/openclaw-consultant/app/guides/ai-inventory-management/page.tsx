import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Inventory Management: Reduce Waste and Stockouts | OpenClaw",
  description: "How AI inventory management reduces waste by 30% and stockouts by 50% for UK businesses. Demand forecasting, automated reordering, and supply chain optimisation.",
  keywords: [
    "ai inventory management",
    "inventory automation uk",
    "ai demand forecasting",
    "reduce stockouts ai",
    "inventory optimisation",
    "ai stock management",
    "supply chain ai uk",
    "automated inventory control"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-inventory-management" },
  openGraph: {
    title: "AI Inventory Management: Reduce Waste and Stockouts | OpenClaw",
    description: "Complete guide to AI inventory management for UK businesses. Reduce waste, prevent stockouts, and optimise supply chains with intelligent automation.",
    url: "https://openclawconsultant.co.uk/guides/ai-inventory-management",
    type: "article",
  },
};

export default function AIInventoryManagementPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Inventory AI</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Inventory Management: <span className="text-orange">Reduce Waste and Stockouts</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              UK businesses lose an estimated £1.6 billion annually to overstocking and stockouts. AI inventory management doesn&apos;t just count stock — it predicts demand, optimises ordering, and eliminates the guesswork that leads to waste. Here&apos;s how it works in practice.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                14 min read
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
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Inventory management is a balancing act that most businesses get wrong. Too much stock ties up cash and leads to waste. Too little means lost sales and frustrated customers. Traditional approaches rely on historical averages and gut feel — AI replaces this with data-driven precision that adapts to real-world conditions in real time.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether you&apos;re running a restaurant, retail shop, e-commerce store, or manufacturing business, AI inventory tools are now accessible and affordable for UK SMEs. This guide covers the practical applications, costs, and implementation steps.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">The Problem with Traditional Inventory</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">30%</div>
                <div className="text-slate-600 text-sm">Waste reduction with AI</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">50%</div>
                <div className="text-slate-600 text-sm">Fewer stockouts</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">20%</div>
                <div className="text-slate-600 text-sm">Working capital freed</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">95%+</div>
                <div className="text-slate-600 text-sm">Forecast accuracy</div>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Spreadsheet-based inventory management fails because it can&apos;t account for the complexity of real demand. Seasonal patterns, weather effects, promotional impacts, competitor activity, supply chain delays, and market trends all influence what you need to stock. AI processes all of these signals simultaneously to produce forecasts that are dramatically more accurate than human estimation.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI Inventory Capabilities</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">1. Demand Forecasting</h3>
                <p className="text-slate-600 text-sm mb-4">
                  The foundation of smart inventory management. AI models analyse years of sales data, seasonal patterns, weather forecasts, local events, and economic indicators to predict what you&apos;ll sell, when, and how much. Accuracy levels of 90-97% are standard, compared to 60-70% for manual forecasting.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Signals Analysed:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Historical sales data and trends</li>
                      <li>• Seasonal and day-of-week patterns</li>
                      <li>• Weather forecasts (huge for food, retail, events)</li>
                      <li>• Local events and school holidays</li>
                      <li>• Promotional calendar impact</li>
                      <li>• Economic indicators and consumer confidence</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Industry Applications:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Restaurants: predict covers and dish demand daily</li>
                      <li>• Retail: anticipate seasonal stock needs months ahead</li>
                      <li>• E-commerce: forecast trending products and adjust stock</li>
                      <li>• Manufacturing: align production with predicted orders</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">2. Automated Reordering</h3>
                <p className="text-slate-600 text-sm mb-4">
                  AI doesn&apos;t just tell you what to order — it handles the ordering process. When stock drops below dynamically calculated thresholds (which adjust based on demand forecasts and lead times), the system generates purchase orders or sends them directly to suppliers.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Smart Reordering:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Dynamic reorder points based on predicted demand</li>
                      <li>• Lead time variability built into calculations</li>
                      <li>• Supplier performance scoring</li>
                      <li>• Multi-supplier sourcing optimisation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Cost Optimisation:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Bulk discount vs storage cost trade-offs</li>
                      <li>• Delivery consolidation to reduce shipping costs</li>
                      <li>• Cash flow-aware ordering schedules</li>
                      <li>• Price comparison across suppliers</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">3. Waste Prevention and Perishable Management</h3>
                <p className="text-slate-600 text-sm mb-4">
                  For food businesses, healthcare, and any industry with perishable goods, AI tracks expiry dates, predicts consumption rates, and triggers markdowns or transfers before products expire. UK food businesses using AI waste management report 25-40% reductions in food waste.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Waste Reduction:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Expiry date tracking with automatic alerts</li>
                      <li>• Dynamic markdown pricing before expiry</li>
                      <li>• FIFO (first in, first out) enforcement</li>
                      <li>• Shelf-life prediction based on storage conditions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Reporting:</h4>
                    <ul className="space-y-1 text-slate-600 text-xs">
                      <li>• Waste categorisation and root cause analysis</li>
                      <li>• Cost of waste tracking and trending</li>
                      <li>• Supplier quality scoring based on shelf life</li>
                      <li>• Environmental impact reporting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Cost and ROI</h2>
            
            <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-medium text-slate-800">Business Size</th>
                      <th className="text-center py-3 font-medium text-orange">Monthly Cost</th>
                      <th className="text-center py-3 font-medium text-blue">Annual Saving</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b">
                      <td className="py-3">Small (1-2 locations)</td>
                      <td className="py-3 text-center">£100-£300</td>
                      <td className="py-3 text-center">£5,000-£20,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Medium (3-10 locations)</td>
                      <td className="py-3 text-center">£300-£1,000</td>
                      <td className="py-3 text-center">£20,000-£100,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Large (10+ locations / warehouse)</td>
                      <td className="py-3 text-center">£1,000-£5,000</td>
                      <td className="py-3 text-center">£100,000-£500,000+</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Typical ROI</td>
                      <td className="py-3 text-center font-semibold text-orange" colSpan={2}>5-15× return within 6 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">Expert Support</h3>
              <div className="space-y-2 text-slate-600 text-sm">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                  <span><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas</a> helps UK businesses implement AI inventory management that integrates with existing POS, ERP, and supply chain systems.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                  <span>Automate supplier communications and reordering with <a href="https://heypinchy.com" className="text-orange hover:text-orange-hover">Pinchy</a> workflow automation.</span>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI Inventory Management FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Does AI inventory work for small businesses with limited data?</h3>
                <p className="text-slate-600 text-sm">
                  Yes, though results improve with more data. Even 6-12 months of sales history gives AI enough to outperform manual forecasting. Modern tools also use industry benchmarks and external data sources to supplement limited historical data. You don&apos;t need to be Tesco to benefit.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Can AI integrate with my existing EPOS or ERP system?</h3>
                <p className="text-slate-600 text-sm">
                  Most AI inventory tools integrate with common UK systems including Lightspeed, Square, Vend, Shopify, Xero, Sage, and SAP. Integration typically takes 1-4 weeks. If your system has an API, it can almost certainly connect. For older systems without APIs, data export/import workflows bridge the gap.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How does AI handle unexpected demand spikes?</h3>
                <p className="text-slate-600 text-sm">
                  AI models monitor real-time sales velocity against predictions and trigger alerts when demand exceeds forecasts. They can automatically adjust reorder quantities and bring forward purchase orders. For viral or completely unpredictable events, the AI learns from the spike and incorporates it into future models.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Is AI inventory management suitable for restaurants and food businesses?</h3>
                <p className="text-slate-600 text-sm">
                  Absolutely — this is one of the highest-impact applications. AI predicts daily covers, forecasts ingredient needs, manages perishable stock, and reduces food waste. UK restaurants using AI inventory management report 25-40% waste reductions and significant improvements in food cost percentages.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What about multi-location inventory management?</h3>
                <p className="text-slate-600 text-sm">
                  AI excels at multi-location inventory. It can optimise stock levels per location based on local demand patterns, facilitate inter-store transfers to prevent waste, and centralise ordering for bulk discounts. Each location gets tailored stock levels whilst the business benefits from centralised visibility and purchasing power.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How quickly can we see results from AI inventory tools?</h3>
                <p className="text-slate-600 text-sm">
                  Waste reduction is typically visible within the first month. Improved stock availability takes 2-3 months as the AI refines its demand models. Full working capital improvements and cost savings usually materialise at the 3-6 month mark. The longer the system runs, the more accurate and valuable it becomes.
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
            Stop Wasting <span className="text-orange">Stock and Money</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a free inventory efficiency assessment. We&apos;ll analyse your current waste and stockout rates and show you how AI can optimise your supply chain.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Your Free Inventory Assessment
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              AI-Powered Inventory Management
            </h2>
            <p className="text-slate-600 text-lg">
              Book a consultation to discuss how AI can optimise your inventory and reduce waste.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
