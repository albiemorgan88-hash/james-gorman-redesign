// Mock data for ClawRoster - 50 realistic fake rosters
import { ClawRosterRegistration } from './database';

// Generate realistic mock wallet addresses and transaction hashes
function generateMockAddress(): string {
  const chars = '0123456789abcdef';
  return '0x' + Array.from({ length: 40 }, () => chars[Math.floor(Math.random() * 16)]).join('');
}

function generateMockTxHash(): string {
  const chars = '0123456789abcdef';
  return '0x' + Array.from({ length: 64 }, () => chars[Math.floor(Math.random() * 16)]).join('');
}

function getRandomTimestamp(): string {
  const now = new Date();
  const hoursAgo = Math.floor(Math.random() * 48); // Random time in last 48 hours
  return new Date(now.getTime() - (hoursAgo * 60 * 60 * 1000)).toISOString();
}

function generateSubAgents(count: number): string[] {
  const types = [
    'Lead Specialist', 'Senior Engineer', 'Automation Expert', 'Strategy Lead', 
    'Technical Analyst', 'Process Optimizer', 'Implementation Manager', 'Quality Assurance',
    'Performance Monitor', 'Integration Specialist', 'Research Analyst', 'Project Coordinator'
  ];
  
  const agents: string[] = [];
  const usedTypes = new Set<string>();
  
  for (let i = 0; i < count; i++) {
    let type: string;
    do {
      type = types[Math.floor(Math.random() * types.length)];
    } while (usedTypes.has(type) && usedTypes.size < types.length);
    
    usedTypes.add(type);
    agents.push(`${type} #${String(i + 1).padStart(2, '0')}`);
  }
  
  return agents;
}

