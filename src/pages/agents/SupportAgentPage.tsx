import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { 
  HelpCircle, 
  CheckCircle2, 
  ArrowLeft, 
  Zap, 
  Shield, 
  LifeBuoy, 
  Clock, 
  Globe, 
  Smile,
  MessageSquare,
  BookOpen,
  Settings
} from 'lucide-react';

const SupportAgentPage = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20">
      <SEO 
        title="AI Customer Support Agent | Private Remote AI Employee" 
        description="Hire a private AI Customer Support Agent to provide instant, accurate support grounded in your documentation. 100% private, local-first AI support agent."
        canonical="https://openclawinstall.cc/agents/customer-support"
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
              Remote AI Employee #005
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The AI <span className="text-brand-primary italic font-serif">Customer Support</span> Agent.
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Provide world-class support without the overhead. This agent is grounded in your internal documentation, help articles, and past tickets to provide instant, accurate, and empathetic support to your customers 24/7.
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
                  <span className="text-brand-primary">ACTIVE // SUPPORT_MODE</span>
                </div>
                <div className="text-white/60">
                  {">"} New ticket: "How do I export my data to CSV?"<br />
                  {">"} Searching internal knowledge base... [FOUND]<br />
                  {">"} Drafting step-by-step guide...<br />
                  {">"} Reply sent: "Exporting to CSV Guide"... [OK]<br />
                  {">"} Customer replied: "Thanks! Can I automate this?"<br />
                  {">"} Analyzing API documentation...<br />
                  {">"} Reply sent: "Yes, using the /v1/export endpoint..." [OK]<br />
                  {">"} Ticket status: RESOLVED. Customer satisfaction: HIGH.
                </div>
                <div className="pt-4 flex gap-2">
                  <div className="h-1 flex-1 bg-brand-primary/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
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
                icon: BookOpen,
                title: "Knowledge Base Grounding",
                desc: "Ingests your entire help center, PDFs, and internal docs to provide answers that are 100% accurate to your product."
              },
              {
                icon: LifeBuoy,
                title: "Ticket Resolution",
                desc: "Handles common support queries from start to finish, only escalating to a human when a complex edge case is detected."
              },
              {
                icon: Smile,
                title: "Empathetic Interaction",
                desc: "Uses advanced language models to ensure every interaction is polite, helpful, and brand-consistent."
              },
              {
                icon: Globe,
                title: "Multi-Language Support",
                desc: "Supports customers in 50+ languages with native-level fluency, allowing you to scale globally without hiring more staff."
              },
              {
                icon: Settings,
                title: "Technical Troubleshooting",
                desc: "Can walk customers through complex technical setups by referencing your API docs and system requirements."
              },
              {
                icon: Zap,
                title: "Instant Response",
                desc: "Eliminates wait times. Customers get the help they need the moment they ask for it, 24/7."
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
                The AI Support Agent plugs directly into your existing support stack. Because it runs locally, it can securely access your internal databases to provide personalized support.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Zendesk / Intercom / Freshdesk",
                  "Slack / Discord / Microsoft Teams",
                  "Shopify / WooCommerce (Order status)",
                  "Stripe / Chargebee (Billing info)",
                  "Notion / Confluence (Knowledge base)",
                  "Custom Internal Databases"
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
                  <Shield className="w-4 h-4 text-brand-primary" /> Privacy & Compliance
                </h4>
                <p className="text-sm text-white/40">
                  Perfect for healthcare, legal, and finance. Your customer's sensitive data is processed locally, ensuring full compliance with HIPAA, GDPR, and SOC2.
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-primary" /> 24/7 Global Support
                </h4>
                <p className="text-sm text-white/40">
                  Provide instant support across every time zone without the cost of a global support team.
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
                title: "SaaS Technical Support",
                scenario: "A software company's support team is overwhelmed with 'How to' questions.",
                solution: "The AI agent is grounded in the product's documentation. It resolves 70% of tickets instantly by providing step-by-step guides and code snippets."
              },
              {
                title: "E-commerce Order Triage",
                scenario: "A clothing brand gets hundreds of 'Where is my order?' emails during the holidays.",
                solution: "The AI agent connects to Shopify, retrieves the tracking number, and provides a real-time update to the customer in seconds."
              },
              {
                title: "Internal IT Helpdesk",
                scenario: "Employees at a large firm are constantly asking IT for password resets and VPN help.",
                solution: "The AI agent lives in Slack and walks employees through standard IT procedures, freeing up the IT team for complex infrastructure work."
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
                "We were worried that an AI agent would sound robotic, but the OpenClaw agent is actually more empathetic than some of our human staff. It never gets frustrated, it's always polite, and it knows our product inside and out. Our CSAT score has never been higher."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center font-bold text-brand-primary">
                  ER
                </div>
                <div>
                  <div className="font-bold">Dr. Elena R.</div>
                  <div className="text-sm text-white/40">Chief of Staff, Rossi Medical</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to hire your AI Support Agent?</h2>
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

export default SupportAgentPage;
