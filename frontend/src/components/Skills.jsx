import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaSearch,
  FaShieldAlt,
  FaCrosshairs,
  FaLock,
  FaServer,
  FaDatabase,
  FaNetworkWired,
  FaWindows,
  FaFingerprint,
  FaMicroscope,
  FaExclamationTriangle,
  FaBug,
  FaCode,
  FaTerminal,
  FaChartBar,
  FaEye,
  FaSkull,
  FaTools,
  FaPython,
  FaLinux,
  FaCogs,
  FaGlobe,
  FaCreditCard,
  FaUserShield,
} from 'react-icons/fa';
import { SiSplunk, SiOwasp, SiMetasploit } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Digital Forensics',
    icon: FaSearch,
    color: 'from-cyber-green-500 to-emerald-500',
    borderColor: 'border-cyber-green-500/20',
    hoverColor: 'hover:border-cyber-green-500/40',
    glowColor: 'group-hover:shadow-cyber',
    skills: [
      { name: 'Forensic Services', icon: FaMicroscope, level: 85 },
      { name: 'Digital Forensics', icon: FaSearch, level: 90 },
      { name: 'Data Forensics', icon: FaDatabase, level: 80 },
      { name: 'Network Forensics', icon: FaNetworkWired, level: 78 },
      { name: 'Windows Forensic', icon: FaWindows, level: 82 },
      { name: 'Electronic Evidence', icon: FaFingerprint, level: 75 },
      { name: 'FTK', icon: FaTools, level: 70 },
      { name: 'Forensic Consulting', icon: FaUserShield, level: 72 },
    ],
  },
  {
    title: 'Security Operations',
    icon: FaShieldAlt,
    color: 'from-cyber-cyan-500 to-blue-500',
    borderColor: 'border-cyber-cyan-500/20',
    hoverColor: 'hover:border-cyber-cyan-500/40',
    glowColor: 'group-hover:shadow-cyber-blue',
    skills: [
      { name: 'Incident Response', icon: FaExclamationTriangle, level: 88 },
      { name: 'Security Incident Response', icon: FaShieldAlt, level: 85 },
      { name: 'Threat Analysis', icon: FaEye, level: 82 },
      { name: 'Threat & Vuln Mgmt', icon: FaCrosshairs, level: 80 },
      { name: 'Vulnerability Scanning', icon: FaBug, level: 85 },
      { name: 'Log Analysis', icon: FaChartBar, level: 78 },
      { name: 'Sysmon', icon: FaTerminal, level: 75 },
    ],
  },
  {
    title: 'Offensive Security',
    icon: FaSkull,
    color: 'from-red-500 to-orange-500',
    borderColor: 'border-red-500/20',
    hoverColor: 'hover:border-red-500/40',
    glowColor: 'group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]',
    skills: [
      { name: 'Red Teaming', icon: FaCrosshairs, level: 72 },
      { name: 'Metasploit', icon: SiMetasploit, level: 78 },
      { name: 'OWASP', icon: SiOwasp, level: 80 },
      { name: 'Bug Bounty', icon: FaBug, level: 82 },
    ],
  },
  {
    title: 'Security Architecture',
    icon: FaLock,
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/20',
    hoverColor: 'hover:border-purple-500/40',
    glowColor: 'group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]',
    skills: [
      { name: 'Security Architecture', icon: FaLock, level: 75 },
      { name: 'Internet Security', icon: FaGlobe, level: 80 },
      { name: 'Integrated Security', icon: FaCogs, level: 72 },
      { name: 'Security Implementation', icon: FaServer, level: 78 },
      { name: 'Cybersecurity', icon: FaShieldAlt, level: 88 },
      { name: 'PCI DSS', icon: FaCreditCard, level: 68 },
      { name: 'Info Sec', icon: FaUserShield, level: 82 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: FaServer,
    color: 'from-amber-500 to-yellow-500',
    borderColor: 'border-amber-500/20',
    hoverColor: 'hover:border-amber-500/40',
    glowColor: 'group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]',
    skills: [
      { name: 'Splunk', icon: SiSplunk, level: 80 },
      { name: 'Linux', icon: FaLinux, level: 85 },
      { name: 'Python', icon: FaPython, level: 78 },
      { name: 'CI/CD', icon: FaCode, level: 72 },
    ],
  },
];

const SkillBar = ({ name, icon: Icon, level, delay, isInView }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, delay }}
    className="group/skill"
  >
    <div className="flex items-center justify-between mb-1.5">
      <div className="flex items-center gap-2">
        <Icon className="text-xs text-gray-500 group-hover/skill:text-cyber-green-400 transition-colors" />
        <span className="text-xs font-mono text-gray-400 group-hover/skill:text-gray-300 transition-colors">
          {name}
        </span>
      </div>
      <span className="text-xs font-mono text-gray-600">{level}%</span>
    </div>
    <div className="skill-progress">
      <motion.div
        className="skill-progress-bar"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.5, delay: delay + 0.3, ease: 'easeOut' }}
      />
    </div>
  </motion.div>
);

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="py-20 md:py-32 bg-dark-900/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyber-green-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyber-cyan-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading">
            <span className="text-gray-500">&lt;</span> 02. Skills & Arsenal{' '}
            <span className="text-gray-500">/&gt;</span>
          </p>
          <h2 className="section-heading">
            Technical <span className="text-cyber-green-500">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green-500 to-cyber-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className={`cyber-card rounded-xl p-6 group ${category.borderColor} ${category.hoverColor} ${category.glowColor}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}>
                  <category.icon className="text-lg text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={catIndex * 0.1 + skillIndex * 0.05}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
