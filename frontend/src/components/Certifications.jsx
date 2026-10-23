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
    title: 'Linux 100: Fundamentals',
    authority: 'TCM Security',
    date: 'Jan 2026',
    credentialUrl: 'https://academy.tcm-sec.com/courses/2631779/certificate?utm_source=student_mailer&utm_medium=email&utm_campaign=issued_certificate_notification',
    color: 'cyber-green',
  },
  {
    title: 'Red Team Mastery: Advanced Offensive Security',
    authority: 'Udemy',
    date: 'Mar 2026',
    credentialUrl: 'https://www.udemy.com/',
    color: 'red',
  },
  {
    title: 'Become a Hydra Expert: Advanced Brute Forcing',
    authority: 'Udemy',
    date: 'Jun 2026',
    credentialUrl: 'https://ude.my/UC-a5ebe270-5431-4bdc-aa06-e35d053cd82d',
    color: 'red',
  },
  {
    title: 'GCP DevOps: Terraform IaC & Azure DevOps CI/CD',
    authority: 'Udemy',
    date: 'Jun 2026',
    credentialUrl: 'https://ude.my/UC-04a3cc09-d190-4345-8037-6d0ac8811310',
    color: 'cyber-cyan',
  },
  {
    title: 'Threat Intelligence Fundamentals for SOC Analysts',
    authority: 'United Latino Students Association (ULSA)',
    date: 'Dec 2025',
    credentialUrl: 'https://credsverse.com/credentials/ca976a28-ab95-4056-a139-72fd1144be7f?preview=1',
    color: 'cyber-blue',
  },
  {
    title: 'Fundamentals of Dark Web & Underground Intel',
    authority: 'ULSA / Credsverse',
    date: 'Dec 2025',
    credentialUrl: 'https://credsverse.com/credentials/dd28ab16-820d-40df-95d5-e8517d872117?preview=1',
    color: 'purple',
  },
  {
    title: 'Application Security Training',
    authority: 'DevTown',
    date: 'Dec 2025',
    credentialUrl: 'https://www.cert.devtown.in/verify/ewI7y',
    color: 'cyber-green',
  },
  {
    title: 'Cyber Security Intern Certification',
    authority: 'Codec Technologies India',
    date: 'Dec 2025',
    credentialUrl: 'https://drive.google.com/file/d/1f0MDRspGkAiHepnEvMSJ_1-Mp40rLZXP/view?usp=drivesdk',
    color: 'cyber-cyan',
  },
  {
    title: 'Python Developer Intern Certification',
    authority: 'Codec Technologies India',
    date: 'Dec 2025',
    credentialUrl: 'https://drive.google.com/file/d/1WpgMuoQ6CxwVb2IDMfm0_7v-0jlM0STB/view?usp=drivesdk',
    color: 'amber',
  },
  {
    title: 'Cybersecurity + Hack Real-Time Web Application',
    authority: 'ElevanceSkills',
    date: 'Apr 2026',
    credentialUrl: '',
    color: 'red',
  },
  {
    title: 'Soft Skills for the Job Market',
    authority: 'TCM Security',
    date: 'Mar 2026',
    credentialUrl: '',
    color: 'cyber-green',
  },
  {
    title: 'Maharashtra State Certificate in Information Technology',
    authority: 'MSBTE',
    date: 'May 2018',
    credentialUrl: '',
    color: 'cyber-blue',
  },
];

const colorMap = {
  'cyber-green': {
    badge: 'border-cyber-green-500/30 text-cyber-green-500 bg-cyber-green-500/10',
    icon: 'text-cyber-green-500',
    hoverBorder: 'hover:border-cyber-green-500/50',
    glow: 'hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]',
  },
  'cyber-cyan': {
    badge: 'border-cyber-cyan-500/30 text-cyber-cyan-500 bg-cyber-cyan-500/10',
    icon: 'text-cyber-cyan-500',
    hoverBorder: 'hover:border-cyber-cyan-500/50',
    glow: 'hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]',
  },
  'cyber-blue': {
    badge: 'border-cyber-blue-500/30 text-cyber-blue-500 bg-cyber-blue-500/10',
    icon: 'text-cyber-blue-500',
    hoverBorder: 'hover:border-cyber-blue-500/50',
    glow: 'hover:shadow-[0_0_20px_rgba(0,102,255,0.15)]',
  },
  purple: {
    badge: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
    icon: 'text-purple-400',
    hoverBorder: 'hover:border-purple-500/50',
    glow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]',
  },
  red: {
    badge: 'border-red-500/30 text-red-400 bg-red-500/10',
    icon: 'text-red-400',
    hoverBorder: 'hover:border-red-500/50',
    glow: 'hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]',
  },
  amber: {
    badge: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    icon: 'text-amber-400',
    hoverBorder: 'hover:border-amber-500/50',
    glow: 'hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]',
  },
};

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="py-20 md:py-32 bg-dark-500 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyber-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-cyber-green-400 mb-2">
            &lt; 06. Verified Credentials /&gt;
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Licenses &{' '}
            <span className="bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green-500 to-cyber-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm sm:text-base">
            Hands-on verified trainings and industry credentials in DFIR, Offensive Security, Linux, Cloud, and AppSec.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const colors = colorMap[cert.color] || colorMap['cyber-green'];

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`bg-dark-800/40 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between
                           transition-all duration-300 hover:-translate-y-1 ${colors.hoverBorder} ${colors.glow} group`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-dark-900 border border-gray-800 group-hover:border-cyber-green-500/30 transition-colors">
                      <FaAward className={`text-xl ${colors.icon}`} />
                    </div>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-gray-500 hover:text-cyber-green-400 flex items-center gap-1 transition-colors"
                        aria-label={`Verify ${cert.title}`}
                      >
                        Verify <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyber-green-400 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <FaBuilding className="text-xs text-gray-600" />
                    <span>{cert.authority}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800/60 mt-4 flex items-center justify-between text-xs font-mono text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-gray-600" />
                    {cert.date}
                  </span>
                  <span className="text-cyber-green-400 flex items-center gap-1">
                    <FaShieldAlt className="text-[10px]" /> Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
