import React from 'react';
import { SEO } from '../components/SEO';
import { Terminal, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DockerInstall = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Install OpenClaw with Docker",
    "description": "Step-by-step guide to deploying OpenClaw remote AI employees using Docker for a private, containerized AI workforce.",
    "step": [
      {
        "@type": "HowToStep",
        "text": "Install Docker and Docker Compose on your system.",
        "name": "Prerequisites"
      },
      {
        "@type": "HowToStep",
        "text": "Clone the OpenClaw repository: git clone https://github.com/openclaw/openclaw.git",
        "name": "Clone Repo"
      },
      {
        "@type": "HowToStep",
        "text": "Run 'docker-compose up -d' to start the containers.",
        "name": "Launch Containers"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20">
      <SEO 
        title="OpenClaw Docker Install Guide | Private Remote AI Employees" 
        description="Learn how to install OpenClaw using Docker. The fastest way to deploy a private, local AI workforce with full container isolation."
        schema={schema}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-primary mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-6">Docker Installation Guide</h1>
        <p className="text-xl text-white/60 mb-12">
          Deploy your OpenClaw remote AI employees in minutes using our official Docker configuration. Ideal for servers and production environments.
        </p>

        <div className="space-y-12">
          <section className="glass p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Terminal className="text-brand-primary" /> 1. Prerequisites
            </h2>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                <span>Docker Engine 20.10+ installed</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                <span>Docker Compose V2 installed</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                <span>At least 16GB RAM (32GB+ recommended for Llama 3.1)</span>
              </li>
            </ul>
          </section>

          <section className="glass p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6">2. Quick Start Command</h2>
            <div className="bg-black/40 p-6 rounded-xl font-mono text-sm text-brand-primary border border-white/5">
              <p className="mb-2"># Clone and Start</p>
              <p>git clone https://github.com/openclaw/openclaw.git</p>
              <p>cd openclaw</p>
              <p>docker-compose up -d</p>
            </div>
          </section>

          <section className="glass p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6">3. Verification</h2>
            <p className="text-white/60 mb-4">Once the containers are running, access your remote employee dashboard at:</p>
            <div className="bg-white/5 p-4 rounded-lg font-mono text-brand-primary inline-block">
              http://localhost:3000
            </div>
          </section>
        </div>

        <div className="mt-20 p-10 glass rounded-3xl border border-brand-primary/10 bg-brand-primary/5 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Professional Setup?</h3>
          <p className="text-white/50 mb-8">We handle the complex Docker networking, GPU passthrough, and security hardening for your AI workforce.</p>
          <Link to="/#pricing" className="bg-brand-primary text-black px-8 py-4 rounded-xl font-bold inline-block hover:scale-105 transition-transform">
            Book Pro Onboarding
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DockerInstall;
