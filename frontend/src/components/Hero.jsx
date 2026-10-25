import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
  FaFileAlt,
  FaCopy,
  FaCheck,
  FaBriefcase,
} from 'react-icons/fa';
import { SiHackerone } from 'react-icons/si';
import ThreeBackground from './ThreeBackground';
import ResumeModal from './ResumeModal';

// 3D Tilt Card Hook
function useTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return { rotateX, rotateY, handleMouse, handleLeave };
}

// Stat counter item
const StatItem = ({ value, label, color }) => (
  <div className="text-center">
    <div className={`text-2xl md:text-3xl font-extrabold font-mono ${color}`}>{value}</div>
    <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">{label}</div>
  </div>
);

// Floating badge
const FloatingBadge = ({ icon: Icon, label, sublabel, colorClass, delay, side }) => (
  <motion.div
    animate={{ y: [0, side === 'top' ? -10 : 10, 0] }}
    transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    className="absolute z-20 bg-dark-800/90 border border-white/10 backdrop-blur-xl px-3 py-2 rounded-2xl shadow-2xl flex items-center gap-2.5"
    style={{
      ...(side === 'top' ? { top: '-20px', right: '-20px' } : { bottom: '-20px', left: '-20px' }),
    }}
  >
    <div className={`w-8 h-8 rounded-xl ${colorClass} flex items-center justify-center`}>
      <Icon className="text-sm" />
    </div>
    <div>
      <p className="text-[9px] text-gray-500 uppercase tracking-wider font-mono">{label}</p>
      <p className="text-xs font-bold text-white leading-tight">{sublabel}</p>
    </div>
  </motion.div>
);

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { rotateX, rotateY, handleMouse, handleLeave } = useTilt();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('chetanbiranje@proton.me');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0 hex-pattern">
      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Three.js 3D Background */}
      <ThreeBackground />

      {/* Ambient Orbs */}
      <div className="orb orb-green w-[500px] h-[500px] top-[-100px] left-[-100px] opacity-70" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-[-50px] right-[-50px] opacity-60" style={{ animationDelay: '3s' }} />
      <div className="orb orb-blue w-[300px] h-[300px] top-[40%] left-[40%] opacity-40" style={{ animationDelay: '6s' }} />

      {/* Cyber Grid Overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,136,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,255,136,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ─── LEFT COLUMN ─── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 text-left space-y-7"
          >
            {/* Live Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-premium border-animate shadow-lg"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-green-500 shadow-[0_0_8px_rgba(0,255,136,0.8)]" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-cyber-green-400 font-semibold">
                Open to DFIR · SOC Analyst Roles
              </span>
            </motion.div>

            {/* Terminal Prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="flex items-center gap-2 font-mono text-xs sm:text-sm text-gray-500 glass-premium w-fit px-4 py-2 rounded-xl"
            >
              <FaTerminal className="text-cyber-green-400 text-xs" />
              <span className="text-gray-600">root@chetan:~#</span>
              <span className="text-cyber-cyan-400 font-semibold">whoami</span>
              <span className="inline-block w-1.5 h-4 bg-cyber-green-400 animate-pulse ml-1" />
            </motion.div>

            {/* Name */}
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-black tracking-tight text-white leading-[1.05]"
              >
                Chetan{' '}
                <span
                  className="bg-gradient-to-r from-cyber-green-400 via-cyber-cyan-400 to-cyber-blue-500 bg-clip-text text-transparent"
                  style={{ filter: 'drop-shadow(0 0 30px rgba(0,255,136,0.4))' }}
                >
                  Biranje
                </span>
              </motion.h1>
            </div>

            {/* Type Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-3 font-mono text-base sm:text-lg md:text-xl text-gray-300"
            >
              <span className="text-cyber-green-400 font-bold text-xl">▸</span>
              <TypeAnimation
                sequence={[
                  'Digital Forensics & Incident Response',
                  2000,
                  'SOC & Blue Team Operations',
                  2000,
                  'Threat Detection & Hunting',
                  2000,
                  'Windows & Network Forensics',
                  2000,
                  'Bug Bounty Researcher · HackerOne',
                  2000,
                ]}
                wrapper="span"
                speed={55}
                className="text-cyber-green-400 font-semibold neon-text"
                repeat={Infinity}
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="text-gray-400 text-base leading-relaxed max-w-xl border-l-2 border-cyber-green-500/30 pl-4"
            >
              Cybersecurity professional specialized in{' '}
              <span className="text-cyber-green-400 font-semibold">DFIR</span>,{' '}
              <span className="text-cyber-cyan-400 font-semibold">SOC operations</span>, and{' '}
              <span className="text-white font-semibold">threat intelligence</span>.
              Passionate about defending digital infrastructure and uncovering threats in complex environments.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="grid grid-cols-4 gap-4 glass-premium rounded-2xl p-4"
            >
              <StatItem value="3+" label="Years Exp" color="text-cyber-green-400" />
              <StatItem value="13+" label="Certs" color="text-cyber-cyan-400" />
              <StatItem value="6+" label="Projects" color="text-cyber-blue-400" />
              <StatItem value="4+" label="Writeups" color="text-purple-400" />
            </motion.div>

            {/* Meta Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {[
                { label: 'Pune, India', icon: FaMapMarkerAlt, color: 'border-cyber-green-500/30 text-cyber-green-400 bg-cyber-green-500/5' },
                { label: 'Open to Work', icon: FaBriefcase, color: 'border-cyber-cyan-500/30 text-cyber-cyan-400 bg-cyber-cyan-500/5' },
                { label: 'HackerOne', icon: SiHackerone, color: 'border-orange-500/30 text-orange-400 bg-orange-500/5' },
                { label: 'DY Patil BCA', icon: FaAward, color: 'border-purple-500/30 text-purple-400 bg-purple-500/5' },
              ].map(({ label, icon: Icon, color }) => (
                <span key={label} className={`tag-pill ${color}`}>
                  <Icon className="text-[10px]" /> {label}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <button
                onClick={() => setIsResumeOpen(true)}
                className="magnetic-btn group flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyber-green-500 to-emerald-500 text-dark-900 font-bold text-sm font-mono uppercase tracking-wider"
              >
                <FaFileAlt className="text-xs group-hover:animate-bounce" />
                View Resume
              </button>

              <a
                href="https://www.linkedin.com/in/chetan-biranje-2b5a36258/"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn group flex items-center gap-2.5 px-6 py-3 rounded-xl border border-cyber-cyan-500/30 text-cyber-cyan-400 bg-cyber-cyan-500/5 font-bold text-sm font-mono uppercase tracking-wider hover:bg-cyber-cyan-500/10 transition-all"
              >
                <FaLinkedin className="text-sm" />
                LinkedIn
              </a>

              <a
                href="https://github.com/Chetan-Biranje"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn group flex items-center gap-2.5 px-6 py-3 rounded-xl border border-gray-700/50 text-gray-400 bg-white/3 font-bold text-sm font-mono uppercase tracking-wider hover:border-gray-500/50 hover:text-gray-200 transition-all"
              >
                <FaGithub className="text-sm" />
                GitHub
              </a>

              <button
                onClick={handleCopyEmail}
                className="magnetic-btn group flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-700/40 text-gray-500 bg-white/3 font-mono text-xs hover:border-gray-600 hover:text-gray-300 transition-all"
              >
                {copied ? <FaCheck className="text-cyber-green-400" /> : <FaCopy />}
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT COLUMN — 3D Photo Card ─── */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouse}
              onMouseLeave={handleLeave}
              className="relative w-full max-w-xs sm:max-w-sm cursor-pointer"
            >
              {/* Outer glow ring */}
              <div
                className="absolute -inset-6 rounded-3xl opacity-50 pointer-events-none animate-pulse"
                style={{
                  background: 'radial-gradient(ellipse, rgba(0,255,136,0.2) 0%, rgba(0,229,255,0.1) 50%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Main Card */}
              <div
                className="relative z-10 rounded-3xl p-[2px] shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,136,0.5) 0%, rgba(0,229,255,0.3) 50%, rgba(0,161,255,0.4) 100%)',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,255,136,0.15)',
                }}
              >
                <div className="rounded-3xl overflow-hidden bg-dark-900">
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src="/chetan-portrait.jpg"
                      alt="Chetan Biranje - Cybersecurity Professional"
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                      style={{ filter: 'brightness(1.05) contrast(1.05) saturate(1.1)' }}
                    />
                    {/* Bottom fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-70" />

                    {/* Corner accent lines */}
                    {[
                      'top-4 left-4 border-t-2 border-l-2 border-cyber-green-400',
                      'top-4 right-4 border-t-2 border-r-2 border-cyber-cyan-400',
                      'bottom-20 left-4 border-b-2 border-l-2 border-cyber-cyan-400',
                      'bottom-20 right-4 border-b-2 border-r-2 border-cyber-green-400',
                    ].map((cls, i) => (
                      <div key={i} className={`absolute w-5 h-5 ${cls}`} />
                    ))}

                    {/* Scan line */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(0deg, transparent 40%, rgba(0,255,136,0.03) 50%, transparent 60%)',
                        animation: 'scanLine 4s linear infinite',
                      }}
                    />
                  </div>

                  {/* Info Panel */}
                  <div className="p-4 bg-dark-900 border-t border-cyber-green-500/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold text-sm">Chetan Biranje</p>
                        <p className="text-cyber-green-400 text-xs font-mono">SOC · DFIR · Blue Team</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-green-500" />
                        </span>
                        <span className="text-[10px] font-mono text-cyber-green-400">AVAILABLE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge — Top Right */}
              <FloatingBadge
                icon={FaShieldAlt}
                label="Specialization"
                sublabel="DFIR & SOC"
                colorClass="bg-cyber-green-500/20 text-cyber-green-400"
                delay={0}
                side="top"
              />

              {/* Floating Badge — Bottom Left */}
              <FloatingBadge
                icon={FaAward}
                label="Credentials"
                sublabel="13+ Certs"
                colorClass="bg-cyber-cyan-500/20 text-cyber-cyan-400"
                delay={0.5}
                side="bottom"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex justify-center mt-16 md:mt-20"
        >
          <ScrollLink
            to="terminal"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer group flex flex-col items-center gap-2 text-gray-600 hover:text-cyber-green-400 transition-colors"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-gray-700 group-hover:border-cyber-green-500/50 flex justify-center pt-1.5 transition-colors">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1.5 rounded-full bg-gray-600 group-hover:bg-cyber-green-400 transition-colors"
              />
            </div>
          </ScrollLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
