import React from 'react';
import { SEO } from '../components/SEO';
import { Bot, CheckCircle2, ArrowLeft, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClawbotInstall = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Install Clawbot",
    "description": "Step-by-step guide to deploying Clawbot, the autonomous agent for OpenClaw.",
    "step": [
      {
        "@type": "HowToStep",
        "text": "Ensure OpenClaw is installed and running.",
        "name": "Prerequisites"
      },
      {
        "@type": "HowToStep",
        "text": "Enable Clawbot in the dashboard settings.",
        "name": "Enable Agent"
      },
      {
        "@type": "HowToStep",
        "text": "Configure API keys for external tools if needed.",
        "name": "Configure Tools"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20">
      <SEO 
        title="Clawbot Installation Guide | Autonomous AI Agent" 
        description="Learn how to install and configure Clawbot. The autonomous agent that powers your private AI workforce."
        schema={schema}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-primary mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-6">Clawbot Installation Guide</h1>
        <p className="text-xl text-white/60 mb-12">
          Clawbot is the autonomous engine of OpenClaw. Follow this guide to get your first agent up and running.
        </p>

        <div className="space-y-12">
          <section className="glass p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Cpu className="text-brand-primary" /> 1. Requirements
            </h2>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                <span>OpenClaw Core v1.2+ installed</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                <span>Ollama running with Llama 3 or Mistral</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                <span>Internet access for tool integration (optional)</span>
              </li>
            </ul>
          </section>

          <section className="glass p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6">2. Activation</h2>
            <p className="text-white/60 mb-6">
              Navigate to your OpenClaw Dashboard, go to <strong>Settings &gt; Agents</strong>, and toggle the <strong>Enable Clawbot</strong> switch.
            </p>
            <div className="bg-black/40 p-6 rounded-xl font-mono text-sm text-brand-primary border border-white/5">
              <p># Check agent status via CLI</p>
              <p>openclaw-cli agents status</p>
            </div>
          </section>

          <section className="glass p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6">3. Configuration</h2>
            <p className="text-white/60 mb-4">Define the tasks Clawbot is allowed to perform:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-bold mb-2">Web Search</h4>
                <p className="text-sm text-white/40">Allows Clawbot to browse the live web for real-time data.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-bold mb-2">File Access</h4>
                <p className="text-sm text-white/40">Allows Clawbot to read and analyze local documents.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-20 p-10 glass rounded-3xl border border-brand-primary/10 bg-brand-primary/5 text-center">
          <h3 className="text-2xl font-bold mb-4">Want a Custom Agent?</h3>
          <p className="text-white/50 mb-8">We build custom Clawbot workflows tailored to your specific business needs.</p>
          <Link to="/#pricing" className="bg-brand-primary text-black px-8 py-4 rounded-xl font-bold inline-block hover:scale-105 transition-transform">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClawbotInstall;