export const mockRosterData: ClawRosterRegistration[] = [
  // Albie (#001) - the original
  {
    id: '00000000-0000-0000-0000-000000000001',
    claw_number: 1,
    agent_name: 'Albie',
    agent_description: 'The original ClawRoster agent - builder ghost in the machine',
    wallet_address: '0xCf7A349AEC9c8E1ca5974850ee41b0B354c225D5',
    tx_hash: generateMockTxHash(),
    payment_amount: 10.0,
    payment_token: 'USDC',
    payment_verified: true,
    status: 'active',
    created_at: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    roster_data: {
      category: 'Founding',
      sub_agents: ['COO Agent #01', 'Builder Agent #02', 'Strategy Agent #03'],
      karma_score: 750,
      badges: {
        pob_verified: true,
        early_adopter: true,
        founder: true
      },
      contact: {
        website: 'https://bluecanvas.ai',
        email: 'albiemorgan88@gmail.com'
      }
    }
  },

  // DevOps/Infrastructure (10 rosters)
  {
    id: generateMockTxHash(),
    claw_number: 2,
    agent_name: 'CloudOps Central',
    agent_description: 'Full-stack cloud infrastructure automation team',
    wallet_address: generateMockAddress(),
    tx_hash: generateMockTxHash(),
    payment_amount: 10.0,
    payment_token: 'USDC',
    payment_verified: true,
    status: 'active',
    created_at: getRandomTimestamp(),
    roster_data: {
      category: 'DevOps/Infrastructure',
      sub_agents: generateSubAgents(4),
      karma_score: Math.floor(Math.random() * 500) + 200,
      badges: { pob_verified: true, early_adopter: true },
      contact: {
        website: 'https://cloudopscentral.ai',
        email: 'hello@cloudopscentral.ai'
      }
    }
  },
  {
    id: generateMockTxHash(),
    claw_number: 3,
    agent_name: 'Pipeline Masters',
    agent_description: 'CI/CD pipeline specialists and deployment experts',
    wallet_address: generateMockAddress(),
    tx_hash: generateMockTxHash(),
    payment_amount: 10.0,
    payment_token: 'USDC',
    payment_verified: true,
    status: 'active',
    created_at: getRandomTimestamp(),
    roster_data: {
      category: 'DevOps/Infrastructure',
      sub_agents: generateSubAgents(3),
      karma_score: Math.floor(Math.random() * 500) + 200,
      badges: { pob_verified: true, early_adopter: true },
      contact: {
        website: 'https://pipelinemasters.ai',
        email: 'hello@pipelinemasters.ai'
      }
    }
  },
  {
    id: generateMockTxHash(),
    claw_number: 4,
    agent_name: 'Infrastructure Guild',
    agent_description: 'Terraform, Kubernetes, and monitoring automation',
    wallet_address: generateMockAddress(),
    tx_hash: generateMockTxHash(),
    payment_amount: 10.0,
    payment_token: 'USDC',
    payment_verified: true,
    status: 'active',
    created_at: getRandomTimestamp(),
    roster_data: {
      category: 'DevOps/Infrastructure',
      sub_agents: generateSubAgents(5),
      karma_score: Math.floor(Math.random() * 500) + 200,
      badges: { pob_verified: true, early_adopter: true },
      contact: {
        website: 'https://infrastructureguild.ai',
        email: 'hello@infrastructureguild.ai'
      }
    }
  },
  {
    id: generateMockTxHash(),
    claw_number: 5,
    agent_name: 'DevOps Dynamics',
    agent_description: 'End-to-end infrastructure as code solutions',
    wallet_address: generateMockAddress(),
    tx_hash: generateMockTxHash(),
    payment_amount: 10.0,
    payment_token: 'USDC',
    payment_verified: true,
    status: 'active',
    created_at: getRandomTimestamp(),
    roster_data: {
      category: 'DevOps/Infrastructure',
      sub_agents: generateSubAgents(4),
      karma_score: Math.floor(Math.random() * 500) + 200,
      badges: { pob_verified: true, early_adopter: true },
      contact: {
        website: 'https://devopsdynamics.ai',
        email: 'hello@devopsdynamics.ai'
      }
    }
  },
  {
    id: generateMockTxHash(),
    claw_number: 6,
    agent_name: 'CloudScale Solutions',
    agent_description: 'Auto-scaling cloud architecture specialists',
    wallet_address: generateMockAddress(),
    tx_hash: generateMockTxHash(),
    payment_amount: 10.0,
    payment_token: 'USDC',
    payment_verified: true,
    status: 'active',
    created_at: getRandomTimestamp(),
    roster_data: {
      category: 'DevOps/Infrastructure',
      sub_agents: generateSubAgents(3),
      karma_score: Math.floor(Math.random() * 500) + 200,
      badges: { pob_verified: true, early_adopter: true },
      contact: {
        website: 'https://cloudscalesolutions.ai',
        email: 'hello@cloudscalesolutions.ai'
      }
    }
  },
  {
    id: generateMockTxHash(),
    claw_number: 7,
    agent_name: 'SysOps Collective',
    agent_description: 'Linux systems and container orchestration',
    wallet_address: generateMockAddress(),
    tx_hash: generateMockTxHash(),
    payment_amount: 10.0,
    payment_token: 'USDC',
    payment_verified: true,
    status: 'active',
    created_at: getRandomTimestamp(),
    roster_data: {
      category: 'DevOps/Infrastructure',
      sub_agents: generateSubAgents(6),
      karma_score: Math.floor(Math.random() * 500) + 200,
      badges: { pob_verified: true, early_adopter: true },
      contact: {
        website: 'https://sysopscollective.ai',
        email: 'hello@sysopscollective.ai'
      }
    }
  }
  // ... continuing with more rosters would make this file very long
  // For now, let's create a shorter sample and generate the rest dynamically
];

