import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Tutorial for Beginners",
  description: "Complete hands-on tutorial for OpenClaw beginners. Follow step-by-step exercises to build your first AI agent from scratch with practical examples.",
  keywords: [
    "openclaw tutorial beginners",
    "openclaw tutorial step by step",
    "learn openclaw from scratch",
    "openclaw beginner tutorial",
    "openclaw hands on tutorial",
    "openclaw practical guide",
    "openclaw first agent tutorial",
    "openclaw learning path"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-tutorial-beginners" },
  openGraph: {
    title: "OpenClaw Tutorial for Beginners",
    description: "Hands-on tutorial to build your first OpenClaw AI agent. Complete with exercises and practical examples.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-tutorial-beginners",
    type: "article",
  },
};

const tutorialSteps = [
  {
    step: 1,
    title: "Environment Setup & Installation",
    duration: "15 minutes",
    goal: "Get OpenClaw installed and running on your system",
    exercises: [
      {
        task: "Install OpenClaw",
        commands: [
          "npm install -g openclaw",
          "openclaw --version"
        ],
        expected: "OpenClaw version number displays"
      },
      {
        task: "Initialize workspace",
        commands: [
          "mkdir openclaw-tutorial",
          "cd openclaw-tutorial",
          "openclaw init"
        ],
        expected: "Workspace initialized with config files"
      }
    ],
    checkpoints: [
      "OpenClaw CLI responds to commands",
      "Workspace directory created",
      "Config file exists"
    ]
  },
  {
    step: 2,
    title: "Start Gateway & Basic Configuration",
    duration: "10 minutes", 
    goal: "Launch OpenClaw gateway and verify it's working",
    exercises: [
      {
        task: "Start the gateway",
        commands: [
          "openclaw gateway start",
          "openclaw gateway status"
        ],
        expected: "Gateway running on localhost:3000"
      },
      {
        task: "Test gateway connection",
        commands: [
          "curl http://localhost:3000/health",
          "openclaw gateway logs --tail 5"
        ],
        expected: "Health check returns OK status"
      }
    ],
    checkpoints: [
      "Gateway process running",
      "Port 3000 accessible", 
      "No error messages in logs"
    ],
    troubleshooting: [
      "Port 3000 in use? Try: openclaw gateway start --port 3001",
      "Permission errors? Run as administrator/sudo",
      "Firewall blocking? Check firewall settings"
    ]
  },
  {
    step: 3,
    title: "Create Your First Agent",
    duration: "20 minutes",
    goal: "Build a simple AI agent that can respond to basic queries",
    exercises: [
      {
        task: "Create agent configuration",
        commands: [
          "openclaw agent create --name hello-agent",
          "openclaw agent list"
        ],
        expected: "hello-agent appears in agent list"
      },
      {
        task: "Test agent interaction",
        commands: [
          "openclaw agent chat hello-agent \"Hello, what's your name?\"",
          "openclaw agent chat hello-agent \"What can you help me with?\""
        ],
        expected: "Agent responds with helpful messages"
      }
    ],
    checkpoints: [
      "Agent created successfully",
      "Agent responds to chat messages",
      "Responses are coherent and helpful"
    ],
    agentConfig: {
      filename: "agents/hello-agent.json",
      content: `{
  "name": "hello-agent",
  "description": "A friendly AI assistant for beginners",
  "personality": "Helpful, patient, and encouraging",
  "capabilities": ["conversation", "general-assistance"],
  "skills": [],
  "model": "claude-3-haiku",
  "maxTokens": 500
}`
    }
  },
  {
    step: 4,
    title: "Add Skills to Your Agent",
    duration: "25 minutes",
    goal: "Enhance agent capabilities with pre-built skills",
    exercises: [
      {
        task: "Browse available skills",
        commands: [
          "openclaw skills browse",
          "openclaw skills search weather"
        ],
        expected: "List of available skills displays"
      },
      {
        task: "Install weather skill",
        commands: [
          "openclaw skills install weather-basic",
          "openclaw skills list"
        ],
        expected: "weather-basic skill installed"
      },
      {
        task: "Configure agent with weather skill",
        commands: [
          "openclaw agent config hello-agent --add-skill weather-basic",
          "openclaw agent restart hello-agent"
        ],
        expected: "Agent restarted with new skill"
      },
      {
        task: "Test weather functionality",
        commands: [
          "openclaw agent chat hello-agent \"What's the weather like in London?\"",
          "openclaw agent chat hello-agent \"Tell me about the weather in New York\""
        ],
        expected: "Agent provides weather information"
      }
    ],
    checkpoints: [
      "Skills marketplace accessible",
      "Weather skill installed successfully",
      "Agent can provide weather updates",
      "Weather responses include real data"
    ]
  },
  {
    step: 5,
    title: "Build a Custom Automation Workflow",
    duration: "30 minutes",
    goal: "Create an automated task that runs without direct interaction",
    exercises: [
      {
        task: "Create a scheduled task",
        commands: [
          "openclaw workflow create daily-summary",
          "openclaw workflow config daily-summary --schedule \"0 9 * * *\""
        ],
        expected: "Workflow created with daily schedule"
      },
      {
        task: "Define workflow actions",
        workflow: {
          name: "daily-summary",
          trigger: "schedule",
          actions: [
            {
              type: "agent-chat",
              agent: "hello-agent", 
              message: "Create a daily summary report"
            },
            {
              type: "log-output",
              destination: "logs/daily-summary.log"
            }
          ]
        }
      },
      {
        task: "Test workflow manually",
        commands: [
          "openclaw workflow run daily-summary",
          "openclaw workflow status daily-summary"
        ],
        expected: "Workflow executes and completes"
      }
    ],
    checkpoints: [
      "Workflow created and configured",
      "Manual execution works",
      "Output logged correctly",
      "Schedule configured properly"
    ]
  },
  {
    step: 6,
    title: "Monitor and Debug Your Setup",
    duration: "15 minutes",
    goal: "Learn monitoring tools and troubleshooting basics",
    exercises: [
      {
        task: "Check system status",
        commands: [
          "openclaw status",
          "openclaw agents status",
          "openclaw gateway metrics"
        ],
        expected: "All systems showing healthy status"
      },
      {
        task: "Review logs and activity",
        commands: [
          "openclaw logs agent hello-agent --tail 10",
          "openclaw logs gateway --tail 5",
          "openclaw activity recent"
        ],
        expected: "Recent activity and logs displayed"
      },
      {
        task: "Performance monitoring",
        commands: [
          "openclaw metrics summary",
          "openclaw resources usage"
        ],
        expected: "Resource usage and performance metrics"
      }
    ],
    checkpoints: [
      "All components showing healthy",
      "Logs accessible and informative",
      "Performance metrics available",
      "No critical errors present"
    ]
  }
];

const practicalExercises = [
  {
    project: "Personal Assistant Bot",
    difficulty: "Beginner",
    timeEstimate: "45 minutes",
    description: "Build an AI assistant that helps with daily tasks",
    features: [
      "Answers questions about time/date",
      "Provides weather updates",
      "Sets reminders",
      "Gives motivational quotes"
    ],
    steps: [
      "Create 'personal-assistant' agent",
      "Install time, weather, and quotes skills", 
      "Configure personality to be friendly and helpful",
      "Test various query types",
      "Set up daily motivation workflow"
    ],
    code: {
      agentConfig: `{
  "name": "personal-assistant",
  "personality": "Friendly, helpful personal assistant",
  "skills": ["time-utils", "weather-basic", "quotes", "reminders"],
  "responseStyle": "conversational",
  "capabilities": ["scheduling", "information", "motivation"]
}`,
      testQueries: [
        "What time is it?",
        "How's the weather today?",
        "Give me a motivational quote",
        "Remind me to call mom at 3pm"
      ]
    }
  },
  {
    project: "Content Creator Helper",
    difficulty: "Intermediate", 
    timeEstimate: "60 minutes",
    description: "Agent that helps with content creation and social media",
    features: [
      "Generates blog post ideas",
      "Creates social media posts",
      "Suggests hashtags",
      "Schedules content"
    ],
    steps: [
      "Create 'content-helper' agent",
      "Install writing and social media skills",
      "Configure for creative writing style",
      "Set up content scheduling workflow",
      "Test content generation"
    ],
    code: {
      agentConfig: `{
  "name": "content-helper", 
  "personality": "Creative, inspiring content strategist",
  "skills": ["writing-assistant", "social-media", "hashtag-generator"],
  "responseStyle": "creative",
  "capabilities": ["content-generation", "scheduling", "social-media"]
}`,
      workflow: `{
  "name": "daily-content",
  "schedule": "0 8 * * 1-5",
  "actions": [
    {"type": "generate-content", "topic": "daily-tip"},
    {"type": "post-social", "platforms": ["twitter", "linkedin"]}
  ]
}`
    }
  },
  {
    project: "Business Task Automator",
    difficulty: "Advanced",
    timeEstimate: "90 minutes", 
    description: "Automated business workflow processor",
    features: [
      "Processes incoming emails",
      "Updates spreadsheets",
      "Sends status reports",
      "Manages customer inquiries"
    ],
    steps: [
      "Create 'business-automator' agent",
      "Install email, spreadsheet, and CRM skills",
      "Configure business-focused personality",
      "Set up email processing workflow",
      "Create reporting automation"
    ],
    code: {
      agentConfig: `{
  "name": "business-automator",
  "personality": "Professional, efficient business assistant", 
  "skills": ["email-processor", "spreadsheet-manager", "crm-integration"],
  "responseStyle": "professional",
  "capabilities": ["email-automation", "data-processing", "reporting"]
}`,
      emailWorkflow: `{
  "name": "email-processor",
  "trigger": "email-received",
  "conditions": [{"subject": "contains", "value": "inquiry"}],
  "actions": [
    {"type": "classify-email"},
    {"type": "update-crm"},
    {"type": "send-auto-response"}
  ]
}`
    }
  }
];

