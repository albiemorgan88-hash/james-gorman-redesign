'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    store: '',
    message: ''
  })

  const stores = [
    {
      name: "Landscape Filling Station",
      address: "135 Crumlin Road, Belfast BT14 7EA",
      phone: "028 9074 1234",
      hours: "24 hours, 7 days a week",
      services: ["SPAR Store", "GO Fuel Station", "Subway", "dailyDeli", "ATM"],
      highlight: "24/7 Service"
    },
    {
      name: "Flax EUROSPAR Ardoyne", 
      address: "The Flax Centre, Ardoyne Avenue, Belfast BT14 7GG",
      phone: "028 9074 5678",
      hours: "Mon-Sun: 7:00 AM - 10:00 PM",
      services: ["EUROSPAR", "Wall's Foodhall & Butchery", "Post Office", "FeedMe Deli", "Off Sales"],
      highlight: "Community Hub"
    },
    {
      name: "SPAR Ardoyne",
      address: "27-31 Ardoyne Road, Belfast BT14 7GJ",
      phone: "028 9074 9012", 
      hours: "Mon-Sun: 7:00 AM - 10:00 PM",
      services: ["SPAR Store", "Subway Restaurant", "Post Office", "ATM"],
      highlight: "Central Location"
    },
    {
      name: "Rathcoole Filling Station",
      address: "42 Doagh Road, Newtownabbey BT37 9QZ",
      phone: "028 9034 1234",
      hours: "Mon-Sun: 6:00 AM - 11:00 PM", 
      services: ["SPAR Store", "Texaco Fuel", "Daily Deli", "Car Care", "ATM"],
      highlight: "Full Service"
    },
    {
      name: "SPAR Whitewell Road",
      address: "95 Whitewell Road, Newtownabbey BT36 7ER",
      phone: "028 9034 5678",
      hours: "Mon-Sun: 7:00 AM - 10:00 PM",
      services: ["SPAR Store", "Fresh Food", "ATM"],
      highlight: "Neighborhood Store"
    },
    {
      name: "Subway Fortwilliam",
      address: "551 Antrim Road, Belfast BT15 4NA",
      phone: "028 9074 3456",
      hours: "Mon-Sun: 9:00 AM - 6:00 PM",
      services: ["Subway Restaurant", "Sit-in Dining", "Takeaway"],
      highlight: "Dine-in Available"
    }
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Whether you're a customer, supplier, or potential partner, we'd love to hear from you. 
            Contact us through any of the channels below or visit one of our 12+ locations.
          </p>
          <div className="flex gap-4 text-spar-green font-semibold text-sm">
            <span>#BackinNorthBelfast</span>
            <span>#BackinWestBelfast</span>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-wall-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="premium-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-spar-green to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">📧</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-wall-gold transition-colors">
                Business Enquiries
              </h3>
              <p className="text-gray-300 mb-6">
                Partnership opportunities, supplier enquiries, corporate accounts, and business development.
              </p>
              <a 
                href="mailto:marketing@wallgroup.co.uk" 
                className="text-spar-green hover:text-wall-gold transition-colors font-semibold text-lg"
              >
                marketing@wallgroup.co.uk
              </a>
            </div>

            <div className="premium-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-wall-gold to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">💬</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-wall-gold transition-colors">
                General Enquiries
              </h3>
              <p className="text-gray-300 mb-6">
                Customer service, store information, feedback, complaints, or general questions.
              </p>
              <a 
                href="mailto:hello@wallgroup.co.uk" 
                className="text-wall-gold hover:text-spar-green transition-colors font-semibold text-lg"
              >
                hello@wallgroup.co.uk
              </a>
            </div>

            <div className="premium-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">📞</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-wall-gold transition-colors">
                Phone Support
              </h3>
              <p className="text-gray-300 mb-6">
                Speak directly to our team or contact individual stores using the numbers below.
              </p>
              <a 
                href="tel:02890741234" 
                className="text-blue-400 hover:text-wall-gold transition-colors font-semibold text-lg"
              >
                028 9074 1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-wall-slate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Send us a <span className="text-gradient">Message</span>
            </h2>
            <p className="text-xl text-gray-300">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="premium-card p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    className="form-input"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Company (Optional)</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="form-input"
                    placeholder="028 1234 5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Subject *</label>
                  <select 
                    className="form-input"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Customer Service">Customer Service</option>
                    <option value="Business Partnership">Business Partnership</option>
                    <option value="Supplier Enquiry">Supplier Enquiry</option>
                    <option value="Career Opportunities">Career Opportunities</option>
                    <option value="Media & Press">Media & Press</option>
                    <option value="Store Feedback">Store Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Related Store</label>
                  <select 
                    className="form-input"
                    value={formData.store}
                    onChange={(e) => setFormData({...formData, store: e.target.value})}
                  >
                    <option value="">Not store-specific</option>
                    {stores.map((store, index) => (
                      <option key={index} value={store.name}>{store.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message *</label>
                <textarea 
                  className="form-input resize-none"
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>

              <div className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" required />
                <p className="text-gray-300 text-sm">
                  I agree to The Wall Group processing my personal data to respond to this enquiry. 
                  We will not share your information with third parties or use it for marketing without your consent.
                </p>
              </div>

              <button type="submit" className="btn-primary w-full text-lg py-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <section className="py-24 bg-wall-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Visit Our <span className="text-gradient">Stores</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              12+ locations across Belfast and Newtownabbey. Each store offers unique services 
              and opening hours to serve your local community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.map((store, index) => (
              <div key={index} className="premium-card p-8 hover:scale-105 transition-all duration-500 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-wall-gold transition-colors">
                    {store.name}
                  </h3>
                  <span className="bg-spar-green text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                    {store.highlight}
                  </span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <span className="text-gray-400 flex-shrink-0">📍</span>
                    <p className="text-gray-300 text-sm">{store.address}</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-gray-400 flex-shrink-0">🕒</span>
                    <p className="text-gray-300 text-sm">{store.hours}</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-gray-400 flex-shrink-0">📞</span>
                    <a href={`tel:${store.phone.replace(/\s+/g, '')}`} className="text-spar-green hover:text-wall-gold transition-colors text-sm">
                      {store.phone}
                    </a>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2 text-sm">Services:</h4>
                  <div className="flex flex-wrap gap-1">
                    {store.services.map((service, idx) => (
                      <span key={idx} className="px-2 py-1 bg-wall-charcoal text-gray-300 rounded text-xs border border-gray-600">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={`https://maps.google.com?q=${encodeURIComponent(store.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 text-center text-sm py-3"
                  >
                    Get Directions
                  </a>
                  <a 
                    href={`tel:${store.phone.replace(/\s+/g, '')}`}
                    className="btn-secondary flex-1 text-center text-sm py-3"
                  >
                    Call Store
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-wall-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="premium-card p-12 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-spar-green to-wall-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🗺️</span>
            </div>
            <h3 className="font-display font-bold text-3xl text-white mb-6">
              Interactive Store Map
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Our interactive map will show you the exact location of all Wall Group stores, 
              with real-time opening hours, services available, and turn-by-turn directions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-wall-slate rounded-lg p-4">
                <div className="text-2xl font-display font-bold text-spar-green mb-1">6</div>
                <p className="text-gray-400 text-sm">Stores</p>
              </div>
              <div className="bg-wall-slate rounded-lg p-4">
                <div className="text-2xl font-display font-bold text-wall-gold mb-1">3</div>
                <p className="text-gray-400 text-sm">Fuel Stations</p>
              </div>
              <div className="bg-wall-slate rounded-lg p-4">
                <div className="text-2xl font-display font-bold text-blue-400 mb-1">3</div>
                <p className="text-gray-400 text-sm">Subway Locations</p>
              </div>
              <div className="bg-wall-slate rounded-lg p-4">
                <div className="text-2xl font-display font-bold text-purple-400 mb-1">2</div>
                <p className="text-gray-400 text-sm">Post Offices</p>
              </div>
            </div>

            <p className="text-gray-500">
              Interactive map coming soon. In the meantime, use the store details above or 
              click "Get Directions" for individual locations.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-wall-slate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What are your typical opening hours?",
                answer: "Our hours vary by location. Landscape Filling Station is open 24/7, while most other stores open from 7:00 AM to 10:00 PM. Check individual store listings above for specific hours."
              },
              {
                question: "Do you offer delivery services?",
                answer: "Currently we focus on in-store service, but we're exploring delivery options. Contact your local store directly to discuss special arrangements for large orders or business accounts."
              },
              {
                question: "How can I become a supplier to The Wall Group?",
                answer: "We're always interested in working with quality local suppliers. Send your company information and product details to marketing@wallgroup.co.uk for consideration."
              },
              {
                question: "Do you have corporate accounts or bulk purchasing?",
                answer: "Yes, we work with local businesses and organizations for corporate accounts, bulk purchasing, and regular supply arrangements. Contact marketing@wallgroup.co.uk to discuss your requirements."
              },
              {
                question: "Are you planning to open new locations?",
                answer: "The Wall Group is Belfast's fastest-growing convenience retail network. We regularly evaluate new opportunities. For location-specific enquiries or partnership opportunities, contact our business development team."
              },
              {
                question: "How do I make a complaint or provide feedback?",
                answer: "We value all feedback. Contact the specific store directly, email hello@wallgroup.co.uk, or use the contact form above. All complaints are taken seriously and investigated promptly."
              }
            ].map((faq, index) => (
              <div key={index} className="premium-card p-8">
                <h3 className="font-display font-bold text-xl text-white mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Final CTA */}
      <section className="py-20 bg-gradient-to-r from-spar-green to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Follow us on social media for the latest news, promotions, and community updates 
            from across The Wall Group network.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="w-16 h-16 bg-emerald-700/50 hover:bg-white hover:text-spar-green rounded-full flex items-center justify-center transition-all duration-300 group">
              <span className="text-2xl group-hover:scale-110 transition-transform">📘</span>
            </a>
            <a href="#" className="w-16 h-16 bg-emerald-700/50 hover:bg-white hover:text-spar-green rounded-full flex items-center justify-center transition-all duration-300 group">
              <span className="text-2xl group-hover:scale-110 transition-transform">📷</span>
            </a>
            <a href="#" className="w-16 h-16 bg-emerald-700/50 hover:bg-white hover:text-spar-green rounded-full flex items-center justify-center transition-all duration-300 group">
              <span className="text-2xl group-hover:scale-110 transition-transform">💼</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@wallgroup.co.uk" className="bg-white text-spar-green hover:bg-emerald-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Email Us Now
            </a>
            <a href="/stores" className="border-2 border-white text-white hover:bg-white hover:text-spar-green px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Find Your Local Store
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-4 text-emerald-200 font-semibold text-sm">
            <span>#BackinNorthBelfast</span>
            <span>#BackinWestBelfast</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ContactPage