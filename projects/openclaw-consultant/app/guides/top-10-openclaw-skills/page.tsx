import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Top 10 OpenClaw Skills for Business",
  description: "Discover the 10 most valuable OpenClaw skills for business automation. From SEO and lead generation to customer support and analytics - transform your operations today.",
  keywords: [
    "openclaw skills",
    "best openclaw capabilities", 
    "openclaw business automation",
    "essential openclaw skills",
    "openclaw agent capabilities",
    "business automation skills",
    "openclaw productivity tools",
    "ai agent skills"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/top-10-openclaw-skills" },
  openGraph: {
    title: "Top 10 OpenClaw Skills for Business",
    description: "Discover the 10 most valuable OpenClaw skills for business automation. From SEO to customer support.",
    url: "https://openclawconsultant.co.uk/guides/top-10-openclaw-skills",
    type: "article",
  },
};

const topSkills = [
  {
    rank: 1,
    skill: "SEO Engine",
    description: "Comprehensive SEO automation including audits, content optimization, competitor analysis, and performance monitoring",
    useCases: [
      "Daily SEO audits and technical issue detection",
      "Automated meta tag generation and optimization",
      "Competitor keyword analysis and gap identification",
      "Content brief creation for target keywords",
      "Local SEO citation management and monitoring"
    ],
    benefits: [
      "Continuous SEO monitoring without manual effort",
      "Data-driven content strategy recommendations",
      "Competitor intelligence and market positioning",
      "Technical SEO issue prevention",
      "Improved search rankings and organic traffic"
    ],
    businessTypes: ["E-commerce", "SaaS", "Local Services", "Content Publishers"],
    roiImpact: "20-40% increase in organic traffic within 6 months",
    setupComplexity: "Medium",
    integration: "Google Analytics, Search Console, Ahrefs, Webflow"
  },
  {
    rank: 2,
    skill: "Customer Support Automation",
    description: "Intelligent customer service with ticket routing, response generation, and escalation management",
    useCases: [
      "24/7 customer support with instant responses",
      "Intelligent ticket routing based on issue type",
      "Automated FAQ responses with accuracy tracking",
      "Escalation to human agents for complex issues",
      "Customer satisfaction monitoring and reporting"
    ],
    benefits: [
      "Reduced response times from hours to seconds",
      "24/7 availability improves customer satisfaction",
      "Consistent response quality and brand voice",
      "Reduced support team workload and costs",
      "Detailed analytics on support patterns"
    ],
    businessTypes: ["E-commerce", "SaaS", "Service Businesses", "Healthcare"],
    roiImpact: "50% reduction in support costs, 90% faster response times",
    setupComplexity: "Low",
    integration: "Zendesk, Intercom, Slack, WhatsApp Business"
  },
  {
    rank: 3,
    skill: "Lead Generation & Qualification",
    description: "Automated prospecting, lead scoring, and qualification workflows with CRM integration",
    useCases: [
      "Automated LinkedIn prospect identification and outreach",
      "Lead scoring based on behavior and demographics", 
      "Email sequence automation for nurturing prospects",
      "Meeting scheduling and calendar coordination",
      "CRM data enrichment and duplicate management"
    ],
    benefits: [
      "Consistent lead generation without manual effort",
      "Higher quality leads through intelligent scoring",
      "Automated nurturing improves conversion rates",
      "Sales team focuses on qualified prospects only",
      "Comprehensive lead tracking and attribution"
    ],
    businessTypes: ["B2B Services", "Consulting", "Software", "Real Estate"],
    roiImpact: "300-500% increase in qualified leads",
    setupComplexity: "Medium",
    integration: "HubSpot, Salesforce, LinkedIn Sales Navigator, Apollo"
  },
  {
    rank: 4,
    skill: "Financial Reporting & Analytics",
    description: "Automated financial data processing, reporting, and business intelligence generation",
    useCases: [
      "Daily revenue and expense reporting",
      "Cash flow forecasting and trend analysis",
      "Invoice processing and payment tracking",
      "Tax preparation and compliance monitoring",
      "Budget variance analysis and alerts"
    ],
    benefits: [
      "Real-time financial insights for decision making",
      "Reduced accounting errors and processing time",
      "Automated compliance and audit trail creation",
      "Predictive analytics for business planning",
      "Cost savings on accounting and bookkeeping"
    ],
    businessTypes: ["All Business Types", "Startups", "SMEs", "Professional Services"],
    roiImpact: "60% reduction in accounting costs, real-time insights",
    setupComplexity: "High",
    integration: "QuickBooks, Xero, Stripe, PayPal, Bank APIs"
  },
  {
    rank: 5,
    skill: "Content Creation & Marketing",
    description: "AI-powered content generation, optimization, and distribution across multiple channels",
    useCases: [
      "Blog post creation with SEO optimization",
      "Social media content generation and scheduling",
      "Email newsletter creation and personalization",
      "Video script writing and optimization",
      "Marketing copy for ads and landing pages"
    ],
    benefits: [
      "Consistent content production at scale",
      "SEO-optimized content improves rankings",
      "Brand voice consistency across channels",
      "Reduced content creation costs and time",
      "Data-driven content performance optimization"
    ],
    businessTypes: ["Marketing Agencies", "E-commerce", "SaaS", "Personal Brands"],
    roiImpact: "80% reduction in content creation time, 2x content output",
    setupComplexity: "Low",
    integration: "WordPress, Buffer, Mailchimp, Canva, YouTube"
  },
  {
    rank: 6,
    skill: "E-commerce Order Management",
    description: "Complete order lifecycle automation from processing to fulfillment and customer communication",
    useCases: [
      "Automated order processing and inventory updates",
      "Customer communication throughout order lifecycle",
      "Shipping label generation and tracking updates",
      "Return and refund processing workflows",
      "Inventory reordering and supplier management"
    ],
    benefits: [
      "Reduced order processing errors and delays",
      "Improved customer experience through communication",
      "Automated inventory management prevents stockouts",
      "Reduced manual workload for fulfillment team",
      "Better cash flow management through automation"
    ],
    businessTypes: ["E-commerce", "Retail", "Subscription Services", "Dropshipping"],
    roiImpact: "40% reduction in fulfillment costs, 95% order accuracy",
    setupComplexity: "Medium",
    integration: "Shopify, WooCommerce, Amazon, eBay, ShipStation"
  },
  {
    rank: 7,
    skill: "Social Media Management",
    description: "Comprehensive social media automation including content creation, scheduling, and engagement monitoring",
    useCases: [
      "Automated content posting across multiple platforms",
      "Social media monitoring and engagement tracking",
      "Competitor social media analysis and insights",
      "Influencer identification and outreach automation",
      "Social media ROI tracking and reporting"
    ],
    benefits: [
      "Consistent social media presence without daily management",
      "Improved engagement through optimal posting times",
      "Competitive intelligence for strategy optimization",
      "Automated community management and responses",
      "Comprehensive social media analytics and insights"
    ],
    businessTypes: ["Restaurants", "Retail", "Personal Brands", "Local Services"],
    roiImpact: "3x social media engagement, 50% time savings",
    setupComplexity: "Low",
    integration: "Facebook, Instagram, Twitter, LinkedIn, TikTok"
  },
  {
    rank: 8,
    skill: "Project Management Automation",
    description: "Intelligent project tracking, task automation, and team coordination workflows",
    useCases: [
      "Automated task creation and assignment based on project templates",
      "Progress tracking and milestone monitoring",
      "Team communication and status update automation",
      "Resource allocation and capacity planning",
      "Project reporting and client communication"
    ],
    benefits: [
      "Improved project delivery times and success rates",
      "Reduced project management overhead",
      "Better resource utilization and planning",
      "Consistent project communication and updates",
      "Data-driven project optimization insights"
    ],
    businessTypes: ["Agencies", "Consulting", "Software Development", "Construction"],
    roiImpact: "25% improvement in project delivery times",
    setupComplexity: "Medium",
    integration: "Asana, Monday.com, Trello, Slack, Microsoft Teams"
  },
  {
    rank: 9,
    skill: "Website Health Monitoring",
    description: "Continuous monitoring of website performance, security, and SEO health with automated alerting",
    useCases: [
      "24/7 website uptime monitoring with instant alerts",
      "Page speed monitoring and optimization recommendations",
      "Security vulnerability scanning and reporting",
      "SSL certificate expiry tracking and renewal alerts",
      "Broken link detection and SEO issue identification"
    ],
    benefits: [
      "Prevented revenue loss from website downtime",
      "Improved user experience through performance optimization",
      "Enhanced security through proactive monitoring",
      "Better SEO performance through technical health",
      "Reduced IT support costs and emergency fixes"
    ],
    businessTypes: ["E-commerce", "SaaS", "Service Businesses", "Media Companies"],
    roiImpact: "99.9% uptime, 30% improvement in page speed",
    setupComplexity: "Low",
    integration: "CloudFlare, Google PageSpeed, Security scanners, SSL providers"
  },
  {
    rank: 10,
    skill: "Email Marketing Automation",
    description: "Advanced email marketing with segmentation, personalization, and behavioral trigger automation",
    useCases: [
      "Welcome series and onboarding email sequences",
      "Behavioral trigger emails based on user actions",
      "Segmented email campaigns based on customer data",
      "Email performance optimization through A/B testing",
      "Lead nurturing and re-engagement campaigns"
    ],
    benefits: [
      "Higher email engagement rates through personalization",
      "Automated lead nurturing improves conversion rates",
      "Reduced manual email campaign management",
      "Better customer retention through targeted messaging",
      "Comprehensive email marketing analytics and insights"
    ],
    businessTypes: ["E-commerce", "SaaS", "Education", "Professional Services"],
    roiImpact: "40% increase in email open rates, 25% boost in conversions",
    setupComplexity: "Low",
    integration: "Mailchimp, ConvertKit, ActiveCampaign, HubSpot"
  }
];

