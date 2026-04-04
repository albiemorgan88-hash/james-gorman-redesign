import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Healthcare: Patient Admin and Appointment Management",
  description: "How AI agents automate healthcare administration — appointment scheduling, patient onboarding, referral management, and NHS compliance. Designed for UK clinics, GP practices, and hospitals.",
  keywords: [
    "ai agents healthcare",
    "healthcare automation uk",
    "ai appointment scheduling nhs",
    "ai patient admin",
    "ai for gp practices",
    "healthcare ai agents",
    "nhs automation",
    "ai referral management"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-for-healthcare" },
  openGraph: {
    title: "AI Agents for Healthcare: Patient Admin and Appointment Management",
    description: "How AI agents automate healthcare administration — appointment scheduling, patient onboarding, referral management, and NHS compliance.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-for-healthcare",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Appointment Scheduling",
    timeSpent: "25-40 hours per week for a mid-size practice",
    timeSaved: "85% reduction in scheduling admin",
    automations: [
      "Online booking with intelligent slot matching based on appointment type and clinician",
      "Automated reminders via SMS, email, and WhatsApp — reducing DNAs by up to 40%",
      "Cancellation management with automatic backfilling from the waiting list",
      "Multi-location scheduling across clinic sites with travel time awareness"
    ],
    impact: "Fewer DNAs, fuller clinics, happier reception staff"
  },
  {
    area: "Patient Onboarding",
    timeSpent: "15-20 minutes per new patient (manual form processing)",
    timeSaved: "90% time reduction per registration",
    automations: [
      "Digital pre-registration forms completed before the patient arrives",
      "Automated NHS number verification and demographic data validation",
      "Medical history intake with structured data extraction from free text",
      "Consent form generation and e-signature with audit trail"
    ],
    impact: "Patients registered in minutes, not days"
  },
  {
    area: "Referral Management",
    timeSpent: "10-15 hours per week on referral processing",
    timeSaved: "75% automation possible",
    automations: [
      "E-referral (e-RS) processing with automated form completion from clinical notes",
      "Referral triage based on clinical priority and pathway guidelines",
      "Status tracking with automated updates to referring clinicians and patients",
      "Waiting list management with predicted wait time communication"
    ],
    impact: "Faster referrals, better patient communication, compliance met"
  },
  {
    area: "Clinical Administration",
    timeSpent: "Clinicians spend 2+ hours daily on admin tasks",
    timeSaved: "60% of clinical admin automated",
    automations: [
      "Post-consultation letter generation from clinical notes",
      "Prescription repeat management and medication review flagging",
      "Coding support — automated Read/SNOMED code suggestions from notes",
      "Audit data collection and quality reporting for CQC/QOF"
    ],
    impact: "Clinicians spend time on patients, not paperwork"
  }
];

const useCases = [
  {
    useCase: "DNA Reduction Programme",
    problem: "A GP practice with 12,000 patients loses 180 appointment slots per month to did-not-attends (DNAs). At £30 per appointment, that's £65,000 per year in wasted capacity — plus longer wait times for patients who do attend",
    solution: "A Scheduling Agent sends intelligent reminders at optimal times (48 hours and 2 hours before). A Rebooking Agent offers easy rescheduling via text reply. A Backfill Agent automatically offers cancelled slots to patients on the waiting list. A Pattern Agent identifies serial DNA patients for targeted intervention",
    implementation: "Integrate with your clinical system (EMIS, SystmOne, Vision). The agents manage the entire reminder and rebooking workflow, only escalating to reception for complex cases",
    benefits: ["DNA rate reduced from 8% to 3%", "120+ appointments recovered per month", "£50,000+ annual capacity recovered", "Patient access improved with same resources"]
  },
  {
    useCase: "Automated Triage and Signposting",
    problem: "Reception staff triage calls without clinical training, leading to inappropriate appointments, missed urgent cases, and overwhelmed A&E departments receiving patients who could have been seen in primary care",
    solution: "A Triage Agent uses validated clinical algorithms (based on NHS Pathways) to assess patient symptoms via a digital form or phone transcript. It recommends the appropriate pathway — urgent appointment, routine GP, pharmacy, self-care, or 111/A&E. A Booking Agent schedules appropriate appointments based on the triage outcome",
    implementation: "Patients access triage via the practice website, phone line (with speech-to-text), or NHS App integration. The agent provides clinically validated recommendations with clear safety netting, and all assessments are logged for clinical review",
    benefits: ["Appropriate appointments matched to clinical need", "Urgent cases identified faster", "30% reduction in unnecessary GP appointments", "Reception staff freed from clinical decision-making"]
  },
  {
    useCase: "QOF and Compliance Automation",
    problem: "Achieving QOF targets requires tracking thousands of patients across dozens of indicators — blood pressure reviews, diabetic checks, cervical screening, immunisations. Practices leave QOF income on the table because they can't keep on top of recall management",
    solution: "A QOF Agent monitors your clinical system for patients due for reviews, sends recall invitations via patients' preferred channel, books appointments, and tracks completion. A Reporting Agent generates real-time QOF dashboards showing achievement against targets",
    implementation: "Connect to your clinical system's API. The agent runs daily scans against QOF indicator criteria, manages recall campaigns, and provides weekly reports to the practice manager",
    benefits: ["QOF income maximised — typically £15,000-£30,000 extra per year", "Patient care improved through proactive reviews", "Practice manager freed from manual recall management", "CQC evidence generated automatically"]
  }
];

