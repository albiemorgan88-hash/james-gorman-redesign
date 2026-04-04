import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Build an OpenClaw Agent Team",
  description: "Technical guide to building OpenClaw agent teams. Learn multi-agent orchestration, communication, specialization, and coordination for scalable AI automation.",
  keywords: [
    "openclaw agent team",
    "multi-agent setup openclaw",
    "openclaw agent orchestration",
    "openclaw agent communication",
    "openclaw multi agent system",
    "agent team coordination",
    "openclaw agent specialization",
    "distributed ai agents"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-agent-team" },
  openGraph: {
    title: "Build an OpenClaw Agent Team",
    description: "Technical guide to building multi-agent systems with OpenClaw. Agent orchestration, communication, and coordination.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-agent-team",
    type: "article",
  },
};

const architecturePatterns = [
  {
    pattern: "Hierarchical Team",
    description: "Supervisor agent coordinates specialized worker agents",
    useCase: "Complex workflows requiring central coordination",
    structure: {
      supervisor: "Main coordinator agent",
      workers: ["Data agent", "Analysis agent", "Report agent"],
      communication: "Top-down task delegation"
    },
    pros: ["Clear hierarchy", "Centralized control", "Easy monitoring"],
    cons: ["Single point of failure", "Bottleneck potential"]
  },
  {
    pattern: "Peer-to-Peer Network",
    description: "Agents communicate directly without central coordinator",
    useCase: "Collaborative tasks requiring agent autonomy",
    structure: {
      agents: ["Agent A", "Agent B", "Agent C"],
      communication: "Direct peer communication",
      coordination: "Consensus-based decisions"
    },
    pros: ["No bottlenecks", "Fault tolerant", "Autonomous operation"],
    cons: ["Complex coordination", "Potential conflicts"]
  },
  {
    pattern: "Pipeline Chain",
    description: "Sequential processing through specialized agents",
    useCase: "Data processing workflows with clear stages",
    structure: {
      stages: ["Input agent", "Processing agent", "Output agent"],
      communication: "Sequential handoffs",
      coordination: "Event-driven progression"
    },
    pros: ["Clear data flow", "Specialized processing", "Easy scaling"],
    cons: ["Sequential bottlenecks", "Limited parallelism"]
  },
  {
    pattern: "Hub and Spoke",
    description: "Central hub agent routes tasks to specialized agents",
    useCase: "Service-oriented architectures with task routing",
    structure: {
      hub: "Central router agent",
      spokes: ["Service agent 1", "Service agent 2", "Service agent N"],
      communication: "Hub-mediated routing"
    },
    pros: ["Service isolation", "Dynamic routing", "Easy scaling"],
    cons: ["Hub complexity", "Routing overhead"]
  }
];

