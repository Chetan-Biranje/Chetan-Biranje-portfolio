import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CyberDossier from './components/CyberDossier';
import DefenseMatrix from './components/DefenseMatrix';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-dark-950 text-gray-200 selection:bg-cyber-green-500/30 selection:text-cyber-green-400 overflow-x-hidden">
        {/* Persistent 3D Interactive Three.js Universe */}
        <ThreeBackground />

        {/* Ambient Noise Texture */}
        <div className="noise-overlay" />

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Streamlined Cyber Content */}
        <main className="relative z-10">
          {/* 01. Hero & Holographic Command */}
          <section id="home">
            <Hero />
          </section>

          {/* 02. Central Interactive Dossier (Skills, Projects, Career, Certs) */}
          <section id="dossier">
            <CyberDossier />
          </section>

          {/* 03. MITRE ATT&CK Tactical Defense Matrix */}
          <section id="defense">
            <DefenseMatrix />
          </section>

          {/* 04. Secure Transmissions & Contact */}
          <section id="contact">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <Footer />

        {/* Vercel Web Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
