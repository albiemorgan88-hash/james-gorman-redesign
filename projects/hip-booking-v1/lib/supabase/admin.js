import { getServiceSupabase } from './server'
import { requireSupabaseUser } from './auth'

const WRITE_ROLES = ['admin', 'staff']

export async function requireStaffUser(request, allowedRoles = ['admin', 'staff', 'readonly']) {
  const { user, error } = await requireSupabaseUser(request)
  if (!user) return { user: null, staff: null, supabase: null, error: error || 'Unauthenticated', status: 401 }

  const supabase = getServiceSupabase()
  let { data: staff, error: staffError } = await supabase
    .from('staff_users')
    .select('*')
    .eq('auth_user_id', user.id)
    .eq('active', true)
    .maybeSingle()

  if (!staff && user.email) {
    const byEmail = await supabase
      .from('staff_users')
      .select('*')
      .eq('email', user.email.toLowerCase())
      .eq('active', true)
      .maybeSingle()
    staff = byEmail.data
    staffError = byEmail.error

    if (staff && !staff.auth_user_id) {
      await supabase.from('staff_users').update({ auth_user_id: user.id }).eq('id', staff.id)
      staff.auth_user_id = user.id
    }
  }

  if (staffError) return { user, staff: null, supabase, error: staffError.message, status: 500 }
  if (!staff) return { user, staff: null, supabase, error: 'Staff access not configured', status: 403 }
  if (!allowedRoles.includes(staff.role)) return { user, staff, supabase, error: 'Insufficient role', status: 403 }

  return { user, staff, supabase, error: null, status: 200 }
}

export function canWrite(staff) {
  return WRITE_ROLES.includes(staff?.role)
}
