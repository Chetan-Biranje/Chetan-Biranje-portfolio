import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';

const educationData = [
  {
    institution: 'DY Patil University',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2025 - Present',
    location: 'Pune, Maharashtra',
    focus: 'Cyber Security',
    description:
      'Pursuing BCA with a specialization in Cyber Security. Actively participating in cybersecurity clubs, CTF competitions, and research projects focused on digital forensics and incident response.',
    color: 'cyber-green',
    current: true,
  },
  {
    institution: 'Sant Gajanan Maharaj Rural Polytechnic',
    degree: 'Diploma',
    period: '2020 - 2022',
    location: 'Maharashtra',
    focus: 'Technical Studies',
    description:
      'Completed diploma program with a strong foundation in technical concepts and practical engineering skills. Developed problem-solving and analytical thinking abilities.',
    color: 'cyber-cyan',
    current: false,
  },
  {
    institution: 'Dr. Ghali College',
    degree: 'High School',
    period: '2019 - 2020',
    location: 'Maharashtra',
    focus: 'General Studies',
    description:
      'Completed high school education with a focus on science and technology. Laid the groundwork for pursuing a career in technology and cybersecurity.',
    color: 'cyber-blue',
    current: false,
  },
];

const colorStyles = {
  'cyber-green': {
    dot: 'bg-cyber-green-500',
    border: 'border-cyber-green-500/30',
    text: 'text-cyber-green-500',
    bg: 'bg-cyber-green-500/10',
    ring: 'ring-cyber-green-500/30',
  },
  'cyber-cyan': {
    dot: 'bg-cyber-cyan-500',
    border: 'border-cyber-cyan-500/30',
    text: 'text-cyber-cyan-500',
    bg: 'bg-cyber-cyan-500/10',
    ring: 'ring-cyber-cyan-500/30',
  },
  'cyber-blue': {
    dot: 'bg-cyber-blue-500',
    border: 'border-cyber-blue-500/30',
    text: 'text-cyber-blue-500',
    bg: 'bg-cyber-blue-500/10',
    ring: 'ring-cyber-blue-500/30',
  },
};

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="py-20 md:py-32 bg-dark-500 relative overflow-hidden">
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-cyber-blue-500/3 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading">
            <span className="text-gray-500">&lt;</span> 05. Education{' '}
            <span className="text-gray-500">/&gt;</span>
          </p>
          <h2 className="section-heading">
            Academic <span className="text-cyber-green-500">Background</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-green-500 to-cyber-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyber-green-500/50 via-cyber-cyan-500/30 to-cyber-blue-500/20" />

          {educationData.map((edu, index) => {
            const colors = colorStyles[edu.color];

            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-16 md:pl-24 mb-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-[6px] md:left-[22px] top-6 w-5 h-5 rounded-full ${colors.dot}
                              ring-4 ring-dark-500 z-10 flex items-center justify-center`}
                >
                  {edu.current && (
                    <div className={`absolute inset-0 rounded-full ${colors.dot} animate-ping opacity-30`} />
                  )}
                  <FaGraduationCap className="text-[8px] text-dark-500" />
                </div>

                {/* Card */}
                <div className={`cyber-card rounded-xl p-6 ${colors.border} hover:shadow-lg transition-all duration-300`}>
                  {/* Current Badge */}
                  {edu.current && (
                    <span className={`inline-block px-3 py-1 text-xs font-mono rounded-full ${colors.bg} ${colors.text} mb-3`}>
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse" />
                      Currently Pursuing
                    </span>
                  )}

                  <h3 className="text-lg font-semibold text-white mb-1">{edu.institution}</h3>
                  <p className={`text-base font-mono ${colors.text} mb-3`}>{edu.degree}</p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-mono text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-gray-600" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-gray-600" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaShieldAlt className="text-gray-600" />
                      {edu.focus}
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
