import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { 
  TrendingUp, 
  CheckCircle2, 
  ArrowLeft, 
  Zap, 
  Shield, 
  Globe, 
  Mail, 
  BarChart3, 
  Target,
  MessageSquare,
  Search,
  Database
} from 'lucide-react';

const SDRPage = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20">
      <SEO 
        title="Autonomous SDR & Ad Optimizer | Private Remote AI Employee" 
        description="Hire a private, autonomous AI SDR to handle cold outreach, lead qualification, and ad optimization. 100% private, local-first AI workforce."
        canonical="https://openclawinstall.cc/agents/autonomous-sdr"
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
              Remote AI Employee #001
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Autonomous <span className="text-brand-primary italic font-serif">SDR</span> & Ad Optimizer.
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              A high-performance outbound sales and marketing agent that runs entirely on your hardware. It researches prospects, drafts personalized outreach, and optimizes your ad spend in real-time without ever leaving your network.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#pricing" className="bg-brand-primary text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
                Hire This Agent
              </a>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Shield className="w-4 h-4" /> 100% Private Data
              </div>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-brand-primary/10 blur-[120px] rounded-full" />
            <div className="glass p-8 rounded-3xl border border-white/10 relative">
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-white/70">AGENT_STATUS</span>
                  <span className="text-brand-primary">ACTIVE // OUTBOUND_MODE</span>
                </div>
                <div className="text-white/80">
                  {">"} Scanning LinkedIn for "CTO" in "Fintech"...<br />
                  {">"} Found 142 prospects matching criteria.<br />
                  {">"} Analyzing company recent news for personalization...<br />
                  {">"} Drafting 142 personalized emails... [DONE]<br />
                  {">"} Checking Ad Manager performance...<br />
                  {">"} ROAS below 2.5 on Campaign_A. Adjusting bids... [OK]
                </div>
                <div className="pt-4 flex gap-2">
                  <div className="h-1 flex-1 bg-brand-primary/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
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
                icon: Search,
                title: "Prospect Research",
                desc: "Deep-dives into company websites, LinkedIn profiles, and news articles to find the perfect 'hook' for outreach."
              },
              {
                icon: Mail,
                title: "Personalized Outreach",
                desc: "Drafts and sends emails that sound human because they are grounded in real research, not generic templates."
              },
              {
                icon: BarChart3,
                title: "Ad Spend Optimization",
                desc: "Monitors Facebook, Google, and LinkedIn ads 24/7. Automatically pauses low-performers and scales winners."
              },
              {
                icon: Target,
                title: "Lead Qualification",
                desc: "Interacts with inbound leads to qualify them based on your specific BANT (Budget, Authority, Need, Timeline) criteria."
              },
              {
                icon: Database,
                title: "CRM Synchronization",
                desc: "Automatically updates HubSpot, Salesforce, or Pipedrive with every interaction and prospect detail."
              },
              {
                icon: Globe,
                title: "Multi-Channel Presence",
                desc: "Operates across Email, LinkedIn, and Twitter to ensure your brand is where your prospects are."
              }
            ].map((cap, i) => (
              <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-primary/20 transition-all">
                <cap.icon className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{cap.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24 glass p-12 rounded-3xl border border-white/5">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Integrations & Connections</h2>
              <p className="text-white/70 mb-8">
                Your AI SDR connects directly to the tools your team already uses. Because it runs locally, it uses your own browser sessions and API keys, ensuring zero risk of account bans.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "LinkedIn Sales Navigator",
                  "HubSpot / Salesforce",
                  "Google Ads / Meta Ads",
                  "Apollo.io / Hunter.io",
                  "Gmail / Outlook",
                  "Slack / Discord Notifications"
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
                  <Shield className="w-4 h-4 text-brand-primary" /> Privacy Advantage
                </h4>
                <p className="text-sm text-white/70">
                  Unlike cloud-based SDR tools, your prospect lists and outreach strategies never touch a third-party server. Your competitive advantage stays private.
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-primary" /> Local Execution
                </h4>
                <p className="text-sm text-white/70">
                  Runs on your workstation. No monthly 'per-seat' costs. Hire one agent or ten for the same infrastructure cost.
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
                title: "Hyper-Personalized Cold Outreach",
                scenario: "A boutique marketing agency needs to reach out to e-commerce founders.",
                solution: "The AI SDR researches the founder's latest LinkedIn post and the company's recent product launch, then drafts an email referencing both. Response rates increased by 300%."
              },
              {
                title: "24/7 Ad Performance Guard",
                scenario: "A SaaS startup is burning budget on underperforming Google Ads over the weekend.",
                solution: "The AI SDR monitors the dashboard every hour. It detects a spike in CPC without conversions and automatically shifts the budget to a higher-performing campaign."
              },
              {
                title: "Automated Event Follow-up",
                scenario: "A sales team returns from a trade show with 500 business cards.",
                solution: "The AI SDR scans the list, finds the LinkedIn profiles of every contact, sends a personalized 'nice to meet you' message, and tags the hot leads in the CRM."
              }
            ].map((useCase, i) => (
              <div key={i} className="glass p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">{useCase.title}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-[10px] font-mono text-white/70 uppercase mb-2">The Scenario</div>
                    <p className="text-white/80 text-sm">{useCase.scenario}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-white/70 uppercase mb-2">The AI Solution</div>
                    <p className="text-white/80 text-sm">{useCase.solution}</p>
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
                "We replaced our $1,500/mo outreach tool with a single OpenClaw AI SDR running on a Mac Studio. Not only is it cheaper, but the personalization is actually better because it has the 'time' to research every single lead deeply. Our meeting booking rate has never been higher."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center font-bold text-brand-primary">
                  MK
                </div>
                <div>
                  <div className="font-bold">Michael K.</div>
                  <div className="text-sm text-white/70">Head of Sales, TechFlow Systems</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to hire your AI SDR?</h2>
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

export default SDRPage;
