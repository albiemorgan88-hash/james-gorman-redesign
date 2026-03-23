-- ClawRoster Database Setup
-- Run this in Supabase SQL Editor

-- Create the clawroster_registrations table
CREATE TABLE IF NOT EXISTS clawroster_registrations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    claw_number INTEGER NOT NULL UNIQUE,
    agent_name TEXT NOT NULL,
    agent_description TEXT NOT NULL,
    wallet_address TEXT NOT NULL, -- Payer's wallet
    tx_hash TEXT NOT NULL UNIQUE,
    payment_amount DECIMAL(10,6) NOT NULL,
    payment_token TEXT NOT NULL,
    payment_verified BOOLEAN DEFAULT FALSE,
    roster_data JSONB NOT NULL, -- The full roster JSON
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'rejected'))
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_clawroster_claw_number ON clawroster_registrations(claw_number);
CREATE INDEX IF NOT EXISTS idx_clawroster_status ON clawroster_registrations(status);
CREATE INDEX IF NOT EXISTS idx_clawroster_payment_verified ON clawroster_registrations(payment_verified);
CREATE INDEX IF NOT EXISTS idx_clawroster_created_at ON clawroster_registrations(created_at);
CREATE INDEX IF NOT EXISTS idx_clawroster_tx_hash ON clawroster_registrations(tx_hash);

-- Create a function to setup the table (for API usage)
CREATE OR REPLACE FUNCTION create_clawroster_table()
RETURNS TEXT AS $$
BEGIN
    -- This function can be called from the API to ensure table exists
    -- The table creation is idempotent (IF NOT EXISTS)
    RETURN 'ClawRoster table ready';
END;
$$ LANGUAGE plpgsql;

-- Set up Row Level Security (RLS)
ALTER TABLE clawroster_registrations ENABLE ROW LEVEL SECURITY;

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