import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Browser Automation Guide",
  description: "Complete guide to OpenClaw browser automation. Control Chrome, automate web tasks, scrape data, and build powerful web workflows with your AI agent.",
  keywords: [
    "openclaw browser automation",
    "openclaw chrome control",
    "openclaw web automation",
    "openclaw web scraping",
    "openclaw selenium",
    "openclaw puppeteer",
    "ai web automation",
    "openclaw browser control"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-browser-automation" },
  openGraph: {
    title: "OpenClaw Browser Automation Guide",
    description: "Master OpenClaw browser automation. Control Chrome, automate web tasks, and build powerful workflows.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-browser-automation",
    type: "article",
  },
};

const browserCapabilities = [
  {
    capability: "Page Navigation",
    description: "Navigate and interact with web pages",
    features: [
      "Open URLs and navigate between pages",
      "Handle page loading and timeouts",
      "Manage browser tabs and windows",
      "Navigate browser history"
    ],
    useCases: [
      "Automated testing workflows",
      "Data collection from multiple pages",
      "Form submissions across sites",
      "Content monitoring and tracking"
    ]
  },
  {
    capability: "Element Interaction",
    description: "Find and interact with page elements",
    features: [
      "Click buttons and links",
      "Fill forms and input fields", 
      "Select dropdown options",
      "Upload files and attachments"
    ],
    useCases: [
      "Automated form filling",
      "E-commerce interactions",
      "Social media posting",
      "File upload automation"
    ]
  },
  {
    capability: "Data Extraction",
    description: "Extract information from web pages",
    features: [
      "Scrape text content and data",
      "Extract links and media URLs",
      "Capture screenshots",
      "Parse structured data"
    ],
    useCases: [
      "Competitive analysis",
      "Lead generation",
      "Price monitoring",
      "Content aggregation"
    ]
  },
  {
    capability: "Advanced Actions",
    description: "Complex browser automation tasks",
    features: [
      "Handle JavaScript-heavy sites",
      "Manage cookies and sessions",
      "Execute custom JavaScript",
      "Handle pop-ups and alerts"
    ],
    useCases: [
      "Single Page Application testing",
      "Authentication workflows",
      "Dynamic content interaction",
      "Complex user journeys"
    ]
  }
];

const setupGuide = [
  {
    step: 1,
    title: "Install Browser Dependencies",
    duration: "10 minutes",
    description: "Set up Chrome and required dependencies",
    tasks: [
      "Install Google Chrome or Chromium",
      "Install ChromeDriver",
      "Verify browser accessibility",
      "Configure OpenClaw browser settings"
    ],
    commands: [
      "# macOS",
      "brew install --cask google-chrome",
      "brew install chromedriver",
      "",
      "# Ubuntu/Debian", 
      "wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -",
      "echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | sudo tee /etc/apt/sources.list.d/google-chrome.list",
      "sudo apt update && sudo apt install google-chrome-stable",
      "sudo apt install chromium-chromedriver"
    ]
  },
  {
    step: 2,
    title: "Configure OpenClaw Browser Skill",
    duration: "15 minutes",
    description: "Install and configure the browser automation skill",
    tasks: [
      "Install the browser automation skill",
      "Configure browser preferences",
      "Set up security and privacy options",
      "Test basic browser functionality"
    ],
    commands: [
      "openclaw skills search browser",
      "openclaw skills install browser-automation",
      "openclaw skills enable browser-automation",
      "openclaw agent add-skill your-agent browser-automation"
    ],
    config: {
      filename: "browser-config.json",
      content: `{
  "browser": {
    "type": "chrome",
    "headless": false,
    "window_size": {
      "width": 1920,
      "height": 1080
    },
    "timeout": 30,
    "user_agent": "Mozilla/5.0 (compatible; OpenClaw-Agent)",
    "options": [
      "--disable-blink-features=AutomationControlled",
      "--disable-dev-shm-usage",
      "--no-sandbox"
    ]
  }
}`
    }
  },
  {
    step: 3,
    title: "Test Browser Connection",
    duration: "5 minutes",
    description: "Verify browser automation is working",
    tasks: [
      "Launch browser instance",
      "Navigate to test page",
      "Perform basic interactions",
      "Capture screenshot for verification"
    ],
    tests: [
      {
        test: "Browser Launch Test",
        command: "openclaw browser launch",
        expected: "Browser window opens successfully"
      },
      {
        test: "Navigation Test", 
        command: "openclaw browser navigate \"https://example.com\"",
        expected: "Page loads and title displays"
      },
      {
        test: "Screenshot Test",
        command: "openclaw browser screenshot \"test.png\"",
        expected: "Screenshot file created successfully"
      }
    ]
  }
];

