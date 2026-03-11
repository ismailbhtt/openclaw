import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { 
  Mail, 
  CheckCircle2, 
  ArrowLeft, 
  Zap, 
  Shield, 
  Inbox, 
  Clock, 
  Calendar, 
  Filter,
  MessageSquare,
  FileText,
  Archive
} from 'lucide-react';

const InboxManagerPage = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20">
      <SEO 
        title="AI Inbox Manager | Private Remote AI Employee" 
        description="Hire a private AI Inbox Manager to achieve Inbox Zero. Your agent triages, drafts, and archives emails based on your personal style. 100% private AI."
        canonical="https://openclawinstall.cc/agents/inbox-manager"
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
              Remote AI Employee #003
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The AI <span className="text-brand-primary italic font-serif">Inbox Manager</span>.
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Achieve Inbox Zero every single day. This agent lives in your inbox, learning your communication style to triage, draft responses, and archive emails. It ensures you only see what truly matters while keeping your conversations moving.
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
                  <span className="text-brand-primary">ACTIVE // INBOX_TRIAGE</span>
                </div>
                <div className="text-white/60">
                  {">"} Scanning 42 unread emails...<br />
                  {">"} Identified 12 newsletters. Archiving... [DONE]<br />
                  {">"} Found urgent request from "Client_A". Tagging: [URGENT]<br />
                  {">"} Drafting response to "Meeting Request" from "Partner_B"...<br />
                  {">"} Checking calendar for Thursday... Found slot at 2pm.<br />
                  {">"} Draft saved in Gmail: "Re: Partnership sync"... [OK]<br />
                  {">"} Summary: 30 emails triaged, 5 drafts ready, 7 archived.
                </div>
                <div className="pt-4 flex gap-2">
                  <div className="h-1 flex-1 bg-brand-primary/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
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
                icon: Filter,
                title: "Intelligent Triage",
                desc: "Categorizes incoming mail into 'Urgent', 'Action Required', 'Informational', or 'Archive' based on your priorities."
              },
              {
                icon: MessageSquare,
                title: "Drafting Responses",
                desc: "Learns your voice and style to draft replies to common inquiries. You just review and hit send."
              },
              {
                icon: Calendar,
                title: "Calendar Coordination",
                desc: "Checks your availability and proposes meeting times directly in your email drafts."
              },
              {
                icon: Archive,
                title: "Newsletter Management",
                desc: "Automatically summarizes newsletters and archives them, keeping your main inbox clean for real people."
              },
              {
                icon: Clock,
                title: "Priority Alerts",
                desc: "Notifies you via Slack or SMS only when a high-priority email arrives from a specific contact or keyword."
              },
              {
                icon: FileText,
                title: "Attachment Analysis",
                desc: "Reads and summarizes attached documents (PDFs, Word, Excel) so you know what's inside without opening them."
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
                The AI Inbox Manager works directly with your existing email provider. Because it runs locally, it doesn't need to store your emails on a third-party server.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Gmail / Google Workspace",
                  "Microsoft Outlook / Office 365",
                  "Apple Mail / iCloud",
                  "Google Calendar / Outlook Cal",
                  "Slack / Discord (Alerts)",
                  "Notion / Obsidian (Summaries)"
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
                  <Shield className="w-4 h-4 text-brand-primary" /> Privacy First
                </h4>
                <p className="text-sm text-white/40">
                  Your emails are your most private data. Our agent processes everything locally on your hardware. No AI company ever sees your private conversations.
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-primary" /> Style Learning
                </h4>
                <p className="text-sm text-white/40">
                  The agent analyzes your sent folder (locally) to understand how you sign off, your level of formality, and your typical response patterns.
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
                title: "Executive Inbox Triage",
                scenario: "A CEO receives 200+ emails a day and misses important client requests.",
                solution: "The AI Inbox Manager identifies high-value clients, tags their emails as 'URGENT', and drafts a polite 'I'm looking into this' reply to buy the CEO time."
              },
              {
                title: "Automated Meeting Scheduling",
                scenario: "A consultant spends 30 minutes a day going back and forth on meeting times.",
                solution: "The AI agent detects a meeting request, checks the consultant's calendar, and drafts a reply with 3 available slots. It even handles the calendar invite once a time is picked."
              },
              {
                title: "Newsletter & Report Summarization",
                scenario: "A researcher is subscribed to 20 industry newsletters but never has time to read them.",
                solution: "The AI agent reads every newsletter, extracts the top 3 most relevant points for the researcher's current projects, and saves a daily summary to Notion."
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
                "I used to spend the first 2 hours of my day just clearing my inbox. Now, I open my email and find 5-10 perfectly drafted responses waiting for me. I just review, tweak, and send. It's like having a world-class executive assistant for a one-time setup fee."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center font-bold text-brand-primary">
                  JW
                </div>
                <div>
                  <div className="font-bold">James W.</div>
                  <div className="text-sm text-white/40">Strategic Consultant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to hire your AI Inbox Manager?</h2>
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

export default InboxManagerPage;
