import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaShieldAlt, FaBars, FaTimes, FaFileAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ResumeModal from './ResumeModal';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'Terminal', to: 'terminal' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Defense', to: 'defense' },
  { name: 'Projects', to: 'projects' },
  { name: 'Writeups', to: 'writeups' },
  { name: 'Certs', to: 'certifications' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navLinks.map(link => document.getElementById(link.to));
      const scrollPos = window.scrollY + 100;

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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-500/90 backdrop-blur-xl shadow-lg shadow-cyber-green-500/5 border-b border-cyber-green-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative">
              <FaShieldAlt className="text-2xl text-cyber-green-500 group-hover:text-cyber-cyan-500 transition-colors duration-300" />
              <div className="absolute -inset-1 bg-cyber-green-500/20 rounded-full blur-sm group-hover:bg-cyber-cyan-500/20 transition-colors duration-300" />
            </div>
            <span className="text-xl font-bold font-mono">
              <span className="text-cyber-green-500">&lt;</span>
              <span className="text-white">CB</span>
              <span className="text-cyber-green-500">/&gt;</span>
            </span>
          </ScrollLink>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className={`relative px-3 py-2 text-sm font-mono cursor-pointer transition-all duration-300 group ${
                  activeSection === link.to
                    ? 'text-cyber-green-500'
                    : 'text-gray-400 hover:text-cyber-green-400'
                }`}
              >
                <span className="text-cyber-green-500/60 text-xs mr-1">
                  {String(index + 1).padStart(2, '0')}.
                </span>
                {link.name}
                {activeSection === link.to && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyber-green-500 to-cyber-cyan-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </ScrollLink>
            ))}
          </div>

          {/* Resume / Hire Me Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-4 py-2 text-sm font-mono font-medium border border-cyber-cyan-500/40 text-cyber-cyan-400 rounded-lg
                         hover:bg-cyber-cyan-500/10 hover:border-cyber-cyan-400 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              <FaFileAlt className="text-xs" />
              Resume
            </button>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-5 py-2 text-sm font-mono font-semibold border border-cyber-green-500 text-cyber-green-400 rounded-lg
                         hover:bg-cyber-green-500 hover:text-dark-900 transition-all duration-300 shadow-md shadow-cyber-green-500/10 cursor-pointer"
            >
              Hire Me
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyber-green-500 transition-colors p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-500/95 backdrop-blur-xl border-t border-cyber-green-500/10"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`block px-4 py-3 text-sm font-mono cursor-pointer rounded-lg transition-all duration-300 ${
                    activeSection === link.to
                      ? 'text-cyber-green-500 bg-cyber-green-500/10'
                      : 'text-gray-400 hover:text-cyber-green-400 hover:bg-cyber-green-500/5'
                  }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <span className="text-cyber-green-500/60 mr-2">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  {link.name}
                </ScrollLink>
              ))}
              <div className="pt-4 px-4 space-y-2">
                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    setIsResumeOpen(true);
                  }}
                  className="w-full text-center px-4 py-3 text-sm font-mono border border-cyber-cyan-500/50 text-cyber-cyan-400 rounded-lg
                             hover:bg-cyber-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaFileAlt className="text-xs" />
                  View Resume / CV
                </button>

                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="block text-center px-4 py-3 text-sm font-mono border border-cyber-green-500 text-cyber-green-500 rounded-lg
                             hover:bg-cyber-green-500/10 transition-all duration-300 cursor-pointer"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Hire Me
                </ScrollLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </motion.nav>
  );
};

export default Navbar;
