import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  CalendarCheck,
  Camera,
  Check,
  Eye,
  Home,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Play,
  Sparkles,
  Target,
  TrendingDown,
} from 'lucide-react';
import { contact, getShowcase, showcases } from '../data';

export function generateStaticParams() {
  return showcases.map((showcase) => ({ slug: showcase.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const property = getShowcase(params.slug);
  return {
    title: property ? `${property.shortAddress} Relaunch | James Gorman Property` : 'Property Relaunch Showcase',
    description: property ? `A personalised James Gorman Property relaunch showcase for ${property.address}.` : 'Property relaunch showcase.',
    openGraph: property
      ? {
          title: `A smarter relaunch for ${property.shortAddress}`,
          description: property.opportunity,
          images: [property.hero],
        }
      : undefined,
  };
}

function ButtonLink({ href, variant = 'gold', children }: { href: string; variant?: 'gold' | 'outline' | 'dark'; children: React.ReactNode }) {
  const styles = {
    gold: 'border-champagne bg-champagne text-plum-950 hover:bg-[#e4c88f]',
    outline: 'border-white/35 bg-white/10 text-white hover:bg-white/20',
    dark: 'border-plum-800 bg-plum-950 text-white hover:bg-plum-850',
  }[variant];

  return (
    <a href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md border px-5 text-sm font-bold transition ${styles}`}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-champagne">{eyebrow}</p>
      <h2 className="font-serif text-4xl font-semibold leading-[0.95] text-ink md:text-6xl">{title}</h2>
      {children ? <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/65 md:text-lg">{children}</p> : null}
    </div>
  );
}

export default function ShowcasePage({ params }: { params: { slug: string } }) {
  const property = getShowcase(params.slug) ?? showcases[0];
  const tel = contact.phone.replace(/\s/g, '');
  const dayLabel = `${property.daysLive} day${property.daysLive === 1 ? '' : 's'}`;

  const stats = [
    { label: 'Current guide', value: property.priceText, icon: Home },
    { label: 'Time live', value: dayLabel, icon: CalendarCheck },
    { label: property.brief, value: property.beds > 0 ? `${property.beds} bed / ${property.baths} bath` : `${property.receptions} rooms / ${property.baths} bath`, icon: BedDouble },
    { label: 'PropertyPal views', value: property.viewsAllTime ?? 'Strong interest', icon: Eye },
  ];

  const plan = [
    { title: 'Sharper positioning', text: property.relaunchPlan[0], icon: Target },
    { title: 'Cinematic content', text: property.relaunchPlan[1], icon: Camera },
    { title: 'Targeted demand', text: property.relaunchPlan[2], icon: Megaphone },
    { title: 'Personal follow-up', text: property.relaunchPlan[3], icon: Phone },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-cream text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-plum-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
          <a href="/" className="flex min-w-0 items-center gap-3 text-white">
            <img src="/assets/jgp/logo-white.png" alt="James Gorman Property" className="h-12 w-28 object-contain object-left sm:h-14 sm:w-56" />
          </a>
          <nav className="hidden items-center gap-7 text-[13px] font-semibold text-white/85 lg:flex">
            {['Opportunity', 'Plan', 'Gallery', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-champagne">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={`tel:${tel}`} className="hidden rounded-md border border-white/30 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10 sm:inline-flex">
              <Phone className="mr-2 h-4 w-4" /> Call James
            </a>
            <a href={`mailto:${contact.email}?subject=Relaunch%20${encodeURIComponent(property.shortAddress)}`} className="shrink-0 rounded-md bg-champagne px-3 py-3 text-xs font-bold text-plum-950 transition hover:bg-[#e4c88f] sm:px-4 sm:text-sm">
              <span className="sm:hidden">Relaunch</span>
              <span className="hidden sm:inline">Discuss relaunch</span>
            </a>
          </div>
        </div>
      </header>

      <section className="relative min-h-[100svh] bg-plum-950 pt-20 text-white md:min-h-screen md:pt-28">
        <img src={property.hero} alt={property.address} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,6,26,.98)_0%,rgba(38,9,37,.88)_42%,rgba(38,9,37,.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-plum-950 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-center px-4 pb-10 pt-8 sm:px-6 md:min-h-[calc(100vh-7rem)] md:pb-12 lg:justify-end lg:px-10">
          <div className="fade-up max-w-5xl text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.28)]">
            <a href="/" className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/82 backdrop-blur-md">
              <ArrowLeft className="h-3.5 w-3.5" /> All showcases
            </a>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-champagne">{property.address}</p>
            <h1 className="max-w-full text-pretty font-serif text-[2.55rem] font-semibold leading-[0.94] sm:text-6xl md:text-8xl lg:text-[7.3rem] lg:leading-[0.92]">
              A smarter relaunch for <span className="text-champagne">{property.shortAddress}</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/90 md:text-xl md:leading-8">
              {property.story}
            </p>
            <p className="mt-5 max-w-full font-serif text-2xl italic text-champagne md:text-3xl">Local Homes, Modern Marketing.</p>
            <div className="mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="rounded-full border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 flex-none text-champagne" />
                      <div>
                        <p className="text-xs font-semibold text-white/70">{stat.label}</p>
                        <p className="font-bold leading-tight text-white">{stat.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="opportunity" className="relative bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div>
            <p className="font-serif text-4xl italic text-plum-800 md:text-5xl">A note from James</p>
            <p className="mt-5 text-lg leading-8 text-ink/80">
              Your property has already attracted attention online, but after {dayLabel} live it deserves a fresh campaign, a stronger story and more proactive buyer follow-up.
            </p>
            <p className="mt-5 text-lg leading-8 text-ink/80">
              I’ve put this short showcase together to show how I’d reposition {property.shortAddress}: not just as another listing, but as a property with a clear buyer, a sharper message and a more memorable digital launch.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {property.buyerAngles.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm font-semibold text-ink/80">
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-plum-900/15 text-plum-800"><Check className="h-4 w-4" /></span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <blockquote className="rounded-[2rem] border border-plum-950/10 bg-cream p-8 shadow-soft md:p-10">
            <Sparkles className="mb-6 h-10 w-10 text-champagne" />
            <p className="font-serif text-3xl font-semibold leading-tight text-plum-950 md:text-5xl">“The right marketing doesn’t just find buyers. It creates competition.”</p>
            <cite className="mt-6 block text-sm font-bold not-italic text-plum-800">James Gorman</cite>
            <div className="mt-8 rounded-2xl bg-white p-5 text-sm leading-6 text-ink/70">
              <b className="text-ink">Why now:</b> listed since {property.listedDate}; current agent shown as {property.currentAgent}. {property.priceSignal ?? 'A fresh relaunch can reset attention and give buyers a new reason to act.'}
            </div>
          </blockquote>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <SectionIntro eyebrow="The opportunity" title="A stronger story for the right buyer">
            {property.opportunity}
          </SectionIntro>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
            <div className="grid grid-cols-2 gap-3">
              {property.images.slice(0, 5).map((image, index) => (
                <img key={image} src={image} alt={`${property.shortAddress} image ${index + 1}`} className={`${index === 0 ? 'col-span-2 h-72' : 'h-52'} w-full rounded-lg object-cover shadow-soft`} />
              ))}
            </div>
            <div className="rounded-[2rem] bg-white p-7 shadow-soft md:p-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-champagne">Current market signals</p>
              <h3 className="font-serif text-4xl font-semibold leading-tight text-plum-950">Good property. Tired presentation.</h3>
              <div className="mt-8 grid gap-4">
                {[
                  ['Live on PropertyPal', dayLabel],
                  ['Current asking', property.priceText],
                  ['Last update', property.updatedDate],
                  ['30-day portal views', property.views30 ?? 'Visible interest'],
                  ['7-day portal views', property.views7 ?? 'Still being seen'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between border-b border-plum-950/10 pb-4">
                    <span className="text-sm font-semibold text-ink/58">{label}</span>
                    <span className="text-right font-bold text-ink">{value}</span>
                  </div>
                ))}
              </div>
              {property.priceSignal ? (
                <div className="mt-6 flex gap-3 rounded-2xl bg-champagne/20 p-5 text-sm leading-6 text-plum-950">
                  <TrendingDown className="mt-1 h-5 w-5 flex-none text-plum-800" />
                  <p><b>Relaunch hook:</b> {property.priceSignal}. That gives us a legitimate reason to repackage the property and go back to the market with fresh energy.</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section id="plan" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <SectionIntro eyebrow="Relaunch plan" title="How James would bring it back to market">
            A practical campaign built for attention, enquiries and qualified viewing requests.
          </SectionIntro>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {plan.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[1.7rem] border border-plum-950/10 bg-cream p-6 shadow-soft">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-serif text-4xl font-semibold text-champagne">0{index + 1}</span>
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-plum-950 text-champagne"><Icon className="h-5 w-5" /></span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-plum-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/66">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-plum-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-champagne">Social hooks</p>
            <h2 className="font-serif text-4xl font-semibold leading-[0.95] text-white md:text-6xl">Content that earns attention</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/68 md:text-lg">These are the angles I’d turn into short video, captions, email subject lines and retargeting creative.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {property.socialHooks.map((hook, index) => (
              <div key={hook} className="relative min-h-80 overflow-hidden rounded-[2rem] bg-white/10 p-6 shadow-soft">
                <img src={property.images[index + 1] ?? property.hero} alt="Property social creative" className="absolute inset-0 h-full w-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/55 to-transparent" />
                <div className="relative z-10 flex h-full min-h-72 flex-col justify-end">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-champagne">Hook {index + 1}</p>
                  <h3 className="font-serif text-3xl font-semibold leading-none text-white">{hook}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-cream px-4 py-16 md:py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-7 text-center shadow-luxury md:p-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-champagne">Next step</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-plum-950 md:text-6xl">Let’s relaunch {property.shortAddress} properly.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/70">
            If you want a fresh plan, I’ll walk you through the buyer angles, the content, and the first 14 days of promotion.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={`tel:${tel}`} variant="dark">Call James</ButtonLink>
            <ButtonLink href={`mailto:${contact.email}?subject=Relaunch%20${encodeURIComponent(property.shortAddress)}`}>Email James</ButtonLink>
            <ButtonLink href={property.sourceUrl} variant="dark">View current listing</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
