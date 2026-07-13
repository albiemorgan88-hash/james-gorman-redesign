import Image from 'next/image'
import Link from 'next/link'
import { Banner, Button, Card, Kvp, Pill, PublicFooter, PublicHeader, SampleRibbon, SectionLabel } from '../../components/hip-ui'

const bookingSteps = [
  ['Access code', 'School enters the private pilot code from HIP.'],
  ['Course', 'School selects Online Primary for the V1 pilot.'],
  ['Date', 'School chooses an available course date.'],
  ['Details', 'School adds booker, teacher, class and funding details.'],
  ['Review', 'School checks the request before sending it to HIP.'],
]

const goLiveItems = [
  ['Booking database', 'Source of truth ready for the pilot records', 'success'],
  ['Pilot access codes', 'Ready once HIP chooses invited schools', 'success'],
  ['Transactional email', 'Connect HIP sending domain', 'amber'],
  ['Course dates', 'Add agreed Online Primary dates and presenters', 'amber'],
  ['Staff accounts', 'Create Cormac and Karen staff logins', 'amber'],
  ['Zoho / calendar', 'Manual checklist workflow for V1', 'neutral'],
]

function FlowStep({ number, title, body }) {
  return (
    <div className="flex gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--teal)] text-xs font-bold text-white">{number}</span>
      <div>
        <p className="text-sm font-semibold text-[var(--navy)]">{title}</p>
        <p className="mt-1 text-xs leading-5 text-[var(--ink-soft)]">{body}</p>
      </div>
    </div>
  )
}

