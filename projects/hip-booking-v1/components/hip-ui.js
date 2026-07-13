import Image from 'next/image'
import Link from 'next/link'

export function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Card({ children, className = '', padded = true }) {
  return (
    <section className={cx('rounded-xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow-1)]', padded && 'p-4 sm:p-6', className)}>
      {children}
    </section>
  )
}

export function Pill({ children, tone = 'neutral', className = '' }) {
  const styles = {
    neutral: 'bg-[var(--paper-2)] text-[var(--ink-soft)]',
    navy: 'bg-[var(--navy-tint)] text-[var(--navy)]',
    teal: 'bg-[var(--teal-tint)] text-[var(--teal)]',
    success: 'bg-[var(--success-tint)] text-[var(--success)]',
    amber: 'bg-[var(--amber-tint)] text-[var(--amber)]',
    rose: 'bg-[var(--rose-tint)] text-[var(--rose)]',
    white: 'bg-white/12 text-white',
  }
  return (
    <span className={cx('inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium leading-none', styles[tone] || styles.neutral, className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
      {children}
    </span>
  )
}

export function SectionLabel({ children, action }) {
  return (
    <div className="eyebrow mb-3 flex items-center justify-between gap-3 text-[var(--ink-muted)]">
      <span>{children}</span>
      {action}
    </div>
  )
}

export function Field({ label, hint, hintId, error, optional, children }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3 text-sm font-semibold text-[var(--ink)]">
        <span>{label}</span>
        {optional && <span className="font-normal text-[var(--ink-muted)]">Optional</span>}
      </span>
      {children}
      {hint && <span id={hintId} className="type-small mt-1.5 block text-[var(--ink-soft)]">{hint}</span>}
      {error && <span className="type-small mt-1.5 block font-medium text-[var(--rose)]" role="alert">{error}</span>}
    </label>
  )
}

export function inputClass(extra = '') {
  return cx(
    'mt-1.5 h-12 w-full rounded-lg border border-[var(--line-strong)] bg-[var(--surface)] px-3 text-base text-[var(--ink)] outline-none transition placeholder:text-[var(--ink-faint)] hover:border-[var(--ink-muted)] focus:border-[var(--teal)] focus:ring-4 focus:ring-[var(--teal-tint)] disabled:bg-[var(--paper-2)] disabled:text-[var(--ink-muted)] sm:h-11',
    extra,
  )
}

export function textareaClass(extra = '') {
  return cx(
    'mt-1.5 w-full rounded-lg border border-[var(--line-strong)] bg-[var(--surface)] px-3 py-2 text-base text-[var(--ink)] outline-none transition placeholder:text-[var(--ink-faint)] hover:border-[var(--ink-muted)] focus:border-[var(--teal)] focus:ring-4 focus:ring-[var(--teal-tint)] disabled:bg-[var(--paper-2)] disabled:text-[var(--ink-muted)]',
    extra,
  )
}

export function Spinner() {
  return <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />
}

export function Button({ children, tone = 'primary', size = 'md', className = '', loading = false, ...props }) {
  const tones = {
    primary: 'border-[var(--navy)] bg-[var(--navy)] text-white hover:bg-[var(--navy-2)]',
    teal: 'border-[var(--teal)] bg-[var(--teal)] text-white hover:bg-[var(--teal-2)]',
    outline: 'border-[var(--line-strong)] bg-[var(--surface)] text-[var(--ink)] hover:bg-[var(--surface-2)]',
    ghost: 'border-transparent bg-transparent text-[var(--ink-soft)] hover:bg-[var(--surface-2)]',
    link: 'border-transparent bg-transparent p-0 text-[var(--teal)] hover:text-[var(--teal-2)] hover:underline',
    danger: 'border-[var(--rose-soft)] bg-[var(--surface)] text-[var(--rose)] hover:bg-[var(--rose-tint)]',
  }
  const sizes = {
    sm: tone === 'link' ? 'min-h-11 text-sm sm:min-h-0' : 'min-h-9 px-3 py-1.5 text-xs',
    md: tone === 'link' ? 'min-h-11 text-sm sm:min-h-0' : 'min-h-11 px-4 py-2 text-sm',
    lg: tone === 'link' ? 'min-h-11 text-sm sm:min-h-0' : 'min-h-12 px-5 py-3 text-[15px]',
  }
  return (
    <button
      className={cx('inline-flex items-center justify-center gap-2 rounded-lg border font-semibold transition disabled:cursor-not-allowed disabled:opacity-50', tones[tone], sizes[size], className)}
      disabled={loading || props.disabled}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </button>
  )
}

export function Banner({ children, tone = 'info', title, className = '' }) {
  const tones = {
    info: 'border-[var(--line)] bg-[var(--surface-2)] text-[var(--ink-soft)]',
    teal: 'border-[var(--teal-soft)] bg-[var(--teal-tint)] text-[var(--teal-2)]',
    amber: 'border-[var(--amber-soft)] bg-[var(--amber-tint)] text-[var(--amber)]',
    rose: 'border-[var(--rose-soft)] bg-[var(--rose-tint)] text-[var(--rose)]',
  }
  return (
    <div className={cx('rounded-xl border p-4 text-sm leading-6', tones[tone], className)} role={tone === 'rose' ? 'alert' : undefined} aria-live={tone === 'rose' ? 'polite' : undefined}>
      {title && <p className="mb-1 font-semibold text-[var(--ink)]">{title}</p>}
      {children}
    </div>
  )
}

export function Stepper({ current = 0, steps = [] }) {
  return (
    <ol className="grid gap-2 sm:grid-cols-4">
      {steps.map((step, index) => {
        const active = index === current
        const complete = index < current
        return (
          <li key={step} className={cx('flex items-center gap-2 rounded-md border px-3 py-2 text-xs font-semibold', active && 'border-[var(--teal)] bg-[var(--teal-tint)] text-[var(--teal)]', complete && 'border-[var(--line)] bg-[var(--surface)] text-[var(--ink)]', !active && !complete && 'border-[var(--line)] bg-[var(--surface-2)] text-[var(--ink-muted)]')}>
            <span className={cx('flex h-5 w-5 items-center justify-center rounded-full text-[10px]', active || complete ? 'bg-[var(--teal)] text-white' : 'bg-[var(--paper-2)] text-[var(--ink-muted)]')}>{index + 1}</span>
            {step}
          </li>
        )
      })}
    </ol>
  )
}

export function SampleRibbon({ className = '' }) {
  return <Pill tone="amber" className={className}>Sample data only</Pill>
}

export function Kvp({ label, value, mono }) {
  return (
    <div className="grid grid-cols-1 gap-1 border-t border-[var(--line-soft)] py-2 first:border-t-0 sm:grid-cols-[132px_1fr] sm:gap-3">
      <dt className="text-xs font-medium text-[var(--ink-muted)]">{label}</dt>
      <dd className={cx('min-w-0 break-words text-sm font-medium text-[var(--ink)]', mono && 'font-mono')}>{value || '-'}</dd>
    </div>
  )
}

export function statusTone(value) {
  const normal = String(value || '').toLowerCase()
  if (normal.includes('confirm') || normal.includes('synced') || normal.includes('ready') || normal.includes('open')) return 'success'
  if (normal.includes('change') || normal.includes('cancel') || normal.includes('failed') || normal.includes('missing')) return 'rose'
  if (normal.includes('request') || normal.includes('pending') || normal.includes('draft') || normal.includes('await')) return 'amber'
  return 'neutral'
}

export function prettyStatus(value) {
  return String(value || 'pending').replaceAll('_', ' ')
}

export function formatSlot(slot) {
  const startsAt = slot?.startsAt || slot?.starts_at
  const endsAt = slot?.endsAt || slot?.ends_at
  if (!startsAt) return 'Date to be confirmed'
  const starts = new Date(startsAt)
  const ends = endsAt ? new Date(endsAt) : null
  const date = starts.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })
  const start = starts.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  const end = ends ? ends.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) : ''
  return `${slot.label ? `${slot.label} · ` : ''}${date} · ${start}${end ? `-${end}` : ''}`
}

