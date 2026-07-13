'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { Banner, Button, Card, Field, Kvp, Pill, SectionLabel, cx, formatSlot, inputClass, prettyStatus, statusTone } from '../../components/hip-ui'
import { getBrowserSupabase } from '../../lib/supabase/browser'

function Stat({ label, value, tone = 'navy', sub }) {
  const colors = {
    navy: 'text-[var(--navy)]',
    teal: 'text-[var(--teal)]',
    amber: 'text-[var(--amber)]',
    rose: 'text-[var(--rose)]',
  }
  return (
    <Card className="p-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--ink-muted)]">{label}</p>
      <p className={cx('serif mt-2 text-4xl font-semibold leading-none', colors[tone])}>{value}</p>
      {sub && <p className="mt-2 text-xs text-[var(--ink-muted)]">{sub}</p>}
    </Card>
  )
}

function Sidebar({ staff, onSignOut }) {
  const groups = [
    ['Bookings', [['Inbox', '12'], ['All requests', '16'], ['Change requests', '1']]],
    ['Operations', [['Courses & sessions'], ['Checklist'], ['Schools']]],
    ['Settings', [['Connections'], ['Team']]],
  ]
  return (
    <aside className="hidden w-60 shrink-0 border-r border-[var(--line)] bg-[var(--surface-2)] p-3 lg:flex lg:flex-col">
      <div className="flex items-center gap-3 px-2 py-3">
        <Image src="/img/hip-logo.png" alt="HIP Psychology" width={48} height={44} className="h-10 w-auto object-contain" />
        <div>
          <p className="text-sm font-semibold text-[var(--navy)]">HIP Psychology</p>
          <p className="text-[11px] uppercase tracking-[0.08em] text-[var(--ink-muted)]">Course bookings</p>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        {groups.map(([label, items]) => (
          <nav key={label}>
            <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--ink-muted)]">{label}</p>
            <div className="space-y-1">
              {items.map(([item, count], index) => (
                <button key={item} className={cx('flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm font-semibold', index === 0 && label === 'Bookings' ? 'border-[var(--line)] bg-white text-[var(--navy)] shadow-[var(--shadow-1)]' : 'border-transparent text-[var(--ink-soft)] hover:bg-white')}>
                  <span>{item}</span>
                  {count && <span className="rounded-full bg-[var(--paper-2)] px-2 py-0.5 text-[11px] text-[var(--ink-muted)]">{count}</span>}
                </button>
              ))}
            </div>
          </nav>
        ))}
      </div>
      <div className="mt-auto border-t border-[var(--line)] pt-3">
        <div className="flex items-center gap-3 rounded-md px-2 py-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--navy)] text-xs font-bold text-white">{staff?.email?.[0]?.toUpperCase() || 'H'}</span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-[var(--ink)]">{staff?.email || 'HIP staff'}</p>
            <p className="text-[11px] text-[var(--ink-muted)]">{staff?.role || 'staff'}</p>
          </div>
        </div>
        <Button tone="ghost" size="sm" className="mt-2 w-full justify-start" onClick={onSignOut}>Sign out</Button>
      </div>
    </aside>
  )
}

function RequestRow({ booking, active, onClick }) {
  const slot = booking.confirmed_slot || booking.requested_slot
  return (
    <button onClick={onClick} className={cx('hip-row w-full rounded-lg border p-4 text-left transition', active ? 'border-[var(--teal)] bg-[var(--teal-tint)]' : 'border-[var(--line)] bg-white')}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[var(--navy)]">{booking.schools?.name || 'Unknown school'}</p>
          <p className="mt-1 text-xs text-[var(--ink-muted)]">{booking.public_ref} · {booking.workshops?.title || 'Course'}</p>
          <p className="mt-1 text-xs text-[var(--ink-soft)]">{formatSlot(slot)}</p>
        </div>
        <Pill tone={statusTone(booking.status)}>{prettyStatus(booking.status)}</Pill>
      </div>
    </button>
  )
}