function MiniDate({ selected, title, meta, status, tone }) {
  return (
    <div className={`rounded-lg border p-4 ${selected ? 'border-[var(--teal)] bg-[var(--teal-tint)]' : 'border-[var(--line)] bg-white'}`}>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[var(--ink)]">{title}</p>
          <p className="mt-1 text-xs text-[var(--ink-muted)]">{meta}</p>
        </div>
        <Pill tone={tone}>{status}</Pill>
      </div>
    </div>
  )
}

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-[var(--paper)]">
      <PublicHeader current="showcase" />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div>
            <Banner tone="amber" className="mb-6 max-w-3xl" title="Preview — sample data only">No real schools or pupils are shown.</Banner>
            <p className="eyebrow text-[var(--teal)]">Illustrative product preview</p>
            <h1 className="type-display mt-3 max-w-3xl text-[var(--navy)]">A look at the HIP course booking pilot</h1>
            <p className="type-body mt-4 max-w-3xl text-[var(--ink-soft)]">
              A preview of the pilot. Selected schools request Online Primary course places; HIP reviews and confirms them; Zoho and calendar updates stay as a manual checklist.
            </p>
            <div className="mt-6">
              <Link href="/" className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-[var(--navy)] bg-[var(--navy)] px-5 py-3 text-[15px] font-semibold text-white hover:bg-[var(--navy-2)] sm:w-auto">Open the school booking flow</Link>
            </div>
          </div>
          <div className="rounded-xl bg-[var(--navy)] p-5 text-white">
            <p className="eyebrow text-[#7adbd2]">Demo status</p>
            <p className="type-h1 mt-3">Pilot preview</p>
            <p className="mt-3 text-sm leading-6 text-white/75">The school booking flow, secure manage links and staff workflow are represented here with sample content.</p>
            <Banner className="mt-5 border-white/10 bg-white/10 text-white/80" title="V1 operating model">Email can be live. Zoho and calendar stay manual checklist steps for the pilot.</Banner>
          </div>
        </section>

        <nav className="sticky top-0 z-20 hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] p-2 shadow-[var(--shadow-2)] lg:flex" aria-label="Showcase sections">
          {[
            ['#school-view', 'What schools see'],
            ['#manage-view', 'Manage link'],
            ['#admin-view', 'HIP internal view'],
            ['#go-live', 'Go-live checklist'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="rounded-lg px-4 py-2 text-sm font-semibold text-[var(--ink-soft)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]">{label}</a>
          ))}
        </nav>

        <div className="grid gap-2 lg:hidden">
          {[
            ['#school-view', 'What schools see'],
            ['#manage-view', 'Manage link'],
            ['#admin-view', 'HIP internal view'],
            ['#go-live', 'Go-live checklist'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--ink)]">{label}</a>
          ))}
        </div>

        <section id="school-view" className="scroll-mt-24">
          <div className="mb-4">
            <p className="eyebrow text-[var(--teal)]">What schools see</p>
            <h2 className="type-h1 text-[var(--navy)]">Public course booking journey</h2>
            <p className="type-body mt-2 max-w-2xl text-[var(--ink-soft)]">Submitting sends a request to HIP. We confirm the place by email.</p>
          </div>
          <div className="grid gap-5 xl:grid-cols-[0.38fr_0.62fr]">
            <Card>
              <SectionLabel>Journey</SectionLabel>
              <div className="space-y-4">
                {bookingSteps.map(([title, body], index) => <FlowStep key={title} number={index + 1} title={title} body={body} />)}
              </div>
              <Banner className="mt-5" tone="teal" title="School expectation">Submitting sends a request to HIP. We confirm the place by email.</Banner>
            </Card>
            <Card className="p-0">
              <div className="border-b border-[var(--line)] bg-[var(--surface-2)] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <Pill tone="teal">Pilot access accepted</Pill>
                    <h3 className="type-h1 mt-3 text-[var(--navy)]">Book an Online Primary course</h3>
                    <p className="mt-2 text-sm text-[var(--ink-soft)]">Sample Primary School chooses a date and enters the right school contacts.</p>
                  </div>
                  <SampleRibbon />
                </div>
              </div>
              <div className="grid gap-5 p-5 lg:grid-cols-2">
                <div className="space-y-3">
                  <MiniDate selected title="Wed 10 Jun 2026" meta="10:00-11:30 · Presenter: HIP facilitator" status="Selected" tone="teal" />
                  <MiniDate title="Thu 18 Jun 2026" meta="13:00-14:30 · 2 class places left" status="Open" tone="amber" />
                  <MiniDate title="Tue 23 Jun 2026" meta="10:00-11:30" status="Course full" tone="rose" />
                </div>
                <div className="rounded-lg border border-[var(--line)] bg-[var(--surface-2)] p-4">
                  <SectionLabel>School details</SectionLabel>
                  <Kvp label="School contact" value="School Office" />
                  <Kvp label="Contact email" value="office@sampleprimary.example" />
                  <Kvp label="Teacher" value="Class Teacher" />
                  <Kvp label="Teacher email" value="teacher@sampleprimary.example" />
                  <Kvp label="Class lines" value="P5 and P6 · 2 classes" />
                  <Kvp label="Funding" value="EA funded · PO to follow" />
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="manage-view" className="scroll-mt-24">
          <div className="mb-4">
            <p className="eyebrow text-[var(--teal)]">School manage link</p>
            <h2 className="type-h1 text-[var(--navy)]">Schools can ask for changes without editing the confirmed booking</h2>
            <p className="type-body mt-2 max-w-2xl text-[var(--ink-soft)]">The manage link lets schools request a teacher, class, date or cancellation change for HIP to approve.</p>
          </div>
          <Card className="grid gap-5 p-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Pill tone="success">Confirmed by HIP</Pill>
              <h3 className="type-h1 mt-3 text-[var(--navy)]">Sample Primary School</h3>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">Online Primary · Wed 10 Jun 2026 · 10:00-11:30</p>
              <div className="mt-5 rounded-lg border border-[var(--line)] bg-[var(--surface-2)] p-4">
                <Kvp label="Reference" value="HIP-1024" mono />
                <Kvp label="Teacher" value="Class Teacher" />
                <Kvp label="Class lines" value="P5 and P6" />
                <Kvp label="Status" value="Confirmed" />
              </div>
            </div>
            <div>
              <SectionLabel>Request a change</SectionLabel>
              <div className="grid gap-3 md:grid-cols-2">
                {['Change attending teacher', 'Update class lines', 'Request a different date', 'Request cancellation'].map((item) => (
                  <div key={item} className="rounded-lg border border-[var(--line)] bg-white p-4">
                    <p className="text-sm font-semibold text-[var(--navy)]">{item}</p>
                    <p className="mt-2 text-xs leading-5 text-[var(--ink-soft)]">Sent to HIP for approval before anything changes.</p>
                  </div>
                ))}
              </div>
              <Banner className="mt-4" tone="amber">The current booking stays confirmed while HIP reviews any change request.</Banner>
            </div>
          </Card>
        </section>

        <section id="admin-view" className="scroll-mt-24">
          <div className="mb-4">
            <p className="eyebrow text-[var(--teal)]">What HIP staff see</p>
            <h2 className="type-h1 text-[var(--navy)]">Internal course booking dashboard</h2>
            <p className="type-body mt-2 max-w-2xl text-[var(--ink-soft)]">HIP staff review requests, confirm bookings and work through checklist tasks in one place.</p>
          </div>
          <Card className="overflow-hidden p-0">
            <div className="grid min-h-[620px] lg:grid-cols-[232px_1fr]">
              <aside className="hidden border-r border-[var(--line)] bg-[var(--surface-2)] p-4 lg:block">
                <Image src="/img/hip-logo.png" alt="" width={48} height={44} className="h-10 w-auto" />
                <div className="mt-7 space-y-1">
                  {['Inbox', 'All requests', 'Change requests', 'Courses & sessions', 'Checklist', 'Connections'].map((item, index) => (
                    <div key={item} className={`rounded-md px-3 py-2 text-sm font-semibold ${index === 0 ? 'bg-white text-[var(--navy)] shadow-[var(--shadow-1)]' : 'text-[var(--ink-soft)]'}`}>{item}</div>
                  ))}
                </div>
              </aside>
              <div className="bg-[var(--paper)] p-5">
                <div className="flex flex-col justify-between gap-4 border-b border-[var(--line)] pb-5 lg:flex-row lg:items-start">
                  <div>
                    <Pill tone="amber">Sample data only</Pill>
                    <h3 className="type-h1 mt-3 text-[var(--navy)]">Good morning, [staff name]</h3>
                    <p className="mt-2 text-sm text-[var(--ink-soft)]">4 new requests, 1 change to review, reminder cron last ran at 08:00.</p>
                  </div>
                  <Button tone="outline">+ Add booking</Button>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {[
                    ['New requests', '4', 'amber'],
                    ['Awaiting school', '2', 'rose'],
                    ['Confirmed this month', '12', 'teal'],
                    ['Next course', '10 Jun', 'navy'],
                  ].map(([label, value, tone]) => (
                    <div key={label} className="rounded-lg border border-[var(--line)] bg-white p-4">
                      <p className="eyebrow text-[var(--ink-muted)]">{label}</p>
                      <p className="type-h1 mt-2" style={{ color: `var(--${tone})` }}>{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid gap-4 xl:grid-cols-[0.52fr_0.48fr]">
                  <div className="space-y-3">
                    {[
                      ['HIP-1024', 'Sample Primary School', 'Online Primary · 2 classes', 'New request', 'amber'],
                      ['HIP-1023', 'Example Integrated Primary', 'Teacher change requested', 'Change requested', 'rose'],
                      ['HIP-1022', 'Demo Primary School', 'Confirmed course', 'Confirmed', 'success'],
                    ].map(([ref, school, detail, status, tone]) => (
                      <div key={ref} className="rounded-lg border border-[var(--line)] bg-white p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-mono text-xs text-[var(--ink-muted)]">{ref}</p>
                            <p className="mt-1 text-sm font-semibold text-[var(--navy)]">{school}</p>
                            <p className="mt-1 text-xs text-[var(--ink-soft)]">{detail}</p>
                          </div>
                          <Pill tone={tone}>{status}</Pill>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg border border-[var(--line)] bg-white p-4">
                    <SectionLabel>Booking checklist</SectionLabel>
                    {[
                      ['Confirmation email', 'live', 'success'],
                      ['Teacher reminders', 'scheduled', 'success'],
                      ['Calendar event', 'manual', 'amber'],
                      ['Zoho record', 'manual', 'amber'],
                    ].map(([label, status, tone]) => (
                      <div key={label} className="flex items-center justify-between gap-3 border-t border-[var(--line-soft)] py-3 first:border-t-0">
                        <span className="text-sm font-medium text-[var(--ink)]">{label}</span>
                        <Pill tone={tone}>{status}</Pill>
                      </div>
                    ))}
                    <Banner className="mt-4" tone="amber">Zoho and calendar are checklist-controlled in V1, not automatic sync.</Banner>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section id="go-live" className="scroll-mt-24">
          <div className="mb-4">
            <p className="eyebrow text-[var(--teal)]">Before handoff</p>
            <h2 className="type-h1 text-[var(--navy)]">What still needs to be connected before go-live</h2>
            <p className="type-body mt-2 max-w-2xl text-[var(--ink-soft)]">These are the remaining operational connections before HIP invites real schools at scale.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {goLiveItems.map(([label, body, tone]) => (
              <Card key={label}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[var(--navy)]">{label}</p>
                    <p className="mt-2 text-xs leading-5 text-[var(--ink-soft)]">{body}</p>
                  </div>
                  <Pill tone={tone}>{tone === 'success' ? 'Ready' : tone === 'amber' ? 'Connect' : 'V1 manual'}</Pill>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <PublicFooter />
    </main>
  )
}
