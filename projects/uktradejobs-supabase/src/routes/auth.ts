// app/api/auth/signup/route.ts — Employer registration
// Copy these into your Next.js app/api directory

import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase, createAdminSupabase } from '@/lib/supabase';

// ============================================================
// POST /api/auth/employer-signup
// ============================================================
export async function employerSignup(req: NextRequest) {
  const { email, password, company_name, phone } = await req.json();

  if (!email || !password || !company_name) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const supabase = createServerSupabase();

  // 1. Create auth user
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { role: 'employer', company_name },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/employer/dashboard`,
    },
  });

  if (authError) {
    return NextResponse.json({ error: authError.message }, { status: 400 });
  }

  // 2. Create employer profile (use admin to bypass RLS during creation)
  const admin = createAdminSupabase();
  const slug = company_name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const { data: employer, error: empError } = await admin
    .from('employers')
    .insert({
      user_id: authData.user!.id,
      company_name,
      company_slug: slug + '-' + Date.now().toString(36),
      email,
      phone: phone || null,
    })
    .select()
    .single();

  if (empError) {
    return NextResponse.json({ error: empError.message }, { status: 500 });
  }

  return NextResponse.json({ user: authData.user, employer }, { status: 201 });
}

// ============================================================
// POST /api/auth/jobseeker-signup
// ============================================================
export async function jobseekerSignup(req: NextRequest) {
  const { email, password, full_name, phone, trades } = await req.json();

  if (!email || !password || !full_name) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const supabase = createServerSupabase();

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { role: 'jobseeker', full_name },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
    },
  });

  if (authError) {
    return NextResponse.json({ error: authError.message }, { status: 400 });
  }

  const admin = createAdminSupabase();
  const { error: appError } = await admin
    .from('applicants')
    .insert({
      user_id: authData.user!.id,
      full_name,
      email,
      phone: phone || null,
      trades: trades || [],
    });

  if (appError) {
    return NextResponse.json({ error: appError.message }, { status: 500 });
  }

  return NextResponse.json({ user: authData.user }, { status: 201 });
}

// ============================================================
// POST /api/auth/login
// ============================================================
export async function login(req: NextRequest) {
  const { email, password } = await req.json();
  const supabase = createServerSupabase();

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }

  return NextResponse.json({ user: data.user, session: data.session });
}

// ============================================================
// POST /api/auth/logout
// ============================================================
export async function logout() {
  const supabase = createServerSupabase();
  await supabase.auth.signOut();
  return NextResponse.json({ success: true });
}
