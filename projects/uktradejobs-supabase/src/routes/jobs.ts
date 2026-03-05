// API Routes for Job Postings
// Map these to Next.js App Router: app/api/jobs/route.ts etc.

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase, createAdminSupabase } from '@/lib/supabase';

// ============================================================
// GET /api/jobs — Public job search
// ============================================================
export async function getJobs(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const supabase = createServerSupabase();

  const { data, error } = await supabase.rpc('search_jobs', {
    search_query: searchParams.get('q') || null,
    filter_trade: searchParams.get('trade') || null,
    filter_city: searchParams.get('city') || null,
    filter_job_type: searchParams.get('type') || null,
    filter_salary_min: searchParams.get('salary_min') ? parseInt(searchParams.get('salary_min')!) : null,
    sort_by: searchParams.get('sort') || 'newest',
    page_limit: Math.min(parseInt(searchParams.get('limit') || '20'), 50),
    page_offset: parseInt(searchParams.get('offset') || '0'),
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const total = data?.[0]?.total_count || 0;
  return NextResponse.json({ jobs: data, total, page: Math.floor(parseInt(searchParams.get('offset') || '0') / 20) + 1 });
}

// ============================================================
// GET /api/jobs/[slug] — Single job
// ============================================================
export async function getJob(req: NextRequest, { params }: { params: { slug: string } }) {
  const supabase = createServerSupabase();

  const { data: job, error } = await supabase
    .from('job_postings')
    .select('*, employers(company_name, company_slug, logo_url, city, is_verified)')
    .eq('slug', params.slug)
    .eq('status', 'active')
    .single();

  if (error || !job) return NextResponse.json({ error: 'Job not found' }, { status: 404 });

  // Increment views (fire and forget)
  const admin = createAdminSupabase();
  admin.rpc('increment_job_views', { p_job_id: job.id });

  return NextResponse.json(job);
}

// ============================================================
// POST /api/jobs — Create job (employer auth required)
// ============================================================
export async function createJob(req: NextRequest) {
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { data: employer } = await supabase
    .from('employers')
    .select('id')
    .eq('user_id', user.id)
    .single();

  if (!employer) return NextResponse.json({ error: 'No employer profile' }, { status: 403 });

  // Check limit
  const { data: canPost } = await supabase.rpc('check_job_post_limit', { p_employer_id: employer.id });
  if (!canPost) {
    return NextResponse.json({ error: 'Job post limit reached. Upgrade your plan.' }, { status: 402 });
  }

  const body = await req.json();
  const slug = body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now().toString(36);

  const { data: job, error } = await supabase
    .from('job_postings')
    .insert({
      employer_id: employer.id,
      title: body.title,
      slug,
      trade: body.trade,
      job_type: body.job_type || 'full_time',
      description: body.description,
      requirements: body.requirements || null,
      salary_min: body.salary_min || null,
      salary_max: body.salary_max || null,
      salary_period: body.salary_period || 'year',
      city: body.city,
      county: body.county || null,
      postcode: body.postcode || null,
      is_remote: body.is_remote || false,
      application_email: body.application_email || null,
      application_url: body.application_url || null,
      status: body.publish ? 'active' : 'draft',
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(job, { status: 201 });
}

// ============================================================
// PATCH /api/jobs/[id] — Update job (employer auth required)
// ============================================================
export async function updateJob(req: NextRequest, { params }: { params: { id: string } }) {
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const { data: job, error } = await supabase
    .from('job_postings')
    .update(body)
    .eq('id', params.id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(job);
}

// ============================================================
// DELETE /api/jobs/[id] — Delete job (employer auth required)
// ============================================================
export async function deleteJob(req: NextRequest, { params }: { params: { id: string } }) {
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { error } = await supabase.from('job_postings').delete().eq('id', params.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
