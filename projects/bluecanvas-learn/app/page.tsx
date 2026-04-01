import Link from 'next/link';
import { guides } from '@/lib/guides';

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#1b1464] to-[#2a1f7a] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Guides for UK Businesses</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">Free, practical guides on using artificial intelligence to grow your business. No jargon, no hype — just actionable insights from <a href="https://www.bluecanvas.ai" className="text-[#ff6b35] hover:underline">Blue Canvas AI</a>.</p>
          <a href="https://www.bluecanvas.ai/#book" className="inline-block bg-[#ff6b35] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e55a2b] transition">Book a Free AI Consultation →</a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#ff6b35] transition">
              <span className="text-xs font-medium text-[#ff6b35] uppercase tracking-wide">{guide.category}</span>
              <h2 className="text-lg font-bold text-[#1b1464] mt-2 mb-3 group-hover:text-[#ff6b35] transition">{guide.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{guide.excerpt}</p>
              <span className="inline-block mt-4 text-sm text-[#ff6b35] font-medium">Read guide →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#ff6b35] to-[#e55a2b] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore AI for Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">Book a free 15-minute consultation with Blue Canvas. We'll help you understand what AI can do for your specific situation.</p>
          <a href="https://www.bluecanvas.ai/#book" className="inline-block bg-white text-[#ff6b35] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">Book Free Consultation →</a>
        </div>
      </section>
    </div>
  );
}
