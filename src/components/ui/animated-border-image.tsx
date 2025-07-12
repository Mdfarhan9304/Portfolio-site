'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const AnimatedBorderImage = () => {
  return (
    <div className="relative group flex items-center justify-center">
      {/* Animated border */}
      <motion.div
        className="absolute -inset-[3px] rounded-full opacity-75 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 blur-md"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '300% 300%',
        }}
      />
      {/* Image container */}
      <div className="relative rounded-full w-[200px] h-[200px] overflow-hidden bg-black/20 backdrop-blur-sm">
        <Image
          src="/my_img.jpg"
          alt="Profile picture"
          width={200}
          height={200}
          className="object-cover hover:scale-105 transition-transform duration-500 w-full h-full rounded-full object-top"
          priority
        />
      </div>
    </div>
  );
}; 