const setupSteps = [
  {
    step: 1,
    title: "Plan Agent Team Architecture",
    duration: "30 minutes",
    description: "Design the structure and responsibilities of your agent team",
    tasks: [
      {
        task: "Define team objectives",
        details: "Identify what your agent team needs to accomplish",
        example: "Customer support: handle inquiries, escalate issues, generate reports"
      },
      {
        task: "Map workflow processes",
        details: "Break down the workflow into discrete steps",
        example: "1. Receive inquiry → 2. Classify type → 3. Generate response → 4. Update records"
      },
      {
        task: "Identify agent specializations",
        details: "Determine what specialized agents are needed",
        example: "Router agent, Support agent, Escalation agent, Analytics agent"
      },
      {
        task: "Design communication patterns",
        details: "Plan how agents will communicate and coordinate",
        example: "Message queue for async tasks, direct calls for real-time needs"
      }
    ]
  },
  {
    step: 2,
    title: "Create Individual Agent Configurations",
    duration: "45 minutes",
    description: "Set up each specialized agent with appropriate skills and settings",
    code: {
      routerAgent: `{
  "name": "router-agent",
  "role": "coordinator",
  "description": "Routes incoming requests to appropriate specialist agents",
  "skills": ["classification", "routing", "queue-management"],
  "personality": "Efficient, decisive coordinator",
  "capabilities": ["request-classification", "agent-coordination"],
  "maxConcurrentTasks": 10,
  "priority": "high"
}`,
      supportAgent: `{
  "name": "support-agent", 
  "role": "specialist",
  "description": "Handles customer support inquiries",
  "skills": ["customer-service", "knowledge-base", "response-generation"],
  "personality": "Helpful, empathetic support specialist",
  "capabilities": ["inquiry-handling", "solution-generation"],
  "maxConcurrentTasks": 5,
  "escalationThreshold": 3
}`,
      analyticsAgent: `{
  "name": "analytics-agent",
  "role": "background",
  "description": "Processes data and generates insights",
  "skills": ["data-analysis", "reporting", "visualization"],
  "personality": "Analytical, detail-oriented researcher", 
  "capabilities": ["data-processing", "report-generation"],
  "schedule": "0 */6 * * *",
  "batchSize": 100
}`
    }
  },
  {
    step: 3,
    title: "Implement Inter-Agent Communication",
    duration: "60 minutes",
    description: "Set up message passing and coordination between agents",
    communicationMethods: [
      {
        method: "Message Queue",
        description: "Async communication for task distribution",
        code: `# Configure message queue
openclaw queue create team-tasks
openclaw agent config router-agent --queue team-tasks

# Agent sends message
openclaw agent send router-agent support-agent "customer-inquiry" payload.json

# Agent subscribes to messages  
openclaw agent subscribe support-agent team-tasks --filter "customer-inquiry"`
      },
      {
        method: "Direct Agent Calls",
        description: "Synchronous communication for immediate responses",
        code: `# Direct agent-to-agent call
openclaw agent call router-agent support-agent "classify_inquiry" --data inquiry.json

# Response handling in agent code
async function handleClassification(data) {
  const result = await this.callAgent('support-agent', 'classify_inquiry', data);
  return result;
}`
      },
      {
        method: "Shared Data Store",
        description: "Common data access for coordinated work",
        code: `# Configure shared storage
openclaw storage create team-data --type redis

# Agents access shared data
openclaw agent config router-agent --storage team-data
openclaw agent config support-agent --storage team-data

# Access from agent code
const sharedData = await this.storage.get('current-workload');
await this.storage.set('task-status', 'completed');`
      }
    ]
  },
  {
    step: 4,
    title: "Configure Team Coordination",
    duration: "45 minutes", 
    description: "Set up coordination rules and conflict resolution",
    coordinationFeatures: [
      {
        feature: "Load Balancing",
        description: "Distribute work evenly across agents",
        config: `{
  "loadBalancer": {
    "strategy": "round-robin",
    "healthChecks": true,
    "maxQueueSize": 50,
    "agents": ["support-agent-1", "support-agent-2", "support-agent-3"]
  }
}`
      },
      {
        feature: "Priority Management", 
        description: "Handle urgent tasks first",
        config: `{
  "priorityQueue": {
    "levels": ["urgent", "high", "normal", "low"],
    "escalationRules": {
      "urgent": "immediate",
      "high": "within-15min", 
      "normal": "within-1hour"
    }
  }
}`
      },
      {
        feature: "Conflict Resolution",
        description: "Handle competing agent decisions",
        config: `{
  "conflictResolution": {
    "strategy": "supervisor-override",
    "supervisor": "router-agent",
    "votingThreshold": 0.7,
    "timeoutAction": "escalate"
  }
}`
      }
    ]
  },
  {
    step: 5,
    title: "Deploy and Monitor Team",
    duration: "30 minutes",
    description: "Launch the agent team and set up monitoring",
    deploymentSteps: [
      {
        action: "Start all agents",
        command: "openclaw team start customer-support-team",
        verification: "All agents show 'running' status"
      },
      {
        action: "Configure monitoring",
        command: "openclaw monitor setup --team customer-support-team",
        verification: "Monitoring dashboard accessible"
      },
      {
        action: "Test team workflow",
        command: "openclaw team test customer-support-team --scenario basic-inquiry",
        verification: "End-to-end workflow completes successfully"
      },
      {
        action: "Set up alerting",
        command: "openclaw alerts create --team customer-support-team --conditions failure,overload",
        verification: "Alert rules configured and active"
      }
    ]
  }
];

