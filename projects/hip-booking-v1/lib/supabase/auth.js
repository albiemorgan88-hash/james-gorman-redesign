import { createClient } from '@supabase/supabase-js'

export async function requireSupabaseUser(request) {
  const auth = request.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null
  if (!token) return { user: null, error: 'Missing bearer token' }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !anon) return { user: null, error: 'Missing Supabase auth env vars' }

  const supabase = createClient(url, anon, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { Authorization: `Bearer ${token}` } },
  })
  const { data, error } = await supabase.auth.getUser(token)
  if (error || !data.user) return { user: null, error: error?.message || 'Unauthenticated' }
  return { user: data.user, error: null }
}
