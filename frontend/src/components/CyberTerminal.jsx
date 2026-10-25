import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTerminal,
  FaTimes,
  FaCopy,
  FaCheck,
  FaExpand,
  FaCompress,
  FaShieldAlt,
} from 'react-icons/fa';

const CyberTerminal = ({ isOpen = true, onClose, isModal = false }) => {
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: ' Antigravity Cyber Shell v2.4 initialized.' },
    { type: 'output', text: ' Type "help" to view all available DFIR & SOC commands.' },
    { type: 'output', text: ' Hint: There is a secret CTF flag hidden in this terminal... try finding it!' },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isCopied, setIsCopied] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

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
[+] Role: DFIR Enthusiast | SOC Analyst | Blue Team Operator | Bug Bounty Researcher
[+] Education: BCA in Cyber Security @ DY Patil University (2023-2026)
[+] Location: Pune, Maharashtra, India
[+] Status: Available for Internship & Entry-level SOC/DFIR positions
`,
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `
[+] DIGITAL FORENSICS:
    - Volatility 3 (RAM Memory Dumps, Shellcode detection)
    - FTK Imager (Physical Drive & Triage Acquisition)
    - Wireshark / Tshark (PCAP TCP/UDP, DNS Tunneling, Beaconing)
    - Windows Event Log Triaging (Security, System, PowerShell 4104)

[+] SOC & BLUE TEAM:
    - Splunk SIEM (SPL search syntax, Alerting rules, Log parsing)
    - Sysmon (Process Creation ID 1, LSASS Access ID 10, Network ID 3)
    - MITRE ATT&CK TTP Mapping & Incident Triage

[+] OFFENSIVE & TOOLS:
    - HackerOne Bug Bounty (BOLA, IDOR, Auth bypass)
    - OWASP Top 10 | Burp Suite Professional | Metasploit
    - Python Scripting | Bash | Linux System Admin
`,
        });
        break;

      case 'certs':
        newHistory.push({
          type: 'output',
          text: `
[+] Verified Certifications:
    1. Linux 100: Fundamentals - TCM Security
    2. Threat Intelligence for SOC Analysts - ULSA / Credsverse
    3. Dark Web & Underground Intel - ULSA / Credsverse
    4. Red Team Mastery: Advanced Offensive - Udemy
    5. Hydra Expert: Brute Forcing - Udemy
    6. GCP DevOps: Terraform & CI/CD - Udemy
    7. Application Security Training - DevTown
    8. Cybersecurity Intern - Codec Technologies
    9. Python Developer Intern - Codec Technologies
    10. Diploma in Computer Engineering - MSBTE (First Class Dist.)
`,
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `
[+] Top Projects:
    1. DevSecOps Learning Lab (Docker, CI/CD, SAST, DAST)
    2. Automated Security Recon Toolkit (Python, Nmap, DNS)
    3. PySecUtils Forensics Suite (Artifact extraction & Hash verification)
    4. Web App Pentest Framework (OWASP Checklist, Payloads)
    5. Cobalt Strike Memory Dump Analysis Lab (Volatility 3)
    6. DNS Exfiltration PCAP Investigation Lab (Wireshark)
`,
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'output',
          text: `
[+] Career History:
    - Cybersecurity Intern @ ShadowFox (Oct 2026 - Present)
    - Cybersecurity Intern @ NETWORKWALKS (Oct 2026 - Present)
    - Cyber Security Intern @ CodeAlpha (Oct 2026 - Present)
`,
        });
        break;

      case 'defense':
        newHistory.push({
          type: 'output',
          text: `
[+] MITRE ATT&CK Defense Matrix (Quick View):
    - Initial Access (T1566): Email Gateway SPF/DKIM, WAF payload inspection
    - Execution (T1059.001): Sysmon Event ID 1, PowerShell Event ID 4104
    - Persistence (T1053.005): Windows Event ID 4698, Sysmon ID 13
    - Defense Evasion (T1055): Volatility malfind, Sysmon ID 8
    - Credential Access (T1003.001): Sysmon Event ID 10 (LSASS 0x1010)
    - Exfiltration (T1048): DNS high-entropy TXT records, abnormal volume
`,
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `
[+] Contact Channels:
    - Email: chetanbiranje@proton.me
    - Secondary: chetanchandrakantbiranje@gmail.com
    - LinkedIn: https://www.linkedin.com/in/chetan-biranje-2b5a36258/
    - GitHub: https://github.com/Chetan-Biranje
    - HackerOne: https://hackerone.com/chetanbiranje
