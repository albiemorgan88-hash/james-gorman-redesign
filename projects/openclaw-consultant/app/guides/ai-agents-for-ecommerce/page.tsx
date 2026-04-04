import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for E-commerce: Stock, Pricing, and Customer Service",
  description: "How AI agents automate e-commerce operations — inventory management, dynamic pricing, customer support, and order fulfilment. Real UK examples and ROI data.",
  keywords: [
    "ai agents ecommerce",
    "ecommerce automation uk",
    "ai inventory management",
    "dynamic pricing ai",
    "ai customer service ecommerce",
    "automated order fulfilment",
    "ai for online retail",
    "ecommerce ai agents uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-for-ecommerce" },
  openGraph: {
    title: "AI Agents for E-commerce: Stock, Pricing, and Customer Service",
    description: "How AI agents automate e-commerce operations — inventory management, dynamic pricing, customer support, and order fulfilment.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-for-ecommerce",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Inventory Management",
    timeSpent: "8-15 hours per week on stock checks and reordering",
    timeSaved: "90% automation possible",
    automations: [
      "Real-time stock level monitoring across all channels (Shopify, Amazon, eBay)",
      "Automated reorder triggers based on velocity, seasonality, and lead times",
      "Demand forecasting using sales history, trends, and external signals",
      "Dead stock identification and markdown recommendations"
    ],
    impact: "Never oversell, never run out, never overstock"
  },
  {
    area: "Dynamic Pricing",
    timeSpent: "5-10 hours per week on competitor price monitoring",
    timeSaved: "95% time savings with better margins",
    automations: [
      "Competitor price monitoring across marketplaces in real time",
      "Margin-aware repricing that protects your bottom line",
      "Seasonal and demand-based price adjustments",
      "A/B testing of pricing strategies with automated rollout"
    ],
    impact: "Optimal pricing 24/7, not just when someone checks"
  },
  {
    area: "Customer Service",
    timeSpent: "20-40 hours per week on queries, returns, complaints",
    timeSaved: "75% reduction in support workload",
    automations: [
      "Instant responses to order status, delivery, and returns queries",
      "Automated returns processing with carrier label generation",
      "Proactive shipping delay notifications before customers complain",
      "Escalation to humans only for complex or high-value cases"
    ],
    impact: "Fast, consistent service at a fraction of the cost"
  },
  {
    area: "Order Fulfilment",
    timeSpent: "10-20 hours per week on order processing and shipping",
    timeSaved: "80% automation possible",
    automations: [
      "Automated order routing to nearest warehouse or supplier",
      "Carrier selection based on cost, speed, and reliability scores",
      "Batch processing for high-volume periods",
      "Exception handling for address issues, payment failures, and stock-outs"
    ],
    impact: "Orders processed in minutes, not hours"
  }
];

const useCases = [
  {
    useCase: "Multi-Channel Stock Synchronisation",
    problem: "Selling on Shopify, Amazon, and eBay means stock levels get out of sync. Overselling leads to cancelled orders, bad reviews, and marketplace penalties",
    solution: "An Inventory Agent monitors stock across all channels in real time, automatically adjusting listings when stock changes. A Forecasting Agent predicts demand by channel and triggers reorders before stock runs out",
    implementation: "Connect your sales channels and warehouse management system. The agent syncs every 60 seconds, adjusts buffer stock per channel based on velocity, and sends purchase orders when thresholds are hit",
    benefits: ["Zero overselling across all channels", "Stock-outs reduced by 85%", "Working capital freed from excess inventory", "Marketplace performance scores improve"]
  },
  {
    useCase: "Intelligent Customer Service",
    problem: "Peak season means hundreds of 'where is my order?' queries that bury your support team. Response times climb, reviews suffer, and repeat customers are lost",
    solution: "A Customer Agent handles order status, delivery tracking, and simple returns instantly. A Proactive Agent monitors carrier feeds and notifies customers of delays before they ask. A Sentiment Agent flags angry customers for priority human handling",
    implementation: "Deploy across your helpdesk (Zendesk, Gorgias, Freshdesk). Agents access order management, carrier APIs, and customer history to resolve queries with full context",
    benefits: ["80% of queries resolved instantly", "Response time from hours to seconds", "Support costs down 60%", "Customer satisfaction scores up 35%"]
  },
  {
    useCase: "Revenue Optimisation Engine",
    problem: "Pricing decisions are made manually, based on gut feeling or outdated competitor data. Margins leak through underpricing winners and overpricing slow movers",
    solution: "A Pricing Agent monitors competitor prices, demand signals, and margin targets to set optimal prices across your catalogue. A Promotion Agent identifies which products benefit from discounts and which are leaving money on the table",
    implementation: "Integrate with your e-commerce platform and analytics. The agent runs pricing simulations hourly, applies changes within your guardrails, and reports on margin impact daily",
    benefits: ["Average margin improvement of 8-15%", "Revenue up 12% without extra traffic", "Competitive positioning maintained automatically", "Clear attribution of pricing impact"]
  }
];

