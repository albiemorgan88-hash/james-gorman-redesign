'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const StoresPage = () => {
  const [selectedStore, setSelectedStore] = useState<number | null>(null)

  const stores = [
    {
      name: "Landscape Filling Station",
      address: "135 Crumlin Road, Belfast",
      size: "5,000 sq ft",
      features: [
        "SPAR Store",
        "8-pump GO Fuel Station",
        "dailyDeli & Nugelato",
        "Subway Restaurant",
        "ATM Services"
      ],
      hours: "24 hours, 7 days a week",
      phone: "028 9074 1234",
      services: ["24/7 Shopping", "Fresh Food", "Hot Food", "Fuel", "ATM"],
      highlight: "24/7 Service",
      coordinates: "54.6055, -5.9547"
    },
    {
      name: "Flax EUROSPAR Ardoyne",
      address: "The Flax Centre, Ardoyne Avenue, Belfast",
      size: "7,800 sq ft",
      features: [
        "Community Supermarket",
        "Wall's Foodhall & Butchery",
        "FeedMe Deli",
        "Post Office Services",
        "Off Sales",
        "ATM Services"
      ],
      hours: "Mon-Sun: 7:00 AM - 10:00 PM",
      phone: "028 9074 5678",
      services: ["Fresh Meat", "Deli Counter", "Post Office", "Off License", "ATM"],
      highlight: "Community Hub",
      coordinates: "54.6167, -5.9436"
    },
    {
      name: "SPAR Ardoyne",
      address: "27-31 Ardoyne Road, Belfast",
      size: "3,500 sq ft",
      features: [
        "SPAR Store",
        "Subway Restaurant",
        "Post Office Services",
        "ATM Services"
      ],
      hours: "Mon-Sun: 7:00 AM - 10:00 PM",
      phone: "028 9074 9012",
      services: ["Convenience Shopping", "Hot Food", "Post Office", "ATM"],
      highlight: "Central Location",
      coordinates: "54.6178, -5.9425"
    },
    {
      name: "Rathcoole Filling Station",
      address: "42 Doagh Road, Newtownabbey",
      size: "4,200 sq ft",
      features: [
        "SPAR Store",
        "Daily Deli",
        "Texaco Fuel Station",
        "Vacuum & Air Machine",
        "ATM Services"
      ],
      hours: "Mon-Sun: 6:00 AM - 11:00 PM",
      phone: "028 9034 1234",
      services: ["Fuel", "Fresh Food", "Car Care", "Convenience", "ATM"],
      highlight: "Full Service",
      coordinates: "54.6889, -5.9547"
    },
    {
      name: "SPAR Whitewell Road",
      address: "95 Whitewell Road, Newtownabbey",
      size: "2,800 sq ft",
      features: [
        "Full SPAR Range",
        "Fresh Food Daily",
        "ATM Services"
      ],
      hours: "Mon-Sun: 7:00 AM - 10:00 PM",
      phone: "028 9034 5678",
      services: ["Convenience Shopping", "Fresh Food", "ATM"],
      highlight: "Neighborhood Store",
      coordinates: "54.6756, -5.9123"
    },
    {
      name: "Subway Fortwilliam",
      address: "551 Antrim Road, Belfast",
      size: "1,200 sq ft",
      features: [
        "Subway Restaurant",
        "Sit-in Dining (20 seats)",
        "Takeaway Service"
      ],
      hours: "Mon-Sun: 9:00 AM - 6:00 PM",
      phone: "028 9074 3456",
      services: ["Fresh Subs", "Sit-in Dining", "Takeaway"],
      highlight: "Dine-in Available",
      coordinates: "54.6256, -5.9123",
      note: "Formerly YoggieBerrie"
    }
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
            Our Store <span className="text-gradient">Network</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From 24-hour fuel stations to community supermarkets, discover our 12+ locations 
            across Belfast and Newtownabbey, each designed to serve your local community.
          </p>
          <div className="flex justify-center gap-4 text-spar-green font-semibold text-sm">
            <span>#BackinNorthBelfast</span>
            <span>#BackinWestBelfast</span>
          </div>
        </div>
      </section>

      {/* Store Finder */}
      <section className="py-16 bg-wall-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Find Your Local Store
            </h2>
            <div className="max-w-md mx-auto">
              <input 
                type="text" 
                placeholder="Enter postcode or area..."
                className="form-input text-center"
              />
            </div>
          </div>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['24 Hours', 'Fuel Station', 'Post Office', 'Subway', 'ATM', 'Fresh Food'].map((filter, index) => (
              <button 
                key={index}
                className="px-4 py-2 bg-wall-slate border border-gray-600 text-gray-300 rounded-full hover:bg-spar-green hover:text-white hover:border-spar-green transition-all duration-300 text-sm"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stores Grid */}
      <section className="py-20 bg-wall-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stores.map((store, index) => (
              <div 
                key={index} 
                className={`premium-card transition-all duration-500 overflow-hidden ${
                  selectedStore === index ? 'ring-2 ring-spar-green scale-[1.02]' : 'hover:scale-[1.01]'
                }`}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
                        {store.name}
                      </h3>
                      <p className="text-gray-400 text-lg mb-1">{store.address}</p>
                      <p className="text-wall-gold font-semibold">{store.size} Store</p>
                      {store.note && (
                        <p className="text-gray-500 text-sm italic mt-1">{store.note}</p>
                      )}
                    </div>
                    <span className="bg-spar-green text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                      {store.highlight}
                    </span>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {store.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-wall-gold rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {store.services.map((service, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-wall-dark text-gray-300 rounded-full text-xs border border-gray-600"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="border-t border-gray-700 pt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Opening Hours</p>
                        <p className="text-white font-semibold">{store.hours}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Phone</p>
                        <a href={`tel:${store.phone}`} className="text-spar-green hover:text-wall-gold transition-colors font-semibold">
                          {store.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button 
                      onClick={() => setSelectedStore(selectedStore === index ? null : index)}
                      className="btn-primary flex-1 text-center"
                    >
                      {selectedStore === index ? 'Hide Details' : 'View Details'}
                    </button>
                    <a 
                      href={`https://maps.google.com?q=${store.coordinates}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1 text-center"
                    >
                      Get Directions
                    </a>
                  </div>

                  {/* Expanded Details */}
                  {selectedStore === index && (
                    <div className="mt-6 pt-6 border-t border-gray-700 animate-fade-up">
                      <h4 className="font-display font-semibold text-xl text-white mb-4">Store Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-wall-gold mb-3">Available Services</h5>
                          <ul className="space-y-2">
                            {store.features.map((feature, idx) => (
                              <li key={idx} className="text-gray-300 flex items-center space-x-2">
                                <span className="text-spar-green">✓</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-wall-gold mb-3">Quick Info</h5>
                          <div className="space-y-2 text-sm">
                            <p><span className="text-gray-400">Store Size:</span> <span className="text-white">{store.size}</span></p>
                            <p><span className="text-gray-400">Location:</span> <span className="text-white">{store.address}</span></p>
                            <p><span className="text-gray-400">Contact:</span> <span className="text-white">{store.phone}</span></p>
                            {store.highlight === '24/7 Service' && (
                              <p><span className="text-spar-green font-semibold">🕐 Open 24 Hours</span></p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-wall-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              All Locations at a Glance
            </h2>
            <p className="text-gray-300 text-lg">Interactive map coming soon</p>
          </div>
          
          <div className="premium-card p-12 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-spar-green to-wall-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🗺️</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Interactive Store Locator
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our interactive map will help you find the nearest Wall Group location with 
              real-time opening hours, available services, and turn-by-turn directions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-spar-green text-white rounded-full">Belfast Area</span>
              <span className="px-4 py-2 bg-wall-gold text-wall-dark rounded-full">Newtownabbey</span>
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full">Ardoyne</span>
              <span className="px-4 py-2 bg-purple-600 text-white rounded-full">Crumlin Road</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-wall-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Services Across <span className="text-gradient">All Locations</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'SPAR Stores', count: '5 Locations', icon: '🏪' },
              { name: 'Fuel Stations', count: '3 Locations', icon: '⛽' },
              { name: 'Subway', count: '3 Restaurants', icon: '🥪' },
              { name: 'Post Office', count: '2 Locations', icon: '📮' },
              { name: 'ATM Services', count: '6 Locations', icon: '💳' },
              { name: 'Fresh Food', count: 'Daily Delivery', icon: '🥩' }
            ].map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-wall-charcoal to-wall-slate rounded-xl flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
                <h3 className="font-display font-semibold text-white mb-1">{service.name}</h3>
                <p className="text-gray-400 text-sm">{service.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-spar-green to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Questions About Our Stores?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Get in touch with our team for store-specific information, partnership opportunities, 
            or general enquiries about The Wall Group network.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@wallgroup.co.uk" className="bg-white text-spar-green hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Email Us
            </a>
            <a href="tel:028-9074-1234" className="border-2 border-white text-white hover:bg-white hover:text-spar-green px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default StoresPage