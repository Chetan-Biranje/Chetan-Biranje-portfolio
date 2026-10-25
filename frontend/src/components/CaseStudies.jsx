import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileAlt, FaExternalLinkAlt, FaSearch, FaTimes, FaShieldAlt, FaBug, FaNetworkWired, FaMemory } from 'react-icons/fa';

const caseStudies = [
  {
    id: 1,
    title: 'Cobalt Strike Beacon Memory Forensics',
    category: 'Memory Forensics',
    icon: FaMemory,
    color: 'text-purple-400',
    border: 'border-purple-500/30',
    summary: 'Investigation of an injected payload inside svchost.exe using Volatility 3, extracting C2 configuration and pipe artifacts.',
    scenario: 'A workstation in an enterprise network exhibited sporadic outbound TLS traffic on non-standard ports. A raw RAM memory dump (8GB) was acquired using FTK Imager for triaging.',
    findings: [
      'Identified unbacked executable memory section in svchost.exe (PID 3488) using Volatility plugin "windows.malfind".',
      'Extracted injected shellcode header matching standard Cobalt Strike reflective DLL loader.',
      'Extracted C2 beacon interval (60s) with 20% jitter and staging pipe \\\\.\\pipe\\msse-*.',
    ],
    outcome: 'Successfully isolated host, revoked compromised Kerberos tickets, and fed C2 IOC IPs into SIEM blocklist.',
    tools: ['Volatility 3', 'FTK Imager', 'YARA', 'CyberChef'],
  },
  {
    id: 2,
    title: 'DNS Tunneling & C2 Exfiltration PCAP Triage',
    category: 'Network Forensics',
    icon: FaNetworkWired,
    color: 'text-cyber-cyan-400',
    border: 'border-cyber-cyan-500/30',
    summary: 'Analyzing 2.4 GB packet capture (PCAP) to identify data exfiltration hidden inside high-entropy Base64 DNS TXT requests.',
    scenario: 'Network intrusion detection system triggered an alert for high DNS query volume towards an authoritative domain registered 48 hours prior.',
    findings: [
      'Filtered DNS queries in Wireshark with: dns.flags.response == 0 and dns.qry.type == 16 (TXT records).',
      'Calculated Shannon entropy of subdomains (>4.2), indicating encrypted/encoded data exfiltration.',
      'Reconstructed fragmented data stream in Python, revealing exfiltrated shadow credentials.',
    ],
    outcome: 'Identified internal patient-zero host, generated custom Suricata NIDS rule, and sinkholed malicious domain.',
    tools: ['Wireshark', 'Tshark', 'Python Scripting', 'NetworkMiner'],
  },
  {
    id: 3,
    title: 'Hunting Pass-the-Hash with Sysmon & Event Logs',
    category: 'SOC & Event Logs',
    icon: FaShieldAlt,
    color: 'text-cyber-green-400',
    border: 'border-cyber-green-500/30',
    summary: 'Correlating Windows Security Event ID 4624 Logon Type 9 (NewCredentials) with Sysmon ID 10 to catch lateral movement.',
    scenario: 'Threat actor acquired local admin NTLM hash via Responder poisoning and attempted lateral movement across subnet workstations.',
    findings: [
      'Detected Logon Type 9 (NewCredentials) where user creates duplicate token with alternate credentials.',
      'Correlated with Sysmon Event ID 10: ProcessAccess targeting lsass.exe by non-SYSTEM process with granted access 0x1010.',
      'Traced PsExec execution spawned as PSEXESVC.exe in System32.',
    ],
    outcome: 'Built automated Splunk SPL alert query and triggered host quarantine before Active Directory domain compromise.',
    tools: ['Splunk SIEM', 'Sysmon', 'Windows Event Viewer', 'Mimikatz Labs'],
  },
  {
    id: 4,
    title: 'BOLA (Broken Object Level Authorization) in REST API',
    category: 'AppSec / Bug Bounty',
    icon: FaBug,
    color: 'text-red-400',
    border: 'border-red-500/30',
    summary: 'Responsible disclosure on HackerOne: Insecure direct object reference exposing customer documents via parameter tampering.',
    scenario: 'During authorized API penetration testing, audited an endpoint `/api/v2/users/{user_id}/invoices` on a fintech platform.',
    findings: [
      'Logged in as User A (ID: 10452) and inspected request headers in Burp Suite.',
      'Substituted path parameter with User B ID (10453) while keeping User A authorization JWT token.',
      'Server returned 200 OK with User B sensitive billing records due to missing ownership authorization validation.',
    ],
    outcome: 'Responsible disclosure filed on HackerOne; engineering team patched endpoint with tenant-level RBAC middleware within 48h.',
    tools: ['Burp Suite Professional', 'Postman', 'HackerOne Platform'],
  },
];

const CaseStudies = () => {
  const [activeStudy, setActiveStudy] = useState(null);

  return (
    <div className="py-20 md:py-32 bg-dark-500 relative overflow-hidden" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-cyber-green-400 mb-2">
            &lt; Practical Investigations /&gt;
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            DFIR Case Studies &{' '}
            <span className="bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent">
              Lab Writeups
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green-500 to-cyber-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Detailed walkthroughs of digital forensics investigations, memory dumps, network PCAP analysis, and responsible disclosures.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs) => {
            const Icon = cs.icon;
            return (
              <div
                key={cs.id}
                onClick={() => setActiveStudy(cs)}
                className={`p-6 sm:p-7 rounded-2xl bg-dark-800/50 border ${cs.border} hover:bg-dark-800/80 transition-all duration-300 cursor-pointer group hover:-translate-y-1 shadow-lg`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-semibold px-3 py-1 rounded-full bg-dark-900 border border-gray-800 ${cs.color}`}>
                    {cs.category}
                  </span>
                  <span className="text-xs font-mono text-gray-500 group-hover:text-cyber-green-400 flex items-center gap-1 transition-colors">
                    Read Report &rarr;
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-dark-900 border border-gray-800 shrink-0">
                    <Icon className={`text-xl ${cs.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyber-green-400 transition-colors">
                      {cs.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                      {cs.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-800/80 flex flex-wrap gap-2">
                  {cs.tools.map((tool, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-dark-900 text-gray-400 border border-gray-800">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-dark-850 border border-cyber-green-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${activeStudy.color}`}>
                  {activeStudy.category} Report
                </span>
                <button
                  onClick={() => setActiveStudy(null)}
                  className="p-1.5 rounded-lg bg-dark-800 hover:bg-dark-700 text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              <div className="mt-4 space-y-5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {activeStudy.title}
                </h3>

                <div>
                  <h4 className="text-xs uppercase font-mono text-gray-400 tracking-wider mb-1">Scenario Background</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-dark-900 p-3.5 rounded-xl border border-gray-800">
                    {activeStudy.scenario}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-mono text-cyber-green-400 tracking-wider mb-2">Key Forensic Findings</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                    {activeStudy.findings.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyber-green-400 font-bold">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-mono text-cyber-cyan-400 tracking-wider mb-1">Incident Outcome & Remediation</h4>
                  <p className="text-xs sm:text-sm text-gray-300 bg-dark-900/60 p-3 rounded-lg border border-cyber-cyan-500/20">
                    {activeStudy.outcome}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-mono text-gray-400 tracking-wider mb-2">Tools Deployed</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeStudy.tools.map((t, i) => (
                      <span key={i} className="text-xs font-mono px-3 py-1 rounded-lg bg-dark-900 text-white border border-gray-800">
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
    </div>
  );
};

export default CaseStudies;