const skillCategories = [
  {
    category: "Marketing & Growth",
    skills: ["SEO Engine", "Lead Generation & Qualification", "Content Creation & Marketing", "Social Media Management", "Email Marketing Automation"],
    description: "Drive business growth through automated marketing and customer acquisition",
    primaryBenefit: "Increased revenue and reduced customer acquisition costs"
  },
  {
    category: "Operations & Efficiency",
    skills: ["Customer Support Automation", "E-commerce Order Management", "Project Management Automation", "Website Health Monitoring"],
    description: "Streamline business operations and reduce manual workload",
    primaryBenefit: "Improved efficiency and reduced operational costs"
  },
  {
    category: "Analytics & Intelligence",
    skills: ["Financial Reporting & Analytics"],
    description: "Data-driven insights for better business decision making",
    primaryBenefit: "Better decision making through real-time insights"
  }
];

const implementationGuide = {
  beginner: {
    phase: "Start Here (Months 1-2)",
    skills: ["Customer Support Automation", "Social Media Management", "Email Marketing Automation"],
    reasoning: "Low complexity, immediate impact, easy to measure ROI",
    expectedRoi: "200-400%",
    timeToValue: "2-4 weeks"
  },
  intermediate: {
    phase: "Build Momentum (Months 3-6)",
    skills: ["SEO Engine", "Content Creation & Marketing", "Website Health Monitoring"],
    reasoning: "Medium complexity, significant long-term value, compound benefits",
    expectedRoi: "300-600%", 
    timeToValue: "6-12 weeks"
  },
  advanced: {
    phase: "Scale & Optimize (Months 6+)",
    skills: ["Lead Generation & Qualification", "Financial Reporting & Analytics", "E-commerce Order Management", "Project Management Automation"],
    reasoning: "High complexity, maximum impact, business transformation",
    expectedRoi: "500-1000%",
    timeToValue: "12-24 weeks"
  }
};

