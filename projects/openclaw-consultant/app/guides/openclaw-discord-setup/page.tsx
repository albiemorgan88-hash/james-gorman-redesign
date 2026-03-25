import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Set Up an OpenClaw Discord Bot in 10 Minutes | Complete Guide 2026",
  description: "Quick guide to creating an OpenClaw Discord bot. Set up AI agents for Discord server management, moderation, and community engagement in just 10 minutes.",
  keywords: [
    "openclaw discord bot",
    "discord ai bot openclaw",
    "openclaw discord setup", 
    "discord bot creation openclaw",
    "ai discord moderation",
    "discord server automation",
    "openclaw discord integration",
    "discord community bot"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-discord-setup" },
  openGraph: {
    title: "Set Up an OpenClaw Discord Bot in 10 Minutes | Complete Guide 2026",
    description: "Quick setup guide for OpenClaw Discord bots. AI-powered server management, moderation, and community engagement.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-discord-setup",
    type: "article",
  },
};

const quickSetupSteps = [
  {
    step: 1,
    title: "Create Discord Application",
    description: "Set up Discord application and bot account",
    actions: [
      "Go to https://discord.com/developers/applications",
      "Click 'New Application' and name your bot",
      "Navigate to 'Bot' section in sidebar",
      "Click 'Add Bot' to create bot user",
      "Copy bot token (keep it secure!)"
    ],
    timeRequired: "2 minutes"
  },
  {
    step: 2,
    title: "Configure Bot Permissions",
    description: "Set up necessary permissions for your bot",
    actions: [
      "Go to OAuth2 > URL Generator",
      "Select 'bot' and 'applications.commands' scopes",
      "Choose required permissions (Read Messages, Send Messages, etc.)",
      "Copy generated invitation URL"
    ],
    timeRequired: "1 minute"
  },
  {
    step: 3,
    title: "Install OpenClaw Discord Plugin",
    description: "Add Discord capabilities to OpenClaw",
    commands: [
      "# Install Discord plugin",
      "openclaw plugin install discord",
      "",
      "# Configure bot token",
      "openclaw config set discord.token YOUR_BOT_TOKEN",
      "",
      "# Enable Discord gateway",
      "openclaw gateway enable discord"
    ],
    timeRequired: "2 minutes"
  },
  {
    step: 4,
    title: "Invite Bot to Server",
    description: "Add your bot to Discord server",
    actions: [
      "Open the invitation URL from step 2",
      "Select target Discord server",
      "Confirm bot permissions",
      "Bot will appear in server member list"
    ],
    timeRequired: "1 minute"
  },
  {
    step: 5,
    title: "Test Bot Functionality",
    description: "Verify bot responds to commands",
    commands: [
      "# Start OpenClaw with Discord enabled",
      "openclaw start",
      "",
      "# Test in Discord channel",
      "# Type: @YourBot hello",
      "# Bot should respond with OpenClaw agent"
    ],
    timeRequired: "2 minutes"
  }
];

const botFeatures = [
  {
    feature: "Server Moderation",
    description: "AI-powered moderation and rule enforcement",
    capabilities: [
      "Auto-moderate toxic messages",
      "Spam detection and removal",
      "User warning system",
      "Temporary and permanent bans"
    ],
    commands: [
      "!moderate on/off",
      "!warn @user reason",
      "!ban @user duration reason",
      "!modstats"
    ]
  },
  {
    feature: "Community Engagement",
    description: "Enhance server interaction and engagement",
    capabilities: [
      "Welcome new members",
      "Answer community questions",
      "Create and manage events",
      "Member activity tracking"
    ],
    commands: [
      "!welcome setup",
      "!event create",
      "!stats server",
      "!leaderboard"
    ]
  },
  {
    feature: "Server Management",
    description: "Automate server administration tasks",
    capabilities: [
      "Role management",
      "Channel organization", 
      "Backup and restore",
      "Server analytics"
    ],
    commands: [
      "!role assign @user role",
      "!channel create type name",
      "!backup server",
      "!analytics weekly"
    ]
  },
  {
    feature: "Custom Commands",
    description: "Create server-specific bot commands",
    capabilities: [
      "Dynamic command creation",
      "Response customization",
      "Permission controls",
      "Usage tracking"
    ],
    commands: [
      "!command add name response",
      "!command edit name",
      "!command delete name",
      "!command list"
    ]
  }
];

const advancedSetup = [
  {
    setting: "Slash Commands Integration",
    description: "Set up modern Discord slash commands",
    code: [
      "# Register slash commands",
      "openclaw discord register-commands",
      "",
      "# Available commands:",
      "# /ask - Ask AI assistant a question",
      "# /moderate - Moderation controls",
      "# /stats - Server statistics",
      "# /help - Show available commands"
    ]
  },
  {
    setting: "Multi-Agent Configuration",
    description: "Different agents for different purposes",
    code: [
      "# Create specialized agents",
      "openclaw agent create --name moderator-agent --skills moderation",
      "openclaw agent create --name support-agent --skills customer-service",
      "openclaw agent create --name fun-agent --skills entertainment",
      "",
      "# Assign agents to channels",
      "openclaw discord assign moderator-agent --channel moderation", 
      "openclaw discord assign support-agent --channel support",
      "openclaw discord assign fun-agent --channel general"
    ]
  },
  {
    setting: "Event Handling",
    description: "Respond to Discord server events",
    code: [
      "# Configure event responses",
      "openclaw discord event member_join --action welcome_message",
      "openclaw discord event message_delete --action log_moderation",
      "openclaw discord event role_update --action notify_admins",
      "",
      "# Custom event handlers",
      "openclaw discord webhook add member_join https://your-endpoint.com/join"
    ]
  }
];

