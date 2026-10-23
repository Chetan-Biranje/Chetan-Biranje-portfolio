import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import axios from 'axios';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle,
  FaTerminal,
  FaShieldAlt,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { SiHackerone } from 'react-icons/si';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Client-side quick checks
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus({ type: 'error', message: 'Please enter your name (minimum 2 characters).' });
      setIsSubmitting(false);
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      setIsSubmitting(false);
      return;
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 2) {
      setStatus({ type: 'error', message: 'Please enter a subject (minimum 2 characters).' });
      setIsSubmitting(false);
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 2) {
      setStatus({ type: 'error', message: 'Please enter a message (minimum 2 characters).' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData, {
        timeout: 6000,
      });

      setStatus({
        type: 'success',
        message: response.data?.message || 'Message sent successfully! Chetan will get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.warn('Backend API submission:', error);

      // Extract detailed error if server responded
      if (error.response?.data?.message) {
        setStatus({
          type: 'error',
          message: error.response.data.message,
        });
      } else if (error.code === 'ERR_NETWORK' || !error.response) {
        // Backend server is not running on port 5000
        setStatus({
          type: 'fallback',
          message: 'The local backend server is not running (run "npm start" in backend folder). Click below to send directly via Email:',
        });
      } else {
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please reach out directly to chetanbiranje@proton.me.',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoLink = `mailto:chetanbiranje@proton.me?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/chetanbiranje', label: 'GitHub', username: '@chetanbiranje', color: 'hover:text-white' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/chetanbiranje', label: 'LinkedIn', username: 'chetanbiranje', color: 'hover:text-cyber-cyan-400' },
    { icon: SiHackerone, href: 'https://hackerone.com/chetanbiranje', label: 'HackerOne', username: '@chetanbiranje', color: 'hover:text-purple-400' },
  ];

  return (
    <div className="py-20 md:py-32 bg-dark-500 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyber-green-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-cyber-green-400 mb-2">
            &lt; 07. Contact /&gt;
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Get In <span className="bg-gradient-to-r from-cyber-green-400 to-cyber-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green-500 to-cyber-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm sm:text-base">
            Have a project, security incident, internship opportunity, or collaboration idea? Drop a message below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Info Sidebar (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Terminal Card */}
            <div className="bg-dark-800/60 border border-cyber-green-500/20 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-gray-500">contact_terminal.sh</span>
              </div>

              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div>
                  <p className="text-gray-500 mb-1 flex items-center gap-1.5">
                    <span className="text-cyber-green-400">$</span> echo $PRIMARY_EMAIL
                  </p>
                  <a
                    href="mailto:chetanbiranje@proton.me"
                    className="text-cyber-green-400 hover:underline flex items-center gap-2 pl-4 break-all"
                  >
                    <FaEnvelope className="text-xs shrink-0" />
                    chetanbiranje@proton.me
                  </a>
                </div>

                <div>
                  <p className="text-gray-500 mb-1 flex items-center gap-1.5">
                    <span className="text-cyber-green-400">$</span> echo $SECONDARY_EMAIL
                  </p>
                  <a
                    href="mailto:chetanchandrakantbiranje@gmail.com"
                    className="text-gray-300 hover:text-cyber-cyan-400 flex items-center gap-2 pl-4 break-all text-xs"
                  >
                    <FaEnvelope className="text-xs shrink-0" />
                    chetanchandrakantbiranje@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-gray-500 mb-1 flex items-center gap-1.5">
                    <span className="text-cyber-green-400">$</span> echo $LOCATION
                  </p>
                  <p className="text-cyber-cyan-400 flex items-center gap-2 pl-4">
                    <FaMapMarkerAlt className="text-xs shrink-0" />
                    Pune, Maharashtra, India
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 mb-1 flex items-center gap-1.5">
                    <span className="text-cyber-green-400">$</span> echo $AVAILABILITY
                  </p>
                  <p className="text-white flex items-center gap-2 pl-4">
                    <span className="w-2 h-2 rounded-full bg-cyber-green-400 animate-pulse" />
                    Open to DFIR / SOC Roles
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-dark-800/40 border border-gray-800 rounded-2xl p-6 shadow-lg">
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-cyber-green-400" />
                Verified Platforms
              </h4>
              <div className="space-y-3">
                {socialLinks.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-dark-900/60 border border-gray-800 hover:border-cyber-green-500/40 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`text-lg text-gray-400 group-hover:text-cyber-green-400 transition-colors`} />
                        <div>
                          <p className="text-xs font-bold text-white">{s.label}</p>
                          <p className="text-[11px] font-mono text-gray-400">{s.username}</p>
                        </div>
                      </div>
                      <FaExternalLinkAlt className="text-xs text-gray-600 group-hover:text-cyber-green-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 bg-dark-800/60 border border-cyber-green-500/20 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                    <span className="text-cyber-green-400">$</span> Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-gray-800 focus:border-cyber-green-400 focus:ring-1 focus:ring-cyber-green-400 text-white placeholder-gray-600 font-mono text-sm outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                    <span className="text-cyber-green-400">$</span> Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-gray-800 focus:border-cyber-green-400 focus:ring-1 focus:ring-cyber-green-400 text-white placeholder-gray-600 font-mono text-sm outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                  <span className="text-cyber-green-400">$</span> Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Job Opportunity / Collaboration / Forensics Lab"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-gray-800 focus:border-cyber-green-400 focus:ring-1 focus:ring-cyber-green-400 text-white placeholder-gray-600 font-mono text-sm outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                  <span className="text-cyber-green-400">$</span> Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-900/80 border border-gray-800 focus:border-cyber-green-400 focus:ring-1 focus:ring-cyber-green-400 text-white placeholder-gray-600 font-mono text-sm outline-none transition-all resize-none"
                />
              </div>

              {/* Status Message Display */}
              {status.message && (
                <div
                  className={`p-4 rounded-xl text-sm flex items-start gap-3 ${
                    status.type === 'success'
                      ? 'bg-cyber-green-500/10 border border-cyber-green-500/40 text-cyber-green-400'
                      : status.type === 'fallback'
                      ? 'bg-cyber-cyan-500/10 border border-cyber-cyan-500/40 text-cyber-cyan-300'
                      : 'bg-red-500/10 border border-red-500/40 text-red-400'
                  }`}
                >
                  {status.type === 'success' ? (
                    <FaCheckCircle className="text-base shrink-0 mt-0.5" />
                  ) : (
                    <FaExclamationCircle className="text-base shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 space-y-2">
                    <p>{status.message}</p>
                    {status.type === 'fallback' && (
                      <a
                        href={mailtoLink}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-cyan-500 text-dark-900 font-bold text-xs uppercase tracking-wider hover:bg-cyber-cyan-400 transition-colors"
                      >
                        <FaEnvelope /> Open Email Client
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyber-green-500 to-cyber-cyan-500 text-dark-900 font-bold text-sm tracking-wide shadow-lg shadow-cyber-green-500/25 hover:shadow-cyber-green-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin text-sm" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      Send Message
                    </>
                  )}
                </button>

                <a
                  href={`mailto:chetanbiranje@proton.me?subject=${encodeURIComponent(
                    formData.subject || 'Direct Portfolio Inquiry'
                  )}`}
                  className="text-xs text-gray-400 hover:text-cyber-green-400 font-mono transition-colors flex items-center gap-1.5"
                >
                  Or email directly <FaEnvelope className="text-xs" />
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
