'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Stats Counter Component
const StatCounter = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [end, duration])

  return <span>{count}{suffix}</span>
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stores = [
    {
      name: "Landscape Filling Station",
      address: "135 Crumlin Road, Belfast",
      features: "5,000 sq ft SPAR Store • 8-pump GO Fuel Station • dailyDeli & Nugelato • Subway • ATM",
      hours: "24 hours, 7 days a week",
      highlight: "24/7"
    },
    {
      name: "Flax EUROSPAR Ardoyne",
      address: "The Flax Centre, Ardoyne Avenue, Belfast",
      features: "7,800 sq ft Community Supermarket • Wall's Foodhall & Butchery • FeedMe Deli & Post Office",
      hours: "Mon-Sun: 7:00 AM - 10:00 PM",
      highlight: "Community Hub"
    },
    {
      name: "SPAR Ardoyne",
      address: "27-31 Ardoyne Road, Belfast",
      features: "SPAR Store • Subway Restaurant • Post Office Services • ATM",
      hours: "Mon-Sun: 7:00 AM - 10:00 PM",
      highlight: "Central Location"
    },
    {
      name: "Rathcoole Filling Station",
      address: "42 Doagh Road, Newtownabbey",
      features: "SPAR & Daily Deli • Texaco Fuel Station • Vacuum & Air Machine • ATM",
      hours: "Mon-Sun: 6:00 AM - 11:00 PM",
      highlight: "Full Service"
    }
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #00703c 2px, transparent 2px),
                            radial-gradient(circle at 75% 75%, #d4a853 2px, transparent 2px)`,
            backgroundSize: '100px 100px',
            animation: 'float 20s ease-in-out infinite'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 hero-title">
              <span className="text-gradient">At the Heart</span>
              <br />
              <span className="text-white">of the Community</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto hero-subtitle">
              Belfast's fastest-growing independent convenience retail network. 
              <span className="text-wall-gold font-semibold"> Building communities since 2008.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/stores" className="btn-primary text-lg px-10 py-5">
                Explore Our Stores
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-10 py-5">
                Our Story
              </Link>
            </div>

            {/* Hashtags */}
            <div className="flex justify-center gap-4 text-spar-green font-semibold text-sm">
              <span>#BackinNorthBelfast</span>
              <span>#BackinWestBelfast</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-wall-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Brand Strip */}
      <section className="bg-wall-charcoal py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-4">Our Brands</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
            {['SPAR', 'EUROSPAR', 'SUBWAY', 'POST OFFICE', 'GO FUEL', 'TEXACO', 'WALL\'S FOODHALL'].map((brand, index) => (
              <div key={index} className="text-center">
                <div className="h-16 flex items-center justify-center">
                  <span className="text-white font-display font-bold text-lg opacity-80 hover:opacity-100 transition-opacity">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-spar-green to-emerald-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center stat-item">
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                <StatCounter end={12} suffix="+" />
              </div>
              <p className="text-emerald-100 font-medium">Locations</p>
            </div>
            <div className="text-center stat-item">
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                <StatCounter end={300} suffix="+" />
              </div>
              <p className="text-emerald-100 font-medium">Staff</p>
            </div>
            <div className="text-center stat-item">
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                <StatCounter end={5} suffix="M+" />
              </div>
              <p className="text-emerald-100 font-medium">Customers Annually</p>
            </div>
            <div className="text-center stat-item">
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                <StatCounter end={16} suffix="+" />
              </div>
              <p className="text-emerald-100 font-medium">Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Network Preview */}
      <section className="py-24 bg-wall-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Our Store Network
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From 24-hour fuel stations to community supermarkets, each location is designed 
              to serve your local community with convenience and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stores.map((store, index) => (
              <div key={index} className="premium-card p-8 hover:scale-105 transition-all duration-500 group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-wall-gold transition-colors">
                      {store.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{store.address}</p>
                  </div>
                  <span className="bg-spar-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {store.highlight}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{store.features}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-wall-gold font-semibold">{store.hours}</span>
                  <Link href="/stores" className="text-spar-green hover:text-wall-gold transition-colors font-medium">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/stores" className="btn-primary text-lg">
              View All Locations
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-br from-wall-dark to-wall-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-8">
                Building Communities <span className="text-gradient">Since 2008</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  From a <span className="text-wall-gold font-semibold">468 sq ft filling station</span> to 
                  Belfast's fastest-growing retail network, The Wall Group story is one of vision, 
                  determination, and community commitment.
                </p>
                
                <p>
                  Founded by former criminal barrister <span className="text-white font-semibold">Gavan Wall</span>, 
                  we've grown to serve communities across Belfast and Newtownabbey with 12+ locations, 
                  300+ staff, and 5 million customers annually.
                </p>
                
                <blockquote className="border-l-4 border-spar-green pl-6 py-4 bg-wall-charcoal/50 rounded-r-lg">
                  <p className="text-white font-medium italic text-xl">
                    "We're unique in that we're trying to build a business of scale in Belfast. 
                    We're not afraid of failure. We will achieve it."
                  </p>
                  <cite className="text-wall-gold font-semibold not-italic">— Gavan Wall, Founder</cite>
                </blockquote>
              </div>

              <div className="mt-8">
                <Link href="/about" className="btn-primary">
                  Read Our Full Story
                </Link>
              </div>
            </div>

            <div className="lg:pl-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="premium-card p-6 text-center">
                  <div className="text-3xl font-display font-bold text-spar-green mb-2">Cross-Community</div>
                  <p className="text-gray-300">Employment across Ardoyne, Rathcoole, and Lower Old Park</p>
                </div>
                <div className="premium-card p-6 text-center">
                  <div className="text-3xl font-display font-bold text-wall-gold mb-2">Partnership</div>
                  <p className="text-gray-300">Strategic alliance with Henderson Group / SPAR</p>
                </div>
                <div className="premium-card p-6 text-center">
                  <div className="text-3xl font-display font-bold text-blue-400 mb-2">Innovation</div>
                  <p className="text-gray-300">From criminal law to retail excellence</p>
                </div>
                <div className="premium-card p-6 text-center">
                  <div className="text-3xl font-display font-bold text-purple-400 mb-2">Growth</div>
                  <p className="text-gray-300">468 sq ft to 7,800 sq ft flagship stores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-wall-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Foodvenience <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              More than convenience stores — we're your neighborhood solution for food, fuel, and everyday essentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fresh Food Daily",
                description: "Wall's Foodhall & Butchery, FeedMe Delis, and dailyDeli offerings with local suppliers",
                icon: "🥩",
                color: "spar-green"
              },
              {
                title: "Fuel & Go",
                description: "GO Fuel and Texaco stations with premium fuels, car wash, and convenience shopping",
                icon: "⛽",
                color: "wall-gold"
              },
              {
                title: "Food Service",
                description: "Subway restaurants with dine-in options and Barista Bar coffee for the perfect break",
                icon: "🥪",
                color: "blue-500"
              },
              {
                title: "Postal Services",
                description: "Full Post Office services including parcels, banking, and government services",
                icon: "📮",
                color: "purple-500"
              },
              {
                title: "Off Sales",
                description: "TheFlacky Off-Licence and licensed premises for your favorite beverages",
                icon: "🍺",
                color: "amber-500"
              },
              {
                title: "ATM & Banking",
                description: "ATM services at all locations plus banking support through Post Office services",
                icon: "💳",
                color: "emerald-500"
              }
            ].map((service, index) => (
              <div key={index} className="premium-card p-8 text-center group hover:scale-105 transition-all duration-500">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-wall-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Teaser */}
      <section className="py-24 bg-gradient-to-r from-wall-gold to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-wall-dark mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            Be part of Belfast's most exciting retail growth story. We offer competitive salaries, 
            comprehensive training, staff discounts, and real career progression opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/careers" className="bg-wall-dark text-white hover:bg-wall-charcoal px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View Open Positions
            </Link>
            <span className="text-orange-100">or</span>
            <a href="mailto:hello@wallgroup.co.uk" className="border-2 border-wall-dark text-wall-dark hover:bg-wall-dark hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Email Your CV
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-wall-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-8">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-spar-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">📧</span>
                  </div>
                  <div>
                    <h3 className="text-white font-display font-semibold text-xl mb-2">Business Enquiries</h3>
                    <a href="mailto:marketing@wallgroup.co.uk" className="text-wall-gold hover:text-white transition-colors text-lg">
                      marketing@wallgroup.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-wall-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-wall-dark font-bold">💬</span>
                  </div>
                  <div>
                    <h3 className="text-white font-display font-semibold text-xl mb-2">General Enquiries</h3>
                    <a href="mailto:hello@wallgroup.co.uk" className="text-wall-gold hover:text-white transition-colors text-lg">
                      hello@wallgroup.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">📍</span>
                  </div>
                  <div>
                    <h3 className="text-white font-display font-semibold text-xl mb-2">Store Locations</h3>
                    <p className="text-gray-300">Belfast • Newtownabbey • Ardoyne</p>
                    <Link href="/stores" className="text-spar-green hover:text-wall-gold transition-colors">
                      View All Locations →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card p-8">
              <h3 className="font-display font-bold text-2xl text-white mb-6">Quick Contact</h3>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" className="form-input" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" className="form-input" />
                </div>
                <div>
                  <select className="form-input">
                    <option>Select Store</option>
                    <option>Landscape Filling Station</option>
                    <option>Flax EUROSPAR Ardoyne</option>
                    <option>SPAR Ardoyne</option>
                    <option>Rathcoole Filling Station</option>
                    <option>SPAR Whitewell Road</option>
                    <option>Subway Fortwilliam</option>
                  </select>
                </div>
                <div>
                  <textarea placeholder="Your Message" rows={4} className="form-input resize-none"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </>
  )
}