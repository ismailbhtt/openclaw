import React from 'react';
import { SEO } from '../components/SEO';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SimplePage = ({ title, content }: { title: string, content: string }) => (
  <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20">
    <SEO title={`${title} | OpenClaw Install`} description={`${title} for OpenClaw Install services.`} />
    <div className="max-w-4xl mx-auto px-6">
      <Link to="/" className="inline-flex items-center gap-2 text-brand-primary mb-8 hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="text-5xl font-bold mb-12">{title}</h1>
      <div className="glass p-10 rounded-3xl border border-white/5 text-white/70 leading-relaxed whitespace-pre-wrap">
        {content}
      </div>
    </div>
  </div>
);

export const PrivacyPolicy = () => (
  <SimplePage 
    title="Privacy Policy" 
    content={`Last Updated: March 2026

Your privacy is our priority. Because OpenClaw Install focuses on local AI, we believe in minimal data collection.

1. Data Collection: We only collect information you voluntarily provide through our contact forms (Name, Email, Company).
2. Local AI: The AI systems we install run entirely on your hardware. We do not have access to your local AI conversations or data.
3. Third Parties: We do not sell or share your information with third parties for marketing purposes.
4. Security: We implement industry-standard security measures to protect the information you share with us.`} 
  />
);

export const TermsOfService = () => (
  <SimplePage 
    title="Terms of Service" 
    content={`Last Updated: March 2026

By using our services, you agree to the following terms:

1. Service Scope: We provide installation and configuration services for open-source AI software.
2. Hardware: You are responsible for providing the necessary hardware to run the AI systems.
3. Software: We do not own the open-source software (OpenClaw, Ollama, etc.) and are not responsible for its internal logic or outputs.
4. Liability: We are not liable for any data loss or hardware issues resulting from the use of the installed software.
5. Support: Support is provided based on the tier of service purchased.`} 
  />
);

export const Contact = () => (
  <SimplePage 
    title="Contact Us" 
    content={`Have questions? We're here to help.

Email: support@openclawinstall.cc
Hours: Monday - Friday, 9am - 5pm EST

For project inquiries, please use the contact form on our homepage for a faster response.`} 
  />
);

export const About = () => (
  <SimplePage 
    title="About OpenClaw Install" 
    content={`We are a team of AI infrastructure experts dedicated to bringing the power of local, private AI to businesses of all sizes.

Our mission is to help companies reclaim their data sovereignty by moving away from cloud-based AI subscriptions and onto their own private hardware.

With years of experience in GPU optimization, Linux server hardening, and LLM deployment, we ensure your private AI workforce is fast, secure, and reliable.`} 
  />
);
