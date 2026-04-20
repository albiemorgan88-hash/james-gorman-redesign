const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

function readEnvFile(filePath) {
  const env = {};
  const raw = fs.readFileSync(filePath, 'utf8');
  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

async function main() {
  const env = readEnvFile('/Users/philsagent/.openclaw/workspace/projects/clawroster/.env.local');
  const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

  const { data, error } = await supabase
    .from('clawroster_registrations')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;

  const real = (data || []).filter((row) => {
    const tx = String(row.tx_hash || '');
    const wallet = String(row.wallet_address || '');
    return row.payment_verified === true
      && Number(row.payment_amount) > 0
      && String(row.payment_token || '').toUpperCase() !== 'FREE'
      && wallet !== 'free-beta'
      && !tx.startsWith('api-beta-')
      && !tx.startsWith('free-beta-');
  });

  console.log(JSON.stringify({
    checkedAt: new Date().toISOString(),
    totalRows: (data || []).length,
    realCount: real.length,
    rows: (data || []).map((row) => ({
      agent_name: row.agent_name,
      created_at: row.created_at,
      payment_verified: row.payment_verified,
      payment_amount: row.payment_amount,
      payment_token: row.payment_token,
      wallet_address: row.wallet_address,
      tx_hash: row.tx_hash,
      status: row.status,
    })),
    realRows: real.map((row) => ({
      agent_name: row.agent_name,
      created_at: row.created_at,
      payment_amount: row.payment_amount,
      payment_token: row.payment_token,
      tx_hash: row.tx_hash,
      status: row.status,
    }))
  }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
