export default function Footer() {
  return (
    <footer className="bg-navy text-white/50 py-12 border-t border-white/5">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-heading font-bold text-white text-lg mb-1">
              OpenClaw Consultant<span className="text-orange">.</span>
            </div>
            <p className="text-sm">
              A service by{" "}
              <a
                href="https://bluecanvas.ai"
                target="_blank"
                rel="noopener"
                className="text-orange hover:text-orange-hover transition-colors"
              >
                Blue Canvas AI
              </a>{" "}
              · Derry, Northern Ireland
            </p>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="tel:07935217762" className="hover:text-white transition-colors">07935 217762</a>
          </div>
        </div>
        <div className="border-t border-white/5 mt-8 pt-6 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Blue Canvas AI Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
