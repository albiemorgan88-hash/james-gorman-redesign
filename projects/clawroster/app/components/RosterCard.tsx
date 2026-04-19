'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { RosterBadge } from '../../lib/roster-status';

interface Agent {
  name: string;
  role: string;
  status: 'active' | 'standby' | 'maintenance';
}

interface RosterCardProps {
  agentName: string;
  role: string;
  karma: number;
  teamCount: number;
  isVerified: boolean;
  preview?: boolean;
  agents?: Agent[];
  isEarlyAdopter?: boolean;
  rosterId?: string;
  badges?: RosterBadge[];
}

const badgeStyles: Record<string, string> = {
  beta: 'bg-primary/20 text-primary border border-primary/30',
  verified: 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/30',
  showcase: 'bg-amber-500/15 text-amber-300 border border-amber-400/30',
  neutral: 'bg-background-secondary text-muted-foreground border border-border',
};

// Function to generate slug from agent name
function generateSlug(agentName: string): string {
  return agentName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

export default function RosterCard({ 
  agentName, 
  role, 
  karma, 
  teamCount, 
  isVerified, 
  preview = false,
  agents = [],
  isEarlyAdopter = false,
  rosterId,
  badges = []
}: RosterCardProps) {
  const cardContent = (
    <div className={`bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/50 ${preview ? 'card-glow premium-glow' : 'card-glow'}`}
    >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-2xl">
              🤖
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-mono font-bold text-lg text-foreground">{agentName}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{role}</p>
              {rosterId && (
                <div className="mt-1">
                  <span className="font-mono text-primary font-bold text-sm bg-primary/10 border border-primary/30 px-2 py-0.5 rounded">
                    CLAW #{rosterId}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col gap-1 items-end">
            {badges.length > 0 ? badges.map((badge) => (
              <div
                key={badge.label}
                className={`px-2 py-1 rounded text-[11px] font-mono ${badgeStyles[badge.tone] || badgeStyles.neutral}`}
              >
                {badge.label}
              </div>
            )) : (
              <>
                {isVerified && (
                  <div className="claw-mark bg-primary/20 text-primary px-2 py-1 rounded text-xs font-mono">
                    BETA
                  </div>
                )}
                {isEarlyAdopter && (
                  <div className="bg-amber-500/20 text-amber-400 px-2 py-1 rounded text-xs font-mono border border-amber-500/30">
                    EARLY ADOPTER
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 bg-background-secondary rounded-lg">
            <div className="text-xl font-mono font-bold text-primary">{karma}</div>
            <div className="text-xs text-muted-foreground">Karma</div>
          </div>
          <div className="text-center p-3 bg-background-secondary rounded-lg">
            <div className="text-xl font-mono font-bold text-accent">{teamCount}</div>
            <div className="text-xs text-muted-foreground">Team Size</div>
          </div>
        </div>
        
        {agents.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-mono text-muted-foreground">Team Preview</h4>
            {agents.slice(0, 3).map((agent, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <span className="text-foreground">{agent.name}</span>
                <span className={`px-2 py-1 rounded text-xs font-mono ${
                  agent.status === 'active' ? 'bg-green-900/30 text-green-400' :
                  agent.status === 'standby' ? 'bg-yellow-900/30 text-yellow-400' :
                  'bg-red-900/30 text-red-400'
                }`}>
                  {agent.status}
                </span>
              </div>
            ))}
            {agents.length > 3 && (
              <div className="text-xs text-muted-foreground">
                +{agents.length - 3} more agents...
              </div>
            )}
          </div>
        )}
    </div>
  );

  return (
    <motion.div
      whileHover={preview ? {} : { scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="block"
    >
      {preview ? (
        cardContent
      ) : (
        <Link href={`/roster/${generateSlug(agentName)}`} className="block">
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
}
