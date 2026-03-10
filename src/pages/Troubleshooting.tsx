import React from 'react';
import { SEO } from '../components/SEO';
import { HelpCircle, AlertTriangle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Troubleshooting = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is my OpenClaw installation failing on Windows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Windows installation failures are due to missing Python build tools or incorrect PATH configurations. Ensure you have 'Build Tools for Visual Studio' installed."
        }
      },
      {
        "@type": "Question",
        "name": "How do I fix CUDA out of memory errors in OpenClaw?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reduce the context window size in your config or use a smaller quantized model (e.g., 4-bit) to fit within your GPU's VRAM."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20">
      <SEO 
        title="Fix OpenClaw Install Errors | Troubleshooting Guide" 
        description="Struggling with your OpenClaw installation? Our comprehensive troubleshooting guide covers common errors, GPU issues, and dependency fixes."
        schema={schema}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-primary mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-6">Troubleshooting Installation</h1>
        <p className="text-xl text-white/60 mb-12">
          Don't let technical hurdles stop your AI journey. Here are the most common fixes for OpenClaw installation issues.
        </p>

        <div className="space-y-8">
          {[
            {
              issue: "Python Dependency Errors",
              cause: "Missing build tools or incompatible Python version.",
              fix: "Install Python 3.10+ and ensure 'pip install --upgrade setuptools' is run before installation.",
              icon: AlertTriangle
            },
            {
              issue: "GPU / CUDA Not Detected",
              cause: "Incorrect NVIDIA drivers or missing CUDA toolkit.",
              fix: "Verify drivers with 'nvidia-smi' and ensure CUDA 12.x is installed for Llama 3 compatibility.",
              icon: AlertTriangle
            },
            {
              issue: "Browser Operator Connection Failed",
              cause: "Firewall blocking Playwright or missing browser binaries.",
              fix: "Run 'npx playwright install' to ensure all required browser engines are present.",
              icon: AlertTriangle
            }
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-red-500/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.issue}</h3>
                  <p className="text-white/40 text-sm mb-4"><span className="text-white/60 font-bold">Cause:</span> {item.cause}</p>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <p className="text-sm text-brand-primary"><span className="text-white/60 font-bold">Solution:</span> {item.fix}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 glass rounded-3xl border border-brand-primary/10 bg-brand-primary/5">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
              <HelpCircle className="w-10 h-10 text-brand-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Still Stuck?</h3>
              <p className="text-white/50 mb-6">Our engineers specialize in fixing complex environment issues. We can jump on a call and have you running in under an hour.</p>
              <Link to="/#pricing" className="bg-brand-primary text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform inline-block">
                Get Expert Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Troubleshooting;