const automationExamples = [
  {
    category: "Data Collection & Scraping",
    description: "Extract information from websites automatically",
    examples: [
      {
        name: "Product Price Monitor",
        description: "Monitor product prices across e-commerce sites",
        workflow: [
          "Navigate to product pages",
          "Extract price information", 
          "Compare with historical data",
          "Send alerts for price changes"
        ],
        code: `{
  "name": "price-monitor",
  "schedule": "0 */6 * * *",
  "actions": [
    {
      "type": "browser-navigate",
      "url": "https://example-store.com/product/123"
    },
    {
      "type": "browser-extract",
      "selector": ".price",
      "attribute": "text",
      "variable": "current_price"
    },
    {
      "type": "compare-price",
      "current": "{{current_price}}",
      "threshold": 0.10
    },
    {
      "type": "notify-if-changed",
      "method": "email"
    }
  ]
}`,
        selectors: {
          price: ".price-current, .price, [data-price]",
          title: "h1, .product-title, [data-product-name]",
          availability: ".stock-status, .availability"
        }
      },
      {
        name: "Job Listing Scraper",
        description: "Collect job postings from career sites",
        workflow: [
          "Search job listings with filters",
          "Extract job details and requirements",
          "Save to database or spreadsheet",
          "Track new postings over time"
        ],
        code: `{
  "name": "job-scraper",
  "target": "https://jobs.example.com",
  "actions": [
    {
      "type": "browser-navigate",
      "url": "{{target}}/search?q=developer&location=remote"
    },
    {
      "type": "browser-extract-multiple",
      "selector": ".job-listing",
      "fields": {
        "title": ".job-title",
        "company": ".company-name", 
        "location": ".job-location",
        "salary": ".salary-range",
        "link": "a[href]@href"
      }
    },
    {
      "type": "save-to-database",
      "table": "job_listings"
    }
  ]
}`,
        pagination: `{
  "type": "browser-paginate",
  "next_button": ".pagination-next",
  "max_pages": 10,
  "wait_between": "2s"
}`
      }
    ]
  },
  {
    category: "Form Automation & Submissions",
    description: "Automate form filling and submissions",
    examples: [
      {
        name: "Lead Generation Forms",
        description: "Fill contact forms for lead generation",
        workflow: [
          "Navigate to target websites",
          "Find and fill contact forms",
          "Submit with business information",
          "Track submission success"
        ],
        code: `{
  "name": "contact-form-filler",
  "actions": [
    {
      "type": "browser-navigate",
      "url": "{{target_website}}/contact"
    },
    {
      "type": "browser-wait-for",
      "selector": "form[name='contact'], #contact-form"
    },
    {
      "type": "browser-fill-form",
      "fields": {
        "name": "{{business_name}}",
        "email": "{{business_email}}",
        "subject": "Partnership Inquiry", 
        "message": "{{custom_message}}"
      }
    },
    {
      "type": "browser-click",
      "selector": "button[type='submit'], .submit-btn"
    },
    {
      "type": "browser-wait-for",
      "selector": ".success-message, .thank-you",
      "timeout": 10
    }
  ]
}`,
        formHandling: {
          "text-inputs": "input[type='text'], input[type='email'], textarea",
          "dropdowns": "select, .custom-dropdown",
          "checkboxes": "input[type='checkbox']",
          "radio-buttons": "input[type='radio']"
        }
      },
      {
        name: "Application Submissions",
        description: "Automate job application submissions",
        workflow: [
          "Navigate to application pages",
          "Fill application forms with CV data",
          "Upload required documents",
          "Submit applications and track status"
        ],
        code: `{
  "name": "job-application-bot",
  "actions": [
    {
      "type": "browser-navigate",
      "url": "{{job_application_url}}"
    },
    {
      "type": "browser-fill-form",
      "fields": {
        "first_name": "{{applicant.first_name}}",
        "last_name": "{{applicant.last_name}}",
        "email": "{{applicant.email}}",
        "phone": "{{applicant.phone}}"
      }
    },
    {
      "type": "browser-upload",
      "selector": "input[type='file'][name='cv']",
      "file": "{{applicant.cv_path}}"
    },
    {
      "type": "browser-click",
      "selector": ".apply-button, #submit-application"
    }
  ]
}`
      }
    ]
  },
  {
    category: "Social Media Automation",
    description: "Automate social media interactions",
    examples: [
      {
        name: "LinkedIn Connection Bot",
        description: "Send connection requests with personalized messages",
        workflow: [
          "Search for target professionals",
          "Review profiles for relevance",
          "Send personalized connection requests",
          "Track connection acceptance rates"
        ],
        code: `{
  "name": "linkedin-connections",
  "actions": [
    {
      "type": "browser-navigate",
      "url": "https://linkedin.com/search/people"
    },
    {
      "type": "browser-fill",
      "selector": "[placeholder='Search people']",
      "value": "{{search_query}}"
    },
    {
      "type": "browser-extract-multiple",
      "selector": ".search-result",
      "limit": 10,
      "fields": {
        "name": ".name a",
        "title": ".subline",
        "connect_url": ".connect-button@href"
      }
    },
    {
      "type": "browser-click-multiple",
      "selector": ".connect-button",
      "max_clicks": 5,
      "wait_between": "3s"
    }
  ]
}`,
        ethics: [
          "Respect platform rate limits",
          "Use authentic, personalized messages",
          "Don't spam or mass-message",
          "Follow platform terms of service"
        ]
      }
    ]
  },
  {
    category: "Testing & Monitoring",
    description: "Automated testing and website monitoring",
    examples: [
      {
        name: "Website Health Monitor",
        description: "Monitor website functionality and performance",
        workflow: [
          "Test critical user journeys",
          "Check for broken links and errors",
          "Monitor page load times",
          "Alert on failures or issues"
        ],
        code: `{
  "name": "website-health-check",
  "schedule": "*/30 * * * *",
  "actions": [
    {
      "type": "browser-navigate",
      "url": "{{website_url}}",
      "timeout": 10
    },
    {
      "type": "browser-check-elements",
      "required": [
        ".header",
        ".navigation", 
        ".main-content",
        ".footer"
      ]
    },
    {
      "type": "browser-test-links",
      "selector": "a[href^='http']",
      "sample": 10
    },
    {
      "type": "browser-measure-performance",
      "metrics": ["load_time", "first_paint"]
    },
    {
      "type": "alert-on-failure",
      "threshold": 10
    }
  ]
}`
      }
    ]
  }
];