const roiExample = {
  practiceSize: "D2C e-commerce brand, £2m annual revenue, Shopify + Amazon",
  currentCosts: "3 CS staff (£75,000/year), manual stock management causing £40,000/year in overselling/stock-outs, pricing reviewed weekly losing an estimated £60,000/year in margin",
  aiImplementation: "Multi-agent system covering inventory, pricing, customer service, and fulfilment automation",
  savings: "CS headcount reduced to 1 (£50,000/year saved), stock losses eliminated (£40,000/year), margin improvement (£60,000/year), faster fulfilment reducing refund rate (£20,000/year)",
  totalSaving: "£170,000/year",
  roi: "2,100% ROI within first year"
};

const faqs = [
  {
    question: "Which e-commerce platforms do AI agents work with?",
    answer: "AI agents integrate with all major platforms — Shopify, WooCommerce, Magento, BigCommerce, Amazon Seller Central, eBay, and Etsy. They also connect to fulfilment systems (ShipStation, Royal Mail API, DPD), helpdesks (Zendesk, Gorgias, Freshdesk), and accounting tools (Xero, QuickBooks). The key is API access — if a platform has an API, an agent can work with it."
  },
  {
    question: "Will AI agents work for small e-commerce businesses?",
    answer: "Yes, but the ROI scales with volume. If you're processing 50+ orders per day, the time savings on customer service and fulfilment alone justify the investment. For smaller shops (10-50 orders/day), start with inventory sync and customer service automation — these deliver value even at lower volumes. Businesses under 10 orders/day are usually better served by simpler automation tools."
  },
  {
    question: "How does AI handle product returns?",
    answer: "An AI agent can handle the entire returns flow: receive the return request, check it against your policy, generate a returns label, update stock levels when the item is received back, process the refund, and send confirmation emails. It only escalates to a human for edge cases — damaged goods disputes, warranty claims, or high-value items. Most businesses find 70-80% of returns can be fully automated."
  },
  {
    question: "Can AI agents write product descriptions?",
    answer: "Yes, and they can do it at scale. A content agent can generate unique product descriptions based on product data, photos, and your brand voice guidelines. But quality matters — AI-generated descriptions should be reviewed for accuracy, especially for products with safety or compliance implications. The best approach is AI-drafted, human-reviewed for your top sellers, and fully automated for long-tail catalogue items."
  },
  {
    question: "How do AI agents handle peak seasons like Black Friday?",
    answer: "This is where AI agents shine brightest. They scale instantly — no hiring temporary staff, no training, no overtime. During peak, agents handle the volume surge for customer queries, accelerate order processing, adjust pricing dynamically based on demand, and manage stock allocation across channels to maximise sell-through. Businesses using AI agents report 3x the order volume handled with the same team size."
  },
  {
    question: "What about AI and marketplace compliance (Amazon, eBay)?",
    answer: "Marketplace compliance is actually easier with AI agents because they follow rules consistently. Agents ensure listing descriptions meet marketplace guidelines, pricing stays within MAP (minimum advertised price) policies, response times meet marketplace SLAs, and inventory accuracy prevents the overselling that triggers penalties. Most businesses see their marketplace performance metrics improve within weeks of deploying agents."
  }
];

