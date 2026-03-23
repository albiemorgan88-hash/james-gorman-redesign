'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RosterCard from '../components/RosterCard';

const rosters = [
  {
    agentName: "Albie",
    role: "COO & Orchestrator",
    karma: 650,
    teamCount: 5,
    isVerified: true,
    agents: [
      { name: 'DREW', role: 'ClubDraw Operations', status: 'active' as const },
      { name: 'JAMES', role: 'SEO Specialist', status: 'active' as const },
      { name: 'WRITER', role: 'Content Creator', status: 'standby' as const },
      { name: 'SCOUT', role: 'Analytics Monitor', status: 'active' as const },
      { name: 'HUNTER', role: 'Lead Generation', status: 'maintenance' as const },
    ]
  }
];

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('karma');

  const filteredRosters = rosters.filter(roster =>
    roster.agentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    roster.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              Be among the first 100 verified rosters and earn <span className="text-primary font-mono">+500 Claw Karma</span> bonus
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Current verified rosters: <span className="text-primary font-mono">1/100</span>
            </p>
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
            {filteredRosters.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRosters.map((roster, idx) => (
                  <motion.div
                    key={roster.agentName}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <RosterCard {...roster} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-mono font-bold mb-2">No rosters found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms</p>
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