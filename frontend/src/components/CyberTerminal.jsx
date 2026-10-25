import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTerminal, FaCircle, FaExpand, FaCompress, FaCopy, FaCheck } from 'react-icons/fa';

const CyberTerminal = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: ' Antigravity Cyber Shell v2.4 initialized.' },
    { type: 'output', text: ' Type "help" to view all available DFIR & SOC commands.' },
    { type: 'output', text: ' Hint: There is a secret CTF flag hidden in this terminal... try finding it!' },
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: 'input', text: trimmed }];
    const commandLower = trimmed.toLowerCase();

    switch (commandLower) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `
Available Commands:
  whoami          - Display bio and current focus
  skills          - List core forensics, SOC & offensive capabilities
  certs           - Show verified industry credentials
  projects        - List top security engineering projects
  experience      - View internships and employment history
  defense         - Display DFIR & MITRE ATT&CK detection matrix
  contact         - Show direct contact channels
  clear           - Clear terminal screen
  sudo            - Try running as root
  cat flag.txt    - [CTF Challenge] Reveal the secret flag
`,
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `
[+] Name: Chetan Biranje (Chandrakant)
[+] Role: DFIR Enthusiast | SOC Analyst | Blue Team Operator | Cybersecurity Researcher
[+] Education: BCA in Cyber Security @ DY Patil University
[+] Location: Pune, Maharashtra, India
[+] Status: Available for Internship & Entry-level SOC/DFIR positions
`,
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `
[DIGITAL FORENSICS]: FTK, Autopsy, Memory Forensics (Volatility), Windows Event Logs, Sysmon, Network PCAP (Wireshark)
[SOC & DEFENSE]   : Splunk SIEM, Microsoft Sentinel, Threat Hunting, Vulnerability Management, PCI DSS
[OFFENSIVE SEC]   : Bug Bounty (HackerOne), Metasploit, Hydra, Burp Suite, OWASP Top 10, REST API Pentesting
[AUTOMATION]      : Python for Security, Bash/Linux, Docker, CI/CD Security, DevSecOps
`,
        });
        break;

      case 'certs':
        newHistory.push({
          type: 'output',
          text: `
[1] Linux 100: Fundamentals - TCM Security (2026)
[2] Red Team Mastery: Advanced Offensive Security - Udemy (2026)
[3] Become a Hydra Expert: Advanced Brute Forcing - Udemy (2026)
[4] GCP DevOps: Terraform IaC & Azure DevOps - Udemy (2026)
[5] Threat Intelligence for SOC Analysts - ULSA / Credsverse (2025)
[6] Fundamentals of Dark Web - ULSA / Credsverse (2025)
[7] Application Security Training - DevTown (2025)
[8] MSCIT - Maharashtra State Board (2018)
`,
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `
[>] DevSecOps Learning Lab   : CI/CD security gates, SAST, SCA, container scanning
[>] Security Recon Toolkit   : Python automation for subdomain enum and port scans
[>] PySecUtils               : Security library for network, crypto & forensic extraction
[>] Web App Pentest Framework: Structured OWASP testing checklist and custom payloads
`,
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'output',
          text: `
- ShadowFox      : Virtual Cybersecurity Intern (Oct 2026 - Present)
- NETWORKWALKS   : Cybersecurity Intern (Oct 2026 - Present)
- HackerOne      : Bug Bounty Researcher (Jun 2025 - Present)
- CodeAlpha      : Cyber Security Intern (Oct 2026 - Present)
`,
        });
        break;

      case 'defense':
        newHistory.push({
          type: 'output',
          text: `
[T1059] Execution       -> Detected via Sysmon Event ID 1 (Process Create) & PowerShell Script Block (ID 4104)
[T1053] Persistence     -> Detected via Scheduled Task Creation (Security Event ID 4698)
[T1003] Credential Dump -> Detected via LSASS memory read access (Sysmon ID 10) & Mimikatz signatures
[T1071] C2 Traffic      -> Detected via Wireshark PCAP beaconing frequency & DNS tunnel analysis
`,
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `
Email (Primary)   : chetanbiranje@proton.me
Email (Secondary) : chetanchandrakantbiranje@gmail.com
LinkedIn          : https://linkedin.com/in/chetanbiranje
GitHub            : https://github.com/chetanbiranje
HackerOne         : https://hackerone.com/chetanbiranje
`,
        });
        break;

      case 'cat flag.txt':
      case 'flag':
      case 'flag.txt':
        newHistory.push({
          type: 'output',
          text: `
========================================================================
🎉 CONGRATULATIONS! YOU FOUND THE SECRET CTF EASTER EGG!
🚩 FLAG: FLAG{chetan_biranje_dfir_specialist_ready_for_hire_2026}
========================================================================
Reward unlocked: Direct interview access! Send an email to chetanbiranje@proton.me
with this flag in the subject for immediate priority response!
`,
        });
        break;

      case 'sudo':
      case 'sudo su':
        newHistory.push({
          type: 'output',
          text: '[-] Permission denied: Chetan Biranje is the only root administrator on this system! 😉',
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'output',
          text: `bash: command not found: ${trimmed}. Type "help" for a list of valid commands.`,
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="py-16 md:py-24 bg-dark-500 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-cyber-green-400 mb-2">
            &lt; Interactive CLI /&gt;
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Live Cyber{' '}
            <span className="bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent">
              Terminal
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-green-500 to-cyber-cyan-500 mx-auto mt-3 rounded-full" />
          <p className="text-gray-400 mt-3 text-xs sm:text-sm font-mono max-w-md mx-auto">
            Recruiters & Engineers: Type commands directly to query skills, forensics matrix, or find the CTF flag.
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`rounded-2xl border border-cyber-green-500/30 bg-dark-900/95 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 ${
            isMaximized ? 'fixed inset-4 z-50 flex flex-col' : 'h-[460px] flex flex-col'
          }`}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-dark-950 border-b border-gray-800 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/90 inline-block" />
              <span className="ml-2 font-mono text-xs text-gray-400">chetan@forensics-station:~ (zsh)</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-500 font-mono">
              <span className="hidden sm:inline text-cyber-green-400/80">● SSH Connected</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMaximized(!isMaximized);
                }}
                className="hover:text-cyber-green-400 transition-colors p-1"
                title={isMaximized ? 'Minimize' : 'Maximize'}
              >
                {isMaximized ? <FaCompress size={12} /> : <FaExpand size={12} />}
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto font-mono text-xs sm:text-sm leading-relaxed space-y-2 text-gray-300">
            {history.map((item, idx) => (
              <div key={idx}>
                {item.type === 'input' ? (
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-cyber-green-400">root@chetan:~#</span>
                    <span className="text-cyber-cyan-300 font-semibold">{item.text}</span>
                  </div>
                ) : (
                  <pre className="whitespace-pre-wrap font-mono text-gray-300 text-xs sm:text-sm text-opacity-90 pl-2 border-l border-cyber-green-500/20 py-0.5">
                    {item.text}
                  </pre>
                )}
              </div>
            ))}

            {/* Live Input Line */}
            <div className="flex items-center gap-2 pt-1 text-white">
              <span className="text-cyber-green-400">root@chetan:~#</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none border-none text-cyber-cyan-300 font-mono text-xs sm:text-sm caret-cyber-green-400"
                autoFocus
                placeholder="Type 'help' and press Enter..."
              />
            </div>
            <div ref={terminalEndRef} />
          </div>

          {/* Quick Command Pills at bottom */}
          <div className="px-4 py-2.5 bg-dark-950/80 border-t border-gray-800/80 flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-gray-500 text-[11px]">Quick click:</span>
            {['help', 'whoami', 'skills', 'certs', 'defense', 'cat flag.txt', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommand(cmd);
                }}
                className="px-2.5 py-1 rounded bg-dark-800 hover:bg-cyber-green-500/20 border border-gray-800 hover:border-cyber-green-500/50 text-gray-400 hover:text-cyber-green-400 transition-all text-[11px]"
              >
                ${cmd}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CyberTerminal;
