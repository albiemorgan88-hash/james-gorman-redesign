import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'OpenClaw Consulting Pricing',
  description: 'Professional OpenClaw setup and business automation services. From £497 one-time setup to £997/month managed automation. Transform your business with AI.',
  alternates: { canonical: 'https://openclawconsultant.co.uk/pricing' },
};

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            OpenClaw Consulting Pricing
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional AI agent setup and business automation services. 
            Choose the package that fits your needs and budget.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Consultation */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dark">Strategy Consultation</h3>
                <p className="text-muted-dark text-sm mt-2">Perfect for exploring possibilities</p>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-blue-500">£197</div>
                <div className="text-muted text-sm">2-hour session</div>
              </div>
              
              <ul className="text-sm text-muted-dark space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Business workflow analysis
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  AI automation roadmap
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ROI projections
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Technology recommendations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Written implementation plan
                </li>
              </ul>
              
              <Link href="#book-consultation" className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-400 transition-colors block text-center">
                Book Consultation
              </Link>
              
              <p className="text-xs text-muted mt-3">
                £197 credited toward full setup if booked within 30 days
              </p>
            </div>

            {/* Setup Sprint */}
            <div className="bg-white border-2 border-blue-400 rounded-xl p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-400 text-white text-xs px-3 py-1 rounded-full font-medium">
                  Most Popular
                </span>
              </div>
              
              <div className="mb-6 mt-3">
                <h3 className="text-xl font-bold text-dark">AI Setup Sprint</h3>
                <p className="text-muted-dark text-sm mt-2">Complete OpenClaw implementation</p>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-blue-500">£497</div>
                <div className="text-muted text-sm">One-time payment</div>
              </div>
              
              <ul className="text-sm text-muted-dark space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Full OpenClaw setup & config
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom agent personality
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  5 core automations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  3 platform integrations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Training & documentation
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  30-day support included
                </li>
              </ul>
              
              <Link href="#book-setup" className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-400 transition-colors block text-center">
                Start Setup Sprint
              </Link>
              
              <p className="text-xs text-muted mt-3">
                Delivered within 1 week
              </p>
            </div>

            {/* Business Automation */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dark">Business Automation</h3>
                <p className="text-muted-dark text-sm mt-2">Ongoing managed service</p>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-green-500">£997</div>
                <div className="text-muted text-sm">per month</div>
              </div>
              
              <ul className="text-sm text-muted-dark space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Everything in Setup Sprint
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited automations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Monthly optimization
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Performance monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Monthly strategy calls
                </li>
              </ul>
              
              <Link href="#book-automation" className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-400 transition-colors block text-center">
                Start Automation
              </Link>
              
              <p className="text-xs text-muted mt-3">
                Cancel anytime, no long-term contracts
              </p>
            </div>

            {/* Enterprise */}
            <div className="bg-white border-2 border-purple-400 rounded-xl p-6 text-center">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dark">Enterprise AI</h3>
                <p className="text-muted-dark text-sm mt-2">Custom solutions for large teams</p>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-purple-500">£2997</div>
                <div className="text-muted text-sm">setup + £497/month</div>
              </div>
              
              <ul className="text-sm text-muted-dark space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Multi-agent architecture
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Security & compliance
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Team training program
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Dedicated support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  SLA guarantees
                </li>
              </ul>
              
              <Link href="#contact-enterprise" className="w-full bg-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-400 transition-colors block text-center">
                Contact Sales
              </Link>
              
              <p className="text-xs text-muted mt-3">
                Custom pricing for 10+ users
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">Calculate Your ROI</h2>
            <p className="text-muted-dark max-w-2xl mx-auto">
              See how OpenClaw automation pays for itself through time savings and productivity gains.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-dark mb-4">Time Savings Scenarios</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-semibold text-blue-800">Email Management</h4>
                    <p className="text-sm text-muted-dark">Save 2 hours/day → £260/week value</p>
                  </div>
                  
                  <div className="border-l-4 border-green-400 pl-4">
                    <h4 className="font-semibold text-green-800">Content Creation</h4>
                    <p className="text-sm text-muted-dark">Save 5 hours/week → £325/week value</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-semibold text-purple-800">Data Analysis</h4>
                    <p className="text-sm text-muted-dark">Save 3 hours/week → £195/week value</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h4 className="font-semibold text-orange-800">Customer Support</h4>
                    <p className="text-sm text-muted-dark">Save 10 hours/week → £650/week value</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-dark mb-4">Payback Period</h3>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Setup Sprint (£497)</h4>
                    <p className="text-sm text-blue-600 mt-1">
                      Pays for itself in 1-3 weeks through basic automations
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">Business Automation (£997/month)</h4>
                    <p className="text-sm text-green-600 mt-1">
                      Break even with just 15 hours/month time savings
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Typical ROI</h4>
                    <p className="text-sm text-purple-600 mt-1">
                      300-500% return within 90 days for most businesses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Details */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">What's Included in Each Package</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Setup Sprint Details */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-blue-800 mb-4">AI Setup Sprint</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700">Core Setup</h4>
                  <ul className="text-blue-600 space-y-1 mt-1">
                    <li>• OpenClaw installation & hosting</li>
                    <li>• Custom agent personality design</li>
                    <li>• Security & access configuration</li>
                    <li>• Basic monitoring setup</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-700">Automations (Choose 5)</h4>
                  <ul className="text-blue-600 space-y-1 mt-1">
                    <li>• Email management & responses</li>
                    <li>• Calendar scheduling</li>
                    <li>• Content creation workflows</li>
                    <li>• Customer support automation</li>
                    <li>• Data collection & analysis</li>
                    <li>• Social media management</li>
                    <li>• Invoice & billing automation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-700">Integrations (Choose 3)</h4>
                  <ul className="text-blue-600 space-y-1 mt-1">
                    <li>• Gmail/Outlook</li>
                    <li>• Slack/Discord/Teams</li>
                    <li>• Google Workspace</li>
                    <li>• CRM systems</li>
                    <li>• Social media platforms</li>
                    <li>• E-commerce platforms</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Automation Details */}
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-green-800 mb-4">Business Automation</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700">Everything in Setup Sprint PLUS:</h4>
                  <ul className="text-green-600 space-y-1 mt-1">
                    <li>• Unlimited automation workflows</li>
                    <li>• Advanced AI model access</li>
                    <li>• Custom skill development</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-700">Ongoing Services</h4>
                  <ul className="text-green-600 space-y-1 mt-1">
                    <li>• Monthly strategy & optimization calls</li>
                    <li>• Proactive monitoring & maintenance</li>
                    <li>• New automation development</li>
                    <li>• Integration updates & fixes</li>
                    <li>• Performance reporting</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-700">Support</h4>
                  <ul className="text-green-600 space-y-1 mt-1">
                    <li>• Priority WhatsApp/email support</li>
                    <li>• 4-hour response time SLA</li>
                    <li>• Direct access to consultant</li>
                    <li>• Emergency support available</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Enterprise Details */}
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-purple-800 mb-4">Enterprise AI</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-purple-700">Custom Architecture</h4>
                  <ul className="text-purple-600 space-y-1 mt-1">
                    <li>• Multi-agent coordination</li>
                    <li>• Scalable infrastructure design</li>
                    <li>• Enterprise security controls</li>
                    <li>• Compliance framework setup</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-700">Team Services</h4>
                  <ul className="text-purple-600 space-y-1 mt-1">
                    <li>• Executive stakeholder management</li>
                    <li>• Department-specific training</li>
                    <li>• Change management support</li>
                    <li>• ROI tracking & reporting</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-700">Guarantees</h4>
                  <ul className="text-purple-600 space-y-1 mt-1">
                    <li>• 99.9% uptime SLA</li>
                    <li>• 1-hour response time</li>
                    <li>• Dedicated account manager</li>
                    <li>• Quarterly business reviews</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-dark mb-2">How quickly can you get started?</h3>
              <p className="text-muted-dark text-sm">
                Setup Sprint can begin within 48 hours of booking. Full implementation 
                typically takes 3-7 days depending on complexity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-dark mb-2">Do you provide training?</h3>
              <p className="text-muted-dark text-sm">
                Yes, all packages include comprehensive training so you can operate 
                and maintain your AI agent independently.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-dark mb-2">What if I'm not satisfied?</h3>
              <p className="text-muted-dark text-sm">
                We offer a 30-day satisfaction guarantee. If you're not seeing value, 
                we'll refund your setup fee and help you transition off the platform.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-dark mb-2">Can you integrate with our existing tools?</h3>
              <p className="text-muted-dark text-sm">
                Almost certainly. OpenClaw has native integrations for 50+ platforms, 
                and we can build custom integrations for proprietary systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free strategy consultation to discuss your specific needs 
            and see how OpenClaw automation can drive growth in your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#book-consultation" className="bg-blue-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-400 transition-colors">
              Book Free Strategy Call
            </Link>
            <Link href="/case-studies/seo-agency-250-month" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-dark transition-colors">
              See Case Studies
            </Link>
          </div>
          
          <p className="text-xs text-muted mt-4">
            30-minute call, no obligation, no sales pressure
          </p>
        </div>
      </section>
    </>
  );
}