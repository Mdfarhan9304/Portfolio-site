'use client';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-20"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
        <p className="text-white/60">Coming soon...</p>
      </motion.div>
    </div>
  );
} 