import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import {
  FaGithub,
  FaLinkedin,
  FaTerminal,
  FaShieldAlt,
  FaChevronDown,
  FaDownload,
  FaEnvelope,
  FaAward,
  FaMapMarkerAlt,
  FaCheckCircle,
} from 'react-icons/fa';
import { SiHackerone } from 'react-icons/si';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Background Particle Animation */}
      <ParticleBackground />

      {/* Cyber Grid Background */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 136, 0.4) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 255, 136, 0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyber-green-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyber-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Badges (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-800/80 border border-cyber-green-500/30 backdrop-blur-md shadow-lg shadow-cyber-green-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-green-500" />
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-cyber-green-400 font-semibold">
                Available for DFIR & SOC Analyst Roles
              </span>
            </div>

            {/* Terminal Command Prompt */}
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-gray-400 bg-dark-900/60 w-fit px-3 py-1.5 rounded-lg border border-gray-800">
              <FaTerminal className="text-cyber-green-400 text-xs" />
              <span className="text-gray-500">root@chetan:~#</span>
              <span className="text-cyber-cyan-400 font-semibold">whoami</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Chetan{' '}
              <span className="bg-gradient-to-r from-cyber-green-400 via-cyber-cyan-400 to-cyber-blue-500 bg-clip-text text-transparent">
                Biranje
              </span>
            </h1>

            {/* Type Animation Role */}
            <div className="flex items-center gap-3 font-mono text-lg sm:text-xl md:text-2xl text-gray-200">
              <span className="text-cyber-green-400 font-bold">&gt;</span>
              <TypeAnimation
                sequence={[
                  'Digital Forensics & Incident Response (DFIR)',
                  2200,
                  'SOC & Blue Team Operations',
                  2200,
                  'Threat Detection & Hunting',
                  2200,
                  'Windows & Network Forensics',
                  2200,
                  'Bug Bounty Researcher (HackerOne)',
                  2200,
                ]}
                wrapper="span"
                speed={50}
                className="text-cyber-green-400 font-semibold drop-shadow-[0_0_12px_rgba(0,255,136,0.3)]"
                repeat={Infinity}
              />
            </div>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              BCA student at <span className="text-white font-medium">DY Patil University</span> specializing in Cybersecurity. Passionate about investigating attack vectors, analyzing forensic artifacts, and defending digital infrastructure with precision and modern security operations.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400 pt-1">
              <div className="flex items-center gap-1.5 bg-dark-800/40 px-3 py-1.5 rounded-md border border-gray-800">
                <FaMapMarkerAlt className="text-cyber-cyan-400" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-1.5 bg-dark-800/40 px-3 py-1.5 rounded-md border border-gray-800">
                <FaAward className="text-cyber-green-400" />
                <span>13+ Certifications</span>
              </div>
              <div className="flex items-center gap-1.5 bg-dark-800/40 px-3 py-1.5 rounded-md border border-gray-800">
                <FaCheckCircle className="text-cyber-blue-400" />
                <span>HackerOne Researcher</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-green-500 to-cyber-cyan-500 text-dark-900 font-bold text-sm tracking-wide shadow-lg shadow-cyber-green-500/25 hover:shadow-cyber-green-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
              >
                <FaShieldAlt />
                Explore Projects
              </ScrollLink>

              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-6 py-3.5 rounded-xl bg-dark-800/80 hover:bg-dark-700/80 border border-cyber-green-500/30 hover:border-cyber-green-500 text-white font-medium text-sm backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
              >
                <FaEnvelope className="text-cyber-green-400" />
                Get In Touch
              </ScrollLink>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-mono text-gray-500 mr-2">CONNECT:</span>
              <a
                href="https://github.com/chetanbiranje"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-dark-800/60 hover:bg-cyber-green-500/20 border border-gray-800 hover:border-cyber-green-500 text-gray-300 hover:text-cyber-green-400 flex items-center justify-center transition-all"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/chetanbiranje"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-dark-800/60 hover:bg-cyber-cyan-500/20 border border-gray-800 hover:border-cyber-cyan-500 text-gray-300 hover:text-cyber-cyan-400 flex items-center justify-center transition-all"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://hackerone.com/chetanbiranje"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackerOne"
                className="w-10 h-10 rounded-lg bg-dark-800/60 hover:bg-purple-500/20 border border-gray-800 hover:border-purple-500 text-gray-300 hover:text-purple-400 flex items-center justify-center transition-all"
              >
                <SiHackerone size={18} />
              </a>
              <a
                href="mailto:chetanbiranje@proton.me"
                aria-label="Email"
                className="w-10 h-10 rounded-lg bg-dark-800/60 hover:bg-cyber-green-500/20 border border-gray-800 hover:border-cyber-green-500 text-gray-300 hover:text-cyber-green-400 flex items-center justify-center transition-all"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Cinematic Portrait & Floating Badges (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Glowing Backdrop Ring */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyber-green-500/30 via-cyber-cyan-500/20 to-cyber-blue-500/30 rounded-3xl blur-2xl opacity-70 animate-pulse pointer-events-none" />

            {/* Futuristic Tech Frame */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-md rounded-3xl p-2 bg-gradient-to-b from-cyber-green-500/40 via-cyber-cyan-500/20 to-transparent shadow-2xl backdrop-blur-xl border border-cyber-green-500/30 group">
              
              {/* Inner Image Container */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-dark-900 border border-gray-800">
                <img
                  src="/chetan-portrait.jpg"
                  alt="Chetan Biranje - Cybersecurity Professional"
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />
                
                {/* Tech Corner Accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyber-green-400" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan-400" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan-400" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyber-green-400" />

                {/* Status Overlay at bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-dark-900/80 backdrop-blur-md p-3 rounded-xl border border-cyber-green-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm">Chetan Biranje</p>
                      <p className="text-cyber-green-400 text-xs font-mono">SOC / DFIR / Security</p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-cyber-green-400 animate-ping" />
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Top Right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-4 sm:-right-6 bg-dark-800/90 border border-cyber-green-500/40 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-cyber-green-500/20 flex items-center justify-center text-cyber-green-400">
                  <FaShieldAlt className="text-sm" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">Specialization</p>
                  <p className="text-xs font-bold text-white">DFIR & SOC</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-5 -left-4 sm:-left-6 bg-dark-800/90 border border-cyber-cyan-500/40 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-cyber-cyan-500/20 flex items-center justify-center text-cyber-cyan-400">
                  <FaAward className="text-sm" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">Credentials</p>
                  <p className="text-xs font-bold text-white">13+ Certificates</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 md:mt-16">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-gray-500 hover:text-cyber-green-400 transition-colors flex flex-col items-center gap-2 animate-bounce"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
            <FaChevronDown className="text-xs" />
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