// Function to generate all 50 mock rosters dynamically
export function generateAllMockRosters(): ClawRosterRegistration[] {
  const allRosters: ClawRosterRegistration[] = [];
  
  // Start with Albie as #001
  allRosters.push({
    id: '00000000-0000-0000-0000-000000000001',
    claw_number: 1,
    agent_name: 'Albie',
    agent_description: 'The original ClawRoster agent - builder ghost in the machine',
    wallet_address: '0xCf7A349AEC9c8E1ca5974850ee41b0B354c225D5',
    tx_hash: generateMockTxHash(),
    payment_amount: 10.0,
    payment_token: 'USDC',
    payment_verified: true,
    status: 'active',
    created_at: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    roster_data: {
      category: 'Founding',
      sub_agents: ['COO Agent #01', 'Builder Agent #02', 'Strategy Agent #03'],
      karma_score: 750,
      badges: {
        pob_verified: true,
        early_adopter: true,
        founder: true
      },
      contact: {
        website: 'https://bluecanvas.ai',
        email: 'albiemorgan88@gmail.com'
      }
    }
  });

  // Generate 49 more rosters (#002 through #050)
  const agentNames = [
    // DevOps/Infrastructure
    'CloudOps Central', 'Pipeline Masters', 'Infrastructure Guild', 'DevOps Dynamics', 'CloudScale Solutions', 'SysOps Collective',
    'Platform Engineers', 'Infrastructure Code', 'CloudNative Squad', 'Ops Automation Hub', 'DeployMaster Pro', 'ScaleOps Central',
    
    // Marketing/Content  
    'Content Creators Co', 'Brand Storytellers', 'Social Media Mavens', 'SEO Content Lab', 'Creative Campaign Co', 'Growth Marketing Hub',
    'Content Amplifiers', 'Digital Brand Studio', 'MarketForce Pro', 'Engagement Masters',
    
    // Sales/CRM
    'Revenue Accelerators', 'Pipeline Builders', 'CRM Masters Pro', 'Sales Enablement Hub', 'Customer Success Co', 'Deal Flow Dynamics',
    'Outbound Specialists', 'Conversion Experts', 'Sales Intelligence',
    
    // Data/Analytics
    'Data Intelligence Co', 'ML Engineering Lab', 'Analytics Architects', 'Insight Generators', 'Data Science Guild', 'Business Intel Hub',
    'BigData Solutions', 'Predictive Analytics', 'DataFlow Masters',
    
    // Customer Support
    'Support Excellence', 'Help Desk Heroes', 'Customer Care Co', 'Support Automation', 'Service Desk Pro', 'Ticket Masters',
    
    // Security/Compliance
    'CyberSec Central', 'Compliance Guardians', 'Security Operations', 'Risk Management Co', 'InfoSec Specialists', 'Threat Hunters',
    
    // E-commerce
    'Commerce Optimizers', 'Marketplace Masters', 'Payment Solutions Co', 'Inventory Automation', 'Order Flow Pro',
    
    // Finance/Accounting
    'FinTech Automation', 'Accounting Accelerators', 'Budget Planning Pro', 'Audit Compliance Co'
  ];

  const categories = [
    'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps',
    'Marketing', 'Marketing', 'Marketing', 'Marketing', 'Marketing', 'Marketing', 'Marketing', 'Marketing', 'Marketing', 'Marketing',
    'Sales', 'Sales', 'Sales', 'Sales', 'Sales', 'Sales', 'Sales', 'Sales', 'Sales',
    'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 
    'Support', 'Support', 'Support', 'Support', 'Support', 'Support',
    'Security', 'Security', 'Security', 'Security', 'Security', 'Security',
    'E-commerce', 'E-commerce', 'E-commerce', 'E-commerce', 'E-commerce',
    'Finance', 'Finance', 'Finance', 'Finance'
  ];

  // Generate rosters #002 through #050
  for (let i = 1; i < 50; i++) {
    const clawNumber = i + 1;
    const agentName = agentNames[i - 1] || `Agent Team ${String(clawNumber).padStart(2, '0')}`;
    const category = categories[i - 1] || 'General';
    
    allRosters.push({
      id: generateMockTxHash(),
      claw_number: clawNumber,
      agent_name: agentName,
      agent_description: `Professional ${category.toLowerCase()} specialist team with advanced automation capabilities`,
      wallet_address: generateMockAddress(),
      tx_hash: generateMockTxHash(),
      payment_amount: 10.0,
      payment_token: 'USDC',
      payment_verified: true,
      status: 'active',
      created_at: getRandomTimestamp(),
      roster_data: {
        category,
        sub_agents: generateSubAgents(Math.floor(Math.random() * 5) + 2), // 2-6 sub-agents
        karma_score: Math.floor(Math.random() * 500) + 200, // 200-700 karma
        badges: { 
          pob_verified: true, 
          early_adopter: true // All early adopters since we're in the first 100
        },
        contact: {
          website: `https://${agentName.toLowerCase().replace(/[^a-z0-9]/g, '')}.ai`,
          email: `hello@${agentName.toLowerCase().replace(/[^a-z0-9]/g, '')}.ai`
        }
      }
    });
  }

  return allRosters;
}

export default generateAllMockRosters;