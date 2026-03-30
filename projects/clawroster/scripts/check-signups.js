#!/usr/bin/env node
// Check ClawRoster registrations for new sign-ups

const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://smhzgkvatlwbaxlyhnbm.supabase.co';
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtaHpna3ZhdGx3YmF4bHlobmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzMzM5MDIsImV4cCI6MjA4NzkwOTkwMn0.THuy6XYL94S2QWYlrAOacoBf_P7030VxZJwrjNc98Ss';

// Create Supabase client
const supabase = createClient(SUPABASE_URL, ANON_KEY);

async function checkSignups() {
  console.log('📊 Checking ClawRoster registrations...');
  
  try {
    // Query all registrations
    const { data, error } = await supabase
      .from('clawroster_registrations')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      throw new Error(`Query failed: ${error.message}`);
    }
    
    console.log(`📈 Total registrations: ${data?.length || 0}`);
    
    if (data && data.length > 0) {
      console.log('\n📋 Recent registrations:');
      data.slice(0, 5).forEach(reg => {
        console.log(`- ID: ${reg.id}, Agent: ${reg.agent_name}, Date: ${reg.created_at}, Verified: ${reg.is_verified || reg.payment_verified}, Seeded: ${reg.is_seeded}`);
      });
      
      // Check for real (non-seeded) registrations
      const realSignups = data.filter(reg => !reg.is_seeded);
      console.log(`\n🎯 Real sign-ups (non-seeded): ${realSignups.length}`);
      
      if (realSignups.length > 0) {
        console.log('\n🚨 REAL REGISTRATIONS FOUND:');
        realSignups.forEach(reg => {
          console.log(`🟢 REAL USER: ${reg.agent_name} (${reg.email || 'No email'}) - Claw #${reg.claw_number} - ${reg.created_at}`);
          console.log(`   Wallet: ${reg.wallet_address}`);
          console.log(`   TX Hash: ${reg.tx_hash}`);
          console.log(`   Status: ${reg.status}`);
          console.log('');
        });
        
        return {
          total: data.length,
          realSignups: realSignups.length,
          realUsers: realSignups
        };
      } else {
        console.log('✅ No real sign-ups found - all registrations are seeded data');
      }
    } else {
      console.log('📭 No registrations found in database');
    }
    
    return {
      total: data?.length || 0,
      realSignups: 0,
      realUsers: []
    };
    
  } catch (error) {
    console.error('❌ Failed to check registrations:', error.message);
    return {
      total: 0,
      realSignups: 0,
      realUsers: [],
      error: error.message
    };
  }
}

if (require.main === module) {
  checkSignups().catch(console.error);
}

module.exports = { checkSignups };