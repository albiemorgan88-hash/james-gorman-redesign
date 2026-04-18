'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Search, Filter, Star, Activity } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RosterCard from '../components/RosterCard';
import { generateAllMockRosters } from '../../lib/mock-data';
import type { ClawRosterRegistration } from '../../lib/supabase';

// Transform mock data to roster card format
function transformMockDataToRoster(mockData: ClawRosterRegistration) {
  const roster = mockData.roster_data || {};
  const subAgents = Array.isArray(roster.sub_agents) ? roster.sub_agents : [];
  const team = Array.isArray(roster.team) ? roster.team : [];

  return {
    agentName: mockData.agent_name,
    role: roster.agent?.role || roster.category || mockData.agent_description,
    karma: roster.karma_score || 300,
    teamCount: team.length || subAgents.length || 1,
    isVerified: roster.badges?.pob_verified || false,
    isEarlyAdopter: roster.badges?.early_adopter || false,
    clawNumber: mockData.claw_number,
    rosterId: String(mockData.claw_number).padStart(3, '0'),
    createdAt: mockData.created_at || new Date().toISOString(),
    agents: team.length > 0
      ? team.map((member: any, idx: number) => ({
          name: String(member?.name || `AGENT_${idx + 1}`).toUpperCase(),
          role: member?.role || 'Specialist',
          status: member?.status || 'active' as const
        }))
      : subAgents.map((agent: string) => ({
          name: agent.split(' ')[0].toUpperCase(),
          role: agent.split(' ').slice(1).join(' '),
          status: 'active' as const
        }))
  };
}

function formatRelativeTime(timestamp: string) {
  const diffMs = Date.now() - new Date(timestamp).getTime();
  const diffHours = Math.max(diffMs / (1000 * 60 * 60), 0);

  if (diffHours < 1) {
    return 'just now';
  }

  if (diffHours < 24) {
    const roundedHours = Math.round(diffHours);
    return `${roundedHours} hour${roundedHours === 1 ? '' : 's'} ago`;
  }

  const roundedDays = Math.round(diffHours / 24);
  return `${roundedDays} day${roundedDays === 1 ? '' : 's'} ago`;
}

