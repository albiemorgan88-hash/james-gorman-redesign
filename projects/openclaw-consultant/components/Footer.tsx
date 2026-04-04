export default function Footer() {
  return (
    <footer className="bg-navy text-white/50 py-14 border-t border-white/5">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="font-heading font-bold text-white text-lg mb-1.5">
              OpenClaw Consultant<span className="text-orange">.</span>
            </div>
            <p className="text-sm leading-relaxed">
              A service by{" "}
              <a
                href="https://bluecanvas.ai"
                target="_blank"
                rel="noopener"
                className="text-orange hover:text-orange-hover transition-colors duration-200"
              >
                Blue Canvas AI
              </a>{" "}
              · Derry, Northern Ireland
            </p>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#services" className="hover:text-white transition-colors duration-200">Services</a>
            <a href="#pricing" className="hover:text-white transition-colors duration-200">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
            <a href="tel:07849071946" className="hover:text-white transition-colors duration-200">07849 071946</a>
          </div>
        </div>
        <div className="border-t border-white/5 mt-10 pt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Blue Canvas AI Ltd. All rights reserved.
          <span className="block mt-1.5">Trade Careers: <a href="https://uktradejobs.com" target="_blank" rel="noopener" className="hover:text-white/50 transition-colors duration-200">uktradejobs.com</a></span>
        </div>
      </div>
    </footer>
  );
}
