import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaShieldAlt, FaProjectDiagram, FaCertificate, FaBriefcase,
  FaCode, FaMicrophone, FaTerminal, FaUniversity, FaMapMarkerAlt,
  FaCheckCircle,
} from 'react-icons/fa';

const stats = [
  { icon: FaProjectDiagram, value: '6+', label: 'Projects', color: 'text-cyber-green-400', glow: 'rgba(0,255,136,0.2)', accent: '#00ff88' },
  { icon: FaCertificate, value: '13+', label: 'Certificates', color: 'text-cyber-cyan-400', glow: 'rgba(0,229,255,0.2)', accent: '#00e5ff' },
  { icon: FaBriefcase, value: '3+', label: 'Internships', color: 'text-cyber-blue-400', glow: 'rgba(0,161,255,0.2)', accent: '#00a1ff' },
  { icon: FaCode, value: '31+', label: 'Core Skills', color: 'text-purple-400', glow: 'rgba(168,85,247,0.2)', accent: '#a855f7' },
];

const focusAreas = [
  { label: 'Digital Forensics & Incident Response', icon: FaShieldAlt, color: 'border-cyber-green-500/30 text-cyber-green-400 bg-cyber-green-500/5' },
  { label: 'SOC Monitoring & SIEM', icon: FaTerminal, color: 'border-cyber-cyan-500/30 text-cyber-cyan-400 bg-cyber-cyan-500/5' },
  { label: 'Windows & Network PCAP Forensics', icon: FaCode, color: 'border-cyber-blue-500/30 text-cyber-blue-400 bg-cyber-blue-500/5' },
  { label: 'Threat Hunting & Sysmon Analysis', icon: FaShieldAlt, color: 'border-purple-500/30 text-purple-400 bg-purple-500/5' },
  { label: 'Bug Bounty & Responsible Disclosure', icon: FaCheckCircle, color: 'border-orange-500/30 text-orange-400 bg-orange-500/5' },
  { label: 'DevSecOps & Secure CI/CD', icon: FaCode, color: 'border-yellow-500/30 text-yellow-400 bg-yellow-500/5' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div className="py-24 md:py-36 bg-dark-500 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="orb orb-cyan w-80 h-80 top-0 right-0 opacity-20" />
      <div className="orb orb-green w-72 h-72 bottom-0 left-0 opacity-20" style={{ animationDelay: '3s' }} />

      {/* Hex background */}
      <div className="absolute inset-0 hex-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-number mb-3">01 · About Me</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Defending Cyberspace With{' '}
            <span className="bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent">
              Forensic Precision
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyber-green-500/50" />
            <div className="w-2 h-2 rounded-full bg-cyber-green-400 shadow-[0_0_8px_rgba(0,255,136,0.8)]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyber-cyan-500/50" />
          </div>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left: Photo + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Photo Card with 3D effect */}
            <div
              className="relative rounded-3xl p-[2px] shadow-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(0,229,255,0.4), rgba(0,255,136,0.2))' }}
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] sm:aspect-[4/3] bg-dark-900">
                <img
                  src="/chetan-speaker.jpg"
                  alt="Chetan Biranje speaking at cybersecurity conference"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  style={{ filter: 'brightness(1.05) contrast(1.05)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-70" />

                {/* Corner accents */}
                {[
                  'top-3 left-3 border-t-2 border-l-2 border-cyber-cyan-400',
                  'top-3 right-3 border-t-2 border-r-2 border-cyber-green-400',
                  'bottom-16 left-3 border-b-2 border-l-2 border-cyber-green-400',
                  'bottom-16 right-3 border-b-2 border-r-2 border-cyber-cyan-400',
                ].map((cls, i) => (
                  <div key={i} className={`absolute w-4 h-4 ${cls}`} />
                ))}

                {/* Speaker badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-premium p-3 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyber-green-500/20 text-cyber-green-400 flex items-center justify-center shadow-[0_0_10px_rgba(0,255,136,0.3)]">
                      <FaMicrophone className="text-sm" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Community Speaker</p>
                      <p className="text-[11px] text-gray-400 font-mono">Cybersecurity Awareness & CTF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Uni tag */}
            <div className="flex items-center justify-between p-4 rounded-2xl glass-premium font-mono text-xs">
              <span className="flex items-center gap-2 text-gray-300">
                <FaUniversity className="text-cyber-green-400" />
                DY Patil University
              </span>
              <span className="text-cyber-cyan-400 font-semibold">BCA · Cybersecurity</span>
            </div>

            {/* 4 Stats Cards */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="p-4 rounded-2xl cyber-card-pro text-center cursor-default"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 10px 30px rgba(0,0,0,0.4), 0 0 20px ${stat.glow}`,
                    }}
                  >
                    <Icon className={`text-2xl mx-auto mb-2 ${stat.color}`} style={{ filter: `drop-shadow(0 0 6px ${stat.accent}80)` }} />
                    <p className={`text-2xl font-black font-mono ${stat.color}`}>{stat.value}</p>
                    <p className="text-[10px] text-gray-500 font-medium mt-0.5 uppercase tracking-wider">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Story + Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Terminal Bio Card */}
            <div className="glass-premium rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/5 bg-white/3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-[11px] font-mono text-gray-500">profile_overview.sh</span>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-5">
                <div className="font-mono text-xs text-gray-600 mb-2">
                  <span className="text-cyber-green-400">$</span> cat about.txt
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  I am a passionate{' '}
                  <span className="text-white font-bold">Cybersecurity Specialist</span> focused on{' '}
                  <span className="text-cyber-green-400 font-semibold">Digital Forensics & Incident Response</span>,{' '}
                  <span className="text-cyber-cyan-400 font-semibold">SOC Operations</span>, and{' '}
                  <span className="text-cyber-blue-400 font-semibold">Threat Hunting</span>.
                </p>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  I actively build lab environments, recreate attack scenarios, analyze memory dumps, dissect Windows Event Logs and Sysmon traces, and inspect PCAP network traffic to detect subtle anomalies.
                </p>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  As a <span className="text-purple-400 font-semibold">Bug Bounty Researcher on HackerOne</span>, I contribute responsible vulnerability disclosures and help organizations secure their attack surface.
                </p>

                {/* Divider */}
                <div className="section-divider my-4" />

                {/* Focus Areas */}
                <div>
                  <p className="text-[11px] font-mono uppercase text-gray-500 mb-3 tracking-widest">
                    ▸ Core Capabilities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {focusAreas.map((area, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 + idx * 0.08 }}
                        className={`tag-pill ${area.color}`}
                      >
                        <area.icon className="text-[9px]" />
                        {area.label}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Location + Email quick bar */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-premium rounded-xl p-4 flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyber-green-400 text-sm flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-600 font-mono uppercase tracking-wider">Location</p>
                  <p className="text-xs text-gray-300 font-semibold">Pune, Maharashtra, India</p>
                </div>
              </div>
              <div className="glass-premium rounded-xl p-4 flex items-center gap-3">
                <FaCheckCircle className="text-cyber-cyan-400 text-sm flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-600 font-mono uppercase tracking-wider">Status</p>
                  <p className="text-xs text-cyber-cyan-400 font-semibold">Open to Opportunities</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
