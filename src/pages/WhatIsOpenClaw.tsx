import React from 'react';
import { SEO } from '../components/SEO';
import { Shield, Zap, Globe, ArrowLeft, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatIsOpenClaw = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20">
      <SEO 
        title="What is OpenClaw? | Private Remote AI Employees" 
        description="Discover OpenClaw, the open-source, private AI workforce solution that lets you hire remote AI employees running entirely on your hardware."
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-primary mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-6 text-gradient">What is OpenClaw?</h1>
        <p className="text-xl text-white/60 mb-12">
          OpenClaw is the world's first open-source, private AI workforce solution designed for businesses that want to hire remote AI employees while maintaining full data sovereignty.
        </p>

        <div className="space-y-12">
          <section className="glass p-10 rounded-3xl border border-white/5">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Lock className="text-brand-primary" /> 100% Private Remote Workforce
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Unlike ChatGPT or Claude, OpenClaw remote employees run entirely on your own servers or workstations. Your data never leaves your network, ensuring that your sensitive business information remains private and secure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-brand-primary" /> Data Sovereignty
                </h4>
                <p className="text-sm text-white/40">You own the employees, the data, and the infrastructure.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-primary" /> Local Speed
                </h4>
                <p className="text-sm text-white/40">Zero latency from cloud round-trips. Instant local inference for your agents.</p>
              </div>
            </div>
          </section>

          <section className="glass p-10 rounded-3xl border border-white/5">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Globe className="text-brand-primary" /> Open Source & Extensible
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              OpenClaw is built on top of the most advanced open-source models like Llama 3.1, Mistral, and DeepSeek. It's fully extensible, allowing you to hire specialized remote agents that can perform complex tasks specific to your business roles.
            </p>
          </section>

          <section className="p-10 glass rounded-3xl border border-brand-primary/10 bg-brand-primary/5">
            <h2 className="text-3xl font-bold mb-6">Why Hire OpenClaw Agents?</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-brand-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">No Recurring Salaries</h4>
                  <p className="text-white/50">Pay once for the hiring and setup, then run your employees forever on your hardware.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-brand-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Uncensored Intelligence</h4>
                  <p className="text-white/50">Run any model you want without restrictive cloud filters or corporate bias.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-brand-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Autonomous Remote Agents</h4>
                  <p className="text-white/50">Your remote agents can browse the web, read files, and automate entire business departments.</p>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8">Ready to hire your first remote AI employee?</h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/install/open-claw" className="bg-brand-primary text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform">
              Hire OpenClaw Now
            </Link>
            <Link to="/#pricing" className="bg-white/10 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/20 transition-colors">
              View Hiring Tiers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsOpenClaw;
