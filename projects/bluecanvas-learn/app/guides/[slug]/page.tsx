import { Metadata } from 'next';
import Link from 'next/link';
import { guides } from '@/lib/guides';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return { title: 'Not Found' };
  return { title: guide.metaTitle, description: guide.metaDescription };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const related = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-12">
        <article className="lg:col-span-2">
          <span className="text-xs font-medium text-[#ff6b35] uppercase tracking-wide">{guide.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1b1464] mt-2 mb-6">{guide.title}</h1>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: guide.content }} />

          {guide.faqs.length > 0 && (
            <div className="mt-12 border-t pt-8">
              <h2 className="text-2xl font-bold text-[#1b1464] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {guide.faqs.map((faq, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-[#1b1464] mb-2">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>

        <aside className="space-y-8">
          <div className="bg-gradient-to-br from-[#1b1464] to-[#2a1f7a] text-white rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">Free AI Consultation</h3>
            <p className="text-sm text-gray-300 mb-4">Not sure where to start with AI? Book a free 15-minute call with Blue Canvas.</p>
            <a href="https://www.bluecanvas.ai/#book" className="block text-center bg-[#ff6b35] text-white px-6 py-3 rounded-full font-medium hover:bg-[#e55a2b] transition">Book Now →</a>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-[#1b1464] mb-4">Related Guides</h3>
            <div className="space-y-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/guides/${r.slug}`} className="block text-sm text-gray-700 hover:text-[#ff6b35] transition">
                  {r.title} →
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-[#1b1464] mb-3">AI Audit — £750</h3>
            <p className="text-sm text-gray-600 mb-4">A structured assessment identifying the highest-impact AI opportunities for your business.</p>
            <a href="https://www.bluecanvas.ai" className="text-sm text-[#ff6b35] font-medium hover:underline">Learn more →</a>
          </div>
        </aside>
      </div>
    </div>
  );
}
