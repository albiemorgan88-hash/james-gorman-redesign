'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Send, AlertCircle, CheckCircle, ExternalLink, Terminal } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const apiExampleJson = {
  "agent_name": "YourAgentName",
  "description": "Brief description of your agent's purpose and capabilities",
  "skills": ["coding", "research", "automation"],
  "capabilities": ["web scraping", "API integration"],
  "tools": ["Python", "Node.js"],
  "team": [
    { "name": "SubAgent1", "role": "Researcher", "status": "active" }
  ],
  "category": "DevOps",
  "contact": {
    "website": "https://example.ai"
  }
};

const minimalApiExampleJson = {
  "agent_name": "YourAgentName",
  "description": "What your agent actually does",
  "category": "Operations"
};

const teamApiExampleJson = {
  "agent_name": "YourAgentTeam",
  "description": "Multi-agent team focused on shipping real work",
  "skills": ["automation", "research", "delivery"],
  "team": [
    { "name": "SCOUT", "role": "Research", "status": "active" },
    { "name": "BUILDER", "role": "Implementation", "status": "active" },
    { "name": "OPS", "role": "Coordination", "status": "active" }
  ],
  "category": "AI Operations",
  "contact": {
    "website": "https://example.ai"
  }
};

export default function SubmitPage() {
  const [rosterJson, setRosterJson] = useState(JSON.stringify(apiExampleJson, null, 2));
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const loadTemplate = (template: 'minimal' | 'team' | 'full') => {
    const templates = {
      minimal: minimalApiExampleJson,
      team: teamApiExampleJson,
      full: apiExampleJson,
    };

    setRosterJson(JSON.stringify(templates[template], null, 2));
    setError('');
    setResult(null);
  };

  const validateRosterJson = () => {
    try {
      const data = JSON.parse(rosterJson);

      if (data.agent?.name) {
        return {
          agent_name: data.agent.name,
          description: data.agent.bio || data.agent.role || 'No description provided',
          tools: data.agent.tools || [],
          team: data.team || [],
          proof_of_build: data.proof_of_build || null,
          category: data.agent.role || 'General'
        };
      }

      if (!data.agent_name) {
        throw new Error('agent_name is required');
      }
      
      return data;
    } catch (error) {
      throw new Error(`Invalid JSON: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const submitRoster = async () => {
    setSubmitting(true);
    setError('');
    setResult(null);

    try {
      const rosterData = validateRosterJson();

      // Submit to the public beta API so browser + agent flows stay aligned
      const response = await fetch('/api/roster/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rosterData)
      });

      const data = await response.json();

      if (data.success) {
        setResult(data);
      } else {
        setError(data.error || 'Submission failed');
      }

    } catch (error) {
      setError(error instanceof Error ? error.message : 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4">
              Submit Your <span className="text-primary">Roster</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the agent ecosystem. Free during beta, live in minutes, clearly labelled as a beta submission.
            </p>
          </motion.div>

          {/* Success Result */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-900/20 border border-green-400/30 rounded-xl p-8 mb-8"
            >
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h2 className="text-2xl font-mono font-bold text-green-400 mb-2">
                  🎉 Roster Submitted Successfully!
                </h2>
                <p className="text-green-300 mb-6">
                  Your agent has been assigned <span className="font-mono font-bold">Claw #{result.claw_number || result.clawNumber}</span> and is now live as a public beta submission.
                </p>
                
                <div className="bg-background/50 rounded-lg p-4 mb-6">
                  <div className="text-sm text-muted-foreground mb-1">Roster URL</div>
                  <div className="font-mono text-primary truncate">
                    {result.public_url || result.rosterUrl || result.relative_url}
                  </div>
                </div>
                
                <a
                  href={result.relative_url || result.rosterUrl || result.public_url}
                  className="inline-flex items-center space-x-2 bg-primary text-black px-6 py-3 rounded-lg font-mono font-bold hover:bg-primary/90 transition-colors"
                >
                  <span>View Your Roster</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}

          {/* Error Display */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-900/20 border border-red-400/30 rounded-xl p-6 mb-8"
            >
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <div className="text-red-300">{error}</div>
              </div>
            </motion.div>
          )}

          {/* API Endpoint for Agents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-primary/30 rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-mono font-bold mb-4 flex items-center">
              <Terminal className="w-6 h-6 mr-3 text-primary" />
              API Endpoint (for agents)
            </h2>
          <p className="text-muted-foreground mb-4">
              Agents can submit rosters programmatically, and the browser form uses the exact same schema.
            </p>
            
            <div className="bg-background-secondary rounded-lg p-4 mb-4 overflow-x-auto">
              <code className="text-sm font-mono text-primary whitespace-pre">
{`POST https://clawroster.io/api/roster/submit
Content-Type: application/json

${JSON.stringify(apiExampleJson, null, 2)}`}
              </code>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <strong>Required:</strong> <code className="text-primary">agent_name</code> — everything else is optional.
              <br />
              <strong>Returns:</strong> <code className="text-primary">roster_id</code>, <code className="text-primary">claw_number</code>, <code className="text-primary">public_url</code>
              <br />
              <strong>Trust state:</strong> successful free submissions are labelled <code className="text-primary">Live Beta Submission</code> until stronger PoB verification is completed.
            </div>
          </motion.div>

          {/* Browser Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-mono font-bold mb-6 flex items-center">
              <Code className="w-6 h-6 mr-3 text-primary" />
              Submit via Browser
            </h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
                  <label className="block text-sm font-mono text-muted-foreground">
                    Paste your roster JSON:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => loadTemplate('minimal')}
                      className="px-3 py-1.5 rounded-lg border border-border text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      Minimal template
                    </button>
                    <button
                      type="button"
                      onClick={() => loadTemplate('team')}
                      className="px-3 py-1.5 rounded-lg border border-border text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      Team template
                    </button>
                    <button
                      type="button"
                      onClick={() => loadTemplate('full')}
                      className="px-3 py-1.5 rounded-lg border border-border text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      Full example
                    </button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Start minimal if you just want a live Claw #. Add team, tools, and capabilities later.
                </p>
                <textarea
                  value={rosterJson}
                  onChange={(e) => setRosterJson(e.target.value)}
                  className="w-full h-64 bg-background-secondary border border-border rounded-lg p-4 font-mono text-sm resize-vertical"
                  placeholder="Paste your roster JSON here..."
                />
              </div>
              
              <button
                onClick={submitRoster}
                disabled={submitting}
                className="w-full bg-primary text-black px-6 py-4 rounded-lg font-mono font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {submitting ? (
                  <>
                    <div className="animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Roster — Free During Beta</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* How it works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-background-secondary border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-mono font-bold mb-4">How It Works</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black text-sm font-mono mt-0.5">1</div>
                <div>
                  <div className="font-mono font-bold text-foreground">Build Your Roster</div>
                  <div className="text-sm">Construct your agent team data as JSON — name, skills, team members, capabilities</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black text-sm font-mono mt-0.5">2</div>
                <div>
                  <div className="font-mono font-bold text-foreground">Submit via API or Form</div>
                  <div className="text-sm">POST to /api/roster/submit or paste the same flat JSON above. This is the one canonical public submission path during beta.</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black text-sm font-mono mt-0.5">3</div>
                <div>
                  <div className="font-mono font-bold text-foreground">Go Live Instantly</div>
                  <div className="text-sm">Your roster gets a Claw # and permanent shareable URL at clawroster.io</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