const successStories = [
  {
    business: "Digital Marketing Agency",
    skillsUsed: ["SEO Engine", "Lead Generation", "Project Management", "Content Creation"],
    challenge: "Manual SEO audits taking 40+ hours per month, inconsistent lead generation, project delays",
    results: [
      "90% reduction in SEO audit time (40hrs → 4hrs)",
      "5x increase in qualified leads through automation",
      "25% improvement in project delivery times",
      "£8,000/month cost savings in manual labor"
    ],
    timeframe: "6 months implementation"
  },
  {
    business: "E-commerce Retailer",
    skillsUsed: ["E-commerce Order Management", "Customer Support", "Email Marketing", "Website Monitoring"],
    challenge: "Order processing errors, slow customer support, manual email campaigns, frequent site issues",
    results: [
      "99.5% order accuracy (up from 92%)",
      "Response time reduced from 8 hours to 30 seconds",
      "40% increase in email conversion rates",
      "99.9% website uptime achieved"
    ],
    timeframe: "4 months implementation"
  },
  {
    business: "Professional Services Firm",
    skillsUsed: ["Financial Reporting", "Lead Generation", "Project Management", "Content Creation"],
    challenge: "Delayed financial reports, inconsistent marketing, project tracking issues, content bottlenecks",
    results: [
      "Daily financial reports (was monthly)",
      "400% increase in qualified leads",
      "30% reduction in project overruns",
      "10x content production capacity"
    ],
    timeframe: "8 months implementation"
  }
];

