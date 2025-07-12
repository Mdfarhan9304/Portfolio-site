'use client';
import { motion } from 'framer-motion';
import TechStack from './TechStack';

export default function About() {
  return (
    <motion.div 
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4">About</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <p className="text-white/60 text-sm leading-relaxed">
              I am a passionate full-stack developer with expertise in modern web technologies.
              My focus is on creating efficient, scalable, and user-friendly applications.
            </p>
          </motion.div>
          <TechStack />
        </div>
      </div>
    </motion.div>
  );
} 