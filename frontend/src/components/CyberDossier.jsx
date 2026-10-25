import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  FaShieldAlt,
  FaSearch,
  FaTerminal,
  FaMicroscope,
  FaNetworkWired,
  FaWindows,
  FaDatabase,
  FaFingerprint,
  FaTools,
  FaExclamationTriangle,
  FaBug,
  FaChartBar,
  FaSkull,
  FaLock,
  FaServer,
  FaGlobe,
  FaCreditCard,
  FaUserShield,
  FaLinux,
  FaPython,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaCalendarAlt,
  FaBuilding,
  FaCheckCircle,
  FaTimes,
  FaMemory,
  FaFileAlt,
  FaLayerGroup,
  FaCogs,
} from 'react-icons/fa';
import { SiSplunk, SiOwasp, SiMetasploit, SiHackerone } from 'react-icons/si';

// ================= DATA DEFINITIONS =================
const skillCategories = [
  {
    title: 'Digital Forensics',
    icon: FaMicroscope,
    gradient: 'from-cyber-green-500 to-emerald-500',
    accent: '#00ff88',
    skills: [
      { name: 'Memory & Volatility', level: 90 },
      { name: 'Windows Registry & Prefetch', level: 86 },
      { name: 'Network PCAP Forensics', level: 82 },
      { name: 'FTK Imager Acquisition', level: 85 },
      { name: 'Electronic Chain of Custody', level: 88 },
    ],
  },
  {
    title: 'Security Operations (SOC)',
    icon: FaShieldAlt,
    gradient: 'from-cyber-cyan-500 to-blue-500',
    accent: '#00e5ff',
    skills: [
      { name: 'Incident Triage & Response', level: 88 },
      { name: 'Splunk SIEM SPL & Dashboards', level: 82 },
      { name: 'Sysmon & Event Log Correlation', level: 85 },
      { name: 'Threat Hunting (MITRE)', level: 84 },
      { name: 'Vulnerability Scanning', level: 80 },
    ],
  },
  {
    title: 'Offensive & Bug Bounty',
    icon: FaSkull,
    gradient: 'from-red-500 to-orange-500',
    accent: '#ef4444',
    skills: [
      { name: 'HackerOne Bug Bounty Hunting', level: 85 },
      { name: 'OWASP Top 10 Auditing', level: 84 },
      { name: 'Burp Suite Pro (BOLA/IDOR)', level: 88 },
      { name: 'Metasploit & Reconnaissance', level: 78 },
      { name: 'Hydra & Brute-Force Testing', level: 82 },
    ],
  },
  {
    title: 'Security Architecture & DevOps',
    icon: FaLock,
    gradient: 'from-purple-500 to-pink-500',
    accent: '#a855f7',
    skills: [
      { name: 'Linux System Administration', level: 88 },
      { name: 'Python Automation & Scripting', level: 82 },
      { name: 'DevSecOps & CI/CD Pipelines', level: 78 },
      { name: 'Docker Container Security', level: 80 },
      { name: 'Terraform IaC Fundamentals', level: 72 },
    ],
  },
];

