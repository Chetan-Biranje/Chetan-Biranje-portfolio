import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaExternalLinkAlt, FaAward, FaCheckCircle, FaGithub, FaBug } from 'react-icons/fa';
import { SiHackerone } from 'react-icons/si';

const badges = [
  {
    title: 'HackerOne Bug Bounty',
    role: 'Security Researcher',
    desc: 'Conducting responsible vulnerability disclosures across web applications and REST APIs.',
    status: 'Active Hunter',
    icon: SiHackerone,
    color: 'text-purple-400',
    border: 'border-purple-500/40',
    bg: 'hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]',
    url: 'https://hackerone.com/chetanbiranje',
  },
  {
    title: 'OWASP Foundation',
    role: 'Community Member',
    desc: 'Active member contributing to Application Security best practices, OWASP Juice Shop docs & community CTFs.',
    status: 'Verified Member',
    icon: FaShieldAlt,
    color: 'text-cyber-green-400',
    border: 'border-cyber-green-500/40',
    bg: 'hover:shadow-[0_0_25px_rgba(0,255,136,0.15)]',
    url: 'https://owasp.org/',
  },
  {
    title: 'TCM Security Academy',
    role: 'Certified Student',
    desc: 'Verified graduate in Linux 100 Fundamentals & Offensive Security practical courses.',
    status: 'Credentialed',
    icon: FaAward,
    color: 'text-cyber-cyan-400',
    border: 'border-cyber-cyan-500/40',
    bg: 'hover:shadow-[0_0_25px_rgba(0,229,255,0.15)]',
    url: 'https://academy.tcm-sec.com/',
  },
  {
    title: 'GitHub Security Open Source',
    role: 'Tools Contributor',
    desc: 'Maintains open-source security scripts (PySecUtils, DevSecOps Lab) with community contributions.',
    status: '35+ Stars',
    icon: FaGithub,
    color: 'text-white',
    border: 'border-gray-700',
    bg: 'hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]',
    url: 'https://github.com/chetanbiranje',
  },
];

const BadgesSection = () => {
  return (
    <div className="py-16 bg-dark-500/80 relative overflow-hidden border-y border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-cyber-cyan-400 mb-2">
            &lt; Verified Affiliations /&gt;
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Security Platforms &{' '}
            <span className="bg-gradient-to-r from-cyber-cyan-400 to-cyber-green-400 bg-clip-text text-transparent">
              Community Recognition
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <a
                key={idx}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-5 rounded-2xl bg-dark-800/40 border ${b.border} transition-all duration-300 hover:-translate-y-1 ${b.bg} flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-dark-900 flex items-center justify-center border border-gray-800 group-hover:border-cyber-green-500/30 transition-colors">
                      <Icon className={`text-xl ${b.color}`} />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-dark-900 border border-gray-800 text-cyber-green-400 flex items-center gap-1">
                      <FaCheckCircle className="text-[9px]" /> {b.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyber-green-400 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-xs font-mono text-gray-400 mt-0.5">{b.role}</p>

                  <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-gray-800/80 flex items-center justify-between text-xs font-mono text-gray-500 group-hover:text-white transition-colors">
                  <span>View Profile</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default BadgesSection;
