import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw WhatsApp Setup Guide",
  description: "Complete guide to connecting OpenClaw with WhatsApp Business API. Set up AI agents for customer support, automation, and business messaging workflows.",
  keywords: [
    "openclaw whatsapp setup",
    "openclaw whatsapp business",
    "whatsapp ai bot openclaw",
    "whatsapp business api openclaw",
    "openclaw whatsapp integration",
    "whatsapp automation openclaw",
    "whatsapp chatbot openclaw",
    "business whatsapp automation"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-setup-whatsapp" },
  openGraph: {
    title: "OpenClaw WhatsApp Setup Guide",
    description: "Complete guide to setting up OpenClaw with WhatsApp Business API for automated customer support and messaging workflows.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-setup-whatsapp",
    type: "article",
  },
};

const setupMethods = [
  {
    method: "WhatsApp Business API (Official)",
    description: "Enterprise-grade solution for businesses",
    requirements: ["Meta Business Account", "WhatsApp Business API access", "Webhook endpoint"],
    pros: ["Full automation", "Rich media support", "Analytics", "No device dependency"],
    cons: ["Complex setup", "Approval required", "Higher costs"],
    suitableFor: "Medium to large businesses with high message volumes"
  },
  {
    method: "WhatsApp Web Integration",
    description: "Browser-based WhatsApp automation",
    requirements: ["WhatsApp account", "Chrome/Firefox browser", "Stable internet"],
    pros: ["Quick setup", "No API approval", "Free to use", "Personal account compatible"],
    cons: ["Device dependency", "Limited features", "Potential ToS issues"],
    suitableFor: "Small businesses and personal use"
  },
  {
    method: "Third-Party WhatsApp Services",
    description: "Services like Twilio, 360Dialog, or MessageBird",
    requirements: ["Third-party account", "API credentials", "Monthly subscription"],
    pros: ["Managed infrastructure", "Compliance handled", "Quick approval"],
    cons: ["Ongoing costs", "Vendor dependency", "Limited customization"],
    suitableFor: "Businesses wanting managed WhatsApp solutions"
  }
];

const businessApiSetup = [
  {
    step: 1,
    title: "Create Meta Business Account",
    description: "Set up Facebook Business Manager account",
    actions: [
      "Go to business.facebook.com",
      "Create new business account or use existing",
      "Verify business information and documents",
      "Add WhatsApp Business Account in Business Manager"
    ],
    timeRequired: "30-60 minutes",
    notes: "Business verification can take 1-3 business days"
  },
  {
    step: 2,
    title: "Apply for WhatsApp Business API",
    description: "Request access to WhatsApp Business API",
    actions: [
      "Navigate to WhatsApp Business API section",
      "Complete application with business details",
      "Submit required documentation",
      "Wait for Meta approval (typically 7-14 days)"
    ],
    timeRequired: "7-14 days",
    notes: "Approval times vary. Provide accurate business information to avoid delays"
  },
  {
    step: 3,
    title: "Set Up Webhook Endpoint",
    description: "Configure webhook for OpenClaw integration",
    commands: [
      "# Create webhook endpoint in OpenClaw",
      "openclaw webhook create whatsapp --port 8080",
      "",
      "# Configure webhook URL in Meta Developer Console",
      "# Webhook URL: https://your-domain.com/webhook/whatsapp",
      "# Verify token: your-verification-token"
    ],
    timeRequired: "15-30 minutes",
    notes: "Webhook must be publicly accessible and use HTTPS"
  },
  {
    step: 4,
    title: "Install and Configure OpenClaw WhatsApp Plugin",
    description: "Set up OpenClaw to handle WhatsApp messages",
    commands: [
      "# Install WhatsApp plugin",
      "openclaw plugin install whatsapp-business",
      "",
      "# Configure API credentials",
      "openclaw config set whatsapp.phone_number_id YOUR_PHONE_NUMBER_ID",
      "openclaw config set whatsapp.access_token YOUR_ACCESS_TOKEN",
      "openclaw config set whatsapp.webhook_verify_token YOUR_VERIFY_TOKEN"
    ],
    timeRequired: "10-15 minutes",
    notes: "Get credentials from Meta Developer Console after API approval"
  }
];