const projectsData = [
  {
    id: 'p1',
    type: 'project',
    title: 'DevSecOps Learning & Hardening Lab',
    category: 'Security Engineering',
    description:
      'A complete hands-on playground integrating SAST, DAST, container scanning (Trivy), and automated security gating inside GitLab CI/CD pipelines.',
    tags: ['DevSecOps', 'Docker', 'CI/CD', 'SAST/DAST', 'Trivy'],
    github: 'https://github.com/chetanbiranje',
    featured: true,
  },
  {
    id: 'p2',
    type: 'project',
    title: 'Automated Cyber Reconnaissance Toolkit',
    category: 'Recon & OSINT',
    description:
      'Multi-threaded Python recon engine performing subdomain enumeration, DNS resolution, port discovery, and technology stack fingerprinting.',
    tags: ['Python', 'OSINT', 'Nmap', 'DNS Recon', 'Automation'],
    github: 'https://github.com/chetanbiranje',
    featured: true,
  },
  {
    id: 'p3',
    type: 'project',
    title: 'PySecUtils - Forensics & Cryptography Toolkit',
    category: 'Digital Forensics',
    description:
      'Python forensic utility library with modules for file hash validation, EVTX timeline extraction, XOR decoding, and network beacon detection.',
    tags: ['Python', 'DFIR', 'Cryptography', 'Artifact Analysis'],
    github: 'https://github.com/chetanbiranje',
    featured: false,
  },
  {
    id: 'p4',
    type: 'project',
    title: 'Web Application Pentest Framework',
    category: 'Offensive Security',
    description:
      'Structured security assessment methodology covering OWASP Top 10 vulnerabilities with automated testing scripts, payload dictionaries, and report generators.',
    tags: ['OWASP', 'Burp Suite', 'Web Security', 'API Pentesting'],
    github: 'https://github.com/chetanbiranje',
    featured: false,
  },
  {
    id: 'p5',
    type: 'project',
    title: 'SOC Incident Response Playbooks',
    category: 'SOC & Blue Team',
    description:
      'Battle-tested incident handling runbooks for Ransomware, Credential Dumping (LSASS), Phishing campaigns, and unauthorized lateral movement.',
    tags: ['SOC Ops', 'Playbooks', 'Splunk', 'Containment'],
    github: 'https://github.com/chetanbiranje',
    featured: false,
  },
  {
    id: 'p6',
    type: 'project',
    title: 'Automated Malware Triage Sandbox',
    category: 'Threat Analysis',
    description:
      'Isolated hypervisor environment script that runs suspicious executables, intercepts network requests via INetSim, and extracts PE headers and YARA hits.',
    tags: ['Malware Analysis', 'YARA', 'Wireshark', 'Dynamic Analysis'],
    github: 'https://github.com/chetanbiranje',
    featured: false,
  },
];

const caseStudiesData = [
  {
    id: 'cs1',
    type: 'writeup',
    title: 'Cobalt Strike Beacon Injected Memory Forensics',
    category: 'Memory Forensics',
    icon: FaMemory,
    summary:
      'Triaging injected shellcode inside svchost.exe using Volatility 3, extracting C2 staging pipes and active beacon interval timers.',
    scenario:
      'A host flagged anomalous TLS traffic to an unclassified IP. Acquired 8GB raw RAM image with FTK Imager for immediate blue team investigation.',
    findings: [
      'Identified unbacked executable memory in svchost.exe (PID 3488) using Volatility "windows.malfind".',
      'Extracted reflective DLL loader signature matching Cobalt Strike payload.',
      'Discovered 60s sleep interval with 20% jitter and staging named pipe \\\\.\\pipe\\msse-*.',
    ],
    outcome:
      'Isolated endpoint within 12 minutes, invalidated Kerberos Golden Ticket candidates, and blackholed C2 infrastructure.',
    tools: ['Volatility 3', 'FTK Imager', 'YARA', 'CyberChef'],
  },
  {
    id: 'cs2',
    type: 'writeup',
    title: 'DNS Tunneling & C2 Exfiltration PCAP Triage',
    category: 'Network Forensics',
    icon: FaNetworkWired,
    summary:
      'Deep packet inspection of a 2.4GB capture uncovering Base64 data hidden inside high-frequency DNS TXT request queries.',
    scenario:
      'Intrusion detection flagged abnormal query rates directed at a newly registered domain name (<48 hours old).',
    findings: [
      'Filtered DNS queries in Wireshark: dns.flags.response == 0 and dns.qry.type == 16 (TXT).',
      'Subdomain character set yielded Shannon entropy >4.2, indicative of ciphertext payload.',
      'Reconstructed payload fragments into stolen configuration credentials.',
    ],
    outcome:
      'Authored custom Suricata NIDS rule and sinkholed attacker DNS infrastructure.',
    tools: ['Wireshark', 'Tshark', 'Python Scapy', 'NetworkMiner'],
  },
  {
    id: 'cs3',
    type: 'writeup',
    title: 'Hunting Pass-the-Hash with Sysmon & Windows Event Logs',
    category: 'SOC & Threat Hunting',
    icon: FaShieldAlt,
    summary:
      'Correlating Windows Event ID 4624 (Logon Type 9 - NewCredentials) with Sysmon ID 10 to detect lateral movement.',
    scenario:
      'Attacker obtained local administrator NTLM hashes through LLMNR/NBT-NS poisoning and attempted lateral movement.',
    findings: [
      'Detected Logon Type 9 (NewCredentials) creating secondary access token.',
      'Correlated with Sysmon ID 10: non-SYSTEM process accessing lsass.exe with 0x1010 access mask.',
      'Tracked subsequent PSEXESVC.exe service creation on target server.',
    ],
    outcome:
      'Constructed Splunk SPL correlation rule and enforced host-level LmCompatibilityLevel mitigation.',
    tools: ['Splunk SIEM', 'Sysmon', 'Event Viewer', 'Mimikatz Labs'],
  },
  {
    id: 'cs4',
    type: 'writeup',
    title: 'BOLA Vulnerability in Financial REST API (HackerOne)',
    category: 'Bug Bounty / AppSec',
    icon: FaBug,
    summary:
      'Responsible disclosure: Broken Object Level Authorization enabling cross-tenant document and invoice exposure.',
    scenario:
      'Authorized audit of endpoint /api/v2/users/{user_id}/invoices on a commercial fintech partner platform.',
    findings: [
      'Inspected authenticated session tokens in Burp Suite Professional.',
      'Replaced User A ID with User B identifier while preserving User A JWT bearer token.',
      'API returned 200 OK with User B private invoices due to missing database tenant ownership check.',
    ],
    outcome:
      'Filed responsible disclosure report on HackerOne; engineering deployed tenant verification middleware in under 48 hours.',
    tools: ['Burp Suite Pro', 'Postman', 'HackerOne Platform'],
  },
];

