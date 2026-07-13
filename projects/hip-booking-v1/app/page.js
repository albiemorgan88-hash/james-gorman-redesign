'use client'

import { useEffect, useMemo, useState } from 'react'
import { Banner, Button, Card, Field, Kvp, Pill, PublicFooter, PublicHeader, SectionLabel, Stepper, cx, formatSlot, inputClass, textareaClass } from '../components/hip-ui'

const classGroupOptions = ['P4', 'P5', 'P6', 'P7', 'Composite P4/P5', 'Composite P6/P7', 'Other']
const steps = ['Course', 'Date', 'Your details', 'Review']

function Header({ showStepper, step }) {
  return (
    <>
      <PublicHeader />
      {showStepper && (
        <div className="border-t border-[var(--line)] px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Stepper steps={steps} current={step} />
          </div>
        </div>
      )}
    </>
  )
}

function AccessStep({ accessCode, setAccessCode, loading, error, locked, onSubmit }) {
  return (
    <main className="flex min-h-screen flex-col bg-[var(--paper)]">
      <Header />
      <div className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <section className="w-full max-w-[720px]">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <p className="eyebrow text-[var(--teal)]">Pilot booking · selected schools</p>
            <h1 className="type-display mt-3 text-[var(--navy)]">Book your school&apos;s HIP Psychology course</h1>
            <p className="type-body mx-auto mt-4 max-w-xl text-[var(--ink-soft)]">For selected pilot schools. Enter the access code from your HIP email to request a place on an Online Primary course.</p>
          </div>
          <Card className="mx-auto max-w-[420px]">
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <Field label="Access code" hintId="access-code-help" hint="Codes are case-insensitive. Paste works.">
                <input
                  id="access-code"
                  className={inputClass(cx('uppercase tracking-[0.08em]', error && 'border-[var(--rose)] focus:border-[var(--rose)] focus:ring-[var(--rose-tint)]'))}
                  required
                  value={accessCode}
                  onChange={(event) => setAccessCode(event.target.value)}
                  placeholder="HIP-PILOT-2026"
                  inputMode="text"
                  autoCapitalize="characters"
                  autoComplete="off"
                  spellCheck="false"
                  aria-describedby="access-code-help"
                  aria-invalid={Boolean(error) || undefined}
                  disabled={loading || locked}
                />
              </Field>
              {error && <Banner tone="rose">{error}</Banner>}
              <Button type="submit" size="lg" className="w-full" disabled={loading || locked} loading={loading}>{loading ? 'Checking code…' : locked ? 'Try again shortly' : 'Continue to course details'}</Button>
            </form>
          </Card>
          <details className="mx-auto mt-5 max-w-[420px] rounded-xl border border-[var(--line)] bg-[var(--surface-2)] p-4 text-sm text-[var(--ink-soft)]">
            <summary className="cursor-pointer font-semibold text-[var(--navy)]">What is this?</summary>
            <p className="mt-3 leading-6">This private pilot lets selected schools request Online Primary course places with HIP Psychology. HIP reviews every request before confirming by email.</p>
          </details>
          <p className="mt-5 text-center text-sm text-[var(--ink-soft)]">Are you a school without a code? Email <a className="hip-link inline-flex min-h-11 items-center font-semibold sm:min-h-0" href="mailto:info@hippsychology.com">info@hippsychology.com</a>.</p>
        </section>
      </div>
      <PublicFooter />
    </main>
  )
}

function CourseStep({ workshops, selectedId, setSelectedId, onNext }) {
  const selected = workshops.find((workshop) => workshop.id === selectedId)
  return (
    <Screen step={0}>
      <PageIntro title="Choose a course" text="Online Primary is the V1 pilot course. Other formats can be added after HIP has tested the flow with selected schools." />
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr]">
        {workshops.length ? workshops.map((workshop) => {
          const active = workshop.id === selectedId
          return (
            <button key={workshop.id} type="button" onClick={() => setSelectedId(workshop.id)} className={cx('rounded-xl border p-5 text-left shadow-[var(--shadow-1)] transition', active ? 'border-[var(--teal)] bg-[var(--teal-tint)]' : 'border-[var(--line)] bg-[var(--surface)] hover:border-[var(--teal-soft)]')}>
              <div className="mb-5 flex items-start justify-between gap-3">
                <Pill tone={active ? 'teal' : 'success'}>{active ? 'Selected' : 'Open for booking'}</Pill>
                {active && <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--teal)] text-xs font-bold text-white">✓</span>}
              </div>
              <h3 className="type-h2 text-[var(--navy)]">{workshop.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{workshop.description || `${workshop.programmeTitle || 'HIP course'} · ${workshop.stage || 'Primary'} · ${workshop.delivery || 'online'}`}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>90 min</Pill>
                <Pill>Live online</Pill>
                <Pill>{workshop.stage || 'Primary'}</Pill>
              </div>
            </button>
          )
        }) : (
          <Card className="lg:col-span-3">
            <Banner tone="amber" title="No courses configured yet">HIP can add Online Primary dates before inviting schools into the pilot.</Banner>
          </Card>
        )}
        {['Online Post-Primary', 'In-school course'].map((title) => (
          <Card key={title} className="opacity-75">
            <Pill>After pilot</Pill>
            <h3 className="type-h3 mt-5 text-[var(--ink-soft)]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">Visible for future planning, not bookable in V1.</p>
          </Card>
        ))}
      </div>
      <FooterNav nextLabel="Continue" onNext={onNext} nextDisabled={!selected} />
    </Screen>
  )
}

