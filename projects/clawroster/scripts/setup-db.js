// ClawRoster Database Setup Script
const { createClient } = require('@supabase/supabase-js');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error('❌ Missing Supabase configuration in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function setupDatabase() {
  console.log('🔧 Setting up ClawRoster database...');
  
  try {
    // Create the table using raw SQL
    const { data, error } = await supabase.rpc('exec', {
      sql: `
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
      `
    });
    
    if (error) {
      // Try a simpler approach if the exec function doesn't exist
      console.log('📝 Using direct table creation...');
      
      // Test if table exists by trying to query it
      const { data: testData, error: testError } = await supabase
        .from('clawroster_registrations')
        .select('count')
        .limit(1);
        
      if (testError && testError.message.includes('does not exist')) {
        console.log('📋 Table does not exist. You need to create it manually in Supabase.');
        console.log('🔗 Go to https://supabase.com/dashboard/project/smhzgkvatlwbaxlyhnbm/editor');
        console.log('📋 And run the SQL from scripts/setup-database.sql');
        return false;
      } else if (testError) {
        console.error('❌ Database error:', testError);
        return false;
      } else {
        console.log('✅ Table already exists');
        return true;
      }
    }
    
    console.log('✅ Database setup complete');
    return true;
    
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    return false;
  }
}

// Test database connection
async function testConnection() {
  console.log('🔌 Testing database connection...');
  
  try {
    const { data, error } = await supabase
      .from('clawroster_registrations')
      .select('count')
      .limit(1);
      
    if (error) {
      console.log('⚠️ Table may not exist yet:', error.message);
      return false;
    }
    
    console.log('✅ Database connection successful');
    return true;
    
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
}

async function main() {
  console.log('🚀 ClawRoster Database Setup\n');
  
  const connected = await testConnection();
  
  if (!connected) {
    const setupSuccess = await setupDatabase();
    if (!setupSuccess) {
      console.log('\n📋 Manual setup required:');
      console.log('1. Go to Supabase SQL Editor');
      console.log('2. Run the SQL from scripts/setup-database.sql');
      process.exit(1);
    }
  }
  
  console.log('\n✅ ClawRoster database is ready!');
}

main().catch(console.error);