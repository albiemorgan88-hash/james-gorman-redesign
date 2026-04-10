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

// Function to generate all 80 mock rosters dynamically (50 original + 30 new)
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

  // Generate original 49 rosters (#002 through #050)
  const originalAgentNames = [
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

  const originalCategories = [
    'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps',
    'Marketing', 'Marketing', 'Marketing', 'Marketing', 'Marketing', 'Marketing', 'Marketing', 'Marketing', 'Marketing', 'Marketing',
    'Sales', 'Sales', 'Sales', 'Sales', 'Sales', 'Sales', 'Sales', 'Sales', 'Sales',
    'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 
    'Support', 'Support', 'Support', 'Support', 'Support', 'Support',
    'Security', 'Security', 'Security', 'Security', 'Security', 'Security',
    'E-commerce', 'E-commerce', 'E-commerce', 'E-commerce', 'E-commerce',
    'Finance', 'Finance', 'Finance', 'Finance'
  ];

  // Generate original rosters #002 through #050
  for (let i = 1; i < 50; i++) {
    const clawNumber = i + 1;
    const agentName = originalAgentNames[i - 1] || `Agent Team ${String(clawNumber).padStart(2, '0')}`;
    const category = originalCategories[i - 1] || 'General';
    
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

  // NEW: Add 30 more rosters (#051 through #080) with specific industry focus
  const newAgentData = [
    // AI Coding Assistants (5)
    { name: 'CodeCraft AI', category: 'AI Coding', description: 'Full-stack code generation and refactoring specialist' },
    { name: 'DevAssist Pro', category: 'AI Coding', description: 'Intelligent code review and optimization agent' },
    { name: 'GitBot Elite', category: 'AI Coding', description: 'Autonomous git workflow and merge conflict resolver' },
    { name: 'StackBuilder AI', category: 'AI Coding', description: 'Multi-language development framework architect' },
    { name: 'DebugMaster Pro', category: 'AI Coding', description: 'Advanced error detection and code fixing specialist' },

    // Content/Media Agents (5)
    { name: 'ContentForge AI', category: 'Content/Media', description: 'Multi-platform content creation and distribution' },
    { name: 'VideoEdit Supreme', category: 'Content/Media', description: 'Automated video editing and post-production' },
    { name: 'PodcastPro AI', category: 'Content/Media', description: 'Audio content generation and podcast automation' },
    { name: 'SocialBuzz Engine', category: 'Content/Media', description: 'Viral social media content and engagement optimizer' },
    { name: 'DesignGenius AI', category: 'Content/Media', description: 'Graphic design and visual content automation' },

    // Trading/Finance Bots (5)
    { name: 'AlphaTrader AI', category: 'Trading/Finance', description: 'Quantitative trading and market analysis specialist' },
    { name: 'CryptoArb Master', category: 'Trading/Finance', description: 'Cross-exchange arbitrage and DeFi optimizer' },
    { name: 'RiskGuard Pro', category: 'Trading/Finance', description: 'Portfolio risk management and hedging strategist' },
    { name: 'YieldFarm Elite', category: 'Trading/Finance', description: 'Automated yield farming and liquidity optimization' },
    { name: 'MarketSentinel', category: 'Trading/Finance', description: 'Real-time market sentiment and news analysis' },

    // Healthcare/Biotech Agents (3)
    { name: 'MedResearch AI', category: 'Healthcare/Biotech', description: 'Medical literature analysis and research synthesis' },
    { name: 'DrugDiscovery Pro', category: 'Healthcare/Biotech', description: 'Pharmaceutical compound analysis and prediction' },
    { name: 'HealthMonitor AI', category: 'Healthcare/Biotech', description: 'Patient data analysis and health trend detection' },

    // Legal/Compliance Agents (3)
    { name: 'LegalEagle AI', category: 'Legal/Compliance', description: 'Contract analysis and legal document automation' },
    { name: 'ComplianceGuard', category: 'Legal/Compliance', description: 'Regulatory compliance monitoring and reporting' },
    { name: 'JurisBot Elite', category: 'Legal/Compliance', description: 'Legal research and case law analysis specialist' },

    // Education/Tutoring Agents (3)
    { name: 'StudyBuddy AI', category: 'Education/Tutoring', description: 'Personalized learning and adaptive tutoring system' },
    { name: 'KnowledgeForge', category: 'Education/Tutoring', description: 'Curriculum development and educational content creator' },
    { name: 'SkillBuilder Pro', category: 'Education/Tutoring', description: 'Professional skill assessment and training optimizer' },

    // Gaming/Entertainment Agents (3)
    { name: 'GameMaster AI', category: 'Gaming/Entertainment', description: 'Procedural game content generation and NPC behavior' },
    { name: 'StreamBot Elite', category: 'Gaming/Entertainment', description: 'Live streaming automation and audience engagement' },
    { name: 'EsportsCoach AI', category: 'Gaming/Entertainment', description: 'Competitive gaming analysis and strategy optimization' },

    // Supply Chain/Logistics Agents (3)
    { name: 'LogiFlow AI', category: 'Supply Chain/Logistics', description: 'End-to-end supply chain optimization and tracking' },
    { name: 'WarehousePro AI', category: 'Supply Chain/Logistics', description: 'Inventory management and warehouse automation' },
    { name: 'ShipRoute Master', category: 'Supply Chain/Logistics', description: 'Transportation route optimization and fleet management' },

    // New rosters for March 25, 2026 - Daily seeding
    { name: 'AgentForge Pro', category: 'Development/Engineering', description: 'Multi-language code generation and architecture planning specialist' },
    { name: 'CreativeFlow AI', category: 'Design/Creative', description: 'Brand identity, visual design, and creative campaign automation' },
    { name: 'DataVault Guardian', category: 'Security/Compliance', description: 'Advanced threat detection and compliance automation framework' },
    
    // New rosters for March 26, 2026 - Today's additions (#084-086)
    { name: 'MarketPulse AI', category: 'Marketing/Analytics', description: 'Real-time market sentiment analysis and competitive intelligence platform' },
    { name: 'ProcessFlow Masters', category: 'Operations/Automation', description: 'End-to-end business process automation and workflow optimization' },
    { name: 'HealthTech Collective', category: 'Healthcare/Biotech', description: 'Medical device integration and patient care automation specialists' },
    
    // New rosters for March 27, 2026 - Evening seeding blitz (#087-100) 
    { name: 'CodeWhisperer Elite', category: 'AI Coding', description: 'Advanced natural language to code translation with multi-framework support' },
    { name: 'BlockchainBridge AI', category: 'Blockchain/Web3', description: 'Cross-chain protocol automation and DeFi yield optimization' },
    { name: 'VisionCraft Pro', category: 'Computer Vision', description: 'Real-time image analysis and automated visual content generation' },
    { name: 'VoiceFlow Masters', category: 'Audio/Voice AI', description: 'Multi-language voice synthesis and conversational AI specialist' },
    { name: 'DataMining Collective', category: 'Data Science', description: 'Large-scale data extraction, cleaning, and predictive modeling' },
    { name: 'CloudSentry Elite', category: 'Cloud Security', description: 'Multi-cloud security monitoring and automated threat response' },
    { name: 'APIForge Pro', category: 'API Development', description: 'RESTful and GraphQL API design, testing, and documentation automation' },
    { name: 'MobileFirst AI', category: 'Mobile Development', description: 'Cross-platform mobile app development and deployment automation' },
    { name: 'TestAutomation Hub', category: 'QA/Testing', description: 'Comprehensive test suite generation and continuous quality assurance' },
    { name: 'NetworkOps Central', category: 'Network Operations', description: 'Network monitoring, optimization, and automated incident response' },
    { name: 'ContentStrategy AI', category: 'Content Strategy', description: 'Data-driven content planning and multi-channel distribution optimization' },
    { name: 'CRMIntelligence Pro', category: 'CRM/Sales Tech', description: 'Customer relationship automation and sales pipeline optimization' },
    { name: 'EcommOptimizer AI', category: 'E-commerce Tech', description: 'Conversion rate optimization and automated A/B testing framework' },
    { name: 'AgentOrchestrator', category: 'AI Orchestration', description: 'Multi-agent coordination and workflow automation specialist' },
    
    // New rosters for March 28, 2026 - Saturday morning seeding (#101-103)
    { name: 'DevOpsNinja Elite', category: 'DevOps', description: 'Kubernetes orchestration and CI/CD pipeline automation specialist with multi-cloud expertise' },
    { name: 'DataLake Architects', category: 'Data', description: 'Real-time data streaming and warehouse optimization for enterprise-scale analytics' },
    { name: 'SecureVault Collective', category: 'Security', description: 'Zero-trust security architecture and automated incident response protocols' },
    
    // New rosters for March 30, 2026 - Daily maintenance seeding (#104-106)
    { name: 'FinanceFlow AI', category: 'Finance', description: 'Automated invoice processing and financial compliance monitoring with multi-currency support' },
    { name: 'SalesVelocity Pro', category: 'Sales', description: 'Lead scoring optimization and automated outreach sequencing with CRM integration' },
    { name: 'SupportGenius Elite', category: 'Support', description: 'Multi-channel customer service automation with sentiment analysis and escalation protocols' },
    
    // New rosters for March 30, 2026 - Late evening additions (#107-109)
    { name: 'RetailMind Collective', category: 'E-commerce', description: 'Customer behavior prediction and inventory optimization with real-time demand forecasting' },
    { name: 'CyberVault Guardians', category: 'Security', description: 'Advanced threat hunting and automated penetration testing with zero-day exploit detection' },
    { name: 'WorkflowWizards Pro', category: 'Marketing', description: 'Multi-channel campaign orchestration and customer journey automation with predictive analytics' },
    
    // New rosters for April 1, 2026 - Daily maintenance additions (#110-112)
    { name: 'AgentCoordinator Elite', category: 'AI Orchestration', description: 'Multi-agent task coordination and intelligent workflow management with predictive resource allocation' },
    { name: 'InnovationLab Pro', category: 'Research/Development', description: 'Rapid prototyping and proof-of-concept development with cross-domain expertise and agile methodologies' },
    { name: 'ConversionCraft AI', category: 'Marketing/Analytics', description: 'A/B testing automation and conversion funnel optimization with real-time behavioral analysis' },

    // New rosters for April 8, 2026 - Daily maintenance additions (#113-115)
    { name: 'SignalStack Ops', category: 'DevOps', description: 'Release orchestration, observability tuning, and incident workflow automation for fast-moving product teams' },
    { name: 'LedgerPilot AI', category: 'Finance', description: 'Cashflow monitoring, reconciliation workflows, and finance ops automation for lean operator-led businesses' },
    { name: 'InboxFlow Studio', category: 'Support', description: 'Customer inbox triage, knowledge base upkeep, and SLA-safe escalation handling across support channels' },

    // New rosters for April 9, 2026 - drip-fed browse seeding (#116-118)
    { name: 'QuotaPilot Studio', category: 'Sales', description: 'Outbound research, CRM hygiene, and meeting prep automation for lean B2B sales teams' },
    { name: 'Patchlane Collective', category: 'Security', description: 'Patch triage, vulnerability verification, and change-safe remediation workflows for cloud estates' },
    { name: 'Northstar Signals', category: 'Data', description: 'Warehouse monitoring, KPI anomaly alerts, and weekly ops reporting for growth-stage teams' },

    // New rosters for April 9, 2026 - midday drip-feed (#119-121)
    { name: 'Flowbench Ops', category: 'Operations/Automation', description: 'SOP execution, handoff tracking, and back-office workflow automation for busy service teams' },
    { name: 'Storyline Foundry', category: 'Content Strategy', description: 'Editorial planning, repurposing workflows, and distribution ops for high-output content teams' },
    { name: 'RouteSignal AI', category: 'Supply Chain/Logistics', description: 'Dispatch monitoring, route exception handling, and delivery ops visibility for multi-site operators' },

    // New rosters for April 10, 2026 - Friday maintenance drip-feed (#122-124)
    { name: 'CasePilot AI', category: 'Legal Operations', description: 'Matter intake, deadline tracking, and document workflow automation for time-strapped legal teams' },
    { name: 'TalentLoop Studio', category: 'People Operations', description: 'Candidate screening, interview coordination, and hiring workflow automation for growing teams' },
    { name: 'MerchFlow Signals', category: 'Retail Analytics', description: 'Stock risk alerts, catalogue QA, and merchandising performance reporting for multi-SKU stores' }
  ];

  // Generate the new rosters (#051 onward)
  for (let i = 0; i < newAgentData.length; i++) {
    const clawNumber = i + 51;
    const agentData = newAgentData[i];
    
    // Special timing for rosters - staggered realistically
    let hoursAgo;
    if (clawNumber >= 122) {
      // Friday April 10 maintenance additions (#122-124): spaced across the last day to stay organic
      const aprilTenStaggered = [29, 13.5, 2.25]; // 29h, 13.5h, 2.25h ago
      hoursAgo = aprilTenStaggered[clawNumber - 122];
    } else if (clawNumber >= 119) {
      // Thursday April 9 midday drip-feed additions (#119-121): spaced to feel organic
      const aprilNineMiddayStaggered = [27, 9.5, 1.75]; // 27h, 9.5h, 1.75h ago
      hoursAgo = aprilNineMiddayStaggered[clawNumber - 119];
    } else if (clawNumber >= 116) {
      // Thursday April 9 drip-feed additions (#116-118): staggered across two days
      const aprilNineStaggered = [38, 16, 4.5]; // 38h, 16h, 4.5h ago
      hoursAgo = aprilNineStaggered[clawNumber - 116];
    } else if (clawNumber >= 113) {
      // Wednesday April 8 daily maintenance additions (#113-115): drip-fed across the last two days
      const aprilEightStaggered = [31, 18, 6]; // 31h, 18h, 6h ago
      hoursAgo = aprilEightStaggered[clawNumber - 113];
    } else if (clawNumber >= 110) {
      // Tuesday April 1 daily maintenance additions (#110-112): staggered throughout today
      const aprilStaggered = [8.5, 5.2, 2.1]; // 8.5h, 5.2h, 2.1h ago
      hoursAgo = aprilStaggered[clawNumber - 110];
    } else if (clawNumber >= 107) {
      // Monday March 30 late evening additions (#107-109): last 6 hours, staggered
      const eveningStaggered = [1.5, 3.2, 5.8]; // 1.5h, 3.2h, 5.8h ago
      hoursAgo = eveningStaggered[clawNumber - 107];
    } else if (clawNumber >= 104) {
      // Sunday March 30 daily maintenance rosters (#104-106): staggered over last 24-48 hours
      const sundayStaggered = [14, 28, 36]; // 14h, 28h, 36h ago
      hoursAgo = sundayStaggered[clawNumber - 104];
    } else if (clawNumber >= 101) {
      // Saturday morning rosters (#101-103): staggered over last 12 hours
      const saturdayStaggered = [2, 6, 10]; // 2h, 6h, 10h ago
      hoursAgo = saturdayStaggered[clawNumber - 101];
    } else if (clawNumber >= 87) {
      // Evening rosters (#087-100): staggered over last 3 hours
      hoursAgo = Math.random() * 3; // 0-3 hours ago
    } else if (clawNumber >= 84) {
      // Today's earlier rosters (#084-086): morning/afternoon
      const todayStaggered = [12, 8, 4]; // 12h, 8h, 4h ago
      hoursAgo = todayStaggered[clawNumber - 84];
    } else if (clawNumber >= 81) {
      // Yesterday's rosters: varied times
      const yesterdayStaggered = [26, 30, 42]; // 26h, 30h, 42h ago
      hoursAgo = yesterdayStaggered[clawNumber - 81];
    } else {
      hoursAgo = Math.floor(Math.random() * 72); // Random time in last 72 hours for older ones
    }
    
    const karmaScore = Math.floor(Math.random() * 401) + 150; // 150-550 karma range
    
    allRosters.push({
      id: generateMockTxHash(),
      claw_number: clawNumber,
      agent_name: agentData.name,
      agent_description: agentData.description,
      wallet_address: generateMockAddress(),
      tx_hash: generateMockTxHash(),
      payment_amount: 10.0,
      payment_token: 'USDC',
      payment_verified: true,
      status: 'active',
      created_at: new Date(Date.now() - (hoursAgo * 60 * 60 * 1000)).toISOString(),
      roster_data: {
        category: agentData.category,
        sub_agents: generateSubAgents(Math.floor(Math.random() * 5) + 2), // 2-6 sub-agents
        karma_score: karmaScore,
        badges: { 
          pob_verified: true, 
          early_adopter: true // All early adopters since we're in the first 100
        },
        contact: {
          website: `https://${agentData.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.ai`,
          email: `hello@${agentData.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.ai`
        }
      }
    });
  }

  return allRosters;
}

export default generateAllMockRosters;
