import Link from 'next/link';
import {
  categoryDescriptions,
  featuredGuideSlugs,
  getCategoryAnchor,
  getCategoryGroups,
  getReadingTime,
  guideCount,
  latestGuides,
  pickGuides,
  starterGuideSlugs,
} from '@/lib/guide-helpers';

const starterGuides = pickGuides(starterGuideSlugs);
const featuredGuides = pickGuides(featuredGuideSlugs);
const categoryGroups = getCategoryGroups();

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-[#1b1464] via-[#241a78] to-[#2f2c88] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-14 sm:px-6 md:py-20 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white/85">
              {guideCount}+ practical guides for UK businesses
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              AI guides that make the next step obvious.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-indigo-100">
              Free, practical explainers from Blue Canvas on AI strategy, tooling, ROI, and implementation. Start with the newest guides, then browse by topic when you want depth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#latest"
                className="inline-flex items-center justify-center rounded-full bg-[#ff6b35] px-6 py-3 font-semibold text-white transition hover:bg-[#e55a2b]"
              >
                Read the latest guides
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15"
              >
                Browse all guides
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:w-[420px] lg:grid-cols-1">
            {[
              { value: latestGuides.length, label: 'Latest guides surfaced up front' },
              { value: categoryGroups.length, label: 'Topics grouped for quick scanning' },
              { value: guideCount, label: 'Full archive now one click away' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-3xl font-bold text-white">{stat.value}+</p>
                <p className="mt-1 text-sm leading-6 text-indigo-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <Link
              href="#latest"
              className="shrink-0 whitespace-nowrap rounded-full bg-[#1b1464] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#241a78]"
            >
              Latest guides
            </Link>
            {categoryGroups.slice(0, 5).map((group) => (
              <a
                key={group.category}
                href={`/guides#${getCategoryAnchor(group.category)}`}
                className="shrink-0 whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#ff6b35]/40 hover:text-[#ff6b35]"
              >
                {group.category}
              </a>
            ))}
            <Link
              href="/guides"
              className="shrink-0 whitespace-nowrap rounded-full border border-[#ff6b35]/20 bg-[#ff6b35]/10 px-4 py-2 text-sm font-semibold text-[#ff6b35] transition hover:bg-[#ff6b35]/15"
            >
              Full archive
            </Link>
          </div>
        </div>
      </section>

      <section id="latest" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">Latest</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1b1464]">Recent guides, right up front</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Fresh reads first, so people do not have to dig through the archive to find what is new or most timely.
            </p>
          </div>
          <Link href="/guides" className="text-sm font-semibold text-[#ff6b35] transition hover:text-[#e55a2b]">
            View full archive →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {latestGuides.map((guide, index) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className={`group ${index > 3 ? 'hidden md:flex' : 'flex'} h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#ff6b35]/40 hover:shadow-xl`}
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

        <div className="mt-8 flex justify-center">
          <Link
            href="/guides"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-[#1b1464] transition hover:border-[#ff6b35]/40 hover:text-[#ff6b35]"
          >
            See the full guide archive
          </Link>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">Start here</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1b1464]">Best first reads for most business owners</h2>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {starterGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-[#ff6b35]/40 hover:bg-white hover:shadow-lg"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  <span className="rounded-full bg-white px-3 py-1 text-[#1b1464] shadow-sm">{guide.category}</span>
                  <span>{getReadingTime(guide.content)} min read</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-[#1b1464] transition group-hover:text-[#ff6b35]">
                  {guide.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{guide.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">Browse by topic</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1b1464]">Clear routes into the archive</h2>
          </div>
          <Link href="/guides" className="text-sm font-semibold text-[#ff6b35] transition hover:text-[#e55a2b]">
            Go to all guides →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categoryGroups.map((group) => (
            <a
              key={group.category}
              href={`/guides#${getCategoryAnchor(group.category)}`}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#ff6b35]/40 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-[#1b1464]">{group.category}</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                  {group.guides.length}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {categoryDescriptions[group.category] ?? 'Browse practical, business-focused guides in this topic area.'}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">Worth reading next</p>
              <h2 className="mt-2 text-3xl font-bold">High-signal guides for strategy, ROI, and rollout</h2>
            </div>
            <a href="https://www.bluecanvas.ai/#book" className="text-sm font-semibold text-[#ff6b35] transition hover:text-white">
              Book a free consultation →
            </a>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-[#ff6b35]/40 hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-[#ff6b35]">{guide.category}</p>
                <h3 className="mt-3 text-xl font-bold leading-tight text-white">{guide.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{guide.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
