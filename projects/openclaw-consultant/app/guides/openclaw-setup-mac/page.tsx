import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Setup Guide for Mac 2026",
  description: "Complete guide to installing and configuring OpenClaw on macOS. Covers prerequisites, installation steps, configuration, and troubleshooting for Mac users.",
  keywords: [
    "openclaw setup mac",
    "openclaw mac installation",
    "openclaw macos setup",
    "how to install openclaw mac",
    "openclaw configuration mac",
    "openclaw mac guide",
    "openclaw terminal mac",
    "openclaw homebrew"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-setup-mac" },
  openGraph: {
    title: "OpenClaw Setup Guide for Mac 2026",
    description: "Complete guide to installing and configuring OpenClaw on macOS. Everything you need to get OpenClaw running on your Mac.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-setup-mac",
    type: "article",
  },
};

const prerequisites = [
  {
    requirement: "macOS 12.0 or later",
    description: "OpenClaw requires modern macOS for optimal performance",
    checkCommand: "sw_vers -productVersion",
    status: "required"
  },
  {
    requirement: "Node.js 18.0 or later",
    description: "JavaScript runtime required for OpenClaw core",
    checkCommand: "node --version",
    installCommand: "brew install node",
    status: "required"
  },
  {
    requirement: "Homebrew Package Manager",
    description: "Simplifies installation of dependencies",
    checkCommand: "brew --version",
    installCommand: "/bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"",
    status: "recommended"
  },
  {
    requirement: "Git Version Control",
    description: "Required for skill management and updates",
    checkCommand: "git --version",
    installCommand: "xcode-select --install",
    status: "required"
  }
];

const installationSteps = [
  {
    step: 1,
    title: "Install Prerequisites",
    description: "Set up all required dependencies before OpenClaw installation",
    commands: [
      "# Install Xcode Command Line Tools (includes Git)",
      "xcode-select --install",
      "",
      "# Install Homebrew if not already installed", 
      "/bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"",
      "",
      "# Install Node.js",
      "brew install node",
      "",
      "# Verify installations",
      "node --version",
      "npm --version", 
      "git --version"
    ],
    timeRequired: "5-10 minutes",
    notes: "You may need to restart Terminal after Homebrew installation"
  },
  {
    step: 2,
    title: "Install OpenClaw",
    description: "Download and install the OpenClaw package globally",
    commands: [
      "# Install OpenClaw globally via npm",
      "sudo npm install -g openclaw",
      "",
      "# Verify installation",
      "openclaw --version",
      "",
      "# Check available commands", 
      "openclaw help"
    ],
    timeRequired: "2-3 minutes",
    notes: "Use sudo for global installation. Password prompt is normal."
  },
  {
    step: 3,
    title: "Initialize OpenClaw Workspace",
    description: "Set up your OpenClaw working directory and configuration",
    commands: [
      "# Create and navigate to workspace directory",
      "mkdir ~/.openclaw",
      "cd ~/.openclaw",
      "",
      "# Initialize OpenClaw workspace",
      "openclaw init",
      "",
      "# Set up basic configuration",
      "openclaw config set workspace ~/.openclaw/workspace"
    ],
    timeRequired: "1-2 minutes",
    notes: "This creates your personal OpenClaw workspace in your home directory"
  },
  {
    step: 4,
    title: "Start OpenClaw Gateway",
    description: "Launch the OpenClaw gateway service for agent communication",
    commands: [
      "# Start the gateway service",
      "openclaw gateway start",
      "",
      "# Check gateway status",
      "openclaw gateway status",
      "",
      "# View gateway logs (optional)",
      "openclaw gateway logs"
    ],
    timeRequired: "1 minute",
    notes: "Gateway runs in background. Check status if you encounter connection issues."
  },
  {
    step: 5,
    title: "Configure Your First Agent",
    description: "Set up a basic agent to test your installation",
    commands: [
      "# Create your first agent session",
      "openclaw agent create --name test-agent",
      "",
      "# Test agent response",
      "openclaw agent chat test-agent \"Hello, are you working?\"",
      "",
      "# List active agents",
      "openclaw agent list"
    ],
    timeRequired: "2-3 minutes",
    notes: "If agent responds successfully, your OpenClaw installation is complete"
  }
];

const macSpecificConfigurations = [
  {
    setting: "Security & Privacy Settings",
    description: "Allow OpenClaw to access system features",
    steps: [
      "Open System Preferences > Security & Privacy",
      "Go to Privacy tab",
      "Add Terminal to 'Full Disk Access' (if prompted)",
      "Add OpenClaw to 'Automation' permissions"
    ]
  },
  {
    setting: "Terminal Configuration", 
    description: "Optimize terminal for OpenClaw usage",
    steps: [
      "Open Terminal preferences (Cmd + ,)",
      "Set shell to /bin/zsh (default on modern macOS)",
      "Enable 'Use Option as Meta key'",
      "Increase scrollback buffer to 10,000 lines"
    ]
  },
  {
    setting: "Environment Variables",
    description: "Set up shell environment for OpenClaw",
    steps: [
      "Add to ~/.zshrc: export OPENCLAW_HOME=~/.openclaw",
      "Add to ~/.zshrc: export PATH=$PATH:$OPENCLAW_HOME/bin",
      "Reload shell: source ~/.zshrc",
      "Verify: echo $OPENCLAW_HOME"
    ]
  }
];

