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
