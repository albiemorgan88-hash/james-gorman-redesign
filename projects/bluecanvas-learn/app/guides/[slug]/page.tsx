import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides } from '@/lib/guides';
import {
  addHeadingIds,
  getGuideHeadings,
  getReadingTime,
  getRelatedGuides,
} from '@/lib/guide-helpers';

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((entry) => entry.slug === slug);

  if (!guide) {
    return { title: 'Not Found' };
  }

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((entry) => entry.slug === slug);

  if (!guide) {
    notFound();
  }

  const relatedGuides = getRelatedGuides(guide, 3);
  const headingLinks = getGuideHeadings(guide.content);
  const contentWithAnchors = addHeadingIds(guide.content);
  const readingTime = getReadingTime(guide.content);

  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <article className="min-w-0 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-500">
              <Link href="/guides" className="transition hover:text-[#ff6b35]">
                All guides
              </Link>
              <span>/</span>
              <span className="rounded-full bg-[#ff6b35]/10 px-3 py-1 text-[#ff6b35]">{guide.category}</span>
              <span>{readingTime} min read</span>
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#1b1464] sm:text-4xl lg:text-5xl">
              {guide.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{guide.excerpt}</p>

            {headingLinks.length > 0 && (
              <details className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 lg:hidden">
                <summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-[0.18em] text-[#1b1464]">
                  In this guide
                </summary>
                <div className="mt-4 space-y-3">
                  {headingLinks.map((heading) => (
                    <a key={heading.id} href={`#${heading.id}`} className="block text-sm font-medium text-slate-600 transition hover:text-[#ff6b35]">
                      {heading.title}
                    </a>
                  ))}
                </div>
              </details>
            )}

            <div className="guide-content mt-10" dangerouslySetInnerHTML={{ __html: contentWithAnchors }} />

            {guide.faqs.length > 0 && (
              <section className="mt-12 border-t border-slate-200 pt-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">FAQ</p>
                    <h2 className="mt-2 text-2xl font-bold text-[#1b1464]">Frequently asked questions</h2>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {guide.faqs.map((faq, index) => (
                    <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-lg font-semibold text-[#1b1464]">{faq.q}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-6">
            {headingLinks.length > 0 && (
              <div className="hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm lg:block">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">On this page</p>
                <div className="mt-4 space-y-3">
                  {headingLinks.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className="block text-sm leading-6 text-slate-600 transition hover:text-[#ff6b35]"
                    >
                      {heading.title}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[1.75rem] bg-gradient-to-br from-[#1b1464] via-[#241a78] to-[#2f2c88] p-6 text-white shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb79d]">Need help applying this?</p>
              <h2 className="mt-3 text-2xl font-bold">Talk to Blue Canvas</h2>
              <p className="mt-3 text-sm leading-7 text-indigo-100">
                If you want the roadmap, tooling, and rollout plan done properly, book a free call and we will show you the best next move for your business.
              </p>
              <a
                href="https://www.bluecanvas.ai/#book"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#ff6b35] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e55a2b]"
              >
                Book free consultation
              </a>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">Related guides</p>
                  <h2 className="mt-2 text-2xl font-bold text-[#1b1464]">Keep reading</h2>
                </div>
                <Link href="/guides" className="text-sm font-semibold text-[#ff6b35] transition hover:text-[#e55a2b]">
                  Archive
                </Link>
              </div>
              <div className="mt-5 space-y-4">
                {relatedGuides.map((relatedGuide) => (
                  <Link
                    key={relatedGuide.slug}
                    href={`/guides/${relatedGuide.slug}`}
                    className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[#ff6b35]/40 hover:bg-white"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6b35]">{relatedGuide.category}</p>
                    <h3 className="mt-2 text-base font-semibold leading-6 text-[#1b1464]">{relatedGuide.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{relatedGuide.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