const experienceData = [
  {
    company: 'ShadowFox',
    role: 'Cybersecurity Intern',
    period: 'Oct 2026 - Present',
    type: 'Internship · Remote',
    color: '#00ff88',
    highlights: [
      'Conducting comprehensive vulnerability assessments and blue-team attack vector analysis.',
      'Developing automated security scanning scripts and log ingestion pipelines.',
      'Participating in hands-on purple team simulation drills and incident containment.',
    ],
    skills: ['DFIR', 'Threat Analysis', 'Automation', 'Log Review'],
  },
  {
    company: 'NETWORKWALKS',
    role: 'Cybersecurity Intern',
    period: 'Oct 2026 - Present',
    type: 'Internship · Remote',
    color: '#00e5ff',
    highlights: [
      'Monitoring network packet streams and establishing baseline telemetry for anomaly detection.',
      'Analyzing packet captures (PCAP) for malicious protocol behaviors and port sweeps.',
      'Documenting Standard Operating Procedures (SOPs) for rapid incident response.',
    ],
    skills: ['Network Forensics', 'Wireshark', 'PCAP Triage', 'SOPs'],
  },
  {
    company: 'CodeAlpha',
    role: 'Cyber Security Intern',
    period: 'Oct 2026 - Present',
    type: 'Internship · Remote',
    color: '#00a1ff',
    highlights: [
      'Building penetration testing utilities and automated reconnaissance scripts in Python.',
      'Solving complex CTF challenges covering cryptography, reverse engineering, and web security.',
      'Hardening Linux environments according to CIS benchmarks.',
    ],
    skills: ['Python', 'Penetration Testing', 'CTF', 'Linux Security'],
  },
];

const educationData = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Specialization in Cyber Security',
    institution: 'Dr. D.Y. Patil University',
    period: '2023 - 2026 (Final Year)',
    status: 'In Progress · 8.5+ CGPA',
    accent: '#00ff88',
    highlights: [
      'Key Coursework: Digital Forensics, Network Security, Operating Systems, Cryptography, Database Management.',
      'Active cybersecurity community speaker and CTF mentor for junior batches.',
    ],
  },
  {
    degree: 'Diploma in Computer Engineering',
    field: 'Computer Engineering & Systems',
    institution: 'Sant Gajanan Maharaj Rural Polytechnic (MSBTE)',
    period: '2020 - 2023',
    status: 'Graduated with First Class Distinction',
    accent: '#00e5ff',
    highlights: [
      'Strong foundations in computer networking, hardware architecture, C/C++, and Linux systems.',
    ],
  },
];

