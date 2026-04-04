import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Setup Guide for Windows",
  description: "Complete guide to installing OpenClaw on Windows 10/11. Step-by-step instructions, prerequisites, configuration, and troubleshooting for Windows users.",
  keywords: [
    "openclaw setup windows",
    "openclaw windows installation",
    "how to install openclaw windows",
    "openclaw windows 11",
    "openclaw windows 10",
    "openclaw powershell setup",
    "openclaw cmd installation",
    "openclaw windows guide"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-setup-windows" },
  openGraph: {
    title: "OpenClaw Setup Guide for Windows",
    description: "Complete guide to installing OpenClaw on Windows. Get your AI agents running on Windows 10/11.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-setup-windows",
    type: "article",
  },
};

const prerequisites = [
  {
    requirement: "Windows 10 version 1903 or later / Windows 11",
    description: "OpenClaw requires modern Windows with PowerShell 5.1+",
    checkCommand: "Get-ComputerInfo | Select WindowsProductName, WindowsVersion",
    status: "required"
  },
  {
    requirement: "Node.js 18.0 or later",
    description: "JavaScript runtime required for OpenClaw core",
    checkCommand: "node --version",
    downloadUrl: "https://nodejs.org/",
    status: "required"
  },
  {
    requirement: "Git for Windows",
    description: "Version control system for skill management",
    checkCommand: "git --version",
    downloadUrl: "https://git-scm.com/download/win",
    status: "required"
  },
  {
    requirement: "Windows Subsystem for Linux (WSL2)",
    description: "Improves compatibility with OpenClaw skills",
    checkCommand: "wsl --version",
    installCommand: "wsl --install",
    status: "recommended"
  }
];

const installationMethods = [
  {
    method: "PowerShell Installation (Recommended)",
    description: "Fastest method using Windows PowerShell",
    difficulty: "Beginner",
    timeRequired: "5-10 minutes",
    pros: ["Quick setup", "Automatic dependencies", "Built-in error handling"],
    cons: ["Requires admin privileges"]
  },
  {
    method: "Manual Installation", 
    description: "Step-by-step manual installation process",
    difficulty: "Intermediate",
    timeRequired: "15-20 minutes", 
    pros: ["Full control", "Better understanding", "Custom configuration"],
    cons: ["More steps", "Manual dependency management"]
  },
  {
    method: "WSL2 Installation",
    description: "Install OpenClaw within Windows Subsystem for Linux",
    difficulty: "Advanced",
    timeRequired: "20-30 minutes",
    pros: ["Linux compatibility", "Better performance", "Advanced features"],
    cons: ["Complex setup", "WSL2 required"]
  }
];

const powershellSteps = [
  {
    step: 1,
    title: "Open PowerShell as Administrator",
    description: "Launch PowerShell with elevated privileges",
    commands: [
      "# Press Win + X, select 'Windows PowerShell (Admin)' or 'Terminal (Admin)'",
      "# Or press Win + R, type 'powershell', press Ctrl + Shift + Enter"
    ],
    instructions: [
      "Right-click Start button → Windows PowerShell (Admin)",
      "Accept UAC prompt when it appears",
      "Verify you see 'Administrator' in window title"
    ],
    timeRequired: "1 minute"
  },
  {
    step: 2,
    title: "Set Execution Policy",
    description: "Allow PowerShell to run installation scripts",
    commands: [
      "# Check current execution policy",
      "Get-ExecutionPolicy",
      "",
      "# Set execution policy to allow script execution",
      "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser",
      "",
      "# Confirm the change",
      "Get-ExecutionPolicy"
    ],
    timeRequired: "1 minute",
    notes: "This allows PowerShell to run signed scripts from remote sources"
  },
  {
    step: 3,
    title: "Install Prerequisites",
    description: "Download and install Node.js and Git automatically",
    commands: [
      "# Install Chocolatey package manager (if not already installed)",
      "Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))",
      "",
      "# Install Node.js and Git via Chocolatey",
      "choco install nodejs git -y",
      "",
      "# Refresh environment variables",
      "refreshenv",
      "",
      "# Verify installations",
      "node --version",
      "npm --version",
      "git --version"
    ],
    timeRequired: "3-5 minutes",
    notes: "Chocolatey simplifies Windows software installation"
  },
  {
    step: 4,
    title: "Install OpenClaw",
    description: "Install OpenClaw globally using npm",
    commands: [
      "# Install OpenClaw globally",
      "npm install -g openclaw",
      "",
      "# Verify installation",
      "openclaw --version",
      "",
      "# Check available commands",
      "openclaw help"
    ],
    timeRequired: "2-3 minutes",
    notes: "Global installation makes openclaw command available system-wide"
  },
  {
    step: 5,
    title: "Initialize and Test",
    description: "Set up workspace and test OpenClaw functionality",
    commands: [
      "# Create OpenClaw workspace directory",
      "mkdir $env:USERPROFILE\\.openclaw",
      "cd $env:USERPROFILE\\.openclaw",
      "",
      "# Initialize OpenClaw",
      "openclaw init",
      "",
      "# Start the gateway",
      "openclaw gateway start",
      "",
      "# Test with a simple agent",
      "openclaw agent create --name test-agent",
      "openclaw agent chat test-agent \"Hello from Windows!\""
    ],
    timeRequired: "2-3 minutes",
    notes: "Successful agent response confirms installation is working"
  }
];