function DateStep({ slots, selectedId, setSelectedId, onBack, onNext }) {
  const selected = slots.find((slot) => slot.id === selectedId)
  return (
    <Screen step={1}>
      <PageIntro title="Choose a course date" text="Schools choose an exact available date. HIP still reviews and confirms every request by email." />
      <div className="space-y-3">
        {slots.map((slot) => {
          const active = slot.id === selectedId
          const disabled = slot.status === 'full' || !slot.zoomReady
          const tone = active ? 'teal' : !slot.zoomReady ? 'rose' : slot.status === 'full' ? 'rose' : Number(slot.remaining) <= 5 ? 'amber' : Number(slot.remaining) > 14 ? 'success' : 'neutral'
          const label = !slot.zoomReady ? 'Joining link needed' : slot.status === 'full' ? 'Course full' : active ? 'Selected' : Number(slot.remaining) > 14 ? 'Plenty of space' : `${slot.remaining} class place${slot.remaining === 1 ? '' : 's'} left`
          return (
            <button key={slot.id} type="button" disabled={disabled} onClick={() => setSelectedId(slot.id)} className={cx('w-full rounded-xl border p-4 text-left transition', active ? 'border-[var(--teal)] bg-[var(--teal-tint)]' : 'border-[var(--line)] bg-[var(--surface)] hover:border-[var(--teal-soft)]', disabled && 'cursor-not-allowed opacity-60')}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <span className={cx('flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold', active ? 'border-[var(--teal)] bg-[var(--teal)] text-white' : 'border-[var(--line-strong)] text-transparent')}>✓</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[var(--ink)]">{formatSlot(slot)}</p>
                  <p className="mt-1 text-xs text-[var(--ink-muted)]">Presenter: {slot.facilitator || 'HIP facilitator'}</p>
                </div>
                <Pill tone={tone}>{label}</Pill>
              </div>
            </button>
          )
        })}
        {!slots.length && <Banner tone="amber">No course dates are currently configured for this pilot.</Banner>}
      </div>
      <Banner className="mt-5" tone="teal" title="What schools should expect">Submitting sends a booking request to HIP. HIP confirms each booking by email and sends a secure manage link for any later changes.</Banner>
      <FooterNav onBack={onBack} onNext={onNext} nextLabel="Continue" nextDisabled={!selected || selected.status === 'full' || !selected.zoomReady} />
    </Screen>
  )
}

