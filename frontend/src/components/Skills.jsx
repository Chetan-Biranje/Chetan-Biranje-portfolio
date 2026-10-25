import React, { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  FaSearch, FaShieldAlt, FaCrosshairs, FaLock, FaServer, FaDatabase,
  FaNetworkWired, FaWindows, FaFingerprint, FaMicroscope, FaExclamationTriangle,
  FaBug, FaCode, FaTerminal, FaChartBar, FaEye, FaSkull, FaTools, FaPython,
  FaLinux, FaCogs, FaGlobe, FaCreditCard, FaUserShield,
} from 'react-icons/fa';
import { SiSplunk, SiOwasp, SiMetasploit } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Digital Forensics',
    icon: FaSearch,
    gradient: 'from-cyber-green-500 to-emerald-500',
    glow: 'rgba(0,255,136,0.15)',
    accent: '#00ff88',
    skills: [
      { name: 'Digital Forensics', icon: FaMicroscope, level: 90 },
      { name: 'Network Forensics', icon: FaNetworkWired, level: 78 },
      { name: 'Windows Forensics', icon: FaWindows, level: 82 },
      { name: 'Data Forensics', icon: FaDatabase, level: 80 },
      { name: 'Electronic Evidence', icon: FaFingerprint, level: 75 },
      { name: 'FTK Imager', icon: FaTools, level: 70 },
    ],
  },
  {
    title: 'Security Operations',
    icon: FaShieldAlt,
    gradient: 'from-cyber-cyan-500 to-blue-500',
    glow: 'rgba(0,229,255,0.15)',
    accent: '#00e5ff',
    skills: [
      { name: 'Incident Response', icon: FaExclamationTriangle, level: 88 },
      { name: 'Threat Analysis', icon: FaEye, level: 82 },
      { name: 'Vulnerability Mgmt', icon: FaBug, level: 85 },
      { name: 'Log Analysis', icon: FaChartBar, level: 78 },
      { name: 'Sysmon', icon: FaTerminal, level: 75 },
    ],
  },
  {
    title: 'Offensive Security',
    icon: FaSkull,
    gradient: 'from-red-500 to-orange-500',
    glow: 'rgba(239,68,68,0.15)',
    accent: '#ef4444',
    skills: [
      { name: 'Bug Bounty (HackerOne)', icon: FaBug, level: 82 },
      { name: 'OWASP Top 10', icon: SiOwasp, level: 80 },
      { name: 'Metasploit', icon: SiMetasploit, level: 78 },
      { name: 'Red Teaming', icon: FaCrosshairs, level: 72 },
    ],
  },
  {
    title: 'Security Architecture',
    icon: FaLock,
    gradient: 'from-purple-500 to-pink-500',
    glow: 'rgba(168,85,247,0.15)',
    accent: '#a855f7',
    skills: [
      { name: 'Cybersecurity Strategy', icon: FaShieldAlt, level: 88 },
      { name: 'Internet Security', icon: FaGlobe, level: 80 },
      { name: 'Security Implementation', icon: FaServer, level: 78 },
      { name: 'Info Sec', icon: FaUserShield, level: 82 },
      { name: 'PCI DSS', icon: FaCreditCard, level: 68 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: FaServer,
    gradient: 'from-amber-500 to-yellow-500',
    glow: 'rgba(245,158,11,0.15)',
    accent: '#f59e0b',
    skills: [
      { name: 'Splunk SIEM', icon: SiSplunk, level: 80 },
      { name: 'Linux Admin', icon: FaLinux, level: 85 },
      { name: 'Python Scripting', icon: FaPython, level: 78 },
      { name: 'CI/CD', icon: FaCode, level: 72 },
    ],
  },
];

// Animated skill bar
const SkillBar = ({ name, icon: Icon, level, delay, isInView, accent }) => (
  <motion.div
    initial={{ opacity: 0, x: -15 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.4, delay }}
    className="group/s"
  >
    <div className="flex items-center justify-between mb-1.5">
      <div className="flex items-center gap-2">
        <Icon className="text-xs text-gray-600 group-hover/s:text-white transition-colors duration-300" style={{ color: undefined }} />
        <span className="text-[11px] font-mono text-gray-500 group-hover/s:text-gray-200 transition-colors duration-300">{name}</span>
      </div>
      <span className="text-[11px] font-mono font-bold" style={{ color: accent }}>{level}%</span>
    </div>
    <div className="skill-bar-track">
      <motion.div
        className="skill-bar-fill"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.8, delay: delay + 0.2, ease: [0.23, 1, 0.32, 1] }}
        style={{ background: `linear-gradient(90deg, ${accent}cc, ${accent})` }}
      />
    </div>
  </motion.div>
);

// 3D tilt card
const SkillCard = ({ category, catIndex, isInView }) => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 150, damping: 20 });
  const sy = useSpring(my, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(sx, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: catIndex * 0.12, ease: [0.23, 1, 0.32, 1] }}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        className="cyber-card-pro rounded-2xl p-6 h-full cursor-default"
        whileHover={{
          boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${category.glow}`,
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`p-2.5 rounded-xl bg-gradient-to-br ${category.gradient}`}
            style={{ boxShadow: `0 0 15px ${category.glow}` }}
          >
            <category.icon className="text-base text-white" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">{category.title}</h3>
            <p className="text-[10px] font-mono text-gray-600">{category.skills.length} skills</p>
          </div>
          {/* Proficiency ring */}
          <div className="ml-auto">
            <svg width="36" height="36" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2.5" />
              <circle
                cx="18" cy="18" r="14" fill="none"
                stroke={category.accent}
                strokeWidth="2.5"
                strokeDasharray={`${Math.round(category.skills.reduce((a,s)=>a+s.level,0)/category.skills.length * 0.88)} 88`}
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
                style={{ opacity: 0.8 }}
              />
              <text x="18" y="22" textAnchor="middle" fill={category.accent} fontSize="7" fontFamily="monospace" fontWeight="bold">
                {Math.round(category.skills.reduce((a,s)=>a+s.level,0)/category.skills.length)}%
              </text>
            </svg>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-3.5">
          {category.skills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              {...skill}
              delay={catIndex * 0.1 + i * 0.05}
              isInView={isInView}
              accent={category.accent}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div className="py-24 md:py-36 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(2,12,27,0.5) 0%, rgba(6,18,36,0.8) 100%)' }}>
      {/* Orbs */}
      <div className="orb orb-green w-96 h-96 -top-20 -left-20 opacity-30" />
      <div className="orb orb-cyan w-80 h-80 -bottom-10 -right-10 opacity-25" style={{ animationDelay: '4s' }} />

      {/* Hex pattern */}
      <div className="absolute inset-0 hex-pattern opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-number mb-3">02 · Technical Arsenal</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Skills &amp;{' '}
            <span className="bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyber-green-500/50" />
            <div className="w-2 h-2 rounded-full bg-cyber-green-400 shadow-[0_0_8px_rgba(0,255,136,0.8)]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyber-cyan-500/50" />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} catIndex={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
