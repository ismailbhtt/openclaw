/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './LandingPage';
import DockerInstall from './pages/DockerInstall';
import Troubleshooting from './pages/Troubleshooting';
import LinuxInstall from './pages/LinuxInstall';
import ClawbotInstall from './pages/ClawbotInstall';
import OpenClawInstall from './pages/OpenClawInstall';
import WhatIsOpenClaw from './pages/WhatIsOpenClaw';
import Blog from './pages/Blog';
import { PrivacyPolicy, TermsOfService, Contact, About } from './pages/StaticPages';
import SDRPage from './pages/agents/SDRPage';
import TruckDispatcherPage from './pages/agents/TruckDispatcherPage';
import InboxManagerPage from './pages/agents/InboxManagerPage';
import LeadNurturePage from './pages/agents/LeadNurturePage';
import SupportAgentPage from './pages/agents/SupportAgentPage';
import CustomAgentPage from './pages/agents/CustomAgentPage';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/agents/autonomous-sdr" element={<SDRPage />} />
          <Route path="/agents/truck-dispatcher" element={<TruckDispatcherPage />} />
          <Route path="/agents/inbox-manager" element={<InboxManagerPage />} />
          <Route path="/agents/lead-nurture" element={<LeadNurturePage />} />
          <Route path="/agents/customer-support" element={<SupportAgentPage />} />
          <Route path="/agents/custom-agent" element={<CustomAgentPage />} />
          <Route path="/install/docker" element={<DockerInstall />} />
          <Route path="/install/troubleshooting" element={<Troubleshooting />} />
          <Route path="/install/linux" element={<LinuxInstall />} />
          <Route path="/install/clawbot" element={<ClawbotInstall />} />
          <Route path="/install/open-claw" element={<OpenClawInstall />} />
          <Route path="/what-is-open-claw" element={<WhatIsOpenClaw />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