const useCases = [
  {
    title: "Gaming Community Server",
    description: "Enhance gaming server with AI assistance",
    features: [
      "Game stats tracking",
      "Tournament organization",
      "LFG (Looking for Group) matching",
      "Server boost rewards"
    ],
    setup: "Gaming-focused agent with game API integrations and community management skills"
  },
  {
    title: "Educational/Learning Server",
    description: "Support learning communities",
    features: [
      "Study group coordination",
      "Q&A assistance",
      "Resource sharing",
      "Progress tracking"
    ],
    setup: "Educational agent with knowledge base access and progress tracking capabilities"
  },
  {
    title: "Business/Professional Server",
    description: "Professional community management",
    features: [
      "Meeting coordination",
      "Project updates",
      "Client communication",
      "Team productivity"
    ],
    setup: "Business agent with calendar integration and project management tools"
  },
  {
    title: "Creative Community",
    description: "Support artists, writers, and creators",
    features: [
      "Feedback coordination",
      "Collaboration matching",
      "Event planning",
      "Showcase management"
    ],
    setup: "Creative agent with portfolio management and community engagement features"
  }
];

const troubleshooting = [
  {
    issue: "Bot Not Responding in Discord",
    symptoms: ["Bot appears offline", "No response to mentions", "Commands not working"],
    solutions: [
      "Check bot token is correct and not expired",
      "Verify bot has message read/send permissions",
      "Ensure OpenClaw gateway is running",
      "Check Discord API status"
    ]
  },
  {
    issue: "Permission Errors",
    symptoms: ["'Missing Permissions' errors", "Cannot perform actions"],
    solutions: [
      "Review bot role position in server hierarchy",
      "Grant necessary permissions in server settings",
      "Check channel-specific permission overrides",
      "Ensure bot role is not restricted"
    ]
  },
  {
    issue: "Slash Commands Not Appearing",
    symptoms: ["Commands don't show in Discord", "Application commands missing"],
    solutions: [
      "Re-register commands: openclaw discord register-commands",
      "Check bot has applications.commands scope",
      "Verify guild ID in configuration",
      "Wait up to 1 hour for global command propagation"
    ]
  }
];

export default function OpenClawDiscordSetupPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Set Up an OpenClaw Discord Bot
              <br />
              <span className="text-orange">in 10 Minutes</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Quick setup guide for OpenClaw Discord bots. Add AI-powered moderation, community engagement, and server management to your Discord server.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quick-setup" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Start 10-Minute Setup
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="quick-setup" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              10-Minute Quick Setup
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Follow these 5 steps to get your OpenClaw Discord bot running
            </p>
          </div>

          <div className="space-y-8">
            {quickSetupSteps.map((step, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
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
                        <h4 className="font-semibold text-dark mb-2">Steps:</h4>
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
                      <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
                        <pre className="whitespace-pre-wrap">{step.commands.join('\n')}</pre>
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
              Bot Features & Capabilities
            </h2>
          </div>

          <div className="space-y-8">
            {botFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{feature.feature}</h3>
                <p className="text-muted mb-6">{feature.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Capabilities:</h4>
                    <ul className="space-y-2">
                      {feature.capabilities.map((capability, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-3">
                          <span className="text-green-500">✓</span>
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Example Commands:</h4>
                    <ul className="space-y-1">
                      {feature.commands.map((command, idx) => (
                        <li key={idx} className="text-muted text-sm">
                          <code className="bg-gray-100 px-2 py-1 rounded text-xs">{command}</code>
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

      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Advanced Configuration
            </h2>
          </div>

          <div className="space-y-6">
            {advancedSetup.map((setup, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{setup.setting}</h3>
                <p className="text-muted mb-4">{setup.description}</p>
                
                <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
                  <pre className="whitespace-pre-wrap">{setup.code.join('\n')}</pre>
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
              Discord Server Use Cases
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{useCase.title}</h3>
                <p className="text-muted mb-4">{useCase.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-dark mb-2">Key Features:</h4>
                  <ul className="space-y-1">
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

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Troubleshooting Common Issues
            </h2>
          </div>

          <div className="space-y-6">
            {troubleshooting.map((item, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
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

      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Need Custom Discord
                <br />
                <span className="text-orange">Bot Development?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Get custom Discord bot development with advanced features. AI moderation, community engagement, and server automation tailored to your needs.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Custom Discord bot features
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Advanced moderation systems
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Community management automation
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Discord Bot Development</h3>
              <p className="text-white/40 text-sm mb-6">Custom AI-powered Discord solutions</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}