/* const manualSteps = [
  {
    step: 1,
    title: "Download Node.js",
    description: "Download and install Node.js LTS version",
    instructions: [
      "Visit https://nodejs.org/",
      "Download Windows Installer (.msi) for LTS version",
      "Run installer with default settings",
      "Restart Command Prompt/PowerShell after installation"
    ]
  },
  {
    step: 2,
    title: "Install Git for Windows",
    description: "Download and configure Git",
    instructions: [
      "Visit https://git-scm.com/download/win", 
      "Download 64-bit Git for Windows Setup",
      "Run installer, select 'Use Git from Windows Command Prompt'",
      "Configure Git with your name and email"
    ]
  },
  {
    step: 3,
    title: "Install OpenClaw via npm",
    description: "Use Node Package Manager to install OpenClaw",
    instructions: [
      "Open Command Prompt or PowerShell as Administrator",
      "Run: npm install -g openclaw",
      "Wait for installation to complete",
      "Verify with: openclaw --version"
    ]
  }
]; */

const windowsSpecificConfig = [
  {
    setting: "Windows Defender Configuration",
    description: "Configure Windows Defender to allow OpenClaw operations",
    steps: [
      "Open Windows Security (Windows Defender)",
      "Go to Virus & threat protection",
      "Add exclusion for %USERPROFILE%\\.openclaw folder",
      "Add exclusion for Node.js installation folder"
    ],
    importance: "High - prevents false positive detections"
  },
  {
    setting: "Environment Variables",
    description: "Set up PATH and OpenClaw-specific environment variables",
    steps: [
      "Open System Properties → Environment Variables",
      "Add OPENCLAW_HOME=%USERPROFILE%\\.openclaw to User variables",
      "Add %OPENCLAW_HOME%\\bin to PATH if needed",
      "Restart Command Prompt/PowerShell"
    ],
    importance: "Medium - improves command access"
  },
  {
    setting: "Windows Terminal Setup",
    description: "Configure Windows Terminal for better OpenClaw experience",
    steps: [
      "Install Windows Terminal from Microsoft Store",
      "Set PowerShell as default profile",
      "Increase buffer size to 10,000 lines",
      "Enable UTF-8 encoding for proper character display"
    ],
    importance: "Low - enhances user experience"
  }
];

const troubleshooting = [
  {
    issue: "npm install fails with EACCES error",
    symptoms: ["Error: EACCES: permission denied", "npm ERR! code EACCES"],
    solutions: [
      "Run PowerShell/CMD as Administrator",
      "Configure npm to use different directory: npm config set prefix %USERPROFILE%\\npm",
      "Add %USERPROFILE%\\npm to PATH environment variable"
    ]
  },
  {
    issue: "PowerShell execution policy blocked",
    symptoms: ["execution of scripts is disabled", "UnauthorizedAccess"],
    solutions: [
      "Run: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser",
      "Use Command Prompt instead of PowerShell", 
      "Run specific commands with: powershell -ExecutionPolicy Bypass -Command \"...\""
    ]
  },
  {
    issue: "OpenClaw gateway won't start",
    symptoms: ["Gateway startup failed", "Port already in use", "Connection refused"],
    solutions: [
      "Check Windows Firewall - allow Node.js through firewall",
      "Kill existing Node processes: taskkill /f /im node.exe",
      "Try different port: openclaw gateway start --port 3001"
    ]
  },
  {
    issue: "Command not found: openclaw",
    symptoms: ["'openclaw' is not recognized", "command not found"],
    solutions: [
      "Restart Command Prompt/PowerShell after npm install",
      "Check npm global installation directory: npm config get prefix",
      "Add npm global path to Windows PATH environment variable"
    ]
  }
];