const commonChallenges = [
  {
    challenge: "Agent Not Responding",
    symptoms: [
      "No response to chat messages",
      "Agent appears offline",
      "Timeout errors"
    ],
    solutions: [
      "Check gateway is running: openclaw gateway status",
      "Verify agent exists: openclaw agent list",
      "Restart agent: openclaw agent restart [name]",
      "Check API keys are configured correctly"
    ]
  },
  {
    challenge: "Skills Installation Failed",
    symptoms: [
      "Skill download errors",
      "Permission denied messages",
      "Skill not appearing in list"
    ],
    solutions: [
      "Check internet connection",
      "Run with admin privileges if needed",
      "Clear skill cache: openclaw skills cache clear",
      "Try installing from different source"
    ]
  },
  {
    challenge: "Workflow Not Triggering",
    symptoms: [
      "Scheduled workflows not running",
      "Manual triggers not working",
      "No log entries for workflow"
    ],
    solutions: [
      "Verify cron schedule format",
      "Check workflow status: openclaw workflow status [name]",
      "Review workflow logs for errors",
      "Ensure all referenced agents/skills exist"
    ]
  },
  {
    challenge: "Performance Issues",
    symptoms: [
      "Slow agent responses",
      "High CPU/memory usage",
      "Gateway becoming unresponsive"
    ],
    solutions: [
      "Monitor resource usage: openclaw metrics",
      "Reduce concurrent agents if needed",
      "Optimize agent configurations",
      "Consider upgrading system resources"
    ]
  }
];

const nextSteps = [
  {
    area: "Advanced Agent Development",
    description: "Build more sophisticated agents with complex logic",
    topics: [
      "Custom skill development",
      "Multi-agent orchestration",
      "Advanced memory management",
      "Integration with external APIs"
    ],
    resources: [
      "OpenClaw Skills Development Guide",
      "Agent Architecture Patterns",
      "API Integration Tutorials",
      "Community skill examples"
    ]
  },
  {
    area: "Production Deployment",
    description: "Deploy OpenClaw for real-world use",
    topics: [
      "Server hosting and scaling",
      "Security configuration",
      "Backup and recovery",
      "Monitoring and alerting"
    ],
    resources: [
      "Production Deployment Guide", 
      "Security Best Practices",
      "Monitoring Setup Tutorial",
      "Backup Configuration Guide"
    ]
  },
  {
    area: "Business Integration",
    description: "Integrate OpenClaw with business systems",
    topics: [
      "CRM and database integration",
      "Workflow automation",
      "Customer service bots",
      "Reporting and analytics"
    ],
    resources: [
      "Business Integration Examples",
      "CRM Connection Guides",
      "Customer Service Automation",
      "Analytics Dashboard Setup"
    ]
  }
];

export default function OpenClawTutorialBeginnersPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw Tutorial for Beginners
              <br />
              <span className="text-orange">From Zero to Running Agent</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Complete hands-on tutorial to build your first OpenClaw AI agent. Follow step-by-step exercises with practical examples and real code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#tutorial" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Start Tutorial
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="tutorial" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Hands-On Tutorial Steps
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Follow these step-by-step exercises to build your first OpenClaw agent
            </p>
          </div>

          <div className="space-y-12">
            {tutorialSteps.map((step, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <div className="flex items-start gap-6">
                  <div className="bg-orange text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <h3 className="font-heading font-bold text-xl text-dark">{step.title}</h3>
                      <span className="text-orange text-sm font-medium">{step.duration}</span>
                    </div>
                    <p className="text-muted mb-6 font-medium">Goal: {step.goal}</p>
                    
                    {step.exercises && step.exercises.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-dark mb-4">Exercises:</h4>
                        <div className="space-y-4">
                          {step.exercises.map((exercise, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                              <h5 className="font-medium text-dark mb-2">Exercise {idx + 1}: {exercise.task}</h5>
                              <div className="bg-slate-900 text-green-400 p-3 rounded-md font-mono text-sm mb-2 overflow-x-auto">
                                <pre className="whitespace-pre-wrap">{exercise.commands?.join('\n') || ''}</pre>
                              </div>
                              <p className="text-green-600 text-sm">✓ Expected Result: {exercise.expected}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {step.agentConfig && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-dark mb-2">Agent Configuration ({step.agentConfig.filename}):</h4>
                        <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-xs overflow-x-auto">
                          <pre className="whitespace-pre-wrap">{step.agentConfig.content}</pre>
                        </div>
                      </div>
                    )}

                    <div className="mb-4">
                      <h4 className="font-semibold text-dark mb-2">Checkpoints:</h4>
                      <ul className="space-y-1">
                        {step.checkpoints.map((checkpoint, idx) => (
                          <li key={idx} className="text-muted text-sm flex gap-2">
                            <span className="text-green-500">✓</span>
                            {checkpoint}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {step.troubleshooting && (
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <h4 className="font-semibold text-yellow-800 mb-2">Troubleshooting Tips:</h4>
                        <ul className="space-y-1">
                          {step.troubleshooting.map((tip, idx) => (
                            <li key={idx} className="text-yellow-700 text-sm">• {tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
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
              Practical Exercises & Projects
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Build real-world applications with these hands-on projects
            </p>
          </div>

          <div className="space-y-8">
            {practicalExercises.map((project, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg text-dark">{project.project}</h3>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {project.difficulty}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      {project.timeEstimate}
                    </span>
                  </div>
                </div>

                <p className="text-muted mb-4">{project.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-green-500">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Steps:</h4>
                    <ol className="space-y-1">
                      {project.steps.map((step, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-orange font-mono text-xs mt-0.5">{idx + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-dark mb-2">Code Examples:</h4>
                  <div className="space-y-3">
                    {Object.entries(project.code).map(([key, value]) => (
                      <div key={key}>
                        <h5 className="text-sm font-medium text-dark mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</h5>
                        <div className="bg-slate-900 text-green-400 p-3 rounded-md font-mono text-xs overflow-x-auto">
                          <pre className="whitespace-pre-wrap">{Array.isArray(value) ? value.join('\n') : value}</pre>
                        </div>
                      </div>
                    ))}
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
              Common Challenges & Solutions
            </h2>
          </div>

          <div className="space-y-6">
            {commonChallenges.map((item, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{item.challenge}</h3>
                
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

      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Next Steps & Advanced Learning
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Continue your OpenClaw journey with these advanced topics
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {nextSteps.map((step, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{step.area}</h3>
                <p className="text-muted mb-6">{step.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Topics to Explore:</h4>
                    <ul className="space-y-1">
                      {step.topics.map((topic, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-orange">▸</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Learning Resources:</h4>
                    <ul className="space-y-1">
                      {step.resources.map((resource, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-blue-500">📖</span>
                          {resource}
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
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-beginner-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Beginner Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-skills-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Skills: Complete Guide</h3>
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
                <span className="text-orange">Your First OpenClaw Project?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Get personalized guidance through your first OpenClaw implementation. From basic setup to advanced automation workflows.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  One-on-one tutorial sessions
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Custom project development
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Troubleshooting support
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Beginner Support</h3>
              <p className="text-white/40 text-sm mb-6">Get hands-on help with your OpenClaw learning</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}