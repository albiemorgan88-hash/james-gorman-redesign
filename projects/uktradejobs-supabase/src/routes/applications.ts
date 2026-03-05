// API Routes for Applications
import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase, createAdminSupabase } from '@/lib/supabase';

// ============================================================
// POST /api/applications — Submit application (no auth required)
// ============================================================
export async function submitApplication(req: NextRequest) {
  const body = await req.json();

  if (!body.job_id || !body.applicant_name || !body.applicant_email) {
    return NextResponse.json({ error: 'Name, email, and job_id required' }, { status: 400 });
  }

  // Use admin client so RLS INSERT policy (WITH CHECK TRUE) works for anon
  const admin = createAdminSupabase();

  // Verify job exists and is active
  const { data: job } = await admin
    .from('job_postings')
    .select('id, status')
    .eq('id', body.job_id)
    .eq('status', 'active')
    .single();

  if (!job) return NextResponse.json({ error: 'Job not found or inactive' }, { status: 404 });

  // Check for duplicate (same email + job within 24h)
  const { data: existing } = await admin
    .from('applications')
    .select('id')
    .eq('job_id', body.job_id)
    .eq('applicant_email', body.applicant_email)
    .gte('created_at', new Date(Date.now() - 86400000).toISOString())
    .limit(1);

  if (existing && existing.length > 0) {
    return NextResponse.json({ error: 'You have already applied to this job' }, { status: 409 });
  }

  // Link to applicant profile if logged in
  let applicant_id = null;
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    const { data: applicant } = await supabase
      .from('applicants')
      .select('id')
      .eq('user_id', user.id)
      .single();
    applicant_id = applicant?.id || null;
  }

  const { data: application, error } = await admin
    .from('applications')
    .insert({
      job_id: body.job_id,
      applicant_id,
      applicant_name: body.applicant_name,
      applicant_email: body.applicant_email,
      applicant_phone: body.applicant_phone || null,
      cv_url: body.cv_url || null,
      cover_letter: body.cover_letter || null,
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // TODO: Send notification email to employer via Resend/SendGrid

  return NextResponse.json({ id: application.id, message: 'Application submitted' }, { status: 201 });
}

// ============================================================
// GET /api/employer/applications — Employer's applications
// ============================================================
export async function getEmployerApplications(req: NextRequest) {
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const status = searchParams.get('status');
  const job_id = searchParams.get('job_id');

  let query = supabase
    .from('applications')
    .select('*, job_postings!inner(title, slug, employer_id, employers!inner(user_id))')
    .eq('job_postings.employers.user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(50);

  if (status) query = query.eq('status', status);
  if (job_id) query = query.eq('job_id', job_id);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// ============================================================
// PATCH /api/employer/applications/[id] — Update status
// ============================================================
export async function updateApplicationStatus(req: NextRequest, { params }: { params: { id: string } }) {
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { status, employer_notes } = await req.json();

  const { data, error } = await supabase
    .from('applications')
    .update({ status, employer_notes })
    .eq('id', params.id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
