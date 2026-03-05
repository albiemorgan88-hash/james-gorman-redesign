// API Routes for Employer Dashboard
import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase';

// ============================================================
// GET /api/employer/dashboard — Dashboard stats
// ============================================================
export async function getDashboard(req: NextRequest) {
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { data: employer } = await supabase
    .from('employers')
    .select('id, company_name, tier')
    .eq('user_id', user.id)
    .single();

  if (!employer) return NextResponse.json({ error: 'No employer profile' }, { status: 403 });

  const { data: dashboard, error } = await supabase.rpc('get_employer_dashboard', {
    p_employer_id: employer.id,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ employer, ...dashboard });
}

// ============================================================
// GET /api/employer/jobs — Employer's own jobs
// ============================================================
export async function getEmployerJobs(req: NextRequest) {
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { data: employer } = await supabase
    .from('employers')
    .select('id')
    .eq('user_id', user.id)
    .single();

  if (!employer) return NextResponse.json({ error: 'No employer profile' }, { status: 403 });

  const { data: jobs, error } = await supabase
    .from('job_postings')
    .select('*')
    .eq('employer_id', employer.id)
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(jobs);
}

// ============================================================
// PATCH /api/employer/profile — Update employer profile
// ============================================================
export async function updateProfile(req: NextRequest) {
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  // Only allow safe fields
  const allowed = ['company_name', 'description', 'website', 'phone', 'address_line1', 'address_line2', 'city', 'county', 'postcode', 'logo_url'];
  const updates: Record<string, any> = {};
  for (const key of allowed) {
    if (key in body) updates[key] = body[key];
  }

  const { data, error } = await supabase
    .from('employers')
    .update(updates)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
