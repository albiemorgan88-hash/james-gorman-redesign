import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Memory Management Guide",
  description: "Complete guide to OpenClaw memory management. Learn MEMORY.md, daily logs, context retention, and advanced memory techniques for AI agents.",
  keywords: [
    "openclaw memory management",
    "openclaw MEMORY.md",
    "openclaw daily logs",
    "openclaw context retention",
    "openclaw long term memory",
    "openclaw memory configuration",
    "ai agent memory",
    "openclaw persistent memory"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-memory-management" },
  openGraph: {
    title: "OpenClaw Memory Management Guide",
    description: "Master OpenClaw memory management with MEMORY.md files, daily logs, and context retention strategies.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-memory-management",
    type: "article",
  },
};

const memoryTypes = [
  {
    type: "Working Memory",
    description: "Temporary context during conversations",
    duration: "Session-based",
    capacity: "~8,000 tokens",
    features: [
      "Current conversation context",
      "Recent tool outputs",
      "Active task information",
      "Immediate user preferences"
    ],
    management: [
      "Automatically managed by OpenClaw",
      "Cleared when session ends",
      "Limited by token window",
      "Focus on current interaction"
    ]
  },
  {
    type: "Daily Memory",
    description: "Daily activity logs and summaries",
    duration: "24 hours",
    capacity: "Unlimited file size",
    features: [
      "Raw interaction logs",
      "Task completion records", 
      "Error logs and debugging info",
      "Performance metrics"
    ],
    management: [
      "Stored in memory/YYYY-MM-DD.md",
      "Automatically created daily",
      "Includes timestamps",
      "Searchable content"
    ]
  },
  {
    type: "Long-term Memory",
    description: "Curated knowledge and experiences",
    duration: "Persistent",
    capacity: "Unlimited",
    features: [
      "Important facts and preferences",
      "Learned behaviors and patterns",
      "Project context and history",
      "Key relationships and contacts"
    ],
    management: [
      "Stored in MEMORY.md",
      "Manually curated",
      "Structured content",
      "Cross-referenced"
    ]
  },
  {
    type: "Skill Memory",
    description: "Skill-specific knowledge and context",
    duration: "Persistent per skill",
    capacity: "Varies by skill",
    features: [
      "Skill configuration",
      "Learning history",
      "Custom parameters",
      "Performance data"
    ],
    management: [
      "Stored in skill directories",
      "Managed by skill framework",
      "Version controlled",
      "Exportable/importable"
    ]
  }
];

const memoryStructure = {
  "MEMORY.md": {
    purpose: "Central long-term memory repository",
    structure: `# MEMORY.md

## Core Facts
- User: Phil Patterson, Blue Canvas AI consultancy
- Location: Derry, Northern Ireland
- Timezone: GMT/BST
- Primary goals: Business growth, automation

## Projects
### Active Projects
- Blue Canvas website optimization
- UK Trade Jobs expansion
- SEO automation workflows

### Completed Projects
- OpenClaw Consultant launch
- ClawRoster development
- Client showcase system

## Preferences & Patterns
- Communication style: Direct, informal
- Work hours: 9am-6pm GMT
- Preferred tools: OpenClaw, Vercel, Ahrefs
- Automation focus: SEO, content, lead generation

## Key Relationships
- Stacey (partner)
- Regular clients and contacts

## Learning & Insights
- What works: Practical, actionable advice
- What doesn't: Generic recommendations
- Important lessons learned`,
    maintenance: [
      "Update weekly with key insights",
      "Remove outdated information",
      "Reorganize sections as needed",
      "Cross-reference with daily logs"
    ]
  },
  "memory/": {
    purpose: "Daily activity logs directory",
    structure: `memory/
├── 2026-03-26.md    # Today's logs
├── 2026-03-25.md    # Yesterday's logs
├── 2026-03-24.md    # Previous day
└── archives/        # Older logs (optional)`,
    content: `# 2026-03-26

## Tasks Completed
- [09:15] Updated Blue Canvas SEO metadata
- [10:30] Generated client showcase for local business
- [14:00] Deployed UK Trade Jobs updates
- [15:45] Reviewed analytics reports

## Key Interactions
- User requested SEO audit for new client
- Helped troubleshoot Webflow integration
- Provided content strategy recommendations

## Insights & Learning
- Client preferred visual reports over text
- Automated workflows saved 2 hours today
- Need to improve error handling in skill X

## Issues & Resolutions
- Problem: Vercel deployment failed
- Solution: Updated environment variables
- Status: Resolved

## Tomorrow's Priorities
- Complete pending client onboarding
- Update skill documentation
- Review memory organization`,
    automation: [
      "Auto-generated from agent activities",
      "Timestamped entries",
      "Categorized by type",
      "Searchable format"
    ]
  }
};

