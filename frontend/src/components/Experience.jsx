import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaShieldAlt,
  FaBug,
  FaNetworkWired,
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaWifi,
  FaHandshake,
  FaHardHat,
} from 'react-icons/fa';

const experiences = [
  {
    company: 'ShadowFox',
    role: 'Cybersecurity Intern',
    period: 'Oct 2026 - Present',
    location: 'Remote',
    type: 'Internship',
    icon: FaShieldAlt,
    color: 'cyber-green',
    description: [
      'Conducting comprehensive security assessments and vulnerability analysis',
      'Performing threat hunting and incident response exercises',
      'Developing security automation scripts and tools',
      'Participating in red team vs blue team simulations',
    ],
  },
  {
    company: 'NETWORKWALKS',
    role: 'Cybersecurity Intern',
    period: 'Oct 2026 - Present',
    location: 'Remote',
    type: 'Internship',
    icon: FaNetworkWired,
    color: 'cyber-cyan',
    description: [
      'Working on network security monitoring and analysis',
      'Implementing security protocols and best practices',
      'Analyzing network traffic patterns for anomaly detection',
      'Contributing to security documentation and SOPs',
    ],
  },
  {
    company: 'CodeAlpha',
    role: 'Cyber Security Intern',
    period: 'Oct 2026 - Present',
    location: 'Remote',
    type: 'Internship',
    icon: FaShieldAlt,
    color: 'cyber-blue',
    description: [
      'Working on cybersecurity projects and research',
      'Developing security tools and frameworks',
      'Participating in CTF challenges and security exercises',
      'Learning advanced penetration testing techniques',
    ],
  },
  {
    company: 'HackerOne',
    role: 'Bug Bounty Researcher',
    period: 'Jun 2025 - Present',
    location: 'Remote',
    type: 'Freelance',
    icon: FaBug,
    color: 'cyber-green',
    description: [
      'Actively hunting for security vulnerabilities in web applications',
      'Reporting security flaws following responsible disclosure practices',
      'Specializing in OWASP Top 10 vulnerabilities',
      'Building reputation in the bug bounty community',
    ],
  },
  {
    company: 'Shridhar Plastic & Fabricator',
    role: 'Site Engineer',
    period: 'Aug 2026 - Present',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    icon: FaHardHat,
    color: 'amber',
    description: [
      'Managing site operations and project coordination',
      'Overseeing fabrication processes and quality control',
      'Coordinating with teams for project deliverables',
    ],
  },
  {
    company: 'Jio Platforms Limited',
    role: 'Jio Fiber Executive',
    period: 'Jul 2024 - Present',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    icon: FaWifi,
    color: 'blue',
    description: [
      'Managing fiber optic network installations and customer relations',
      'Troubleshooting network connectivity and performance issues',
      'Providing technical support for Jio Fiber services',
    ],
  },
  {
    company: 'Mahalaxmi Communication',
    role: 'Field Sales Executive',
    period: 'Jun 2021 - May 2023',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    icon: FaHandshake,
    color: 'purple',
    description: [
      'Managed field sales operations and client relationships',
      'Achieved sales targets through strategic planning and execution',
      'Built strong communication and negotiation skills',
    ],
  },
];

const colorMap = {
  'cyber-green': {
    bg: 'bg-cyber-green-500',
    bgLight: 'bg-cyber-green-500/10',
    text: 'text-cyber-green-500',
    border: 'border-cyber-green-500/30',
    shadow: 'shadow-cyber',
    dot: 'bg-cyber-green-500',
  },
  'cyber-cyan': {
    bg: 'bg-cyber-cyan-500',
    bgLight: 'bg-cyber-cyan-500/10',
    text: 'text-cyber-cyan-500',
    border: 'border-cyber-cyan-500/30',
    shadow: 'shadow-cyber-blue',
    dot: 'bg-cyber-cyan-500',
  },
  'cyber-blue': {
    bg: 'bg-cyber-blue-500',
    bgLight: 'bg-cyber-blue-500/10',
    text: 'text-cyber-blue-500',
    border: 'border-cyber-blue-500/30',
    shadow: 'shadow-cyber-blue',
    dot: 'bg-cyber-blue-500',
  },
  amber: {
    bg: 'bg-amber-500',
    bgLight: 'bg-amber-500/10',
    text: 'text-amber-500',
    border: 'border-amber-500/30',
    shadow: 'shadow-[0_0_15px_rgba(245,158,11,0.2)]',
    dot: 'bg-amber-500',
  },
  blue: {
    bg: 'bg-blue-500',
    bgLight: 'bg-blue-500/10',
    text: 'text-blue-500',
    border: 'border-blue-500/30',
    shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.2)]',
    dot: 'bg-blue-500',
  },
  purple: {
    bg: 'bg-purple-500',
    bgLight: 'bg-purple-500/10',
    text: 'text-purple-500',
    border: 'border-purple-500/30',
    shadow: 'shadow-[0_0_15px_rgba(168,85,247,0.2)]',
    dot: 'bg-purple-500',
  },
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="py-20 md:py-32 bg-dark-500 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-cyber-green-500/3 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading">
            <span className="text-gray-500">&lt;</span> 03. Experience{' '}
            <span className="text-gray-500">/&gt;</span>
          </p>
          <h2 className="section-heading">
            Work <span className="text-cyber-green-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green-500 to-cyber-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyber-green-500/50 via-cyber-cyan-500/30 to-transparent" />

          {experiences.map((exp, index) => {
            const colors = colorMap[exp.color];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative mb-12 md:mb-16 ${
                  isLeft ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'
                } pl-12 md:pl-0`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full ${colors.dot} 
                              ring-4 ring-dark-500 z-10`}
                >
                  <div className={`absolute inset-0 rounded-full ${colors.dot} animate-ping opacity-30`} />
                </div>

                {/* Card */}
                <div className={`cyber-card rounded-xl p-6 ${colors.border} hover:${colors.shadow} transition-all duration-300`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${colors.bgLight}`}>
                        <exp.icon className={`text-lg ${colors.text}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <FaBuilding className="text-xs text-gray-500" />
                          <span className={`text-sm font-mono ${colors.text}`}>{exp.company}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 text-xs font-mono rounded-full ${colors.bgLight} ${colors.text}`}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-mono text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-gray-600" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-gray-600" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.dot} flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
