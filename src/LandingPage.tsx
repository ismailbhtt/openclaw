import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from './components/SEO';
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
        <h2 className="text-4xl font-bold mb-4">The A-Z Deployment Roadmap</h2>
        <p className="text-white/50">From initial discovery to a fully autonomous private AI workforce.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { 
            step: "A-C", 
            title: "Discovery & Design", 
            items: ["Requirement Gathering", "Infrastructure Audit", "Custom Blueprint Design"],
            icon: Users
          },
          { 
            step: "D-F", 
            title: "Core Infrastructure", 
            items: ["Hardware Procurement", "OS Optimization (CUDA/Metal)", "Core Software Installation"],
            icon: Server
          },
          { 
            step: "G-I", 
            title: "Model & Tooling", 
            items: ["Model Selection (Llama 3.1)", "Browser Operator Config", "Tool & CRM Integration"],
            icon: Cpu
          },
          { 
            step: "J-L", 
            title: "Security & Scripting", 
            items: ["Security Hardening", "Workflow Automation Scripting", "Edge Case Testing"],
            icon: Shield
          },
          { 
            step: "M-O", 
            title: "Onboarding & Training", 
            items: ["Human-in-the-Loop Setup", "Performance Benchmarking", "Staff 1-on-1 Training"],
            icon: MousePointer2
          },
          { 
            step: "P-Z", 
            title: "Deployment & Scale", 
            items: ["Live Deployment", "24/7 Monitoring", "Multi-Operator Scaling"],
            icon: Zap
          }
        ].map((phase, i) => (
          <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-primary/20 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                <phase.icon className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-white/20 uppercase tracking-widest">{phase.step}</div>
            </div>
            <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
            <ul className="space-y-3">
              {phase.items.map((item, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-white/40">
                  <div className="w-1 h-1 rounded-full bg-brand-primary/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20 p-10 glass rounded-3xl border border-brand-primary/10 bg-brand-primary/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 italic font-serif">The Onboarding Checklist</h3>
            <p className="text-white/50 text-sm mb-6">What we need from you to start your private AI journey:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Dedicated Workstation/Server",
                "High-Speed Internet Access",
                "List of Repetitive Tasks",
                "Target Website Credentials",
                "Internal SOP Documentation",
                "Primary Technical Contact"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="text-4xl font-bold mb-2">48-72 Hours</div>
            <p className="text-white/40 text-sm">Average time from kickoff to first live operator.</p>
            <a href="#pricing" className="inline-flex items-center gap-2 mt-6 bg-brand-primary text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
              Start Onboarding <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Comparison = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Why Choose OpenClaw Install for Local AI?</h2>
        <p className="text-white/50">The difference between renting intelligence from cloud providers and owning your own private AI infrastructure.</p>
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
  const [hourlyRate, setHourlyRate] = React.useState(30);
  
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

              <div className="space-y-4">
                <div className="flex justify-between text-sm font-mono uppercase">
                  <span>Average Hourly Wage</span>
                  <span className="text-brand-primary">${hourlyRate}/hr</span>
                </div>
                <input 
                  type="range" min="15" max="200" step="5" value={hourlyRate} 
                  onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                  className="w-full accent-brand-primary"
                />
              </div>
            </div>
          </div>
          
          <div className="glass p-10 rounded-3xl text-center glow-green border-brand-primary/20">
            <div className="text-xs font-mono text-brand-primary uppercase tracking-widest mb-4">Estimated Annual Savings</div>
            <div className="text-7xl font-bold mb-2">${yearlySavings.toLocaleString()}</div>
            <p className="text-white/40 text-sm mb-8">Based on your custom labor and efficiency inputs</p>
            <div className="h-px bg-white/10 mb-8" />
            <div className="grid grid-cols-2 gap-4">
              <div className="text-left">
                <div className="text-[10px] font-mono text-white/40 uppercase">Monthly Savings</div>
                <div className="text-2xl font-bold">${monthlySavings.toLocaleString()}</div>
              </div>
              <div className="text-left">
                <div className="text-[10px] font-mono text-white/40 uppercase">Payback Period</div>
                <div className="text-2xl font-bold">~{Math.max(1, Math.round(3500 / (monthlySavings || 1)))} Months</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "We were spending $2,000/month on AI subscriptions and still worried about client confidentiality. Our costs dropped to zero, and our research speed tripled.",
      author: "Sarah Jenkins",
      role: "Managing Partner, Jenkins Law Group",
      result: "70% faster research"
    },
    {
      quote: "The browser automation is a game changer. Our AI assistant now researches property listings and drafts outreach emails while we sleep.",
      author: "Marcus Chen",
      role: "Founder, Chen Realty",
      result: "400+ leads/week"
    },
    {
      quote: "HIPAA compliance was our biggest hurdle for AI. Running everything locally on our own server solved it instantly. The admin team is finally caught up.",
      author: "Dr. Elena Rossi",
      role: "Chief of Staff, Rossi Medical",
      result: "Zero data leaks"
    },
    {
      quote: "Dispatch used to be a manual nightmare. Now our local operator handles the load boards and summarizes driver logs automatically.",
      author: "Tom Braddock",
      role: "Ops Director, Braddock Logistics",
      result: "20hrs saved/week"
    },
    {
      quote: "As a solo consultant, I couldn't afford a full-time assistant. This one-time setup gave me a research partner that knows my entire client history.",
      author: "James Wilson",
      role: "Strategic Consultant",
      result: "10x output"
    },
    {
      quote: "The ability to process thousands of documents locally without API costs is why we chose OpenClaw. It paid for itself in less than 60 days.",
      author: "Linda Wu",
      role: "CTO, DataStream Analytics",
      result: "ROI in 2 months"
    }
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
        <p className="text-white/50">Trusted by industry leaders who value privacy and performance.</p>
      </div>
      
      <div className="relative flex">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="glass p-10 rounded-3xl w-[450px] shrink-0 whitespace-normal relative">
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
        </motion.div>
      </div>
    </section>
  );
};

const CaseStudies = () => (
  <section id="case-studies" className="py-20 opacity-80">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-3">Real-World Local AI Implementation Examples</h2>
        <p className="text-white/40 text-sm max-w-xl">See how OpenClaw Install helps businesses automate workflows with private AI operators.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            industry: "Legal AI",
            title: "Private Case Discovery",
            outcome: "Summarized 1k+ sensitive legal docs locally in 4h for a boutique firm."
          },
          {
            industry: "Real Estate AI",
            title: "Automated Lead Response",
            outcome: "Automated initial Zillow lead qualification 24/7 with a local AI operator."
          },
          {
            industry: "Logistics AI",
            title: "Dispatch Automation",
            outcome: "Automated load board monitoring and log matching using local LLMs."
          },
          {
            industry: "Medical AI",
            title: "HIPAA Compliant Summaries",
            outcome: "Converted voice notes to clinical summaries offline for total patient privacy."
          }
        ].map((caseStudy, i) => (
          <div key={i} className="glass p-6 rounded-xl border-l-2 border-l-brand-primary/30">
            <div className="text-[10px] font-mono text-brand-primary/60 uppercase tracking-widest mb-2">{caseStudy.industry}</div>
            <h3 className="text-lg font-bold mb-2">{caseStudy.title}</h3>
            <p className="text-white/40 text-xs leading-relaxed">{caseStudy.outcome}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  
  const faqs = [
    { 
      q: "What is OpenClaw Install and how does it help my business?", 
      a: "OpenClaw Install is a professional service that deploys private AI operators on your local hardware. We use tools like OpenClaw and Ollama to give you a self-hosted alternative to ChatGPT, ensuring your data never leaves your office." 
    },
    { 
      q: "Is OpenClaw better than ChatGPT for business automation?", 
      a: "For businesses that handle sensitive data, OpenClaw is superior because it runs locally. It offers total data sovereignty, zero monthly fees, and the ability to automate complex browser-based workflows without API restrictions." 
    },
    { 
      q: "How does OpenClaw differ from standard browser automation like Selenium?", 
      a: "Unlike traditional automation that relies on rigid selectors, OpenClaw uses LLMs to 'see' and interact with the DOM dynamically. It can handle complex UI changes, solve captchas, and navigate multi-step workflows that would break standard scripts." 
    },
    { 
      q: "What are the specific hardware requirements for running Llama 3.1 70B locally?", 
      a: "For the 70B model, we recommend at least 64GB of Unified Memory (Mac Studio M2/M3) or dual RTX 3090/4090 GPUs (48GB+ VRAM). For smaller 8B or 14B models, a standard M1 Mac or a single mid-range NVIDIA GPU is sufficient." 
    },
    { 
      q: "Can OpenClaw interact with desktop applications, or just the browser?", 
      a: "While OpenClaw is primarily optimized for browser-based 'operators', we can configure it to interact with local file systems, databases, and any application that has a web-based interface or accessible API." 
    },
    { 
      q: "How do you handle model updates and 'hallucinations' in a business context?", 
      a: "We implement RAG (Retrieval-Augmented Generation) and strict system prompting to ground the model in your specific business data. We also set up 'human-in-the-loop' checkpoints for critical tasks to ensure 100% accuracy before any action is taken." 
    },
    { 
      q: "Is there a recurring cost for the LLM usage?", 
      a: "No. Because the models run on your hardware, there are zero token costs or monthly API fees. Your only recurring cost is the electricity to run the machine." 
    },
    { 
      q: "What is the 'Operator Blueprint' exactly?", 
      a: "It's a pre-configured set of instructions, tools, and browser automation scripts tailored to your industry. Instead of starting from scratch, we deploy a tested framework for tasks like 'Legal Discovery' or 'Real Estate Lead Gen'." 
    },
    { 
      q: "How do you ensure the system stays secure if it's connected to the internet?", 
      a: "We configure local firewalls and ensure that the LLM itself never sends your data to external servers. The internet connection is only used by the browser operator to perform the tasks you've assigned it." 
    },
    { 
      q: "Can I run multiple operators simultaneously?", 
      a: "Yes, depending on your hardware. High-end workstations can support multiple concurrent 'worker' instances, allowing you to scale your automated workforce as your needs grow." 
    },
    { 
      q: "What happens if the website UI changes and breaks the automation?", 
      a: "Because OpenClaw uses an LLM to interpret the page, it is significantly more resilient to UI changes than traditional scrapers. If a major change occurs, the model can often 'reason' its way through the new layout without manual re-coding." 
    },
    { 
      q: "Do you offer custom model fine-tuning?", 
      a: "In our Advanced tier, we can assist with fine-tuning models on your specific document corpus or communication style to ensure the AI sounds and acts exactly like a member of your team." 
    }
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
        <a href="#custom" className="hover:text-brand-primary transition-colors">Custom Ideas</a>
        <a href="#case-studies" className="hover:text-brand-primary transition-colors">Success Stories</a>
        <a href="#pricing" className="hover:text-brand-primary transition-colors">Pricing</a>
        <a href="#faq" className="hover:text-brand-primary transition-colors">FAQ</a>
        <a href="#pricing" className="bg-white text-black px-5 py-2 rounded-full hover:bg-brand-primary transition-all">Get Started</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-20 overflow-hidden">
    <SEO 
      title="OpenClaw Install | Private AI Workforce & Local AI Automation" 
      description="Professional installation and deployment for OpenClaw. Build your private AI workforce with local LLMs like Llama 3.1. 100% data privacy."
    />
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
          OpenClaw Install: <br />
          <span className="text-brand-primary italic font-serif">Private AI</span> <br />
          Workforce & Local AI Automation.
        </h1>
        <p className="text-xl text-white/60 mb-10 max-w-xl leading-relaxed">
          We install, configure, and customize OpenClaw and local AI models like Llama 3.1 on your own hardware. 
          Total data privacy. Zero monthly subscriptions. 24/7 productivity with your own private AI employee.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#pricing" className="bg-brand-primary text-black px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
            Book Installation <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#case-studies" className="glass px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
            See Success Stories
          </a>
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

const CustomAI = () => {
  const [showPitch, setShowPitch] = React.useState(false);

  return (
    <section id="custom" className="py-24 bg-brand-primary/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-mono mb-6 uppercase tracking-widest">
              Custom Development
            </div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Have a Unique Idea? <br />
              <span className="text-white/40 italic">We build custom AI operators.</span>
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              While we have pre-built blueprints for specific industries, our core expertise is in building bespoke AI operators for unique business challenges. If you have an idea for a private AI assistant that doesn't fit into a standard category, we want to hear it.
            </p>
            <div className="space-y-4">
              {[
                "Bespoke Browser Automation",
                "Custom Local Model Fine-tuning",
                "Unique Tool & API Integrations",
                "Private Data Pipeline Construction"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => setShowPitch(true)}
              className="mt-10 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-brand-primary transition-all"
            >
              Pitch Your Idea
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-brand-primary/10 blur-[120px] rounded-full" />
            <div className="glass p-10 rounded-3xl relative border-brand-primary/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Rapid Prototyping</h4>
                  <p className="text-xs text-white/40">From Idea to Operator in weeks.</p>
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed mb-6">
                "We had a very specific need for a local AI that could monitor niche forum discussions and summarize sentiment without exposing our internal research. OpenClaw Install built a custom operator that does exactly that, saving us 15 hours of manual browsing every week."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10" />
                <div>
                  <div className="text-xs font-bold">David K.</div>
                  <div className="text-[10px] text-white/30">Founder, Stealth Research Lab</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPitch && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass max-w-md w-full p-10 rounded-3xl relative"
          >
            <button 
              onClick={() => setShowPitch(false)}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-2">Pitch Your Idea</h3>
            <p className="text-white/50 text-sm mb-8">Tell us about the custom AI operator you want to build.</p>
            <ContactForm plan="Custom Idea" onCancel={() => setShowPitch(false)} onSuccess={() => setShowPitch(false)} />
          </motion.div>
        </div>
      )}
    </section>
  );
};

const Industries = () => (
  <section id="industries" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Industry-Specific Local AI Blueprints</h2>
        <p className="text-white/50 max-w-2xl">We don't just install software. We deploy industry-specific AI workflows and private LLM solutions tailored to your unique business needs.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <IndustryCard 
          icon={Scale}
          title="Legal AI Automation"
          description="Automate document review and legal research with a private AI operator. No sensitive client data ever leaves your office."
          useCases={["Summarize legal documents", "Organize case notes", "Research legal topics", "Draft document outlines"]}
        />
        <IndustryCard 
          icon={Home}
          title="Real Estate AI Assistant"
          description="Scale your outreach and property analysis with a local AI that knows your market inside out. Zero API costs."
          useCases={["Research property listings", "Summarize property details", "Draft buyer emails", "Lead tracking & follow-up"]}
        />
        <IndustryCard 
          icon={Stethoscope}
          title="Medical AI Solutions"
          description="HIPAA-compliant local AI for administrative tasks and patient documentation summaries. 100% offline security."
          useCases={["Summarize patient notes", "Research billing codes", "Administrative automation", "Appointment scheduling"]}
        />
        <IndustryCard 
          icon={Briefcase}
          title="AI for Consultants"
          description="A private research partner that helps you generate reports and analyze business data 10x faster using local models."
          useCases={["Market research reports", "Meeting summarization", "Business data analysis", "Proposal drafting"]}
        />
        <IndustryCard 
          icon={Truck}
          title="Logistics AI Operator"
          description="Optimize dispatch and operations with a local AI operator that handles the data heavy lifting for freight leads."
          useCases={["Research freight leads", "Summarize dispatch info", "Operations data organization", "Route optimization"]}
        />
        <IndustryCard 
          icon={Zap}
          title="Custom AI Workforce"
          description="Have a unique workflow or a specialized business need? We build bespoke AI operators and custom local LLM solutions."
          useCases={["Custom browser automation", "Niche data processing", "Unique tool integrations", "Proprietary AI workflows"]}
        />
      </div>
    </div>
  </section>
);

const ContactForm = ({ plan, onCancel, onSuccess, showMessage = false }: any) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<null | 'success' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, plan: plan || 'General Inquiry' })
      });
      if (response.ok) {
        setStatus('success');
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 2000);
        }
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-brand-primary/20 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
        <p className="text-white/50">We'll reach out within 24 hours to schedule your discovery call.</p>
      </div>
    );
  }

  return (
    <form className={`space-y-4 ${showMessage ? 'grid md:grid-cols-2 gap-6 space-y-0' : ''}`} onSubmit={handleSubmit}>
      <div className="space-y-1">
        <label className="text-[10px] font-mono uppercase text-white/40">Full Name</label>
        <input 
          required 
          type="text" 
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors" 
          placeholder="Jane Smith" 
        />
      </div>
      <div className="space-y-1">
        <label className="text-[10px] font-mono uppercase text-white/40">Work Email</label>
        <input 
          required 
          type="email" 
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors" 
          placeholder="jane@example.com" 
        />
      </div>
      <div className={`space-y-1 ${showMessage ? 'md:col-span-2' : ''}`}>
        <label className="text-[10px] font-mono uppercase text-white/40">Company / Project</label>
        <input 
          required 
          type="text" 
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors" 
          placeholder="Acme Corp" 
        />
      </div>
      {showMessage && (
        <div className="space-y-1 md:col-span-2">
          <label className="text-[10px] font-mono uppercase text-white/40">Message</label>
          <textarea 
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-colors h-32" 
            placeholder="Tell us about your most repetitive tasks..."
          />
        </div>
      )}
      {status === 'error' && <p className="text-red-500 text-xs text-center md:col-span-2">Something went wrong. Please try again.</p>}
      <div className={`pt-4 ${showMessage ? 'md:col-span-2' : ''}`}>
        <button 
          disabled={loading}
          className="w-full bg-brand-primary text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Send Request'}
        </button>
      </div>
    </form>
  );
};

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
              price: "999",
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
              price: "2,499",
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
              price: "5,999",
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
                Book Discovery Call
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
            <h3 className="text-2xl font-bold mb-2">Book Your Discovery Call</h3>
            <p className="text-white/50 text-sm mb-8">Schedule a technical consultation for the <span className="text-brand-primary font-bold">{selectedTier.name}</span> package.</p>
            
            <ContactForm plan={selectedTier.name} onCancel={() => setSelectedTier(null)} onSuccess={() => setSelectedTier(null)} />
          </motion.div>
        </div>
      )}
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-white/5 bg-black/20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center">
              <Terminal className="text-black w-5 h-5" />
            </div>
            <span className="font-mono font-bold text-xl tracking-tighter uppercase">OPENCLAW<span className="text-brand-primary">INSTALL</span></span>
          </div>
          <p className="text-white/40 text-sm max-w-sm leading-relaxed mb-8">
            The world's first professional deployment service for private AI workforces. We help you own your intelligence.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/60">Installation Guides</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><Link to="/install/docker" className="hover:text-brand-primary transition-colors">Docker Installation</Link></li>
            <li><Link to="/install/linux" className="hover:text-brand-primary transition-colors">Linux Native Setup</Link></li>
            <li><Link to="/install/clawbot" className="hover:text-brand-primary transition-colors">Clawbot Setup</Link></li>
            <li><Link to="/install/open-claw" className="hover:text-brand-primary transition-colors">OpenClaw Core</Link></li>
            <li><Link to="/install/troubleshooting" className="hover:text-brand-primary transition-colors">Troubleshooting Guide</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/60">Company</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><Link to="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
            <li><Link to="/what-is-open-claw" className="hover:text-brand-primary transition-colors">What is OpenClaw?</Link></li>
            <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-brand-primary transition-colors">Terms of Service</Link></li>
            <li><a href="/sitemap.xml" className="hover:text-brand-primary transition-colors">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/20 uppercase tracking-widest">
        <div>© 2026 OPENCLAW INSTALL. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-8">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
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
      <CustomAI />
      <CaseStudies />
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
            <ContactForm showMessage={true} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
