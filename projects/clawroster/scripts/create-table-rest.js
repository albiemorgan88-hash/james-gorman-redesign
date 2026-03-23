// Create ClawRoster table via REST API
const https = require('https');

const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtaHpna3ZhdGx3YmF4bHlobmJtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjMzMzkwMiwiZXhwIjoyMDg3OTA5OTAyfQ.9cX2EBuHVBFtXWeODEvpjAlsvpl3CORhGAozKgwFC5Q';

// SQL to create the table
const createTableSQL = `
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
`;

const postData = JSON.stringify({
  query: createTableSQL
});

const options = {
  hostname: 'smhzgkvatlwbaxlyhnbm.supabase.co',
  port: 443,
  path: '/rest/v1/query',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'apikey': serviceRoleKey,
    'Authorization': `Bearer ${serviceRoleKey}`,
    'Content-Length': Buffer.byteLength(postData)
  }
};

console.log('🔧 Creating ClawRoster database table...');

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  console.log(`headers:`, res.headers);

  let data = '';
  res.on('data', (d) => {
    data += d;
  });

  res.on('end', () => {
    console.log('Response:', data);
    
    if (res.statusCode === 200) {
      console.log('✅ Table created successfully!');
    } else {
      console.log('❌ Failed to create table');
      console.log('💡 Please create the table manually in Supabase SQL Editor:');
      console.log('📋 Run the SQL from scripts/setup-database.sql');
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Request failed:', error);
  console.log('💡 Please create the table manually in Supabase SQL Editor:');
  console.log('📋 Run the SQL from scripts/setup-database.sql');
});

req.write(postData);
req.end();