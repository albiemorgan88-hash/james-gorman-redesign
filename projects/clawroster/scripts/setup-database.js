#!/usr/bin/env node
// Setup ClawRoster database table via Supabase REST API

const https = require('https');

const SUPABASE_URL = 'https://smhzgkvatlwbaxlyhnbm.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtaHpna3ZhdGx3YmF4bHlobmJtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjMzMzkwMiwiZXhwIjoyMDg3OTA5OTAyfQ.9cX2EBuHVBFtXWeODEvpjAlsvpl3CORhGAozKgwFC5Q';

// SQL to create the table (from setup-database.sql)
const SQL_QUERY = `
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

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_clawroster_claw_number ON clawroster_registrations(claw_number);
CREATE INDEX IF NOT EXISTS idx_clawroster_status ON clawroster_registrations(status);
CREATE INDEX IF NOT EXISTS idx_clawroster_payment_verified ON clawroster_registrations(payment_verified);
CREATE INDEX IF NOT EXISTS idx_clawroster_created_at ON clawroster_registrations(created_at);
CREATE INDEX IF NOT EXISTS idx_clawroster_tx_hash ON clawroster_registrations(tx_hash);

-- Set up Row Level Security (RLS)
ALTER TABLE clawroster_registrations ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (idempotent)
DROP POLICY IF EXISTS "Allow read access to active registrations" ON clawroster_registrations;
DROP POLICY IF EXISTS "Service role can do everything" ON clawroster_registrations;
DROP POLICY IF EXISTS "Allow anonymous insert" ON clawroster_registrations;

-- Allow anonymous users to read active registrations
CREATE POLICY "Allow read access to active registrations" ON clawroster_registrations
    FOR SELECT USING (status = 'active' AND payment_verified = true);

-- Allow service role to do everything (for API operations)
CREATE POLICY "Service role can do everything" ON clawroster_registrations
    FOR ALL USING (auth.role() = 'service_role');

-- Allow anonymous users to insert new registrations
CREATE POLICY "Allow anonymous insert" ON clawroster_registrations
    FOR INSERT WITH CHECK (true);

-- Grant permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT SELECT ON clawroster_registrations TO anon;
GRANT INSERT ON clawroster_registrations TO anon;
GRANT ALL ON clawroster_registrations TO service_role;

-- Return success message
SELECT 'ClawRoster table setup complete' as result;
`;

function runSQL(sql) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({ query: sql });
    
    const options = {
      hostname: 'smhzgkvatlwbaxlyhnbm.supabase.co',
      port: 443,
      path: '/rest/v1/rpc/exec',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
        'apikey': SERVICE_ROLE_KEY,
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.write(postData);
    req.end();
  });
}

async function setupDatabase() {
  console.log('🗃️ Setting up ClawRoster database...');
  
  try {
    // Try direct SQL execution via REST API
    const result = await runSQL(SQL_QUERY);
    console.log('✅ Database setup complete:', result);
    
  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
    
    // Try alternative approach using curl
    console.log('🔄 Trying alternative approach...');
    
    const fs = require('fs');
    const { exec } = require('child_process');
    
    // Write SQL to temporary file
    fs.writeFileSync('/tmp/clawroster-setup.sql', SQL_QUERY);
    
    // Execute via psql if available
    const cmd = `curl -X POST '${SUPABASE_URL}/rest/v1/rpc/exec' \\
      -H "apikey: ${SERVICE_ROLE_KEY}" \\
      -H "Authorization: Bearer ${SERVICE_ROLE_KEY}" \\
      -H "Content-Type: application/json" \\
      -d '{"query": ${JSON.stringify(SQL_QUERY)}}'`;
    
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error('❌ Alternative approach failed:', error);
        process.exit(1);
      } else {
        console.log('✅ Database setup via curl:', stdout);
      }
    });
  }
}

setupDatabase();