import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft, 
  Zap, 
  Shield, 
  Cpu, 
  Code, 
  Workflow, 
  Layers,
  MessageSquare,
  Wrench,
  Lightbulb
} from 'lucide-react';

const CustomAgentPage = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20">
      <SEO 
        title="Custom Remote AI Employee | Private AI Workforce" 
        description="Need a specialized AI agent? We build custom remote AI employees tailored to your unique business roles and workflows. 100% private and secure."
        canonical="https://openclawinstall.cc/agents/custom-agent"
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
              Remote AI Employee #00X
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The <span className="text-brand-primary italic font-serif">Custom</span> AI Employee.
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              If you can define the role, we can build the agent. Our engineers specialize in creating bespoke AI workflows that integrate with your proprietary systems and follow your specific business logic.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-brand-primary text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
                Define Your Role
              </Link>
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
                  <span className="text-brand-primary">READY // CUSTOM_BUILD_MODE</span>
                </div>
                <div className="text-white/60">
                  {">"} Initializing custom role definition...<br />
                  {">"} Awaiting workflow parameters...<br />
                  {">"} Capabilities: [WEB_SEARCH, FILE_IO, API_CALLS, BROWSER_OP]<br />
                  {">"} Security: [LOCAL_ONLY, ENCRYPTED_STORAGE]<br />
                  {">"} Integration: [UNLIMITED_HOOKS]<br />
                  {">"} Ready to build your private AI workforce.
                </div>
                <div className="pt-4 flex gap-2">
                  <div className="h-1 flex-1 bg-brand-primary/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2 }}
                      className="h-full bg-brand-primary" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">How We Build Your Agent</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "1. Role Definition",
                desc: "We work with you to define the exact tasks, responsibilities, and success metrics for your AI employee."
              },
              {
                icon: Workflow,
                title: "2. Workflow Mapping",
                desc: "Our engineers map out the step-by-step logic the agent needs to follow to complete its tasks autonomously."
              },
              {
                icon: Code,
                title: "3. Custom Integration",
                desc: "We build custom connectors to your internal tools, databases, and proprietary APIs."
              },
              {
                icon: Layers,
                title: "4. Knowledge Grounding",
                desc: "We ground the agent in your specific business data, ensuring it understands your unique terminology and processes."
              },
              {
                icon: Wrench,
                title: "5. Testing & Refinement",
                desc: "We run the agent in a sandboxed environment to ensure it performs perfectly before full deployment."
              },
              {
                icon: Cpu,
                title: "6. Local Deployment",
                desc: "We deploy the final agent onto your hardware, ensuring 100% data privacy and zero recurring 'per-seat' costs."
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
              <h2 className="text-3xl font-bold mb-6">Unlimited Possibilities</h2>
              <p className="text-white/50 mb-8">
                Because OpenClaw is built on a flexible, local-first architecture, we can build agents for almost any digital role.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "AI Research Assistant",
                  "Automated Content Creator",
                  "Legal Document Auditor",
                  "Financial Data Analyst",
                  "Inventory Management Agent",
                  "Custom API Orchestrator"
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
                  <Shield className="w-4 h-4 text-brand-primary" /> Total Control
                </h4>
                <p className="text-sm text-white/40">
                  You own the code. You own the data. You own the agent. No vendor lock-in, ever.
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                 <Sparkles className="w-4 h-4 text-brand-primary" /> State-of-the-Art
                </h4>
                <p className="text-sm text-white/40">
                  We use the latest local LLMs (Llama 3.1, Mistral, Qwen) to ensure your custom agent is as smart as any cloud-based alternative.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Custom Success Stories</h2>
          <div className="space-y-6">
            {[
              {
                title: "The AI Compliance Officer",
                scenario: "A fintech firm needed to audit 10,000+ transaction logs daily for specific regulatory patterns.",
                solution: "We built a custom agent that runs locally on their secure servers, analyzes every log entry, and flags anomalies for human review. Audit time reduced by 95%."
              },
              {
                title: "The Automated SEO Strategist",
                scenario: "An e-commerce giant needed to monitor competitor pricing and SEO rankings for 50,000 SKUs.",
                solution: "We built a custom agent that crawls competitor sites, analyzes SERPs, and automatically updates the client's pricing and meta-tags to maintain dominance."
              },
              {
                title: "The AI Patent Researcher",
                scenario: "A law firm needed to scan thousands of new patent filings daily for specific technical keywords.",
                solution: "We built a custom agent that monitors patent databases, summarizes relevant filings, and sends a daily briefing to the senior partners."
              }
            ].map((useCase, i) => (
              <div key={i} className="glass p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold mb-4 text-brand-primary">{useCase.title}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-[10px] font-mono text-white/30 uppercase mb-2">The Challenge</div>
                    <p className="text-white/60 text-sm">{useCase.scenario}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-white/30 uppercase mb-2">The Custom Solution</div>
                    <p className="text-white/60 text-sm">{useCase.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Partners Say</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="glass p-10 rounded-3xl border border-brand-primary/20 relative">
              <MessageSquare className="w-12 h-12 text-brand-primary/20 absolute top-8 right-8" />
              <p className="text-xl italic mb-8 leading-relaxed text-white/80">
                "We had a very specific workflow that no off-the-shelf AI tool could handle. The OpenClaw team built us a custom agent that integrated perfectly with our legacy systems. It's now the most productive 'employee' on our team."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center font-bold text-brand-primary">
                  SD
                </div>
                <div>
                  <div className="font-bold">Sarah D.</div>
                  <div className="text-sm text-white/40">CTO, Global Logistics Corp</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Have a unique role in mind?</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-brand-primary text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform">
              Book a Consultation
            </Link>
            <Link to="/#pricing" className="bg-white/10 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/20 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAgentPage;