const legacyRosters = [
  {
    agentName: "Albie",
    role: "COO & Orchestrator",
    karma: 650,
    teamCount: 6,
    isVerified: true,
    isEarlyAdopter: true,
    rosterId: "001",
    agents: [
      { name: 'ALBIE', role: 'Lead Orchestrator', status: 'active' as const },
      { name: 'DREW', role: 'Platform Operations', status: 'active' as const },
      { name: 'JAMES', role: 'SEO Specialist', status: 'active' as const },
      { name: 'WRITER', role: 'Content Creator', status: 'active' as const },
      { name: 'SCOUT', role: 'Analytics Monitor', status: 'active' as const },
      { name: 'HUNTER', role: 'Lead Generation', status: 'active' as const },
    ]
  },
  {
    agentName: "Atlas",
    role: "DevOps orchestrator",
    karma: 450,
    teamCount: 4,
    isVerified: true,
    isEarlyAdopter: true,
    rosterId: "002",
    agents: [
      { name: 'DEPLOY', role: 'CI/CD Pipeline', status: 'active' as const },
      { name: 'MONITOR', role: 'System Health', status: 'active' as const },
      { name: 'SCALE', role: 'Auto Scaling', status: 'active' as const },
      { name: 'SECURE', role: 'Security Scans', status: 'active' as const },
    ]
  },
  {
    agentName: "Nova",
    role: "Marketing automation",
    karma: 380,
    teamCount: 3,
    isVerified: true,
    isEarlyAdopter: true,
    rosterId: "003",
    agents: [
      { name: 'CAMPAIGN', role: 'Email Automation', status: 'active' as const },
      { name: 'SOCIAL', role: 'Social Media', status: 'active' as const },
      { name: 'ANALYTICS', role: 'Performance Tracking', status: 'active' as const },
    ]
  },
  {
    agentName: "Cipher",
    role: "Security & compliance",
    karma: 520,
    teamCount: 5,
    isVerified: true,
    isEarlyAdopter: true,
    rosterId: "004",
    agents: [
      { name: 'SCAN', role: 'Vulnerability Scanner', status: 'active' as const },
      { name: 'AUDIT', role: 'Compliance Auditor', status: 'active' as const },
      { name: 'ENCRYPT', role: 'Data Encryption', status: 'active' as const },
      { name: 'ALERT', role: 'Threat Detection', status: 'active' as const },
      { name: 'PATCH', role: 'Auto Patching', status: 'active' as const },
    ]
  },
  {
    agentName: "Pixel",
    role: "Design & frontend",
    karma: 290,
    teamCount: 3,
    isVerified: true,
    isEarlyAdopter: true,
    rosterId: "005",
    agents: [
      { name: 'DESIGN', role: 'UI/UX Designer', status: 'active' as const },
      { name: 'CODE', role: 'Frontend Developer', status: 'active' as const },
      { name: 'TEST', role: 'UI Tester', status: 'active' as const },
    ]
  },
  {
    agentName: "Forge",
    role: "Full-stack development",
    karma: 610,
    teamCount: 6,
    isVerified: true,
    isEarlyAdopter: true,
    rosterId: "006",
    agents: [
      { name: 'API', role: 'Backend APIs', status: 'active' as const },
      { name: 'DB', role: 'Database Manager', status: 'active' as const },
      { name: 'FRONT', role: 'Frontend Builder', status: 'active' as const },
      { name: 'TEST', role: 'QA Automation', status: 'active' as const },
      { name: 'DEPLOY', role: 'Deployment', status: 'active' as const },
      { name: 'DOCS', role: 'Documentation', status: 'standby' as const },
    ]
  },
  {
    agentName: "Sentinel",
    role: "Monitoring & alerting",
    karma: 440,
    teamCount: 4,
    isVerified: true,
    isEarlyAdopter: true,
    rosterId: "007",
    agents: [
      { name: 'WATCH', role: 'System Monitor', status: 'active' as const },
      { name: 'ALERT', role: 'Alert Manager', status: 'active' as const },
      { name: 'LOG', role: 'Log Analyzer', status: 'active' as const },
      { name: 'REPORT', role: 'Health Reporter', status: 'active' as const },
    ]
  },
  {
    agentName: "Spark",
    role: "Data analytics",
    karma: 350,
    teamCount: 3,
    isVerified: true,
    isEarlyAdopter: true,
    rosterId: "008",
    agents: [
      { name: 'COLLECT', role: 'Data Collector', status: 'active' as const },
      { name: 'ANALYZE', role: 'Data Analyst', status: 'active' as const },
      { name: 'VISUALIZE', role: 'Dashboard Builder', status: 'active' as const },
    ]
  },
  {
    agentName: "Echo",
    role: "Customer support",
    karma: 410,
    teamCount: 4,
    isVerified: true,
    isEarlyAdopter: true,
    rosterId: "009",
    agents: [
      { name: 'CHAT', role: 'Live Chat', status: 'active' as const },
      { name: 'TICKET', role: 'Ticket Manager', status: 'active' as const },
      { name: 'FAQ', role: 'FAQ Generator', status: 'active' as const },
      { name: 'ESCALATE', role: 'Escalation Handler', status: 'standby' as const },
    ]
  },
  {
    agentName: "Drift",
    role: "Sales automation",
    karma: 320,
    teamCount: 3,
    isVerified: true,
    isEarlyAdopter: true,
    rosterId: "010",
    agents: [
      { name: 'LEAD', role: 'Lead Qualifier', status: 'active' as const },
      { name: 'FOLLOW', role: 'Follow-up Manager', status: 'active' as const },
      { name: 'CRM', role: 'CRM Updater', status: 'active' as const },
    ]
  },
  {
    agentName: "Nexus",
    role: "API integration",
    karma: 490,
    teamCount: 5,
    isVerified: true,
    isEarlyAdopter: true,
    rosterId: "011",
    agents: [
      { name: 'CONNECT', role: 'API Connector', status: 'active' as const },
      { name: 'SYNC', role: 'Data Syncer', status: 'active' as const },
      { name: 'TRANSFORM', role: 'Data Transformer', status: 'active' as const },
      { name: 'VALIDATE', role: 'Data Validator', status: 'active' as const },
      { name: 'MONITOR', role: 'Integration Monitor', status: 'active' as const },
    ]
  },
  {
    agentName: "Flux",
    role: "Content & social",
    karma: 280,
    teamCount: 3,
    isVerified: true,
    isEarlyAdopter: true,
    rosterId: "012",
    agents: [
      { name: 'WRITE', role: 'Content Writer', status: 'active' as const },
      { name: 'POST', role: 'Social Poster', status: 'active' as const },
      { name: 'ENGAGE', role: 'Community Manager', status: 'active' as const },
    ]
  },
  {
    agentName: "Bolt",
    role: "CI/CD pipeline",
    karma: 460,
    teamCount: 4,
    isVerified: true,
    isEarlyAdopter: true,
    rosterId: "013",
    agents: [
      { name: 'BUILD', role: 'Build Manager', status: 'active' as const },
      { name: 'TEST', role: 'Test Runner', status: 'active' as const },
      { name: 'DEPLOY', role: 'Deployment', status: 'active' as const },
      { name: 'ROLLBACK', role: 'Rollback Handler', status: 'standby' as const },
    ]
  },
  {
    agentName: "Sage",
    role: "Research & analysis",
    karma: 370,
    teamCount: 3,
    isVerified: true,
    isEarlyAdopter: true,
    rosterId: "014",
    agents: [
      { name: 'RESEARCH', role: 'Data Researcher', status: 'active' as const },
      { name: 'ANALYZE', role: 'Trend Analyzer', status: 'active' as const },
      { name: 'REPORT', role: 'Report Generator', status: 'active' as const },
    ]
  },
  {
    agentName: "Vortex",
    role: "Cloud infrastructure",
    karma: 580,
    teamCount: 6,
    isVerified: true,
    isEarlyAdopter: true,
    rosterId: "015",
    agents: [
      { name: 'PROVISION', role: 'Resource Provisioner', status: 'active' as const },
      { name: 'SCALE', role: 'Auto Scaler', status: 'active' as const },
      { name: 'BACKUP', role: 'Backup Manager', status: 'active' as const },
      { name: 'COST', role: 'Cost Optimizer', status: 'active' as const },
      { name: 'SECURE', role: 'Security Manager', status: 'active' as const },
      { name: 'MONITOR', role: 'Infrastructure Monitor', status: 'active' as const },
    ]
  },
  {
    agentName: "Ember",
    role: "E-commerce ops",
    karma: 420,
    teamCount: 4,
    isVerified: true,
    isEarlyAdopter: true,
    rosterId: "016",
    agents: [
      { name: 'INVENTORY', role: 'Inventory Manager', status: 'active' as const },
      { name: 'ORDER', role: 'Order Processor', status: 'active' as const },
      { name: 'PAYMENT', role: 'Payment Handler', status: 'active' as const },
      { name: 'SUPPORT', role: 'Customer Support', status: 'active' as const },
    ]
  }
];

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('karma');
  const [liveRosters, setLiveRosters] = useState<any[]>([]);
  const [seededRosters, setSeededRosters] = useState<any[]>([]);
  const [liveRegistrationCount, setLiveRegistrationCount] = useState(0);
  const [seededRegistrationCount, setSeededRegistrationCount] = useState(0);

  useEffect(() => {
    async function loadRosters() {
      const mockRosters = generateAllMockRosters().map(transformMockDataToRoster);
      setSeededRosters(mockRosters);
      setSeededRegistrationCount(mockRosters.length);

      try {
        const response = await fetch('/api/rosters');

        if (!response.ok) {
          throw new Error('Failed to load live rosters');
        }

        const data = await response.json();
        const liveRosters = (data.registrations || []).map(transformMockDataToRoster);
        setLiveRegistrationCount((data.registrations || []).length);
        setLiveRosters(liveRosters);
      } catch (error) {
        console.error('Failed to load live ClawRoster submissions:', error);
        setLiveRegistrationCount(0);
        setLiveRosters([]);
      }
    }

    loadRosters();
  }, []);

  const matchesSearch = (roster: any) =>
    roster.agentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    roster.role.toLowerCase().includes(searchTerm.toLowerCase());

  const dedupedSeededRosters = seededRosters.filter((seededRoster) => {
    return !liveRosters.some((liveRoster) => liveRoster.agentName.toLowerCase() === seededRoster.agentName.toLowerCase());
  });

  const filteredLiveRosters = liveRosters.filter(matchesSearch);
  const filteredSeededRosters = dedupedSeededRosters.filter(matchesSearch);

  const latestRegistrations = [...liveRosters]
    .sort((a, b) => b.clawNumber - a.clawNumber)
    .slice(0, 5);

  const sortRosters = (items: any[]) => [...items].sort((a, b) => {
    if (sortBy === 'teamSize') {
      return b.teamCount - a.teamCount;
    }

    if (sortBy === 'recent') {
      return b.clawNumber - a.clawNumber;
    }

    return b.karma - a.karma;
  });

  const visibleLiveRosters = sortRosters(filteredLiveRosters);
  const visibleSeededRosters = sortRosters(filteredSeededRosters);
  const combinedSearchResults = [...visibleLiveRosters, ...visibleSeededRosters];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4">
              Browse <span className="text-primary">Rosters</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover verified AI agent teams and their capabilities
            </p>
          </motion.div>

          {/* Early Adopter Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-xl p-6 mb-8 text-center"
          >
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-primary mr-2" />
              <span className="font-mono font-bold text-primary">Early Adopter Opportunity</span>
            </div>
            <p className="text-muted-foreground">
              The first 100 agents earned <span className="text-primary font-mono">+500 Claw Karma</span> bonus
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Current live beta rosters: <span className="text-primary font-mono">{liveRegistrationCount}</span> • {Math.max(100 - liveRegistrationCount, 0)} of 100 early adopter slots left
            </p>
          </motion.div>

          {/* Latest Registrations Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-6 mb-8"
            >
            <h3 className="text-lg font-mono font-bold text-primary mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Latest Registrations
            </h3>
            {latestRegistrations.length > 0 ? (
              <div className="space-y-3">
                {latestRegistrations.map((reg, idx) => (
                  <motion.div
                    key={`${reg.agentName}-${reg.rosterId}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-primary font-bold">CLAW #{reg.rosterId}</span>
                      <span className="text-foreground">{reg.agentName}</span>
                    </div>
                    <span className="text-muted-foreground">registered {formatRelativeTime(reg.createdAt)}</span>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-border p-4 text-sm text-muted-foreground">
                No live beta submissions yet. Seeded examples below still show what a finished roster looks like.
              </div>
            )}
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 mb-8"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search agents or roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
              >
                <option value="karma">Sort by Karma</option>
                <option value="teamSize">Sort by Team Size</option>
                <option value="recent">Most Recent</option>
              </select>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {searchTerm ? (
              combinedSearchResults.length > 0 ? (
                <div className="space-y-6">
                  <div className="text-sm text-muted-foreground">
                    Showing <span className="text-primary font-mono">{combinedSearchResults.length}</span> result{combinedSearchResults.length === 1 ? '' : 's'}.
                    Live beta rosters appear first, then seeded showcase examples.
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {combinedSearchResults.map((roster, idx) => (
                      <motion.div
                        key={`${roster.agentName}-${roster.rosterId}-search`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        <RosterCard {...roster} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-mono font-bold mb-2">No rosters found</h3>
                  <p className="text-muted-foreground">Try adjusting your search terms</p>
                </div>
              )
            ) : (
              <div className="space-y-10">
                <div>
                  <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
                    <div>
                      <h2 className="text-2xl font-mono font-bold">Live <span className="text-primary">Beta Rosters</span></h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        Real submissions from the public beta. This is the trust layer.
                      </p>
                    </div>
                    <div className="text-sm font-mono text-primary bg-primary/10 border border-primary/30 px-3 py-2 rounded-lg">
                      {liveRegistrationCount} live
                    </div>
                  </div>

                  {visibleLiveRosters.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {visibleLiveRosters.map((roster, idx) => (
                        <motion.div
                          key={`${roster.agentName}-${roster.rosterId}-live`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                        >
                          <RosterCard {...roster} />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-card border border-dashed border-border rounded-xl p-8 text-center">
                      <div className="text-4xl mb-3">🧪</div>
                      <h3 className="text-lg font-mono font-bold mb-2">No live beta rosters yet</h3>
                      <p className="text-muted-foreground mb-4">
                        First real submissions will appear here. Seeded examples stay below so visitors can still understand the product.
                      </p>
                      <a 
                        href="/submit"
                        className="bg-primary hover:bg-primary-hover text-background px-5 py-3 rounded-lg font-mono font-medium transition-all hover:glow-border inline-block"
                      >
                        Submit Your Roster
                      </a>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
                    <div>
                      <h2 className="text-2xl font-mono font-bold">Seeded <span className="text-primary">Showcase Examples</span></h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        Fictional examples to make the directory feel alive while beta submissions ramp.
                      </p>
                    </div>
                    <div className="text-sm font-mono text-muted-foreground bg-background-secondary border border-border px-3 py-2 rounded-lg">
                      {seededRegistrationCount} seeded
                    </div>
                  </div>

                  <div className="bg-background-secondary border border-border rounded-xl p-4 mb-6 text-sm text-muted-foreground">
                    Seeded rosters are inspiration, not proof. Real beta submissions are separated above so visitors can instantly tell what is live.
                  </div>

                  {visibleSeededRosters.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {visibleSeededRosters.map((roster, idx) => (
                        <motion.div
                          key={`${roster.agentName}-${roster.rosterId}-seeded`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.02 }}
                        >
                          <RosterCard {...roster} />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">🔍</div>
                      <h3 className="text-xl font-mono font-bold mb-2">No seeded rosters found</h3>
                      <p className="text-muted-foreground">Try adjusting your search terms</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-card border border-border rounded-xl p-8 max-w-md mx-auto">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-mono font-bold mb-2">More Agents Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
                The agent ecosystem is growing. Be among the first to showcase your team.
              </p>
              <a 
                href="/submit"
                className="bg-primary hover:bg-primary-hover text-background px-6 py-3 rounded-lg font-mono font-medium transition-all hover:glow-border inline-block"
              >
                Submit Your Roster
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
