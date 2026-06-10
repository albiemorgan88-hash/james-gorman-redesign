import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI for Schools: Admin & Wellbeing",
  description: "How UK schools use AI for student wellbeing monitoring, admin automation, attendance tracking, and SEN support. Reduce teacher workload by 5+ hours per week.",
  keywords: [
    "ai for schools uk",
    "ai student wellbeing",
    "school admin automation",
    "ai attendance tracking school",
    "ai sen support schools",
    "teacher workload ai",
    "ai school management uk",
    "artificial intelligence education uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-for-schools-uk" },
  openGraph: {
    title: "AI for Schools: Admin & Wellbeing",
    description: "How UK schools use AI for student wellbeing, admin automation, and SEN support. Practical guide covering costs, safeguarding, and Ofsted alignment.",
    url: "https://openclawconsultant.co.uk/guides/ai-for-schools-uk",
    type: "article",
  },
};

export default function AIForSchoolsUKPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Education AI</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI for Schools: <span className="text-orange">Wellbeing, Admin, and Student Support</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              UK teachers work an average of 54 hours per week — 12 hours more than their contracted time. Much of that overtime goes on marking, data entry, report writing, and admin that never needed a qualified teacher in the first place. AI can give those hours back, whilst also supporting student wellbeing in ways that were previously impossible.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                14 min read
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
              The teaching profession is in crisis. One in three newly qualified teachers leaves within five years, citing workload as the primary reason. Meanwhile, student mental health referrals have doubled since 2019, and SEN (Special Educational Needs) caseloads are at record levels. Schools are being asked to do more with less — and something has to give.
            </p>
            
            <p className="text-muted-dark leading-relaxed mb-8">
              AI isn&apos;t going to fix education overnight. But it can take the repetitive, time-consuming admin off teachers&apos; plates, flag students who need support before they reach crisis point, and help schools use their data more effectively. This guide covers what&apos;s working in UK schools right now — practical applications with real results, not Silicon Valley promises.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">The Workload Crisis: What AI Can Address</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">5+ hrs</div>
                <div className="text-muted-dark text-sm">Saved per teacher weekly</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">Early</div>
                <div className="text-muted-dark text-sm">Wellbeing issue detection</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">30%</div>
                <div className="text-muted-dark text-sm">Reduction in admin tasks</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-navy mb-1">Ofsted</div>
                <div className="text-muted-dark text-sm">Aligned evidence gathering</div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-dark leading-relaxed">
                The DfE&apos;s own workload surveys show that teachers spend an average of 5 hours per week on data entry and administrative tasks that don&apos;t require their professional expertise. Across a school of 50 teachers, that&apos;s 250 hours per week — the equivalent of six full-time admin staff. AI can automate the bulk of this work, freeing teachers to do what they trained for: teach.
              </p>
              <p className="text-muted-dark leading-relaxed">
                Perhaps more importantly, AI can help schools spot the students who are struggling before they fall through the cracks. By analysing patterns across attendance, behaviour, academic performance, and pastoral records, AI can flag pupils who need early intervention — the kind of joined-up insight that&apos;s impossible when data lives in separate spreadsheets across different departments.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Key AI Applications for Schools</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange/5 to-blue/5 rounded-xl p-6 border border-orange/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">1. Student Wellbeing Monitoring</h3>
                <p className="text-muted-dark text-sm mb-4">
                  AI analyses patterns across multiple data sources — attendance, behaviour incidents, academic grades, pastoral notes, and even lunch uptake — to identify students showing early signs of distress. A single late arrival means nothing; a pattern of late arrivals combined with declining grades and fewer break-time social interactions tells a story that AI can spot weeks before it becomes obvious.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">How It Works:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Cross-references attendance, behaviour, and academic data</li>
                      <li>• Flags patterns that indicate declining wellbeing</li>
                      <li>• Alerts pastoral staff and form tutors with context</li>
                      <li>• Tracks intervention effectiveness over time</li>
                      <li>• Generates safeguarding-ready reports</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Impact:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Early intervention 2-4 weeks sooner than manual spotting</li>
                      <li>• Reduction in crisis-level referrals</li>
                      <li>• Pastoral staff focus time on students who need it most</li>
                      <li>• Evidence base for Ofsted wellbeing conversations</li>
                      <li>• Better coordination between year heads and pastoral team</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">2. Admin Automation and Workload Reduction</h3>
                <p className="text-muted-dark text-sm mb-4">
                  From report writing to timetable optimisation, AI takes on the admin tasks that keep teachers at school until 7pm. This isn&apos;t about replacing teachers — it&apos;s about removing the work that doesn&apos;t need a teaching qualification.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Tasks AI Can Handle:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Automated report comment generation (teacher reviews and edits)</li>
                      <li>• Parent communication drafting and translation</li>
                      <li>• Meeting minute transcription and action tracking</li>
                      <li>• Cover lesson planning when teachers are absent</li>
                      <li>• Resource and equipment booking optimisation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Time Saved:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Report writing: 3-4 hours per term per teacher</li>
                      <li>• Parent emails: 2 hours per week per form tutor</li>
                      <li>• Data entry: 1-2 hours per week per teacher</li>
                      <li>• Meeting admin: 30 minutes per meeting</li>
                      <li>• Total: 5+ hours per teacher per week</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/5 to-purple/5 rounded-xl p-6 border border-green-500/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">3. SEN and Differentiated Learning Support</h3>
                <p className="text-muted-dark text-sm mb-4">
                  Students with Special Educational Needs require individualised support that&apos;s challenging to deliver in a class of 30. AI helps SENCOs manage caseloads, generates differentiated materials, and tracks progress against EHCP (Education, Health and Care Plan) outcomes — reducing paperwork whilst improving support quality.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">SEN Support:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• EHCP progress tracking and annual review preparation</li>
                      <li>• Differentiated worksheet and resource generation</li>
                      <li>• Reading level analysis and adapted content creation</li>
                      <li>• Speech-to-text and text-to-speech for access arrangements</li>
                      <li>• Behaviour pattern analysis for early SEND identification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">SENCO Benefits:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Annual review prep time cut by 50%</li>
                      <li>• Consistent tracking across all provision areas</li>
                      <li>• Evidence-based reporting for local authority reviews</li>
                      <li>• Better identification of undiagnosed needs</li>
                      <li>• Parent communication made easier and more consistent</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple/5 to-orange/5 rounded-xl p-6 border border-purple/10">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">4. Attendance and Behaviour Analytics</h3>
                <p className="text-muted-dark text-sm mb-4">
                  Persistent absence is at record levels — over 20% of pupils in many schools. AI attendance monitoring goes beyond recording who&apos;s absent; it identifies patterns, predicts which students are likely to become persistently absent, and automates early intervention communications to parents.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Attendance AI:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Predictive modelling for persistent absence risk</li>
                      <li>• Automated first-day absence calls and messages</li>
                      <li>• Pattern detection (specific days, after holidays, etc.)</li>
                      <li>• CME (Children Missing Education) monitoring</li>
                      <li>• Automated attendance reports for governors and Ofsted</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Behaviour Management:</h4>
                    <ul className="space-y-1 text-muted-dark text-xs">
                      <li>• Incident pattern analysis across time, location, and context</li>
                      <li>• Early warning for escalating behaviour patterns</li>
                      <li>• Positive behaviour recognition and reward tracking</li>
                      <li>• Suspension and exclusion data analysis for disproportionality</li>
                      <li>• Intervention impact measurement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Costs and Funding Options</h2>
            
            <div className="bg-gradient-to-r from-blue/5 to-green-500/5 rounded-xl p-6 border border-blue/10 mb-8">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">Cost Breakdown for a Typical Secondary School</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-medium text-dark">AI Application</th>
                      <th className="text-center py-3 font-medium text-orange">Annual Cost</th>
                      <th className="text-center py-3 font-medium text-blue">Annual Saving</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-dark">
                    <tr className="border-b">
                      <td className="py-3">Wellbeing monitoring and early warning</td>
                      <td className="py-3 text-center">£2,000-£5,000</td>
                      <td className="py-3 text-center">£8,000-£15,000 (reduced referrals)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Admin automation (reports, comms, data)</td>
                      <td className="py-3 text-center">£3,000-£8,000</td>
                      <td className="py-3 text-center">£25,000-£50,000 (teacher time)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">SEN support tools</td>
                      <td className="py-3 text-center">£1,500-£4,000</td>
                      <td className="py-3 text-center">£10,000-£20,000 (SENCO time)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Attendance and behaviour analytics</td>
                      <td className="py-3 text-center">£1,500-£3,000</td>
                      <td className="py-3 text-center">£5,000-£12,000 (admin time + fines)</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Complete AI Package</td>
                      <td className="py-3 text-center font-semibold text-orange">£8,000-£20,000/yr</td>
                      <td className="py-3 text-center font-semibold text-blue">£48,000-£97,000/yr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">Funding Sources for School AI</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-dark mb-3">Government and Trust Funding:</h4>
                  <ul className="space-y-2 text-muted-dark text-sm">
                    <li>• DfE EdTech funding streams and innovation grants</li>
                    <li>• MAT central technology budgets</li>
                    <li>• Pupil Premium allocation for targeted interventions</li>
                    <li>• Recovery Premium for catch-up programmes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-3">Cost Justification:</h4>
                  <ul className="space-y-2 text-muted-dark text-sm">
                    <li>• Reduced agency staff costs through better absence management</li>
                    <li>• Lower CAMHS referral costs through early intervention</li>
                    <li>• Improved teacher retention (recruitment costs £10K+ per teacher)</li>
                    <li>• Ofsted readiness reducing costly emergency preparation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Getting Started: A Practical Roadmap</h2>
            
            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Term 1: Quick Wins</h3>
                  <div className="space-y-3 text-muted-dark text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Deploy AI-assisted report writing for end-of-term reports</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Automate first-day absence calls and parent notifications</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Set up attendance pattern monitoring and alerts</span>
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-navy mb-4 mt-8">Term 2-3: Build Out</h3>
                  <div className="space-y-3 text-muted-dark text-sm">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Implement wellbeing early warning system</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Deploy SEN tracking and EHCP automation tools</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" readOnly />
                      <span>Integrate with MIS for cross-system data analysis</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Expert Support</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange pl-4">
                      <h4 className="font-medium text-dark mb-1">AI Strategy for Schools</h4>
                      <p className="text-muted-dark text-sm"><a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas</a> helps schools and MATs implement AI that integrates with existing MIS platforms (SIMS, Arbor, Bromcom) and respects safeguarding requirements.</p>
                    </div>
                    <div className="border-l-4 border-blue pl-4">
                      <h4 className="font-medium text-dark mb-1">Parent Communication</h4>
                      <p className="text-muted-dark text-sm">Automate parent communication workflows with <a href="https://heypinchy.com" className="text-orange hover:text-orange-hover">Pinchy</a> — absence notifications, event reminders, and report distribution via WhatsApp and email.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-dark mb-1">Safeguarding First</h4>
                      <p className="text-muted-dark text-sm">All AI implementations must comply with KCSIE, DfE guidance on AI in education, and the UK GDPR Children&apos;s Code. Data stays within UK boundaries.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">AI for Schools FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Is it safe to use AI with student data, especially for younger children?</h3>
                <p className="text-muted-dark text-sm">
                  Student data safety is non-negotiable. Any AI tool used in schools must comply with UK GDPR (including the Children&apos;s Code), have a Data Protection Impact Assessment (DPIA), and store data within UK-based servers. The AI processes patterns and flags — it doesn&apos;t make decisions about children. All alerts go to trained professionals (pastoral staff, DSLs) who apply professional judgement. Schools retain full data controllership.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What does Ofsted think about schools using AI?</h3>
                <p className="text-muted-dark text-sm">
                  Ofsted hasn&apos;t published specific AI guidance for schools, but their framework values effective use of data for pupil outcomes and wellbeing. Schools using AI for attendance monitoring, wellbeing early warning, and SEN support can demonstrate proactive, data-informed decision-making — exactly what inspectors look for. The key is showing that AI supports professional judgement rather than replacing it.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Will AI replace teaching assistants or pastoral staff?</h3>
                <p className="text-muted-dark text-sm">
                  No. AI handles data processing and pattern detection — the parts of the job that involve staring at spreadsheets. Pastoral staff, TAs, and SENCOs provide the human relationships, professional judgement, and emotional support that no AI can replicate. If anything, AI makes these roles more effective by directing their time towards the students who need them most, with better information to work from.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Does AI work with our existing MIS (SIMS, Arbor, Bromcom)?</h3>
                <p className="text-muted-dark text-sm">
                  Most AI education tools integrate with major UK MIS platforms including SIMS, Arbor, Bromcom, and ScholarPack. Integration typically uses API connections or data exports — your existing data feeds the AI analytics layer without requiring you to change systems. Implementation usually takes 2-4 weeks including data mapping and testing.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">How do we get staff buy-in for AI in school?</h3>
                <p className="text-muted-dark text-sm">
                  Start with the pain point every teacher feels: report writing. When teachers see that AI can generate first-draft report comments in seconds (which they then review and personalise), buy-in follows naturally. From there, expand to attendance automation and parent communications. The key message is clear: AI handles the admin so you can focus on teaching. Run a small pilot with willing early adopters before whole-school rollout.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">What about AI and academic integrity — students using ChatGPT for homework?</h3>
                <p className="text-muted-dark text-sm">
                  That&apos;s a real concern, but it&apos;s separate from using AI as a school management tool. For academic integrity, schools need clear acceptable use policies, education about responsible AI use, and assessment methods that go beyond take-home essays. Some schools are actually teaching students to use AI effectively — a valuable life skill — whilst maintaining rigorous in-class assessment to verify understanding.
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border-light">
                <h3 className="font-semibold text-navy mb-3">Can multi-academy trusts deploy AI across all their schools?</h3>
                <p className="text-muted-dark text-sm">
                  Yes — and MATs often get the best value from AI because they can benchmark across schools, share learning, and negotiate volume pricing. Central trust teams can monitor attendance, wellbeing, and academic performance across all schools from a single dashboard. This is particularly powerful for identifying which interventions work best and sharing best practice. <a href="https://bluecanvas.ai" className="text-orange hover:text-orange-hover">Blue Canvas</a> works with MATs on trust-wide AI strategy and implementation.
                </p>
              </div>
            </div>
          </section>

        </div>
      </article>

      <section className="py-16 bg-navy">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            AI That Supports <span className="text-orange">Every Student</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a free assessment of how AI can reduce teacher workload, improve student wellbeing monitoring, and help your school use data more effectively — all while meeting safeguarding and data protection requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Your Free School AI Assessment
          </a>
        </div>
      </section>

      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-agents-for-accountants" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Accountants UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-charities" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Charities UK</h3>
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
              AI for Schools and Multi-Academy Trusts
            </h2>
            <p className="text-muted-dark text-lg">
              Book a consultation to discuss how AI can support your school&apos;s wellbeing, admin, and SEN provision — with full safeguarding compliance.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