const costBenefitAnalysis = [
  {
    skillTier: "Essential (3 skills)",
    setupCost: "£3,000-£6,000",
    monthlyCost: "£300-£600",
    expectedSavings: "£2,000-£5,000/month",
    roiTimeline: "1-2 months",
    suitableFor: "Small businesses, startups, solo entrepreneurs"
  },
  {
    skillTier: "Professional (6 skills)",
    setupCost: "£6,000-£12,000", 
    monthlyCost: "£600-£1,200",
    expectedSavings: "£5,000-£12,000/month",
    roiTimeline: "2-3 months",
    suitableFor: "Growing businesses, agencies, established SMEs"
  },
  {
    skillTier: "Enterprise (10 skills)",
    setupCost: "£10,000-£20,000",
    monthlyCost: "£1,000-£2,000", 
    expectedSavings: "£10,000-£25,000/month",
    roiTimeline: "2-4 months",
    suitableFor: "Large businesses, complex operations, multiple departments"
  }
];

export default function Top10OpenClawSkillsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Essential Business Skills Guide</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Top 10 OpenClaw Skills
              <br />
              <span className="text-orange">Every Business Should Use</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Discover the most valuable OpenClaw skills for business automation. From SEO and lead generation to customer support and analytics - transform your operations today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#skills"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Explore Top Skills
              </a>
              <a
                href="/guides"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                ← All Guides
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Overview */}
      <section id="skills" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-8">
              The Most Valuable OpenClaw Skills for Business
            </h2>
            <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-6">
              <p>
                After analyzing hundreds of OpenClaw implementations across different industries, these 10 skills consistently deliver the highest ROI and business impact. They're ranked by value, ease of implementation, and universal applicability across business types.
              </p>
              <p>
                Each skill is designed to solve real business challenges while providing measurable results. Whether you're a startup looking to automate basic operations or an enterprise seeking sophisticated workflow automation, these skills form the foundation of any successful OpenClaw deployment.
              </p>
            </div>
          </div>

          {/* Skill Categories Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card text-center">
                <div className="text-3xl mb-4">
                  {index === 0 ? "📈" : index === 1 ? "⚙️" : "📊"}
                </div>
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{category.category}</h3>
                <p className="text-muted text-sm mb-4">{category.description}</p>
                <div className="border-l-4 border-orange pl-4 text-left">
                  <p className="text-dark font-medium text-sm">{category.primaryBenefit}</p>
                </div>
                <div className="mt-4">
                  <p className="text-muted text-xs mb-2">Includes {category.skills.length} skills:</p>
                  <div className="text-xs text-orange">
                    {category.skills.slice(0, 3).join(", ")}
                    {category.skills.length > 3 && "..."}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top 10 Skills List */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              The Complete Top 10 List
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Detailed breakdown of each skill with use cases, benefits, and implementation guidance.
            </p>
          </div>

          <div className="space-y-12">
            {topSkills.map((skill, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                {/* Skill Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="bg-orange text-white font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    #{skill.rank}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-2xl text-dark mb-2">{skill.skill}</h3>
                    <p className="text-muted text-lg leading-relaxed mb-4">{skill.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-muted">Setup Complexity:</span>
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                          skill.setupComplexity === 'Low' ? 'bg-green-100 text-green-700' :
                          skill.setupComplexity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {skill.setupComplexity}
                        </span>
                      </div>
                      <div className="md:col-span-3">
                        <span className="text-muted">Business Types:</span>
                        <span className="text-dark font-medium ml-2">{skill.businessTypes.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skill Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Use Cases */}
                  <div>
                    <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                      <span className="text-blue-500">💡</span> Key Use Cases
                    </h4>
                    <ul className="space-y-2">
                      {skill.useCases.map((useCase, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-3">
                          <span className="text-orange mt-0.5">▸</span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                      <span className="text-green-500">✨</span> Business Benefits
                    </h4>
                    <ul className="space-y-2">
                      {skill.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-muted text-sm flex gap-3">
                          <span className="text-green-500 mt-0.5">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ROI & Integration */}
                  <div>
                    <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                      <span className="text-orange">📈</span> Impact & Integration
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-orange/10 p-4 rounded-lg">
                        <div className="font-medium text-dark text-sm mb-1">Expected ROI Impact:</div>
                        <div className="text-orange font-semibold text-sm">{skill.roiImpact}</div>
                      </div>
                      <div>
                        <div className="font-medium text-dark text-sm mb-2">Key Integrations:</div>
                        <div className="text-muted text-xs leading-relaxed">{skill.integration}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Implementation Roadmap: Start to Scale
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              Strategic approach to implementing OpenClaw skills based on complexity and business impact.
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(implementationGuide).map(([, guide], index) => (
              <div key={index} className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-orange text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                      <h3 className="font-heading font-bold text-xl text-white">{guide.phase}</h3>
                      <div className="flex gap-4 text-sm">
                        <span className="text-green-400">ROI: {guide.expectedRoi}</span>
                        <span className="text-orange">Time to Value: {guide.timeToValue}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-white mb-3">Recommended Skills:</h4>
                        <ul className="space-y-2">
                          {guide.skills.map((skill, idx) => (
                            <li key={idx} className="text-white/80 text-sm flex gap-3">
                              <span className="text-orange">●</span>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-3">Why This Phase:</h4>
                        <p className="text-white/60 text-sm leading-relaxed">{guide.reasoning}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/[0.03] border border-white/[0.06] rounded-box p-8 text-center">
            <h3 className="font-heading font-bold text-xl text-white mb-4">Pro Tip: Start Small, Scale Fast</h3>
            <p className="text-white/60 text-sm max-w-[600px] mx-auto leading-relaxed">
              Don't try to implement all 10 skills at once. Start with 2-3 high-impact, low-complexity skills to build confidence and demonstrate ROI. Use the success to justify investment in more advanced capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real Business Success Stories
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              How businesses transformed their operations using these top OpenClaw skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-4">{story.business}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark text-sm mb-2">Skills Implemented:</h4>
                  <div className="flex flex-wrap gap-2">
                    {story.skillsUsed.map((skill, idx) => (
                      <span key={idx} className="bg-orange/10 text-orange px-2 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-dark text-sm mb-2">Challenge:</h4>
                  <p className="text-muted text-sm leading-relaxed">{story.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-dark text-sm mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {story.results.map((result, idx) => (
                      <li key={idx} className="text-green-600 text-sm flex gap-2">
                        <span className="mt-0.5">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <span className="text-muted text-xs">{story.timeframe}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost-Benefit Analysis */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Investment Tiers & Expected Returns
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Clear cost breakdown and ROI expectations for different levels of OpenClaw skill implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {costBenefitAnalysis.map((tier, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">{tier.skillTier}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted text-sm">Setup Investment:</span>
                    <span className="font-semibold text-dark text-sm">{tier.setupCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted text-sm">Monthly Operating:</span>
                    <span className="font-semibold text-dark text-sm">{tier.monthlyCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted text-sm">Expected Savings:</span>
                    <span className="font-semibold text-green-600 text-sm">{tier.expectedSavings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted text-sm">ROI Timeline:</span>
                    <span className="font-semibold text-orange text-sm">{tier.roiTimeline}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-dark text-sm mb-2">Best For:</h4>
                  <p className="text-muted text-sm">{tier.suitableFor}</p>
                </div>

                <div className="mt-6">
                  <a
                    href="#contact"
                    className={`block text-center px-6 py-3 rounded-btn font-semibold text-sm transition-all ${
                      index === 1 
                        ? "bg-orange text-white hover:bg-orange-hover shadow-glow-orange" 
                        : "bg-white border border-orange text-orange hover:bg-orange hover:text-white"
                    }`}
                  >
                    {index === 1 ? "Most Popular Choice" : "Get Started"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="bg-surface rounded-box p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              Ready to Implement These Skills?
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-[600px] mx-auto">
              Get a customized implementation plan showing which skills will deliver the biggest impact for your specific business. Free consultation and ROI analysis included.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-heading font-bold text-dark mb-2">Skill Prioritization</h3>
                <p className="text-muted text-sm">Identify which skills to implement first based on your business</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-3">📊</div>
                <h3 className="font-heading font-bold text-dark mb-2">Custom ROI Analysis</h3>
                <p className="text-muted text-sm">See projected savings and returns for your specific situation</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-3">🚀</div>
                <h3 className="font-heading font-bold text-dark mb-2">Implementation Roadmap</h3>
                <p className="text-muted text-sm">Step-by-step plan with timeline and milestones</p>
              </div>
            </div>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-orange text-white px-10 py-4 rounded-btn font-bold text-lg hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-xl"
            >
              Get Your Custom Skills Assessment →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      
      {/* Related Guides */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-customer-service-automation-uk" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Customer Service Automation UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-appointment-booking" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Appointment Booking for Business</h3>
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
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Skills Assessment
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Discover Your Perfect
                <br />
                <span className="text-orange">Skill Combination</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to identify which OpenClaw skills will deliver the biggest impact for your business. Get a customized implementation plan and ROI projections.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🎯</span>
                  <span>Skill prioritization based on your business needs</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">💰</span>
                  <span>ROI projections and cost-benefit analysis</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📋</span>
                  <span>Step-by-step implementation roadmap</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Skills Assessment Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Discover your optimal OpenClaw skills combination</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}