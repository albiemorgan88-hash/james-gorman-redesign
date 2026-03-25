import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "The Complete Guide to OpenClaw Skills — Install, Create, Manage (2026)",
  description: "Master OpenClaw skills: installation, creation, and management. Learn to build custom skills, use the skill marketplace, and optimize agent capabilities.",
  keywords: [
    "openclaw skills guide",
    "openclaw skill development",
    "create openclaw skills",
    "openclaw skill marketplace",
    "openclaw agent skills",
    "custom openclaw skills",
    "openclaw skill installation",
    "openclaw skill management"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-skills-guide" },
  openGraph: {
    title: "The Complete Guide to OpenClaw Skills — Install, Create, Manage (2026)",
    description: "Master OpenClaw skills development and management. Complete guide to building custom agent capabilities.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-skills-guide",
    type: "article",
  },
};

const skillCategories = [
  {
    category: "Communication & Messaging",
    description: "Skills for interacting across platforms",
    skills: ["Email automation", "Social media posting", "SMS/WhatsApp", "Discord/Telegram bots", "Slack integration"],
    difficulty: "Beginner to Intermediate"
  },
  {
    category: "Data & Analytics",
    description: "Data processing and analysis capabilities", 
    skills: ["Web scraping", "Database queries", "Report generation", "API integrations", "Data visualization"],
    difficulty: "Intermediate to Advanced"
  },
  {
    category: "Business Operations",
    description: "Workflow automation and business processes",
    skills: ["CRM management", "Invoice generation", "Calendar scheduling", "Document processing", "Project management"],
    difficulty: "Intermediate"
  },
  {
    category: "Development & DevOps",
    description: "Technical and development-focused skills",
    skills: ["Code deployment", "Server monitoring", "Database backups", "CI/CD pipelines", "Issue tracking"],
    difficulty: "Advanced"
  }
];

const installationMethods = [
  {
    method: "Official Marketplace",
    description: "Install verified skills from OpenClaw marketplace",
    commands: [
      "# Browse available skills",
      "openclaw skills browse",
      "",
      "# Search for specific skills",
      "openclaw skills search email",
      "",
      "# Install a skill",
      "openclaw skills install skill-name",
      "",
      "# List installed skills",
      "openclaw skills list"
    ],
    pros: ["Verified and tested", "Easy installation", "Automatic updates"],
    cons: ["Limited customization", "May have usage costs"]
  },
  {
    method: "GitHub/Git Repositories", 
    description: "Install skills from Git repositories",
    commands: [
      "# Install from GitHub",
      "openclaw skills install --git https://github.com/user/openclaw-skill",
      "",
      "# Install specific branch/version",
      "openclaw skills install --git https://github.com/user/skill --branch main",
      "",
      "# Install from local directory",
      "openclaw skills install --local ./my-custom-skill"
    ],
    pros: ["Full source access", "Community contributions", "Free to use"],
    cons: ["No verification", "Manual updates", "Potential security risks"]
  },
  {
    method: "Custom Development",
    description: "Build your own skills from scratch",
    commands: [
      "# Create new skill template",
      "openclaw skills create my-skill",
      "",
      "# Skill development structure:",
      "# my-skill/",
      "#   ├── skill.json (metadata)",
      "#   ├── main.js (entry point)", 
      "#   ├── README.md",
      "#   └── package.json"
    ],
    pros: ["Complete control", "Custom functionality", "IP ownership"],
    cons: ["Requires development skills", "Time-intensive", "Maintenance responsibility"]
  }
];

