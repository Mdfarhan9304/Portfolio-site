'use client';
import { Spotlight } from "@/components/ui/spotlight-new";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { motion } from 'framer-motion';
import { AnimatedBorderImage } from "@/components/ui/animated-border-image";
import { Badge } from "../ui/badge";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black/[0.96] to-black/70">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <Spotlight />
      <div className="relative z-10 p-4 w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-8">
        <Badge text="Available for freelance work ✨" />
        {/* Image */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7
          }}
          className="w-full flex justify-center"
        >
          <AnimatedBorderImage />
        </motion.div>

        {/* Content */}
        <div className="w-full flex flex-col items-center">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
            className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-bricolage"
          >
            Hi I'm{" "}
            <span className="text-white">
              Farhan{" "}
              <motion.span
                className="waving-hand inline-block"
                animate={{
                  rotate: [0, 20, -20, 20, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }
                }}
              >
                👋
              </motion.span>
            </span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-xl text-center mt-4 mb-8 px-4"
          >
            A passionate developer specializing in Full Stack Web & Mobile Development
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <RainbowButton size="lg" className="font-semibold">
              Download Resume
            </RainbowButton>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
} 