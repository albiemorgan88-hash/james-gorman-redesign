import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Automate Everything with OpenClaw Cron Jobs — Setup Guide 2026",
  description: "Complete guide to OpenClaw cron jobs and automation. Schedule tasks, create workflows, and automate your AI agents with practical examples.",
  keywords: [
    "openclaw cron jobs",
    "openclaw automation",
    "openclaw scheduling",
    "openclaw task automation",
    "openclaw workflow automation",
    "openclaw timer setup",
    "automated ai agents",
    "openclaw cron examples"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-cron-jobs" },
  openGraph: {
    title: "Automate Everything with OpenClaw Cron Jobs — Setup Guide 2026",
    description: "Master OpenClaw automation with cron jobs, scheduled tasks, and workflow automation. Practical examples included.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-cron-jobs",
    type: "article",
  },
};

const cronBasics = [
  {
    component: "Cron Expression",
    description: "Time-based job scheduler syntax",
    format: "* * * * * (minute hour day month weekday)",
    examples: [
      { expression: "0 9 * * *", meaning: "Every day at 9:00 AM" },
      { expression: "*/15 * * * *", meaning: "Every 15 minutes" },
      { expression: "0 */2 * * *", meaning: "Every 2 hours" },
      { expression: "0 9 * * 1-5", meaning: "9 AM on weekdays" },
      { expression: "0 0 1 * *", meaning: "First day of every month" }
    ]
  },
  {
    component: "Job Types",
    description: "Different types of scheduled tasks",
    types: [
      {
        type: "Agent Tasks",
        description: "Schedule specific agent actions",
        examples: ["Send daily reports", "Process emails", "Update social media"]
      },
      {
        type: "System Maintenance",
        description: "Automated system upkeep",
        examples: ["Clean temp files", "Backup data", "Update dependencies"]
      },
      {
        type: "Data Processing",
        description: "Scheduled data operations",
        examples: ["Import feeds", "Generate analytics", "Sync databases"]
      },
      {
        type: "Notifications",
        description: "Timed alerts and reminders",
        examples: ["Status updates", "Deadline reminders", "Health checks"]
      }
    ]
  },
  {
    component: "Execution Context",
    description: "Where and how cron jobs run",
    contexts: [
      {
        context: "Agent-specific",
        description: "Jobs tied to specific agents",
        scope: "Single agent operations"
      },
      {
        context: "System-wide",
        description: "Global OpenClaw tasks",
        scope: "Cross-agent operations"
      },
      {
        context: "Skill-based",
        description: "Jobs within specific skills",
        scope: "Skill functionality"
      },
      {
        context: "Workspace-level",
        description: "Workspace maintenance tasks",
        scope: "Workspace operations"
      }
    ]
  }
];

const setupSteps = [
  {
    step: 1,
    title: "Enable Cron Service",
    duration: "5 minutes",
    description: "Activate the OpenClaw cron scheduler",
    commands: [
      "openclaw cron status",
      "openclaw cron enable",
      "openclaw cron start"
    ],
    verification: [
      "Service shows as 'running'",
      "No error messages in logs",
      "Cron daemon process active"
    ]
  },
  {
    step: 2,
    title: "Create Your First Cron Job",
    duration: "10 minutes",
    description: "Set up a basic scheduled task",
    examples: [
      {
        name: "Daily Status Report",
        command: "openclaw cron add \"0 9 * * *\" \"status-report\"",
        description: "Generate daily status report at 9 AM"
      },
      {
        name: "Hourly Health Check",
        command: "openclaw cron add \"0 * * * *\" \"health-check\"",
        description: "Check system health every hour"
      }
    ]
  },
  {
    step: 3,
    title: "Configure Job Parameters",
    duration: "15 minutes",
    description: "Set advanced job configuration",
    config: {
      filename: "cron-jobs.json",
      content: `{
  "jobs": [
    {
      "name": "daily-summary",
      "schedule": "0 9 * * *",
      "agent": "main-agent",
      "action": "generate-summary",
      "parameters": {
        "timeframe": "24h",
        "format": "markdown"
      },
      "retry": {
        "attempts": 3,
        "delay": "5m"
      },
      "notifications": {
        "success": true,
        "failure": true
      }
    }
  ]
}`
    }
  }
];

const practicalExamples = [
  {
    category: "Business Automation",
    description: "Automate common business tasks",
    jobs: [
      {
        name: "Daily Sales Report",
        schedule: "0 8 * * 1-5",
        description: "Generate and send daily sales reports to team",
        workflow: [
          "Collect sales data from CRM",
          "Generate report with charts",
          "Send via email to stakeholders",
          "Update dashboard"
        ],
        code: `{
  "name": "daily-sales-report",
  "schedule": "0 8 * * 1-5",
  "actions": [
    {
      "type": "crm-query",
      "timeframe": "yesterday"
    },
    {
      "type": "generate-report", 
      "template": "sales-summary",
      "format": "pdf"
    },
    {
      "type": "email-send",
      "recipients": ["team@company.com"],
      "subject": "Daily Sales Report - {{date}}"
    }
  ]
}`
      },
      {
        name: "Weekly Backup",
        schedule: "0 2 * * 0",
        description: "Create weekly system backups",
        workflow: [
          "Backup database",
          "Archive important files",
          "Upload to cloud storage",
          "Verify backup integrity"
        ],
        code: `{
  "name": "weekly-backup",
  "schedule": "0 2 * * 0",
  "actions": [
    {
      "type": "backup-database",
      "retention": "4weeks"
    },
    {
      "type": "archive-files",
      "paths": ["/data", "/configs"]
    },
    {
      "type": "cloud-upload",
      "service": "s3",
      "verify": true
    }
  ]
}`
      }
    ]
  },
  {
    category: "Content Automation",
    description: "Automate content creation and publishing",
    jobs: [
      {
        name: "Social Media Scheduler",
        schedule: "0 10,14,18 * * *",
        description: "Post content to social media platforms",
        workflow: [
          "Generate engaging content",
          "Add relevant hashtags",
          "Post to multiple platforms",
          "Track engagement metrics"
        ],
        code: `{
  "name": "social-media-post",
  "schedule": "0 10,14,18 * * *",
  "actions": [
    {
      "type": "content-generate",
      "topic": "daily-tip",
      "length": "short"
    },
    {
      "type": "hashtag-suggest",
      "count": 3
    },
    {
      "type": "social-post",
      "platforms": ["twitter", "linkedin"]
    }
  ]
}`
      },
      {
        name: "Blog Content Pipeline",
        schedule: "0 9 * * 1",
        description: "Research and draft weekly blog posts",
        workflow: [
          "Research trending topics",
          "Generate content outline",
          "Draft blog post",
          "Schedule for review"
        ],
        code: `{
  "name": "blog-pipeline",
  "schedule": "0 9 * * 1",
  "actions": [
    {
      "type": "trend-research",
      "sources": ["google-trends", "industry-news"]
    },
    {
      "type": "content-outline",
      "length": "1500-words"
    },
    {
      "type": "draft-article",
      "save-to": "drafts/"
    }
  ]
}`
      }
    ]
  },
  {
    category: "Monitoring & Alerts",
    description: "Automated system monitoring and notifications",
    jobs: [
      {
        name: "Website Health Monitor",
        schedule: "*/5 * * * *",
        description: "Monitor website uptime and performance",
        workflow: [
          "Check website availability",
          "Test response times",
          "Monitor SSL certificates",
          "Alert on issues"
        ],
        code: `{
  "name": "website-monitor",
  "schedule": "*/5 * * * *",
  "actions": [
    {
      "type": "http-check",
      "urls": ["https://example.com", "https://api.example.com"],
      "timeout": "10s"
    },
    {
      "type": "ssl-check",
      "alert-days": 30
    },
    {
      "type": "alert-if-down",
      "notification": "slack"
    }
  ]
}`
      },
      {
        name: "System Resource Monitor",
        schedule: "*/10 * * * *",
        description: "Monitor CPU, memory, and disk usage",
        workflow: [
          "Check system resources",
          "Log performance metrics",
          "Alert on thresholds",
          "Generate usage reports"
        ],
        code: `{
  "name": "resource-monitor",
  "schedule": "*/10 * * * *",
  "actions": [
    {
      "type": "system-check",
      "metrics": ["cpu", "memory", "disk"]
    },
    {
      "type": "threshold-alert",
      "cpu": 80,
      "memory": 85,
      "disk": 90
    },
    {
      "type": "log-metrics",
      "retention": "30d"
    }
  ]
}`
      }
    ]
  }
];

