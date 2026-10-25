import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import DefenseMatrix from './components/DefenseMatrix';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import Education from './components/Education';
import Certifications from './components/Certifications';
import BadgesSection from './components/BadgesSection';
import CyberTerminal from './components/CyberTerminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-dark-500">
        {/* Noise overlay for texture */}
        <div className="noise-overlay" />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="terminal">
            <CyberTerminal />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="defense">
            <DefenseMatrix />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="writeups">
            <CaseStudies />
          </section>

          <section id="education">
            <Education />
          </section>

          <section id="certifications">
            <Certifications />
          </section>

          <section id="badges">
            <BadgesSection />
          </section>

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