const skillDevelopment = [
  {
    step: 1,
    title: "Initialize Skill Project",
    description: "Create the basic skill structure",
    commands: [
      "# Create new skill",
      "openclaw skills create weather-checker",
      "",
      "# Navigate to skill directory",
      "cd weather-checker",
      "",
      "# Initialize npm project",
      "npm init -y"
    ],
    files: [
      "skill.json - Skill metadata and configuration",
      "main.js - Main skill entry point", 
      "README.md - Documentation and usage",
      "package.json - Node.js dependencies"
    ]
  },
  {
    step: 2,
    title: "Define Skill Metadata",
    description: "Configure skill information and capabilities",
    code: {
      filename: "skill.json",
      content: `{
  "name": "weather-checker",
  "version": "1.0.0",
  "description": "Check weather conditions for any location",
  "author": "Your Name",
  "capabilities": ["weather", "location"],
  "permissions": ["internet"],
  "dependencies": {
    "axios": "^1.0.0"
  },
  "commands": {
    "check-weather": {
      "description": "Get weather for location",
      "parameters": {
        "location": "string"
      }
    }
  }
}`
    }
  },
  {
    step: 3,
    title: "Implement Skill Logic",
    description: "Write the main skill functionality",
    code: {
      filename: "main.js",
      content: `const axios = require('axios');

class WeatherSkill {
  async initialize() {
    this.apiKey = process.env.WEATHER_API_KEY;
    if (!this.apiKey) {
      throw new Error('Weather API key required');
    }
  }

  async checkWeather(location) {
    try {
      const response = await axios.get(
        \`https://api.openweathermap.org/data/2.5/weather?q=\${location}&appid=\${this.apiKey}&units=metric\`
      );
      
      const weather = response.data;
      return {
        location: weather.name,
        temperature: weather.main.temp,
        description: weather.weather[0].description,
        humidity: weather.main.humidity
      };
    } catch (error) {
      throw new Error(\`Weather check failed: \${error.message}\`);
    }
  }
}

module.exports = WeatherSkill;`
    }
  },
  {
    step: 4,
    title: "Test and Package Skill",
    description: "Test functionality and prepare for deployment",
    commands: [
      "# Test skill locally",
      "openclaw skills test weather-checker",
      "",
      "# Package skill for distribution",
      "openclaw skills package weather-checker",
      "",
      "# Install locally for testing",
      "openclaw skills install --local ."
    ]
  }
];

const managementCommands = [
  {
    category: "Installation & Updates",
    commands: [
      { command: "openclaw skills list", description: "Show all installed skills" },
      { command: "openclaw skills update", description: "Update all skills to latest versions" },
      { command: "openclaw skills update skill-name", description: "Update specific skill" },
      { command: "openclaw skills uninstall skill-name", description: "Remove a skill" }
    ]
  },
  {
    category: "Configuration & Testing",
    commands: [
      { command: "openclaw skills config skill-name", description: "Configure skill settings" },
      { command: "openclaw skills test skill-name", description: "Test skill functionality" },
      { command: "openclaw skills logs skill-name", description: "View skill execution logs" },
      { command: "openclaw skills status", description: "Check status of all skills" }
    ]
  },
  {
    category: "Development & Publishing",
    commands: [
      { command: "openclaw skills create skill-name", description: "Create new skill template" },
      { command: "openclaw skills package skill-name", description: "Package skill for distribution" },
      { command: "openclaw skills publish skill-name", description: "Publish to marketplace" },
      { command: "openclaw skills validate skill-name", description: "Validate skill code and metadata" }
    ]
  }
];

const bestPractices = [
  {
    practice: "Security & Permissions",
    guidelines: [
      "Request only necessary permissions",
      "Validate all user inputs",
      "Secure API keys in environment variables",
      "Implement rate limiting for external APIs"
    ]
  },
  {
    practice: "Error Handling",
    guidelines: [
      "Provide meaningful error messages",
      "Implement retry logic for network requests",
      "Log errors for debugging",
      "Graceful degradation for failures"
    ]
  },
  {
    practice: "Performance",
    guidelines: [
      "Cache frequently used data",
      "Optimize for fast execution",
      "Minimize external dependencies",
      "Profile skill performance"
    ]
  },
  {
    practice: "Documentation",
    guidelines: [
      "Clear README with usage examples",
      "Document all configuration options",
      "Provide troubleshooting guide",
      "Include version changelog"
    ]
  }
];

