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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/install/docker" element={<DockerInstall />} />
        <Route path="/install/troubleshooting" element={<Troubleshooting />} />
        <Route path="/install/linux" element={<LinuxInstall />} />
      </Routes>
    </Router>
  );
}
