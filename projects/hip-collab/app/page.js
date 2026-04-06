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

const CORMAC_ITEMS = [
  { key: 'lead_programme', label: 'Pick lead programme for KS3', hasDropdown: true },
  { key: 'gsc_access', label: 'Grant Google Search Console access to contact@bluecanvas.ai' },
  { key: 'brochure', label: 'Share brochure or one-pager', hasTextInput: true },
  { key: 'approve_draft', label: 'Approve email draft' },
  { key: 'confirm_pricing', label: 'Confirm workshop pricing' },
]

const BC_ITEMS = [
  { key: 'bc_contact_list', label: 'Build KS3 contact list (30 leads)', defaultChecked: true },
  { key: 'bc_email_sequence', label: 'Draft outreach email sequence' },
  { key: 'bc_zoho_campaign', label: 'Set up Zoho email campaign' },
  { key: 'bc_email_config', label: 'Configure sending from cormac@hippsychology.com' },
  { key: 'bc_seo_audit', label: 'SEO baseline audit' },
  { key: 'bc_first_batch', label: 'First batch send (10 leads)' },
  { key: 'bc_weekly_report', label: 'Weekly report #1' },
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function Checkbox({ checked, onChange, disabled }) {
  return (
    <button
      onClick={onChange}
      disabled={disabled}
      className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 ${
        checked
          ? disabled
            ? 'bg-gray-300 border-gray-300 cursor-default'
            : 'bg-green-500 border-green-500 check-animate'
          : 'border-gray-300 bg-white hover:border-gray-400'
      }`}
    >
      {checked && <CheckIcon />}
    </button>
  )
}

function ProgressBar({ done, total }) {
  const pct = total > 0 ? Math.round((done / total) * 100) : 0
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-sm font-bold text-gray-500 whitespace-nowrap">{done}/{total} complete</span>
    </div>
  )
}

function SectionCard({ title, children, accent }) {
  const border =
    accent === 'teal' ? 'border-t-teal-500' :
    accent === 'navy' ? 'border-t-[#1a1a2e]' :
    accent === 'amber' ? 'border-t-amber-500' :
    'border-t-gray-300'
  return (
    <section className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden border-t-4 ${border}`}>
      {children}
    </section>
  )
}

