import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "OpenClaw FAQ | Common Questions Answered",
  description: "Answers to common questions about OpenClaw, AI employees, pricing, security, and how our AI consultancy works. Everything you need to know before getting started.",
  alternates: { canonical: "/faq" },
  openGraph: { title: "OpenClaw FAQ | Common Questions Answered", url: "/faq" },
};

const sections = [
  {
    category: "About OpenClaw",
    items: [
      { q: "What is OpenClaw?", a: "OpenClaw is an open-source AI assistant platform that goes far beyond simple chatbots. It runs on your own hardware, connects to your business tools, and handles real tasks — from customer communication to research, admin, and automation. Think of it as a digital employee with genuine intelligence." },
      { q: "Is OpenClaw free?", a: "The OpenClaw software itself is open source and free. You'll need hardware to run it (a Mac Mini or VPS) and API access to AI models like Claude or GPT-4, which have usage-based costs (typically £20–£100/month depending on volume). There are no licensing fees." },
      { q: "How is OpenClaw different from ChatGPT?", a: "ChatGPT is a web tool you visit for conversations. OpenClaw is an always-on assistant that lives in your business — connected to your CRM, email, messaging platforms, and workflows. It has persistent memory, executes real actions, and operates autonomously across multiple channels simultaneously." },
      { q: "What can OpenClaw actually do?", a: "Respond to customers on WhatsApp, Telegram, email, and Slack. Research topics and generate reports. Draft documents and emails. Manage your calendar. Update your CRM. Process data. Run complex multi-step workflows. Essentially anything that involves information processing, communication, or digital admin." },
      { q: "Does OpenClaw work with my existing tools?", a: 'Yes. We integrate OpenClaw with your CRM (HubSpot, Salesforce, Pipedrive), email (Gmail, Outlook), calendar, messaging platforms, document storage, and custom APIs. See our <a href="/services" class="text-[#ff5722] hover:underline font-semibold">services page</a> for details.' },
    ],
  },
  {
    category: "About Our Consultancy",
    items: [
      { q: "Why do I need a consultant for OpenClaw?", a: "OpenClaw is powerful but complex. Getting the configuration, security, integrations, and prompt engineering right requires deep expertise. A DIY setup typically takes 20–40 hours and often results in security gaps, poor performance, or missed capabilities. We've standardised the process and done it dozens of times." },
      { q: "How much does it cost?", a: '<a href="/openclaw-pricing" class="text-[#ff5722] hover:underline font-semibold">£1,500 flat rate</a> for a complete deployment including installation, security hardening, up to 5 integrations, custom configuration, training, and 30 days of support. No hidden fees.' },
      { q: "How long does setup take?", a: "Typically 3–5 working days from kickoff call to a production-ready deployment." },
      { q: "Do I need technical knowledge?", a: "No. We handle all the technical work. You interact with your AI assistant through natural conversation on platforms you already use. We provide training so your team is comfortable from day one." },
      { q: "Where are you based?", a: 'Derry, Northern Ireland. We work with clients across the UK and Ireland, primarily remotely. Learn more on our <a href="/about" class="text-[#ff5722] hover:underline font-semibold">about page</a>.' },
      { q: "Can I try before I commit?", a: "We're happy to do a 30-minute call to discuss your use case and confirm OpenClaw is the right fit — no charge, no obligation. If it's not right for you, we'll tell you." },
    ],
  },
  {
    category: "Security & Data",
    items: [
      { q: "Is my data safe with OpenClaw?", a: "Yes. OpenClaw runs on your own hardware, so your data never leaves your infrastructure unless you explicitly configure it to. We apply security hardening to every deployment — access controls, encryption, permission lockdowns, and network security." },
      { q: "Does OpenClaw comply with GDPR?", a: "Because OpenClaw runs on your own infrastructure, you maintain full control over data processing. We help you configure it in a GDPR-compliant manner, including data minimisation, access controls, and retention policies." },
      { q: "Who has access to my AI assistant?", a: "Only the people you authorise. We configure role-based access control so each team member has appropriate permissions." },
      { q: "What about the AI model's data usage?", a: "When using cloud-based AI models (Claude, GPT-4), your prompts are sent to the model provider's API. Anthropic and OpenAI's business API terms state they don't train on API data. For maximum data sovereignty, we can configure local models that run entirely on your hardware." },
    ],
  },
  {
    category: "Technical",
    items: [
      { q: "What hardware do I need?", a: "An Apple Mac Mini M4 (around £500) is our recommended platform. Alternatively, a VPS with at least 4GB RAM works well. We advise on the best option during our kickoff call." },
      { q: "Can I run multiple AI agents?", a: 'Yes. For businesses that need different agents for different roles (e.g., a customer service agent and an internal operations agent), we deploy multi-agent configurations. See <a href="/openclaw-pricing" class="text-[#ff5722] hover:underline font-semibold">multi-agent pricing</a>.' },
      { q: "What happens if something breaks?", a: "During the 30-day support period, we fix it. After that, you can add managed support (£500/month) or handle basic maintenance yourself — we provide documentation and training. OpenClaw is stable software with an active open-source community." },
      { q: "Can I customise my AI assistant's personality?", a: "Absolutely. We configure tone, communication style, knowledge boundaries, and behaviour rules. Your assistant can be formal or casual, concise or detailed, proactive or reactive — whatever fits your business." },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Hero>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5">
          Frequently Asked <span className="text-accent">Questions</span>
        </h1>
        <p className="text-lg text-white/80 max-w-[560px]">Everything you need to know about OpenClaw, our consultancy, and how it all works.</p>
      </Hero>

      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          {sections.map((s) => (
            <div key={s.category} className="mb-14">
              <h3 className="font-heading font-bold text-xl text-blue mb-4">{s.category}</h3>
              <FAQ items={s.items} />
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="Still have questions?"
        subtitle="Get in touch and we'll be happy to help."
        buttons={[
          { label: "Get in Touch →", href: "https://calendly.com/contact-bluecanvas/initial-consultation", primary: true },
          { label: "View Services", href: "/services" },
          { label: "See Pricing", href: "/openclaw-pricing" },
        ]}
      />
    </>
  );
}
