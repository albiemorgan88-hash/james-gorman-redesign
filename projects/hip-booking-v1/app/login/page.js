'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Banner, Button, Card, Field, PublicFooter, PublicHeader, inputClass } from '../../components/hip-ui'
import { getBrowserSupabase } from '../../lib/supabase/browser'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [capsLock, setCapsLock] = useState(false)

  async function signIn(event) {
    event.preventDefault()
    setLoading(true)
    setMessage('')
    const supabase = getBrowserSupabase()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setMessage({ type: 'error', text: "We couldn't sign you in. Check your email and password, or use the sign-in link option." })
      setLoading(false)
      return
    }
    window.location.href = '/admin'
  }

  async function sendMagicLink() {
    if (!email) {
      setMessage({ type: 'error', text: 'Enter your email address first, then request a sign-in link.' })
      return
    }
    setLoading(true)
    setMessage(null)
    const supabase = getBrowserSupabase()
    const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: `${window.location.origin}/admin` } })
    setMessage(error ? { type: 'error', text: "We couldn't send a sign-in link. Try again in a moment." } : { type: 'success', text: `Check your inbox. We sent a sign-in link to ${email}. It expires shortly.` })
    setLoading(false)
  }

  return (
    <main className="flex min-h-screen flex-col bg-[var(--paper)]">
      <PublicHeader current="login" />
      <section className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="mb-7 text-center sm:text-left">
            <p className="eyebrow text-[var(--teal)]">HIP staff access</p>
            <h1 className="type-display mt-3 text-[var(--navy)]">Sign in to the booking admin</h1>
            <p className="type-body mt-3 text-[var(--ink-soft)]">For HIP staff who manage school course requests.</p>
          </div>
          <Card>
            <form onSubmit={signIn} className="space-y-5" noValidate>
              <Field label="Email">
                <input
                  id="staff-email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  required
                  className={inputClass()}
                  autoComplete="email"
                  autoCapitalize="none"
                  spellCheck="false"
                />
              </Field>
              <Field label="Password" hint={capsLock ? 'Caps Lock is on.' : ''}>
                <div className="relative">
                  <input
                    id="staff-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    onKeyUp={(event) => setCapsLock(event.getModifierState('CapsLock'))}
                    type={showPassword ? 'text' : 'password'}
                    required
                    className={inputClass('pr-24')}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="absolute right-1.5 top-1/2 flex h-11 -translate-y-1/2 items-center rounded-md px-2 text-sm font-semibold text-[var(--teal)] hover:bg-[var(--teal-tint)] sm:h-9"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </Field>
              {message?.type === 'error' && <Banner tone="rose">{message.text}</Banner>}
              {message?.type === 'success' && <Banner tone="teal">{message.text}</Banner>}
              <Button disabled={loading} loading={loading} className="w-full" size="lg">{loading ? 'Signing in…' : 'Sign in'}</Button>
            </form>
            <div className="mt-5 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
              <Button type="button" tone="link" onClick={sendMagicLink} disabled={loading}>Email me a sign-in link instead</Button>
              <a className="hip-link inline-flex min-h-11 items-center font-semibold sm:min-h-0" href="mailto:info@hippsychology.com?subject=HIP%20booking%20admin%20password%20help">Forgot password?</a>
            </div>
          </Card>
          <Link href="/" className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--teal)] hover:underline sm:min-h-0">Back to public booking</Link>
        </div>
      </section>
      <PublicFooter />
    </main>
  )
}
