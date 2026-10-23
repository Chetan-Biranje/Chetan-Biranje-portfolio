import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaShieldAlt,
  FaChevronUp,
  FaEnvelope,
} from 'react-icons/fa';
import { SiHackerone } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/chetanbiranje', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/chetanbiranje', label: 'LinkedIn' },
    { icon: SiHackerone, href: 'https://hackerone.com/chetanbiranje', label: 'HackerOne' },
    { icon: FaEnvelope, href: 'mailto:chetanbiranje@proton.me', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <footer className="relative bg-dark-900/50 border-t border-cyber-green-500/10">
      {/* Back to Top */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <ScrollLink
          to="home"
          smooth={true}
          duration={800}
          className="flex items-center justify-center w-10 h-10 rounded-full 
                     bg-dark-500 border border-cyber-green-500/30 text-cyber-green-500
                     hover:bg-cyber-green-500/10 hover:border-cyber-green-500/60
                     transition-all duration-300 cursor-pointer hover:shadow-cyber"
        >
          <FaChevronUp />
        </ScrollLink>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaShieldAlt className="text-xl text-cyber-green-500" />
              <span className="text-lg font-bold font-mono">
                <span className="text-cyber-green-500">&lt;</span>
                <span className="text-white">ChetanBiranje</span>
                <span className="text-cyber-green-500">/&gt;</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Cybersecurity Professional | DFIR Enthusiast | SOC Analyst | Bug Bounty Hunter.
              Dedicated to making cyberspace safer.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-lg border border-cyber-green-500/15 text-gray-500
                             hover:text-cyber-green-500 hover:border-cyber-green-500/40
                             hover:bg-cyber-green-500/5 transition-all duration-300"
                >
                  <social.icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-mono text-cyber-green-500 mb-4">
              <span className="text-gray-500">// </span>Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-sm text-gray-500 hover:text-cyber-green-400 cursor-pointer
                             transition-colors duration-300 font-mono py-1"
                >
                  <span className="text-cyber-green-500/50 mr-1">&gt;</span>
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </div>

          {/* Contact Quick */}
          <div>
            <h3 className="text-sm font-mono text-cyber-green-500 mb-4">
              <span className="text-gray-500">// </span>Get In Touch
            </h3>
            <div className="space-y-3 text-sm text-gray-500">
              <a
                href="mailto:chetanbiranje@proton.me"
                className="flex items-center gap-2 hover:text-cyber-green-400 transition-colors"
              >
                <FaEnvelope className="text-cyber-green-500/50" />
                chetanbiranje@proton.me
              </a>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-cyber-green-500/50" />
                <span>Available for opportunities</span>
              </div>
              <p className="text-xs text-gray-600 font-mono pt-2">
                PGP Key: Available on request
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyber-green-500/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600 font-mono">
              &copy; {currentYear} Chetan Biranje. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 font-mono flex items-center gap-1">
              Made with{' '}
              <FaHeart className="text-red-500 text-[10px] animate-pulse" />{' '}
              by{' '}
              <span className="text-cyber-green-500">Chetan Biranje</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