const webIntegrationSteps = [
  {
    step: 1,
    title: "Install WhatsApp Web Plugin",
    description: "Set up browser-based WhatsApp integration",
    commands: [
      "# Install WhatsApp Web plugin",
      "openclaw plugin install whatsapp-web",
      "",
      "# Install required browser automation",
      "openclaw plugin install puppeteer"
    ],
    timeRequired: "5 minutes"
  },
  {
    step: 2,
    title: "Configure Browser Session",
    description: "Set up automated browser session for WhatsApp Web",
    commands: [
      "# Start WhatsApp Web session",
      "openclaw whatsapp-web start",
      "",
      "# Scan QR code with your phone",
      "# Session will be saved for future use"
    ],
    timeRequired: "5 minutes"
  },
  {
    step: 3,
    title: "Test Integration",
    description: "Verify WhatsApp Web integration is working",
    commands: [
      "# Send test message",
      "openclaw whatsapp-web send --to \"+1234567890\" --message \"Test from OpenClaw\"",
      "",
      "# Check session status",
      "openclaw whatsapp-web status"
    ],
    timeRequired: "2 minutes"
  }
];

const automationFeatures = [
  {
    feature: "Customer Support Automation",
    description: "Automated responses to common customer inquiries",
    capabilities: [
      "FAQ responses",
      "Order status checks",
      "Appointment scheduling",
      "Issue routing to human agents"
    ],
    implementation: "Set up agent with customer service skills and knowledge base integration"
  },
  {
    feature: "Lead Generation & Qualification",
    description: "Capture and qualify leads through WhatsApp conversations",
    capabilities: [
      "Lead capture forms",
      "Qualification questionnaires",
      "CRM integration",
      "Follow-up sequences"
    ],
    implementation: "Configure agent with lead qualification logic and CRM API connections"
  },
  {
    feature: "Order & Booking Management", 
    description: "Handle orders and bookings through WhatsApp",
    capabilities: [
      "Product catalogs",
      "Order placement",
      "Payment processing",
      "Booking confirmations"
    ],
    implementation: "Integrate with e-commerce platforms and payment gateways"
  },
  {
    feature: "Broadcast & Notifications",
    description: "Send automated messages to customer lists",
    capabilities: [
      "Promotional campaigns",
      "Order updates",
      "Appointment reminders",
      "Personalized content"
    ],
    implementation: "Set up scheduled messaging with customer segmentation"
  }
];

const complianceConsiderations = [
  {
    aspect: "WhatsApp Business Policy Compliance",
    requirements: [
      "Obtain explicit opt-in from customers",
      "Provide clear opt-out mechanisms",
      "Respect 24-hour messaging window",
      "Use approved message templates for notifications"
    ],
    risks: "Account suspension, API access revocation"
  },
  {
    aspect: "Data Protection & Privacy",
    requirements: [
      "Secure storage of customer data",
      "GDPR/CCPA compliance for data processing",
      "Regular data retention review",
      "Encryption of sensitive information"
    ],
    risks: "Legal penalties, customer trust loss"
  },
  {
    aspect: "Message Content Guidelines",
    requirements: [
      "No spam or unsolicited messages",
      "Professional and appropriate content",
      "Accurate business information",
      "Clear identification as automated messages"
    ],
    risks: "Account restrictions, reduced message delivery"
  }
];

const troubleshooting = [
  {
    issue: "WhatsApp Business API Approval Delayed",
    symptoms: ["Application under review for weeks", "Requests for additional documentation"],
    solutions: [
      "Ensure business documentation is complete and accurate",
      "Provide clear business use case description",
      "Contact Meta Business Support for status update",
      "Consider using approved BSP (Business Solution Provider)"
    ]
  },
  {
    issue: "Webhook Not Receiving Messages",
    symptoms: ["No incoming message events", "Webhook verification failed"],
    solutions: [
      "Check webhook URL is publicly accessible",
      "Verify HTTPS certificate is valid",
      "Confirm webhook verification token matches",
      "Check firewall and security group settings"
    ]
  },
  {
    issue: "Messages Not Being Delivered",
    symptoms: ["Sent messages don't reach recipients", "Delivery failures"],
    solutions: [
      "Verify phone numbers are in correct format (+country code)",
      "Check message template approval status",
      "Ensure 24-hour messaging window compliance",
      "Review WhatsApp Business Account health status"
    ]
  },
  {
    issue: "WhatsApp Web Session Expired",
    symptoms: ["QR code appears repeatedly", "Session disconnected"],
    solutions: [
      "Re-scan QR code with phone",
      "Ensure phone has stable internet connection",
      "Keep phone connected to internet",
      "Use Business API for more stable connection"
    ]
  }
];

