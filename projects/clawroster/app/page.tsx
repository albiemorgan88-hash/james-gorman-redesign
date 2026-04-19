'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import RosterCard from './components/RosterCard';
import Logo from './components/Logo';
import { ArrowRight, CheckCircle, Users, Shield, Zap, ChevronDown } from 'lucide-react';

const exampleAgents = [
  { name: 'DREW', role: 'Platform Operations', status: 'active' as const },
  { name: 'JAMES', role: 'SEO Specialist', status: 'active' as const },
  { name: 'WRITER', role: 'Content Creator', status: 'active' as const },
];

const FAQItem = ({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div 
    className="border border-border rounded-lg bg-background-secondary/50"
  >
    <button
      onClick={onClick}
      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-background-secondary/80 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
      type="button"
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <h3 className="font-mono font-semibold text-lg pr-4">{question}</h3>
      <div
        className={`text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
      >
        <ChevronDown className="w-5 h-5" />
      </div>
    </button>
    <div
      id={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
      className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
        {answer}
      </div>
    </div>
  </div>
);

export default function HomePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [stats, setStats] = useState({ registrations: 0, liveTeamMembers: 0, totalKarma: 0, earlyAdopterSlotsLeft: 100 });

  useEffect(() => {
    async function loadStats() {
      try {
        const response = await fetch('/api/stats');
        if (!response.ok) throw new Error('Failed to load stats');
        const data = await response.json();
        setStats(data.stats);
      } catch (error) {
        console.error('Failed to load ClawRoster stats:', error);
      }
    }

    loadStats();
  }, []);

  const faqData = [
    {
      question: "What is ClawRoster?",
      answer: "ClawRoster is a public profile for your AI agent setup. It shows your tools, workflows, team structure, and how early you were, all in one link people can actually evaluate."
    },
    {
      question: "Is it free?",
      answer: "Yes. ClawRoster is free during beta. You can publish a live profile, claim your Claw #, and share it without needing crypto or on-chain verification yet."
    },
    {
      question: "What do I get after registering?",
      answer: "A permanent roster page, a Claw #, a Claw Date, and a shareable public timeline you can use on LinkedIn, in job applications, or when pitching clients and collaborators."
    },
    {
      question: "Who is it for?",
      answer: "Operators, builders, freelancers, teams, and anyone using AI agents to do real work. If agentic orchestration is part of your edge, ClawRoster helps you show it properly."
    },
    {
      question: "How do I register?",
      answer: "Tap 'Create your ClawRoster', add your agents, tools, and shipped work, and publish your public profile. Your beta roster goes live straight away."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <Header />
      
      {/* Hero Section - Completely Redesigned */}
      <section className="pt-24 pb-16 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Logo size="lg" className="animate-pulse" />
                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-mono">
                  public beta live
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6 glow-text leading-tight">
                Show your agentic setup.<br />
                <span className="text-primary">Prove how early you were.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                ClawRoster turns your tools, workflows, and shipped AI work into a clear profile recruiters, clients, and collaborators can actually evaluate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  href="/submit"
                  className="bg-primary hover:bg-primary-hover text-background px-8 py-4 rounded-xl font-mono font-bold text-lg transition-all hover:glow-border inline-flex items-center justify-center"
                >
                  Create your ClawRoster
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/roster/albie"
                  className="border border-border hover:border-primary/50 text-muted-foreground hover:text-primary px-8 py-4 rounded-xl font-mono font-medium text-lg transition-all inline-flex items-center justify-center"
                >
                  View example profile →
                </Link>
              </div>

              {/* Early adopter notice */}
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 rounded-lg p-4 max-w-md">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Early mover signal:</span>
                  <span className="text-accent font-mono font-bold">+500 karma</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-muted-foreground">Live beta rosters:</span>
                  <span className="text-primary font-mono font-bold">{stats.registrations}</span>
                </div>
              </div>
            </motion.div>

            {/* Right side - Featured Roster Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-60"></div>
              <div className="relative">
                <div className="mb-4 text-center">
                  <span className="text-sm font-mono text-muted-foreground">CLAW #001 • Featured Roster</span>
                </div>
                <Link href="/roster/albie" className="block transform hover:scale-[1.02] transition-transform duration-300">
                  <RosterCard
                    agentName="Albie"
                    role="COO & Orchestrator"
                    karma={650}
                    teamCount={6}
                    isVerified={true}
                    preview={true}
                    badges={[{ label: 'SHOWCASE EXAMPLE', tone: 'showcase' }]}
                    agents={exampleAgents}
                    rosterId="001"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
              Why It <span className="text-primary">Matters</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              ClawRoster is built for the people who need proof, not vibes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Show how you actually work',
                description: 'Anyone can say they use AI. ClawRoster shows your agents, tools, workflows, and operating setup clearly.',
              },
              {
                title: 'Make early reps visible',
                description: 'Your Claw Date and timeline make it easy to show when you started and how early you were to agentic orchestration.',
              },
              {
                title: 'Give people one useful link',
                description: 'Better for hiring, pitching, and collaboration because it replaces vague claims with something concrete people can scan fast.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-mono font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Simplified */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Three steps to show your setup and your timing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "MAP YOUR SETUP",
                description: "Add your agents, tools, automations, and working stack."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "LOG THE PROOF", 
                description: "Attach projects, experiments, and timestamps that show what you shipped and when you started."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "SHARE ONE PROFILE",
                description: "Send one link that makes your workflow, timeline, and trust state easy to scan."
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="text-center"
              >
                <div className="bg-primary/20 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-mono font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-[#0A66C2]/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-mono font-bold mb-3 text-[#0A66C2]">
              Made for recruiter screens and LinkedIn clicks
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Instead of another “AI-native” claim, share one profile with your setup, receipts, Claw Date, and timeline in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Stats - Prominent */}
      <section className="py-16 px-6 bg-background-secondary border-t border-b border-primary/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-mono font-bold mb-2">
              Growing <span className="text-primary">Agent</span> Community
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                number: String(stats.registrations),
                label: "Live Beta Rosters",
              },
              {
                number: String(stats.liveTeamMembers),
                label: "Team Members Listed",
              },
              {
                number: String(stats.earlyAdopterSlotsLeft),
                label: "Early Adopter Slots Left",
              }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="space-y-2"
              >
                <div className="text-5xl font-mono font-bold text-primary glow-text">{stat.number}</div>
                <p className="text-base text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about ClawRoster
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6">
              Put the <span className="text-primary">receipts</span> in one place
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If your edge is how you work, and how early you started, ClawRoster gives you a clean way to show both.
            </p>
            <Link 
              href="/submit"
              className="bg-primary hover:bg-primary-hover text-background px-12 py-4 rounded-xl font-mono font-bold text-xl transition-all hover:glow-border inline-flex items-center"
            >
              Create your ClawRoster
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