function DetailsStep({ form, updateForm, classLines, setClassLines, onBack, onNext }) {
  function updateLine(id, patch) {
    setClassLines((lines) => lines.map((line) => line.id === id ? { ...line, ...patch } : line))
  }

  return (
    <Screen step={2}>
      <PageIntro title="Your details" text="HIP uses these details to confirm the course place and send joining instructions to the right people." />
      <div className="space-y-4">
        <Card>
          <SectionLabel>School</SectionLabel>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="School name"><input className={inputClass('md:col-span-2')} required value={form.schoolName} onChange={(event) => updateForm('schoolName', event.target.value)} autoComplete="organization" /></Field>
            <Field label="Booker name" hint="Who HIP contacts about this booking"><input className={inputClass()} required value={form.bookerName} onChange={(event) => updateForm('bookerName', event.target.value)} autoComplete="name" /></Field>
            <Field label="Booker email"><input className={inputClass()} required type="email" value={form.bookerEmail} onChange={(event) => updateForm('bookerEmail', event.target.value)} autoComplete="email" autoCapitalize="none" spellCheck="false" /></Field>
          </div>
        </Card>
        <Card>
          <SectionLabel>Attending teacher</SectionLabel>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Teacher name"><input className={inputClass()} required value={form.teacherName} onChange={(event) => updateForm('teacherName', event.target.value)} autoComplete="name" /></Field>
            <Field label="Teacher email" hint="Joining details and reminders go here too"><input className={inputClass()} required type="email" value={form.teacherEmail} onChange={(event) => updateForm('teacherEmail', event.target.value)} autoComplete="email" autoCapitalize="none" spellCheck="false" /></Field>
            <Field label="Booker phone" optional><input className={inputClass()} value={form.bookerPhone} onChange={(event) => updateForm('bookerPhone', event.target.value)} autoComplete="tel" /></Field>
            <Field label="Teacher phone" optional><input className={inputClass()} value={form.teacherPhone} onChange={(event) => updateForm('teacherPhone', event.target.value)} autoComplete="tel" /></Field>
          </div>
        </Card>
        <Card>
          <SectionLabel action={<Button size="sm" tone="ghost" type="button" onClick={() => setClassLines((lines) => [...lines, { id: crypto.randomUUID(), year_group: 'P5', class_count: 1, notes: '' }])}>+ Add line</Button>}>Class lines</SectionLabel>
          <div className="space-y-2">
            {classLines.map((line) => (
              <div key={line.id} className="grid gap-2 md:grid-cols-[1fr_120px_1.3fr_48px]">
                <select className={inputClass('mt-0')} value={line.year_group} onChange={(event) => updateLine(line.id, { year_group: event.target.value })}>
                  {classGroupOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
                <input className={inputClass('mt-0')} type="number" min="1" max="10" value={line.class_count} onChange={(event) => updateLine(line.id, { class_count: Number(event.target.value || 1) })} />
                <input className={inputClass('mt-0')} value={line.notes} onChange={(event) => updateLine(line.id, { notes: event.target.value })} placeholder="Class/teacher notes" />
                <Button type="button" tone="ghost" disabled={classLines.length === 1} onClick={() => setClassLines((lines) => lines.filter((item) => item.id !== line.id))} aria-label="Remove class line">×</Button>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <SectionLabel>Funding & PO</SectionLabel>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Funding source"><select className={inputClass()} value={form.fundingSource} onChange={(event) => updateForm('fundingSource', event.target.value)}><option>School funded</option><option>EA funded</option><option>Other / TBC</option></select></Field>
            <Field label="Purchase order" optional><input className={inputClass()} value={form.purchaseOrder} onChange={(event) => updateForm('purchaseOrder', event.target.value)} placeholder="Optional" /></Field>
          </div>
        </Card>
        <Card>
          <SectionLabel>Notes for HIP</SectionLabel>
          <Field label="Anything else HIP should know?" optional><textarea className={textareaClass('min-h-28')} value={form.notes} onChange={(event) => updateForm('notes', event.target.value)} placeholder="Additional needs, scheduling concerns, or anything useful for HIP." /></Field>
        </Card>
      </div>
      <FooterNav onBack={onBack} onNext={onNext} nextLabel="Review request" />
    </Screen>
  )
}

function ReviewStep({ form, classLines, workshop, slot, onBack, onEdit, onSubmit, submitting, message }) {
  return (
    <Screen step={3}>
      <PageIntro title="Review your request" text="Nothing is final yet. Submitting sends this to HIP for review and confirmation." />
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="md:col-span-2">
          <ReviewHeader title="Course" onEdit={onEdit} />
          <Kvp label="Course" value={workshop?.title || 'Online Primary'} />
          <Kvp label="Date" value={formatSlot(slot)} />
          <Kvp label="Presenter" value={slot?.facilitator || 'HIP facilitator'} />
        </Card>
        <Card><ReviewHeader title="School" onEdit={onEdit} /><Kvp label="Name" value={form.schoolName} /><Kvp label="Booker" value={form.bookerName} /><Kvp label="Email" value={form.bookerEmail} /></Card>
        <Card><ReviewHeader title="Attending teacher" onEdit={onEdit} /><Kvp label="Name" value={form.teacherName} /><Kvp label="Email" value={form.teacherEmail} /><Kvp label="Phone" value={form.teacherPhone || '-'} /></Card>
        <Card><ReviewHeader title="Class lines" onEdit={onEdit} />{classLines.map((line, index) => <Kvp key={line.id} label={`Line ${index + 1}`} value={`${line.year_group} · ${line.class_count} class(es)${line.notes ? ` · ${line.notes}` : ''}`} />)}</Card>
        <Card><ReviewHeader title="Funding & PO" onEdit={onEdit} /><Kvp label="Funding" value={form.fundingSource} /><Kvp label="PO" value={form.purchaseOrder || '-'} /></Card>
        {form.notes && <Card className="md:col-span-2"><ReviewHeader title="Notes" onEdit={onEdit} /><p className="text-sm leading-6 text-[var(--ink)]">{form.notes}</p></Card>}
      </div>
      <Banner className="mt-5" tone="teal" title="What happens after you submit">HIP confirms each booking by email. The confirmation email includes a secure manage link for teacher, class, date or cancellation requests.</Banner>
      {message && <Banner className="mt-4" tone={message.type === 'success' ? 'teal' : 'rose'}>{message.text}</Banner>}
      <FooterNav onBack={onBack} onNext={onSubmit} nextLabel={submitting ? 'Submitting request…' : 'Submit request'} nextDisabled={submitting} loading={submitting} />
    </Screen>
  )
}

function SuccessStep({ booking, form, workshop, slot, onAnother, onManage }) {
  return (
    <main className="flex min-h-screen flex-col bg-[var(--paper)]">
      <Header />
      <div className="flex flex-1 items-center justify-center px-4 py-10">
        <section className="w-full max-w-xl text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--teal)] text-3xl font-bold text-white">✓</div>
          <h1 className="type-display text-[var(--navy)]">Request received</h1>
          <p className="type-body mx-auto mt-3 max-w-md text-[var(--ink-soft)]">Thanks. HIP will review your request and confirm the booking by email. Your details are used only to manage this course booking and reminders.</p>
          <Card className="mt-7 text-left">
            <Kvp label="Reference" value={booking?.public_ref || 'HIP request'} mono />
            <Kvp label="Course" value={workshop?.title || 'Online Primary'} />
            <Kvp label="Date" value={formatSlot(slot)} />
            <Kvp label="Submitted by" value={form.bookerEmail} />
            <Kvp label="Confirmation goes to" value={form.teacherEmail} />
          </Card>
          <Banner className="mt-5 text-left" tone="teal" title="Save the manage link">The confirmation email includes a unique link to view this booking and request changes. HIP approves all changes.</Banner>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button tone="outline" onClick={onAnother}>Book another course</Button>
            <Button onClick={onManage}>Open manage link</Button>
          </div>
        </section>
      </div>
      <PublicFooter />
    </main>
  )
}

function Screen({ children, step }) {
  return (
    <main className="flex min-h-screen flex-col bg-[var(--paper)]">
      <Header showStepper step={step} />
      <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </div>
      <PublicFooter />
    </main>
  )
}

function PageIntro({ title, text }) {
  return (
    <div className="mb-6">
      <h1 className="type-display text-[var(--navy)]">{title}</h1>
      <p className="type-body mt-2 max-w-2xl text-[var(--ink-soft)]">{text}</p>
    </div>
  )
}

function FooterNav({ onBack, onNext, nextLabel, nextDisabled, loading }) {
  return (
    <div className="mt-7 flex flex-col-reverse gap-3 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
      <Button tone="ghost" onClick={onBack} className={cx('max-sm:w-full', !onBack && 'invisible')}>Back</Button>
      <Button size="lg" onClick={onNext} disabled={nextDisabled} loading={loading} className="max-sm:w-full">{nextLabel}</Button>
    </div>
  )
}

function ReviewHeader({ title, onEdit }) {
  return (
    <div className="mb-2 flex items-center justify-between gap-3">
      <SectionLabel>{title}</SectionLabel>
      <Button type="button" size="sm" tone="ghost" onClick={onEdit}>Edit</Button>
    </div>
  )
}

export default function Home() {
  const [step, setStep] = useState('access')
  const [accessCode, setAccessCode] = useState('')
  const [loadingPilot, setLoadingPilot] = useState(false)
  const [failedAccessAttempts, setFailedAccessAttempts] = useState(0)
  const [accessLockedUntil, setAccessLockedUntil] = useState(0)
  const [pilot, setPilot] = useState({ unlocked: false, workshops: [], sessions: [], error: '', label: '' })
  const [workshopId, setWorkshopId] = useState('')
  const [slotId, setSlotId] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState(null)
  const [successBooking, setSuccessBooking] = useState(null)
  const [classLines, setClassLines] = useState([{ id: 'class-1', year_group: 'Composite P4/P5', class_count: 1, notes: '' }])
  const [form, setForm] = useState({
    schoolName: '',
    schoolType: 'Primary',
    region: 'NI',
    bookerName: '',
    bookerEmail: '',
    bookerPhone: '',
    teacherName: '',
    teacherEmail: '',
    teacherPhone: '',
    fundingSource: 'School funded',
    purchaseOrder: '',
    notes: '',
  })

  const selectedWorkshop = pilot.workshops.find((item) => item.id === workshopId)
  const slots = useMemo(() => pilot.sessions.filter((slot) => slot.workshopId === workshopId), [pilot.sessions, workshopId])
  const selectedSlot = slots.find((slot) => slot.id === slotId)

  useEffect(() => {
    if (!workshopId && pilot.workshops[0]) setWorkshopId(pilot.workshops[0].id)
  }, [pilot.workshops, workshopId])

  useEffect(() => {
    if (!slotId && slots[0]) setSlotId(slots.find((slot) => slot.status !== 'full' && slot.zoomReady)?.id || slots[0].id)
  }, [slotId, slots])

  function updateForm(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function unlockPilot(event) {
    event.preventDefault()
    if (!accessCode.trim()) {
      setPilot({ unlocked: false, workshops: [], sessions: [], error: 'Enter the access code from your HIP email.', label: '' })
      return
    }
    if (Date.now() < accessLockedUntil) {
      setPilot({ unlocked: false, workshops: [], sessions: [], error: 'Too many attempts. Try again in a minute.', label: '' })
      return
    }
    setLoadingPilot(true)
    setPilot({ unlocked: false, workshops: [], sessions: [], error: '', label: '' })
    const response = await fetch(`/api/public/booking-data?accessCode=${encodeURIComponent(accessCode)}`)
    const json = await response.json()
    setLoadingPilot(false)
    if (!json.ok) {
      const attempts = failedAccessAttempts + 1
      setFailedAccessAttempts(attempts)
      if (attempts >= 5) setAccessLockedUntil(Date.now() + 60000)
      const accessError = /invalid/i.test(json.error || '')
        ? "That code didn't match. Check the email from HIP, or contact us at info@hippsychology.com."
        : json.error || "That code didn't match. Check the email from HIP, or contact us at info@hippsychology.com."
      setPilot({ unlocked: false, workshops: [], sessions: [], error: attempts >= 5 ? 'Too many attempts. Try again in a minute.' : accessError, label: '' })
      return
    }
    setFailedAccessAttempts(0)
    setPilot({ unlocked: true, workshops: json.workshops || [], sessions: json.sessions || [], error: '', label: json.accessLabel || 'Pilot' })
    setWorkshopId(json.workshops?.[0]?.id || '')
    setSlotId('')
    setStep('course')
  }

  async function submitBooking() {
    setMessage(null)
    if (!selectedWorkshop || !selectedSlot) {
      setMessage({ type: 'error', text: 'Choose an open course date before sending the request.' })
      return
    }

    setSubmitting(true)
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        accessCode,
        workshopId: selectedWorkshop.id,
        requestedSlotId: selectedSlot.id,
        classLines: classLines.map(({ id, ...line }) => ({ ...line, class_count: Number(line.class_count || 1) })),
      }),
    })
    const json = await response.json()
    setSubmitting(false)
    if (!json.ok) {
      setMessage({ type: 'error', text: json.error || 'Could not send booking request' })
      return
    }
    setSuccessBooking(json.booking)
    setStep('success')
  }

  if (!pilot.unlocked && step === 'access') {
    return <AccessStep accessCode={accessCode} setAccessCode={setAccessCode} loading={loadingPilot} locked={Date.now() < accessLockedUntil} error={pilot.error} onSubmit={unlockPilot} />
  }
  if (step === 'course') return <CourseStep workshops={pilot.workshops} selectedId={workshopId} setSelectedId={(id) => { setWorkshopId(id); setSlotId('') }} onNext={() => setStep('date')} />
  if (step === 'date') return <DateStep slots={slots} selectedId={slotId} setSelectedId={setSlotId} onBack={() => setStep('course')} onNext={() => setStep('details')} />
  if (step === 'details') return <DetailsStep form={form} updateForm={updateForm} classLines={classLines} setClassLines={setClassLines} onBack={() => setStep('date')} onNext={() => setStep('review')} />
  if (step === 'review') return <ReviewStep form={form} classLines={classLines} workshop={selectedWorkshop} slot={selectedSlot} onBack={() => setStep('details')} onEdit={() => setStep('details')} onSubmit={submitBooking} submitting={submitting} message={message} />
  if (step === 'success') return <SuccessStep booking={successBooking} form={form} workshop={selectedWorkshop} slot={selectedSlot} onAnother={() => setStep('course')} onManage={() => { window.location.href = successBooking?.manage_url || '/showcase#manage-view' }} />
  return <AccessStep accessCode={accessCode} setAccessCode={setAccessCode} loading={loadingPilot} locked={Date.now() < accessLockedUntil} error={pilot.error} onSubmit={unlockPilot} />
}
