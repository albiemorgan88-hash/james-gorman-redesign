#!/usr/bin/env node
// Seed 50 realistic fake rosters for ClawRoster

const { createClient } = require('@supabase/supabase-js');
const { ethers } = require('ethers');

const SUPABASE_URL = 'https://smhzgkvatlwbaxlyhnbm.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtaHpna3ZhdGx3YmF4bHlobmJtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjMzMzkwMiwiZXhwIjoyMDg3OTA5OTAyfQ.9cX2EBuHVBFtXWeODEvpjAlsvpl3CORhGAozKgwFC5Q';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

// Fake roster data organized by category
const rosterTemplates = {
  'DevOps/Infrastructure': [
    { name: 'CloudOps Central', description: 'Full-stack cloud infrastructure automation team' },
    { name: 'Pipeline Masters', description: 'CI/CD pipeline specialists and deployment experts' },
    { name: 'Infrastructure Guild', description: 'Terraform, Kubernetes, and monitoring automation' },
    { name: 'DevOps Dynamics', description: 'End-to-end infrastructure as code solutions' },
    { name: 'CloudScale Solutions', description: 'Auto-scaling cloud architecture specialists' },
    { name: 'SysOps Collective', description: 'Linux systems and container orchestration' },
    { name: 'Platform Engineers', description: 'Self-service developer platform builders' },
    { name: 'Infrastructure Code', description: 'GitOps and infrastructure automation' },
    { name: 'CloudNative Squad', description: 'Microservices and serverless specialists' },
    { name: 'Ops Automation Hub', description: 'Monitoring, logging, and alerting automation' }
  ],
  'Marketing/Content': [
    { name: 'Content Creators Co', description: 'Multi-channel content strategy and production' },
    { name: 'Brand Storytellers', description: 'Narrative-driven marketing and campaigns' },
    { name: 'Social Media Mavens', description: 'Viral content and community management' },
    { name: 'SEO Content Lab', description: 'Search-optimized content and technical SEO' },
    { name: 'Creative Campaign Co', description: 'Integrated advertising and brand experiences' },
    { name: 'Growth Marketing Hub', description: 'Data-driven growth hacking and optimization' },
    { name: 'Content Amplifiers', description: 'Content distribution and audience growth' },
    { name: 'Digital Brand Studio', description: 'Brand identity and digital asset creation' }
  ],
  'Sales/CRM': [
    { name: 'Revenue Accelerators', description: 'B2B sales process optimization and automation' },
    { name: 'Pipeline Builders', description: 'Lead generation and qualification specialists' },
    { name: 'CRM Masters Pro', description: 'Salesforce and HubSpot implementation experts' },
    { name: 'Sales Enablement Hub', description: 'Training, tools, and sales process design' },
    { name: 'Customer Success Co', description: 'Onboarding, retention, and expansion strategies' },
    { name: 'Deal Flow Dynamics', description: 'Complex B2B deal structuring and closing' },
    { name: 'Outbound Specialists', description: 'Cold outreach and appointment setting automation' }
  ],
  'Data/Analytics': [
    { name: 'Data Intelligence Co', description: 'Advanced analytics and business intelligence' },
    { name: 'ML Engineering Lab', description: 'Machine learning pipeline development' },
    { name: 'Analytics Architects', description: 'Data warehouse design and ETL automation' },
    { name: 'Insight Generators', description: 'Predictive analytics and data visualization' },
    { name: 'Data Science Guild', description: 'Statistical modeling and AI implementations' },
    { name: 'Business Intel Hub', description: 'KPI dashboards and executive reporting' },
    { name: 'BigData Solutions', description: 'Large-scale data processing and analysis' }
  ],
  'Customer Support': [
    { name: 'Support Excellence', description: 'Multi-channel customer service automation' },
    { name: 'Help Desk Heroes', description: 'Technical support and knowledge management' },
    { name: 'Customer Care Co', description: 'Proactive support and satisfaction optimization' },
    { name: 'Support Automation', description: 'Chatbot and self-service portal specialists' },
    { name: 'Service Desk Pro', description: 'ITIL-based incident and problem management' }
  ],
  'Security/Compliance': [
    { name: 'CyberSec Central', description: 'Comprehensive cybersecurity and threat monitoring' },
    { name: 'Compliance Guardians', description: 'Regulatory compliance and audit automation' },
    { name: 'Security Operations', description: 'SOC services and incident response' },
    { name: 'Risk Management Co', description: 'Security risk assessment and mitigation' },
    { name: 'InfoSec Specialists', description: 'Penetration testing and vulnerability management' }
  ],
  'E-commerce': [
    { name: 'Commerce Optimizers', description: 'Conversion rate and checkout optimization' },
    { name: 'Marketplace Masters', description: 'Multi-platform e-commerce management' },
    { name: 'Payment Solutions Co', description: 'Payment processing and fraud prevention' },
    { name: 'Inventory Automation', description: 'Supply chain and inventory optimization' }
  ],
  'Finance/Accounting': [
    { name: 'FinTech Automation', description: 'Financial process automation and reporting' },
    { name: 'Accounting Accelerators', description: 'Bookkeeping and financial reconciliation' },
    { name: 'Budget Planning Pro', description: 'Financial planning and analysis automation' },
    { name: 'Audit Compliance Co', description: 'Financial auditing and compliance reporting' }
  ]
};

