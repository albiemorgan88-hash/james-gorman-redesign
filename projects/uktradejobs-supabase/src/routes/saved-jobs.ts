// API Routes for Saved Jobs (requires auth)
import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase';

// GET /api/saved-jobs
export async function getSavedJobs(req: NextRequest) {
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { data, error } = await supabase
    .from('saved_jobs')
    .select('*, job_postings(id, title, slug, trade, city, salary_min, salary_max, salary_period, employers(company_name, logo_url))')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// POST /api/saved-jobs
export async function saveJob(req: NextRequest) {
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { job_id } = await req.json();
  const { error } = await supabase.from('saved_jobs').insert({ user_id: user.id, job_id });

  if (error?.code === '23505') return NextResponse.json({ message: 'Already saved' }, { status: 200 });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true }, { status: 201 });
}

// DELETE /api/saved-jobs/[job_id]
export async function unsaveJob(req: NextRequest, { params }: { params: { job_id: string } }) {
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await supabase.from('saved_jobs').delete().eq('user_id', user.id).eq('job_id', params.job_id);
  return NextResponse.json({ success: true });
}
