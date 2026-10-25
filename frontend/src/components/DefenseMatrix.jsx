import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaTerminal, FaSearch, FaCheckCircle, FaLaptopCode, FaLock } from 'react-icons/fa';

const tactics = [
  {
    id: 'TA0001',
    name: 'Initial Access',
    technique: 'Phishing / Exploit Public App',
    mitreId: 'T1566 / T1190',
    detection: 'Email Gateway DMARC/SPF analysis, WAF alerts, Nginx access logs inspecting SQLi/XSS payloads.',
    tools: ['OWASP', 'Wireshark', 'Burp Suite'],
    eventIds: 'Event ID 4624 (Logon Type 3)',
  },
  {
    id: 'TA0002',
    name: 'Execution',
    technique: 'Command and Scripting Interpreter',
    mitreId: 'T1059.001 (PowerShell)',
    detection: 'Sysmon Event ID 1 (Parent-child process spoofing), PowerShell Script Block Logging (Event ID 4104), EncodedCommand flags.',
    tools: ['Sysmon', 'Splunk SIEM', 'PowerShell Logs'],
    eventIds: 'Sysmon ID 1, Win Event 4104',
  },
  {
    id: 'TA0003',
    name: 'Persistence',
    technique: 'Scheduled Task / Startup Registry',
    mitreId: 'T1053.005 / T1547',
    detection: 'Security Event ID 4698 (Scheduled Task Created) and Sysmon Event ID 13 (Registry Value Set) in Run/RunOnce keys.',
    tools: ['Autoruns', 'Splunk SIEM', 'Sysmon'],
    eventIds: 'Event ID 4698, Sysmon ID 13',
  },
  {
    id: 'TA0005',
    name: 'Defense Evasion',
    technique: 'Process Injection / Masquerading',
    mitreId: 'T1055 / T1036',
    detection: 'Memory dump analysis with Volatility (malfind, ldrmodules) detecting unbacked executable memory pages in svchost.exe.',
    tools: ['Volatility 3', 'FTK Imager', 'Process Hacker'],
    eventIds: 'Sysmon ID 8 (CreateRemoteThread)',
  },
  {
    id: 'TA0006',
    name: 'Credential Access',
    technique: 'OS Credential Dumping: LSASS',
    mitreId: 'T1003.001',
    detection: 'Sysmon Event ID 10 (ProcessAccess to lsass.exe with 0x1010 or 0x1FFFFF rights) triggered by Mimikatz or procdump.',
    tools: ['Sysmon', 'Microsoft Sentinel', 'FTK'],
    eventIds: 'Sysmon ID 10 (LSASS Access)',
  },
  {
    id: 'TA0011',
    name: 'Command & Control',
    technique: 'Application Layer Protocol / DNS C2',
    mitreId: 'T1071.004',
    detection: 'PCAP packet inspection showing periodic HTTP beaconing intervals (jitter analysis) and abnormally long DNS TXT queries.',
    tools: ['Wireshark', 'NetworkMiner', 'Zeek/Suricata'],
    eventIds: 'PCAP DNS/HTTP Stream Analysis',
  },
];

const DefenseMatrix = () => {
  const [selectedTactic, setSelectedTactic] = useState(tactics[1]);

  return (
    <div className="py-20 md:py-32 bg-dark-500 relative overflow-hidden" id="defense-matrix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-cyber-green-400 mb-2">
            &lt; Threat Detection Engineering /&gt;
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            MITRE ATT&CK{' '}
            <span className="bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent">
              Cyber Defense Matrix
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green-500 to-cyber-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            How I map real adversary tactics to concrete Windows Event Logs, Sysmon telemetry, and forensic analysis rules.
          </p>
        </div>

        {/* Matrix Grid + Detail Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Grid: Tactics Cards (7 cols) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {tactics.map((tac) => {
              const isSelected = selectedTactic.id === tac.id;
              return (
                <div
                  key={tac.id}
                  onClick={() => setSelectedTactic(tac)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-dark-800 border-cyber-green-500 shadow-lg shadow-cyber-green-500/15'
                      : 'bg-dark-800/40 border-gray-800 hover:border-gray-700 hover:bg-dark-800/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-cyber-green-400 font-semibold">{tac.id}</span>
                    <span className="text-[11px] font-mono text-gray-500">{tac.mitreId}</span>
                  </div>
                  <h4 className="text-white font-bold text-base mb-1">{tac.name}</h4>
                  <p className="text-xs text-gray-400 line-clamp-2">{tac.technique}</p>

                  <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-cyber-cyan-400">{tac.eventIds.split(',')[0]}</span>
                    <span className="text-gray-500 hover:text-white transition-colors">Details &rarr;</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Interactive Deep-Dive Inspector (5 cols) */}
          <div className="lg:col-span-5 bg-dark-800/70 border border-cyber-green-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between pb-4 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-cyber-green-400" />
                <span className="font-mono text-xs text-cyber-green-400 font-bold uppercase tracking-wider">
                  Tactic Inspector
                </span>
              </div>
              <span className="font-mono text-xs bg-dark-900 px-2.5 py-1 rounded text-cyber-cyan-400 border border-gray-800">
                {selectedTactic.id}
              </span>
            </div>

            <div className="mt-5 space-y-5">
              <div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">Tactic & Technique</p>
                <h3 className="text-xl font-bold text-white mt-0.5">{selectedTactic.name}</h3>
                <p className="text-xs font-mono text-cyber-cyan-400 mt-1">{selectedTactic.technique} ({selectedTactic.mitreId})</p>
              </div>

              <div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1.5">Detection Strategy</p>
                <div className="bg-dark-900/80 p-3.5 rounded-xl border border-gray-800 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {selectedTactic.detection}
                </div>
              </div>

              <div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Key Event Telemetry</p>
                <div className="bg-dark-950 p-3 rounded-lg border border-cyber-green-500/20 font-mono text-xs text-cyber-green-400">
                  {selectedTactic.eventIds}
                </div>
              </div>

              <div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Forensic & Investigation Tools</p>
                <div className="flex flex-wrap gap-2">
                  {selectedTactic.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-dark-900 border border-cyber-cyan-500/30 text-xs font-mono text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DefenseMatrix;
