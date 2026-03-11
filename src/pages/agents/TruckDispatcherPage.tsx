import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { 
  Truck, 
  CheckCircle2, 
  ArrowLeft, 
  Zap, 
  Shield, 
  Globe, 
  MapPin, 
  Phone, 
  Clock,
  MessageSquare,
  FileText,
  Navigation
} from 'lucide-react';

const TruckDispatcherPage = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20">
      <SEO 
        title="Remote AI Truck Dispatcher | Private Remote AI Employee" 
        description="Hire a private AI Truck Dispatcher to manage load boards, driver communication, and route optimization. 100% private, local-first AI logistics agent."
        canonical="https://openclawinstall.cc/agents/truck-dispatcher"
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
              Remote AI Employee #002
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Remote AI <span className="text-brand-primary italic font-serif">Truck Dispatcher</span>.
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              A 24/7 logistics powerhouse that manages your entire fleet's operations. From monitoring load boards like DAT and Truckstop to communicating with brokers and optimizing routes, this agent handles the heavy lifting of dispatching.
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
                  <span className="text-brand-primary">ACTIVE // LOGISTICS_MODE</span>
                </div>
                <div className="text-white/60">
                  {">"} Monitoring DAT Load Board for "Flatbed" in "Chicago"...<br />
                  {">"} Found high-paying load: $3.50/mile to Atlanta.<br />
                  {">"} Checking driver availability... Driver_04 is empty in 2h.<br />
                  {">"} Drafting email to broker: "Load #8821 Inquiry"... [SENT]<br />
                  {">"} Broker replied. Negotiating rate...<br />
                  {">"} Rate confirmed: $3.75/mile. Updating TMS... [OK]<br />
                  {">"} Sending dispatch details to Driver_04 via SMS... [DONE]
                </div>
                <div className="pt-4 flex gap-2">
                  <div className="h-1 flex-1 bg-brand-primary/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "90%" }}
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
                icon: Navigation,
                title: "Load Board Monitoring",
                desc: "Scans DAT, Truckstop, and private broker portals 24/7 to find the best loads based on your RPM and lane preferences."
              },
              {
                icon: Phone,
                title: "Broker Communication",
                desc: "Handles initial inquiries, rate negotiations, and document requests via email and integrated VOIP/SMS."
              },
              {
                icon: MapPin,
                title: "Route Optimization",
                desc: "Calculates the most efficient routes considering weather, traffic, and fuel stops to maximize driver hours."
              },
              {
                icon: Clock,
                title: "Driver Management",
                desc: "Tracks driver HOS (Hours of Service), empty status, and ETA to ensure seamless load transitions."
              },
              {
                icon: FileText,
                title: "Document Processing",
                desc: "Automatically reads Rate Cons, BOLs, and Lumper receipts. Extracts data and uploads to your TMS."
              },
              {
                icon: Zap,
                title: "Instant Response",
                desc: "Responds to broker inquiries in seconds, ensuring you never miss a high-paying load due to slow communication."
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
                The AI Truck Dispatcher integrates with the industry's most critical platforms. Because it runs locally, it maintains secure, persistent sessions with your load boards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "DAT / Truckstop / 123Loadboard",
                  "Samsara / Motive (ELD)",
                  "McLeod / ProTransport (TMS)",
                  "Gmail / Outlook / RingCentral",
                  "Google Maps / PC*Miler",
                  "QuickBooks / Factoring Portals"
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
                  <Shield className="w-4 h-4 text-brand-primary" /> Secure Logistics
                </h4>
                <p className="text-sm text-white/40">
                  Your lane data, broker contacts, and driver schedules stay on your hardware. No third-party platform has access to your proprietary logistics data.
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-brand-primary" /> 24/7 Global Operation
                </h4>
                <p className="text-sm text-white/40">
                  While your team sleeps, the AI Dispatcher is booking loads for the next morning, ensuring your trucks are never sitting idle.
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
                title: "After-Hours Load Booking",
                scenario: "A driver unexpectedly becomes empty at 2:00 AM in a difficult market.",
                solution: "The AI Dispatcher detects the status change, scans all load boards, identifies a high-paying backhaul, and emails the broker immediately. The driver has a load before the office opens."
              },
              {
                title: "Automated Rate Negotiation",
                scenario: "A broker posts a load at $2.80/mile, but your minimum for that lane is $3.10.",
                solution: "The AI agent initiates contact, provides your capacity details, and negotiates the rate based on historical lane data. It secures the load at $3.15/mile without human intervention."
              },
              {
                title: "TMS Data Entry Automation",
                scenario: "Dispatchers spend 2 hours a day manually entering Rate Confirmation details into the TMS.",
                solution: "The AI agent 'reads' the PDF Rate Con as soon as it arrives, extracts the pickup/drop-off times, addresses, and rates, and populates the TMS instantly with 100% accuracy."
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
                "We were struggling to keep our trucks moving during the night shift. The OpenClaw AI Dispatcher now handles all our after-hours load booking. It's like having a senior dispatcher who never sleeps and never makes a typo. Our RPM has increased by 12% since deployment."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center font-bold text-brand-primary">
                  TB
                </div>
                <div>
                  <div className="font-bold">Tom B.</div>
                  <div className="text-sm text-white/40">Ops Director, Braddock Logistics</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to hire your AI Dispatcher?</h2>
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

export default TruckDispatcherPage;