`,
        });
        break;

      case 'sudo':
        newHistory.push({
          type: 'output',
          text: `[!] Permission Denied: chetan is in the sudoers file, but incident response protocols require MFA confirmation!`,
        });
        break;

      case 'cat flag.txt':
        newHistory.push({
          type: 'output',
          text: `
🚩 [CONGRATULATIONS - CTF FLAG DISCOVERED!]
FLAG{chetan_biranje_dfir_specialist_ready_for_hire_2026}

Proof that you understand command line reconnaissance.
Ready to bring this curiosity and forensic mindset to your security team!
`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'output',
          text: `zsh: command not found: ${trimmed}. Type "help" for a list of available commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex =
        historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      if (historyIndex < commandHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const copyOutput = () => {
    const textToCopy = history
      .map((item) => (item.type === 'input' ? `root@chetan:~# ${item.text}` : item.text))
      .join('\n');
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!isOpen && isModal) return null;

  const terminalContent = (
    <div
      className={`rounded-2xl border border-cyber-green-500/30 bg-dark-950/95 backdrop-blur-2xl overflow-hidden shadow-2xl flex flex-col font-mono ${
        isMaximized
          ? 'fixed inset-4 z-50'
          : isModal
          ? 'w-full max-w-4xl max-h-[85vh] h-[600px]'
          : 'w-full h-[520px]'
      }`}
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-dark-900 border-b border-gray-800/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 cursor-pointer inline-block"
              title="Close"
            />
            <span
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 cursor-pointer inline-block"
              title="Toggle Size"
            />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="ml-3 text-xs text-gray-400 font-semibold flex items-center gap-2">
            <FaTerminal className="text-cyber-green-400 text-xs" />
            chetan@dfir-workstation: ~ (zsh)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={copyOutput}
            className="p-1.5 rounded hover:bg-white/5 text-gray-400 hover:text-white text-xs transition-colors"
            title="Copy Output"
          >
            {isCopied ? <FaCheck className="text-cyber-green-400" /> : <FaCopy />}
          </button>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="p-1.5 rounded hover:bg-white/5 text-gray-400 hover:text-white text-xs transition-colors"
            title={isMaximized ? 'Restore' : 'Maximize'}
          >
            {isMaximized ? <FaCompress /> : <FaExpand />}
          </button>
          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-white/5 text-gray-400 hover:text-white text-xs transition-colors ml-1"
            >
              <FaTimes />
            </button>
          )}
        </div>
      </div>

      {/* Terminal Screen Body */}
      <div
        onClick={() => inputRef.current?.focus()}
        className="flex-1 p-4 overflow-y-auto text-xs leading-relaxed space-y-2 text-gray-300 cursor-text scrollbar-thin"
      >
        {history.map((item, idx) => (
          <div key={idx}>
            {item.type === 'input' ? (
              <div className="flex items-center gap-2 text-white">
                <span className="text-cyber-green-400">root@chetan:~#</span>
                <span className="text-cyber-cyan-300 font-semibold">{item.text}</span>
              </div>
            ) : (
              <pre className="whitespace-pre-wrap font-mono text-gray-300 text-xs pl-2 border-l border-cyber-green-500/20 py-0.5">
                {item.text}
              </pre>
            )}
          </div>
        ))}

        {/* Input prompt */}
        <div className="flex items-center gap-2 pt-1 text-white">
          <span className="text-cyber-green-400">root@chetan:~#</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-cyber-cyan-300 font-mono text-xs caret-cyber-green-400"
            autoFocus
            placeholder="Type 'help' and press Enter..."
          />
        </div>
        <div ref={terminalEndRef} />
      </div>

      {/* Quick click pill bar */}
      <div className="px-4 py-2.5 bg-dark-900/90 border-t border-gray-800/80 flex flex-wrap items-center gap-1.5 text-xs">
        <span className="text-gray-500 text-[10px]">Commands:</span>
        {['help', 'whoami', 'skills', 'certs', 'defense', 'cat flag.txt', 'clear'].map(
          (cmd) => (
            <button
              key={cmd}
              onClick={(e) => {
                e.stopPropagation();
                handleCommand(cmd);
              }}
              className="px-2 py-0.5 rounded bg-dark-800 hover:bg-cyber-green-500/20 border border-gray-800 hover:border-cyber-green-500/40 text-gray-400 hover:text-cyber-green-400 transition-all text-[10px] cursor-pointer"
            >
              ${cmd}
            </button>
          )
        )}
      </div>
    </div>
  );

  if (isModal) {
    return (
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full flex justify-center"
            >
              {terminalContent}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }

  return terminalContent;
};

export default CyberTerminal;
