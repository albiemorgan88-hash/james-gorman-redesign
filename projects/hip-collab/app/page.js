'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://smhzgkvatlwbaxlyhnbm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtaHpna3ZhdGx3YmF4bHlobmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzMzM5MDIsImV4cCI6MjA4NzkwOTkwMn0.THuy6XYL94S2QWYlrAOacoBf_P7030VxZJwrjNc98Ss'
)

const PROGRAMMES = [
  'Ready For Action',
  'Tackling Anxiety',
  'Anti-Bullying',
  'Taking The Next Step',
  'The Truth About Vaping',
]

export default function Dashboard() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState({})
  const [programmeOpen, setProgrammeOpen] = useState(false)
  const [brochureText, setBrochureText] = useState('')
  const [brochureEditing, setBrochureEditing] = useState(false)
  const [drafts, setDrafts] = useState([])
  const [feedbackOpen, setFeedbackOpen] = useState(null)
  const [feedbackText, setFeedbackText] = useState('')
  const [feedbackSent, setFeedbackSent] = useState(false)

  useEffect(() => {
    async function load() {
      const { data: rows } = await supabase
        .from('hip_collab')
        .select('*')
        .eq('section', 'checklist')
      if (rows) {
        const map = {}
        rows.forEach(r => { map[r.item_key] = r.value })
        setData(map)
        if (map.brochure?.text) setBrochureText(map.brochure.text)
      }
      // Load drafts
      const { data: draftRows } = await supabase
        .from('hip_collab')
        .select('*')
        .eq('section', 'email_draft')
        .order('created_at', { ascending: true })
      if (draftRows && draftRows.length > 0) setDrafts(draftRows)

      setLoading(false)
    }
    load()
  }, [])

  const save = useCallback(async (key, value) => {
    setSaving(prev => ({ ...prev, [key]: true }))
    setData(prev => ({ ...prev, [key]: value }))
    await supabase
      .from('hip_collab')
      .upsert({
        section: 'checklist',
        item_key: key,
        value,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'section,item_key' })
    setTimeout(() => setSaving(prev => ({ ...prev, [key]: false })), 600)
  }, [])

  const approveDraft = useCallback(async (draft) => {
    await supabase
      .from('hip_collab')
      .upsert({
        section: 'email_draft',
        item_key: draft.item_key,
        value: { ...draft.value, approved: true, approved_at: new Date().toISOString() },
        updated_at: new Date().toISOString(),
      }, { onConflict: 'section,item_key' })
    setDrafts(prev => prev.map(d =>
      d.item_key === draft.item_key
        ? { ...d, value: { ...d.value, approved: true } }
        : d
    ))
  }, [])

  const submitFeedback = useCallback(async (draftKey) => {
    if (!feedbackText.trim()) return
    await supabase.from('hip_collab').upsert({
      section: 'feedback',
      item_key: `feedback_${draftKey}_${Date.now()}`,
      value: { draft_key: draftKey, text: feedbackText, submitted_at: new Date().toISOString() },
      updated_at: new Date().toISOString(),
    }, { onConflict: 'section,item_key' })
    setFeedbackText('')
    setFeedbackOpen(null)
    setFeedbackSent(true)
    setTimeout(() => setFeedbackSent(false), 3000)
  }, [feedbackText])

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="animate-pulse text-navy text-lg">Loading...</div>
      </div>
    )
  }

  const programme = data.lead_programme
  const gsc = data.gsc_access
  const brochure = data.brochure

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-navy text-white px-5 py-7">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold tracking-tight">Blue Canvas × HIP Psychology</h1>
          <p className="text-white/60 text-base mt-1">Campaign Collaboration</p>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6 space-y-6">

        {/* ─── SECTION 1: ACTION ITEMS ─── */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-navy font-bold text-xl">Action Items</h2>
            <p className="text-gray-400 text-sm mt-0.5">3 things we need from you</p>
          </div>

          {/* Item 1: Lead Programme */}
          <div className="px-5 py-5 border-b border-gray-50">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0">
                <div className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all ${
                  programme?.checked ? 'bg-green-500 border-green-500' : 'border-gray-300 bg-white'
                }`}>
                  {programme?.checked && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <p className={`text-base font-medium ${programme?.checked ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                  Pick your lead programme for September outreach
                </p>
                {programme?.selection && (
                  <p className="text-sm text-green-600 font-medium mt-1">✓ {programme.selection}</p>
                )}
                {saving.lead_programme && <p className="text-xs text-green-500 mt-1">Saved ✓</p>}
              </div>
            </div>
            {!programme?.checked && (
              <button
                onClick={() => setProgrammeOpen(!programmeOpen)}
                className="mt-3 ml-10 px-4 py-2.5 bg-navy text-white rounded-xl text-sm font-medium active:opacity-80 transition-opacity"
              >
                {programmeOpen ? 'Close' : 'Choose Programme ↓'}
              </button>
            )}
            {programmeOpen && !programme?.checked && (
              <div className="mt-3 ml-10 bg-gray-50 rounded-xl p-2 space-y-1">
                {PROGRAMMES.map(p => (
                  <button
                    key={p}
                    onClick={() => {
                      save('lead_programme', { checked: true, selection: p })
                      setProgrammeOpen(false)
                    }}
                    className="w-full text-left px-4 py-3 rounded-lg text-base text-gray-700 active:bg-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Item 2: GSC Access */}
          <div className="px-5 py-5 border-b border-gray-50">
            <button
              onClick={() => save('gsc_access', { checked: !gsc?.checked })}
              className="w-full flex items-start gap-3 text-left"
            >
              <div className="mt-0.5 flex-shrink-0">
                <div className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all ${
                  gsc?.checked ? 'bg-green-500 border-green-500' : 'border-gray-300 bg-white'
                }`}>
                  {gsc?.checked && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <p className={`text-base font-medium ${gsc?.checked ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                  Grant Google Search Console access
                </p>
                <p className="text-sm text-gray-400 mt-0.5">Add contact@bluecanvas.ai as a user</p>
                {saving.gsc_access && <p className="text-xs text-green-500 mt-1">Saved ✓</p>}
              </div>
            </button>
          </div>

          {/* Item 3: Brochure */}
          <div className="px-5 py-5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0">
                <div className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all ${
                  brochure?.checked ? 'bg-green-500 border-green-500' : 'border-gray-300 bg-white'
                }`}>
                  {brochure?.checked && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <p className={`text-base font-medium ${brochure?.checked ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                  Share any existing brochure or one-pager
                </p>
                <p className="text-sm text-gray-400 mt-0.5">Paste a link or type notes below</p>
                {saving.brochure && <p className="text-xs text-green-500 mt-1">Saved ✓</p>}
              </div>
            </div>
            {brochure?.checked && brochure?.text && !brochureEditing && (
              <div className="mt-3 ml-10 bg-green-50 rounded-xl px-4 py-3">
                <p className="text-sm text-green-800 whitespace-pre-wrap">{brochure.text}</p>
                <button
                  onClick={() => { setBrochureEditing(true); setBrochureText(brochure.text) }}
                  className="text-xs text-green-600 underline mt-2"
                >Edit</button>
              </div>
            )}
            {(!brochure?.checked || brochureEditing) && (
              <div className="mt-3 ml-10 space-y-2">
                <textarea
                  value={brochureText}
                  onChange={(e) => setBrochureText(e.target.value)}
                  placeholder="Paste a link or type notes here..."
                  className="w-full p-3 border border-gray-200 rounded-xl text-base resize-none h-24 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/40"
                />
                <button
                  onClick={() => {
                    if (brochureText.trim()) {
                      save('brochure', { checked: true, text: brochureText.trim() })
                      setBrochureEditing(false)
                    }
                  }}
                  className="px-5 py-2.5 bg-navy text-white rounded-xl text-sm font-medium active:opacity-80 transition-opacity"
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ─── SECTION 2: EMAIL DRAFTS ─── */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-navy font-bold text-xl">Email Drafts</h2>
          </div>
          <div className="px-5 py-6">
            {drafts.length === 0 ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-base">Drafts coming soon</p>
                <p className="text-gray-400 text-sm mt-1">We&apos;ll ping you when they&apos;re ready to review</p>
              </div>
            ) : (
              <div className="space-y-5">
                {drafts.map((draft) => {
                  const v = draft.value || {}
                  const isApproved = v.approved
                  return (
                    <div key={draft.item_key} className={`border rounded-xl overflow-hidden ${isApproved ? 'border-green-200 bg-green-50/30' : 'border-gray-200'}`}>
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-bold text-navy">{v.subject || 'Email Draft'}</p>
                          {isApproved && (
                            <span className="inline-flex items-center px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                              Approved ✅
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="px-4 py-3">
                        <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{v.body || ''}</p>
                      </div>
                      {!isApproved && (
                        <div className="px-4 py-3 border-t border-gray-100 space-y-3">
                          <div className="flex gap-3">
                            <button
                              onClick={() => approveDraft(draft)}
                              className="flex-1 py-3 bg-green-500 text-white rounded-xl text-base font-bold active:bg-green-600 transition-colors"
                            >
                              ✅ Approve
                            </button>
                            <button
                              onClick={() => {
                                setFeedbackOpen(feedbackOpen === draft.item_key ? null : draft.item_key)
                                setFeedbackText('')
                              }}
                              className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl text-base font-medium active:bg-gray-200 transition-colors"
                            >
                              ✏️ Request Changes
                            </button>
                          </div>
                          {feedbackOpen === draft.item_key && (
                            <div className="space-y-2">
                              <textarea
                                value={feedbackText}
                                onChange={(e) => setFeedbackText(e.target.value)}
                                placeholder="What would you like changed?"
                                className="w-full p-3 border border-gray-200 rounded-xl text-base resize-none h-28 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/40"
                              />
                              <button
                                onClick={() => submitFeedback(draft.item_key)}
                                className="w-full py-3 bg-navy text-white rounded-xl text-base font-bold active:opacity-80 transition-opacity"
                              >
                                Send Feedback
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
                {feedbackSent && (
                  <div className="text-center py-2">
                    <p className="text-green-600 text-sm font-medium">✓ Feedback sent — we&apos;ll update the draft</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ─── SECTION 3: CAMPAIGN PROGRESS ─── */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-navy font-bold text-xl">Campaign Progress</h2>
          </div>
          <div className="px-5 py-6">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Emails sent', value: '—', icon: '📧' },
                { label: 'Opened', value: '—', icon: '👀' },
                { label: 'Replied', value: '—', icon: '💬' },
                { label: 'Meetings booked', value: '—', icon: '📅' },
              ].map(s => (
                <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-2xl font-bold text-gray-300">{s.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-400 mt-4">First report after initial send</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-400 pb-8 pt-2">
          Powered by <span className="font-medium text-navy/60">Blue Canvas</span> · bluecanvas.ai
        </footer>
      </main>
    </div>
  )
}
