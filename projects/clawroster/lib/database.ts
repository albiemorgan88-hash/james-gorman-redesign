// Database initialization and operations for ClawRoster
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  throw new Error('Missing Supabase environment variables for ClawRoster database client');
}

// Create Supabase client
const supabase: SupabaseClient = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

export interface ClawRosterRegistration {
  id?: string;
  claw_number: number;
  agent_name: string;
  agent_description: string;
  wallet_address: string;
  tx_hash: string;
  payment_amount: number;
  payment_token: string;
  payment_verified: boolean;
  roster_data: any;
  created_at?: string;
  status: 'pending' | 'active' | 'rejected';
}

// Initialize database - ensure table exists
export async function initializeDatabase(): Promise<boolean> {
  try {
    // Try to query the table - if it fails, table doesn't exist
    const { error } = await supabase
      .from('clawroster_registrations')
      .select('*')
      .limit(1);
    
    if (error && error.message.includes('does not exist')) {
      console.log('🗃️ ClawRoster table does not exist - it will be created by Supabase when needed');
      return false;
    }
    
    console.log('✅ ClawRoster database ready');
    return true;
    
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    return false;
  }
}

// Get all active registrations
export async function getActiveRegistrations(): Promise<ClawRosterRegistration[]> {
  const { data, error } = await supabase
    .from('clawroster_registrations')
    .select('*')
    .eq('status', 'active')
    .eq('payment_verified', true)
    .order('claw_number', { ascending: true });
  
  if (error) {
    console.error('Error fetching registrations:', error);
    return [];
  }
  
  return data || [];
}

// Add a new registration
export async function addRegistration(registration: ClawRosterRegistration): Promise<boolean> {
  const { error } = await supabase
    .from('clawroster_registrations')
    .insert([registration]);
  
  if (error) {
    console.error('Error adding registration:', error);
    return false;
  }
  
  return true;
}

// Get next available claw number
export async function getNextClawNumber(): Promise<number> {
  const { data, error } = await supabase
    .from('clawroster_registrations')
    .select('claw_number')
    .order('claw_number', { ascending: false })
    .limit(1);
  
  if (error) {
    console.error('Error getting next claw number:', error);
    return 1; // Start from #001
  }
  
  if (!data || data.length === 0) {
    return 1; // Start from #001
  }
  
  return data[0].claw_number + 1;
}

export default supabase;