function InfoCard({ title, rows, warn }) {
  return (
    <Card className={cx('p-4', warn && 'border-[var(--amber-soft)] bg-[var(--amber-tint)]')}>
      <SectionLabel>{title}</SectionLabel>
      <dl>{rows.map(([key, value]) => <Kvp key={key} label={key} value={value} />)}</dl>
    </Card>
  )
}

export default function AdminPage() {
  const [state, setState] = useState({ loading: true, user: null, token: null, staff: null })
  const [bookings, setBookings] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [message, setMessage] = useState('')
  const [saving, setSaving] = useState(false)
  const [sessionDraft, setSessionDraft] = useState({ capacity: '', zoomRegistrationUrl: '', presenterName: '', status: '' })

  async function loadBookings(token) {
    const res = await fetch('/api/admin/bookings', { headers: { Authorization: `Bearer ${token}` } })
    const json = await res.json()
    if (!json.ok) {
      setMessage(json.error || 'Could not load bookings')
      return
    }
    setBookings(json.bookings || [])
    setSelectedId((current) => current || json.bookings?.[0]?.id || null)
    setState((current) => ({ ...current, staff: json.staff || current.staff }))
  }

  useEffect(() => {
    try {
      const supabase = getBrowserSupabase()
      Promise.race([
        supabase.auth.getSession(),
        new Promise((resolve) => setTimeout(() => resolve({ data: { session: null }, timedOut: true }), 5000)),
      ]).then(async ({ data, timedOut }) => {
        if (timedOut) setMessage('Could not confirm the staff session. Please sign in again.')
        const session = data.session
        if (!session?.user) {
          setState({ loading: false, user: null, token: null, staff: null })
          return
        }
        setState({ loading: false, user: session.user, token: session.access_token, staff: null })
        await loadBookings(session.access_token)
      })
    } catch (error) {
      setState({ loading: false, user: null, token: null, staff: null })
      setMessage(error.message)
    }
  }, [])

  const selected = useMemo(() => bookings.find((b) => b.id === selectedId) || bookings[0] || null, [bookings, selectedId])
  const needsAttention = bookings.filter((b) => b.status === 'requested' || b.status === 'change_requested' || !b.teacher?.email || !(b.confirmed_slot || b.requested_slot)?.zoom_registration_url).length
  const confirmed = bookings.filter((b) => b.status === 'confirmed').length
  const pendingChecklist = bookings.flatMap((b) => b.sync_jobs || []).filter((job) => job.status === 'pending').length
  const changeRequests = bookings.flatMap((b) => b.change_requests || []).filter((request) => request.status === 'requested').length

  useEffect(() => {
    const slot = selected?.confirmed_slot || selected?.requested_slot
    setSessionDraft({
      capacity: slot?.capacity || '',
      zoomRegistrationUrl: slot?.zoom_registration_url || '',
      presenterName: slot?.presenter_name || '',
      status: slot?.status || 'open',
    })
  }, [selected])

  async function signOut() {
    const supabase = getBrowserSupabase()
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  async function mutateBooking(body) {
    if (!selected || !state.token) return
    setSaving(true)
    setMessage('')
    const res = await fetch(`/api/admin/booking/${selected.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${state.token}` },
      body: JSON.stringify(body),
    })
    const json = await res.json()
    setSaving(false)
    if (!json.ok) {
      setMessage(json.error || 'Could not update booking')
      return
    }
    setMessage('Booking updated.')
    await loadBookings(state.token)
  }

  async function updateSession(event) {
    event.preventDefault()
    const slot = selected?.confirmed_slot || selected?.requested_slot
    if (!slot || !state.token) return
    setSaving(true)
    const res = await fetch(`/api/admin/session/${slot.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${state.token}` },
      body: JSON.stringify(sessionDraft),
    })
    const json = await res.json()
    setSaving(false)
    setMessage(json.ok ? 'Session readiness updated.' : json.error || 'Could not update session')
    if (json.ok) await loadBookings(state.token)
  }

  async function updateSyncJob(job, status = 'synced') {
    if (!state.token) return
    const res = await fetch(`/api/admin/sync-job/${job.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${state.token}` },
      body: JSON.stringify({ status }),
    })
    const json = await res.json()
    setMessage(json.ok ? `${job.target.replaceAll('_', ' ')} checklist updated.` : json.error || 'Could not update checklist')
    if (json.ok) await loadBookings(state.token)
  }

  async function copyChecklist(job) {
    const text = job.payload?.copyText || JSON.stringify(job.payload || {}, null, 2)
    await navigator.clipboard.writeText(text)
    setMessage('Checklist text copied.')
  }

  if (state.loading) return (
    <main className="min-h-screen bg-[var(--paper)] p-8">
      <Card className="mx-auto max-w-5xl">
        <p className="eyebrow text-[var(--teal)]">HIP staff access</p>
        <div className="mt-5 grid gap-4 md:grid-cols-[320px_1fr]">
          <div className="space-y-3">
            {[1, 2, 3].map((item) => <div key={item} className="h-20 animate-pulse rounded-xl bg-[var(--paper-2)]" />)}
          </div>
          <div className="space-y-3">
            <div className="h-12 animate-pulse rounded-xl bg-[var(--paper-2)]" />
            <div className="h-48 animate-pulse rounded-xl bg-[var(--paper-2)]" />
          </div>
        </div>
      </Card>
    </main>
  )
  if (!state.user) {
    return (
      <main className="min-h-screen bg-[var(--paper)] p-8">
        <Card className="mx-auto max-w-xl p-8">
          <h1 className="serif text-5xl font-semibold text-[var(--navy)]">Login required</h1>
          <p className="mt-2 text-[var(--ink-soft)]">Use your HIP Booking staff login to view requests.</p>
          <Link href="/login" className="mt-5 inline-flex rounded-md border border-[var(--navy)] bg-[var(--navy)] px-4 py-2 text-sm font-semibold text-white">Go to login</Link>
        </Card>
      </main>
    )
  }

  const slot = selected?.confirmed_slot || selected?.requested_slot
  const checklist = (selected?.sync_jobs || []).filter((job) => ['zoho', 'google_calendar'].includes(job.target))

  return (
    <main className="flex min-h-screen bg-[var(--paper)]">
      <Sidebar staff={{ ...state.staff, email: state.user.email }} onSignOut={signOut} />
      <section className="flex min-w-0 flex-1 flex-col">
        <header className="border-b border-[var(--line)] bg-[var(--surface)] px-4 py-5 sm:px-7">
          <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--ink-muted)]">Today</p>
              <h1 className="serif mt-1 text-4xl font-semibold text-[var(--navy)]">Course booking dashboard</h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--ink-soft)]">
                New school requests, confirmations, change requests and V1 manual checklist items in one place.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/" className="rounded-md border border-[var(--line-strong)] bg-white px-3.5 py-2 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface-2)]">Public booking</Link>
              <Link href="/showcase" className="rounded-md border border-[var(--line-strong)] bg-white px-3.5 py-2 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface-2)]">Showcase</Link>
              <Button onClick={signOut}>Sign out</Button>
            </div>
          </div>
        </header>

        <div className="grid gap-4 px-4 py-5 sm:grid-cols-2 sm:px-7 xl:grid-cols-4">
          <Stat label="Needs attention" value={needsAttention} tone="rose" sub="Requests, changes or missing readiness" />
          <Stat label="Confirmed courses" value={confirmed} tone="teal" sub="Ready for school delivery" />
          <Stat label="Total requests" value={bookings.length} sub="Current booking records" />
          <Stat label="Checklist items" value={pendingChecklist} tone="amber" sub={`${changeRequests} change request(s)`} />
        </div>

        {message && <div className="mx-4 mb-4 sm:mx-7"><Banner tone="amber">{message}</Banner></div>}

        <div className="grid min-h-0 flex-1 gap-5 px-4 pb-7 sm:px-7 xl:grid-cols-[360px_1fr]">
          <Card className="min-h-0 p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <SectionLabel>Requests</SectionLabel>
              <Pill tone="amber">Live data</Pill>
            </div>
            <div className="max-h-[720px] space-y-3 overflow-auto pr-1">
              {bookings.map((booking) => <RequestRow key={booking.id} booking={booking} active={selected?.id === booking.id} onClick={() => setSelectedId(booking.id)} />)}
              {!bookings.length && <Banner>No live booking requests yet. New requests appear here once schools submit the public form.</Banner>}
            </div>
          </Card>

          <div className="min-w-0 space-y-5">
            {selected ? (
              <>
                <Card className="p-5">
                  <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Pill tone={statusTone(selected.status)}>{prettyStatus(selected.status)}</Pill>
                        <span className="font-mono text-xs text-[var(--ink-muted)]">{selected.public_ref}</span>
                      </div>
                      <h2 className="type-h1 text-[var(--navy)]">{selected.schools?.name}</h2>
                      <p className="mt-2 text-sm text-[var(--ink-soft)]">{selected.workshops?.title || 'Course'} · {formatSlot(slot)}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button tone="teal" disabled={saving || selected.status === 'confirmed'} loading={saving} onClick={() => mutateBooking({ action: 'confirm', confirmedSlotId: selected.requested_slot_id })}>{saving ? 'Saving…' : 'Confirm course place'}</Button>
                      <Button tone="danger" disabled={saving || selected.status === 'cancelled'} onClick={() => mutateBooking({ action: 'cancel' })}>Cancel</Button>
                    </div>
                  </div>
                </Card>

                <div className="grid gap-4 lg:grid-cols-2">
                  <InfoCard title="School" rows={[['Name', selected.schools?.name], ['Booker', selected.booker?.name], ['Email', selected.booker?.email], ['Phone', selected.booker?.phone || '-']]} />
                  <InfoCard title="Attending teacher" warn={!selected.teacher?.email} rows={[['Name', selected.teacher?.name], ['Email', selected.teacher?.email || 'Missing'], ['Phone', selected.teacher?.phone || '-']]} />
                  <InfoCard title="Class lines" rows={(selected.booking_class_lines || []).map((line, index) => [`Line ${index + 1}`, `${line.year_group}: ${line.class_count} class(es)${line.notes ? ` · ${line.notes}` : ''}`])} />
                  <InfoCard title="Funding & PO" rows={[['Funding', selected.funding_source || 'TBC'], ['PO number', selected.purchase_order || '-'], ['Total classes', selected.total_classes]]} />
                </div>

                <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
                  <div className="space-y-5">
                    <Card>
                      <SectionLabel>Session readiness</SectionLabel>
                      <form onSubmit={updateSession} className="grid gap-4 md:grid-cols-2">
                        <Field label="Capacity"><input className={inputClass()} type="number" min="1" value={sessionDraft.capacity} onChange={(event) => setSessionDraft((current) => ({ ...current, capacity: event.target.value }))} /></Field>
                        <Field label="Presenter"><input className={inputClass()} value={sessionDraft.presenterName} onChange={(event) => setSessionDraft((current) => ({ ...current, presenterName: event.target.value }))} /></Field>
                        <Field label="Course joining link"><input className={inputClass()} value={sessionDraft.zoomRegistrationUrl} onChange={(event) => setSessionDraft((current) => ({ ...current, zoomRegistrationUrl: event.target.value }))} /></Field>
                        <Field label="Status"><select className={inputClass()} value={sessionDraft.status} onChange={(event) => setSessionDraft((current) => ({ ...current, status: event.target.value }))}><option>open</option><option>draft</option><option>full</option><option>cancelled</option></select></Field>
                        <div className="md:col-span-2"><Button disabled={saving}>Save session readiness</Button></div>
                      </form>
                    </Card>

                    <Card>
                      <SectionLabel>School change requests</SectionLabel>
                      {(selected.change_requests || []).length > 0 ? (
                        <div className="space-y-3">
                          {selected.change_requests.map((request) => (
                            <div key={request.id} className="rounded-xl border border-[var(--rose-soft)] bg-[var(--rose-tint)] p-4">
                              <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-start">
                                <div>
                                  <Pill tone={statusTone(request.status)}>{prettyStatus(request.status)}</Pill>
                                  <p className="mt-2 font-semibold text-[var(--navy)]">{prettyStatus(request.request_type)}</p>
                                  <pre className="mt-2 max-h-56 overflow-auto whitespace-pre-wrap rounded-lg bg-white p-3 text-xs text-[var(--ink-soft)]">{JSON.stringify(request.request_payload, null, 2)}</pre>
                                </div>
                                {request.status === 'requested' && <div className="flex gap-2"><Button tone="teal" onClick={() => mutateBooking({ action: 'approve_change', changeRequestId: request.id })}>Approve</Button><Button tone="danger" onClick={() => mutateBooking({ action: 'reject_change', changeRequestId: request.id })}>Reject</Button></div>}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="rounded-xl border border-dashed border-[var(--line-strong)] bg-[var(--surface-2)] p-6 text-center">
                          <p className="font-semibold text-[var(--navy)]">No change requests in the last 30 days.</p>
                          <p className="mt-1 text-sm text-[var(--ink-soft)]">School requests will appear here for HIP approval.</p>
                        </div>
                      )}
                    </Card>
                  </div>

                  <aside className="space-y-5">
                    <Card>
                      <SectionLabel>Booking checklist</SectionLabel>
                      <div className="space-y-2">
                        {checklist.map((job) => (
                          <div key={job.id} className="rounded-md border border-[var(--line)] bg-[var(--surface)] p-3">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-sm font-semibold capitalize text-[var(--ink)]">{job.target.replaceAll('_', ' ')}</p>
                                <p className="mt-1 text-xs text-[var(--ink-muted)]">Manual V1 checklist step</p>
                              </div>
                              <Pill tone={statusTone(job.status)}>{prettyStatus(job.status)}</Pill>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <Button size="sm" tone="outline" type="button" onClick={() => copyChecklist(job)}>Copy</Button>
                              <Button size="sm" tone="teal" type="button" onClick={() => updateSyncJob(job, 'synced')}>Mark done</Button>
                              <Button size="sm" tone="danger" type="button" onClick={() => updateSyncJob(job, 'failed')}>Flag issue</Button>
                            </div>
                          </div>
                        ))}
                        {!checklist.length && <p className="text-sm text-[var(--ink-muted)]">Checklist items appear after a booking request is created.</p>}
                      </div>
                      <Banner className="mt-4" tone="amber">Zoho and calendar are manual checklist steps in V1. Auto-sync stays post-pilot.</Banner>
                    </Card>

                    <Card>
                      <SectionLabel>Go-live connections</SectionLabel>
                      <div className="space-y-3">
                        {[
                          ['Transactional email', 'Needs HIP domain', 'amber'],
                          ['Course dates', 'Awaiting HIP input', 'amber'],
                          ['Staff accounts', 'Awaiting final users', 'amber'],
                          ['Zoho / calendar', 'Manual in V1', 'neutral'],
                          ['Pilot access codes', 'Ready', 'success'],
                          ['Booking database', 'Source of truth', 'success'],
                        ].map(([label, value, tone]) => (
                          <div key={label} className="flex items-center justify-between gap-3 text-sm">
                            <span className="font-medium text-[var(--ink)]">{label}</span>
                            <Pill tone={tone}>{value}</Pill>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </aside>
                </div>
              </>
            ) : <Card><p className="text-[var(--ink-soft)]">Pick a request to view details.</p></Card>}
          </div>
        </div>
      </section>
    </main>
  )
}
