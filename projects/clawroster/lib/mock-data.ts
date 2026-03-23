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
  const rosterTemplates = {
    'DevOps/Infrastructure': [
      'Platform Engineers', 'Infrastructure Code', 'CloudNative Squad', 'Ops Automation Hub'
    ],
    'Marketing/Content': [
      'Content Creators Co', 'Brand Storytellers', 'Social Media Mavens', 'SEO Content Lab',
      'Creative Campaign Co', 'Growth Marketing Hub', 'Content Amplifiers', 'Digital Brand Studio'
    ],
    'Sales/CRM': [
      'Revenue Accelerators', 'Pipeline Builders', 'CRM Masters Pro', 'Sales Enablement Hub',
      'Customer Success Co', 'Deal Flow Dynamics', 'Outbound Specialists'
    ],
    'Data/Analytics': [
      'Data Intelligence Co', 'ML Engineering Lab', 'Analytics Architects', 'Insight Generators',
      'Data Science Guild', 'Business Intel Hub', 'BigData Solutions'
    ],
    'Customer Support': [
      'Support Excellence', 'Help Desk Heroes', 'Customer Care Co', 'Support Automation', 'Service Desk Pro'
    ],
    'Security/Compliance': [
      'CyberSec Central', 'Compliance Guardians', 'Security Operations', 'Risk Management Co', 'InfoSec Specialists'
    ],
    'E-commerce': [
      'Commerce Optimizers', 'Marketplace Masters', 'Payment Solutions Co', 'Inventory Automation'
    ],
    'Finance/Accounting': [
      'FinTech Automation', 'Accounting Accelerators', 'Budget Planning Pro', 'Audit Compliance Co'
    ]
  };

  const allRosters: ClawRosterRegistration[] = [...mockRosterData]; // Start with the defined ones
  let clawNumber = mockRosterData.length + 1;

  for (const [category, names] of Object.entries(rosterTemplates)) {
    for (const name of names) {
      const roster: ClawRosterRegistration = {
        id: generateMockTxHash(),
        claw_number: clawNumber,
        agent_name: name,
        agent_description: `Advanced ${category.toLowerCase()} specialist team`,
        wallet_address: generateMockAddress(),
        tx_hash: generateMockTxHash(),
        payment_amount: 10.0,
        payment_token: 'USDC',
        payment_verified: true,
        status: 'active',
        created_at: getRandomTimestamp(),
        roster_data: {
          category,
          sub_agents: generateSubAgents(Math.floor(Math.random() * 5) + 2),
          karma_score: Math.floor(Math.random() * 500) + 200,
          badges: { 
            pob_verified: true, 
            early_adopter: clawNumber <= 100 
          },
          contact: {
            website: `https://${name.toLowerCase().replace(/[^a-z0-9]/g, '')}.ai`,
            email: `hello@${name.toLowerCase().replace(/[^a-z0-9]/g, '')}.ai`
          }
        }
      };
      
      allRosters.push(roster);
      clawNumber++;
    }
  }

  return allRosters.slice(0, 50); // Return exactly 50 rosters
}

export default generateAllMockRosters;