const advancedTechniques = [
  {
    technique: "Stealth Browsing",
    description: "Avoid detection by websites",
    methods: [
      "Randomize user agents and headers",
      "Use proxy rotation",
      "Implement human-like delays",
      "Handle CAPTCHAs appropriately"
    ],
    implementation: `{
  "stealth_config": {
    "user_agents": [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
    ],
    "delays": {
      "min": 1,
      "max": 3,
      "type": "random"
    },
    "proxy_rotation": true,
    "disable_images": false,
    "viewport_randomization": true
  }
}`
  },
  {
    technique: "Session Management",
    description: "Handle cookies, authentication, and sessions",
    methods: [
      "Persist cookies between sessions",
      "Handle login workflows",
      "Manage multiple accounts",
      "Store authentication tokens"
    ],
    implementation: `{
  "session_config": {
    "cookie_storage": "./cookies/",
    "authentication": {
      "type": "form",
      "login_url": "https://example.com/login",
      "username_field": "#username",
      "password_field": "#password", 
      "submit_button": "#login-btn"
    },
    "session_timeout": "30m",
    "auto_login": true
  }
}`
  },
  {
    technique: "Dynamic Content Handling",
    description: "Work with JavaScript-heavy and dynamic sites",
    methods: [
      "Wait for dynamic content to load",
      "Handle AJAX requests",
      "Execute custom JavaScript",
      "Manage WebSocket connections"
    ],
    implementation: `{
  "dynamic_handling": {
    "wait_strategies": [
      {
        "type": "element_visible",
        "selector": ".dynamic-content",
        "timeout": 15
      },
      {
        "type": "network_idle",
        "timeout": 5
      },
      {
        "type": "custom_js",
        "script": "return document.readyState === 'complete'"
      }
    ]
  }
}`
  }
];

