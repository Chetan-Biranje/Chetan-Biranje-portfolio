import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaSearch,
  FaPython,
  FaBug,
  FaCogs,
  FaGlobe,
  FaTerminal,
  FaLock,
  FaCode,
  FaServer,
} from 'react-icons/fa';

const projects = [
  {
    title: 'DevSecOps Learning Lab',
    description:
      'A comprehensive learning environment for DevSecOps practices. Features hands-on labs for integrating security into CI/CD pipelines, container security, infrastructure as code scanning, and automated security testing.',
    tags: ['DevSecOps', 'Docker', 'CI/CD', 'SAST', 'DAST', 'IaC Security'],
    icon: FaCogs,
    color: 'cyber-green',
    github: 'https://github.com/chetanbiranje',
  },
  {
    title: 'Security Recon Toolkit',
    description:
      'An automated reconnaissance toolkit for security professionals. Performs subdomain enumeration, port scanning, technology fingerprinting, and vulnerability assessment with customizable modules and reporting.',
    tags: ['Python', 'Recon', 'OSINT', 'Automation', 'Nmap', 'DNS'],
    icon: FaSearch,
    color: 'cyber-cyan',
    github: 'https://github.com/chetanbiranje',
  },
  {
    title: 'PySecUtils',
    description:
      'A Python utility library for cybersecurity tasks. Includes modules for network analysis, hash computation, encryption/decryption, log parsing, forensic artifact extraction, and security automation scripts.',
    tags: ['Python', 'Forensics', 'Cryptography', 'Automation', 'CLI'],
    icon: FaPython,
    color: 'cyber-blue',
    github: 'https://github.com/chetanbiranje',
  },
  {
    title: 'Web App Pentest Framework',
    description:
      'A structured framework for web application penetration testing following OWASP methodology. Includes checklists, automated scanning scripts, payload libraries, and comprehensive reporting templates.',
    tags: ['OWASP', 'Pentest', 'Burp Suite', 'XSS', 'SQLi', 'Web Security'],
    icon: FaBug,
    color: 'red',
    github: 'https://github.com/chetanbiranje',
  },
  {
    title: 'Secure CI/CD Pipeline',
    description:
      'Implementation of a security-hardened CI/CD pipeline with integrated security gates. Features SAST, DAST, dependency scanning, container scanning, and compliance checks at each stage.',
    tags: ['CI/CD', 'GitHub Actions', 'Docker', 'Security Gates', 'Compliance'],
    icon: FaLock,
    color: 'purple',
    github: 'https://github.com/chetanbiranje',
  },
  {
    title: 'Web & REST API Pentest Research',
    description:
      'In-depth research project on web and REST API security vulnerabilities. Documents common attack vectors, exploitation techniques, and defense mechanisms with practical examples and mitigation strategies.',
    tags: ['API Security', 'REST', 'Research', 'OWASP API Top 10', 'Documentation'],
    icon: FaGlobe,
    color: 'amber',
    github: 'https://github.com/chetanbiranje',
  },
];

const colorMap = {
  'cyber-green': {
    iconBg: 'bg-cyber-green-500/10',
    iconText: 'text-cyber-green-500',
    tagBg: 'bg-cyber-green-500/10',
    tagText: 'text-cyber-green-400',
    tagBorder: 'border-cyber-green-500/20',
    hoverBorder: 'hover:border-cyber-green-500/40',
    hoverShadow: 'hover:shadow-cyber',
  },
  'cyber-cyan': {
    iconBg: 'bg-cyber-cyan-500/10',
    iconText: 'text-cyber-cyan-500',
    tagBg: 'bg-cyber-cyan-500/10',
    tagText: 'text-cyber-cyan-400',
    tagBorder: 'border-cyber-cyan-500/20',
    hoverBorder: 'hover:border-cyber-cyan-500/40',
    hoverShadow: 'hover:shadow-cyber-blue',
  },
  'cyber-blue': {
    iconBg: 'bg-cyber-blue-500/10',
    iconText: 'text-cyber-blue-500',
    tagBg: 'bg-cyber-blue-500/10',
    tagText: 'text-cyber-blue-400',
    tagBorder: 'border-cyber-blue-500/20',
    hoverBorder: 'hover:border-cyber-blue-500/40',
    hoverShadow: 'hover:shadow-cyber-blue',
  },
  red: {
    iconBg: 'bg-red-500/10',
    iconText: 'text-red-500',
    tagBg: 'bg-red-500/10',
    tagText: 'text-red-400',
    tagBorder: 'border-red-500/20',
    hoverBorder: 'hover:border-red-500/40',
    hoverShadow: 'hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]',
  },
  purple: {
    iconBg: 'bg-purple-500/10',
    iconText: 'text-purple-500',
    tagBg: 'bg-purple-500/10',
    tagText: 'text-purple-400',
    tagBorder: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-500/40',
    hoverShadow: 'hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]',
  },
  amber: {
    iconBg: 'bg-amber-500/10',
    iconText: 'text-amber-500',
    tagBg: 'bg-amber-500/10',
    tagText: 'text-amber-400',
    tagBorder: 'border-amber-500/20',
    hoverBorder: 'hover:border-amber-500/40',
    hoverShadow: 'hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]',
  },
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="py-20 md:py-32 bg-dark-900/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyber-green-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-cyan-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading">
            <span className="text-gray-500">&lt;</span> 04. Projects{' '}
            <span className="text-gray-500">/&gt;</span>
          </p>
          <h2 className="section-heading">
            Featured <span className="text-cyber-green-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green-500 to-cyber-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const colors = colorMap[project.color];

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`cyber-card rounded-xl p-6 flex flex-col group
                           border-cyber-green-500/10 ${colors.hoverBorder} ${colors.hoverShadow}`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${colors.iconBg}`}>
                    <project.icon className={`text-2xl ${colors.iconText}`} />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-cyber-green-500 transition-colors"
                        aria-label={`${project.title} GitHub`}
                      >
                        <FaGithub className="text-lg" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-cyber-green-500 transition-colors"
                        aria-label={`${project.title} Demo`}
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyber-green-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-5 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 text-xs font-mono rounded-full
                                 ${colors.tagBg} border ${colors.tagBorder} ${colors.tagText}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/chetanbiranje"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm border border-cyber-green-500/30 
                       text-cyber-green-500 rounded-lg hover:bg-cyber-green-500/10 hover:border-cyber-green-500/50
                       transition-all duration-300 hover:shadow-cyber"
          >
            <FaGithub />
            View All on GitHub
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
