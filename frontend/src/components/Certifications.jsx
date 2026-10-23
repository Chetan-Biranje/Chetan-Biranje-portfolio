import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaAward,
  FaCalendarAlt,
  FaBuilding,
} from 'react-icons/fa';

const certifications = [
  {
    title: 'Google Cybersecurity Professional Certificate',
    authority: 'Google / Coursera',
    date: '2026',
    credentialUrl: 'https://www.coursera.org/professional-certificates/google-cybersecurity',
    color: 'cyber-green',
  },
  {
    title: 'Introduction to Cybersecurity',
    authority: 'Cisco Networking Academy',
    date: '2026',
    credentialUrl: 'https://www.netacad.com/',
    color: 'cyber-cyan',
  },
  {
    title: 'Cybersecurity Essentials',
    authority: 'Cisco Networking Academy',
    date: '2026',
    credentialUrl: 'https://www.netacad.com/',
    color: 'cyber-cyan',
  },
  {
    title: 'Ethical Hacking Essentials (EHE)',
    authority: 'EC-Council',
    date: '2026',
    credentialUrl: 'https://www.eccouncil.org/',
    color: 'cyber-blue',
  },
  {
    title: 'Digital Forensics Essentials (DFE)',
    authority: 'EC-Council',
    date: '2026',
    credentialUrl: 'https://www.eccouncil.org/',
    color: 'cyber-blue',
  },
  {
    title: 'Network Defense Essentials (NDE)',
    authority: 'EC-Council',
    date: '2026',
    credentialUrl: 'https://www.eccouncil.org/',
    color: 'cyber-blue',
  },
  {
    title: 'Introduction to Dark Web, Anonymity, and Cryptocurrency',
    authority: 'EC-Council',
    date: '2026',
    credentialUrl: 'https://www.eccouncil.org/',
    color: 'cyber-blue',
  },
  {
    title: 'Incident Response & Digital Forensics',
    authority: 'Udemy',
    date: '2026',
    credentialUrl: 'https://www.udemy.com/',
    color: 'purple',
  },
  {
    title: 'SOC Analyst Training',
    authority: 'TryHackMe',
    date: '2026',
    credentialUrl: 'https://tryhackme.com/',
    color: 'red',
  },
  {
    title: 'OWASP Top 10 Web Application Security',
    authority: 'Udemy',
    date: '2026',
    credentialUrl: 'https://www.udemy.com/',
    color: 'purple',
  },
  {
    title: 'Splunk Fundamentals',
    authority: 'Splunk',
    date: '2026',
    credentialUrl: 'https://www.splunk.com/',
    color: 'amber',
  },
  {
    title: 'Python for Cybersecurity',
    authority: 'Infosec / Coursera',
    date: '2026',
    credentialUrl: 'https://www.coursera.org/',
    color: 'cyber-green',
  },
  {
    title: 'Linux Fundamentals',
    authority: 'TryHackMe',
    date: '2026',
    credentialUrl: 'https://tryhackme.com/',
    color: 'red',
  },
];

const colorStyles = {
  'cyber-green': {
    iconBg: 'bg-cyber-green-500/10',
    iconText: 'text-cyber-green-500',
    border: 'border-cyber-green-500/15',
    hoverBorder: 'hover:border-cyber-green-500/40',
    badge: 'bg-cyber-green-500/10 text-cyber-green-400',
    link: 'text-cyber-green-500 hover:text-cyber-green-400',
  },
  'cyber-cyan': {
    iconBg: 'bg-cyber-cyan-500/10',
    iconText: 'text-cyber-cyan-500',
    border: 'border-cyber-cyan-500/15',
    hoverBorder: 'hover:border-cyber-cyan-500/40',
    badge: 'bg-cyber-cyan-500/10 text-cyber-cyan-400',
    link: 'text-cyber-cyan-500 hover:text-cyber-cyan-400',
  },
  'cyber-blue': {
    iconBg: 'bg-cyber-blue-500/10',
    iconText: 'text-cyber-blue-500',
    border: 'border-cyber-blue-500/15',
    hoverBorder: 'hover:border-cyber-blue-500/40',
    badge: 'bg-cyber-blue-500/10 text-cyber-blue-400',
    link: 'text-cyber-blue-500 hover:text-cyber-blue-400',
  },
  purple: {
    iconBg: 'bg-purple-500/10',
    iconText: 'text-purple-500',
    border: 'border-purple-500/15',
    hoverBorder: 'hover:border-purple-500/40',
    badge: 'bg-purple-500/10 text-purple-400',
    link: 'text-purple-500 hover:text-purple-400',
  },
  red: {
    iconBg: 'bg-red-500/10',
    iconText: 'text-red-500',
    border: 'border-red-500/15',
    hoverBorder: 'hover:border-red-500/40',
    badge: 'bg-red-500/10 text-red-400',
    link: 'text-red-500 hover:text-red-400',
  },
  amber: {
    iconBg: 'bg-amber-500/10',
    iconText: 'text-amber-500',
    border: 'border-amber-500/15',
    hoverBorder: 'hover:border-amber-500/40',
    badge: 'bg-amber-500/10 text-amber-400',
    link: 'text-amber-500 hover:text-amber-400',
  },
};

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="py-20 md:py-32 bg-dark-900/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-green-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-cyan-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading">
            <span className="text-gray-500">&lt;</span> 06. Certifications{' '}
            <span className="text-gray-500">/&gt;</span>
          </p>
          <h2 className="section-heading">
            Professional <span className="text-cyber-green-500">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green-500 to-cyber-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 font-mono text-sm mt-4">
            <FaAward className="inline mr-2 text-cyber-green-500" />
            {certifications.length}+ industry-recognized certifications
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certifications.map((cert, index) => {
            const colors = colorStyles[cert.color];

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`cyber-card rounded-xl p-5 group ${colors.border} ${colors.hoverBorder}
                           transition-all duration-300 flex flex-col`}
              >
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 rounded-lg ${colors.iconBg}`}>
                    <FaCertificate className={`text-lg ${colors.iconText}`} />
                  </div>
                  <span className={`px-2 py-0.5 text-[10px] font-mono rounded-full ${colors.badge}`}>
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-white mb-2 leading-snug flex-grow">
                  {cert.title}
                </h3>

                {/* Authority */}
                <div className="flex items-center gap-1.5 mb-3">
                  <FaBuilding className="text-[10px] text-gray-600" />
                  <span className="text-xs font-mono text-gray-500">{cert.authority}</span>
                </div>

                {/* View Credential Link */}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-mono ${colors.link} 
                               transition-colors duration-300 mt-auto`}
                  >
                    <FaExternalLinkAlt className="text-[10px]" />
                    View Credential
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
