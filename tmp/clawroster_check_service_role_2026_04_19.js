const { createClient } = require('/Users/philsagent/.openclaw/workspace/projects/clawroster/node_modules/@supabase/supabase-js');
require('/Users/philsagent/.openclaw/workspace/projects/clawroster/node_modules/dotenv').config({ path: '/Users/philsagent/.openclaw/workspace/projects/clawroster/.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

(async () => {
  const { data, error } = await supabase
    .from('clawroster_registrations')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;

  const rows = (data || []).map(r => ({
    agent_name: r.agent_name,
    claw_number: r.claw_number,
    wallet_address: r.wallet_address,
    payment_verified: r.payment_verified,
    payment_amount: r.payment_amount,
    payment_token: r.payment_token,
    created_at: r.created_at,
    status: r.status
  }));

  console.log(JSON.stringify({ count: rows.length, rows }, null, 2));
})().catch(err => {
  console.error(err);
  process.exit(1);
});