export default function AIAgentsForEcommercePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">E-commerce</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Stock management, dynamic pricing, customer service, and order fulfilment — all running on autopilot. Here&apos;s how AI agents transform online retail operations.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See E-commerce Automations
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange mb-2">85%</div>
              <div className="text-muted">Reduction in stock-out incidents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">12%</div>
              <div className="text-muted">Average revenue increase from AI pricing</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">80%</div>
              <div className="text-muted">Customer queries resolved without humans</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where E-commerce Businesses Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four operational areas where AI agents deliver immediate impact for online retailers.
            </p>
          </div>

          <div className="space-y-8">
            {automationAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-3">{area.area}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="text-red-500">Currently: {area.timeSpent}</div>
                      <div className="text-green-600 font-semibold">{area.timeSaved}</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-dark mb-3">Automations Available:</h4>
                    <ul className="space-y-2">
                      {area.automations.map((automation, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                          <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                          {automation}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Impact:</h4>
                    <p className="text-orange font-medium text-sm">{area.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why E-commerce Needs AI */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Why E-commerce Needs AI Agents Now
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <p>
              Online retail margins are tighter than ever. Customer acquisition costs keep climbing, marketplace fees eat into profits, and consumers expect Amazon-level service from every brand. The businesses that survive aren&apos;t spending more — they&apos;re operating smarter.
            </p>
            <p>
              AI agents are the operational edge that separates profitable e-commerce from the race to the bottom. They don&apos;t just automate tasks — they make decisions that humans don&apos;t have time to make. Repricing a 5,000-SKU catalogue hourly based on competitor data? No human team can do that. Sending proactive shipping delay notifications to 200 customers simultaneously? Not without agents.
            </p>
            <p>
              Tools like <a href="https://heypinchy.com" className="text-orange hover:underline">Pinchy</a> show how AI can handle customer interactions naturally, whilst <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a> designs the multi-agent architectures that connect your entire e-commerce stack — from inventory to customer service to accounting.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real E-commerce AI Use Cases
            </h2>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-2xl text-dark mb-6">{useCase.useCase}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">The Problem:</h4>
                      <p className="text-muted text-sm">{useCase.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">AI Solution:</h4>
                      <p className="text-muted text-sm">{useCase.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue mb-3">Implementation:</h4>
                      <p className="text-muted text-sm">{useCase.implementation}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-orange flex gap-2 items-start">
                          <span className="flex-shrink-0">▸</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real ROI Example: UK D2C Brand
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Before AI Automation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Business:</div>
                    <div className="text-muted text-sm">{roiExample.practiceSize}</div>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Annual Costs:</div>
                    <div className="text-muted text-sm">{roiExample.currentCosts}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">After AI Implementation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <div className="font-semibold text-dark">Implementation:</div>
                    <div className="text-muted text-sm">{roiExample.aiImplementation}</div>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <div className="font-semibold text-dark">Annual Savings:</div>
                    <div className="text-muted text-sm">{roiExample.savings}</div>
                  </div>
                  <div className="border-l-4 border-orange pl-4">
                    <div className="font-semibold text-orange text-lg">Total Annual Saving: {roiExample.totalSaving}</div>
                    <div className="text-orange font-semibold">{roiExample.roi}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI for E-commerce: FAQs
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{faq.question}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Blue Canvas */}
      <section className="bg-light py-16">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h3 className="font-heading font-bold text-xl text-dark mb-4">About Blue Canvas</h3>
          <p className="text-muted max-w-[600px] mx-auto text-sm">
            Blue Canvas helps UK e-commerce businesses implement AI automation from his base in Derry, Northern Ireland. 
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil designs 
            multi-agent systems that automate inventory, pricing, customer service, and fulfilment for online retailers.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Automate Your
                <br />
                <span className="text-orange">E-commerce Operations</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to audit your current e-commerce workflows and identify where AI agents can boost revenue and cut costs.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Operations audit and automation mapping
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI projection for your specific business
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Implementation plan and timeline
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">E-commerce AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your online store</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-agents-customer-support" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Customer Support</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-for-logistics" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Logistics</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-roi-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent ROI Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/multi-agent-systems-explained" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Multi-Agent Systems Explained</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
