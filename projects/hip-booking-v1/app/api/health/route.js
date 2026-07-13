export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { getServiceSupabase } from '../../../lib/supabase/server'

export async function GET() {
  const checks = {
    supabaseUrl: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
    supabaseAnon: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
    supabaseService: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
    resendConfigured: Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL),
    emailSendingEnabled: process.env.EMAIL_SENDING_ENABLED === 'true',
    cronSecret: Boolean(process.env.CRON_SECRET),
    publicAppUrl: process.env.PUBLIC_APP_URL || process.env.NEXT_PUBLIC_APP_URL || null,
  }

  try {
    const supabase = getServiceSupabase()
    const { data, error } = await supabase.from('programmes').select('id').limit(1)
    if (error) {
      return NextResponse.json({ ok: false, schemaReady: false, checks, error: error.message }, { status: 200 })
    }
    return NextResponse.json({ ok: true, schemaReady: true, checks, programmeCountSample: data.length })
  } catch (error) {
    return NextResponse.json({ ok: false, schemaReady: false, checks, error: error.message }, { status: 500 })
  }
}
