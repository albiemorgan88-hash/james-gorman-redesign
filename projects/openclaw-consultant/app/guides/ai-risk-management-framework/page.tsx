import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Building an AI Risk Management Framework | OpenClaw",
  description: "Comprehensive AI risk management framework for businesses. Risk assessment, mitigation strategies, monitoring systems, and governance structures for responsible AI deployment.",
  keywords: [
    "ai risk management framework",
    "ai risk assessment",
    "ai governance",
    "algorithmic risk management",
    "ai compliance framework",
    "business ai risk",
    "ai security risks",
    "responsible ai framework"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-risk-management-framework" },
  openGraph: {
    title: "Building an AI Risk Management Framework | OpenClaw",
    description: "Build comprehensive AI risk management frameworks. Assessment methodologies, mitigation strategies, and governance structures for safe AI deployment.",
    url: "https://openclawconsultant.co.uk/guides/ai-risk-management-framework",
    type: "article",
  },
};

const riskCategories = [
  {
    category: "Algorithmic & Model Risks",
    severity: "High",
    frequency: "Medium",
    risks: [
      "Model bias and discrimination",
      "Inaccurate predictions and false positives/negatives",
      "Model drift and performance degradation",
      "Adversarial attacks and model poisoning",
      "Overfitting and poor generalisation"
    ],
    mitigation: [
      "Diverse training datasets and bias testing",
      "Robust model validation and testing protocols",
      "Continuous performance monitoring",
      "Adversarial testing and defence mechanisms",
      "Regular model retraining and updates"
    ],
    monitoring: [
      "Prediction accuracy metrics",
      "Bias detection across demographics",
      "Model performance dashboards",
      "Adversarial detection systems"
    ]
  },
  {
    category: "Data & Privacy Risks",
    severity: "High", 
    frequency: "Medium",
    risks: [
      "Data breaches and unauthorised access",
      "Privacy violations and GDPR non-compliance",
      "Data quality issues and corruption",
      "Data poisoning and manipulation",
      "Inadequate data governance"
    ],
    mitigation: [
      "End-to-end encryption and access controls",
      "Privacy by design implementation",
      "Data quality monitoring and validation",
      "Secure data handling procedures",
      "Comprehensive data governance framework"
    ],
    monitoring: [
      "Data access logs and anomaly detection",
      "Privacy compliance metrics",
      "Data quality scorecards",
      "Security incident tracking"
    ]
  },
  {
    category: "Operational & Technical Risks",
    severity: "Medium",
    frequency: "High",
    risks: [
      "System failures and downtime",
      "Integration and compatibility issues",
      "Scalability and performance problems",
      "Vendor lock-in and dependency risks",
      "Technical debt and maintenance challenges"
    ],
    mitigation: [
      "Redundancy and failover systems",
      "Thorough integration testing",
      "Performance monitoring and capacity planning",
      "Multi-vendor strategies and standards adoption",
      "Regular system maintenance and updates"
    ],
    monitoring: [
      "System uptime and availability metrics",
      "Performance and latency monitoring",
      "Integration health checks",
      "Vendor performance tracking"
    ]
  },
  {
    category: "Regulatory & Compliance Risks",
    severity: "High",
    frequency: "Low",
    risks: [
      "Regulatory non-compliance and penalties",
      "Changes in regulatory requirements",
      "Industry standards violations",
      "Audit findings and enforcement actions",
      "Cross-border compliance challenges"
    ],
    mitigation: [
      "Comprehensive compliance frameworks",
      "Regular regulatory monitoring",
      "Industry standards adherence",
      "Proactive regulatory engagement",
      "Legal expert consultation"
    ],
    monitoring: [
      "Compliance audit results",
      "Regulatory change tracking",
      "Standards compliance metrics",
      "Legal and regulatory updates"
    ]
  }
];

