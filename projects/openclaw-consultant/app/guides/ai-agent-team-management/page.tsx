import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Managing AI Agent Teams: Practical Guide",
  description: "Complete guide to managing AI agent teams effectively. Team structures, performance monitoring, coordination strategies, and governance for successful AI agent operations.",
  keywords: [
    "ai agent team management",
    "ai team coordination",
    "ai agent governance",
    "managing ai agents",
    "ai team performance",
    "ai agent workflows",
    "ai team structure",
    "ai operations management"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agent-team-management" },
  openGraph: {
    title: "Managing AI Agent Teams: Practical Guide",
    description: "Master AI agent team management with proven structures, monitoring systems, and coordination strategies for high-performing AI operations.",
    url: "https://openclawconsultant.co.uk/guides/ai-agent-team-management",
    type: "article",
  },
};

export default function AIAgentTeamManagementPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">AI Team Management</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Agent <span className="text-orange">Team Management</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Master the art of managing AI agent teams with proven frameworks for coordination, performance monitoring, and governance. Learn how to build high-performing AI operations that scale with your business needs.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                16 min read
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

      <article className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-dark leading-relaxed mb-8">
              As AI agents become integral to business operations, effective team management becomes critical for success. Well-managed AI agent teams deliver 340% better performance and 67% lower operational costs compared to ad-hoc implementations.
            </p>
            
            <p className="text-muted-dark leading-relaxed mb-8">
              This practical guide provides frameworks, tools, and strategies for managing AI agent teams at scale. Learn how leading organisations structure their AI operations, monitor performance, and coordinate complex multi-agent workflows.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI Agent Team Structures</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">340%</div>
                <div className="text-muted-dark text-sm">Better team performance</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">67%</div>
                <div className="text-muted-dark text-sm">Lower operational costs</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H9v6H5V3H3v10zm0 8h8v-6H9v2H5v-2H3v6zm10 0h8V11h-2v6h-4v-6h-2v10zm0-12h8V3h-2v4h-4V3h-2v6z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">24/7</div>
                <div className="text-muted-dark text-sm">Continuous operations</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">95%</div>
                <div className="text-muted-dark text-sm">Task success rate</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Hierarchical Team Structure</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Team Roles:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• <strong>Team Lead Agent:</strong> Coordinates team activities and decisions</li>
                      <li>• <strong>Specialist Agents:</strong> Handle specific domain expertise</li>
                      <li>• <strong>Support Agents:</strong> Provide data and resource assistance</li>
                      <li>• <strong>Quality Agent:</strong> Monitors and validates team outputs</li>
                      <li>• <strong>Integration Agent:</strong> Manages external system connections</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Benefits:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Clear decision-making chains</li>
                      <li>• Reduced coordination overhead</li>
                      <li>• Specialised skill development</li>
                      <li>• Scalable management structure</li>
                      <li>• Efficient conflict resolution</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Cross-Functional Teams</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Team Composition:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• <strong>Process Expert:</strong> Understands business workflows</li>
                      <li>• <strong>Data Analyst:</strong> Processes and interprets information</li>
                      <li>• <strong>Customer Interface:</strong> Handles user interactions</li>
                      <li>• <strong>System Integrator:</strong> Connects with other tools</li>
                      <li>• <strong>Compliance Monitor:</strong> Ensures regulatory adherence</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Use Cases:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Complex business process automation</li>
                      <li>• Customer service operations</li>
                      <li>• Compliance and regulatory tasks</li>
                      <li>• Product development workflows</li>
                      <li>• Multi-system integration projects</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Swarm Intelligence Model</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Characteristics:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• <strong>Autonomous Agents:</strong> Independent decision-making</li>
                      <li>• <strong>Collective Intelligence:</strong> Shared learning and knowledge</li>
                      <li>• <strong>Adaptive Coordination:</strong> Dynamic task allocation</li>
                      <li>• <strong>Emergent Behaviour:</strong> Complex outcomes from simple rules</li>
                      <li>• <strong>Self-Organisation:</strong> Natural team formation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Applications:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Large-scale data processing</li>
                      <li>• Distributed problem-solving</li>
                      <li>• Real-time optimisation tasks</li>
                      <li>• Research and analysis projects</li>
                      <li>• Monitoring and surveillance systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Performance Monitoring & KPIs</h2>
            
            <div className="bg-surface rounded-xl p-8 border border-border mb-8">
              <h3 className="font-heading text-xl font-bold text-navy mb-6">Key Performance Metrics</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-dark mb-3">Efficiency Metrics</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 border border-border-light">
                      <h5 className="font-medium text-dark text-sm mb-1">Task Completion Rate</h5>
                      <p className="text-muted-dark text-xs">Percentage of tasks completed successfully</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-border-light">
                      <h5 className="font-medium text-dark text-sm mb-1">Processing Speed</h5>
                      <p className="text-muted-dark text-xs">Average time per task completion</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-border-light">
                      <h5 className="font-medium text-dark text-sm mb-1">Resource Utilisation</h5>
                      <p className="text-muted-dark text-xs">Compute and memory usage efficiency</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-dark mb-3">Quality Metrics</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 border border-border-light">
                      <h5 className="font-medium text-dark text-sm mb-1">Accuracy Score</h5>
                      <p className="text-muted-dark text-xs">Correctness of agent outputs</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-border-light">
                      <h5 className="font-medium text-dark text-sm mb-1">Error Rate</h5>
                      <p className="text-muted-dark text-xs">Frequency of mistakes or failures</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-border-light">
                      <h5 className="font-medium text-dark text-sm mb-1">Consistency Index</h5>
                      <p className="text-muted-dark text-xs">Reliability across similar tasks</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-dark mb-3">Collaboration Metrics</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 border border-border-light">
                      <h5 className="font-medium text-dark text-sm mb-1">Team Coordination</h5>
                      <p className="text-muted-dark text-xs">Effectiveness of multi-agent workflows</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-border-light">
                      <h5 className="font-medium text-dark text-sm mb-1">Communication Quality</h5>
                      <p className="text-muted-dark text-xs">Clarity and relevance of inter-agent messages</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-border-light">
                      <h5 className="font-medium text-dark text-sm mb-1">Conflict Resolution</h5>
                      <p className="text-muted-dark text-xs">Time to resolve disagreements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue/5 border border-blue/20 rounded-xl p-6">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">ClawRoster Integration</h3>
              <p className="text-muted-dark mb-4">
                <a href="https://clawroster.io" className="text-orange hover:text-orange-hover">ClawRoster, the digital CV platform for AI agent teams</a>, 
                provides comprehensive performance tracking and team management capabilities for complex AI operations.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-dark mb-3">Team Management Features:</h4>
                  <ul className="space-y-2 text-muted-dark text-sm">
                    <li>• Real-time performance dashboards</li>
                    <li>• Agent skill and capability tracking</li>
                    <li>• Team collaboration analytics</li>
                    <li>• Automated performance reporting</li>
                    <li>• Resource allocation optimisation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-3">Benefits for Teams:</h4>
                  <ul className="space-y-2 text-muted-dark text-sm">
                    <li>• Improved visibility into team performance</li>
                    <li>• Data-driven decision making</li>
                    <li>• Proactive issue identification</li>
                    <li>• Streamlined team coordination</li>
                    <li>• Enhanced productivity tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Team Coordination Strategies</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-border-light">
                <h3 className="font-heading text-lg font-bold text-navy mb-4">Communication Protocols</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Message Standards:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Structured message formats for consistency</li>
                      <li>• Priority levels for urgent communications</li>
                      <li>• Context sharing for informed decision-making</li>
                      <li>• Acknowledgment requirements for critical messages</li>
                      <li>• Error handling and retry mechanisms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Coordination Mechanisms:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Task assignment and delegation protocols</li>
                      <li>• Resource sharing and allocation rules</li>
                      <li>• Conflict resolution procedures</li>
                      <li>• Decision-making hierarchies</li>
                      <li>• Progress reporting standards</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-border-light">
                <h3 className="font-heading text-lg font-bold text-navy mb-4">Workflow Management</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Process Design:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Clear role definitions and responsibilities</li>
                      <li>• Sequential and parallel task orchestration</li>
                      <li>• Checkpoint and milestone tracking</li>
                      <li>• Quality gates and approval processes</li>
                      <li>• Exception handling and escalation paths</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Optimisation Techniques:</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li>• Load balancing across team members</li>
                      <li>• Dynamic task reassignment</li>
                      <li>• Performance-based task allocation</li>
                      <li>• Bottleneck identification and resolution</li>
                      <li>• Continuous workflow improvement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Implementation Best Practices</h2>
            
            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Team Setup</h3>
                  <div className="space-y-3 text-muted-dark text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Define clear team objectives and success criteria</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Establish agent roles and responsibilities</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Create communication protocols and standards</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Implement monitoring and reporting systems</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Set up governance and oversight processes</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-dark mb-3">Expert Support:</h4>
                    <div className="space-y-2 text-muted-dark text-sm">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        <span><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas AI consultancy</a> for team management strategy</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Success Factors</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-medium text-dark mb-1">Clear Objectives</h4>
                      <p className="text-muted-dark text-sm">Well-defined goals and measurable outcomes</p>
                    </div>
                    <div className="border-l-4 border-blue pl-4">
                      <h4 className="font-medium text-dark mb-1">Regular Monitoring</h4>
                      <p className="text-muted-dark text-sm">Continuous performance tracking and optimisation</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-dark mb-1">Effective Communication</h4>
                      <p className="text-muted-dark text-sm">Robust coordination and information sharing</p>
                    </div>
                    <div className="border-l-4 border-purple pl-4">
                      <h4 className="font-medium text-dark mb-1">Continuous Improvement</h4>
                      <p className="text-muted-dark text-sm">Regular review and refinement of processes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI Team Management FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What are the key challenges in managing AI agent teams?</h3>
                <p className="text-muted-dark text-sm">
                  Key challenges include coordinating multiple autonomous agents, ensuring consistent performance, managing resource allocation, handling conflicts and errors, maintaining visibility into agent activities, and scaling team operations. Effective governance, monitoring, and communication protocols address these challenges.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How many agents should be included in a typical AI team?</h3>
                <p className="text-muted-dark text-sm">
                  Optimal team size depends on task complexity and coordination requirements. Simple tasks: 3-5 agents. Complex workflows: 5-12 agents. Large-scale operations: 12-50+ agents with hierarchical structure. Start small and scale based on performance and coordination effectiveness.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What tools are essential for AI agent team management?</h3>
                <p className="text-muted-dark text-sm">
                  Essential tools include performance monitoring dashboards, communication platforms, workflow orchestration systems, resource management tools, and governance frameworks. ClawRoster provides comprehensive AI agent team management capabilities, while platforms like OpenClaw enable team deployment and coordination.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How do you measure the success of AI agent teams?</h3>
                <p className="text-muted-dark text-sm">
                  Measure success through efficiency metrics (task completion rates, processing speed), quality indicators (accuracy, consistency), collaboration effectiveness (coordination, communication), business impact (cost savings, productivity gains), and stakeholder satisfaction. Regular assessment drives continuous improvement.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What governance structures work best for AI agent teams?</h3>
                <p className="text-muted-dark text-sm">
                  Effective governance includes clear roles and responsibilities, decision-making hierarchies, performance standards, risk management protocols, compliance frameworks, and regular review processes. Balance autonomy with oversight to maintain performance while enabling innovation.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How do AI agent teams handle conflicts and disagreements?</h3>
                <p className="text-muted-dark text-sm">
                  Implement structured conflict resolution including escalation hierarchies, voting mechanisms, expert arbitration, performance-based decisions, and human oversight for complex disputes. Clear protocols and decision criteria reduce conflicts and ensure quick resolution when they occur.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Should businesses hire specialists to manage AI agent teams?</h3>
                <p className="text-muted-dark text-sm">
                  Consider specialists for complex or large-scale deployments. Internal capabilities work for simple teams, but expert guidance from consultancies like Blue Canvas AI helps with team structure design, performance optimisation, and governance frameworks. Balance internal development with external expertise.
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
            Optimise Your <span className="text-orange">AI Agent Teams</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get expert guidance on AI agent team management. I'll assess your current operations, design optimal team structures, and implement monitoring systems for peak performance.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Team Assessment
          </a>
        </div>
      </section>

      {/* Contact Form */}
      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-agents-for-customer-support" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Customer Service Automation UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-booking-automation" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Appointment Booking for Business</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-surface">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Build High-Performing AI Teams
            </h2>
            <p className="text-muted-dark text-lg">
              Book a consultation to discuss your AI agent team management requirements and develop optimal team structures.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}