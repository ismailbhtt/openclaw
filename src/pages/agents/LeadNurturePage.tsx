import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { 
  Users, 
  CheckCircle2, 
  ArrowLeft, 
  Zap, 
  Shield, 
  MessageCircle, 
  Clock, 
  Calendar, 
  Heart,
  MessageSquare,
  BarChart,
  UserCheck
} from 'lucide-react';

const LeadNurturePage = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20">
      <SEO 
        title="AI Lead Nurture Agent | Private Remote AI Employee" 
        description="Hire a private AI Lead Nurture Agent to follow up with leads, answer questions, and book meetings 24/7. 100% private, local-first AI sales agent."
        canonical="https://openclawinstall.cc/agents/lead-nurture"
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-primary mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Workforce
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono mb-6 uppercase tracking-widest">
              Remote AI Employee #004
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The AI <span className="text-brand-primary italic font-serif">Lead Nurture</span> Agent.
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Never let a lead go cold again. This agent handles the critical follow-up period, answering prospect questions, providing relevant resources, and booking discovery calls on your calendar while your sales team focuses on closing.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#pricing" className="bg-brand-primary text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
                Hire This Agent
              </a>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Shield className="w-4 h-4" /> 100% Private Data
              </div>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-brand-primary/10 blur-[120px] rounded-full" />
            <div className="glass p-8 rounded-3xl border border-white/10 relative">
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-white/40">AGENT_STATUS</span>
                  <span className="text-brand-primary">ACTIVE // NURTURE_MODE</span>
                </div>
                <div className="text-white/60">
                  {">"} New lead detected from "Contact Form"...<br />
                  {">"} Sending immediate "Thank You" & "Case Study" email... [DONE]<br />
                  {">"} Lead replied: "How does pricing work for 50 users?"<br />
                  {">"} Analyzing internal pricing doc... Drafting reply...<br />
                  {">"} Reply sent: "Detailed breakdown for 50 users"... [OK]<br />
                  {">"} Lead clicked "Book Call" link.<br />
                  {">"} Monitoring calendar for confirmation...<br />
                  {">"} Meeting booked for Tuesday at 10am. Notifying Sales... [DONE]
                </div>
                <div className="pt-4 flex gap-2">
                  <div className="h-1 flex-1 bg-brand-primary/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-full bg-brand-primary" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Instant Response",
                desc: "Responds to new leads within seconds, ensuring your brand is the first one they hear from."
              },
              {
                icon: Heart,
                title: "Empathy-Driven Follow-up",
                desc: "Uses advanced LLMs to draft follow-ups that feel personal and helpful, not robotic or pushy."
              },
              {
                icon: Calendar,
                title: "Automated Scheduling",
                desc: "Handles the entire booking process, from proposing times to sending calendar invites and reminders."
              },
              {
                icon: UserCheck,
                title: "Lead Qualification",
                desc: "Asks clarifying questions to ensure the lead is a good fit before booking time on your sales team's calendar."
              },
              {
                icon: MessageSquare,
                title: "FAQ Handling",
                desc: "Answers complex questions about your product or service using your internal knowledge base as a source of truth."
              },
              {
                icon: BarChart,
                title: "Nurture Analytics",
                desc: "Tracks engagement levels and sentiment to identify which leads are 'hot' and ready for a human touch."
              }
            ].map((cap, i) => (
              <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-primary/20 transition-all">
                <cap.icon className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{cap.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24 glass p-12 rounded-3xl border border-white/5">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Integrations & Connections</h2>
              <p className="text-white/50 mb-8">
                The AI Lead Nurture Agent bridges the gap between your marketing and sales tools. It runs locally, keeping your lead data secure.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "HubSpot / Salesforce / Zoho",
                  "Calendly / SavvyCal / Google Cal",
                  "Gmail / Outlook / SendGrid",
                  "Slack / Microsoft Teams",
                  "Typeform / WPForms / Webflow",
                  "Zapier / Make (for custom hooks)"
                ].map((tool, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                    {tool}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-brand-primary" /> Data Sovereignty
                </h4>
                <p className="text-sm text-white/40">
                  Your lead lists and conversation histories stay on your servers. No third-party AI company is training their models on your sales conversations.
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-primary" /> 24/7 Availability
                </h4>
                <p className="text-sm text-white/40">
                  Leads don't just come in during business hours. Your AI agent is always online to capture and nurture interest, even on weekends.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Use Cases</h2>
          <div className="space-y-6">
            {[
              {
                title: "Inbound Lead Qualification",
                scenario: "A real estate agency gets 50 leads a day, but only 5 are actually ready to buy.",
                solution: "The AI agent emails every lead immediately, asks about their budget and timeline, and only books a call for those who meet the agency's criteria."
              },
              {
                title: "Webinar Attendee Nurture",
                scenario: "A software company has 500 people attend a webinar and needs to follow up with all of them.",
                solution: "The AI agent sends personalized follow-ups based on which parts of the webinar the attendee watched, answers their technical questions, and offers a demo."
              },
              {
                title: "Abandoned Cart/Form Recovery",
                scenario: "A service business sees high traffic on their 'Request Quote' page, but many people leave before finishing.",
                solution: "The AI agent detects the abandoned form, sends a helpful 'Can I help you finish your quote?' email, and answers any questions that might be causing hesitation."
              }
            ].map((useCase, i) => (
              <div key={i} className="glass p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">{useCase.title}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-[10px] font-mono text-white/30 uppercase mb-2">The Scenario</div>
                    <p className="text-white/60 text-sm">{useCase.scenario}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-white/30 uppercase mb-2">The AI Solution</div>
                    <p className="text-white/60 text-sm">{useCase.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="glass p-10 rounded-3xl border border-brand-primary/20 relative">
              <MessageSquare className="w-12 h-12 text-brand-primary/20 absolute top-8 right-8" />
              <p className="text-xl italic mb-8 leading-relaxed text-white/80">
                "We used to lose so many leads because we couldn't follow up fast enough. The OpenClaw AI Lead Nurture Agent now handles the first 48 hours of every lead's journey. Our conversion rate from 'Lead' to 'Meeting' has jumped by 45%."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center font-bold text-brand-primary">
                  MC
                </div>
                <div>
                  <div className="font-bold">Marcus C.</div>
                  <div className="text-sm text-white/40">Founder, Chen Realty</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to hire your AI Lead Nurture Agent?</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/#pricing" className="bg-brand-primary text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform">
              Start Hiring Process
            </a>
            <Link to="/contact" className="bg-white/10 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/20 transition-colors">
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadNurturePage;
