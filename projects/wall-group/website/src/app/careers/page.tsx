'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const CareersPage = () => {
  const [selectedRole, setSelectedRole] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    location: '',
    message: '',
    cv: null
  })

  const roles = [
    {
      title: "Store Manager",
      location: "Multiple Locations",
      type: "Full-time",
      salary: "£28,000 - £35,000",
      description: "Lead a dynamic retail team in one of our busy stores. Perfect for experienced retail professionals looking to grow with Belfast's fastest-expanding network.",
      requirements: [
        "3+ years retail management experience",
        "Strong leadership and people skills",
        "Customer service excellence",
        "Cash handling and inventory management",
        "Flexibility to work across locations"
      ],
      benefits: [
        "Competitive salary + performance bonuses",
        "Management training program",
        "Career progression opportunities",
        "Staff discount across all locations",
        "Paid holidays + sick leave"
      ]
    },
    {
      title: "Assistant Store Manager",
      location: "Belfast & Newtownabbey",
      type: "Full-time",
      salary: "£22,000 - £28,000",
      description: "Support store operations and develop your management skills with comprehensive training. Ideal stepping stone to store management role.",
      requirements: [
        "1+ years retail experience",
        "Leadership potential",
        "Customer focused approach",
        "Reliable and flexible",
        "Cash handling experience preferred"
      ],
      benefits: [
        "Fast-track management development",
        "Comprehensive training program",
        "Regular progression reviews",
        "Staff discount",
        "Flexible scheduling"
      ]
    },
    {
      title: "Retail Team Member",
      location: "All Locations",
      type: "Full-time / Part-time",
      salary: "£10.50 - £12.00 per hour",
      description: "Join our customer-focused retail team. Perfect for those starting their retail career or looking for flexible work with a growing company.",
      requirements: [
        "Positive attitude and team player",
        "Customer service skills",
        "Reliable and punctual",
        "Flexibility for shifts including weekends",
        "Basic numeracy skills"
      ],
      benefits: [
        "Competitive hourly rate",
        "Flexible shift patterns",
        "Staff discount",
        "Training and development",
        "Friendly team environment"
      ]
    },
    {
      title: "Food Service Team Member",
      location: "Subway Locations",
      type: "Full-time / Part-time",
      salary: "£10.50 - £11.50 per hour",
      description: "Work in our Subway restaurants preparing fresh food and serving customers. Great for those passionate about food service and customer experience.",
      requirements: [
        "Food service experience preferred",
        "Strong hygiene standards",
        "Customer service excellence",
        "Ability to work in fast-paced environment",
        "Team player with positive attitude"
      ],
      benefits: [
        "Food handling training provided",
        "Subway brand training",
        "Staff meals included",
        "Flexible hours",
        "Career progression in food service"
      ]
    },
    {
      title: "Fuel Station Attendant",
      location: "Fuel Station Locations",
      type: "Full-time / Part-time",
      salary: "£10.50 - £12.00 per hour",
      description: "Operate our fuel stations and provide excellent customer service. Includes responsibility for fuel pumps, shop operations, and customer assistance.",
      requirements: [
        "Customer service focus",
        "Attention to safety procedures",
        "Cash handling skills",
        "Reliability for shift work",
        "Basic mechanical aptitude helpful"
      ],
      benefits: [
        "Safety training provided",
        "Varied work environment",
        "Premium rates for unsocial hours",
        "Staff discount",
        "Progression opportunities"
      ]
    },
    {
      title: "Fresh Food Specialist",
      location: "Wall's Foodhall & Butchery",
      type: "Full-time",
      salary: "£24,000 - £30,000",
      description: "Work in our premium fresh food operation, serving customers and maintaining high standards in our foodhall and butchery sections.",
      requirements: [
        "Food retail or butchery experience",
        "High hygiene standards",
        "Customer service excellence",
        "Knowledge of fresh food handling",
        "Physical ability for food preparation"
      ],
      benefits: [
        "Specialized food training",
        "Premium position salary",
        "Staff discount on fresh food",
        "Professional development",
        "Stable full-time position"
      ]
    }
  ]

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Market-leading rates with regular reviews and performance bonuses",
      icon: "💰"
    },
    {
      title: "Comprehensive Training",
      description: "Full induction program plus ongoing skills development",
      icon: "📚"
    },
    {
      title: "Career Progression",
      description: "Clear advancement paths with internal promotion priority",
      icon: "📈"
    },
    {
      title: "Staff Discounts",
      description: "Generous discounts across all Wall Group locations",
      icon: "🛍️"
    },
    {
      title: "Flexible Scheduling",
      description: "Work-life balance with flexible shift patterns where possible",
      icon: "⏰"
    },
    {
      title: "Team Environment",
      description: "Supportive, inclusive workplace culture across all locations",
      icon: "🤝"
    }
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
            Join Our <span className="text-gradient">Growing Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Be part of Belfast's most exciting retail growth story. We're looking for passionate 
            people to help us build stronger communities across Belfast and Newtownabbey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-wall-charcoal/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="text-3xl font-display font-bold text-spar-green mb-2">300+</div>
              <p className="text-gray-300">Team Members</p>
            </div>
            <div className="bg-wall-charcoal/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="text-3xl font-display font-bold text-wall-gold mb-2">12+</div>
              <p className="text-gray-300">Locations</p>
            </div>
            <div className="bg-wall-charcoal/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="text-3xl font-display font-bold text-blue-400 mb-2">16+</div>
              <p className="text-gray-300">Years Growth</p>
            </div>
          </div>

          <div className="flex gap-4 text-spar-green font-semibold text-sm">
            <span>#BackinNorthBelfast</span>
            <span>#BackinWestBelfast</span>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-wall-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Why Choose <span className="text-gradient">The Wall Group</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join a company that's committed to your growth, your community, and your success. 
              We offer more than just a job — we offer a career with purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="premium-card p-8 text-center group hover:scale-105 transition-all duration-500">
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-wall-gold transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-24 bg-wall-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Current <span className="text-gradient">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our current openings across Belfast and Newtownabbey. From retail to management, 
              we have opportunities for every skill level and career stage.
            </p>
          </div>

          <div className="space-y-6">
            {roles.map((role, index) => (
              <div key={index} className="premium-card overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="px-3 py-1 bg-spar-green text-white rounded-full font-semibold">
                          {role.location}
                        </span>
                        <span className="px-3 py-1 bg-wall-gold text-wall-dark rounded-full font-semibold">
                          {role.type}
                        </span>
                        <span className="px-3 py-1 bg-blue-600 text-white rounded-full font-semibold">
                          {role.salary}
                        </span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setSelectedRole(selectedRole === index ? null : index)}
                      className="btn-primary whitespace-nowrap"
                    >
                      {selectedRole === index ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {role.description}
                  </p>

                  {selectedRole === index && (
                    <div className="border-t border-gray-700 pt-8 animate-fade-up">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-display font-semibold text-xl text-white mb-4">Requirements</h4>
                          <ul className="space-y-3">
                            {role.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <span className="text-spar-green font-semibold">✓</span>
                                <span className="text-gray-300">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-display font-semibold text-xl text-white mb-4">Benefits</h4>
                          <ul className="space-y-3">
                            {role.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <span className="text-wall-gold font-semibold">★</span>
                                <span className="text-gray-300">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <a 
                          href="#apply" 
                          className="btn-primary flex-1 text-center"
                          onClick={() => setFormData({...formData, position: role.title})}
                        >
                          Apply for this Role
                        </a>
                        <a 
                          href="mailto:hello@wallgroup.co.uk" 
                          className="btn-secondary flex-1 text-center"
                        >
                          Ask Questions
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Stories */}
      <section className="py-24 bg-gradient-to-br from-wall-dark to-wall-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Our Team <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our team members about their experience working with The Wall Group 
              and growing their careers with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                position: "Store Manager, Flax EUROSPAR",
                story: "Started as part-time retail assistant 3 years ago, now managing our flagship store. The training and support here is incredible.",
                highlight: "Part-time to Manager in 3 years"
              },
              {
                name: "Michael D.",
                position: "Assistant Manager, Landscape",
                story: "The 24/7 environment taught me so much about operations. Great team, real career progression, and they invested in my development.",
                highlight: "Comprehensive 24/7 operations training"
              },
              {
                name: "Emma K.",
                position: "Food Service Specialist",
                story: "Love working in our Subway locations. Fast-paced, great customers, and the flexibility works perfectly with my studies.",
                highlight: "Perfect work-study balance"
              }
            ].map((story, index) => (
              <div key={index} className="premium-card p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-spar-green to-wall-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">👤</span>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white text-center">{story.name}</h3>
                  <p className="text-wall-gold text-center font-medium">{story.position}</p>
                </div>
                
                <blockquote className="text-gray-300 italic text-center mb-4 leading-relaxed">
                  "{story.story}"
                </blockquote>
                
                <div className="text-center">
                  <span className="px-4 py-2 bg-spar-green/20 text-spar-green border border-spar-green/30 rounded-full text-sm font-semibold">
                    {story.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 bg-wall-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to <span className="text-gradient">Apply</span>?
            </h2>
            <p className="text-xl text-gray-300">
              Send us your details and we'll get back to you within 48 hours. 
              We're excited to hear from you!
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
                  <label className="block text-white font-semibold mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    className="form-input"
                    placeholder="028 1234 5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Preferred Location</label>
                  <select 
                    className="form-input"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  >
                    <option value="">Any location</option>
                    <option value="Landscape Filling Station">Landscape Filling Station</option>
                    <option value="Flax EUROSPAR Ardoyne">Flax EUROSPAR Ardoyne</option>
                    <option value="SPAR Ardoyne">SPAR Ardoyne</option>
                    <option value="Rathcoole Filling Station">Rathcoole Filling Station</option>
                    <option value="SPAR Whitewell Road">SPAR Whitewell Road</option>
                    <option value="Subway Fortwilliam">Subway Fortwilliam</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Position of Interest</label>
                <select 
                  className="form-input"
                  value={formData.position}
                  onChange={(e) => setFormData({...formData, position: e.target.value})}
                >
                  <option value="">Select a position</option>
                  {roles.map((role, index) => (
                    <option key={index} value={role.title}>{role.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Tell us about yourself</label>
                <textarea 
                  className="form-input resize-none"
                  rows={4}
                  placeholder="Tell us about your experience, what interests you about The Wall Group, and why you'd be a great addition to our team..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">CV/Resume</label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-spar-green transition-colors">
                  <div className="text-4xl mb-4">📄</div>
                  <p className="text-gray-300 mb-2">Drag and drop your CV here, or</p>
                  <button type="button" className="text-spar-green hover:text-wall-gold font-semibold">
                    click to browse files
                  </button>
                  <p className="text-gray-500 text-sm mt-2">PDF, DOC, or DOCX files only</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" required />
                <p className="text-gray-300 text-sm">
                  I consent to The Wall Group storing and processing my personal data for recruitment purposes. 
                  We will not share your information with third parties without your consent.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" className="btn-primary flex-1">
                  Submit Application
                </button>
                <button type="button" className="btn-secondary flex-1">
                  Save Draft
                </button>
              </div>
            </form>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">Prefer to email your CV directly?</p>
            <a href="mailto:hello@wallgroup.co.uk" className="text-wall-gold hover:text-white transition-colors font-semibold">
              hello@wallgroup.co.uk
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-r from-spar-green to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-6">
            Questions About Careers?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Our HR team is here to help with any questions about roles, benefits, or the application process.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-emerald-700/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/20">
              <h3 className="font-display font-semibold text-xl text-white mb-4">General Enquiries</h3>
              <a href="mailto:hello@wallgroup.co.uk" className="text-emerald-200 hover:text-white transition-colors">
                hello@wallgroup.co.uk
              </a>
            </div>
            
            <div className="bg-emerald-700/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/20">
              <h3 className="font-display font-semibold text-xl text-white mb-4">Store Enquiries</h3>
              <p className="text-emerald-200">Visit any of our 12+ locations to speak with a manager</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default CareersPage