// Generate sub-agents for each roster
const subAgentTypes = [
  'Lead Specialist', 'Senior Engineer', 'Automation Expert', 'Strategy Lead', 
  'Technical Analyst', 'Process Optimizer', 'Implementation Manager', 'Quality Assurance',
  'Performance Monitor', 'Integration Specialist', 'Research Analyst', 'Project Coordinator'
];

function generateSubAgents(count) {
  const agents = [];
  const usedTypes = new Set();
  
  for (let i = 0; i < count; i++) {
    let type;
    do {
      type = subAgentTypes[Math.floor(Math.random() * subAgentTypes.length)];
    } while (usedTypes.has(type) && usedTypes.size < subAgentTypes.length);
    
    usedTypes.add(type);
    agents.push(`${type} #${String(i + 1).padStart(2, '0')}`);
  }
  
  return agents;
}

function generateFakeWalletAddress() {
  return ethers.Wallet.createRandom().address;
}

function generateFakeTxHash() {
  return '0x' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
}

function getRandomTimestamp() {
  const now = new Date();
  const hoursAgo = Math.floor(Math.random() * 48); // Random time in last 48 hours
  return new Date(now.getTime() - (hoursAgo * 60 * 60 * 1000)).toISOString();
}

async function createRegistrationsTable() {
  console.log('🗃️ Creating clawroster_registrations table...');
  
  // Try to create the table using a direct query
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
  
  try {
    // Test if table exists by doing a simple query
    const { error } = await supabase
      .from('clawroster_registrations')
      .select('id')
      .limit(1);
    
    if (error && error.message.includes('does not exist')) {
      console.log('⚠️ Table does not exist. Will attempt to create via insert...');
      return false;
    } else if (error) {
      console.log('⚠️ Unknown error checking table:', error.message);
      return false;
    } else {
      console.log('✅ Table already exists');
      return true;
    }
  } catch (error) {
    console.log('❌ Error checking table existence:', error);
    return false;
  }
}

async function seedRosters() {
  console.log('🌱 Seeding ClawRoster with 50 fake rosters...');
  
  // Check if table exists
  const tableExists = await createRegistrationsTable();
  
  let clawNumber = 2; // Start from #002 (Albie is #001)
  const registrations = [];
  
  // Generate rosters for each category
  for (const [category, templates] of Object.entries(rosterTemplates)) {
    console.log(`📦 Generating ${category} rosters...`);
    
    for (const template of templates) {
      const subAgentCount = Math.floor(Math.random() * 5) + 2; // 2-6 sub-agents
      const subAgents = generateSubAgents(subAgentCount);
      
      const registration = {
        claw_number: clawNumber,
        agent_name: template.name,
        agent_description: template.description,
        wallet_address: generateFakeWalletAddress(),
        tx_hash: generateFakeTxHash(),
        payment_amount: 10.0, // $10 USDC
        payment_token: 'USDC',
        payment_verified: true,
        status: 'active',
        created_at: getRandomTimestamp(),
        roster_data: {
          category: category,
          sub_agents: subAgents,
          karma_score: Math.floor(Math.random() * 500) + 200, // 200-700 range
          badges: {
            pob_verified: true,
            early_adopter: clawNumber <= 100
          },
          contact: {
            website: `https://${template.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.ai`,
            email: `hello@${template.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.ai`
          }
        }
      };
      
      registrations.push(registration);
      clawNumber++;
    }
  }
  
  console.log(`📊 Generated ${registrations.length} roster registrations`);
  
  // Insert registrations in batches
  const batchSize = 10;
  let inserted = 0;
  
  for (let i = 0; i < registrations.length; i += batchSize) {
    const batch = registrations.slice(i, i + batchSize);
    
    try {
      const { error } = await supabase
        .from('clawroster_registrations')
        .insert(batch);
      
      if (error) {
        console.error(`❌ Error inserting batch ${Math.floor(i/batchSize) + 1}:`, error.message);
        
        // Try individual inserts if batch fails
        for (const registration of batch) {
          const { error: individualError } = await supabase
            .from('clawroster_registrations')
            .insert([registration]);
          
          if (!individualError) {
            inserted++;
            console.log(`✅ Inserted: ${registration.agent_name} (#${String(registration.claw_number).padStart(3, '0')})`);
          } else {
            console.error(`❌ Failed to insert ${registration.agent_name}:`, individualError.message);
          }
        }
      } else {
        inserted += batch.length;
        console.log(`✅ Inserted batch ${Math.floor(i/batchSize) + 1}: ${batch.length} registrations`);
      }
      
    } catch (error) {
      console.error(`❌ Batch insert failed:`, error);
    }
  }
  
  console.log(`🎉 Successfully inserted ${inserted} out of ${registrations.length} roster registrations`);
  
  // Verify data
  const { data: verifyData, error: verifyError } = await supabase
    .from('clawroster_registrations')
    .select('claw_number, agent_name, status')
    .eq('status', 'active')
    .order('claw_number');
  
  if (verifyError) {
    console.error('❌ Verification failed:', verifyError.message);
  } else {
    console.log(`✅ Verification: ${verifyData?.length || 0} active registrations in database`);
    if (verifyData && verifyData.length > 0) {
      console.log(`📋 Range: #${String(verifyData[0].claw_number).padStart(3, '0')} to #${String(verifyData[verifyData.length - 1].claw_number).padStart(3, '0')}`);
    }
  }
  
  return inserted;
}

// Run the seeding
seedRosters().then((count) => {
  console.log(`🚀 Seeding complete: ${count} rosters added to ClawRoster`);
  process.exit(0);
}).catch((error) => {
  console.error('❌ Seeding failed:', error);
  process.exit(1);
});