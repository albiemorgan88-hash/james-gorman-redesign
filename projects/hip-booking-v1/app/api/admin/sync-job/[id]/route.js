export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { canWrite, requireStaffUser } from '../../../../../lib/supabase/admin'

export async function PATCH(request, { params }) {
  const auth = await requireStaffUser(request, ['admin', 'staff'])
  if (auth.error) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status })
  if (!canWrite(auth.staff)) return NextResponse.json({ ok: false, error: 'Readonly staff cannot update checklist jobs' }, { status: 403 })

  try {
    const body = await request.json()
    const status = body.status || 'synced'
    const { data, error } = await auth.supabase
      .from('sync_jobs')
      .update({
        status,
        external_id: body.externalId || null,
        error_message: body.errorMessage || null,
        completed_at: status === 'synced' || status === 'skipped' ? new Date().toISOString() : null,
        completed_by_user_id: status === 'synced' || status === 'skipped' ? auth.staff.id : null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', params.id)
      .select('*')
      .single()

    if (error) throw error
    await auth.supabase.from('audit_events').insert({
      booking_id: data.booking_id,
      actor_user_id: auth.staff.id,
      event_type: 'sync_checklist_updated',
      event_payload: { syncJobId: params.id, status },
    })
    return NextResponse.json({ ok: true, syncJob: data })
  } catch (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }
}
