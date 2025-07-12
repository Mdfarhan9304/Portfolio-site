'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        setAudio(new Audio('/clickk.mp3'));

        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const playSound = () => {
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(err => console.log('Audio play failed:', err));
        }
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            playSound();
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { 
            id: 'home', 
            label: 'Home', 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        { 
            id: 'about', 
            label: 'About', 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        { 
            id: 'projects', 
            label: 'Projects', 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        { 
            id: 'contact', 
            label: 'Contact', 
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <>
            {/* Desktop Navigation - Top Bar */}
            <motion.nav 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">
                    <motion.div 
                        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                    >
                        Farhan
                    </motion.div>
                    
                    <div className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="relative"
                                onMouseEnter={() => setHoveredItem(item.id)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <motion.div
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                                        activeSection === item.id
                                            ? 'text-blue-400 bg-blue-400/10'
                                            : 'text-white/60 hover:text-white'
                                    }`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.label}
                                </motion.div>
                                {(hoveredItem === item.id || activeSection === item.id) && (
                                    <motion.div
                                        layoutId="desktop-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Navigation - Bottom Tab Bar */}
            <motion.nav 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-t border-white/10"
            >
                <div className="flex items-center justify-around px-4 py-3">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="relative flex flex-col items-center gap-1 p-2 min-w-[60px]"
                        >
                            <motion.div
                                className={`flex items-center justify-center w-8 h-8 transition-all duration-300 ${
                                    activeSection === item.id
                                        ? 'text-blue-400 scale-110'
                                        : 'text-white/50'
                                }`}
                                whileTap={{ scale: 0.85 }}
                                animate={{
                                    scale: activeSection === item.id ? 1.1 : 1,
                                    y: activeSection === item.id ? -2 : 0
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                {item.icon}
                            </motion.div>
                            
                            <motion.span
                                className={`text-xs font-medium transition-all duration-300 ${
                                    activeSection === item.id
                                        ? 'text-blue-400 scale-105'
                                        : 'text-white/50'
                                }`}
                                animate={{
                                    scale: activeSection === item.id ? 1.05 : 1,
                                    fontWeight: activeSection === item.id ? 600 : 500
                                }}
                            >
                                {item.label}
                            </motion.span>
                            
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="mobile-indicator"
                                    className="absolute -top-1 left-1/2 w-1 h-1 bg-blue-400 rounded-full"
                                    style={{ transform: 'translateX(-50%)' }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </motion.nav>
        </>
    );
};

export default Navigation; 