const certificationsData = [
  {
    title: 'Linux 100: Fundamentals',
    authority: 'TCM Security',
    date: 'Jan 2026',
    verifyUrl:
      'https://academy.tcm-sec.com/courses/2631779/certificate?utm_source=student_mailer&utm_medium=email&utm_campaign=issued_certificate_notification',
    category: 'DFIR & Systems',
    accent: '#00ff88',
  },
  {
    title: 'Red Team Mastery: Advanced Offensive Security',
    authority: 'Udemy',
    date: 'Mar 2026',
    verifyUrl: 'https://www.udemy.com/',
    category: 'Offensive Security',
    accent: '#ef4444',
  },
  {
    title: 'Become a Hydra Expert: Advanced Brute Forcing',
    authority: 'Udemy',
    date: 'Jun 2026',
    verifyUrl: 'https://ude.my/UC-a5ebe270-5431-4bdc-aa06-e35d053cd82d',
    category: 'Offensive Security',
    accent: '#ef4444',
  },
  {
    title: 'GCP DevOps: Terraform IaC & Azure DevOps CI/CD',
    authority: 'Udemy',
    date: 'Jun 2026',
    verifyUrl: 'https://ude.my/UC-04a3cc09-d190-4345-8037-6d0ac8811310',
    category: 'Cloud & DevOps',
    accent: '#00e5ff',
  },
  {
    title: 'Threat Intelligence Fundamentals for SOC Analysts',
    authority: 'ULSA / Credsverse',
    date: 'Dec 2025',
    verifyUrl: 'https://credsverse.com/credentials/ca976a28-ab95-4056-a139-72fd1144be7f?preview=1',
    category: 'SOC & Intel',
    accent: '#00a1ff',
  },
  {
    title: 'Fundamentals of Dark Web & Underground Intel',
    authority: 'ULSA / Credsverse',
    date: 'Dec 2025',
    verifyUrl: 'https://credsverse.com/credentials/dd28ab16-820d-40df-95d5-e8517d872117?preview=1',
    category: 'SOC & Intel',
    accent: '#a855f7',
  },
  {
    title: 'Application Security Training',
    authority: 'DevTown',
    date: 'Dec 2025',
    verifyUrl: 'https://www.cert.devtown.in/verify/ewI7y',
    category: 'AppSec',
    accent: '#00ff88',
  },
  {
    title: 'Cyber Security Intern Certification',
    authority: 'Codec Technologies India',
    date: 'Dec 2025',
    verifyUrl:
      'https://drive.google.com/file/d/1f0MDRspGkAiHepnEvMSJ_1-Mp40rLZXP/view?usp=drivesdk',
    category: 'Industry Experience',
    accent: '#00e5ff',
  },
  {
    title: 'Python Developer Intern Certification',
    authority: 'Codec Technologies India',
    date: 'Dec 2025',
    verifyUrl:
      'https://drive.google.com/file/d/1WpgMuoQ6CxwVb2IDMfm0_7v-0jlM0STB/view?usp=drivesdk',
    category: 'Development',
    accent: '#f59e0b',
  },
  {
    title: 'Diploma in Computer Engineering',
    authority: 'MSBTE State Board',
    date: '2023',
    verifyUrl: 'https://msbte.org.in/',
    category: 'Academic',
    accent: '#00a1ff',
  },
];

const affiliationsData = [
  {
    title: 'HackerOne Bug Bounty',
    role: 'Active Security Researcher',
    desc: 'Responsible vulnerability disclosures across web apps and financial APIs.',
    status: 'Verified Hunter',
    icon: SiHackerone,
    color: '#a855f7',
    url: 'https://hackerone.com/chetanbiranje',
  },
  {
    title: 'OWASP Foundation',
    role: 'Community Contributor',
    desc: 'Advancing application security standards, Juice Shop documentation & CTFs.',
    status: 'Community Member',
    icon: FaShieldAlt,
    color: '#00ff88',
    url: 'https://owasp.org/',
  },
  {
    title: 'TCM Security Academy',
    role: 'Credentialed Student',
    desc: 'Verified graduate in Linux 100 & practical cybersecurity domains.',
    status: 'Verified',
    icon: FaAward,
    color: '#00e5ff',
    url: 'https://academy.tcm-sec.com/',
  },
  {
    title: 'GitHub Security Open Source',
    role: 'Tools Maintainer',
    desc: 'Maintains open-source security scripts (PySecUtils, DevSecOps Lab).',
    status: '35+ Stars',
    icon: FaGithub,
    color: '#ffffff',
    url: 'https://github.com/chetanbiranje',
  },
];

