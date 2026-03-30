'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-wall-dark/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-spar-green to-wall-gold rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-display font-bold text-xl">W</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-display font-bold text-2xl">The Wall Group</span>
              <p className="text-gray-400 text-xs">At the Heart of the Community</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-wall-gold transition-colors animated-underline font-medium">
              Home
            </Link>
            <Link href="/stores" className="text-white hover:text-wall-gold transition-colors animated-underline font-medium">
              Our Stores
            </Link>
            <Link href="/about" className="text-white hover:text-wall-gold transition-colors animated-underline font-medium">
              Our Story
            </Link>
            <Link href="/careers" className="text-white hover:text-wall-gold transition-colors animated-underline font-medium">
              Careers
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative">
              <span className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'
              }`}></span>
              <span className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'top-2'
              }`}></span>
              <span className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-wall-dark/98 backdrop-blur-md px-4 py-6 space-y-4">
          <Link 
            href="/" 
            className="block text-white hover:text-wall-gold transition-colors font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/stores" 
            className="block text-white hover:text-wall-gold transition-colors font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Stores
          </Link>
          <Link 
            href="/about" 
            className="block text-white hover:text-wall-gold transition-colors font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Story
          </Link>
          <Link 
            href="/careers" 
            className="block text-white hover:text-wall-gold transition-colors font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Careers
          </Link>
          <Link 
            href="/contact" 
            className="block btn-primary text-center mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation