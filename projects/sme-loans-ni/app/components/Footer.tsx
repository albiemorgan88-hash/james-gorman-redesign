import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏦</span>
              <span className="font-[family-name:var(--font-heading)] text-xl font-bold">
                SME Loans
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Helping UK businesses access the funding they need to grow. Fast,
              flexible merchant cash advances from £10k to £300k.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-4 text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* NI Office */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-4 text-white/80">
              Northern Ireland
            </h4>
            <p className="text-white/60 text-sm leading-relaxed">
              34 Altiskane
              <br />
              Strabane
              <br />
              BT82 8RW
            </p>
          </div>

          {/* Scotland Office */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-4 text-white/80">
              Scotland
            </h4>
            <p className="text-white/60 text-sm leading-relaxed">
              14 Albany Street
              <br />
              Edinburgh
              <br />
              EH1 2QB
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} SME Loans Limited. All rights
            reserved.
          </p>
          <p className="text-white/40 text-xs text-center sm:text-right">
            SME Loans Limited is a registered company. Merchant cash advances
            are not regulated by the FCA.
          </p>
        </div>
      </div>
    </footer>
  );
}