export function PublicHeader({ current = '' }) {
  return (
    <header className="border-b border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-h-11 items-center gap-3" aria-label="HIP course bookings home">
          <Image src="/img/hip-logo.png" alt="HIP Psychology" width={76} height={70} className="h-10 w-auto object-contain" priority />
          <span>
            <span className="block text-sm font-semibold text-[var(--navy)]">HIP Psychology</span>
            <span className="block text-xs text-[var(--ink-soft)]">Course bookings</span>
          </span>
        </Link>
        <nav className="flex items-center gap-2 text-sm font-semibold" aria-label="Primary">
          {current !== 'showcase' && <Link href="/showcase" className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-[var(--ink-soft)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]">Showcase</Link>}
          {current !== 'login' && <Link href="/login" className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-[var(--teal)] hover:bg-[var(--teal-tint)]">HIP staff login</Link>}
        </nav>
      </div>
    </header>
  )
}

export function PublicFooter({ className = '' }) {
  return (
    <footer className={cx('border-t border-[var(--line)] bg-[var(--surface-2)]', className)}>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-[var(--ink-soft)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2">
          <span>© 2026 HIP Psychology</span>
          <Pill tone="amber">Pilot — selected schools only</Pill>
        </div>
        <div className="flex flex-wrap gap-4">
          <a className="hip-link inline-flex min-h-11 items-center sm:min-h-0" href="mailto:info@hippsychology.com">info@hippsychology.com</a>
          <a className="hip-link inline-flex min-h-11 items-center sm:min-h-0" href="https://hippsychology.com/contact-us/" target="_blank" rel="noreferrer">Privacy note</a>
        </div>
      </div>
    </footer>
  )
}
