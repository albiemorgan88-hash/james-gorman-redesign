import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-wall-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-spar-green to-wall-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">W</span>
              </div>
              <div>
                <span className="text-white font-display font-bold text-2xl">The Wall Group</span>
                <p className="text-gray-400 text-sm">At the Heart of the Community</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Belfast's fastest-growing independent convenience retail network. Serving communities 
              across Belfast and Newtownabbey with 12+ locations since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-spar-green rounded-full flex items-center justify-center transition-colors duration-300">
                <span className="text-white text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-wall-gold rounded-full flex items-center justify-center transition-colors duration-300">
                <span className="text-white text-sm font-bold">ig</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <span className="text-white text-sm font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-wall-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/stores" className="text-gray-300 hover:text-wall-gold transition-colors">
                  Our Stores
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-wall-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-wall-gold transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-wall-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Get in Touch</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Business Enquiries</p>
                <a href="mailto:marketing@wallgroup.co.uk" className="text-wall-gold hover:text-white transition-colors">
                  marketing@wallgroup.co.uk
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">General Enquiries</p>
                <a href="mailto:hello@wallgroup.co.uk" className="text-wall-gold hover:text-white transition-colors">
                  hello@wallgroup.co.uk
                </a>
              </div>
              <div className="mt-6">
                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                  <span>#BackinNorthBelfast</span>
                  <span>#BackinWestBelfast</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Partners */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-4">Our Brands</h4>
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 text-sm">
              <span className="font-semibold">SPAR</span>
              <span>•</span>
              <span className="font-semibold">EUROSPAR</span>
              <span>•</span>
              <span className="font-semibold">SUBWAY</span>
              <span>•</span>
              <span>POST OFFICE</span>
              <span>•</span>
              <span>GO FUEL</span>
              <span>•</span>
              <span>TEXACO</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} The Wall Group. All rights reserved. Building communities since 2008.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer