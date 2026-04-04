import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Telegram Setup Guide",
  description: "Step-by-step guide to connecting OpenClaw with Telegram. Create bot, configure webhook, set up commands and automate your Telegram workflow with AI agents.",
  keywords: [
    "openclaw telegram setup",
    "openclaw telegram bot",
    "connect openclaw telegram",
    "telegram ai bot setup",
    "openclaw telegram integration",
    "telegram bot creation",
    "openclaw telegram commands",
    "telegram automation openclaw"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-setup-telegram" },
  openGraph: {
    title: "OpenClaw Telegram Setup Guide",
    description: "Complete guide to setting up OpenClaw with Telegram. Create bots, automate messages, and build AI-powered Telegram workflows.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-setup-telegram",
    type: "article",
  },
};

const setupSteps = [
  {
    step: 1,
    title: "Create Telegram Bot with BotFather",
    description: "Use Telegram's BotFather to create your OpenClaw bot",
    actions: [
      "Open Telegram and search for @BotFather",
      "Send /start to begin interaction",
      "Send /newbot to create a new bot", 
      "Choose a name for your bot (e.g., 'My OpenClaw Bot')",
      "Choose a username ending in 'bot' (e.g., 'myopenclawbot')",
      "Copy the bot token provided by BotFather"
    ],
    commands: [
      "/start",
      "/newbot", 
      "My OpenClaw Assistant",
      "myopenclawassistant_bot"
    ],
    timeRequired: "3-5 minutes",
    notes: "Keep your bot token secure - it's like a password for your bot"
  },
  {
    step: 2,
    title: "Install OpenClaw Telegram Plugin",
    description: "Add Telegram capabilities to your OpenClaw installation",
    commands: [
      "# Install the OpenClaw Telegram plugin",
      "openclaw plugin install telegram",
      "",
      "# Verify plugin installation", 
      "openclaw plugin list",
      "",
      "# Check Telegram plugin status",
      "openclaw plugin status telegram"
    ],
    timeRequired: "1-2 minutes",
    notes: "The Telegram plugin handles message routing and bot management"
  },
  {
    step: 3, 
    title: "Configure Bot Token",
    description: "Set up your bot token in OpenClaw configuration",
    commands: [
      "# Set your Telegram bot token",
      "openclaw config set telegram.token YOUR_BOT_TOKEN_HERE",
      "",
      "# Verify configuration",
      "openclaw config get telegram.token",
      "",
      "# Set bot username (optional but recommended)",
      "openclaw config set telegram.username myopenclawassistant_bot"
    ],
    timeRequired: "1 minute",
    notes: "Replace YOUR_BOT_TOKEN_HERE with the actual token from BotFather"
  },
  {
    step: 4,
    title: "Start Telegram Integration",
    description: "Enable Telegram connection in OpenClaw gateway",
    commands: [
      "# Enable Telegram in gateway configuration",
      "openclaw gateway config --enable telegram",
      "",
      "# Restart gateway to apply changes", 
      "openclaw gateway restart",
      "",
      "# Check Telegram connection status",
      "openclaw gateway status telegram"
    ],
    timeRequired: "1-2 minutes",
    notes: "Gateway restart is required to activate Telegram integration"
  },
  {
    step: 5,
    title: "Test Bot Connection",
    description: "Verify your Telegram bot is working with OpenClaw",
    commands: [
      "# Send test message to bot webhook",
      "openclaw telegram test-connection",
      "",
      "# Check bot activity logs",
      "openclaw logs telegram --tail 10"
    ],
    actions: [
      "Find your bot in Telegram by searching its username",
      "Send /start to your bot",
      "Send a test message like 'Hello bot'",
      "Verify bot responds with OpenClaw agent reply"
    ],
    timeRequired: "2-3 minutes",
    notes: "Successful response confirms integration is working correctly"
  }
];

const advancedConfiguration = [
  {
    setting: "Custom Commands Setup",
    description: "Create custom Telegram commands for your OpenClaw bot",
    configuration: [
      "# Set up custom commands",
      "openclaw telegram command add /help \"Show available commands\"",
      "openclaw telegram command add /status \"Check agent status\"", 
      "openclaw telegram command add /task \"Create new task: /task [description]\"",
      "",
      "# Register commands with BotFather",
      "# Send to @BotFather: /setcommands",
      "# Select your bot and paste command list"
    ],
    botFatherCommands: [
      "help - Show available commands",
      "status - Check agent status", 
      "task - Create new task"
    ]
  },
  {
    setting: "Webhook Configuration",
    description: "Set up webhook for real-time message processing",
    configuration: [
      "# Set webhook URL (for public deployments)",
      "openclaw config set telegram.webhook.url https://your-domain.com/webhook",
      "",
      "# Enable webhook mode",
      "openclaw config set telegram.mode webhook",
      "", 
      "# For local development, use polling mode",
      "openclaw config set telegram.mode polling"
    ]
  },
  {
    setting: "Agent Assignment",
    description: "Assign specific agents to handle Telegram messages",
    configuration: [
      "# Create agent for Telegram interactions",
      "openclaw agent create --name telegram-agent --channel telegram",
      "",
      "# Set default agent for Telegram",
      "openclaw config set telegram.default_agent telegram-agent",
      "",
      "# Configure agent personality for Telegram",
      "openclaw agent config telegram-agent --personality \"Helpful assistant for Telegram\""
    ]
  }
];

const useCases = [
  {
    useCase: "Personal Assistant Bot",
    description: "AI assistant for personal task management",
    features: ["Schedule reminders", "Answer questions", "Manage todo lists", "Weather updates"],
    setup: "Configure agent with personal assistant skills and calendar access"
  },
  {
    useCase: "Business Support Bot",
    description: "Customer support automation for businesses", 
    features: ["Answer FAQs", "Route inquiries", "Collect feedback", "Generate reports"],
    setup: "Set up agent with business knowledge base and CRM integration"
  },
  {
    useCase: "Team Collaboration Bot",
    description: "Enhance team communication and productivity",
    features: ["Meeting summaries", "Project updates", "File management", "Task assignments"],
    setup: "Connect to project management tools and team databases"
  },
  {
    useCase: "Content Creation Bot",
    description: "Automate content creation and publishing",
    features: ["Generate posts", "Schedule content", "Analyze engagement", "SEO suggestions"],
    setup: "Configure content generation skills and social media APIs"
  }
];

const troubleshooting = [
  {
    issue: "Bot Not Responding to Messages",
    symptoms: ["No replies from bot", "Messages not reaching OpenClaw"],
    solutions: [
      "Check bot token is correct: openclaw config get telegram.token",
      "Verify gateway is running: openclaw gateway status",
      "Check Telegram plugin status: openclaw plugin status telegram",
      "Review logs: openclaw logs telegram"
    ]
  },
  {
    issue: "Webhook Connection Failed", 
    symptoms: ["Webhook errors in logs", "Connection timeout"],
    solutions: [
      "Verify webhook URL is accessible from internet",
      "Check SSL certificate is valid",
      "Test webhook manually with curl",
      "Switch to polling mode for testing: openclaw config set telegram.mode polling"
    ]
  },
  {
    issue: "Agent Not Processing Telegram Messages",
    symptoms: ["Bot responds but agent doesn't activate", "Generic responses only"],
    solutions: [
      "Check agent assignment: openclaw config get telegram.default_agent",
      "Verify agent is running: openclaw agent status [agent-name]",
      "Test agent directly: openclaw agent chat [agent-name] 'test message'",
      "Review agent logs for errors"
    ]
  },
  {
    issue: "Rate Limiting or API Errors",
    symptoms: ["Too many requests error", "API quota exceeded"],
    solutions: [
      "Implement message throttling in agent configuration",
      "Monitor API usage: openclaw telegram stats",
      "Upgrade Telegram API limits if needed",
      "Add delay between bot responses"
    ]
  }
];

const securityBestPractices = [
  {
    practice: "Bot Token Security",
    description: "Protect your Telegram bot token",
    steps: [
      "Never share bot token in public repositories",
      "Use environment variables for token storage",
      "Regenerate token if compromised (via BotFather)",
      "Limit bot permissions to minimum required"
    ]
  },
  {
    practice: "User Authentication",
    description: "Control who can access your bot",
    steps: [
      "Implement user whitelist for private bots",
      "Use Telegram user ID verification",
      "Set up admin-only commands",
      "Log all user interactions for audit"
    ]
  },
  {
    practice: "Data Protection",
    description: "Secure user data and conversations",
    steps: [
      "Encrypt sensitive data in logs",
      "Implement data retention policies",
      "Regular backup of bot configuration",
      "Comply with privacy regulations (GDPR)"
    ]
  }
];

export default function OpenClawTelegramSetupPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Connect OpenClaw to
              <br />
              <span className="text-orange">Telegram — Complete Guide</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Step-by-step guide to setting up OpenClaw with Telegram. Create AI bots, automate messages, and build powerful Telegram workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#setup" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Start Setup
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="setup" className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              5-Step Telegram Setup
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Follow these steps to connect OpenClaw with Telegram
            </p>
          </div>

          <div className="space-y-8">
            {setupSteps.map((step, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8 shadow-card">
                <div className="flex items-start gap-6">
                  <div className="bg-orange text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <h3 className="font-heading font-bold text-xl text-dark">{step.title}</h3>
                      <span className="text-orange text-sm font-medium">{step.timeRequired}</span>
                    </div>
                    <p className="text-muted mb-6">{step.description}</p>
                    
                    {step.actions && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-dark mb-2">Actions:</h4>
                        <ol className="space-y-2">
                          {step.actions.map((action, idx) => (
                            <li key={idx} className="text-muted text-sm flex gap-3">
                              <span className="text-orange font-mono text-xs mt-1">{idx + 1}.</span>
                              <span>{action}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {step.commands && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-dark mb-2">Commands/Messages:</h4>
                        <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
                          <pre className="whitespace-pre-wrap">{step.commands.join('\n')}</pre>
                        </div>
                      </div>
                    )}

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <p className="text-blue-800 text-sm font-medium">💡 {step.notes}</p>
                    </div>
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
              Advanced Configuration
            </h2>
          </div>

          <div className="space-y-8">
            {advancedConfiguration.map((config, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{config.setting}</h3>
                <p className="text-muted mb-4">{config.description}</p>
                
                <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto mb-4">
                  <pre className="whitespace-pre-wrap">{config.configuration.join('\n')}</pre>
                </div>

                {config.botFatherCommands && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">BotFather Command List:</h4>
                    <ul className="space-y-1">
                      {config.botFatherCommands.map((command, idx) => (
                        <li key={idx} className="text-yellow-700 text-sm font-mono">{command}</li>
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
              Popular Use Cases
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{useCase.useCase}</h3>
                <p className="text-muted mb-4">{useCase.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-dark mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="text-muted text-sm flex gap-2">
                        <span className="text-green-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-dark mb-2">Setup Requirements:</h4>
                  <p className="text-muted text-sm">{useCase.setup}</p>
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
              Troubleshooting Common Issues
            </h2>
          </div>

          <div className="space-y-6">
            {troubleshooting.map((item, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{item.issue}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-red-600">Symptoms:</h4>
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
                    <h4 className="font-semibold text-dark mb-2 text-green-600">Solutions:</h4>
                    <ul className="space-y-1">
                      {item.solutions.map((solution, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="font-mono text-xs">{solution}</span>
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
              Security Best Practices
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            {securityBestPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{practice.practice}</h3>
                <p className="text-muted mb-4">{practice.description}</p>
                
                <ul className="space-y-2">
                  {practice.steps.map((step, idx) => (
                    <li key={idx} className="text-muted text-sm flex gap-3">
                      <span className="text-orange">▸</span>
                      {step}
                    </li>
                  ))}
                </ul>
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
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-windows" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Windows</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-skills-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
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
                <span className="text-orange">Telegram Integration?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Get expert assistance setting up OpenClaw with Telegram. Custom bot development and advanced workflow automation.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Custom Telegram bot development
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Advanced workflow automation
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Integration troubleshooting
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Telegram Setup Support</h3>
              <p className="text-white/40 text-sm mb-6">Get your Telegram bot working with OpenClaw</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}