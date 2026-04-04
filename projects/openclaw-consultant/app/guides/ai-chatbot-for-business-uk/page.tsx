import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Chatbots for UK Businesses",
  description: "Complete guide to AI chatbots for UK businesses. Compare build vs buy options, implementation strategies, costs, and ROI for customer service automation.",
  keywords: [
    "ai chatbot uk business",
    "business chatbot implementation",
    "customer service ai chatbot", 
    "chatbot build vs buy",
    "ai customer support uk",
    "business chatbot strategy",
    "automated customer service",
    "uk business ai automation"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-chatbot-for-business-uk" },
  openGraph: {
    title: "AI Chatbots for UK Businesses",
    description: "Strategic guide to AI chatbot implementation for UK businesses. Cost analysis, feature comparison, and ROI guidance for automated customer service.",
    url: "https://openclawconsultant.co.uk/guides/ai-chatbot-for-business-uk",
    type: "article",
  },
};

export default function AIChatbotForBusinessUKPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Business Chatbots</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Chatbots for UK Businesses: <span className="text-orange">Build or Buy?</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Complete strategic guide to AI chatbot implementation for UK businesses. Learn when to build, when to buy, cost analysis, feature requirements, and ROI expectations for automated customer service that actually works.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                17 min read
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
              UK businesses implementing AI chatbots see average customer service cost reductions of 65% and customer satisfaction improvements of 38%. However, choosing between building custom solutions or buying ready-made platforms can make the difference between success and expensive failure.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              This comprehensive guide examines the build vs buy decision for UK businesses, including detailed cost analysis, feature requirements, implementation timelines, and practical advice for maximising chatbot ROI across different business contexts.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Build vs Buy: Strategic Decision Framework</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-orange/5 to-orange/10 rounded-xl p-6 border border-orange/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy">Buy Ready-Made Platform</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Commercial chatbot platforms with pre-built features, integrations, and industry templates. Faster deployment with proven functionality.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-medium text-green-800 text-sm mb-2">When to Buy:</h4>
                    <ul className="text-green-700 text-xs space-y-1">
                      <li>• Standard customer service needs</li>
                      <li>• Limited technical resources</li>
                      <li>• Need quick deployment (2-8 weeks)</li>
                      <li>• Budget under £50K annually</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h4 className="font-medium text-red-800 text-sm mb-2">Considerations:</h4>
                    <ul className="text-red-700 text-xs space-y-1">
                      <li>• Less customisation flexibility</li>
                      <li>• Ongoing subscription costs</li>
                      <li>• Vendor dependency</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue/5 to-blue/10 rounded-xl p-6 border border-blue/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy">Build Custom Solution</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Custom-developed chatbot tailored to specific business processes, brand voice, and complex integration requirements.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-medium text-green-800 text-sm mb-2">When to Build:</h4>
                    <ul className="text-green-700 text-xs space-y-1">
                      <li>• Complex business processes</li>
                      <li>• Unique compliance requirements</li>
                      <li>• Strong technical team</li>
                      <li>• Budget over £100K annually</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h4 className="font-medium text-red-800 text-sm mb-2">Considerations:</h4>
                    <ul className="text-red-700 text-xs space-y-1">
                      <li>• Longer development time (3-12 months)</li>
                      <li>• Higher upfront investment</li>
                      <li>• Ongoing maintenance responsibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">UK Chatbot Market Analysis</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">65%</div>
                <div className="text-slate-600 text-sm">Support cost reduction</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">24/7</div>
                <div className="text-slate-600 text-sm">Customer availability</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H9v6H5V3H3v10zm0 8h8v-6H9v2H5v-2H3v6zm10 0h8V11h-2v6h-4v-6h-2v10zm0-12h8V3h-2v4h-4V3h-2v6z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">89%</div>
                <div className="text-slate-600 text-sm">Query resolution rate</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">6 months</div>
                <div className="text-slate-600 text-sm">Average ROI timeline</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Essential Chatbot Features for UK Businesses</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Core Functionality:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Natural language understanding (NLU)</li>
                      <li>• Multi-channel deployment (web, WhatsApp, Teams)</li>
                      <li>• CRM and ticketing system integration</li>
                      <li>• Intelligent handoff to human agents</li>
                      <li>• Analytics and performance monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">UK-Specific Requirements:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• GDPR compliance and data protection</li>
                      <li>• British English language processing</li>
                      <li>• Local business hours and time zones</li>
                      <li>• Integration with UK payment systems</li>
                      <li>• Accessibility standards (WCAG 2.1)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Cost Analysis: Build vs Buy</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 font-medium text-slate-800">Cost Factor</th>
                        <th className="text-center py-3 font-medium text-orange">Buy Platform</th>
                        <th className="text-center py-3 font-medium text-blue">Build Custom</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-600">
                      <tr className="border-b">
                        <td className="py-3">Initial Setup</td>
                        <td className="py-3 text-center">£2K-£15K</td>
                        <td className="py-3 text-center">£50K-£200K</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Annual Platform/Maintenance</td>
                        <td className="py-3 text-center">£10K-£100K</td>
                        <td className="py-3 text-center">£30K-£150K</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Time to Deploy</td>
                        <td className="py-3 text-center">2-8 weeks</td>
                        <td className="py-3 text-center">3-12 months</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">3-Year Total</td>
                        <td className="py-3 text-center font-semibold text-orange">£35K-£315K</td>
                        <td className="py-3 text-center font-semibold text-blue">£140K-£650K</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">UK Business Chatbot Success Stories</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">E-commerce Retailer</h3>
                    <p className="text-slate-600 text-sm">Mid-sized online fashion retailer serving UK customers</p>
                    <p className="text-slate-500 text-xs mt-1">Solution: Buy Platform (Intercom + custom training)</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    340% ROI
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2">Challenge:</h4>
                  <p className="text-slate-600 text-sm mb-4">High volume of size, shipping, and return queries overwhelming customer service team, especially during sales periods</p>
                  
                  <h4 className="font-semibold text-slate-800 mb-2">Implementation:</h4>
                  <p className="text-slate-600 text-sm mb-4">Deployed chatbot handling FAQs, order tracking, and return requests with escalation to human agents for complex issues</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Query Resolution</div>
                    <div className="text-green-700 font-semibold text-sm">78% automated</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Response Time</div>
                    <div className="text-green-700 font-semibold text-sm">Instant vs 4 hours</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Customer Satisfaction</div>
                    <div className="text-green-700 font-semibold text-sm">4.3/5</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Implementation</div>
                    <div className="text-green-700 font-semibold text-sm">6 weeks</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Financial Services Firm</h3>
                    <p className="text-slate-600 text-sm">Independent financial adviser with complex compliance needs</p>
                    <p className="text-slate-500 text-xs mt-1">Solution: Build Custom (FCA compliance requirements)</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                    280% ROI
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2">Challenge:</h4>
                  <p className="text-slate-600 text-sm mb-4">Complex financial product queries requiring FCA-compliant responses and sophisticated client data integration</p>
                  
                  <h4 className="font-semibold text-slate-800 mb-2">Implementation:</h4>
                  <p className="text-slate-600 text-sm mb-4">Custom-built chatbot with regulatory compliance, client portal integration, and appointment booking functionality</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Compliance</div>
                    <div className="text-green-700 font-semibold text-sm">100% FCA aligned</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Client Queries</div>
                    <div className="text-green-700 font-semibold text-sm">-67% to advisers</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Appointment Booking</div>
                    <div className="text-green-700 font-semibold text-sm">+45%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm font-medium text-slate-500 mb-1">Implementation</div>
                    <div className="text-green-700 font-semibold text-sm">4 months</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Implementation Roadmap</h2>
            
            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Decision Process</h3>
                  <div className="space-y-3 text-slate-600 text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Audit current customer service volume and common queries</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Define budget, timeline, and success criteria</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Assess technical capabilities and integration requirements</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Evaluate compliance and data protection needs</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Compare platform options or development quotes</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Expert Support:</h4>
                    <div className="space-y-2 text-slate-600 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas AI consultancy</a> for chatbot strategy and implementation</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span>Connect with automation via <a href="https://heypinchy.com" className="text-orange hover:text-orange-hover">Pinchy</a> workflow platform</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Success Factors</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Clear Scope Definition</h4>
                      <p className="text-slate-600 text-sm">Start with specific use cases and expand gradually</p>
                    </div>
                    <div className="border-l-4 border-blue pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Quality Training Data</h4>
                      <p className="text-slate-600 text-sm">Invest time in conversation design and testing</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Human Handoff Strategy</h4>
                      <p className="text-slate-600 text-sm">Design seamless escalation for complex queries</p>
                    </div>
                    <div className="border-l-4 border-purple pl-4">
                      <h4 className="font-medium text-slate-800 mb-1">Continuous Improvement</h4>
                      <p className="text-slate-600 text-sm">Regular analysis and optimisation drive better results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Business Chatbot FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Should UK small businesses build or buy chatbot solutions?</h3>
                <p className="text-slate-600 text-sm">
                  Most UK SMEs should buy proven platforms like Intercom, Tidio, or Drift for faster ROI and lower risk. Build custom only if you have unique compliance needs, complex integrations, or budget over £100K annually for development and maintenance.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What's the typical ROI timeline for business chatbots?</h3>
                <p className="text-slate-600 text-sm">
                  Most UK businesses see positive ROI within 3-9 months. Buy platforms typically deliver faster returns (3-6 months) due to quicker implementation, whilst custom builds take longer (6-12 months) but offer higher long-term value for complex use cases.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How do chatbots handle British English and local business requirements?</h3>
                <p className="text-slate-600 text-sm">
                  Modern platforms include British English language models and can be trained on UK-specific terminology, business hours, and cultural nuances. Ensure your chosen solution supports GDPR compliance, local payment systems, and accessibility standards.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What percentage of customer queries can chatbots realistically handle?</h3>
                <p className="text-slate-600 text-sm">
                  Well-implemented chatbots handle 70-90% of routine queries automatically. Success depends on proper training data, clear conversation design, and intelligent handoff to humans for complex issues. Start with simple FAQs and expand gradually.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How do I ensure chatbot GDPR compliance for UK customers?</h3>
                <p className="text-slate-600 text-sm">
                  Choose platforms with EU data hosting, clear privacy policies, and consent management. Implement data minimisation, provide opt-out options, and ensure secure data handling. Document data processing activities and maintain audit trails for compliance.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What integration capabilities should I look for in chatbot platforms?</h3>
                <p className="text-slate-600 text-sm">
                  Essential integrations include your CRM (Salesforce, HubSpot), help desk (Zendesk, Freshdesk), website platform, and payment systems. Consider WhatsApp Business API for UK customers who prefer messaging over traditional chat.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How do I measure chatbot success and optimise performance?</h3>
                <p className="text-slate-600 text-sm">
                  Track resolution rate, customer satisfaction scores, response times, escalation rates, and cost per interaction. Use conversation analytics to identify improvement opportunities and regularly update training data based on real customer interactions.
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
            Transform Your <span className="text-orange">Customer Service</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a comprehensive chatbot strategy assessment. I'll analyse your customer service needs, recommend the optimal approach, and create an implementation plan that maximises ROI.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Chatbot Strategy Assessment
          </a>
        </div>
      </section>

      {/* Contact Form */}
      
      {/* Related Guides */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-customer-service-automation-uk" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Customer Service Automation UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-appointment-booking" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Appointment Booking for Business</h3>
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

      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Automate Customer Service Intelligently
            </h2>
            <p className="text-slate-600 text-lg">
              Book a consultation to discuss your chatbot requirements and get personalised build vs buy recommendations.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}