import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes,
  FaPrint,
  FaDownload,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaCode,
} from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-dark-900/90 backdrop-blur-md">
        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-dark-800 border border-cyber-green-500/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Top Action Bar (hidden when printing) */}
          <div className="print:hidden flex items-center justify-between px-6 py-4 bg-dark-900 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-cyber-green-400 text-lg" />
              <h3 className="text-white font-bold text-sm sm:text-base font-mono">
                Chetan_Biranje_Resume.pdf
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyber-green-500 text-dark-950 font-bold text-xs uppercase tracking-wider hover:bg-cyber-green-400 transition-colors shadow-md shadow-cyber-green-500/20"
              >
                <FaPrint /> Print / Save PDF
              </button>
              <button
                onClick={onClose}
                aria-label="Close resume modal"
                className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-400 hover:text-white transition-colors border border-gray-800"
              >
                <FaTimes size={16} />
              </button>
            </div>
          </div>

          {/* Printable Resume Document */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-6 text-gray-200 bg-dark-850 print:bg-white print:text-gray-900 print:p-0">
            
            {/* Header */}
            <div className="border-b border-gray-800 print:border-gray-300 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black">
                  Chetan Biranje
                </h1>
                <p className="text-cyber-green-400 print:text-green-700 font-mono text-sm sm:text-base font-semibold mt-1">
                  DFIR Enthusiast | SOC & Blue Team Operations | Cybersecurity Researcher
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400 print:text-gray-600 mt-2 font-mono">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-cyber-cyan-400 print:text-gray-600" /> Pune, Maharashtra, India
                  </span>
                  <a href="mailto:chetanbiranje@proton.me" className="flex items-center gap-1 hover:text-cyber-green-400">
                    <FaEnvelope className="text-cyber-green-400 print:text-gray-600" /> chetanbiranje@proton.me
                  </a>
                  <a href="https://linkedin.com/in/chetanbiranje" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-cyber-cyan-400">
                    <FaLinkedin className="text-cyber-blue-400 print:text-gray-600" /> linkedin.com/in/chetanbiranje
                  </a>
                  <a href="https://github.com/chetanbiranje" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
                    <FaGithub className="text-white print:text-gray-600" /> github.com/chetanbiranje
                  </a>
                </div>
              </div>

              {/* Status Badge */}
              <div className="hidden sm:block text-right">
                <span className="inline-block px-3 py-1 rounded-full bg-cyber-green-500/10 border border-cyber-green-500/30 text-cyber-green-400 print:border-green-600 print:text-green-700 text-xs font-mono font-medium">
                  Open to Opportunities
                </span>
                <p className="text-[11px] text-gray-500 mt-1 font-mono">BCA (Cyber Security)</p>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs uppercase font-mono tracking-widest text-cyber-green-400 print:text-green-800 font-bold mb-2 flex items-center gap-2">
                <FaShieldAlt /> Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 print:text-gray-700 leading-relaxed">
                Cybersecurity enthusiast focused on Digital Forensics and Incident Response (DFIR), Security Operations (SOC), and Threat Detection. Currently pursuing a Bachelor of Computer Applications (BCA) at DY Patil University with active hands-on lab experience investigating attack scenarios, analyzing Windows event logs/Sysmon, inspecting PCAP network traffic, memory forensics, and conducting responsible vulnerability disclosures on HackerOne.
              </p>
            </div>

            {/* Core Competencies & Skills */}
            <div>
              <h2 className="text-xs uppercase font-mono tracking-widest text-cyber-cyan-400 print:text-blue-800 font-bold mb-2 flex items-center gap-2">
                <FaCode /> Technical Skills & Tools
              </h2>
              <div className="grid sm:grid-cols-2 gap-2 text-xs">
                <div className="bg-dark-900/60 print:bg-gray-100 p-2.5 rounded-lg border border-gray-800 print:border-gray-300">
                  <p className="font-bold text-white print:text-black">Digital Forensics & Incident Response:</p>
                  <p className="text-gray-400 print:text-gray-600 mt-0.5">FTK, Autopsy, Windows & Linux Forensics, Sysmon, Event Log Analysis, PCAP Network Forensics, Memory Dump Analysis.</p>
                </div>
                <div className="bg-dark-900/60 print:bg-gray-100 p-2.5 rounded-lg border border-gray-800 print:border-gray-300">
                  <p className="font-bold text-white print:text-black">Security Operations & Defense:</p>
                  <p className="text-gray-400 print:text-gray-600 mt-0.5">SIEM (Splunk, Microsoft Sentinel), Threat Hunting, Vulnerability Assessment, OWASP Top 10, PCI DSS.</p>
                </div>
                <div className="bg-dark-900/60 print:bg-gray-100 p-2.5 rounded-lg border border-gray-800 print:border-gray-300">
                  <p className="font-bold text-white print:text-black">Offensive & Application Security:</p>
                  <p className="text-gray-400 print:text-gray-600 mt-0.5">Bug Bounty (HackerOne), Metasploit, Hydra, Burp Suite, Web & REST API Penetration Testing, Red Teaming.</p>
                </div>
                <div className="bg-dark-900/60 print:bg-gray-100 p-2.5 rounded-lg border border-gray-800 print:border-gray-300">
                  <p className="font-bold text-white print:text-black">Platforms & Automation:</p>
                  <p className="text-gray-400 print:text-gray-600 mt-0.5">Python for Security Automation, Linux (CLI/Bash), Git, CI/CD Security, Docker, Cloud (GCP/Azure).</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs uppercase font-mono tracking-widest text-cyber-blue-400 print:text-blue-800 font-bold mb-3 flex items-center gap-2">
                <FaBriefcase /> Work Experience & Internships
              </h2>
              <div className="space-y-3 text-xs">
                <div className="border-l-2 border-cyber-green-500/50 pl-3">
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-white print:text-black text-sm">ShadowFox — Virtual Cybersecurity Intern</p>
                    <span className="text-gray-500 font-mono">Oct 2026 – Present</span>
                  </div>
                  <p className="text-gray-400 print:text-gray-600 mt-0.5">Participating in structured cybersecurity programs covering vulnerability assessments, threat analysis, and hands-on security labs.</p>
                </div>

                <div className="border-l-2 border-cyber-cyan-500/50 pl-3">
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-white print:text-black text-sm">NETWORKWALKS — Cybersecurity Intern</p>
                    <span className="text-gray-500 font-mono">Oct 2026 – Present</span>
                  </div>
                  <p className="text-gray-400 print:text-gray-600 mt-0.5">Exposure to network defense, PCAP packet analysis, penetration testing fundamentals, and digital forensic investigations.</p>
                </div>

                <div className="border-l-2 border-purple-500/50 pl-3">
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-white print:text-black text-sm">HackerOne — Bug Bounty Researcher</p>
                    <span className="text-gray-500 font-mono">Jun 2025 – Present</span>
                  </div>
                  <p className="text-gray-400 print:text-gray-600 mt-0.5">Conducting web application and API security assessments under responsible disclosure guidelines. Identifying OWASP Top 10 flaws.</p>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h2 className="text-xs uppercase font-mono tracking-widest text-purple-400 print:text-purple-800 font-bold mb-3 flex items-center gap-2">
                <FaCode /> Featured Security Projects
              </h2>
              <div className="grid sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-dark-900/50 print:bg-gray-100 border border-gray-800 print:border-gray-300">
                  <p className="font-bold text-white print:text-black">DevSecOps Learning Lab</p>
                  <p className="text-gray-400 print:text-gray-600 mt-0.5">CI/CD security pipeline with integrated SAST, SCA, secrets scanning, container audits, and automated compliance gates.</p>
                </div>
                <div className="p-2.5 rounded-lg bg-dark-900/50 print:bg-gray-100 border border-gray-800 print:border-gray-300">
                  <p className="font-bold text-white print:text-black">Security Recon Toolkit</p>
                  <p className="text-gray-400 print:text-gray-600 mt-0.5">Python automation toolkit for reconnaissance, subdomain enumeration, port scanning, and security reporting.</p>
                </div>
                <div className="p-2.5 rounded-lg bg-dark-900/50 print:bg-gray-100 border border-gray-800 print:border-gray-300">
                  <p className="font-bold text-white print:text-black">PySecUtils</p>
                  <p className="text-gray-400 print:text-gray-600 mt-0.5">Reusable Python utility library for network parsing, hash computation, cryptography, and forensic artifact extraction.</p>
                </div>
                <div className="p-2.5 rounded-lg bg-dark-900/50 print:bg-gray-100 border border-gray-800 print:border-gray-300">
                  <p className="font-bold text-white print:text-black">Web App Pentest Framework</p>
                  <p className="text-gray-400 print:text-gray-600 mt-0.5">Structured web penetration testing framework following OWASP standards with custom checklists and payload scripts.</p>
                </div>
              </div>
            </div>

            {/* Certifications & Education */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xs uppercase font-mono tracking-widest text-amber-400 print:text-amber-800 font-bold mb-2 flex items-center gap-2">
                  <FaAward /> Verified Certifications
                </h2>
                <ul className="text-xs space-y-1 text-gray-300 print:text-gray-700">
                  <li>• <strong>Linux 100: Fundamentals</strong> — TCM Security (2026)</li>
                  <li>• <strong>Red Team Mastery: Advanced Security</strong> — Udemy (2026)</li>
                  <li>• <strong>Become a Hydra Expert: Brute Forcing</strong> — Udemy (2026)</li>
                  <li>• <strong>Threat Intelligence for SOC Analysts</strong> — ULSA (2025)</li>
                  <li>• <strong>Dark Web & Underground Intel</strong> — ULSA (2025)</li>
                  <li>• <strong>Application Security Training</strong> — DevTown (2025)</li>
                  <li>• <strong>MSCIT (Information Technology)</strong> — MSBTE (2018)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xs uppercase font-mono tracking-widest text-cyber-green-400 print:text-green-800 font-bold mb-2 flex items-center gap-2">
                  <FaGraduationCap /> Education & Languages
                </h2>
                <div className="text-xs space-y-2 text-gray-300 print:text-gray-700">
                  <div>
                    <p className="font-bold text-white print:text-black">DY Patil University</p>
                    <p className="text-gray-400 print:text-gray-600">Bachelor of Computer Applications (BCA) — Cyber Security (2025 – Present)</p>
                  </div>
                  <div>
                    <p className="font-bold text-white print:text-black">Sant Gajanan Maharaj Polytechnic</p>
                    <p className="text-gray-400 print:text-gray-600">Diploma of Education (2020 – 2022)</p>
                  </div>
                  <p className="text-gray-400 print:text-gray-600 pt-1">
                    <strong>Languages:</strong> English (Proficient), Marathi (Native), Hindi (Proficient), Kannada.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
