import React from 'react';
import { SEO } from '../components/SEO';
import { Terminal, CheckCircle2, ArrowLeft, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const LinuxInstall = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Install OpenClaw on Linux (Ubuntu/Debian)",
    "description": "Complete guide to setting up OpenClaw on Linux servers for a high-performance private remote AI workforce.",
    "step": [
      {
        "@type": "HowToStep",
        "text": "Update system packages: sudo apt update && sudo apt upgrade",
        "name": "Update System"
      },
      {
        "@type": "HowToStep",
        "text": "Install Node.js and Python: sudo apt install nodejs npm python3",
        "name": "Install Dependencies"
      },
      {
        "@type": "HowToStep",
        "text": "Install OpenClaw globally: npm install -g openclaw",
        "name": "Global Install"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20">
      <SEO 
        title="OpenClaw Linux Install Guide | Private Remote AI Employees" 
        description="Step-by-step Linux installation guide for OpenClaw. Optimize your Ubuntu or Debian server for local AI automation and private remote employees."
        schema={schema}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-primary mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-6">Linux Installation Guide</h1>
        <p className="text-xl text-white/60 mb-12">
          Maximize performance by running your OpenClaw remote AI employees on a dedicated Linux server. This guide covers Ubuntu 22.04+ and Debian-based systems.
        </p>

        <div className="space-y-12">
          <section className="glass p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Server className="text-brand-primary" /> 1. System Preparation
            </h2>
            <div className="bg-black/40 p-6 rounded-xl font-mono text-sm text-brand-primary border border-white/5">
              <p>sudo apt update && sudo apt upgrade -y</p>
              <p>sudo apt install -y build-essential curl git python3-pip</p>
            </div>
          </section>

          <section className="glass p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6">2. Node.js Environment</h2>
            <p className="text-white/60 mb-4">We recommend using NVM for managing Node.js versions for your agents:</p>
            <div className="bg-black/40 p-6 rounded-xl font-mono text-sm text-brand-primary border border-white/5">
              <p>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash</p>
              <p>nvm install 20</p>
              <p>nvm use 20</p>
            </div>
          </section>

          <section className="glass p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6">3. OpenClaw Installation</h2>
            <div className="bg-black/40 p-6 rounded-xl font-mono text-sm text-brand-primary border border-white/5">
              <p>npm install -g openclaw</p>
              <p>openclaw init</p>
            </div>
          </section>
        </div>

        <div className="mt-20 p-10 glass rounded-3xl border border-brand-primary/10 bg-brand-primary/5 text-center">
          <h3 className="text-2xl font-bold mb-4">Deploying to a Private Cloud?</h3>
          <p className="text-white/50 mb-8">We offer remote onboarding services for AWS, GCP, and DigitalOcean instances to host your AI workforce.</p>
          <Link to="/#pricing" className="bg-brand-primary text-black px-8 py-4 rounded-xl font-bold inline-block hover:scale-105 transition-transform">
            Get Remote Onboarding
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LinuxInstall;