const teamTemplates = [
  {
    name: "Customer Support Team",
    description: "Multi-agent customer service automation",
    agents: [
      {
        name: "Intake Agent",
        role: "Receives and categorizes incoming requests",
        skills: ["classification", "routing", "triage"]
      },
      {
        name: "Support Agent", 
        role: "Handles routine support inquiries",
        skills: ["knowledge-base", "response-generation", "customer-service"]
      },
      {
        name: "Escalation Agent",
        role: "Manages complex issues requiring human intervention",
        skills: ["human-handoff", "case-management", "priority-handling"]
      },
      {
        name: "Analytics Agent",
        role: "Tracks metrics and generates insights",
        skills: ["reporting", "analytics", "performance-monitoring"]
      }
    ],
    workflow: [
      "Intake Agent receives customer inquiry",
      "Classifies inquiry type and urgency",
      "Routes to Support Agent or Escalation Agent",
      "Agent processes and responds to customer",
      "Analytics Agent logs interaction for reporting"
    ]
  },
  {
    name: "Content Production Team",
    description: "Automated content creation and publishing",
    agents: [
      {
        name: "Research Agent",
        role: "Gathers information and insights for content",
        skills: ["web-research", "data-gathering", "trend-analysis"]
      },
      {
        name: "Writing Agent",
        role: "Creates written content based on research", 
        skills: ["content-generation", "writing-styles", "SEO-optimization"]
      },
      {
        name: "Editor Agent",
        role: "Reviews and refines content quality",
        skills: ["proofreading", "style-checking", "fact-verification"]
      },
      {
        name: "Publisher Agent",
        role: "Distributes content across platforms",
        skills: ["social-media", "cms-integration", "scheduling"]
      }
    ],
    workflow: [
      "Research Agent gathers topic information",
      "Writing Agent creates initial content draft",
      "Editor Agent reviews and improves content",
      "Publisher Agent distributes to target platforms"
    ]
  },
  {
    name: "Data Processing Team",
    description: "Large-scale data analysis and reporting",
    agents: [
      {
        name: "Collector Agent",
        role: "Gathers data from multiple sources",
        skills: ["data-extraction", "api-integration", "web-scraping"]
      },
      {
        name: "Processor Agent",
        role: "Cleans and transforms raw data",
        skills: ["data-cleaning", "transformation", "validation"]
      },
      {
        name: "Analyzer Agent", 
        role: "Performs statistical analysis and modeling",
        skills: ["statistics", "machine-learning", "pattern-recognition"]
      },
      {
        name: "Reporter Agent",
        role: "Creates reports and visualizations",
        skills: ["report-generation", "visualization", "dashboard-creation"]
      }
    ],
    workflow: [
      "Collector Agent extracts data from sources",
      "Processor Agent cleans and validates data",
      "Analyzer Agent performs statistical analysis",
      "Reporter Agent generates final reports"
    ]
  }
];

const managementCommands = [
  {
    category: "Team Lifecycle",
    commands: [
      {
        command: "openclaw team create [name]",
        description: "Create new agent team configuration"
      },
      {
        command: "openclaw team start [name]", 
        description: "Start all agents in the team"
      },
      {
        command: "openclaw team stop [name]",
        description: "Stop all agents in the team"
      },
      {
        command: "openclaw team restart [name]",
        description: "Restart entire agent team"
      }
    ]
  },
  {
    category: "Monitoring & Status",
    commands: [
      {
        command: "openclaw team status [name]",
        description: "Show status of all team agents"
      },
      {
        command: "openclaw team metrics [name]",
        description: "Display team performance metrics"
      },
      {
        command: "openclaw team logs [name]",
        description: "View aggregated team logs"
      },
      {
        command: "openclaw team health [name]",
        description: "Check overall team health"
      }
    ]
  },
  {
    category: "Configuration & Management",
    commands: [
      {
        command: "openclaw team add-agent [team] [agent]",
        description: "Add agent to existing team"
      },
      {
        command: "openclaw team remove-agent [team] [agent]",
        description: "Remove agent from team"
      },
      {
        command: "openclaw team scale [team] --agents [count]",
        description: "Scale team size up or down"
      },
      {
        command: "openclaw team config [team] --file config.json",
        description: "Update team configuration"
      }
    ]
  }
];

const bestPractices = [
  {
    practice: "Agent Specialization",
    description: "Design agents with clear, focused responsibilities",
    guidelines: [
      "Single responsibility principle - one primary function per agent",
      "Clear skill boundaries - avoid overlapping capabilities",
      "Appropriate sizing - not too broad or too narrow",
      "Reusable components - design for team flexibility"
    ],
    example: "Instead of one 'customer service agent', create 'intake agent', 'support agent', and 'escalation agent'"
  },
  {
    practice: "Communication Design",
    description: "Plan efficient inter-agent communication patterns",
    guidelines: [
      "Minimize communication overhead - avoid chatty protocols",
      "Use appropriate patterns - async for background tasks, sync for real-time",
      "Handle failures gracefully - timeout and retry logic",
      "Message versioning - plan for protocol evolution"
    ],
    example: "Use message queues for task distribution, direct calls for status checks"
  },
  {
    practice: "Error Handling & Recovery",
    description: "Build resilience into team operations",
    guidelines: [
      "Circuit breakers - prevent cascade failures",
      "Graceful degradation - maintain partial functionality",
      "Dead letter queues - handle failed messages",
      "Health checks - monitor agent availability"
    ],
    example: "If support agent fails, route urgent requests to escalation agent"
  },
  {
    practice: "Scaling & Performance",
    description: "Design for growth and efficiency",
    guidelines: [
      "Horizontal scaling - add more agents vs. bigger agents",
      "Load balancing - distribute work evenly", 
      "Resource monitoring - track CPU, memory, and task queues",
      "Performance profiling - identify and optimize bottlenecks"
    ],
    example: "Deploy multiple support agents behind a load balancer for high volume"
  }
];