const roiExample = {
  practiceSize: "GP practice, 3 partners, 12,000 patients, Northern Ireland",
  currentCosts: "3 reception staff (£72,000/year), 180 DNAs/month costing £65,000/year, QOF income shortfall of £20,000/year, referral delays averaging 5 days, clinicians spending 2hr/day on admin",
  aiImplementation: "AI agents for scheduling, triage, referrals, recalls, and clinical admin support",
  savings: "Reception team redeployed (1 FTE saved: £24,000/year), DNAs reduced (£50,000/year recovered), QOF income recovered (£20,000/year), clinician time freed (equivalent £40,000/year in capacity)",
  totalSaving: "£134,000/year",
  roi: "1,600% ROI within first year"
};

const faqs = [
  {
    question: "Is AI safe for healthcare?",
    answer: "AI agents in healthcare administration handle admin, not clinical decisions. They schedule appointments, process forms, send reminders, and manage referrals — tasks that don't require clinical judgement. For any task touching clinical decision-making (triage, for example), agents use validated clinical algorithms and always include safety netting and human oversight. The key distinction: AI handles the admin so clinicians can focus on clinical care."
  },
  {
    question: "How does AI comply with NHS data standards?",
    answer: "Healthcare AI agents must comply with NHS Digital's Data Security and Protection Toolkit (DSPT), the UK GDPR, the common law duty of confidentiality, and Caldicott principles. This means data is encrypted, access is role-based, processing has a lawful basis, and full audit trails exist. Well-designed agents actually make compliance easier because every data access is logged automatically — something manual processes rarely achieve."
  },
  {
    question: "Will AI replace reception staff?",
    answer: "No. AI handles the repetitive admin that buries reception teams — appointment confirmations, form processing, recall letters, basic queries about opening times and results availability. This frees reception staff for the work that actually needs a human: complex patient interactions, vulnerable patients, safeguarding concerns, and the dozens of judgment calls they make daily. Most practices find AI improves staff satisfaction because it removes the most tedious parts of the role."
  },
  {
    question: "Which clinical systems do AI agents integrate with?",
    answer: "AI agents integrate with the major UK clinical systems: EMIS Web, SystmOne (TPP), Vision, and Microtest. They also connect to e-RS (e-Referral Service), NHS Spine, NHS App, AccuRx, and practice management tools. Integration typically uses HL7 FHIR standards or the clinical system's API, ensuring data flows securely and in standard formats."
  },
  {
    question: "How long does implementation take in a GP practice?",
    answer: "Basic appointment reminders and online booking can be live within 2 weeks. Patient onboarding automation typically takes 3-4 weeks. Full triage and referral management usually takes 6-8 weeks. The phased approach means you start seeing value quickly while more complex automations are being configured. Most practices are fully operational within 3 months."
  },
  {
    question: "What about patient consent for AI?",
    answer: "Transparency is essential. Patients should be informed that AI tools assist with their administrative care. This doesn't require individual consent for legitimate administrative processing (which has a lawful basis under UK GDPR), but patients should be able to see how their data is used and opt for human-only interaction if they prefer. Clear privacy notices and the ability to opt out of automated communications are standard practice."
  }
];

export default function AIAgentsForHealthcarePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Healthcare</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Automate patient admin, appointment scheduling, referral management, and compliance — so your clinical team can focus on what matters: patient care.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Healthcare Automations
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange mb-2">40%</div>
              <div className="text-muted">Reduction in missed appointments (DNAs)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">2hrs</div>
              <div className="text-muted">Clinician admin time saved per day</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">£134k</div>
              <div className="text-muted">Annual savings for a mid-size GP practice</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Healthcare Organisations Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI automation delivers immediate productivity gains for clinics, GP practices, and healthcare providers.
            </p>
          </div>

          <div className="space-y-8">
            {automationAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-3">{area.area}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="text-red-500">Currently: {area.timeSpent}</div>
                      <div className="text-green-600 font-semibold">{area.timeSaved}</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-dark mb-3">Automations Available:</h4>
                    <ul className="space-y-2">
                      {area.automations.map((automation, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                          <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                          {automation}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Impact:</h4>
                    <p className="text-orange font-medium text-sm">{area.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Healthcare Needs AI */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Healthcare Administration Needs AI Now
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <p>
              The NHS is under more pressure than ever. GP practices are managing 30% more consultations than a decade ago with broadly the same workforce. Wait times are climbing. Administrative burden is the number one reason clinicians cite for burnout. Something has to give — and it shouldn&apos;t be patient care.
            </p>
            <p>
              AI agents don&apos;t replace clinical staff — they remove the administrative overhead that prevents clinical staff from doing their jobs. Every hour a GP spends on referral paperwork is an hour not spent with patients. Every minute reception spends on appointment confirmations is a minute not spent helping the person standing in front of them.
            </p>
            <p>
              <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a> works with healthcare organisations to identify the highest-impact automation opportunities and implement agent systems that comply with NHS data standards and clinical governance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real Healthcare AI Use Cases
            </h2>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-2xl text-dark mb-6">{useCase.useCase}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">The Problem:</h4>
                      <p className="text-muted text-sm">{useCase.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">AI Solution:</h4>
                      <p className="text-muted text-sm">{useCase.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue mb-3">Implementation:</h4>
                      <p className="text-muted text-sm">{useCase.implementation}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-orange flex gap-2 items-start">
                          <span className="flex-shrink-0">▸</span>
                          {benefit}
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

      {/* ROI Section */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real ROI Example: Northern Ireland GP Practice
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Before AI Automation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Practice:</div>
                    <div className="text-muted text-sm">{roiExample.practiceSize}</div>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Annual Costs:</div>
                    <div className="text-muted text-sm">{roiExample.currentCosts}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">After AI Implementation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <div className="font-semibold text-dark">Implementation:</div>
                    <div className="text-muted text-sm">{roiExample.aiImplementation}</div>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <div className="font-semibold text-dark">Annual Savings:</div>
                    <div className="text-muted text-sm">{roiExample.savings}</div>
                  </div>
                  <div className="border-l-4 border-orange pl-4">
                    <div className="font-semibold text-orange text-lg">Total Annual Saving: {roiExample.totalSaving}</div>
                    <div className="text-orange font-semibold">{roiExample.roi}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI for Healthcare: FAQs
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{faq.question}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Blue Canvas */}
      <section className="bg-light py-16">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h3 className="font-heading font-bold text-xl text-dark mb-4">About Blue Canvas</h3>
          <p className="text-muted max-w-[600px] mx-auto text-sm">
            Blue Canvas helps UK healthcare organisations implement AI administration automation from his base in Derry, Northern Ireland. 
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil designs 
            agent systems that reduce administrative burden whilst maintaining full compliance with NHS data standards and clinical governance.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Transform Your
                <br />
                <span className="text-orange">Healthcare Administration</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your practice workflows and identify where AI can reduce admin burden, recover lost capacity, and improve patient access.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Practice workflow analysis
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  NHS compliance assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Implementation roadmap and ROI projection
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Healthcare AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your practice</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-agent-security-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Security Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-roi-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent ROI Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-for-accountants" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Accountants</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/building-ai-agent-team" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Building an AI Agent Team</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
