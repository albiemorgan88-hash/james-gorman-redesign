import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw E-commerce Automation",
  description: "Comprehensive guide to automating e-commerce operations with OpenClaw. Learn order processing, inventory management, customer communication, and sales optimization.",
  keywords: [
    "openclaw ecommerce automation",
    "ecommerce order automation", 
    "shopify openclaw integration",
    "automated inventory management",
    "ecommerce customer service",
    "openclaw sales automation",
    "dropshipping automation",
    "ecommerce workflow automation"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-ecommerce-automation" },
  openGraph: {
    title: "OpenClaw E-commerce Automation",
    description: "Comprehensive guide to automating e-commerce operations with OpenClaw. Learn order processing, inventory management, and sales optimization.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-ecommerce-automation",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Order Processing & Fulfillment",
    description: "Complete automation of order lifecycle from placement to delivery",
    automationLevel: "95%",
    keyTasks: [
      "Automatic order validation and fraud detection",
      "Inventory allocation and stock updates",
      "Shipping label generation and carrier selection",
      "Order tracking and customer notifications",
      "Returns and refund processing"
    ],
    integrations: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "ShipStation"],
    roiImpact: "60% reduction in fulfillment costs"
  },
  {
    area: "Inventory Management",
    description: "Smart inventory tracking, forecasting, and supplier management",
    automationLevel: "90%",
    keyTasks: [
      "Real-time stock level monitoring across channels",
      "Automated reorder point calculations",
      "Supplier communication and purchase orders",
      "Inventory forecasting based on sales data",
      "Dead stock identification and clearance"
    ],
    integrations: ["TradeGecko", "Cin7", "inFlow", "Zoho Inventory"],
    roiImpact: "30% reduction in carrying costs"
  },
  {
    area: "Customer Communication",
    description: "Personalized customer journey automation and support",
    automationLevel: "85%",
    keyTasks: [
      "Welcome series and onboarding emails",
      "Abandoned cart recovery campaigns",
      "Post-purchase follow-up sequences",
      "Customer support and inquiry responses",
      "Review and feedback collection"
    ],
    integrations: ["Klaviyo", "Mailchimp", "Zendesk", "Intercom"],
    roiImpact: "25% increase in customer lifetime value"
  },
  {
    area: "Marketing & Sales Optimization",
    description: "Data-driven marketing automation and conversion optimization",
    automationLevel: "80%",
    keyTasks: [
      "Product page and SEO optimization",
      "Dynamic pricing based on market conditions",
      "Cross-sell and upsell recommendations",
      "A/B testing for conversion optimization",
      "Competitor price monitoring"
    ],
    integrations: ["Google Analytics", "Facebook Ads", "Google Ads", "Ahrefs"],
    roiImpact: "40% increase in conversion rates"
  }
];

const platformSpecifics = [
  {
    platform: "Shopify",
    strengths: ["Extensive app ecosystem", "Built-in APIs", "Easy integrations"],
    openclawIntegrations: [
      "Shopify Admin API for order and product management",
      "Webhook integration for real-time updates",
      "Shopify Flow for advanced workflow automation",
      "App ecosystem integration (Klaviyo, ReCharge, etc.)"
    ],
    automationPotential: "90%"
  },
  {
    platform: "WooCommerce",
    strengths: ["WordPress integration", "Flexible customization", "Cost effective"],
    openclawIntegrations: [
      "WooCommerce REST API integration",
      "WordPress database direct access",
      "Plugin ecosystem integration",
      "Custom field and meta data automation"
    ],
    automationPotential: "85%"
  },
  {
    platform: "Amazon FBA",
    strengths: ["Amazon's fulfillment network", "Prime eligibility", "Global reach"],
    openclawIntegrations: [
      "Amazon MWS/SP-API for inventory and orders",
      "FBA inventory management automation",
      "Advertising campaign optimization",
      "Review monitoring and response"
    ],
    automationPotential: "75%"
  }
];

export default function OpenClawEcommerceAutomationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">E-commerce Automation Guide</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Setting Up OpenClaw for
              <br />
              <span className="text-orange">E-commerce Automation</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Complete guide to automating your e-commerce operations. From order processing to customer communication, learn how to build a fully automated online store.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#automation"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Explore Automation Areas
              </a>
              <a
                href="/guides"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                ← All Guides
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Overview */}
      <section id="automation" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-8">
              Why E-commerce Needs Intelligent Automation
            </h2>
            <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-6">
              <p>
                Modern e-commerce operations involve dozens of repetitive tasks that consume valuable time and resources. OpenClaw transforms your online store into an automated revenue machine that operates efficiently around the clock.
              </p>
              <p>
                Unlike simple rule-based automation, OpenClaw agents understand context, make intelligent decisions, and handle exceptions. They can process orders, manage inventory, communicate with customers, and optimize marketing—all while learning from each interaction to improve performance.
              </p>
              <p>
                Most e-commerce businesses see 70-90% of their operational tasks automated within 2-3 months, leading to significant cost savings and improved customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Automation Areas */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Core E-commerce Automation Areas
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where OpenClaw delivers maximum impact for online businesses.
            </p>
          </div>

          <div className="space-y-12">
            {automationAreas.map((area, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <div className="flex items-start gap-6">
                  <div className="bg-orange text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <h3 className="font-heading font-bold text-xl text-dark">{area.area}</h3>
                      <div className="flex gap-4 text-sm">
                        <span className="text-green-600">Automation: {area.automationLevel}</span>
                        <span className="text-orange">{area.roiImpact}</span>
                      </div>
                    </div>
                    <p className="text-muted leading-relaxed mb-6">{area.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-dark mb-3">Automated Tasks:</h4>
                        <ul className="space-y-2">
                          {area.keyTasks.map((task, idx) => (
                            <li key={idx} className="text-muted text-sm flex gap-3">
                              <span className="text-orange mt-0.5">▸</span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-3">Key Integrations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.integrations.map((integration, idx) => (
                            <span key={idx} className="bg-orange/10 text-orange px-3 py-1 rounded-full text-sm">
                              {integration}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Specifics */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Platform-Specific Integration
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Tailored automation approaches for popular e-commerce platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platformSpecifics.map((platform, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-4">{platform.platform}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-2">Platform Strengths:</h4>
                  <ul className="space-y-1">
                    {platform.strengths.map((strength, idx) => (
                      <li key={idx} className="text-muted text-sm flex gap-2">
                        <span className="text-green-500">✓</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-2">OpenClaw Integration Points:</h4>
                  <ul className="space-y-1">
                    {platform.openclawIntegrations.map((integration, idx) => (
                      <li key={idx} className="text-muted text-sm flex gap-2">
                        <span className="text-orange">▸</span>
                        {integration}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted text-sm">Automation Potential:</span>
                    <span className="font-semibold text-green-600">{platform.automationPotential}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              E-commerce Automation Implementation Timeline
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              Phased approach to implementing comprehensive e-commerce automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                phase: "Week 1-2",
                title: "Foundation Setup", 
                tasks: ["Platform integration", "Basic order automation", "Customer notifications"]
              },
              {
                phase: "Week 3-4", 
                title: "Inventory & Fulfillment",
                tasks: ["Stock management", "Shipping automation", "Returns processing"]
              },
              {
                phase: "Week 5-6",
                title: "Customer Experience",
                tasks: ["Email sequences", "Support automation", "Review collection"]
              },
              {
                phase: "Week 7-8",
                title: "Optimization",
                tasks: ["Analytics setup", "A/B testing", "Performance tuning"]
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white/[0.03] border border-white/[0.06] rounded-box p-6">
                <div className="text-orange text-sm font-medium mb-2">{phase.phase}</div>
                <h3 className="font-heading font-bold text-lg text-white mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.tasks.map((task, idx) => (
                    <li key={idx} className="text-white/70 text-sm">• {task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      
      {/* Related Guides */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-skills-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Skills: Complete Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-cron-jobs" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Cron Jobs: Automation Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Automate Your
                <br />
                <span className="text-orange">E-commerce Operations</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your e-commerce automation opportunities and design a custom implementation plan.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">E-commerce Automation Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Discover your e-commerce automation potential</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}