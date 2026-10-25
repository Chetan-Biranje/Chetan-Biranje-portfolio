import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import {
  FaGithub,
  FaLinkedin,
  FaTerminal,
  FaShieldAlt,
  FaChevronDown,
  FaFileAlt,
  FaCopy,
  FaCheck,
  FaAward,
  FaBriefcase,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { SiHackerone } from 'react-icons/si';
import ResumeModal from './ResumeModal';
import CyberTerminal from './CyberTerminal';

// 3D Tilt Hook for Holographic Card
function useTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 20 });
  const springY = useSpring(y, { stiffness: 180, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { rotateX, rotateY, handleMouse, handleLeave };
}

const StatHUD = ({ value, label, color }) => (
  <div className="text-center p-2.5 rounded-xl bg-dark-900/60 border border-gray-800/80">
    <div className={`text-xl sm:text-2xl font-black font-mono ${color}`}>{value}</div>
    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-mono mt-0.5">
      {label}
    </div>
  </div>
);

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { rotateX, rotateY, handleMouse, handleLeave } = useTilt();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('chetanbiranje@proton.me');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-12 lg:py-0">
      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Interactive Cyber Terminal Modal */}
      <CyberTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        isModal={true}
      />

      {/* Cyber Grid Background */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,136,0.6) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,255,136,0.6) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 left-5 w-80 h-80 bg-cyber-green-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-80 h-80 bg-cyber-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Headings, Typewriter, Meta (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Live Operational Beacon */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-dark-900/90 border border-cyber-green-500/40 backdrop-blur-md shadow-lg shadow-cyber-green-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-green-500" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-cyber-green-400 font-semibold">
                Available for DFIR &amp; SOC Roles
              </span>
            </div>

            {/* Main Name Heading */}
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08]">
                Chetan{' '}
                <span className="bg-gradient-to-r from-cyber-green-400 via-cyber-cyan-400 to-cyber-blue-500 bg-clip-text text-transparent">
                  Biranje
                </span>
              </h1>
            </div>

            {/* Typewriter Specializations */}
            <div className="flex items-center gap-3 font-mono text-base sm:text-xl md:text-2xl text-gray-200">
              <span className="text-cyber-green-400 font-bold">&gt;</span>
              <TypeAnimation
                sequence={[
                  'Digital Forensics & Incident Response (DFIR)',
                  2000,
                  'SOC Operations & Blue Team Defense',
                  2000,
                  'Threat Hunting & Sysmon Log Correlation',
                  2000,
                  'RAM Memory & Network PCAP Forensics',
                  2000,
                  'Bug Bounty Researcher @ HackerOne',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-cyber-green-400 font-semibold"
                repeat={Infinity}
              />
            </div>

            {/* Concise Mission Statement */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl border-l-2 border-cyber-green-500/30 pl-4">
              Cybersecurity professional specializing in deep digital forensics, SIEM correlation, and practical threat mitigation. Transforming raw telemetry into actionable defense.
            </p>

            {/* Quick Stat HUD */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg">
              <StatHUD value="3+" label="Internships" color="text-cyber-green-400" />
              <StatHUD value="13+" label="Certificates" color="text-cyber-cyan-400" />
              <StatHUD value="6+" label="Projects" color="text-cyber-blue-400" />
              <StatHUD value="4+" label="DFIR Labs" color="text-purple-400" />
            </div>

            {/* Verification Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { label: 'Pune, India', icon: FaMapMarkerAlt, color: 'text-cyber-green-400 border-cyber-green-500/30' },
                { label: 'DY Patil BCA (Cybersecurity)', icon: FaAward, color: 'text-cyber-cyan-400 border-cyber-cyan-500/30' },
                { label: 'HackerOne Hunter', icon: SiHackerone, color: 'text-purple-400 border-purple-500/30' },
              ].map(({ label, icon: Icon, color }) => (
                <span
                  key={label}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-900/80 border text-[11px] font-mono ${color}`}
                >
                  <Icon className="text-[10px]" />
                  {label}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <ScrollLink
                to="dossier"
                smooth={true}
                duration={500}
                offset={-70}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 text-dark-950 font-bold text-xs font-mono uppercase tracking-wider shadow-lg shadow-cyber-green-500/20 hover:shadow-cyber-green-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                Explore Dossier
              </ScrollLink>

              <button
                onClick={() => setIsTerminalOpen(true)}
                className="px-5 py-3 rounded-xl bg-dark-900/90 border border-cyber-green-500/40 hover:border-cyber-green-400 text-cyber-green-400 font-bold text-xs font-mono uppercase tracking-wider hover:bg-cyber-green-500/10 transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <FaTerminal className="text-xs" />
                Launch Shell
              </button>

              <button
                onClick={() => setIsResumeOpen(true)}
                className="px-5 py-3 rounded-xl border border-gray-700 hover:border-cyber-cyan-400 text-gray-300 hover:text-white font-mono text-xs uppercase tracking-wider bg-dark-900/60 hover:bg-dark-900 transition-all flex items-center gap-2 cursor-pointer"
              >
                <FaFileAlt className="text-xs text-cyber-cyan-400" />
                Resume
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-xl border border-gray-800 text-gray-400 hover:text-gray-200 font-mono text-xs bg-dark-950/60 hover:border-gray-700 transition-all flex items-center gap-1.5 cursor-pointer"
                title="Copy Email Address"
              >
                {copied ? <FaCheck className="text-cyber-green-400" /> : <FaCopy />}
                {copied ? 'Copied' : 'Email'}
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 3D Holographic Portrait Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouse}
              onMouseLeave={handleLeave}
              className="relative w-full max-w-xs sm:max-w-sm cursor-pointer select-none"
            >
              {/* Outer Cyan/Green Radial Glow */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-60 pointer-events-none animate-pulse"
                style={{
                  background:
                    'radial-gradient(ellipse, rgba(0,255,136,0.25) 0%, rgba(0,229,255,0.15) 50%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Main Holographic Tech Frame */}
              <div
                className="relative z-10 rounded-3xl p-[2px] shadow-2xl"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(0,255,136,0.6) 0%, rgba(0,229,255,0.3) 50%, rgba(0,161,255,0.4) 100%)',
                }}
              >
                <div className="rounded-3xl overflow-hidden bg-dark-900 border border-gray-800">
                  {/* Portrait photo */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src="/chetan-portrait.jpg"
                      alt="Chetan Biranje - Cybersecurity Professional"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient shadows */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-75" />

                    {/* Laser corner marks */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyber-green-400" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan-400" />
                    <div className="absolute bottom-16 left-3 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan-400" />
                    <div className="absolute bottom-16 right-3 w-4 h-4 border-b-2 border-r-2 border-cyber-green-400" />

                    {/* Scan beam */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(0deg, transparent 40%, rgba(0,255,136,0.06) 50%, transparent 60%)',
                        animation: 'scanLine 5s linear infinite',
                      }}
                    />
                  </div>

                  {/* Identity Bar */}
                  <div className="p-3.5 bg-dark-950 border-t border-gray-800 flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm">Chetan Biranje</p>
                      <p className="text-cyber-green-400 text-xs font-mono">SOC / DFIR Specialist</p>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-cyber-green-400 bg-cyber-green-500/10 px-2 py-0.5 rounded-full border border-cyber-green-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-green-400 animate-ping" />
                      READY
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Top Right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-dark-900/90 border border-cyber-green-500/40 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2 z-20"
              >
                <div className="w-7 h-7 rounded-lg bg-cyber-green-500/20 text-cyber-green-400 flex items-center justify-center text-xs">
                  <FaShieldAlt />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase font-mono">Role</p>
                  <p className="text-xs font-bold text-white">DFIR Analyst</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-dark-900/90 border border-cyber-cyan-500/40 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2 z-20"
              >
                <div className="w-7 h-7 rounded-lg bg-cyber-cyan-500/20 text-cyber-cyan-400 flex items-center justify-center text-xs">
                  <FaAward />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase font-mono">Credentials</p>
                  <p className="text-xs font-bold text-white">13+ Certificates</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Scroll Pill */}
        <div className="flex justify-center mt-10 md:mt-12">
          <ScrollLink
            to="dossier"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer text-gray-500 hover:text-cyber-green-400 transition-colors flex flex-col items-center gap-1.5 animate-bounce"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Explore</span>
            <FaChevronDown className="text-xs" />
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
