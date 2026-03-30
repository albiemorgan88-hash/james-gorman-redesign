'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const AboutPage = () => {
  const timeline = [
    {
      year: 2008,
      title: "The Beginning",
      description: "Former criminal barrister Gavan Wall purchases a 468 sq ft filling station, beginning the Wall Group journey.",
      milestone: "First Store",
      color: "spar-green"
    },
    {
      year: 2010,
      title: "Strategic Partnership",
      description: "Forms partnership with Henderson Group and SPAR brand, establishing foundation for growth.",
      milestone: "SPAR Partnership",
      color: "wall-gold"
    },
    {
      year: 2012,
      title: "Community Expansion",
      description: "Opens first community supermarket in Ardoyne, demonstrating commitment to cross-community employment.",
      milestone: "Community Focus",
      color: "blue-500"
    },
    {
      year: 2015,
      title: "Service Diversification",
      description: "Adds Post Office services, Subway restaurants, and fresh food counters across multiple locations.",
      milestone: "Service Growth",
      color: "purple-500"
    },
    {
      year: 2018,
      title: "Network Expansion",
      description: "Reaches 8+ locations across Belfast and Newtownabbey, serving diverse communities.",
      milestone: "8+ Stores",
      color: "emerald-500"
    },
    {
      year: 2020,
      title: "Pandemic Resilience",
      description: "Demonstrates business resilience during COVID-19, maintaining essential services for communities.",
      milestone: "Essential Services",
      color: "amber-500"
    },
    {
      year: 2023,
      title: "Premium Positioning",
      description: "Launches Wall's Foodhall & Butchery, elevating fresh food offerings and community dining.",
      milestone: "Premium Food",
      color: "rose-500"
    },
    {
      year: 2024,
      title: "Present Day",
      description: "12+ locations, 300+ staff, 5M+ customers annually - Belfast's fastest-growing retail network.",
      milestone: "Market Leader",
      color: "spar-green"
    }
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
                Our <span className="text-gradient">Story</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                From a 468 sq ft filling station to Belfast's fastest-growing independent 
                convenience retail network. This is the story of vision, determination, 
                and unwavering commitment to community.
              </p>
              <div className="flex gap-4 text-spar-green font-semibold text-sm">
                <span>#BackinNorthBelfast</span>
                <span>#BackinWestBelfast</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="premium-card p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-spar-green to-wall-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-white">🏪</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">Building Communities</h3>
                  <p className="text-wall-gold font-semibold">Since 2008</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="border border-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-spar-green">16+</div>
                    <div className="text-gray-400 text-sm">Years</div>
                  </div>
                  <div className="border border-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-wall-gold">468</div>
                    <div className="text-gray-400 text-sm">sq ft start</div>
                  </div>
                  <div className="border border-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">7,800</div>
                    <div className="text-gray-400 text-sm">sq ft flagship</div>
                  </div>
                  <div className="border border-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400">12+</div>
                    <div className="text-gray-400 text-sm">locations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-wall-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="premium-card p-8">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-wall-gold to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-wall-dark">⚖️</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">From Law to Retail</h3>
                  <p className="text-wall-gold">An Unexpected Journey</p>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-wall-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong className="text-white">Criminal Barrister:</strong> Established legal career in Belfast</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-spar-green rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong className="text-white">2008 Transition:</strong> Purchased first 468 sq ft filling station</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong className="text-white">Vision:</strong> Building a business of scale in Belfast</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong className="text-white">Community Impact:</strong> Cross-community employment focus</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-8">
                Meet <span className="text-gradient">Gavan Wall</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  The Wall Group story begins with an unconventional career change. 
                  <span className="text-white font-semibold"> Gavan Wall</span>, a successful 
                  criminal barrister in Belfast, made the bold decision in 2008 to leave 
                  law behind and enter the retail world.
                </p>
                
                <p>
                  Starting with a modest <span className="text-wall-gold font-semibold">468 sq ft filling station</span>, 
                  Gavan brought the same strategic thinking and attention to detail that made him 
                  successful in law to the convenience retail sector.
                </p>
                
                <blockquote className="border-l-4 border-spar-green pl-6 py-4 bg-wall-dark/50 rounded-r-lg">
                  <p className="text-white font-medium italic text-xl mb-4">
                    "We're unique in that we're trying to build a business of scale in Belfast. 
                    We're not afraid of failure. We will achieve it."
                  </p>
                  <cite className="text-wall-gold font-semibold not-italic text-lg">— Gavan Wall, Founder & CEO</cite>
                </blockquote>
                
                <p>
                  This vision has driven every expansion, every partnership, and every hiring 
                  decision. Today, The Wall Group stands as proof that with determination and 
                  community focus, ambitious goals can become reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-wall-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sixteen years of growth, community building, and retail innovation. 
              Each milestone represents our commitment to serving Belfast and Newtownabbey.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-spar-green to-wall-gold hidden lg:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="premium-card p-8 group hover:scale-105 transition-all duration-500">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <span className="text-white font-display font-bold text-xl">{item.year}</span>
                        </div>
                        <span className={`px-4 py-2 bg-${item.color}/20 text-${item.color} border border-${item.color}/30 rounded-full text-sm font-semibold`}>
                          {item.milestone}
                        </span>
                      </div>
                      
                      <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-wall-gold transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot (desktop only) */}
                  <div className="hidden lg:flex w-6 h-6 bg-wall-gold rounded-full border-4 border-wall-dark flex-shrink-0 z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-24 bg-gradient-to-br from-wall-dark to-wall-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Community <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              More than a business — we're committed to building stronger, more connected communities 
              across Belfast and Newtownabbey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="premium-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-spar-green to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🤝</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">Cross-Community Employment</h3>
              <p className="text-gray-300 leading-relaxed">
                Proud to provide employment opportunities across Ardoyne, Rathcoole, and 
                Lower Old Park — bringing communities together through shared purpose.
              </p>
            </div>

            <div className="premium-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-wall-gold to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🏪</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">Local Investment</h3>
              <p className="text-gray-300 leading-relaxed">
                Every store opening represents significant local investment, creating jobs 
                and supporting local suppliers and service providers.
              </p>
            </div>

            <div className="premium-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🌟</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">Essential Services</h3>
              <p className="text-gray-300 leading-relaxed">
                Beyond retail — Post Office services, fresh food, fuel, and banking support 
                provide essential infrastructure for local communities.
              </p>
            </div>
          </div>

          <div className="premium-card p-12 text-center">
            <h3 className="font-display font-bold text-3xl text-white mb-6">By the Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-display font-bold text-spar-green mb-2">300+</div>
                <p className="text-gray-300">Local Jobs Created</p>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-wall-gold mb-2">5M+</div>
                <p className="text-gray-300">Customers Served Annually</p>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-blue-400 mb-2">12+</div>
                <p className="text-gray-300">Community Locations</p>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-purple-400 mb-2">24/7</div>
                <p className="text-gray-300">Service Availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 bg-wall-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-8">
                Strategic <span className="text-gradient">Partnerships</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  The Wall Group's success is built on strong partnerships with established 
                  brands and suppliers who share our commitment to quality and community service.
                </p>
                
                <div className="premium-card p-6">
                  <h3 className="font-display font-bold text-xl text-white mb-4">Henderson Group / SPAR Partnership</h3>
                  <p className="text-gray-300 mb-4">
                    Our strategic alliance with Henderson Group provides access to SPAR and 
                    EUROSPAR branding, supply chain efficiency, and retail best practices.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="text-spar-green">✓</span>
                      <span>Premium SPAR & EUROSPAR locations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-spar-green">✓</span>
                      <span>Efficient supply chain management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-spar-green">✓</span>
                      <span>Retail innovation and best practices</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-spar-green">✓</span>
                      <span>Brand recognition and customer trust</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="premium-card p-8 text-center">
                <h3 className="font-display font-bold text-2xl text-white mb-6">Our Brand Partners</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { name: 'SPAR', description: 'Convenience retail excellence' },
                    { name: 'EUROSPAR', description: 'Community supermarkets' },
                    { name: 'SUBWAY', description: 'Fresh food restaurants' },
                    { name: 'POST OFFICE', description: 'Essential services' },
                    { name: 'GO FUEL', description: 'Premium fuel stations' },
                    { name: 'TEXACO', description: 'Trusted fuel brand' }
                  ].map((brand, index) => (
                    <div key={index} className="border border-gray-700 rounded-lg p-4 hover:border-spar-green transition-colors">
                      <h4 className="font-display font-semibold text-white mb-2">{brand.name}</h4>
                      <p className="text-gray-400 text-sm">{brand.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="premium-card p-8">
                <h3 className="font-display font-bold text-xl text-white mb-4">Quality Suppliers</h3>
                <p className="text-gray-300 mb-4">
                  Local and national suppliers providing fresh food, quality products, 
                  and reliable services to all our locations.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Fresh Produce', 'Local Butchers', 'Bakery Suppliers', 'Dairy Partners', 'Beverage Distributors'].map((supplier, index) => (
                    <span key={index} className="px-3 py-1 bg-wall-dark text-gray-300 border border-gray-600 rounded-full text-sm">
                      {supplier}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-24 bg-gradient-to-r from-spar-green to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-8">
            The Future is <span className="text-emerald-200">Bright</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-emerald-700/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-display font-bold text-xl text-white mb-4">Continued Expansion</h3>
              <p className="text-emerald-100">
                Strategic growth across Northern Ireland with new locations and enhanced services.
              </p>
            </div>
            
            <div className="bg-emerald-700/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/20">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-display font-bold text-xl text-white mb-4">Innovation Focus</h3>
              <p className="text-emerald-100">
                Technology integration and service innovation to better serve our communities.
              </p>
            </div>
            
            <div className="bg-emerald-700/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/20">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-display font-bold text-xl text-white mb-4">Sustainability</h3>
              <p className="text-emerald-100">
                Environmental responsibility and sustainable practices across all operations.
              </p>
            </div>
          </div>

          <blockquote className="text-2xl md:text-3xl font-display font-medium text-white mb-8 italic max-w-4xl mx-auto">
            "We're not just building stores — we're building the future of community retail in Northern Ireland."
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/careers" className="bg-white text-spar-green hover:bg-emerald-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Join Our Journey
            </a>
            <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-spar-green px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default AboutPage