const troubleshooting = [
  {
    issue: "Agent Communication Failures",
    symptoms: [
      "Messages not being delivered",
      "Agents timing out on calls",
      "Queue backlog building up"
    ],
    solutions: [
      "Check network connectivity between agents",
      "Verify message queue health and capacity",
      "Review timeout settings and retry logic",
      "Monitor agent resource usage for bottlenecks"
    ]
  },
  {
    issue: "Team Coordination Conflicts",
    symptoms: [
      "Duplicate task processing",
      "Conflicting agent decisions",
      "Deadlock situations"
    ],
    solutions: [
      "Review task distribution logic",
      "Implement proper locking mechanisms",
      "Add conflict resolution protocols",
      "Increase coordination timeout values"
    ]
  },
  {
    issue: "Performance Degradation",
    symptoms: [
      "Slow team response times",
      "High resource usage",
      "Queue backlog growth"
    ],
    solutions: [
      "Profile individual agent performance",
      "Scale up bottleneck agents",
      "Optimize communication patterns",
      "Review and tune team configuration"
    ]
  },
  {
    issue: "Team Scalability Issues",
    symptoms: [
      "Cannot handle increased load",
      "Resource exhaustion",
      "Management overhead"
    ],
    solutions: [
      "Implement horizontal scaling patterns",
      "Review agent resource requirements",
      "Optimize coordination overhead",
      "Consider team architecture redesign"
    ]
  }
];

