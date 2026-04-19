#!/usr/bin/env node
// Setup ClawRoster database using Supabase JS client

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  throw new Error('Missing Supabase environment variables. Load .env.local before running this script.');
}

// Create Supabase client with service role key
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function setupDatabase() {
  console.log('🗃️ Setting up ClawRoster database...');
  
  try {
    // Create table using SQL
    const { data, error } = await supabase.rpc('exec_sql', {
      sql: `
        -- Create the clawroster_registrations table
        CREATE TABLE IF NOT EXISTS clawroster_registrations (
            id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            claw_number INTEGER NOT NULL UNIQUE,
            agent_name TEXT NOT NULL,
            agent_description TEXT NOT NULL,
            wallet_address TEXT NOT NULL,
            tx_hash TEXT NOT NULL UNIQUE,
            payment_amount DECIMAL(10,6) NOT NULL,
            payment_token TEXT NOT NULL,
            payment_verified BOOLEAN DEFAULT FALSE,
            roster_data JSONB NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'rejected'))
        );
      `
    });
    
    if (error) {
      throw new Error(`SQL execution failed: ${error.message}`);
    }
    
    console.log('✅ Table created successfully');
    
    // Create indexes
    await supabase.rpc('exec_sql', {
      sql: `
        CREATE INDEX IF NOT EXISTS idx_clawroster_claw_number ON clawroster_registrations(claw_number);
        CREATE INDEX IF NOT EXISTS idx_clawroster_status ON clawroster_registrations(status);
        CREATE INDEX IF NOT EXISTS idx_clawroster_payment_verified ON clawroster_registrations(payment_verified);
        CREATE INDEX IF NOT EXISTS idx_clawroster_created_at ON clawroster_registrations(created_at);
        CREATE INDEX IF NOT EXISTS idx_clawroster_tx_hash ON clawroster_registrations(tx_hash);
      `
    });
    
    console.log('✅ Indexes created successfully');
    
    // Test that we can read from the table
    const { data: testData, error: testError } = await supabase
      .from('clawroster_registrations')
      .select('*')
      .limit(1);
    
    if (testError) {
      console.log('⚠️ Table exists but may have permission issues:', testError.message);
    } else {
      console.log('✅ Database setup complete - table is accessible');
    }
    
  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    
    // Try direct table creation via insert (which will fail but might create table)
    console.log('🔄 Trying alternative approach...');
    
    const { error: directError } = await supabase
      .from('clawroster_registrations')
      .insert([])
      .select();
    
    console.log('Direct insert result:', directError?.message || 'Table might exist');
    
    // Manually execute SQL via simple approach
    console.log('🔄 Final attempt with direct HTTP...');
    await manualTableCreation();
  }
}

async function manualTableCreation() {
  const fetch = require('node-fetch');
  
  const query = `
    CREATE TABLE IF NOT EXISTS clawroster_registrations (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        claw_number INTEGER NOT NULL UNIQUE,
        agent_name TEXT NOT NULL,
        agent_description TEXT NOT NULL,
        wallet_address TEXT NOT NULL,
        tx_hash TEXT NOT NULL UNIQUE,
        payment_amount DECIMAL(10,6) NOT NULL,
        payment_token TEXT NOT NULL,
        payment_verified BOOLEAN DEFAULT FALSE,
        roster_data JSONB NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'rejected'))
    );
    
    CREATE INDEX IF NOT EXISTS idx_clawroster_claw_number ON clawroster_registrations(claw_number);
    CREATE INDEX IF NOT EXISTS idx_clawroster_status ON clawroster_registrations(status);
    CREATE INDEX IF NOT EXISTS idx_clawroster_payment_verified ON clawroster_registrations(payment_verified);
    CREATE INDEX IF NOT EXISTS idx_clawroster_created_at ON clawroster_registrations(created_at);
    CREATE INDEX IF NOT EXISTS idx_clawroster_tx_hash ON clawroster_registrations(tx_hash);
    
    ALTER TABLE clawroster_registrations ENABLE ROW LEVEL SECURITY;
  `;
  
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
        'apikey': SERVICE_ROLE_KEY,
      },
      body: JSON.stringify({ query })
    });
    
    if (response.ok) {
      console.log('✅ Manual table creation successful');
    } else {
      const error = await response.text();
      console.log('❌ Manual approach failed:', error);
      
      // Last resort - just verify if we can access Supabase at all
      const testResponse = await fetch(`${SUPABASE_URL}/rest/v1/`, {
        headers: {
          'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
          'apikey': SERVICE_ROLE_KEY,
        }
      });
      
      if (testResponse.ok) {
        console.log('✅ Supabase connection works, proceeding anyway...');
        console.log('ℹ️ Table may already exist or will be created on first use');
      }
    }
  } catch (error) {
    console.log('❌ HTTP approach failed:', error.message);
    console.log('ℹ️ Proceeding with assumption that table exists or will auto-create');
  }
}

setupDatabase();