// ================= MAIN COMPONENT =================
const CyberDossier = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [projectFilter, setProjectFilter] = useState('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-60px' });

  const tabs = [
    { id: 'skills', label: '01 // Arsenal & Stack', icon: FaMicroscope },
    { id: 'operations', label: '02 // Labs & Projects', icon: FaCogs },
    { id: 'career', label: '03 // Career & Education', icon: FaBriefcase },
    { id: 'credentials', label: '04 // Certs & Badges', icon: FaAward },
  ];

  return (
    <div
      id="dossier"
      ref={containerRef}
      className="py-20 md:py-28 relative overflow-hidden text-gray-300"
    >
      {/* Detail Modal for DFIR Case Studies */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-dark-900 border border-cyber-green-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-dark-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyber-green-400 transition-colors"
              >
                <FaTimes />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-cyber-green-500/10 text-cyber-green-400 text-xl border border-cyber-green-500/30">
                  <selectedCaseStudy.icon />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-cyber-green-400">
                    {selectedCaseStudy.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedCaseStudy.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-5 text-sm">
                <div className="p-4 rounded-xl bg-dark-800/80 border border-gray-800">
                  <h4 className="text-xs font-mono uppercase text-cyber-cyan-400 mb-1">
                    Scenario Overview
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedCaseStudy.scenario}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-cyber-green-400 mb-2">
                    Key Investigative Findings
                  </h4>
                  <ul className="space-y-2">
                    {selectedCaseStudy.findings.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-gray-300">
                        <FaCheckCircle className="text-cyber-green-400 shrink-0 mt-1 text-xs" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-dark-800/80 border border-cyber-green-500/20">
                  <h4 className="text-xs font-mono uppercase text-cyber-green-400 mb-1">
                    Remediation & Outcome
                  </h4>
                  <p className="text-gray-200">{selectedCaseStudy.outcome}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-gray-400 mb-2">
                    Forensic Tools Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.tools.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-dark-950 border border-gray-700 font-mono text-xs text-cyber-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-800/80 border border-cyber-green-500/30 text-[11px] font-mono text-cyber-green-400 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-cyber-green-400 animate-pulse" />
            Central Cyber Command
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Operational{' '}
            <span className="bg-gradient-to-r from-cyber-green-400 via-cyber-cyan-400 to-cyber-blue-500 bg-clip-text text-transparent">
              Dossier &amp; Proof
            </span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto mt-2">
            Explore verified competencies, investigation writeups, production code repositories, and real credentials without endless scrolling.
          </p>
        </motion.div>

        {/* 3D Tab Switcher Capsule */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-2xl bg-dark-900/90 border border-cyber-green-500/20 backdrop-blur-xl flex flex-wrap gap-1 sm:gap-2 shadow-xl shadow-black/50">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'text-dark-950 shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="dossierTabIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 rounded-xl"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="text-xs" />
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB PANELS */}
        <div className="relative min-h-[460px]">
          <AnimatePresence mode="wait">
            {/* ================= TAB 1: ARSENAL & SKILLS ================= */}
            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
              >
                {skillCategories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <div
                      key={idx}
                      className="cyber-card-pro rounded-2xl p-5 flex flex-col justify-between border border-gray-800/80 hover:border-cyber-green-500/40 transition-all"
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-5">
                          <div
                            className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.gradient} text-dark-950 font-bold shadow-md`}
                          >
                            <Icon className="text-base" />
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-white">{cat.title}</h3>
                            <span className="text-[10px] font-mono text-gray-500">
                              {cat.skills.length} core capabilities
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3.5">
                          {cat.skills.map((skill, sIdx) => (
                            <div key={sIdx} className="space-y-1">
                              <div className="flex justify-between text-xs font-mono">
                                <span className="text-gray-300">{skill.name}</span>
                                <span style={{ color: cat.accent }} className="font-bold">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="h-1.5 rounded-full bg-dark-950 overflow-hidden border border-gray-800">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: sIdx * 0.08 }}
                                  className="h-full rounded-full"
                                  style={{
                                    background: `linear-gradient(90deg, ${cat.accent}80, ${cat.accent})`,
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 mt-5 border-t border-gray-800/80 flex items-center justify-between text-[11px] font-mono text-gray-400">
                        <span>Hands-on Lab Verified</span>
                        <span className="text-cyber-green-400">● Live</span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {/* ================= TAB 2: PROJECTS & WRITEUPS ================= */}
            {activeTab === 'operations' && (
              <motion.div
                key="operations"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Sub filter */}
                <div className="flex justify-center gap-2">
                  {[
                    { id: 'all', label: 'All Operations' },
                    { id: 'writeup', label: 'DFIR Investigation Writeups' },
                    { id: 'project', label: 'Code & Tooling Projects' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setProjectFilter(f.id)}
                      className={`px-3.5 py-1.5 rounded-xl font-mono text-xs transition-colors cursor-pointer ${
                        projectFilter === f.id
                          ? 'bg-cyber-green-500/20 border border-cyber-green-400 text-cyber-green-400 font-semibold'
                          : 'bg-dark-900 border border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {/* Writeups */}
                  {(projectFilter === 'all' || projectFilter === 'writeup') &&
                    caseStudiesData.map((cs) => {
                      const Icon = cs.icon;
                      return (
                        <div
                          key={cs.id}
                          onClick={() => setSelectedCaseStudy(cs)}
                          className="cyber-card-pro rounded-2xl p-5 flex flex-col justify-between border border-purple-500/30 hover:border-purple-400/80 cursor-pointer group hover:-translate-y-1 transition-all"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-[10px] uppercase">
                                DFIR Case Study
                              </span>
                              <span className="text-[11px] font-mono text-cyber-green-400 group-hover:underline flex items-center gap-1">
                                Read Log <FaExternalLinkAlt className="text-[9px]" />
                              </span>
                            </div>
                            <div className="flex items-center gap-2.5 mb-2">
                              <div className="p-2 rounded-lg bg-dark-900 text-purple-400 border border-gray-800">
                                <Icon className="text-sm" />
                              </div>
                              <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                                {cs.title}
                              </h3>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                              {cs.summary}
                            </p>
                          </div>

                          <div className="pt-4 mt-4 border-t border-gray-800 flex flex-wrap gap-1.5">
                            {cs.tools.slice(0, 3).map((t, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 text-gray-400 border border-gray-800"
                              >
                                {t}
                              </span>
                            ))}
                            {cs.tools.length > 3 && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 text-gray-500">
                                +{cs.tools.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}

                  {/* Projects */}
                  {(projectFilter === 'all' || projectFilter === 'project') &&
                    projectsData.map((proj) => (
                      <div
                        key={proj.id}
                        className="cyber-card-pro rounded-2xl p-5 flex flex-col justify-between border border-cyber-cyan-500/20 hover:border-cyber-cyan-400/70 transition-all group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-2.5 py-0.5 rounded-full bg-cyber-cyan-500/10 border border-cyber-cyan-500/30 text-cyber-cyan-300 font-mono text-[10px] uppercase">
                              {proj.category}
                            </span>
                            <a
                              href={proj.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors"
                              title="GitHub Source"
                            >
                              <FaGithub className="text-base" />
                            </a>
                          </div>
                          <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyber-cyan-400 transition-colors">
                            {proj.title}
                          </h3>
                          <p className="text-xs text-gray-400 leading-relaxed mb-4">
                            {proj.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-gray-800/80 flex flex-wrap gap-1.5">
                          {proj.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 text-cyber-cyan-300/80 border border-gray-800"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            )}

            {/* ================= TAB 3: CAREER & EDUCATION ================= */}
            {activeTab === 'career' && (
              <motion.div
                key="career"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-12 gap-6"
              >
                {/* Left: Experience Timeline (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-cyber-green-400">
                    <FaBriefcase /> Industry Experience &amp; Internships
                  </div>

                  {experienceData.map((exp, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-dark-900/80 border border-gray-800 hover:border-cyber-green-500/40 transition-all space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h3 className="text-base font-bold text-white flex items-center gap-2">
                            {exp.role}{' '}
                            <span className="text-xs font-mono text-cyber-green-400">
                              @{exp.company}
                            </span>
                          </h3>
                          <p className="text-xs font-mono text-gray-400">{exp.type}</p>
                        </div>
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-dark-950 border border-gray-800 text-gray-300">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-1.5 text-xs text-gray-300">
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="text-cyber-green-400 mt-0.5">▸</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.skills.map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 text-gray-400 border border-gray-800"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right: Education (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-cyber-cyan-400">
                    <FaGraduationCap /> Formal Academic Degree
                  </div>

                  {educationData.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-dark-900/80 border border-gray-800 hover:border-cyber-cyan-500/40 transition-all space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-cyber-cyan-400 font-semibold">
                          {edu.period}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-cyan-500/10 text-cyber-cyan-300 border border-cyber-cyan-500/30">
                          {edu.status}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white">{edu.degree}</h3>
                      <p className="text-xs text-gray-400 font-mono">{edu.institution}</p>

                      <div className="space-y-1 text-xs text-gray-300 pt-1">
                        {edu.highlights.map((hl, hlIdx) => (
                          <p key={hlIdx} className="flex items-start gap-1.5">
                            <span className="text-cyber-cyan-400">▹</span> {hl}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Quick stats box */}
                  <div className="p-4 rounded-2xl bg-dark-950 border border-gray-800/80 flex items-center justify-around text-center">
                    <div>
                      <p className="text-xl font-bold font-mono text-cyber-green-400">3+</p>
                      <p className="text-[10px] uppercase font-mono text-gray-500">Internships</p>
                    </div>
                    <div className="w-px h-8 bg-gray-800" />
                    <div>
                      <p className="text-xl font-bold font-mono text-cyber-cyan-400">8.5+</p>
                      <p className="text-[10px] uppercase font-mono text-gray-500">BCA CGPA</p>
                    </div>
                    <div className="w-px h-8 bg-gray-800" />
                    <div>
                      <p className="text-xl font-bold font-mono text-purple-400">100%</p>
                      <p className="text-[10px] uppercase font-mono text-gray-500">Blue Team Focus</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ================= TAB 4: CERTIFICATES & BADGES ================= */}
            {activeTab === 'credentials' && (
              <motion.div
                key="credentials"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* 4 Community Badges */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {affiliationsData.map((b, idx) => {
                    const Icon = b.icon;
                    return (
                      <a
                        key={idx}
                        href={b.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-dark-900/90 border border-gray-800 hover:border-cyber-green-400/60 transition-all flex flex-col justify-between group hover:-translate-y-1"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2.5">
                            <div className="p-2.5 rounded-xl bg-dark-950 text-white border border-gray-800 group-hover:border-cyber-green-500/40">
                              <Icon className="text-base" style={{ color: b.color }} />
                            </div>
                            <span className="text-[10px] font-mono text-cyber-green-400 bg-cyber-green-500/10 px-2 py-0.5 rounded-full border border-cyber-green-500/30">
                              {b.status}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-white group-hover:text-cyber-green-400 transition-colors">
                            {b.title}
                          </h4>
                          <p className="text-[11px] font-mono text-gray-400">{b.role}</p>
                          <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                            {b.desc}
                          </p>
                        </div>
                        <span className="pt-3 mt-3 border-t border-gray-800/80 text-[10px] font-mono text-gray-500 group-hover:text-white flex items-center justify-between">
                          <span>Profile Link</span>
                          <FaExternalLinkAlt className="text-[8px]" />
                        </span>
                      </a>
                    );
                  })}
                </div>

                {/* 13+ Verified Certifications Grid */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-gray-400 flex items-center gap-2">
                      <FaAward className="text-cyber-green-400" />
                      13+ Verified Technical Credentials
                    </h3>
                    <span className="text-xs font-mono text-cyber-green-400">
                      TCM Security · Udemy · ULSA · DevTown
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certificationsData.map((cert, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-dark-900/60 border border-gray-800/90 hover:border-cyber-green-500/40 flex flex-col justify-between transition-all group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className="text-[9px] font-mono uppercase px-2 py-0.5 rounded"
                              style={{
                                color: cert.accent,
                                backgroundColor: `${cert.accent}15`,
                                border: `1px solid ${cert.accent}30`,
                              }}
                            >
                              {cert.category}
                            </span>
                            <span className="text-[10px] font-mono text-gray-500">
                              {cert.date}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-white group-hover:text-cyber-green-400 transition-colors line-clamp-2">
                            {cert.title}
                          </h4>
                          <p className="text-xs text-gray-400 mt-1 font-mono">
                            {cert.authority}
                          </p>
                        </div>

                        <div className="pt-3 mt-3 border-t border-gray-800/60 flex items-center justify-between text-xs font-mono">
                          <span className="text-[10px] text-cyber-green-400 flex items-center gap-1">
                            <FaCheckCircle className="text-[9px]" /> Verified
                          </span>
                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white flex items-center gap-1 text-[11px]"
                          >
                            Verify <FaExternalLinkAlt className="text-[8px]" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CyberDossier;
