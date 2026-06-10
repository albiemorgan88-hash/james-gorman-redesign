import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

export const metadata: Metadata = {
  title: "AI Receptionist UK: Calls, Enquiries and Booking Automation",
  description:
    "A practical UK buyer guide to AI receptionist workflows for calls, web enquiries, appointment booking, handoffs, data capture, and human approval rules.",
  keywords: [
    "ai receptionist uk",
    "ai receptionist",
    "ai appointment booking",
    "ai booking automation",
    "ai customer service automation uk",
    "openclaw booking automation",
    "blue canvas",
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-receptionist-uk" },
  openGraph: {
    title: "AI Receptionist UK: Calls, Enquiries and Booking Automation",
    description: "How UK businesses should scope an AI receptionist workflow without risking customer trust.",
    url: "https://openclawconsultant.co.uk/guides/ai-receptionist-uk",
    type: "article",
  },
};

const stats = [
  { value: "24/7", label: "Useful for capture, not a licence to remove judgement" },
  { value: "3 handoffs", label: "Book, route, or escalate" },
  { value: "Human rules", label: "Required for sensitive or unusual cases" },
];

const sections = [
  {
    id: "what-ai-receptionist-means",
    title: "What an AI receptionist should actually do",
    html:
      "<p>An AI receptionist should help the business capture enquiries, answer common questions, route requests, and prepare bookings without letting important customer moments disappear into automation. The goal is responsiveness with control.</p><p>For many UK businesses, the best first workflow is not fully automated calling. It is structured intake across web forms, chat, email, missed-call follow-up, and calendar booking with clear escalation rules.</p>",
  },
  {
    id: "good-fit-use-cases",
    title: "Good first use cases",
    html:
      "<p>Strong early use cases include appointment requests, quote enquiries, lead qualification, FAQ handling, missed-call text follow-up, booking reminders, cancellation routing, and collecting the information a human needs before calling back.</p><p>Industries such as clinics, trades, salons, agencies, consultants, estate agents, training providers, and local services often feel the benefit because missed enquiries directly cost revenue.</p><p>Related pages include <a href=\"/guides/ai-appointment-booking\">AI Appointment Booking</a>, <a href=\"/guides/openclaw-booking-automation\">OpenClaw Booking Automation</a>, and <a href=\"/guides/ai-customer-service-automation-uk\">AI Customer Service Automation UK</a>.</p>",
  },
  {
    id: "risks-and-guardrails",
    title: "Risks and guardrails",
    html:
      "<p>The risk is not that the AI receptionist is unhelpful. The risk is that it sounds confident when it should escalate, books the wrong slot, mishandles sensitive details, or annoys customers who need a person.</p><p>Good setup needs clear fallback rules, source-controlled answers, calendar constraints, data capture limits, and logs. Anything involving complaints, health details, legal issues, money, safeguarding, or unusual customer pressure should route to a person quickly.</p>",
  },
  {
    id: "where-openclaw-fits",
    title: "Where OpenClaw can fit",
    html:
      "<p>OpenClaw can sit behind the workflow as the operator layer that checks new enquiries, drafts replies, prepares booking notes, updates task lists, and alerts the right person. It is especially useful when the receptionist workflow spans inboxes, calendars, CRMs, documents, and recurring follow-ups.</p><p>Useful next reads are <a href=\"/guides/openclaw-calendar-automation\">OpenClaw Calendar Automation</a>, <a href=\"/guides/openclaw-form-to-crm-automation\">OpenClaw Form-to-CRM Automation</a>, and <a href=\"/guides/openclaw-safe-setup-checklist\">OpenClaw Safe Setup Checklist</a>.</p>",
  },
];

const faqs = [
  { question: "What is an AI receptionist?", answer: "It is an AI-assisted workflow that captures enquiries, answers common questions, books appointments, routes requests, and escalates cases to a person." },
  { question: "Should an AI receptionist answer every call?", answer: "Not always. Many businesses should start with web, email, chat, missed-call, or booking workflows before full voice automation." },
  { question: "Can it connect to Calendly or a calendar?", answer: "Yes. The important part is defining booking rules, buffers, qualifying questions, cancellation logic, and escalation paths." },
  { question: "What should stay human?", answer: "Complaints, sensitive personal data, complex pricing, health or legal issues, urgent risk, and any case where the customer clearly needs judgement." },
  { question: "Can OpenClaw help with receptionist workflows?", answer: "Yes. OpenClaw can prepare replies, route enquiries, update CRM notes, monitor bookings, and request approval before customer-facing actions." },
  { question: "How do you measure success?", answer: "Track missed enquiries recovered, response speed, booking conversion, no-show reduction, handoff quality, and customer complaints." },
];

const relatedGuides = [
  { href: "/guides/ai-appointment-booking", title: "AI Appointment Booking" },
  { href: "/guides/openclaw-booking-automation", title: "OpenClaw Booking Automation" },
  { href: "/guides/openclaw-calendar-automation", title: "OpenClaw Calendar Automation" },
  { href: "/guides/ai-customer-service-automation-uk", title: "AI Customer Service Automation UK" },
];

export default function AIReceptionistUKPage() {
  return (
    <GuidePageTemplate
      canonicalPath="/guides/ai-receptionist-uk"
      badge="Receptionist Workflow Guide 2026"
      title="AI Receptionist"
      highlight="UK"
      description="A practical guide to using AI for enquiries, booking, routing, and follow-up without losing customer trust or control."
      primaryCtaLabel="Read the guide"
      primaryCtaHref="#guide"
      secondaryCtaLabel="Map our enquiry flow"
      secondaryCtaHref="#assessment"
      stats={stats}
      sections={sections}
      faqs={faqs}
      relatedGuides={relatedGuides}
      sidebarTitle="Receptionist automation needs restraint"
      sidebarPoints={[
        "Capture and route before you fully automate.",
        "Keep clear human escalation for sensitive cases.",
        "Measure recovered enquiries, not just bot usage.",
      ]}
      assessmentDescription="Blue Canvas can review your enquiry and booking workflow, then map where AI should capture, draft, route, or ask for approval."
      contactTitle="Book an AI receptionist review"
      contactDescription="Tell us how enquiries and bookings work today"
      practicalTakeawayText="The useful AI receptionist does not replace judgement. It protects responsiveness while making sure the right human still sees the right moments."
    />
  );
}