export default function AIRiskManagementFrameworkPage() {
  return (
    <>
      {/* Article Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Risk Management</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Risk <span className="text-orange">Management</span> Framework
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Build comprehensive risk management frameworks for AI systems. Strategic approaches to identifying, assessing, and mitigating AI risks while enabling responsible innovation and business value creation.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                19 min read
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                Updated April 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Effective AI risk management isn't about avoiding all risks—it's about understanding, assessing, and managing them intelligently to unlock AI's transformative potential while protecting your business and stakeholders. As AI becomes mission-critical, robust risk frameworks become competitive advantages.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              This comprehensive guide provides business leaders with practical frameworks for building AI risk management capabilities that balance innovation with responsibility. From risk identification methodologies to monitoring systems, you'll learn proven approaches used by successful AI-first organisations.
            </p>
          </div>

          {/* Risk Framework Overview */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI Risk Management Categories</h2>
            
            <div className="space-y-6">
              {riskCategories.map((category, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <h3 className="font-heading text-xl font-bold text-navy">{category.category}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      category.severity === 'High' ? 'bg-red-100 text-red-800' :
                      category.severity === 'Medium' ? 'bg-orange/10 text-orange' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {category.severity} Severity
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      category.frequency === 'High' ? 'bg-red-100 text-red-800' :
                      category.frequency === 'Medium' ? 'bg-orange/10 text-orange' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {category.frequency} Frequency
                    </span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Key Risks:</h4>
                      <ul className="space-y-2">
                        {category.risks.map((risk, j) => (
                          <li key={j} className="flex items-start gap-2 text-slate-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Mitigation Strategies:</h4>
                      <ul className="space-y-2">
                        {category.mitigation.map((mitigation, j) => (
                          <li key={j} className="flex items-start gap-2 text-slate-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                            {mitigation}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Monitoring & KPIs:</h4>
                      <ul className="space-y-2">
                        {category.monitoring.map((monitor, j) => (
                          <li key={j} className="flex items-start gap-2 text-slate-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-blue rounded-full mt-2 flex-shrink-0" />
                            {monitor}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Risk Assessment Methodology */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI Risk Assessment Methodology</h2>
            
            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10 mb-8">
              <h3 className="font-heading text-xl font-bold text-navy mb-6">5-Step Risk Assessment Process</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Risk Identification</h4>
                    <p className="text-slate-600 text-sm mb-3">Systematically identify potential risks across all AI system components, processes, and stakeholders.</p>
                    <div className="bg-white rounded-lg p-4 border border-slate-200">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium text-slate-800 mb-2">Methods:</h5>
                          <ul className="space-y-1 text-slate-600">
                            <li>• Stakeholder workshops and interviews</li>
                            <li>• Risk taxonomy and checklists</li>
                            <li>• Historical incident analysis</li>
                            <li>• Industry benchmarking</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-slate-800 mb-2">Outputs:</h5>
                          <ul className="space-y-1 text-slate-600">
                            <li>• Comprehensive risk register</li>
                            <li>• Risk categorisation framework</li>
                            <li>• Stakeholder impact mapping</li>
                            <li>• Risk scenario descriptions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Risk Analysis</h4>
                    <p className="text-slate-600 text-sm mb-3">Analyse the likelihood and impact of identified risks to understand their significance.</p>
                    <div className="bg-white rounded-lg p-4 border border-slate-200">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium text-slate-800 mb-2">Likelihood Factors:</h5>
                          <ul className="space-y-1 text-slate-600">
                            <li>• Data quality and availability</li>
                            <li>• Model complexity and maturity</li>
                            <li>• Control effectiveness</li>
                            <li>• Historical occurrence rates</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-slate-800 mb-2">Impact Dimensions:</h5>
                          <ul className="space-y-1 text-slate-600">
                            <li>• Financial losses and costs</li>
                            <li>• Operational disruption</li>
                            <li>• Reputational damage</li>
                            <li>• Regulatory and legal consequences</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Risk Evaluation</h4>
                    <p className="text-slate-600 text-sm mb-3">Evaluate risks against risk appetite and tolerance levels to prioritise management efforts.</p>
                    <div className="bg-white rounded-lg p-4 border border-slate-200">
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="bg-red-50 rounded-lg p-3 text-center">
                          <h5 className="font-medium text-red-800 mb-1">Critical</h5>
                          <p className="text-red-700 text-xs">Immediate action required</p>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-3 text-center">
                          <h5 className="font-medium text-orange-800 mb-1">High</h5>
                          <p className="text-orange-700 text-xs">Action plan within 30 days</p>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-3 text-center">
                          <h5 className="font-medium text-yellow-800 mb-1">Medium</h5>
                          <p className="text-yellow-700 text-xs">Monitor and manage</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Risk Treatment</h4>
                    <p className="text-slate-600 text-sm mb-3">Develop and implement appropriate risk treatment strategies based on evaluation results.</p>
                    <div className="bg-white rounded-lg p-4 border border-slate-200">
                      <div className="grid md:grid-cols-4 gap-3 text-sm">
                        <div className="text-center">
                          <h5 className="font-medium text-slate-800 mb-1">Avoid</h5>
                          <p className="text-slate-600 text-xs">Eliminate the risk source</p>
                        </div>
                        <div className="text-center">
                          <h5 className="font-medium text-slate-800 mb-1">Mitigate</h5>
                          <p className="text-slate-600 text-xs">Reduce likelihood/impact</p>
                        </div>
                        <div className="text-center">
                          <h5 className="font-medium text-slate-800 mb-1">Transfer</h5>
                          <p className="text-slate-600 text-xs">Share with third parties</p>
                        </div>
                        <div className="text-center">
                          <h5 className="font-medium text-slate-800 mb-1">Accept</h5>
                          <p className="text-slate-600 text-xs">Monitor within tolerance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Monitoring & Review</h4>
                    <p className="text-slate-600 text-sm mb-3">Continuously monitor risk levels and review the effectiveness of risk management measures.</p>
                    <div className="bg-white rounded-lg p-4 border border-slate-200">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium text-slate-800 mb-2">Monitoring Activities:</h5>
                          <ul className="space-y-1 text-slate-600">
                            <li>• Real-time risk dashboards</li>
                            <li>• Automated alert systems</li>
                            <li>• Regular risk assessments</li>
                            <li>• Incident tracking and analysis</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-slate-800 mb-2">Review Frequency:</h5>
                          <ul className="space-y-1 text-slate-600">
                            <li>• Weekly: operational metrics</li>
                            <li>• Monthly: risk register updates</li>
                            <li>• Quarterly: comprehensive review</li>
                            <li>• Annually: framework assessment</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Risk Monitoring Framework */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Risk Monitoring & Measurement</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-heading text-lg font-bold text-navy mb-4">Key Risk Indicators (KRIs)</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-medium text-slate-800 mb-1">Model Performance</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Prediction accuracy degradation</li>
                      <li>• False positive/negative rates</li>
                      <li>• Model drift indicators</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-orange pl-4">
                    <h4 className="font-medium text-slate-800 mb-1">Data Quality</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Data completeness scores</li>
                      <li>• Schema drift detection</li>
                      <li>• Anomaly detection rates</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-blue pl-4">
                    <h4 className="font-medium text-slate-800 mb-1">System Health</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• System availability metrics</li>
                      <li>• Response time monitoring</li>
                      <li>• Error rate tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-heading text-lg font-bold text-navy mb-4">Risk Dashboard Components</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-slate-200">
                    <h4 className="font-medium text-slate-800 mb-2">Executive Summary</h4>
                    <p className="text-slate-600 text-sm">High-level risk status, trends, and critical alerts for senior management</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-slate-200">
                    <h4 className="font-medium text-slate-800 mb-2">Risk Heat Map</h4>
                    <p className="text-slate-600 text-sm">Visual representation of risk likelihood vs. impact across all categories</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-slate-200">
                    <h4 className="font-medium text-slate-800 mb-2">Trend Analysis</h4>
                    <p className="text-slate-600 text-sm">Historical risk patterns, emerging trends, and predictive indicators</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-slate-200">
                    <h4 className="font-medium text-slate-800 mb-2">Action Tracking</h4>
                    <p className="text-slate-600 text-sm">Status of risk mitigation actions, owners, and completion timelines</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Guide */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Framework Implementation Guide</h2>
            
            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Getting Started</h3>
                  <div className="space-y-3">
                    <a href="/guides/enterprise-ai-deployment-uk" className="block text-orange hover:text-orange-hover transition-colors font-medium">
                      → Enterprise AI Deployment Strategy
                    </a>
                    <a href="/guides/ai-governance-compliance-uk" className="block text-orange hover:text-orange-hover transition-colors font-medium">
                      → AI Governance & Compliance Framework
                    </a>
                    <a href="/guides/measuring-ai-roi-uk-business" className="block text-orange hover:text-orange-hover transition-colors font-medium">
                      → Measuring AI ROI and Value
                    </a>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Expert Support:</h4>
                    <div className="space-y-2 text-slate-600 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas AI consultancy</a> for risk framework development</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span><a href="https://clawroster.io" className="text-orange hover:text-orange-hover">ClawRoster</a> for AI team risk management</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Implementation Checklist</h3>
                  <div className="space-y-3 text-slate-600 text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Define risk appetite and tolerance levels</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Establish risk governance structure</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Conduct comprehensive risk assessment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Develop risk monitoring systems</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Create incident response procedures</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Train staff on risk management</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Establish regular review processes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Risk Management FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What are the most critical AI risks that businesses should prioritise?</h3>
                <p className="text-slate-600 text-sm">
                  Most critical risks include algorithmic bias and discrimination, data breaches and privacy violations, regulatory non-compliance, model performance degradation, and operational system failures. Prioritise based on potential impact, likelihood, and your specific business context and risk tolerance.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How often should AI risk assessments be conducted?</h3>
                <p className="text-slate-600 text-sm">
                  Conduct comprehensive risk assessments annually, with quarterly reviews for high-risk systems. Monitor key risk indicators continuously through automated systems. Trigger additional assessments when introducing new AI systems, changing business processes, or following incidents.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What key metrics should be tracked to monitor AI risks effectively?</h3>
                <p className="text-slate-600 text-sm">
                  Track model performance metrics (accuracy, bias indicators), data quality scores, system availability, compliance metrics, incident frequency, response times, and business impact measures. Establish thresholds for each metric that trigger alerts and corrective actions.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How can businesses balance AI innovation with risk management?</h3>
                <p className="text-slate-600 text-sm">
                  Balance innovation with risk through risk-based approaches that match controls to risk levels, pilot programmes for high-risk innovations, clear risk appetite statements, rapid iteration with safety guardrails, and continuous monitoring that enables quick adjustments.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">What role does leadership play in AI risk management?</h3>
                <p className="text-slate-600 text-sm">
                  Leadership must set risk appetite, provide resources and governance oversight, champion risk-aware culture, make risk-informed decisions, and ensure accountability. Board-level involvement is essential for establishing risk strategy and monitoring effectiveness.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">Should businesses use external expertise for AI risk management?</h3>
                <p className="text-slate-600 text-sm">
                  External expertise provides valuable perspective on industry best practices, regulatory requirements, and emerging risks. Consider consultancies like Blue Canvas AI for framework development, technical specialists for implementation, and ongoing advisory support for complex risk challenges.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-navy mb-3">How do AI risks differ from traditional technology risks?</h3>
                <p className="text-slate-600 text-sm">
                  AI risks include unique elements like algorithmic bias, model interpretability challenges, data-driven decision impacts, continuous learning effects, and stakeholder trust considerations. Traditional risk management approaches need adaptation to address AI's probabilistic nature and potential for unintended consequences.
                </p>
              </div>
            </div>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Build Your <span className="text-orange">AI Risk Framework</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a comprehensive AI risk assessment and framework development plan. I'll analyse your AI risks, design appropriate controls, and help you build monitoring systems that enable safe innovation.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Risk Assessment
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Develop Your AI Risk Strategy
            </h2>
            <p className="text-slate-600 text-lg">
              Book a consultation to assess your AI risks and develop comprehensive risk management frameworks tailored to your business.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}