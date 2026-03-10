import React from 'react';
import { SEO } from '../components/SEO';
import { Terminal, CheckCircle2, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const OpenClawInstall = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Install OpenClaw",
    "description": "Comprehensive guide to installing OpenClaw, the private AI workforce solution.",
    "step": [
      {
        "@type": "HowToStep",
        "text": "Choose your installation method: Docker, Linux, or Windows.",
        "name": "Choose Method"
      },
      {
        "@type": "HowToStep",
        "text": "Run the installation script or command.",
        "name": "Run Install"
      },
      {
        "@type": "HowToStep",
        "text": "Configure your local models with Ollama.",
        "name": "Configure Models"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20">
      <SEO 
        title="OpenClaw Installation Guide | Private AI Workforce" 
        description="Step-by-step guide to installing OpenClaw. The ultimate private, local AI assistant for your business."
        schema={schema}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-primary mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-6">OpenClaw Installation Guide</h1>
        <p className="text-xl text-white/60 mb-12">
          OpenClaw is designed to be easy to install and fully private. Choose the method that works best for your infrastructure.
        </p>

        <div className="space-y-12">
          <section className="glass p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <ShieldCheck className="text-brand-primary" /> 1. Security First
            </h2>
            <p className="text-white/70 mb-4">
              Before installing, ensure your system is secure. OpenClaw runs entirely locally, meaning your data never leaves your network.
            </p>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                <span>Recommended: Dedicated Linux server or workstation</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                <span>Firewall configured to block external access</span>
              </li>
            </ul>
          </section>

          <section className="glass p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6">2. Installation Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/install/docker" className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-brand-primary transition-colors">
                <h4 className="font-bold mb-2">Docker</h4>
                <p className="text-sm text-white/40">Fastest and most isolated method.</p>
              </Link>
              <Link to="/install/linux" className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-brand-primary transition-colors">
                <h4 className="font-bold mb-2">Linux Native</h4>
                <p className="text-sm text-white/40">Best performance for dedicated hardware.</p>
              </Link>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10 opacity-50 cursor-not-allowed">
                <h4 className="font-bold mb-2">Windows (WSL2)</h4>
                <p className="text-sm text-white/40">Coming soon for local workstations.</p>
              </div>
            </div>
          </section>

          <section className="glass p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Terminal className="text-brand-primary" /> 3. Quick Install Script
            </h2>
            <p className="text-white/60 mb-4">For most Linux systems, run this one-liner:</p>
            <div className="bg-black/40 p-6 rounded-xl font-mono text-sm text-brand-primary border border-white/5">
              curl -fsSL https://install.openclaw.cc | bash
            </div>
          </section>
        </div>

        <div className="mt-20 p-10 glass rounded-3xl border border-brand-primary/10 bg-brand-primary/5 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Expert Help?</h3>
          <p className="text-white/50 mb-8">We provide full-service installation, GPU optimization, and security hardening.</p>
          <Link to="/#pricing" className="bg-brand-primary text-black px-8 py-4 rounded-xl font-bold inline-block hover:scale-105 transition-transform">
            Book Pro Installation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpenClawInstall;
