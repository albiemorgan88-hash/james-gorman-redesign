// ClawRoster Supabase Client
import { createClient } from '@supabase/supabase-js';

// Client for browser/public operations
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Admin client for server-side operations
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Database Types
export interface ClawRosterRegistration {
  id?: string;
  claw_number: number;
  agent_name: string;
  agent_description: string;
  wallet_address: string; // Payer's wallet
  tx_hash: string;
  payment_amount: number;
  payment_token: string;
  payment_verified: boolean;
  roster_data: any; // JSONB data
  created_at?: string;
  status: 'pending' | 'active' | 'rejected';
}

// Create the clawroster_registrations table
export async function createTable() {
  const { data, error } = await supabaseAdmin.rpc('create_clawroster_table');
  
  if (error) {
    console.error('Error creating table:', error);
    throw error;
  }
  
  return data;
}

// Get the next available Claw number
export async function getNextClawNumber(): Promise<number> {
  try {
    const { data, error } = await supabaseAdmin
      .from('clawroster_registrations')
      .select('claw_number')
      .order('claw_number', { ascending: false })
      .limit(1);
    
    if (error) {
      console.error('Error getting next claw number:', error);
      // If table doesn't exist, start with 1
      if (error.message.includes('does not exist')) {
        console.log('⚠️  Table does not exist, starting with Claw #1');
        return 1;
      }
      throw error;
    }
    
    return data && data.length > 0 ? data[0].claw_number + 1 : 1;
  } catch (error) {
    console.error('Error in getNextClawNumber:', error);
    return 1; // Fallback
  }
}

// Insert a new registration
export async function createRegistration(registration: Omit<ClawRosterRegistration, 'id' | 'created_at'>): Promise<ClawRosterRegistration> {
  try {
    const { data, error } = await supabaseAdmin
      .from('clawroster_registrations')
      .insert([registration])
      .select()
      .single();
    
    if (error) {
      console.error('Error creating registration:', error);
      
      // If table doesn't exist, throw a specific error
      if (error.message.includes('does not exist')) {
        throw new Error('Database table not found. Please create the clawroster_registrations table in Supabase.');
      }
      
      throw error;
    }
    
    return data;
  } catch (error) {
    console.error('Error in createRegistration:', error);
    throw error;
  }
}

// Get all registrations for admin
export async function getAllRegistrations(): Promise<ClawRosterRegistration[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from('clawroster_registrations')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error getting registrations:', error);
      
      // If table doesn't exist, return empty array
      if (error.message.includes('does not exist')) {
        console.log('⚠️  Table does not exist, returning empty array');
        return [];
      }
      
      throw error;
    }
    
    return data || [];
  } catch (error) {
    console.error('Error in getAllRegistrations:', error);
    return []; // Fallback
  }
}

// Update registration status
export async function updateRegistrationStatus(id: string, status: 'active' | 'rejected', verified: boolean = false): Promise<void> {
  const updateData: any = { status };
  if (verified) {
    updateData.payment_verified = true;
  }
  
  const { error } = await supabaseAdmin
    .from('clawroster_registrations')
    .update(updateData)
    .eq('id', id);
  
  if (error) {
    console.error('Error updating registration:', error);
    throw error;
  }
}

// Get total revenue from verified payments
export async function getTotalRevenue(): Promise<number> {
  try {
    const { data, error } = await supabaseAdmin
      .from('clawroster_registrations')
      .select('payment_amount')
      .eq('payment_verified', true);
    
    if (error) {
      console.error('Error getting total revenue:', error);
      
      // If table doesn't exist, return 0
      if (error.message.includes('does not exist')) {
        console.log('⚠️  Table does not exist, returning $0 revenue');
        return 0;
      }
      
      return 0;
    }
    
    return data?.reduce((sum, reg) => sum + reg.payment_amount, 0) || 0;
  } catch (error) {
    console.error('Error in getTotalRevenue:', error);
    return 0; // Fallback
  }
}

// Check if a transaction hash has already been used
export async function isTransactionUsed(txHash: string): Promise<boolean> {
  try {
    const { data, error } = await supabaseAdmin
      .from('clawroster_registrations')
      .select('id')
      .eq('tx_hash', txHash)
      .limit(1);
    
    if (error) {
      console.error('Error checking transaction usage:', error);
      
      // If table doesn't exist, assume it's not used
      if (error.message.includes('does not exist')) {
        console.log('⚠️  Table does not exist, assuming transaction not used');
        return false;
      }
      
      // On error, assume it's not used to avoid blocking valid transactions
      return false;
    }
    
    return data && data.length > 0;
  } catch (error) {
    console.error('Error in isTransactionUsed:', error);
    return false; // Fallback
  }
}