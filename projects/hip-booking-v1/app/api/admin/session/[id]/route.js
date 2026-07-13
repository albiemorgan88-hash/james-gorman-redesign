export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { normaliseText } from '../../../../../lib/bookingUtils'
import { canWrite, requireStaffUser } from '../../../../../lib/supabase/admin'

export async function PATCH(request, { params }) {
  const auth = await requireStaffUser(request, ['admin', 'staff'])
  if (auth.error) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status })
  if (!canWrite(auth.staff)) return NextResponse.json({ ok: false, error: 'Readonly staff cannot update sessions' }, { status: 403 })

  try {
    const body = await request.json()
    const patch = { updated_at: new Date().toISOString() }
    if (body.capacity !== undefined) patch.capacity = Math.max(Number(body.capacity || 1), 1)
    if (body.zoomRegistrationUrl !== undefined) patch.zoom_registration_url = normaliseText(body.zoomRegistrationUrl) || null
    if (body.presenterName !== undefined) patch.presenter_name = normaliseText(body.presenterName) || null
    if (body.status !== undefined) patch.status = body.status

    const { data, error } = await auth.supabase
      .from('session_slots')
      .update(patch)
      .eq('id', params.id)
      .select('*')
      .single()

    if (error) throw error
    await auth.supabase.from('audit_events').insert({
      event_type: 'session_admin_updated',
      event_payload: { sessionId: params.id, ...body },
      actor_user_id: auth.staff.id,
    })

    return NextResponse.json({ ok: true, session: data })
  } catch (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }
}