const troubleshooting = [
  {
    issue: "Skill Installation Failed",
    symptoms: ["Download errors", "Dependency conflicts", "Permission denied"],
    solutions: [
      "Check internet connection and skill source",
      "Resolve dependency conflicts: npm update", 
      "Ensure proper permissions for skill directory",
      "Clear skill cache: openclaw skills cache clear"
    ]
  },
  {
    issue: "Skill Not Executing",
    symptoms: ["Command not recognized", "Skill timeout", "No response"],
    solutions: [
      "Verify skill is properly installed and enabled",
      "Check skill logs for errors",
      "Validate skill permissions and dependencies",
      "Test skill in isolation"
    ]
  },
  {
    issue: "API Key or Configuration Issues",
    symptoms: ["Authentication errors", "Invalid API responses"],
    solutions: [
      "Verify API keys are correctly set",
      "Check environment variable configuration",
      "Validate API endpoint URLs",
      "Test API access outside of skill"
    ]
  }
];

export default function OpenClawSkillsGuidePage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              The Complete Guide to
              <br />
              <span className="text-orange">OpenClaw Skills</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Master OpenClaw skills: installation, creation, and management. Build custom agent capabilities and extend OpenClaw functionality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#categories" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Explore Skills
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Skill Categories
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              OpenClaw skills are organized into categories based on functionality
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{category.category}</h3>
                <p className="text-muted mb-4">{category.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-dark mb-2">Popular Skills:</h4>
                  <ul className="space-y-1">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-muted text-sm flex gap-2">
                        <span className="text-orange">▸</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <span className="text-muted text-sm">Difficulty: </span>
                  <span className="text-orange font-medium">{category.difficulty}</span>
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
              Skill Installation Methods
            </h2>
          </div>

          <div className="space-y-8">
            {installationMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{method.method}</h3>
                <p className="text-muted mb-6">{method.description}</p>
                
                <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-sm mb-6 overflow-x-auto">
                  <pre className="whitespace-pre-wrap">{method.commands.join('\n')}</pre>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
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
                    <h4 className="font-semibold text-red-600 mb-2">Cons:</h4>
                    <ul className="space-y-1">
                      {method.cons.map((con, idx) => (
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

      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Custom Skill Development
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Step-by-step guide to building your own OpenClaw skills
            </p>
          </div>

          <div className="space-y-8">
            {skillDevelopment.map((step, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <div className="flex items-start gap-6">
                  <div className="bg-orange text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-dark mb-3">{step.title}</h3>
                    <p className="text-muted mb-6">{step.description}</p>
                    
                    {step.commands && (
                      <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                        <pre className="whitespace-pre-wrap">{step.commands.join('\n')}</pre>
                      </div>
                    )}

                    {step.files && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-dark mb-2">Files Created:</h4>
                        <ul className="space-y-1">
                          {step.files.map((file, idx) => (
                            <li key={idx} className="text-muted text-sm flex gap-2">
                              <span className="text-orange">▸</span>
                              {file}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {step.code && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-dark mb-2">{step.code.filename}:</h4>
                        <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-xs overflow-x-auto">
                          <pre className="whitespace-pre-wrap">{step.code.content}</pre>
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

      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Skill Management Commands
            </h2>
          </div>

          <div className="space-y-8">
            {managementCommands.map((category, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-4">{category.category}</h3>
                
                <div className="space-y-3">
                  {category.commands.map((cmd, idx) => (
                    <div key={idx} className="flex flex-col lg:flex-row lg:items-center gap-4 border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                      <code className="bg-slate-900 text-green-400 px-3 py-2 rounded font-mono text-sm lg:w-1/2">
                        {cmd.command}
                      </code>
                      <span className="text-muted text-sm lg:w-1/2">{cmd.description}</span>
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
              Development Best Practices
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-4">{practice.practice}</h3>
                
                <ul className="space-y-3">
                  {practice.guidelines.map((guideline, idx) => (
                    <li key={idx} className="text-muted text-sm flex gap-3">
                      <span className="text-orange mt-0.5">▸</span>
                      {guideline}
                    </li>
                  ))}
                </ul>
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
                Need Custom Skill
                <br />
                <span className="text-orange">Development?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Get expert help building custom OpenClaw skills. From simple automation to complex integrations, we develop skills that fit your exact needs.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Custom skill development
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  API integrations and workflows
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Testing and deployment
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Custom Skill Development</h3>
              <p className="text-white/40 text-sm mb-6">Build exactly what your agents need</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}