export default function Dashboard() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState({})
  const [programmeOpen, setProgrammeOpen] = useState(false)
  const [brochureText, setBrochureText] = useState('')
  const [brochureEditing, setBrochureEditing] = useState(false)

  // Messages
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [messageAuthor, setMessageAuthor] = useState('Blue Canvas')
  const [postingMessage, setPostingMessage] = useState(false)

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

      const { data: msgRows } = await supabase
        .from('hip_collab_messages')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50)
      if (msgRows) setMessages(msgRows)

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
    setTimeout(() => setSaving(prev => ({ ...prev, [key]: false })), 800)
  }, [])

  const toggleItem = useCallback((key, currentVal) => {
    const checked = !(currentVal?.checked)
    save(key, { ...currentVal, checked })
  }, [save])

  const postMessage = useCallback(async () => {
    if (!newMessage.trim() || postingMessage) return
    setPostingMessage(true)
    const { data: inserted, error } = await supabase
      .from('hip_collab_messages')
      .insert({ author: messageAuthor, message: newMessage.trim() })
      .select()
      .single()
    if (!error && inserted) {
      setMessages(prev => [inserted, ...prev])
    }
    setNewMessage('')
    setPostingMessage(false)
  }, [newMessage, messageAuthor, postingMessage])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center">
        <div className="animate-pulse text-[#1a1a2e] text-lg font-medium">Loading dashboard…</div>
      </div>
    )
  }

  const cormacDone = CORMAC_ITEMS.filter(i => data[i.key]?.checked).length
  const bcDone = BC_ITEMS.filter(i => data[i.key]?.checked || (i.defaultChecked && data[i.key]?.checked !== false && !data[i.key])).length

  function formatTime(ts) {
    const d = new Date(ts)
    const now = new Date()
    const diffMins = Math.floor((now - d) / 60000)
    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    const diffHrs = Math.floor(diffMins / 60)
    if (diffHrs < 24) return `${diffHrs}h ago`
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <header className="bg-[#1a1a2e] text-white px-5 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Blue Canvas × HIP Psychology</h1>
          <p className="text-white/50 text-base mt-1">Campaign Collaboration Dashboard</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">

        {/* ═══ SECTION 1: Cormac's Actions ═══ */}
        <SectionCard accent="teal">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-[#1a1a2e] font-bold text-xl">Cormac&apos;s Actions</h2>
            <div className="mt-2">
              <ProgressBar done={cormacDone} total={CORMAC_ITEMS.length} />
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {CORMAC_ITEMS.map(item => {
              const val = data[item.key]
              const checked = val?.checked || false

              return (
                <div key={item.key} className="px-5 py-4">
                  <div className="flex items-start gap-3">
                    {!item.hasDropdown && !item.hasTextInput && (
                      <div className="mt-0.5">
                        <Checkbox checked={checked} onChange={() => toggleItem(item.key, val)} />
                      </div>
                    )}
                    {(item.hasDropdown || item.hasTextInput) && (
                      <div className="mt-0.5">
                        <div className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all ${
                          checked ? 'bg-green-500 border-green-500' : 'border-gray-300 bg-white'
                        }`}>
                          {checked && <CheckIcon />}
                        </div>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className={`text-base font-medium ${checked ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                        {item.label}
                      </p>
                      {saving[item.key] && <p className="text-xs text-green-500 mt-1">Saved ✓</p>}

                      {/* Programme dropdown */}
                      {item.hasDropdown && val?.selection && (
                        <p className="text-sm text-green-600 font-medium mt-1">✓ {val.selection}</p>
                      )}
                      {item.hasDropdown && !checked && (
                        <>
                          <button
                            onClick={() => setProgrammeOpen(!programmeOpen)}
                            className="mt-2 px-4 py-2.5 bg-teal-600 text-white rounded-xl text-sm font-medium active:opacity-80 transition-opacity"
                          >
                            {programmeOpen ? 'Close' : 'Choose Programme ↓'}
                          </button>
                          {programmeOpen && (
                            <div className="mt-2 bg-gray-50 rounded-xl p-2 space-y-1">
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
                        </>
                      )}

                      {/* Brochure text input */}
                      {item.hasTextInput && val?.checked && val?.text && !brochureEditing && (
                        <div className="mt-2 bg-green-50 rounded-xl px-4 py-3">
                          <p className="text-sm text-green-800 whitespace-pre-wrap">{val.text}</p>
                          <button
                            onClick={() => { setBrochureEditing(true); setBrochureText(val.text) }}
                            className="text-xs text-green-600 underline mt-2"
                          >Edit</button>
                        </div>
                      )}
                      {item.hasTextInput && (!val?.checked || brochureEditing) && (
                        <div className="mt-2 space-y-2">
                          <textarea
                            value={brochureText}
                            onChange={(e) => setBrochureText(e.target.value)}
                            placeholder="Paste a link or type notes here…"
                            className="w-full p-3 border border-gray-200 rounded-xl text-base resize-none h-20 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500/40"
                          />
                          <button
                            onClick={() => {
                              if (brochureText.trim()) {
                                save('brochure', { checked: true, text: brochureText.trim() })
                                setBrochureEditing(false)
                              }
                            }}
                            className="px-5 py-2.5 bg-teal-600 text-white rounded-xl text-sm font-medium active:opacity-80 transition-opacity"
                          >
                            Save
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </SectionCard>

        {/* ═══ SECTION 2: Blue Canvas Actions ═══ */}
        <SectionCard accent="navy">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-[#1a1a2e] font-bold text-xl">Blue Canvas Actions</h2>
            <div className="mt-2">
              <ProgressBar done={bcDone} total={BC_ITEMS.length} />
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {BC_ITEMS.map(item => {
              const val = data[item.key]
              const isDefault = item.defaultChecked && !val
              const checked = val?.checked || isDefault

              return (
                <div key={item.key} className="px-5 py-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Checkbox
                        checked={checked}
                        disabled={isDefault}
                        onChange={() => {
                          if (isDefault) return
                          toggleItem(item.key, val || {})
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-base font-medium ${
                        isDefault ? 'text-gray-400 line-through' : checked ? 'text-gray-400 line-through' : 'text-gray-800'
                      }`}>
                        {item.label}
                      </p>
                      {isDefault && (
                        <p className="text-xs text-gray-400 mt-0.5">✅ Done</p>
                      )}
                      {saving[item.key] && <p className="text-xs text-green-500 mt-1">Saved ✓</p>}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </SectionCard>

        {/* ═══ SECTION 3: Notes & Messages ═══ */}
        <SectionCard accent="amber">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-[#1a1a2e] font-bold text-xl">Notes &amp; Messages</h2>
          </div>
          <div className="px-5 py-4">
            {/* Message feed */}
            {messages.length === 0 ? (
              <div className="text-center py-6 mb-4">
                <p className="text-gray-400 text-base">No messages yet</p>
                <p className="text-gray-300 text-sm mt-1">Start the conversation below</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto mb-5">
                {messages.map(msg => (
                  <div key={msg.id} className={`rounded-xl px-4 py-3 ${
                    msg.author === 'Cormac' ? 'bg-teal-50 border border-teal-100' : 'bg-blue-50 border border-blue-100'
                  }`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-bold ${
                        msg.author === 'Cormac' ? 'text-teal-700' : 'text-blue-700'
                      }`}>{msg.author}</span>
                      <span className="text-xs text-gray-400">{formatTime(msg.created_at)}</span>
                    </div>
                    <p className="text-base text-gray-800 whitespace-pre-wrap">{msg.message}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Post new message */}
            <div className="space-y-3 border-t border-gray-100 pt-4">
              <select
                value={messageAuthor}
                onChange={(e) => setMessageAuthor(e.target.value)}
                className="px-3 py-2.5 border border-gray-200 rounded-xl text-base bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/40"
              >
                <option value="Cormac">Cormac</option>
                <option value="Blue Canvas">Blue Canvas</option>
              </select>
              <div className="flex gap-2">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      postMessage()
                    }
                  }}
                  placeholder="Type a message or note…"
                  className="flex-1 p-3 border border-gray-200 rounded-xl text-base resize-none h-16 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/40"
                />
                <button
                  onClick={postMessage}
                  disabled={postingMessage || !newMessage.trim()}
                  className="px-5 self-end py-3 bg-amber-500 text-white rounded-xl text-base font-bold active:opacity-80 transition-opacity disabled:opacity-40"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* ═══ SECTION 4: Email Drafts ═══ */}
        <SectionCard accent="navy">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-[#1a1a2e] font-bold text-xl">Email Drafts</h2>
          </div>
          <div className="px-5 py-8 text-center">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-600 text-lg font-medium">Drafts coming soon</p>
            <p className="text-gray-400 text-sm mt-1">We&apos;ll notify you when ready for review</p>
            <div className="flex gap-3 mt-5 max-w-xs mx-auto">
              <button disabled className="flex-1 py-3 bg-green-100 text-green-400 rounded-xl text-base font-bold cursor-not-allowed">
                ✅ Approve
              </button>
              <button disabled className="flex-1 py-3 bg-gray-100 text-gray-400 rounded-xl text-base font-medium cursor-not-allowed">
                ✏️ Request Changes
              </button>
            </div>
          </div>
        </SectionCard>

        {/* ═══ SECTION 5: Campaign Progress ═══ */}
        <SectionCard accent="navy">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-[#1a1a2e] font-bold text-xl">Campaign Progress</h2>
          </div>
          <div className="px-5 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'Emails sent', value: '—', icon: '📧' },
                { label: 'Opened', value: '—', icon: '👀' },
                { label: 'Replied', value: '—', icon: '💬' },
                { label: 'Meetings booked', value: '—', icon: '📅' },
              ].map(s => (
                <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-3xl font-bold text-gray-300">{s.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-400 mt-4">First report after initial send</p>
          </div>
        </SectionCard>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-400 pb-8 pt-2">
          Powered by <span className="font-medium text-[#1a1a2e]/60">Blue Canvas</span> · bluecanvas.ai
        </footer>
      </main>
    </div>
  )
}
