'use client';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.div 
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project cards will go here */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-black-300/40 backdrop-blur-sm rounded-xl p-6 ring-1 ring-white/10 hover:ring-accent/30"
          >
            <p className="text-white/60">Projects coming soon...</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 