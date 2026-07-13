'use client'

import { useEffect, useState } from 'react'
import { Banner, Button, Card, Field, Kvp, Pill, PublicFooter, PublicHeader, SectionLabel, formatSlot, inputClass, prettyStatus, statusTone, textareaClass } from '../../../components/hip-ui'

const changeOptions = [
  { value: 'details_update', title: 'Change attending teacher', body: 'A different teacher will attend or contact details need updated.' },
  { value: 'class_update', title: 'Update class details', body: 'Class groups, numbers or notes have changed.' },
  { value: 'reschedule', title: 'Request a different date', body: 'The confirmed date no longer works for the school.' },
  { value: 'cancel', title: 'Request cancellation', body: 'The school can no longer attend this course.' },
]

export default function ManageBookingPage({ params }) {
  const [state, setState] = useState({ loading: true, booking: null, error: '' })
  const [form, setForm] = useState({
    requestType: 'details_update',
    requesterEmail: '',
    teacherName: '',
    teacherEmail: '',
    teacherPhone: '',
    preferredSlot: '',
    classDetails: '',
    notes: '',
  })
  const [message, setMessage] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch(`/api/booking/${params.token}`)
      .then((res) => res.json())
      .then((json) => {
        if (!json.ok) setState({ loading: false, booking: null, error: json.error || 'Booking not found' })
        else {
          setState({ loading: false, booking: json.booking, error: '' })
          setForm((current) => ({
            ...current,
            requesterEmail: json.booking.teacher?.email || '',
            teacherName: json.booking.teacher?.name || '',
            teacherEmail: json.booking.teacher?.email || '',
            teacherPhone: json.booking.teacher?.phone || '',
            classDetails: (json.booking.classLines || []).map((line) => `${line.year_group}: ${line.class_count} class(es)`).join(', '),
          }))
        }
      })
      .catch((error) => setState({ loading: false, booking: null, error: error.message }))
  }, [params.token])

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function submit(event) {
    event.preventDefault()
    setSaving(true)
    setMessage('')
    const res = await fetch(`/api/booking/${params.token}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const json = await res.json()
    setSaving(false)
    setMessage(json.ok ? 'Thanks. HIP has received your change request and will confirm the outcome by email.' : json.error || 'Could not send change request')
  }

  return (
    <main className="flex min-h-screen flex-col bg-[var(--paper)]">
      <PublicHeader />

      <div className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {state.loading && (
          <Card>
            <p className="eyebrow text-[var(--teal)]">Secure manage link</p>
            <div className="mt-5 space-y-3">
              <div className="h-10 max-w-sm animate-pulse rounded-xl bg-[var(--paper-2)]" />
              <div className="h-28 animate-pulse rounded-xl bg-[var(--paper-2)]" />
              <div className="grid gap-3 md:grid-cols-2">
                <div className="h-24 animate-pulse rounded-xl bg-[var(--paper-2)]" />
                <div className="h-24 animate-pulse rounded-xl bg-[var(--paper-2)]" />
              </div>
            </div>
          </Card>
        )}
        {state.error && <Banner tone="rose">{state.error}</Banner>}

        {state.booking && (
          <div className="space-y-5">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <p className="eyebrow text-[var(--ink-muted)]">Your booking</p>
                <h1 className="type-display mt-1 text-[var(--navy)]">{state.booking.school}</h1>
                <p className="mt-2 text-sm text-[var(--ink-soft)]">{state.booking.workshop} · {formatSlot(state.booking.slot)}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Pill tone={statusTone(state.booking.status)}>{prettyStatus(state.booking.status)}</Pill>
                {state.booking.openChangeRequests > 0 && <Pill tone="amber">Change requested</Pill>}
              </div>
            </div>

            {state.booking.openChangeRequests > 0 && (
              <Banner tone="amber" title="Change request already sent">HIP is already reviewing a change request for this booking. The current booking stays in place until HIP replies.</Banner>
            )}

            <Card className="bg-[var(--surface-2)]">
              <div className="mb-3 flex items-center justify-between gap-3">
                <SectionLabel>Booking summary</SectionLabel>
                <Pill tone="teal">HIP approves changes</Pill>
              </div>
              <div className="grid gap-x-8 md:grid-cols-2">
                <Kvp label="Reference" value={state.booking.public_ref} mono />
                <Kvp label="Date & time" value={formatSlot(state.booking.slot)} />
                <Kvp label="School" value={state.booking.school} />
                <Kvp label="Course" value={state.booking.workshop} />
                <Kvp label="Attending teacher" value={state.booking.teacher?.name} />
                <Kvp label="Teacher email" value={state.booking.teacher?.email} />
              </div>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <SectionLabel>Class lines</SectionLabel>
                {(state.booking.classLines || []).map((line, index) => <Kvp key={`${line.year_group}-${index}`} label={`Line ${index + 1}`} value={`${line.year_group}: ${line.class_count} class(es)`} />)}
              </Card>
              <Card>
                <SectionLabel>Change rules</SectionLabel>
                <p className="text-sm leading-6 text-[var(--ink-soft)]">Schools can request changes from this page, but confirmed booking details do not change until HIP reviews and approves the request.</p>
              </Card>
            </div>

            <Banner tone="teal" title="Need to change something?">Choose the change type below and send a short note. HIP will reply by email.</Banner>

            <form onSubmit={submit} className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <Card>
                <SectionLabel>Request a change</SectionLabel>
                <div className="space-y-3">
                  {changeOptions.map((option) => (
                    <button key={option.value} type="button" onClick={() => update('requestType', option.value)} className={`w-full rounded-xl border p-4 text-left transition ${form.requestType === option.value ? 'border-[var(--teal)] bg-[var(--teal-tint)]' : 'border-[var(--line)] bg-white hover:border-[var(--teal-soft)]'}`}>
                      <div className="flex items-start gap-3">
                        <span className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-bold ${form.requestType === option.value ? 'border-[var(--teal)] bg-[var(--teal)] text-white' : 'border-[var(--line-strong)] text-transparent'}`}>✓</span>
                        <span>
                          <span className="block text-sm font-semibold text-[var(--navy)]">{option.title}</span>
                          <span className="mt-1 block text-xs leading-5 text-[var(--ink-soft)]">{option.body}</span>
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </Card>

              <Card>
                <SectionLabel>Details for HIP</SectionLabel>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Your email"><input className={inputClass()} type="email" value={form.requesterEmail} onChange={(event) => update('requesterEmail', event.target.value)} autoComplete="email" autoCapitalize="none" spellCheck="false" /></Field>
                  <Field label="Attending teacher email"><input className={inputClass()} type="email" value={form.teacherEmail} onChange={(event) => update('teacherEmail', event.target.value)} autoComplete="email" autoCapitalize="none" spellCheck="false" /></Field>
                  <Field label="Attending teacher name"><input className={inputClass()} value={form.teacherName} onChange={(event) => update('teacherName', event.target.value)} /></Field>
                  <Field label="Teacher phone" optional><input className={inputClass()} value={form.teacherPhone} onChange={(event) => update('teacherPhone', event.target.value)} /></Field>
                </div>
                <div className="mt-4 space-y-4">
                  <Field label="Preferred date if rescheduling" optional><input className={inputClass()} value={form.preferredSlot} onChange={(event) => update('preferredSlot', event.target.value)} placeholder="Date/time or course date label" /></Field>
                  <Field label="Class details"><textarea className={textareaClass('min-h-24')} value={form.classDetails} onChange={(event) => update('classDetails', event.target.value)} /></Field>
                  <Field label="Notes for HIP"><textarea className={textareaClass('min-h-28')} value={form.notes} onChange={(event) => update('notes', event.target.value)} placeholder="Tell HIP what needs changed and why" /></Field>
                </div>
                {message && <Banner className="mt-4" tone={message.startsWith('Thanks') ? 'teal' : 'rose'}>{message}</Banner>}
                <Button disabled={saving} loading={saving} className="mt-5 w-full" size="lg">{saving ? 'Sending request…' : 'Send change request'}</Button>
              </Card>
            </form>
          </div>
        )}
      </div>
      <PublicFooter />
    </main>
  )
}
