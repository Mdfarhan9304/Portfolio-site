import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const coreSkills = [
    {
        name: 'React',
        icon: FaReact,
        color: '#61DAFB'
    },
    {
        name: 'Next.js',
        icon: SiNextdotjs,
        color: '#ffffff'
    },
    {
        name: 'TypeScript',
        icon: SiTypescript,
        color: '#3178C6'
    },
    {
        name: 'JavaScript',
        icon: TbBrandJavascript,
        color: '#F7DF1E'
    },
    {
        name: 'Node.js',
        icon: FaNodeJs,
        color: '#339933'
    },
    {
        name: 'Express',
        icon: SiExpress,
        color: '#ffffff'
    },
    {
        name: 'MongoDB',
        icon: SiMongodb,
        color: '#47A248'
    },
    {
        name: 'Tailwind',
        icon: SiTailwindcss,
        color: '#38B2AC'
    },
    {
        name: 'Python',
        icon: FaPython,
        color: '#3776AB'
    },
    {
        name: 'Docker',
        icon: FaDocker,
        color: '#2496ED'
    }
];

export default function TechStack() {
    return (
        <motion.div 
            variants={itemVariants} 
            className="lg:col-span-2 lg:mx-20 mx-5"
            initial="hidden"
            animate="visible"

        >
            <div className="group w-full h-full ring-1 ring-white/10 hover:ring-white/20 bg-gradient-to-br from-black-200/90 via-black-300/90 to-black-200/90 rounded-2xl backdrop-blur-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 transition-all duration-700 hover:shadow-2xl">
                <div className="mb-4 sm:mb-6">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent mb-2 sm:mb-3">
                        Tech Stack
                    </p>
                    <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                        Core technologies I use to build exceptional applications
                    </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                    {coreSkills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.name}
                                className="group/skill flex flex-col items-center p-2 sm:p-3 md:p-4 rounded-xl bg-black-300/40 backdrop-blur-sm ring-1 ring-white/5 hover:ring-accent/30 hover:bg-accent/5 transition-all duration-300"
                                whileHover={{ y: -4, scale: 1.05 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                            >
                                <Icon
                                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-1 sm:mb-2 transition-transform duration-300 group-hover/skill:scale-110"
                                    style={{ color: skill.color }}
                                />
                                <span className="text-white/80 text-xs font-medium text-center leading-tight">
                                    {skill.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
} 