const memoryCommands = [
  {
    category: "Memory Reading",
    commands: [
      {
        command: "openclaw memory search \"keyword\"",
        description: "Search all memory files for specific content",
        example: "openclaw memory search \"client onboarding\"",
        output: "Returns matching entries with file locations"
      },
      {
        command: "openclaw memory get YYYY-MM-DD",
        description: "Retrieve specific daily memory file",
        example: "openclaw memory get 2026-03-26",
        output: "Contents of the specified daily log"
      },
      {
        command: "openclaw memory recent --days 7",
        description: "Get recent memory entries",
        example: "openclaw memory recent --days 3",
        output: "Last 3 days of memory entries"
      },
      {
        command: "openclaw memory summary",
        description: "Get overview of memory usage and stats",
        example: "openclaw memory summary",
        output: "Memory size, file count, recent activity"
      }
    ]
  },
  {
    category: "Memory Writing",
    commands: [
      {
        command: "openclaw memory log \"entry\"",
        description: "Add entry to today's memory log",
        example: "openclaw memory log \"Completed client project X\"",
        output: "Entry added with timestamp"
      },
      {
        command: "openclaw memory note --long-term \"fact\"",
        description: "Add important fact to MEMORY.md",
        example: "openclaw memory note --long-term \"User prefers morning meetings\"",
        output: "Fact added to appropriate section"
      },
      {
        command: "openclaw memory update-context",
        description: "Update memory context from recent activities",
        example: "openclaw memory update-context",
        output: "Memory files updated with recent context"
      }
    ]
  },
  {
    category: "Memory Management",
    commands: [
      {
        command: "openclaw memory clean --days 30",
        description: "Archive old memory files",
        example: "openclaw memory clean --days 30",
        output: "Files older than 30 days archived"
      },
      {
        command: "openclaw memory distill",
        description: "Extract key insights from daily logs to MEMORY.md",
        example: "openclaw memory distill --week",
        output: "Weekly insights added to long-term memory"
      },
      {
        command: "openclaw memory export",
        description: "Export memory for backup or analysis",
        example: "openclaw memory export --format json",
        output: "Memory data exported to specified format"
      }
    ]
  }
];

const memoryStrategies = [
  {
    strategy: "Hierarchical Memory",
    description: "Organize memory by importance and frequency",
    implementation: [
      "Store frequently accessed info in MEMORY.md",
      "Keep detailed logs in daily files",
      "Archive old information periodically",
      "Cross-reference between layers"
    ],
    benefits: [
      "Faster information retrieval",
      "Better context preservation",
      "Reduced memory overhead",
      "Improved agent performance"
    ]
  },
  {
    strategy: "Contextual Tagging",
    description: "Tag memory entries with relevant context",
    implementation: [
      "Use consistent hashtags (#project, #client)",
      "Add category markers ([TASK], [INSIGHT])",
      "Include relationship indicators (@person)",
      "Apply priority levels (HIGH, MEDIUM, LOW)"
    ],
    benefits: [
      "Enhanced searchability",
      "Better organization",
      "Improved recall accuracy",
      "Context-aware responses"
    ]
  },
  {
    strategy: "Memory Consolidation",
    description: "Regularly merge and refine memory content",
    implementation: [
      "Weekly review of daily logs",
      "Extract key patterns and insights",
      "Update MEMORY.md with important facts",
      "Remove outdated information"
    ],
    benefits: [
      "Reduced information overload",
      "Improved memory quality",
      "Better long-term retention",
      "More relevant context"
    ]
  },
  {
    strategy: "Associative Memory",
    description: "Link related memories for better recall",
    implementation: [
      "Create cross-references between entries",
      "Link related projects and tasks",
      "Connect people with their preferences",
      "Associate outcomes with methods"
    ],
    benefits: [
      "Enhanced understanding",
      "Better pattern recognition",
      "Improved decision making",
      "Contextual awareness"
    ]
  }
];