const advancedFeatures = [
  {
    feature: "Conditional Execution",
    description: "Run jobs based on conditions",
    examples: [
      {
        condition: "Weather-based",
        code: `{
  "condition": {
    "type": "weather",
    "operator": "equals",
    "value": "sunny"
  },
  "action": "send-outdoor-event-reminder"
}`,
        usage: "Send outdoor event reminders only when sunny"
      },
      {
        condition: "File existence",
        code: `{
  "condition": {
    "type": "file-exists",
    "path": "/data/new-orders.csv"
  },
  "action": "process-orders"
}`,
        usage: "Process orders only when new file exists"
      }
    ]
  },
  {
    feature: "Job Dependencies",
    description: "Chain jobs with dependencies",
    examples: [
      {
        scenario: "Data Pipeline",
        code: `{
  "jobs": [
    {
      "name": "extract-data",
      "schedule": "0 1 * * *",
      "next": ["transform-data"]
    },
    {
      "name": "transform-data",
      "depends-on": ["extract-data"],
      "next": ["load-data"]
    },
    {
      "name": "load-data",
      "depends-on": ["transform-data"]
    }
  ]
}`,
        usage: "Run data pipeline jobs in sequence"
      }
    ]
  },
  {
    feature: "Dynamic Scheduling",
    description: "Adjust schedules based on conditions",
    examples: [
      {
        scenario: "Business Hours Adaptation",
        code: `{
  "dynamic-schedule": {
    "base": "0 9 * * *",
    "adjustments": [
      {
        "condition": "holiday",
        "action": "skip"
      },
      {
        "condition": "weekend",
        "schedule": "0 10 * * *"
      }
    ]
  }
}`,
        usage: "Adjust schedules for holidays and weekends"
      }
    ]
  },
  {
    feature: "Error Handling",
    description: "Manage job failures gracefully",
    strategies: [
      {
        strategy: "Retry Logic",
        code: `{
  "retry": {
    "attempts": 3,
    "delay": "exponential",
    "backoff": "2x"
  }
}`,
        usage: "Retry failed jobs with exponential backoff"
      },
      {
        strategy: "Fallback Actions",
        code: `{
  "on-failure": {
    "action": "fallback-notify",
    "parameters": {
      "method": "email",
      "priority": "high"
    }
  }
}`,
        usage: "Execute fallback action on job failure"
      }
    ]
  }
];

const managementCommands = [
  {
    category: "Job Management",
    commands: [
      {
        command: "openclaw cron list",
        description: "List all scheduled jobs",
        output: "Job names, schedules, and status"
      },
      {
        command: "openclaw cron add \"schedule\" \"action\"",
        description: "Add new cron job",
        example: "openclaw cron add \"0 9 * * *\" \"daily-report\""
      },
      {
        command: "openclaw cron remove job-name",
        description: "Remove specific job",
        example: "openclaw cron remove daily-report"
      },
      {
        command: "openclaw cron enable job-name",
        description: "Enable disabled job",
        example: "openclaw cron enable backup-job"
      },
      {
        command: "openclaw cron disable job-name",
        description: "Temporarily disable job",
        example: "openclaw cron disable maintenance-job"
      }
    ]
  },
  {
    category: "Job Monitoring",
    commands: [
      {
        command: "openclaw cron status",
        description: "Show cron service status",
        output: "Service state and job count"
      },
      {
        command: "openclaw cron logs job-name",
        description: "View job execution logs",
        example: "openclaw cron logs daily-report --tail 10"
      },
      {
        command: "openclaw cron history",
        description: "Show job execution history",
        output: "Recent executions with timestamps"
      },
      {
        command: "openclaw cron next",
        description: "Show next scheduled executions",
        output: "Upcoming jobs and run times"
      }
    ]
  },
  {
    category: "Testing & Debugging",
    commands: [
      {
        command: "openclaw cron run job-name",
        description: "Manually execute job",
        example: "openclaw cron run test-job --dry-run"
      },
      {
        command: "openclaw cron validate schedule",
        description: "Validate cron expression",
        example: "openclaw cron validate \"0 9 * * *\""
      },
      {
        command: "openclaw cron test job-name",
        description: "Test job without execution",
        output: "Validation results and next run time"
      }
    ]
  }
];

