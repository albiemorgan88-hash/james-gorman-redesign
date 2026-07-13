import { readdir, readFile } from 'fs/promises'
import { join } from 'path'

const root = new URL('..', import.meta.url).pathname
const ignoreDirs = new Set(['node_modules', '.next', '.git'])
const clientRoots = ['/app/page.js', '/app/admin/page.js', '/app/login/page.js', '/app/booking/']
const requiredFiles = [
  'app/api/bookings/route.js',
  'app/api/admin/bookings/route.js',
  'app/api/booking/[token]/route.js',
  'app/api/cron/reminders/route.js',
  'vercel.json',
  'docs/handoff-runbook.md',
]

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (!ignoreDirs.has(entry.name)) files.push(...await walk(join(dir, entry.name)))
    } else if (entry.name.endsWith('.js') || entry.name.endsWith('.mjs') || entry.name.endsWith('.json') || entry.name.endsWith('.md')) {
      files.push(join(dir, entry.name))
    }
  }
  return files
}

const files = await walk(root)
const missing = requiredFiles.filter((file) => !files.some((candidate) => candidate.endsWith(file)))
if (missing.length) throw new Error(`Missing production handoff files: ${missing.join(', ')}`)

for (const file of files) {
  const text = await readFile(file, 'utf8')
  const rel = file.slice(root.length - 1)
  if (text.includes('SUPABASE_SERVICE_ROLE_KEY') && clientRoots.some((clientRoot) => rel.startsWith(clientRoot))) {
    throw new Error(`Service role key referenced in client surface: ${rel}`)
  }
  if (text.includes('RESEND_API_KEY') && clientRoots.some((clientRoot) => rel.startsWith(clientRoot))) {
    throw new Error(`Resend API key referenced in client surface: ${rel}`)
  }
}

console.log(`Static production checks passed (${files.length} files scanned).`)
