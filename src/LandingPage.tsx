import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Scale, 
  Building2, 
  Stethoscope, 
  Truck, 
  Briefcase, 
  Home,
  Lock,
  Terminal,
  Server,
  HelpCircle,
  TrendingUp,
  Users,
  MousePointer2,
  X,
  Minus,
  Plus,
  Quote
} from 'lucide-react';

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-white/[0.02]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">The Deployment Process</h2>
        <p className="text-white/50">From zero to a fully autonomous AI workforce in 4 steps.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { step: "01", title: "Hardware Audit", text: "We analyze your current infrastructure or recommend the perfect local server build." },
          { step: "02", title: "Core Installation", text: "We deploy OpenClaw and Ollama, optimized for your specific GPU/CPU architecture." },
          { step: "03", title: "Blueprint Tuning", text: "We configure industry-specific workflows and browser automation scripts." },
          { step: "04", title: "Operator Training", text: "A 1-on-1 session to teach you how to command your new AI employee." },
        ].map((item, i) => (
          <div key={i} className="relative p-8 glass rounded-2xl">
            <div className="text-5xl font-serif italic text-brand-primary/20 absolute top-4 right-6">{item.step}</div>
            <h3 className="text-xl font-bold mb-4 mt-4">{item.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Comparison = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Why Local AI?</h2>
        <p className="text-white/50">The difference between renting intelligence and owning it.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="p-6 text-left font-mono text-xs uppercase text-white/40">Feature</th>
              <th className="p-6 text-left font-bold text-white/40">ChatGPT / Cloud AI</th>
              <th className="p-6 text-left font-bold text-brand-primary">OpenClaw Local</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[
              { f: "Data Privacy", c: "Data sent to cloud servers", l: "100% Local (Air-gapped)" },
              { f: "Monthly Cost", c: "$20-$50 per user / mo", l: "$0 (One-time setup)" },
              { f: "Customization", c: "Limited to system prompts", l: "Full model & tool control" },
              { f: "Automation", c: "API restricted / Sandboxed", l: "Full browser & OS access" },
              { f: "Downtime", c: "Subject to server outages", l: "Always on (Your hardware)" },
            ].map((row, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-6 font-medium">{row.f}</td>
                <td className="p-6 text-white/40">{row.c}</td>
                <td className="p-6 text-brand-primary font-bold">{row.l}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const ROICalculator = () => {
  const [employees, setEmployees] = React.useState(5);
  const [hoursSaved, setHoursSaved] = React.useState(10);
  const hourlyRate = 50;
  
  const monthlySavings = employees * hoursSaved * hourlyRate * 4;
  const yearlySavings = monthlySavings * 12;

  return (
    <section className="py-24 bg-brand-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Calculate Your <span className="text-brand-primary">ROI</span></h2>
            <p className="text-white/60 mb-10">See how much your business saves by replacing repetitive manual tasks with a local AI operator.</p>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-mono uppercase">
                  <span>Number of Employees</span>
                  <span className="text-brand-primary">{employees}</span>
                </div>
                <input 
                  type="range" min="1" max="50" value={employees} 
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full accent-brand-primary"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-mono uppercase">
                  <span>Hours Saved per Week / Employee</span>
                  <span className="text-brand-primary">{hoursSaved}h</span>
                </div>
                <input 
                  type="range" min="1" max="40" value={hoursSaved} 
                  onChange={(e) => setHoursSaved(parseInt(e.target.value))}
                  className="w-full accent-brand-primary"
                />
              </div>
            </div>
          </div>
          
          <div className="glass p-10 rounded-3xl text-center glow-green border-brand-primary/20">
            <div className="text-xs font-mono text-brand-primary uppercase tracking-widest mb-4">Estimated Annual Savings</div>
            <div className="text-7xl font-bold mb-2">${yearlySavings.toLocaleString()}</div>
            <p className="text-white/40 text-sm mb-8">Based on a conservative $50/hr labor rate</p>
            <div className="h-px bg-white/10 mb-8" />
            <div className="grid grid-cols-2 gap-4">
              <div className="text-left">
                <div className="text-[10px] font-mono text-white/40 uppercase">Monthly Savings</div>
                <div className="text-2xl font-bold">${monthlySavings.toLocaleString()}</div>
              </div>
              <div className="text-left">
                <div className="text-[10px] font-mono text-white/40 uppercase">Payback Period</div>
                <div className="text-2xl font-bold">~2 Months</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
        <p className="text-white/50">Real results from firms that made the switch to local AI.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            quote: "We were spending $2,000/month on AI subscriptions and still worried about client confidentiality. OpenClaw Install set up a local server in 48 hours. Our costs dropped to zero, and our research speed tripled.",
            author: "Sarah Jenkins",
            role: "Managing Partner, Jenkins Law Group",
            result: "70% reduction in research time"
          },
          {
            quote: "The browser automation is a game changer. Our AI assistant now researches property listings and drafts outreach emails while we sleep. It's like having a full-time assistant for a one-time fee.",
            author: "Marcus Chen",
            role: "Founder, Chen Realty",
            result: "400+ leads processed weekly"
          }
        ].map((t, i) => (
          <div key={i} className="glass p-10 rounded-3xl relative">
            <Quote className="w-10 h-10 text-brand-primary/20 absolute top-8 right-8" />
            <p className="text-lg italic mb-8 leading-relaxed">"{t.quote}"</p>
            <div className="flex justify-between items-end">
              <div>
                <div className="font-bold">{t.author}</div>
                <div className="text-xs text-white/40">{t.role}</div>
              </div>
              <div className="bg-brand-primary/10 text-brand-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                {t.result}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  
  const faqs = [
    { q: "Do I need expensive hardware?", a: "Not necessarily. We can optimize models for mid-range PCs, or recommend a dedicated local server build (starting at ~$1,500) that will pay for itself in months." },
    { q: "Is it really 100% private?", a: "Yes. The models run entirely on your hardware. We configure the system so it doesn't require an internet connection to process your data." },
    { q: "What happens if the software needs an update?", a: "Our Business and Advanced tiers include support windows. We also offer a low-cost monthly maintenance plan to keep your models and scripts up to date." },
    { q: "Can it really browse the web?", a: "Yes. OpenClaw uses browser automation to navigate websites just like a human would, allowing it to research, fill forms, and extract data." },
    { q: "How long does installation take?", a: "Most installations are completed within 48-72 hours of hardware readiness." },
  ];

  return (
    <section id="faq" className="py-24 bg-white/[0.02]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-bold">{faq.q}</span>
                {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-white/50 text-sm leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-brand-dark/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center">
          <Terminal className="text-black w-5 h-5" />
        </div>
        <span className="font-mono font-bold text-xl tracking-tighter">OPENCLAW<span className="text-brand-primary">INSTALL</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <a href="#how-it-works" className="hover:text-brand-primary transition-colors">Process</a>
        <a href="#industries" className="hover:text-brand-primary transition-colors">Industries</a>
        <a href="#pricing" className="hover:text-brand-primary transition-colors">Pricing</a>
        <a href="#faq" className="hover:text-brand-primary transition-colors">FAQ</a>
        <a href="#pricing" className="bg-white text-black px-5 py-2 rounded-full hover:bg-brand-primary transition-all">Buy Now</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-20 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.05)_0%,transparent_70%)] pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
          </span>
          NOW DEPLOYING PRIVATE AI OPERATORS
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
          Your Private AI <br />
          <span className="text-brand-primary italic font-serif">Employee</span> <br />
          Starts Here.
        </h1>
        <p className="text-xl text-white/60 mb-10 max-w-xl leading-relaxed">
          We install, configure, and customize OpenClaw and local AI models on your hardware. 
          Total privacy. Zero subscriptions. 24/7 productivity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-brand-primary text-black px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
            Book Installation <ArrowRight className="w-5 h-5" />
          </button>
          <button className="glass px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
            View Use Cases
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="border-y border-white/5 bg-white/[0.02]">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Data Privacy", value: "100%", sub: "Local Execution" },
          { label: "Monthly Fees", value: "$0", sub: "After Setup" },
          { label: "Availability", value: "24/7", sub: "Always On" },
          { label: "Deployment", value: "48h", sub: "Average Time" },
        ].map((stat, i) => (
          <div key={i} className="space-y-1">
            <div className="text-xs font-mono text-brand-primary uppercase tracking-widest">{stat.label}</div>
            <div className="text-4xl font-bold">{stat.value}</div>
            <div className="text-xs text-white/40 uppercase tracking-tighter">{stat.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const IndustryCard = ({ icon: Icon, title, description, useCases }: any) => (
  <div className="glass p-8 rounded-2xl group hover:border-brand-primary/30 transition-all">
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-white/50 mb-6 text-sm leading-relaxed">{description}</p>
    <ul className="space-y-3">
      {useCases.map((useCase: string, i: number) => (
        <li key={i} className="flex items-start gap-2 text-sm text-white/80">
          <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
          {useCase}
        </li>
      ))}
    </ul>
  </div>
);

const Industries = () => (
  <section id="industries" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Industry Blueprints</h2>
        <p className="text-white/50 max-w-2xl">We don't just install software. We deploy industry-specific AI workflows tailored to your business needs.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <IndustryCard 
          icon={Scale}
          title="Law Firms"
          description="Automate document review and legal research without sending sensitive client data to the cloud."
          useCases={["Summarize legal documents", "Organize case notes", "Research legal topics", "Draft document outlines"]}
        />
        <IndustryCard 
          icon={Home}
          title="Real Estate"
          description="Scale your outreach and property analysis with an AI that knows your market inside out."
          useCases={["Research property listings", "Summarize property details", "Draft buyer emails", "Lead tracking & follow-up"]}
        />
        <IndustryCard 
          icon={Stethoscope}
          title="Medical Clinics"
          description="HIPAA-compliant local AI for administrative tasks and patient documentation summaries."
          useCases={["Summarize patient notes", "Research billing codes", "Administrative automation", "Appointment scheduling"]}
        />
        <IndustryCard 
          icon={Briefcase}
          title="Consultants"
          description="A research partner that helps you generate reports and analyze business data 10x faster."
          useCases={["Market research reports", "Meeting summarization", "Business data analysis", "Proposal drafting"]}
        />
        <IndustryCard 
          icon={Truck}
          title="Logistics"
          description="Optimize dispatch and operations with an AI operator that handles the data heavy lifting."
          useCases={["Research freight leads", "Summarize dispatch info", "Operations data organization", "Route optimization"]}
        />
        <IndustryCard 
          icon={Building2}
          title="Small Business"
          description="The 'everything' assistant for owners who need to be in ten places at once."
          useCases={["Customer support automation", "Inventory tracking", "Marketing copy generation", "Email management"]}
        />
      </div>
    </div>
  </section>
);

const Pricing = () => {
  const [selectedTier, setSelectedTier] = React.useState<any>(null);

  return (
    <section id="pricing" className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Investment Tiers</h2>
          <p className="text-white/50">One-time setup fees. No recurring software costs.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Basic Setup",
              price: "1,499",
              description: "Perfect for individuals and small offices.",
              features: [
                "OpenClaw Installation",
                "Ollama Configuration",
                "1 Local Model Setup",
                "Basic Task Training",
                "48h Support Window"
              ]
            },
            {
              name: "Business Automation",
              price: "3,499",
              description: "The sweet spot for growing practices.",
              features: [
                "Everything in Basic",
                "Browser Automation Setup",
                "Industry-Specific Workflows",
                "Document Processing Engine",
                "Lead Research Automation",
                "1 Month Priority Support"
              ],
              popular: true
            },
            {
              name: "Advanced Operator",
              price: "7,999",
              description: "Custom enterprise-grade AI deployment.",
              features: [
                "Everything in Business",
                "Custom CRM Integrations",
                "Multi-Model Orchestration",
                "Hardware Recommendations",
                "On-site/Remote Training",
                "3 Months Dedicated Support"
              ]
            }
          ].map((tier, i) => (
            <div key={i} className={`glass p-10 rounded-3xl relative ${tier.popular ? 'border-brand-primary/50 glow-green' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-white/40 text-sm">/setup</span>
                </div>
                <p className="text-white/50 text-sm mt-4">{tier.description}</p>
              </div>
              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setSelectedTier(tier)}
                className={`w-full py-4 rounded-xl font-bold transition-all ${tier.popular ? 'bg-brand-primary text-black hover:scale-105' : 'bg-white/10 hover:bg-white/20'}`}
              >
                Buy {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedTier && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass max-w-md w-full p-10 rounded-3xl relative"
          >
            <button 
              onClick={() => setSelectedTier(null)}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-2">Complete Your Order</h3>
            <p className="text-white/50 text-sm mb-8">You are purchasing the <span className="text-brand-primary font-bold">{selectedTier.name}</span>.</p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Order received! Our team will contact you within 24 hours to schedule your installation.'); setSelectedTier(null); }}>
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-white/40">Full Name</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors" placeholder="Jane Smith" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-white/40">Email Address</label>
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors" placeholder="jane@example.com" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-white/40">Payment Method</label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-xl border border-brand-primary/50 bg-brand-primary/10 text-xs font-bold text-center">Credit Card</div>
                  <div className="p-3 rounded-xl border border-white/10 bg-white/5 text-xs font-bold text-center opacity-50">Crypto (Coming Soon)</div>
                </div>
              </div>
              <div className="pt-4">
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-white/50">Total Due:</span>
                  <span className="font-bold text-xl">${selectedTier.price}</span>
                </div>
                <button className="w-full bg-brand-primary text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform">
                  Pay & Schedule Installation
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center">
              <Terminal className="text-black w-5 h-5" />
            </div>
            <span className="font-mono font-bold text-xl tracking-tighter">OPENCLAW<span className="text-brand-primary">INSTALL</span></span>
          </div>
          <p className="text-white/40 max-w-sm leading-relaxed">
            We are a premium AI installation service helping businesses reclaim their time and data sovereignty through local AI operators.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li>hello@openclawinstall.cc</li>
            <li>+1 (555) AI-READY</li>
            <li>San Francisco, CA</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:row justify-between items-center gap-6 pt-8 border-t border-white/5 text-xs text-white/20 uppercase tracking-widest font-mono">
        <div>© 2026 OpenClaw Install. All rights reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Comparison />
      <ROICalculator />
      
      <section id="vision" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-primary/10 blur-[100px]" />
              <div className="glass p-2 rounded-2xl overflow-hidden">
                <div className="bg-brand-dark rounded-xl p-6 font-mono text-xs space-y-2">
                  <div className="text-white/30">$ openclaw --install --target=local</div>
                  <div className="text-brand-primary">Checking hardware compatibility... [OK]</div>
                  <div className="text-brand-primary">Downloading Llama 3.1 70B... [OK]</div>
                  <div className="text-brand-primary">Configuring browser automation... [OK]</div>
                  <div className="text-brand-primary">Initializing industry blueprint: Legal... [OK]</div>
                  <div className="text-white/30 mt-4">$ openclaw --status</div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                    <span className="text-white">Operator Online: 24/7 Active</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                The AI Revolution is Local. <br />
                <span className="text-white/40 italic">We handle the complexity.</span>
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: Lock,
                    title: "Data Sovereignty",
                    text: "Your data never leaves your office. No cloud leaks, no third-party training, total privacy."
                  },
                  {
                    icon: Zap,
                    title: "Zero Latency",
                    text: "Local models run at the speed of your hardware. No API downtime or rate limits."
                  },
                  {
                    icon: Server,
                    title: "No Monthly Fees",
                    text: "Stop paying $20/mo per user. Own your intelligence infrastructure forever."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Industries />
      <Testimonials />
      <Pricing />
      <FAQ />
      
      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to hire your first <span className="text-brand-primary">AI Operator?</span></h2>
          <p className="text-white/50 mb-10 text-lg">
            Schedule a free consultation to see how a private AI assistant can transform your specific business workflows.
          </p>
          <div className="glass p-8 rounded-3xl text-left">
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-white/40">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-white/40">Work Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors" placeholder="john@firm.com" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-mono uppercase text-white/40">Industry</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors appearance-none">
                  <option className="bg-brand-dark">Law Firm</option>
                  <option className="bg-brand-dark">Real Estate</option>
                  <option className="bg-brand-dark">Medical Practice</option>
                  <option className="bg-brand-dark">Logistics</option>
                  <option className="bg-brand-dark">Other</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-mono uppercase text-white/40">Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors h-32" placeholder="Tell us about your most repetitive tasks..."></textarea>
              </div>
              <button className="md:col-span-2 bg-brand-primary text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
