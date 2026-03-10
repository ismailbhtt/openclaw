/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import DockerInstall from './pages/DockerInstall';
import Troubleshooting from './pages/Troubleshooting';
import LinuxInstall from './pages/LinuxInstall';
import ClawbotInstall from './pages/ClawbotInstall';
import OpenClawInstall from './pages/OpenClawInstall';
import WhatIsOpenClaw from './pages/WhatIsOpenClaw';
import { PrivacyPolicy, TermsOfService, Contact, About } from './pages/StaticPages';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
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
  );
}