const memoryWorkflows = [
  {
    name: "Daily Memory Processing",
    description: "Automated daily memory management",
    schedule: "0 23 * * *",
    workflow: {
      actions: [
        "Extract key events from today's activities",
        "Categorize and tag important entries",
        "Update relevant sections in MEMORY.md",
        "Clean up and organize daily log",
        "Prepare summary for tomorrow's context"
      ]
    },
    code: `{
  "name": "daily-memory-process",
  "schedule": "0 23 * * *",
  "actions": [
    {
      "type": "memory-extract",
      "source": "today-logs",
      "categories": ["tasks", "insights", "issues"]
    },
    {
      "type": "memory-update",
      "target": "MEMORY.md",
      "sections": ["recent-activity", "current-projects"]
    },
    {
      "type": "memory-clean",
      "optimize": true
    }
  ]
}`
  },
  {
    name: "Weekly Memory Consolidation", 
    description: "Comprehensive weekly memory review",
    schedule: "0 20 * * 0",
    workflow: {
      actions: [
        "Review all daily logs from the past week",
        "Identify patterns and recurring themes",
        "Update long-term memory with insights",
        "Archive completed projects",
        "Plan next week's priorities"
      ]
    },
    code: `{
  "name": "weekly-memory-review",
  "schedule": "0 20 * * 0",
  "actions": [
    {
      "type": "memory-analyze",
      "timeframe": "7days",
      "extract": ["patterns", "insights", "outcomes"]
    },
    {
      "type": "memory-consolidate",
      "target": "MEMORY.md",
      "update-sections": ["key-insights", "project-status"]
    },
    {
      "type": "memory-archive",
      "criteria": "completed-projects"
    }
  ]
}`
  },
  {
    name: "Context-Aware Responses",
    description: "Use memory for better user interactions",
    trigger: "user-message",
    workflow: {
      actions: [
        "Check recent memory for relevant context",
        "Search long-term memory for user preferences",
        "Apply context to response generation",
        "Log interaction for future reference"
      ]
    },
    code: `{
  "name": "context-response",
  "trigger": "user-message",
  "actions": [
    {
      "type": "memory-search",
      "query": "{{ user_message }}",
      "sources": ["MEMORY.md", "recent-logs"]
    },
    {
      "type": "context-apply",
      "memory": "search-results",
      "response": "enhanced"
    },
    {
      "type": "memory-log",
      "entry": "user-interaction",
      "context": "response-given"
    }
  ]
}`
  }
];

const memoryOptimization = [
  {
    technique: "Memory Compression",
    description: "Reduce memory size while preserving key information",
    methods: [
      "Summarize long entries into key points",
      "Remove redundant information",
      "Use abbreviations for frequent terms",
      "Archive old, rarely-accessed data"
    ]
  },
  {
    technique: "Selective Retention",
    description: "Keep only the most relevant information",
    methods: [
      "Score entries by importance and frequency",
      "Automatically delete low-value entries",
      "Prioritize recent and relevant information",
      "Maintain critical facts regardless of age"
    ]
  },
  {
    technique: "Context Prediction",
    description: "Predict what information will be needed",
    methods: [
      "Analyze usage patterns",
      "Pre-load likely-needed context",
      "Cache frequently accessed information",
      "Optimize memory layout for access patterns"
    ]
  },
  {
    technique: "Memory Indexing",
    description: "Create efficient indexes for fast retrieval",
    methods: [
      "Build keyword indexes",
      "Create category mappings",
      "Maintain relationship graphs",
      "Use timestamp-based indexing"
    ]
  }
];

const troubleshootingMemory = [
  {
    problem: "Memory Files Growing Too Large",
    symptoms: [
      "Slow memory searches",
      "Large file sizes",
      "Performance degradation"
    ],
    solutions: [
      "Implement regular archiving (openclaw memory clean)",
      "Use memory compression techniques", 
      "Split large files by time period",
      "Remove redundant entries regularly"
    ]
  },
  {
    problem: "Context Not Being Retained",
    symptoms: [
      "Agent doesn't remember previous conversations",
      "Repeated questions about same topics",
      "Loss of user preferences"
    ],
    solutions: [
      "Check MEMORY.md is being updated",
      "Verify memory logging is working",
      "Review memory search functionality",
      "Ensure proper context loading"
    ]
  },
  {
    problem: "Memory Search Not Working",
    symptoms: [
      "No results for known information",
      "Slow search responses",
      "Incorrect search results"
    ],
    solutions: [
      "Rebuild search indexes",
      "Check file permissions",
      "Verify search query format",
      "Update search algorithms"
    ]
  }
];

export default function OpenClawMemoryManagementPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw Memory
              <br />
              <span className="text-orange">Management Guide</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Master OpenClaw's memory system: MEMORY.md files, daily logs, context retention, and advanced memory management techniques.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#memory-types" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Learn Memory Types
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="memory-types" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Types of Memory in OpenClaw
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Understanding the different memory layers in your OpenClaw agent
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {memoryTypes.map((memory, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-xl text-dark">{memory.type}</h3>
                  <span className="text-orange text-sm font-medium">{memory.duration}</span>
                </div>
                <p className="text-muted mb-4">{memory.description}</p>
                <div className="text-sm text-dark mb-6">
                  <strong>Capacity:</strong> {memory.capacity}
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {memory.features.map((feature, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-green-500">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Management:</h4>
                    <ul className="space-y-1">
                      {memory.management.map((method, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-orange">▸</span>
                          {method}
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
              Memory File Structure
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              How OpenClaw organizes and stores memory data
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(memoryStructure).map(([key, structure], index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{key}</h3>
                <p className="text-muted mb-6">{structure.purpose}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-3">Structure:</h4>
                  <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
                    <pre className="whitespace-pre-wrap">{structure.structure}</pre>
                  </div>
                </div>

                {'maintenance' in structure && structure.maintenance && (
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Maintenance Tips:</h4>
                    <ul className="space-y-1">
                      {'maintenance' in structure && structure.maintenance.map((tip, idx) => (
                        <li key={idx} className="text-blue-700 text-sm">• {tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {'automation' in structure && structure.automation && (
                  <div className="bg-green-50 border-l-4 border-green-400 p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Automation Features:</h4>
                    <ul className="space-y-1">
                      {'automation' in structure && structure.automation.map((feature, idx) => (
                        <li key={idx} className="text-green-700 text-sm">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Memory Commands
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Essential CLI commands for managing OpenClaw memory
            </p>
          </div>

          <div className="space-y-12">
            {memoryCommands.map((category, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">{category.category}</h3>
                
                <div className="space-y-6">
                  {category.commands.map((cmd, idx) => (
                    <div key={idx} className="border-l-4 border-orange p-4 bg-orange-50">
                      <div className="mb-2">
                        <h4 className="font-mono text-dark font-semibold text-lg">{cmd.command}</h4>
                        <p className="text-muted text-sm mt-1">{cmd.description}</p>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-dark mb-1 text-sm">Example:</h5>
                          <div className="bg-slate-900 text-green-400 p-2 rounded font-mono text-sm">
                            {cmd.example}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-dark mb-1 text-sm">Output:</h5>
                          <p className="text-muted text-sm">{cmd.output}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Memory Strategies
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Advanced techniques for optimizing your agent's memory
            </p>
          </div>

          <div className="space-y-8">
            {memoryStrategies.map((strategy, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{strategy.strategy}</h3>
                <p className="text-muted mb-6">{strategy.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Implementation:</h4>
                    <ul className="space-y-2">
                      {strategy.implementation.map((step, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-orange">•</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {strategy.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-green-500">✓</span>
                          {benefit}
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
              Automated Memory Workflows
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Set up automated memory management workflows
            </p>
          </div>

          <div className="space-y-8">
            {memoryWorkflows.map((workflow, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg text-dark">{workflow.name}</h3>
                  {workflow.schedule && (
                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {workflow.schedule}
                    </span>
                  )}
                </div>
                <p className="text-muted mb-6">{workflow.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-3">Workflow Actions:</h4>
                  <ul className="space-y-2">
                    {workflow.workflow.actions.map((action, idx) => (
                      <li key={idx} className="text-muted text-sm flex gap-2">
                        <span className="text-orange">{idx + 1}.</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-dark mb-2">Configuration:</h4>
                  <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-xs overflow-x-auto">
                    <pre className="whitespace-pre-wrap">{workflow.code}</pre>
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
              Memory Optimization
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {memoryOptimization.map((technique, index) => (
              <div key={index} className="bg-white rounded-box p-6 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{technique.technique}</h3>
                <p className="text-muted mb-4">{technique.description}</p>

                <h4 className="font-semibold text-dark mb-2">Methods:</h4>
                <ul className="space-y-2">
                  {technique.methods.map((method, idx) => (
                    <li key={idx} className="text-muted text-sm flex gap-2">
                      <span className="text-orange">•</span>
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Troubleshooting Memory Issues
            </h2>
          </div>

          <div className="space-y-6">
            {troubleshootingMemory.map((issue, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{issue.problem}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Symptoms:</h4>
                    <ul className="space-y-1">
                      {issue.symptoms.map((symptom, idx) => (
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
                      {issue.solutions.map((solution, idx) => (
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
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-skills-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Skills: Complete Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-cron-jobs" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Cron Jobs: Automation Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
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
                Need Help with
                <br />
                <span className="text-orange">Memory Management?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Get expert guidance on setting up efficient memory systems for your OpenClaw agents.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Memory architecture design
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Optimization strategies
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Performance troubleshooting
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Memory Management Support</h3>
              <p className="text-white/40 text-sm mb-6">Optimize your agent's memory systems</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}