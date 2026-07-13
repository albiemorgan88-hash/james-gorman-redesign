import { hashAccessCode } from './bookingUtils'

export async function validatePilotAccessCode(supabase, code) {
  const raw = String(code || '').trim()
  if (!raw) return { ok: false, error: 'Pilot access code is required' }

  if (process.env.PILOT_ACCESS_CODE && raw.toUpperCase() === process.env.PILOT_ACCESS_CODE.trim().toUpperCase()) {
    return { ok: true, accessCode: { id: null, label: 'Online Primary pilot', scope: 'online_primary' } }
  }

  const hash = hashAccessCode(raw)
  const { data, error } = await supabase
    .from('pilot_access_codes')
    .select('*')
    .eq('code_hash', hash)
    .eq('active', true)
    .maybeSingle()

  if (error) return { ok: false, error: 'Pilot access is not configured yet. Please contact HIP.' }
  if (!data) return { ok: false, error: 'Invalid pilot access code' }
  if (data.expires_at && new Date(data.expires_at) < new Date()) return { ok: false, error: 'Pilot access code has expired' }
  if (data.max_uses && data.use_count >= data.max_uses) return { ok: false, error: 'Pilot access code has reached its use limit' }

  return { ok: true, accessCode: data }
}

export async function recordPilotAccessUse(supabase, accessCode) {
  if (!accessCode?.id) return
  await supabase
    .from('pilot_access_codes')
    .update({ use_count: Number(accessCode.use_count || 0) + 1, updated_at: new Date().toISOString() })
    .eq('id', accessCode.id)
}