const troubleshooting = [
  {
    problem: "Jobs Not Running",
    symptoms: [
      "No execution logs",
      "Jobs show as scheduled but don't run",
      "Cron service appears active"
    ],
    solutions: [
      "Check cron service status: openclaw cron status",
      "Verify job syntax: openclaw cron validate",
      "Review system time and timezone",
      "Check for permission issues",
      "Examine cron daemon logs"
    ]
  },
  {
    problem: "Jobs Failing Silently",
    symptoms: [
      "Jobs appear to run but produce no output",
      "No error messages in logs",
      "Expected actions don't occur"
    ],
    solutions: [
      "Add verbose logging to job actions",
      "Check agent availability and status",
      "Verify required resources are available",
      "Test job manually: openclaw cron run job-name",
      "Review job configuration for errors"
    ]
  },
  {
    problem: "Performance Issues",
    symptoms: [
      "Jobs running slower than expected",
      "System resource exhaustion",
      "Jobs overlapping or conflicting"
    ],
    solutions: [
      "Stagger job schedules to avoid conflicts",
      "Optimize job resource usage",
      "Implement job queuing for heavy tasks",
      "Monitor system resources during execution",
      "Consider splitting complex jobs"
    ]
  }
];

export default function OpenClawCronJobsPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Automate Everything with
              <br />
              <span className="text-orange">OpenClaw Cron Jobs</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Master OpenClaw automation with scheduled tasks, workflows, and cron jobs. Set up powerful automation that runs 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#setup" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Start Automating
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Cron Job Fundamentals
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Understanding the building blocks of OpenClaw automation
            </p>
          </div>

          <div className="space-y-12">
            {cronBasics.map((basic, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-4">{basic.component}</h3>
                <p className="text-muted mb-6">{basic.description}</p>

                {basic.format && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-dark mb-2">Format:</h4>
                    <div className="bg-slate-900 text-green-400 p-3 rounded-md font-mono text-sm">
                      {basic.format}
                    </div>
                  </div>
                )}

                {basic.examples && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-dark mb-3">Examples:</h4>
                    <div className="space-y-2">
                      {basic.examples.map((example, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
                          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                            <code className="bg-slate-100 text-slate-800 px-3 py-1 rounded font-mono text-sm">
                              {example.expression}
                            </code>
                            <span className="text-muted">→ {example.meaning}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {basic.types && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {basic.types.map((type, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200">
                        <h5 className="font-semibold text-dark mb-2">{type.type}</h5>
                        <p className="text-muted text-sm mb-3">{type.description}</p>
                        <ul className="space-y-1">
                          {type.examples.map((example, exIdx) => (
                            <li key={exIdx} className="text-muted text-sm flex gap-2">
                              <span className="text-orange">•</span>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {basic.contexts && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {basic.contexts.map((ctx, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200">
                        <h5 className="font-semibold text-dark mb-2">{ctx.context}</h5>
                        <p className="text-muted text-sm mb-2">{ctx.description}</p>
                        <div className="text-orange text-sm font-medium">{ctx.scope}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="setup" className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Quick Setup Guide
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Get your first cron job running in minutes
            </p>
          </div>

          <div className="space-y-12">
            {setupSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
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

                    {step.commands && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-dark mb-3">Commands:</h4>
                        <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
                          <pre className="whitespace-pre-wrap">{step.commands.join('\n')}</pre>
                        </div>
                      </div>
                    )}

                    {step.examples && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-dark mb-3">Examples:</h4>
                        <div className="space-y-4">
                          {step.examples.map((example, idx) => (
                            <div key={idx} className="border-l-4 border-blue-400 bg-blue-50 p-4">
                              <h5 className="font-medium text-dark mb-1">{example.name}</h5>
                              <p className="text-muted text-sm mb-2">{example.description}</p>
                              <div className="bg-slate-900 text-green-400 p-2 rounded font-mono text-sm">
                                {example.command}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {step.config && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-dark mb-3">Configuration ({step.config.filename}):</h4>
                        <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-xs overflow-x-auto">
                          <pre className="whitespace-pre-wrap">{step.config.content}</pre>
                        </div>
                      </div>
                    )}

                    {step.verification && (
                      <div className="bg-green-50 border-l-4 border-green-400 p-4">
                        <h4 className="font-semibold text-green-800 mb-2">Verification:</h4>
                        <ul className="space-y-1">
                          {step.verification.map((check, idx) => (
                            <li key={idx} className="text-green-700 text-sm">✓ {check}</li>
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

      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Practical Automation Examples
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Real-world cron job examples you can implement today
            </p>
          </div>

          <div className="space-y-12">
            {practicalExamples.map((category, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{category.category}</h3>
                <p className="text-muted mb-8">{category.description}</p>

                <div className="space-y-8">
                  {category.jobs.map((job, idx) => (
                    <div key={idx} className="bg-surface rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-heading font-bold text-lg text-dark">{job.name}</h4>
                        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-mono">
                          {job.schedule}
                        </span>
                      </div>
                      <p className="text-muted mb-6">{job.description}</p>

                      <div className="mb-6">
                        <h5 className="font-semibold text-dark mb-3">Workflow Steps:</h5>
                        <ol className="space-y-2">
                          {job.workflow.map((step, stepIdx) => (
                            <li key={stepIdx} className="text-muted text-sm flex gap-2">
                              <span className="text-orange font-mono text-xs mt-0.5">{stepIdx + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="bg-slate-50 rounded-lg p-4">
                        <h5 className="font-semibold text-dark mb-2">Configuration:</h5>
                        <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-xs overflow-x-auto">
                          <pre className="whitespace-pre-wrap">{job.code}</pre>
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
              Advanced Features
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Powerful features for sophisticated automation workflows
            </p>
          </div>

          <div className="space-y-8">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{feature.feature}</h3>
                <p className="text-muted mb-6">{feature.description}</p>

                {feature.examples && (
                  <div className="space-y-6">
                    {feature.examples.map((example, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
                        <h4 className="font-semibold text-dark mb-4">
                          {example.condition || example.scenario}
                        </h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-dark mb-2">Configuration:</h5>
                            <div className="bg-slate-900 text-green-400 p-3 rounded-md font-mono text-xs overflow-x-auto">
                              <pre className="whitespace-pre-wrap">{example.code}</pre>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-medium text-dark mb-2">Use Case:</h5>
                            <p className="text-muted text-sm">{example.usage}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {feature.strategies && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {feature.strategies.map((strategy, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
                        <h4 className="font-semibold text-dark mb-3">{strategy.strategy}</h4>
                        <div className="mb-4">
                          <div className="bg-slate-900 text-green-400 p-3 rounded-md font-mono text-xs overflow-x-auto">
                            <pre className="whitespace-pre-wrap">{strategy.code}</pre>
                          </div>
                        </div>
                        <p className="text-muted text-sm">{strategy.usage}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Management Commands
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Essential commands for managing your cron jobs
            </p>
          </div>

          <div className="space-y-8">
            {managementCommands.map((category, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">{category.category}</h3>
                
                <div className="space-y-4">
                  {category.commands.map((cmd, idx) => (
                    <div key={idx} className="border-l-4 border-orange bg-orange-50 p-4">
                      <div className="mb-2">
                        <h4 className="font-mono text-dark font-semibold">{cmd.command}</h4>
                        <p className="text-muted text-sm mt-1">{cmd.description}</p>
                      </div>
                      {cmd.example && (
                        <div className="mb-2">
                          <h5 className="font-semibold text-dark mb-1 text-sm">Example:</h5>
                          <div className="bg-slate-900 text-green-400 p-2 rounded font-mono text-sm">
                            {cmd.example}
                          </div>
                        </div>
                      )}
                      {cmd.output && (
                        <div>
                          <h5 className="font-semibold text-dark mb-1 text-sm">Output:</h5>
                          <p className="text-muted text-sm">{cmd.output}</p>
                        </div>
                      )}
                    </div>
                  ))}
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
              Troubleshooting
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Common issues and how to resolve them
            </p>
          </div>

          <div className="space-y-6">
            {troubleshooting.map((issue, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
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

      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Need Help with
                <br />
                <span className="text-orange">Complex Automation?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Get expert help designing and implementing sophisticated automation workflows for your business.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Custom automation design
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Performance optimization
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Error handling strategies
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Automation Consulting</h3>
              <p className="text-white/40 text-sm mb-6">Design powerful automated workflows</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}