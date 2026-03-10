import React from 'react';
import { SEO } from '../components/SEO';
import { Shield, Zap, Globe, ArrowLeft, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatIsOpenClaw = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20">
      <SEO 
        title="What is OpenClaw? | Private AI Workforce" 
        description="Discover OpenClaw, the open-source, private AI assistant that runs entirely on your hardware. No cloud, no data leaks, full control."
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-primary mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-6 text-gradient">What is OpenClaw?</h1>
        <p className="text-xl text-white/60 mb-12">
          OpenClaw is the world's first open-source, private AI workforce solution designed for businesses that demand full data sovereignty.
        </p>

        <div className="space-y-12">
          <section className="glass p-10 rounded-3xl border border-white/5">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Lock className="text-brand-primary" /> 100% Private AI
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Unlike ChatGPT or Claude, OpenClaw runs entirely on your own servers or workstations. Your data never leaves your network, ensuring that your sensitive business information remains private and secure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-brand-primary" /> Data Sovereignty
                </h4>
                <p className="text-sm text-white/40">You own the models, the data, and the infrastructure.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-primary" /> Local Speed
                </h4>
                <p className="text-sm text-white/40">Zero latency from cloud round-trips. Instant local inference.</p>
              </div>
            </div>
          </section>

          <section className="glass p-10 rounded-3xl border border-white/5">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Globe className="text-brand-primary" /> Open Source & Extensible
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              OpenClaw is built on top of the most advanced open-source models like Llama 3, Mistral, and Phi-3. It's fully extensible, allowing you to build custom agents (Clawbots) that can perform complex tasks specific to your business.
            </p>
          </section>

          <section className="p-10 glass rounded-3xl border border-brand-primary/10 bg-brand-primary/5">
            <h2 className="text-3xl font-bold mb-6">Why Choose OpenClaw?</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-brand-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">No Subscriptions</h4>
                  <p className="text-white/50">Pay once for installation, then run it forever on your hardware.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-brand-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Uncensored Models</h4>
                  <p className="text-white/50">Run any model you want without restrictive cloud filters.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-brand-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Autonomous Agents</h4>
                  <p className="text-white/50">Clawbots can browse the web, read files, and automate workflows.</p>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8">Ready to take control of your AI?</h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/install/open-claw" className="bg-brand-primary text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform">
              Install OpenClaw Now
            </Link>
            <Link to="/#pricing" className="bg-white/10 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/20 transition-colors">
              View Pro Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsOpenClaw;