const browserCommands = [
  {
    category: "Navigation Commands",
    commands: [
      {
        command: "openclaw browser launch",
        description: "Launch new browser instance",
        options: "--headless, --window-size=WxH"
      },
      {
        command: "openclaw browser navigate <url>",
        description: "Navigate to specific URL",
        example: "openclaw browser navigate \"https://example.com\""
      },
      {
        command: "openclaw browser back/forward",
        description: "Navigate browser history",
        example: "openclaw browser back"
      },
      {
        command: "openclaw browser refresh",
        description: "Reload current page",
        options: "--force, --ignore-cache"
      }
    ]
  },
  {
    category: "Element Interaction",
    commands: [
      {
        command: "openclaw browser click <selector>",
        description: "Click on page element",
        example: "openclaw browser click \"#submit-btn\""
      },
      {
        command: "openclaw browser fill <selector> <value>",
        description: "Fill input field with value",
        example: "openclaw browser fill \"#email\" \"user@example.com\""
      },
      {
        command: "openclaw browser select <selector> <option>",
        description: "Select dropdown option",
        example: "openclaw browser select \"#country\" \"USA\""
      },
      {
        command: "openclaw browser upload <selector> <file>",
        description: "Upload file to input",
        example: "openclaw browser upload \"#file-input\" \"./document.pdf\""
      }
    ]
  },
  {
    category: "Data Extraction",
    commands: [
      {
        command: "openclaw browser extract <selector>",
        description: "Extract text from element",
        options: "--attribute=attr, --multiple"
      },
      {
        command: "openclaw browser screenshot <filename>",
        description: "Take page screenshot",
        options: "--full-page, --element=selector"
      },
      {
        command: "openclaw browser links",
        description: "Extract all page links",
        options: "--internal-only, --external-only"
      },
      {
        command: "openclaw browser table <selector>",
        description: "Extract table data as JSON",
        example: "openclaw browser table \"#data-table\""
      }
    ]
  }
];

const troubleshooting = [
  {
    problem: "Browser Won't Launch",
    symptoms: [
      "Chrome/ChromeDriver not found errors",
      "Permission denied messages",
      "Browser crashes on startup"
    ],
    solutions: [
      "Verify Chrome installation: which google-chrome",
      "Check ChromeDriver version compatibility",
      "Add --no-sandbox flag for Linux containers",
      "Ensure correct PATH environment variables",
      "Try running with --headless mode first"
    ]
  },
  {
    problem: "Elements Not Found",
    symptoms: [
      "Selector not found errors",
      "Timeouts waiting for elements",
      "Intermittent element detection"
    ],
    solutions: [
      "Use browser dev tools to verify selectors",
      "Add explicit waits for dynamic content",
      "Check for iframes or shadow DOM",
      "Try multiple selector strategies (CSS, XPath)",
      "Wait for page load completion"
    ]
  },
  {
    problem: "Detection by Websites",
    symptoms: [
      "CAPTCHA challenges appearing",
      "IP address blocked",
      "Unusual traffic warnings"
    ],
    solutions: [
      "Implement human-like delays and patterns",
      "Rotate user agents and headers",
      "Use proxy rotation",
      "Respect robots.txt and rate limits",
      "Consider API alternatives when available"
    ]
  },
  {
    problem: "Performance Issues",
    symptoms: [
      "Slow page loading times",
      "High memory usage",
      "Browser becomes unresponsive"
    ],
    solutions: [
      "Enable headless mode for faster execution",
      "Disable images and CSS loading",
      "Close unused tabs and windows",
      "Increase browser timeout values",
      "Monitor and limit concurrent instances"
    ]
  }
];

export default function OpenClawBrowserAutomationPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw Browser
              <br />
              <span className="text-orange">Automation Guide</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Control Chrome with your AI agent. Automate web tasks, scrape data, fill forms, and build powerful browser-based workflows.
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
              Browser Automation Capabilities
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              What your OpenClaw agent can do with browser automation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {browserCapabilities.map((capability, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{capability.capability}</h3>
                <p className="text-muted mb-6">{capability.description}</p>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-green-500">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Use Cases:</h4>
                    <ul className="space-y-2">
                      {capability.useCases.map((useCase, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-2">
                          <span className="text-orange">▸</span>
                          {useCase}
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

      <section id="setup" className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Setup Guide
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Get browser automation working with OpenClaw
            </p>
          </div>

          <div className="space-y-12">
            {setupGuide.map((step, index) => (
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

                    {step.tasks && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-dark mb-3">Tasks:</h4>
                        <ul className="space-y-2">
                          {step.tasks.map((task, idx) => (
                            <li key={idx} className="text-muted text-sm flex gap-2">
                              <span className="text-orange">•</span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {step.commands && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-dark mb-3">Installation Commands:</h4>
                        <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
                          <pre className="whitespace-pre-wrap">{step.commands.join('\n')}</pre>
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

                    {step.tests && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-dark mb-3">Verification Tests:</h4>
                        <div className="space-y-3">
                          {step.tests.map((test, idx) => (
                            <div key={idx} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <h5 className="font-medium text-dark mb-2">{test.test}</h5>
                              <div className="bg-slate-900 text-green-400 p-3 rounded-md font-mono text-sm mb-2">
                                {test.command}
                              </div>
                              <p className="text-green-600 text-sm">✓ Expected: {test.expected}</p>
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
              Automation Examples
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Real-world browser automation workflows
            </p>
          </div>

          <div className="space-y-12">
            {automationExamples.map((category, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{category.category}</h3>
                <p className="text-muted mb-8">{category.description}</p>

                <div className="space-y-8">
                  {category.examples.map((example, idx) => (
                    <div key={idx} className="bg-surface rounded-lg p-6">
                      <h4 className="font-heading font-bold text-lg text-dark mb-3">{example.name}</h4>
                      <p className="text-muted mb-6">{example.description}</p>

                      <div className="mb-6">
                        <h5 className="font-semibold text-dark mb-3">Workflow:</h5>
                        <ol className="space-y-2">
                          {example.workflow.map((step, stepIdx) => (
                            <li key={stepIdx} className="text-muted text-sm flex gap-2">
                              <span className="text-orange font-mono text-xs mt-0.5">{stepIdx + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="mb-6">
                        <h5 className="font-semibold text-dark mb-3">Configuration:</h5>
                        <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-xs overflow-x-auto">
                          <pre className="whitespace-pre-wrap">{example.code}</pre>
                        </div>
                      </div>

                      {'selectors' in example && example.selectors && (
                        <div className="mb-6">
                          <h5 className="font-semibold text-dark mb-3">Common Selectors:</h5>
                          <div className="bg-slate-50 rounded-lg p-4">
                            {'selectors' in example && Object.entries(example.selectors).map(([key, selector]) => (
                              <div key={key} className="mb-2">
                                <span className="font-medium text-dark capitalize">{key.replace('_', ' ')}:</span>
                                <code className="ml-2 text-sm bg-slate-200 px-2 py-1 rounded">{selector}</code>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {'formHandling' in example && example.formHandling && (
                        <div className="mb-6">
                          <h5 className="font-semibold text-dark mb-3">Form Element Selectors:</h5>
                          <div className="bg-slate-50 rounded-lg p-4">
                            {'formHandling' in example && Object.entries(example.formHandling).map(([type, selector]) => (
                              <div key={type} className="mb-2">
                                <span className="font-medium text-dark capitalize">{type.replace('-', ' ')}:</span>
                                <code className="ml-2 text-sm bg-slate-200 px-2 py-1 rounded">{selector}</code>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {'pagination' in example && example.pagination && (
                        <div className="mb-6">
                          <h5 className="font-semibold text-dark mb-3">Pagination Handling:</h5>
                          <div className="bg-slate-900 text-green-400 p-3 rounded-md font-mono text-xs overflow-x-auto">
                            <pre className="whitespace-pre-wrap">{example.pagination}</pre>
                          </div>
                        </div>
                      )}

                      {'ethics' in example && example.ethics && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                          <h5 className="font-semibold text-yellow-800 mb-2">Ethical Considerations:</h5>
                          <ul className="space-y-1">
                            {'ethics' in example && example.ethics.map((consideration, considIdx) => (
                              <li key={considIdx} className="text-yellow-700 text-sm">• {consideration}</li>
                            ))}
                          </ul>
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

      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Advanced Techniques
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Professional browser automation strategies
            </p>
          </div>

          <div className="space-y-8">
            {advancedTechniques.map((technique, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{technique.technique}</h3>
                <p className="text-muted mb-6">{technique.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-3">Methods:</h4>
                  <ul className="space-y-2">
                    {technique.methods.map((method, idx) => (
                      <li key={idx} className="text-muted text-sm flex gap-2">
                        <span className="text-orange">•</span>
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-dark mb-3">Implementation:</h4>
                  <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-xs overflow-x-auto">
                    <pre className="whitespace-pre-wrap">{technique.implementation}</pre>
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
              Browser Commands
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Essential commands for browser automation
            </p>
          </div>

          <div className="space-y-8">
            {browserCommands.map((category, index) => (
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
                      {cmd.options && (
                        <div>
                          <h5 className="font-semibold text-dark mb-1 text-sm">Options:</h5>
                          <p className="text-muted text-sm font-mono">{cmd.options}</p>
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
              Common browser automation issues and solutions
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
                <span className="text-orange">Browser Automation?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Get expert assistance building sophisticated browser automation workflows for your business needs.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Custom automation development
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Anti-detection strategies
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Performance optimization
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Browser Automation Help</h3>
              <p className="text-white/40 text-sm mb-6">Build powerful web automation workflows</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}