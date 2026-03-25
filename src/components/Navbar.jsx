import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, BarChart2, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
        >
            <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'w-[95%] sm:w-full' : 'w-full'}`}>
                <div className={`flex items-center justify-between h-16 px-6 rounded-2xl transition-all duration-300 ${scrolled ? 'glass dark:bg-slate-900/80 border-indigo-500/10 dark:border-white/10 shadow-lg shadow-indigo-500/5 dark:shadow-none' : 'bg-transparent'}`}>

                    {/* Interactive Animated Logo Section */}
                    <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-400 p-[2px] overflow-hidden group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-500 shadow-sm transform group-hover:-translate-y-0.5">
                            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-[10px] z-0 transition-opacity duration-500 group-hover:opacity-0"></div>
                            <motion.div
                                className="relative z-10 flex items-end justify-center h-full w-full gap-1 p-[6px] pb-2 group-hover:p-0 transition-all duration-500"
                            >
                                <motion.div
                                    className="w-[4px] bg-indigo-600 group-hover:bg-white rounded-full shadow-sm group-hover:shadow-indigo-400"
                                    initial={{ height: "40%" }}
                                    animate={{ height: ["40%", "70%", "30%", "90%", "40%"] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                />
                                <motion.div
                                    className="w-[4px] bg-teal-500 group-hover:bg-white rounded-full shadow-sm group-hover:shadow-teal-300"
                                    initial={{ height: "70%" }}
                                    animate={{ height: ["70%", "30%", "100%", "40%", "70%"] }}
                                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.2 }}
                                />
                                <motion.div
                                    className="w-[4px] bg-purple-500 group-hover:bg-white rounded-full shadow-sm group-hover:shadow-purple-400"
                                    initial={{ height: "50%" }}
                                    animate={{ height: ["50%", "90%", "40%", "80%", "50%"] }}
                                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 0.4 }}
                                />
                            </motion.div>
                            <span className="absolute inset-0 flex items-center justify-center font-black text-[22px] tracking-tighter opacity-0 group-hover:opacity-100 text-white transition-opacity duration-500 drop-shadow-md z-20">
                                AG
                            </span>
                        </div>
                        <a href="#home" className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white flex items-center group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-teal-500 transition-all duration-500">
                            Akarsh<span className="text-indigo-600 transition-colors duration-500 group-hover:text-indigo-600">.</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1 pl-4 border-l border-slate-200">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-4 py-2 rounded-xl text-sm font-bold transition-all hover:bg-indigo-50 dark:hover:bg-white/5 relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 group-hover:w-1/2 transition-all duration-300 ease-out transform -translate-x-1/2"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Theme & Socials */}
                    <div className="hidden md:flex items-center space-x-3">
                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-white transition-all shadow-sm"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <a href="https://github.com/akarsh-gupta" aria-label="GitHub Profile" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 hover:scale-110 transition-all shadow-sm">
                            <Github size={18} />
                        </a>
                        <a href="https://linkedin.com/in/akarsh-gupta" aria-label="LinkedIn Profile" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all shadow-sm">
                            <Linkedin size={18} />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleTheme}
                            className="mr-2 inline-flex items-center justify-center p-2 rounded-xl w-10 h-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 focus:outline-none transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                            className="inline-flex items-center justify-center p-2 rounded-xl w-10 h-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-colors"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-[100%] left-0 w-full px-4 pt-2"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2 glass dark:bg-slate-900/90 rounded-2xl shadow-xl border border-white/40 dark:border-white/10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-white/5 block px-4 py-3 rounded-xl text-base font-bold transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex space-x-4 px-4">
                                <a href="https://github.com/akarsh-gupta" aria-label="GitHub Profile" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/akarsh-gupta" aria-label="LinkedIn Profile" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
