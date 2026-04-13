import type { Metadata } from 'next';
import Link from 'next/link';
import {
  categoryDescriptions,
  getCategoryAnchor,
  getCategoryGroups,
  getReadingTime,
  guideCount,
  latestGuides,
} from '@/lib/guide-helpers';

const categoryGroups = getCategoryGroups();

export const metadata: Metadata = {
  title: 'All AI Guides | Blue Canvas Learn',
  description:
    'Browse the full Blue Canvas Learn archive of AI guides for UK businesses, from getting started and ROI to tooling and industry-specific use cases.',
};

export default function GuidesArchivePage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-[#1b1464] via-[#241a78] to-[#2f2c88] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/85">
            Full archive · {guideCount}+ guides
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Browse every guide in one place</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-indigo-100">
            Recent guides are surfaced first, then everything is grouped by topic so people can jump straight to the right part of the library.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#latest"
              className="inline-flex items-center justify-center rounded-full bg-[#ff6b35] px-6 py-3 font-semibold text-white transition hover:bg-[#e55a2b]"
            >
              See latest guides
            </Link>
            <a
              href="https://www.bluecanvas.ai/#book"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15"
            >
              Book a free consultation
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categoryGroups.map((group) => (
              <a
                key={group.category}
                href={`#${getCategoryAnchor(group.category)}`}
                className="shrink-0 whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#ff6b35]/40 hover:text-[#ff6b35]"
              >
                {group.category} · {group.guides.length}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">Latest guides</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1b1464]">Start with what is new</h2>
          </div>
          <Link href="/" className="text-sm font-semibold text-[#ff6b35] transition hover:text-[#e55a2b]">
            Back to homepage →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {latestGuides.map((guide, index) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#ff6b35]/40 hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                <span className="rounded-full bg-[#ff6b35]/10 px-3 py-1 text-[#ff6b35]">{index === 0 ? 'Newest' : 'Recent'}</span>
                <span>{getReadingTime(guide.content)} min read</span>
              </div>
              <p className="mt-4 text-sm font-semibold text-[#ff6b35]">{guide.category}</p>
              <h3 className="mt-2 text-xl font-bold leading-tight text-[#1b1464] transition group-hover:text-[#ff6b35]">
                {guide.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{guide.excerpt}</p>
              <span className="mt-5 inline-flex items-center text-sm font-semibold text-[#ff6b35]">
                Read guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {categoryGroups.map((group) => (
              <section key={group.category} id={getCategoryAnchor(group.category)} className="scroll-mt-28">
                <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">{group.guides.length} guides</p>
                    <h2 className="mt-2 text-3xl font-bold text-[#1b1464]">{group.category}</h2>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                      {categoryDescriptions[group.category] ?? 'Practical, business-focused guides grouped to make scanning easier.'}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {group.guides.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/guides/${guide.slug}`}
                      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#ff6b35]/40 hover:shadow-lg"
                    >
                      <div className="flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                        <span>{guide.category}</span>
                        <span>{getReadingTime(guide.content)} min read</span>
                      </div>
                      <h3 className="mt-4 text-xl font-bold leading-tight text-[#1b1464] transition group-hover:text-[#ff6b35]">
                        {guide.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{guide.excerpt}</p>
                      <span className="mt-5 inline-flex items-center text-sm font-semibold text-[#ff6b35]">
                        Read guide →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