const troubleshooting = [
  {
    issue: "Permission Denied Errors",
    symptoms: ["sudo: command not found", "EACCES: permission denied"],
    solutions: [
      "Run installation commands with sudo",
      "Check user account has admin privileges",
      "Verify Homebrew installation and permissions"
    ]
  },
  {
    issue: "Gateway Connection Failed",
    symptoms: ["Gateway not responding", "Connection timeout errors"],
    solutions: [
      "Check firewall settings - allow Node.js connections",
      "Restart gateway: openclaw gateway restart",
      "Check port 3000 isn't already in use"
    ]
  },
  {
    issue: "Node.js Version Conflicts",
    symptoms: ["Unsupported Node version", "npm ERR! peer dep missing"],
    solutions: [
      "Update Node.js: brew upgrade node",
      "Use nvm for version management: brew install nvm",
      "Clear npm cache: npm cache clean --force"
    ]
  },
  {
    issue: "Command Not Found: openclaw",
    symptoms: ["zsh: command not found: openclaw"],
    solutions: [
      "Restart terminal after installation", 
      "Check PATH includes npm global bin: npm config get prefix",
      "Reinstall: npm uninstall -g openclaw && npm install -g openclaw"
    ]
  }
];

const optimizations = [
  {
    category: "Performance",
    tips: [
      "Allocate 8GB+ RAM for complex agents",
      "Use SSD storage for OpenClaw workspace",
      "Close unnecessary applications during agent training",
      "Monitor Activity Monitor for resource usage"
    ]
  },
  {
    category: "Development",
    tips: [
      "Install VS Code with OpenClaw extensions",
      "Set up Git credentials for skill management",
      "Use iTerm2 for better terminal experience",
      "Install jq for JSON processing: brew install jq"
    ]
  },
  {
    category: "Security",
    tips: [
      "Enable FileVault disk encryption",
      "Use strong password for admin account",
      "Regular macOS security updates",
      "Backup OpenClaw workspace to iCloud/TimeMachine"
    ]
  }
];

export default function OpenClawSetupMacPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Complete OpenClaw Setup
              <br />
              <span className="text-orange">Guide for Mac (2026)</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Step-by-step installation and configuration guide for OpenClaw on macOS. Get your AI agents running smoothly on Mac.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#prerequisites" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Start Installation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="prerequisites" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Prerequisites Check
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Verify your Mac meets these requirements before starting the installation
            </p>
          </div>

          <div className="space-y-4">
            {prerequisites.map((prereq, index) => (
              <div key={index} className="bg-surface rounded-box p-6 shadow-card">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading font-bold text-lg text-dark">{prereq.requirement}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        prereq.status === 'required' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {prereq.status}
                      </span>
                    </div>
                    <p className="text-muted mb-3">{prereq.description}</p>
                    
                    <div className="space-y-2">
                      <div className="bg-slate-900 text-green-400 p-3 rounded-md font-mono text-sm">
                        <span className="text-slate-400"># Check if installed:</span><br/>
                        <span>{prereq.checkCommand}</span>
                      </div>
                      {prereq.installCommand && (
                        <div className="bg-slate-900 text-green-400 p-3 rounded-md font-mono text-sm">
                          <span className="text-slate-400"># Install command:</span><br/>
                          <span>{prereq.installCommand}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="installation" className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Installation Steps
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Follow these steps in order for a successful OpenClaw installation on your Mac
            </p>
          </div>

          <div className="space-y-8">
            {installationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
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
                    
                    <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                      <pre className="whitespace-pre-wrap">{step.commands.join('\n')}</pre>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                      <p className="text-blue-800 text-sm font-medium">💡 Note: {step.notes}</p>
                    </div>
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
              Mac-Specific Configuration
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Additional macOS settings to optimize your OpenClaw experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {macSpecificConfigurations.map((config, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{config.setting}</h3>
                <p className="text-muted mb-4">{config.description}</p>
                
                <ol className="space-y-2">
                  {config.steps.map((step, idx) => (
                    <li key={idx} className="text-muted text-sm flex gap-3">
                      <span className="text-orange font-mono text-xs mt-1">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Troubleshooting Common Issues
            </h2>
          </div>

          <div className="space-y-6">
            {troubleshooting.map((item, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{item.issue}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-red-600">Symptoms:</h4>
                    <ul className="space-y-1">
                      {item.symptoms.map((symptom, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-red-500">•</span>
                          <span className="font-mono text-xs">{symptom}</span>
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
                          <span>{solution}</span>
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
              Performance & Security Optimizations
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {optimizations.map((category, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.tips.map((tip, idx) => (
                    <li key={idx} className="text-muted text-sm flex gap-3">
                      <span className="text-orange mt-0.5">▸</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
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
            <a href="/guides/openclaw-setup-windows" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Windows</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-telegram" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Telegram Setup Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
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
                <span className="text-orange">Mac Installation?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Get expert assistance with OpenClaw setup on your Mac. Free consultation to resolve installation issues.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Remote installation assistance
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Custom configuration setup
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Troubleshooting support
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Mac Setup Support</h3>
              <p className="text-white/40 text-sm mb-6">Get OpenClaw running on your Mac today</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}