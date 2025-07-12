'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const contactLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/yourusername',
      color: '#ffffff'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/yourusername',
      color: '#0A66C2'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:your.email@example.com',
      color: '#EA4335'
    }
  ];

  return (
    <motion.div 
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
        <div className="max-w-2xl">
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            I'm always open to new opportunities and collaborations. 
            Feel free to reach out through any of the following platforms:
          </p>
          
          <div className="flex flex-wrap gap-4">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black-300/40 backdrop-blur-sm ring-1 ring-white/10 hover:ring-accent/30 transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-5 h-5" style={{ color: link.color }} />
                  <span className="text-white/80">{link.name}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 