/*
const bestPractices = [
  {
    category: "Message Strategy",
    practices: [
      "Respond to customer messages within 1 hour during business hours",
      "Use personalization to make messages more engaging",
      "Keep messages concise and actionable",
      "Include clear next steps in every interaction"
    ]
  },
  {
    category: "Automation Balance",
    practices: [
      "Always provide option to speak with human agent",
      "Use automation for simple, repetitive tasks",
      "Escalate complex issues to human support",
      "Monitor automation performance and adjust as needed"
    ]
  },
  {
    category: "Customer Experience",
    practices: [
      "Set clear expectations about automated responses",
      "Provide business hours and response time information", 
      "Use rich media (images, videos) to enhance communication",
      "Regularly update and improve automated responses"
    ]
  }
];
*/

export default function OpenClawWhatsAppSetupPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw WhatsApp Setup
              <br />
              <span className="text-orange">Everything You Need to Know</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Complete guide to connecting OpenClaw with WhatsApp Business API. Automate customer support, sales, and marketing through WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#methods" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Choose Setup Method
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="methods" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              WhatsApp Integration Methods
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Choose the integration method that best fits your business needs
            </p>
          </div>

          <div className="space-y-8">
            {setupMethods.map((method, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{method.method}</h3>
                <p className="text-muted mb-6">{method.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {method.requirements.map((req, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-3">
                          <span className="text-orange">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Suitable For:</h4>
                    <p className="text-muted text-sm">{method.suitableFor}</p>
                  </div>
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

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              WhatsApp Business API Setup
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Official Meta Business API integration for enterprise use
            </p>
          </div>

          <div className="space-y-8">
            {businessApiSetup.map((step, index) => (
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
                      <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                        <pre className="whitespace-pre-wrap">{step.commands.join('\n')}</pre>
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

      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              WhatsApp Web Integration
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Quick setup for smaller businesses using WhatsApp Web
            </p>
          </div>

          <div className="space-y-6">
            {webIntegrationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <div className="flex items-start gap-6">
                  <div className="bg-orange text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <h3 className="font-heading font-bold text-lg text-dark">{step.title}</h3>
                      <span className="text-orange text-sm font-medium">{step.timeRequired}</span>
                    </div>
                    <p className="text-muted mb-4">{step.description}</p>
                    
                    <div className="bg-slate-900 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
                      <pre className="whitespace-pre-wrap">{step.commands.join('\n')}</pre>
                    </div>
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
              Automation Features & Use Cases
            </h2>
          </div>

          <div className="space-y-8">
            {automationFeatures.map((feature, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{feature.feature}</h3>
                <p className="text-muted mb-6">{feature.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Key Capabilities:</h4>
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
                    <h4 className="font-semibold text-dark mb-3">Implementation:</h4>
                    <p className="text-muted text-sm">{feature.implementation}</p>
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
              Compliance & Best Practices
            </h2>
          </div>

          <div className="space-y-6">
            {complianceConsiderations.map((item, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{item.aspect}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {item.requirements.map((req, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-3">
                          <span className="text-orange">▸</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">Non-compliance Risks:</h4>
                    <p className="text-muted text-sm">{item.risks}</p>
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

      
      {/* Related Guides */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-windows" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Windows</h3>
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
                Need WhatsApp Business
                <br />
                <span className="text-orange">API Setup Help?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Get expert assistance with WhatsApp Business API approval, integration, and automation setup. Full compliance support included.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  WhatsApp Business API application
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Custom automation development
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Compliance and policy guidance
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">WhatsApp Setup Support</h3>
              <p className="text-white/40 text-sm mb-6">Get your WhatsApp automation running with OpenClaw</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}