const wsl2Setup = [
  {
    step: "Enable WSL2",
    commands: [
      "# Enable Windows Subsystem for Linux",
      "dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart",
      "",
      "# Enable Virtual Machine Platform",
      "dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart",
      "",
      "# Restart computer, then set WSL 2 as default",
      "wsl --set-default-version 2"
    ]
  },
  {
    step: "Install Ubuntu",
    commands: [
      "# Install Ubuntu from Microsoft Store or command line",
      "wsl --install -d Ubuntu",
      "",
      "# Launch Ubuntu and create user account",
      "# Update Ubuntu packages",
      "sudo apt update && sudo apt upgrade -y"
    ]
  },
  {
    step: "Install OpenClaw in WSL2",
    commands: [
      "# Install Node.js in Ubuntu",
      "curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -",
      "sudo apt-get install -y nodejs",
      "",
      "# Install OpenClaw",
      "sudo npm install -g openclaw",
      "",
      "# Set up and test",
      "mkdir ~/.openclaw",
      "openclaw init",
      "openclaw gateway start"
    ]
  }
];

export default function OpenClawSetupWindowsPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              How to Install OpenClaw
              <br />
              <span className="text-orange">on Windows — Step by Step</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Complete installation guide for OpenClaw on Windows 10/11. Get your AI agents up and running with clear, step-by-step instructions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#methods" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Choose Installation Method
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="prerequisites" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              System Requirements
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Check these requirements before starting your OpenClaw installation
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
                        <span className="text-slate-400"># Check if installed (PowerShell):</span><br/>
                        <span>{prereq.checkCommand}</span>
                      </div>
                      {prereq.downloadUrl && (
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                          <p className="text-blue-800 text-sm">
                            📥 Download: <a href={prereq.downloadUrl} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">{prereq.downloadUrl}</a>
                          </p>
                        </div>
                      )}
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

      <section id="methods" className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Installation Methods
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Choose the installation method that best suits your experience level
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {installationMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg text-dark">{method.method}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    method.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' : 
                    method.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {method.difficulty}
                  </span>
                </div>
                
                <p className="text-muted mb-4">{method.description}</p>
                
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <span className="text-muted text-sm">Time Required: </span>
                  <span className="text-orange font-medium">{method.timeRequired}</span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-green-600">Pros:</h4>
                    <ul className="space-y-1">
                      {method.pros.map((pro, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-green-500">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-orange">Cons:</h4>
                    <ul className="space-y-1">
                      {method.cons.map((con, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-orange">•</span>
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

      <section id="powershell-method" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              PowerShell Installation (Recommended)
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              The fastest way to get OpenClaw running on Windows
            </p>
          </div>

          <div className="space-y-8">
            {powershellSteps.map((step, index) => (
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
                    
                    {step.commands && (
                      <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                        <pre className="whitespace-pre-wrap">{step.commands.join('\n')}</pre>
                      </div>
                    )}

                    {step.instructions && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-dark mb-2">Instructions:</h4>
                        <ol className="space-y-2">
                          {step.instructions.map((instruction, idx) => (
                            <li key={idx} className="text-muted text-sm flex gap-3">
                              <span className="text-orange font-mono text-xs mt-1">{idx + 1}.</span>
                              <span>{instruction}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {step.notes && (
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                        <p className="text-blue-800 text-sm font-medium">💡 Note: {step.notes}</p>
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
              Windows-Specific Configuration
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Additional Windows settings to optimize OpenClaw performance
            </p>
          </div>

          <div className="space-y-6">
            {windowsSpecificConfig.map((config, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg text-dark">{config.setting}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    config.importance === 'High' ? 'bg-red-100 text-red-700' :
                    config.importance === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {config.importance} Priority
                  </span>
                </div>
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
              Advanced: WSL2 Installation
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              For advanced users who want Linux-like OpenClaw experience on Windows
            </p>
          </div>

          <div className="space-y-6">
            {wsl2Setup.map((setup, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-4">{setup.step}</h3>
                <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
                  <pre className="whitespace-pre-wrap">{setup.commands.join('\n')}</pre>
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
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
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
                Having Windows
                <br />
                <span className="text-orange">Installation Issues?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Get expert help with OpenClaw installation on Windows. Free consultation to resolve any setup problems.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Remote Windows setup assistance
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  PowerShell and WSL2 configuration
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Troubleshooting and optimization
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Windows Setup Support</h3>
              <p className="text-white/40 text-sm mb-6">Get OpenClaw running on Windows today</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}