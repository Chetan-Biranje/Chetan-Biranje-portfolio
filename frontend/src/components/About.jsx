import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaShieldAlt,
  FaProjectDiagram,
  FaCertificate,
  FaBriefcase,
  FaCode,
  FaMicrophone,
  FaTerminal,
  FaUniversity,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const stats = [
  { icon: FaProjectDiagram, value: '6+', label: 'Projects Built', color: 'text-cyber-green-400' },
  { icon: FaCertificate, value: '13+', label: 'Certifications', color: 'text-cyber-cyan-400' },
  { icon: FaBriefcase, value: '3+', label: 'Internships', color: 'text-cyber-blue-400' },
  { icon: FaCode, value: '31+', label: 'Core Skills', color: 'text-purple-400' },
];

const focusAreas = [
  'Digital Forensics & Incident Response (DFIR)',
  'Security Operations Center (SOC) Monitoring',
  'Windows & Network PCAP Forensics',
  'Threat Hunting & Sysmon Log Analysis',
  'Bug Bounty & Responsible Disclosure',
  'DevSecOps & Secure CI/CD Pipelines',
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="py-20 md:py-32 bg-dark-500 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-green-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-cyber-green-400 mb-2">
            &lt; 01. About Me /&gt;
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Defending Cyberspace With{' '}
            <span className="bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent">
              Forensic Precision
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green-500 to-cyber-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* 2-Column Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Real-world Speaking & Leadership Photo (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl p-2 bg-gradient-to-tr from-cyber-cyan-500/30 to-cyber-green-500/20 border border-cyber-cyan-500/30 shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-square bg-dark-900">
                <img
                  src="/chetan-speaker.jpg"
                  alt="Chetan Biranje speaking at conference"
                  className="w-full h-full object-cover object-center filter brightness-105 contrast-105 hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />

                {/* Speaker badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-dark-900/85 backdrop-blur-md p-3.5 rounded-xl border border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyber-green-500/20 text-cyber-green-400 flex items-center justify-center">
                      <FaMicrophone className="text-base" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Speaker & Community Contributor</p>
                      <p className="text-[11px] text-gray-400">Cybersecurity Awareness & CTF Mentoring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* University Tag */}
            <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-dark-800/60 border border-gray-800 font-mono text-xs text-gray-300">
              <span className="flex items-center gap-2">
                <FaUniversity className="text-cyber-green-400" />
                DY Patil University
              </span>
              <span className="text-cyber-cyan-400">BCA (Cybersecurity)</span>
            </div>
          </motion.div>

          {/* Right: Narrative Story + Terminal Stats (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Terminal Card */}
            <div className="bg-dark-800/60 border border-cyber-green-500/20 backdrop-blur-xl rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-gray-500">profile_overview.log</span>
              </div>

              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a passionate <span className="text-white font-semibold">Cybersecurity Specialist</span> focused on <span className="text-cyber-green-400 font-medium">Digital Forensics & Incident Response (DFIR)</span>, <span className="text-cyber-cyan-400 font-medium">SOC Operations</span>, and <span className="text-cyber-blue-400 font-medium">Threat Hunting</span>.
                </p>
                <p>
                  I believe security is best learned through practical investigations. I actively build lab environments, recreate attack scenarios, analyze memory dumps, dissect Windows Event Logs and Sysmon traces, and inspect PCAP network traffic to detect subtle anomalies.
                </p>
                <p>
                  In addition to blue team operations, I conduct responsible vulnerability disclosures as a <span className="text-purple-400 font-medium">Bug Bounty Researcher on HackerOne</span> and contribute to open-source tools like OWASP projects.
                </p>
              </div>

              {/* Focus Areas Pill Tags */}
              <div className="mt-6 pt-5 border-t border-gray-800">
                <p className="text-xs font-mono uppercase text-gray-400 mb-3 tracking-wider">
                  Core Investigative Capabilities:
                </p>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 rounded-lg bg-dark-900/80 border border-cyber-green-500/20 text-gray-300 font-mono"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 4 Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-dark-800/40 border border-gray-800 text-center hover:border-cyber-green-500/40 transition-all hover:scale-[1.02]"
                  >
                    <Icon className={`text-2xl mx-auto mb-2 ${stat.color}`} />
                    <p className={`text-2xl font-bold font-mono ${stat.color}`}>{stat.value}</p>
                    <p className="text-xs text-gray-400 font-medium mt-1">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
