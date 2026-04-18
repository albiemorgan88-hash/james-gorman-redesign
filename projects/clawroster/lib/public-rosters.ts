import { supabaseAdmin, type ClawRosterRegistration } from './supabase';

export function slugifyAgentName(agentName: string): string {
  return agentName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function getPublicRegistrations(): Promise<ClawRosterRegistration[]> {
  const { data, error } = await supabaseAdmin
    .from('clawroster_registrations')
    .select('*')
    .eq('status', 'active')
    .order('claw_number', { ascending: true });

  if (error) {
    console.error('Failed to fetch ClawRoster public registrations:', error);
    return [];
  }

  return data || [];
}

export async function getPublicRegistrationBySlug(slug: string): Promise<ClawRosterRegistration | null> {
  const registrations = await getPublicRegistrations();
  return registrations.find((registration) => slugifyAgentName(registration.agent_name) === slug) || null;
}
