import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaShieldAlt, FaBars, FaTimes, FaFileAlt, FaTerminal } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ResumeModal from './ResumeModal';
import CyberTerminal from './CyberTerminal';

const navLinks = [
  { name: 'Overview', to: 'home' },
  { name: 'Dossier', to: 'dossier' },
  { name: 'Defense Matrix', to: 'defense' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for scroll spy
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navLinks.map((link) => document.getElementById(link.to));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].to);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <>
      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Interactive Cyber Terminal Modal */}
      <CyberTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        isModal={true}
      />

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-950/85 backdrop-blur-xl border-b border-cyber-green-500/20 shadow-lg shadow-black/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="relative">
                <FaShieldAlt className="text-xl text-cyber-green-400 group-hover:text-cyber-cyan-400 transition-colors" />
                <div className="absolute -inset-1 bg-cyber-green-500/20 rounded-full blur-sm" />
              </div>
              <span className="text-lg font-bold font-mono">
                <span className="text-cyber-green-400">&lt;</span>
                <span className="text-white">Chetan</span>
                <span className="text-cyber-cyan-400">.DFIR</span>
                <span className="text-cyber-green-400">/&gt;</span>
              </span>
            </ScrollLink>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1 bg-dark-900/60 p-1 rounded-full border border-gray-800">
              {navLinks.map((link, index) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`relative px-4 py-1.5 text-xs font-mono font-medium rounded-full cursor-pointer transition-all duration-200 ${
                    activeSection === link.to
                      ? 'text-dark-950 font-bold bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 shadow-md'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                onClick={() => setIsTerminalOpen(true)}
                className="px-3.5 py-1.5 rounded-lg border border-cyber-green-500/40 text-cyber-green-400 hover:bg-cyber-green-500/10 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                title="Open Cyber Shell"
              >
                <FaTerminal className="text-[10px]" />
                Shell
              </button>

              <button
                onClick={() => setIsResumeOpen(true)}
                className="px-3.5 py-1.5 rounded-lg border border-cyber-cyan-500/40 text-cyber-cyan-300 hover:bg-cyber-cyan-500/10 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <FaFileAlt className="text-[10px]" />
                Resume
              </button>

              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="px-4 py-1.5 rounded-lg bg-cyber-green-400 hover:bg-cyber-green-300 text-dark-950 font-mono text-xs font-bold transition-all shadow-md shadow-cyber-green-500/20 cursor-pointer"
              >
                Hire Me
              </ScrollLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-cyber-green-400 p-2"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-dark-950/95 border-b border-gray-800 backdrop-blur-xl px-4 py-4 space-y-2"
            >
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="block px-3 py-2 text-sm font-mono text-gray-300 hover:text-cyber-green-400 rounded-lg hover:bg-dark-900"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ))}

              <div className="pt-2 border-t border-gray-800 flex gap-2">
                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    setIsTerminalOpen(true);
                  }}
                  className="flex-1 py-2 rounded-lg bg-dark-900 border border-cyber-green-500/40 text-cyber-green-400 font-mono text-xs flex items-center justify-center gap-1.5"
                >
                  <FaTerminal className="text-xs" /> Shell
                </button>
                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    setIsResumeOpen(true);
                  }}
                  className="flex-1 py-2 rounded-lg bg-dark-900 border border-cyber-cyan-500/40 text-cyber-cyan-300 font-mono text-xs flex items-center justify-center gap-1.5"
                >
                  <FaFileAlt className="text-xs" /> Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