export default function OpenClawAgentTeamPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              How to Build an OpenClaw
              <br />
              <span className="text-orange">Agent Team</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Technical guide to multi-agent setup with OpenClaw. Learn agent orchestration, communication patterns, and team coordination for scalable AI systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#architecture" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Learn Architecture
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Agent Team Architecture Patterns
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Choose the right architecture pattern for your multi-agent system
            </p>
          </div>

          <div className="space-y-8">
            {architecturePatterns.map((pattern, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{pattern.pattern}</h3>
                <p className="text-muted mb-4">{pattern.description}</p>
                <p className="text-sm text-orange mb-6"><strong>Best for:</strong> {pattern.useCase}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Structure:</h4>
                    <div className="space-y-1">
                      {Object.entries(pattern.structure).map(([key, value]) => (
                        <p key={key} className="text-muted text-sm">
                          <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</strong> {Array.isArray(value) ? value.join(', ') : value}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Advantages:</h4>
                    <ul className="space-y-1">
                      {pattern.pros.map((pro, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-green-500">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Disadvantages:</h4>
                    <ul className="space-y-1">
                      {pattern.cons.map((con, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-red-500">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Step-by-Step Team Setup
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Build your multi-agent system with this comprehensive setup guide
            </p>
          </div>

          <div className="space-y-12">
            {setupSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="flex items-start gap-6">
                  <div className="bg-orange text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <h3 className="font-heading font-bold text-xl text-dark">{step.title}</h3>
                      <span className="text-orange text-sm font-medium">{step.duration}</span>
                    </div>
                    <p className="text-muted mb-6">{step.description}</p>
                    
                    {step.tasks && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-dark mb-3">Tasks:</h4>
                        <div className="space-y-4">
                          {step.tasks.map((task, idx) => (
                            <div key={idx} className="bg-surface rounded-lg p-4">
                              <h5 className="font-medium text-dark mb-2">{task.task}</h5>
                              <p className="text-muted text-sm mb-2">{task.details}</p>
                              <p className="text-orange text-sm"><strong>Example:</strong> {task.example}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {step.code && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-dark mb-3">Configuration Examples:</h4>
                        <div className="space-y-4">
                          {Object.entries(step.code).map(([key, value]) => (
                            <div key={key}>
                              <h5 className="text-sm font-medium text-dark mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</h5>
                              <div className="bg-slate-900 text-green-400 p-3 rounded-md font-mono text-xs overflow-x-auto">
                                <pre className="whitespace-pre-wrap">{value}</pre>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {step.communicationMethods && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-dark mb-3">Communication Methods:</h4>
                        <div className="space-y-4">
                          {step.communicationMethods.map((method, idx) => (
                            <div key={idx} className="bg-surface rounded-lg p-4">
                              <h5 className="font-medium text-dark mb-2">{method.method}</h5>
                              <p className="text-muted text-sm mb-3">{method.description}</p>
                              <div className="bg-slate-900 text-green-400 p-3 rounded-md font-mono text-xs overflow-x-auto">
                                <pre className="whitespace-pre-wrap">{method.code}</pre>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {step.coordinationFeatures && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-dark mb-3">Coordination Features:</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
                          {step.coordinationFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-surface rounded-lg p-4">
                              <h5 className="font-medium text-dark mb-2">{feature.feature}</h5>
                              <p className="text-muted text-sm mb-3">{feature.description}</p>
                              <div className="bg-slate-900 text-green-400 p-3 rounded-md font-mono text-xs overflow-x-auto">
                                <pre className="whitespace-pre-wrap">{feature.config}</pre>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {step.deploymentSteps && (
                      <div>
                        <h4 className="font-semibold text-dark mb-3">Deployment Steps:</h4>
                        <div className="space-y-3">
                          {step.deploymentSteps.map((deploy, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-3 bg-surface rounded-lg">
                              <div className="flex-1">
                                <h5 className="font-medium text-dark text-sm">{deploy.action}</h5>
                                <code className="text-xs text-orange">{deploy.command}</code>
                              </div>
                              <div className="text-green-600 text-sm">✓ {deploy.verification}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Ready-to-Use Team Templates
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Start with these proven multi-agent configurations
            </p>
          </div>

          <div className="space-y-8">
            {teamTemplates.map((template, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{template.name}</h3>
                <p className="text-muted mb-6">{template.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-dark mb-4">Team Agents:</h4>
                    <div className="space-y-3">
                      {template.agents.map((agent, idx) => (
                        <div key={idx} className="bg-surface rounded-lg p-4">
                          <h5 className="font-medium text-dark mb-1">{agent.name}</h5>
                          <p className="text-muted text-sm mb-2">{agent.role}</p>
                          <div className="flex flex-wrap gap-1">
                            {agent.skills.map((skill, skillIdx) => (
                              <span key={skillIdx} className="px-2 py-1 bg-orange/10 text-orange text-xs rounded">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-dark mb-4">Workflow Process:</h4>
                    <div className="space-y-2">
                      {template.workflow.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="bg-orange text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-muted text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Team Management Commands
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {managementCommands.map((category, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-4">{category.category}</h3>
                
                <div className="space-y-3">
                  {category.commands.map((cmd, idx) => (
                    <div key={idx} className="flex flex-col lg:flex-row lg:items-center gap-4 border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                      <code className="bg-slate-900 text-green-400 px-3 py-2 rounded font-mono text-sm lg:w-2/5 flex-shrink-0">
                        {cmd.command}
                      </code>
                      <span className="text-muted text-sm lg:w-3/5">{cmd.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Best Practices & Guidelines
            </h2>
          </div>

          <div className="space-y-8">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{practice.practice}</h3>
                <p className="text-muted mb-4">{practice.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Guidelines:</h4>
                    <ul className="space-y-2">
                      {practice.guidelines.map((guideline, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-3">
                          <span className="text-orange mt-0.5">▸</span>
                          {guideline}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Example:</h4>
                    <p className="text-muted text-sm bg-blue-50 p-3 rounded-lg">{practice.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Troubleshooting Common Issues
            </h2>
          </div>

          <div className="space-y-6">
            {troubleshooting.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{item.issue}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Symptoms:</h4>
                    <ul className="space-y-1">
                      {item.symptoms.map((symptom, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-red-500">•</span>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Solutions:</h4>
                    <ul className="space-y-1">
                      {item.solutions.map((solution, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-green-500">✓</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-agent-team-setup" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Agent Team Setup Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-for-teams" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw for Teams: Multi-Agent Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Need Help Building Your
                <br />
                <span className="text-orange">Agent Team?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Get expert assistance designing and implementing multi-agent systems. From architecture planning to deployment and optimization.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Multi-agent architecture design
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Team coordination and communication setup
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Performance optimization and scaling
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Multi-Agent Development</h3>
              <p className="text-white/40 text-sm mb-6">Build sophisticated agent teams with expert guidance</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}