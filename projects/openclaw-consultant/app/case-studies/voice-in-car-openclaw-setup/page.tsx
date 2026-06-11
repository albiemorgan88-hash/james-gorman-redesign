import type { Metadata } from "next";
import CaseStudyTemplate, { CaseStudyData } from "@/components/CaseStudyTemplate";

// THIRD CASE STUDY — voice/in-car OpenClaw setup.
// All narrative content is TODO-OWNER: fill from the real engagement notes.
// Page is noindexed and not listed on /case-studies until content is real.

const study: CaseStudyData = {
  canonicalPath: "/case-studies/voice-in-car-openclaw-setup",
  badge: "Case Study",
  title: "TODO-OWNER: Voice / In-Car OpenClaw Setup",
  intro:
    "TODO-OWNER: one-paragraph summary of the voice/in-car OpenClaw engagement — who it was for, what was set up, and the headline outcome.",
  sector: "TODO-OWNER",
  metric: "TODO-OWNER: headline metric",
  datePublished: undefined,
  dateModified: undefined,
  sections: [
    {
      id: "challenge",
      title: "The Challenge",
      paragraphs: ["TODO-OWNER: what problem the client had before the voice/in-car setup."],
    },
    {
      id: "solution",
      title: "The OpenClaw Solution",
      paragraphs: ["TODO-OWNER: what was actually built — voice channel, in-car integration, guardrails, approvals."],
      bullets: ["TODO-OWNER: component 1", "TODO-OWNER: component 2"],
    },
    {
      id: "results",
      title: "Results",
      paragraphs: ["TODO-OWNER: verified outcomes only — times, volumes, costs from the real engagement."],
    },
    {
      id: "lessons",
      title: "What We Learned",
      paragraphs: ["TODO-OWNER: honest lessons, including what did not work."],
    },
  ],
};

export const metadata: Metadata = {
  title: "Case Study: Voice / In-Car OpenClaw Setup",
  description: "How Blue Canvas set up OpenClaw for voice and in-car use. Full write-up coming soon.",
  alternates: { canonical: "https://openclawconsultant.co.uk/case-studies/voice-in-car-openclaw-setup" },
  // Stub: keep out of the index until the owner fills in real content.
  robots: { index: false, follow: true },
};

export default function VoiceInCarCaseStudyPage() {
  return <CaseStudyTemplate study={study} />;
}
