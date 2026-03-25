import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Database, BarChart2, TrendingUp, MapPin, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="pt-40 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-20">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-[1.2] text-center lg:text-left mt-0 relative z-20 max-w-3xl"
                    >
                        {/* Status Badges */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50/50 dark:bg-indigo-500/10 backdrop-blur-md border border-indigo-100/50 dark:border-indigo-400/20 text-indigo-700 dark:text-indigo-300 font-bold text-sm shadow-sm hover:shadow-md transition-shadow">
                                <Sparkles className="h-4 w-4 mr-2 text-indigo-500 dark:text-indigo-400" />
                                Data Analyst
                            </div>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50/50 dark:bg-emerald-500/10 backdrop-blur-md border border-emerald-100/50 dark:border-emerald-400/20 text-emerald-700 dark:text-emerald-300 font-bold text-sm shadow-sm hover:shadow-md transition-shadow">
                                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 mr-2 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
                                Immediate Joiner
                            </div>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50/50 dark:bg-purple-500/10 backdrop-blur-md border border-purple-100/50 dark:border-purple-400/20 text-purple-700 dark:text-purple-300 font-bold text-sm shadow-sm hover:shadow-md transition-shadow">
                                <MapPin size={16} className="mr-1.5" />
                                Gurugram (Open to Relocate)
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight mb-6"
                        >
                            Turning Data into <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 animate-gradient-x">
                                Decisions.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-lg md:text-xl md:leading-relaxed text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium"
                        >
                            Hi, I'm <strong className="text-slate-900 dark:text-white">Akarsh Gupta</strong>. A Data Analyst with a B.Tech in Computer Science, bridging the gap between raw data and strategic business growth. Skilled in Python, SQL, Tableau, Power BI, and Machine Learning.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
                        >
                            <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-slate-900 dark:bg-indigo-600 rounded-2xl hover:bg-slate-800 dark:hover:bg-indigo-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:-translate-y-1 overflow-hidden">
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                                <span className="relative flex items-center">
                                    View Portfolio <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                </span>
                            </a>
                            <a href="/resume.pdf" download="Akarsh_Gupta_Resume.pdf" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center px-8 py-4 font-bold text-slate-700 dark:text-slate-200 transition-all duration-300 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-xl hover:-translate-y-1">
                                Download Resume
                                <Download className="ml-2 text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" size={20} />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Highly Interactive Right Side Hero Image / Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        className="flex-1 w-full max-w-sm lg:max-w-md xl:max-w-lg relative hidden lg:block z-10 mt-10 lg:mt-0"
                    >
                        <div className="relative w-full aspect-square mx-auto transform-gpu transition-all duration-700 hover:-translate-y-4 group">
                            {/* Glowing Backing */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-teal-400 rounded-[2.5rem] transform rotate-3 scale-105 opacity-30 blur-3xl animate-pulse group-hover:opacity-50 transition-opacity duration-700"></div>

                            {/* Main Glass Widget Box */}
                            <div className="relative h-full w-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-3xl rounded-[2.5rem] p-8 flex flex-col justify-between border border-white/60 dark:border-slate-700/50 shadow-2xl overflow-hidden">

                                {/* Top Bar */}
                                <div className="flex justify-between items-center z-10">
                                    <div className="flex space-x-2.5">
                                        <div className="w-3.5 h-3.5 rounded-full bg-rose-400 shadow-sm border border-white/50 dark:border-slate-600/50"></div>
                                        <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm border border-white/50 dark:border-slate-600/50"></div>
                                        <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-sm border border-white/50 dark:border-slate-600/50"></div>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="px-4 py-1.5 bg-white/70 dark:bg-slate-700/70 backdrop-blur-md text-indigo-700 dark:text-indigo-300 rounded-xl text-xs font-black shadow-sm border border-white/50 dark:border-slate-600/50">SQL</span>
                                        <span className="px-4 py-1.5 bg-white/70 dark:bg-slate-700/70 backdrop-blur-md text-purple-700 dark:text-purple-300 rounded-xl text-xs font-black shadow-sm border border-white/50 dark:border-slate-600/50">Python</span>
                                    </div>
                                </div>

                                {/* Main Chart Area */}
                                <div className="flex-1 w-full mt-8 relative z-10 flex flex-col justify-end border-b-2 border-slate-200/50 dark:border-slate-700/50 pb-2">
                                    <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark opacity-30 mask-image-linear-to-t pointer-events-none"></div>

                                    <div className="flex justify-between items-end h-[60%] w-full gap-3 relative z-20">
                                        {[
                                            { h: "35%", c: "bg-slate-300 dark:bg-slate-600", l: "Jan" },
                                            { h: "50%", c: "bg-indigo-300 dark:bg-indigo-500/80", l: "Feb" },
                                            { h: "45%", c: "bg-purple-300 dark:bg-purple-500/80", l: "Mar" },
                                            { h: "80%", c: "bg-gradient-to-t from-indigo-500 to-teal-400 shadow-[0_0_20px_rgba(99,102,241,0.5)] dark:shadow-[0_0_20px_rgba(99,102,241,0.2)]", l: "Apr" },
                                            { h: "60%", c: "bg-teal-300 dark:bg-teal-500/80", l: "May" }
                                        ].map((bar, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: bar.h }}
                                                transition={{ duration: 1.2, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                                                className={`w-full rounded-t-xl group/bar relative cursor-pointer ${bar.c}`}
                                            >
                                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover/bar:opacity-100 transition-opacity shadow-lg">
                                                    {bar.h}
                                                </div>
                                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500">
                                                    {bar.l}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Stat Card */}
                                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-5 mt-8 border border-white dark:border-slate-700 shadow-lg flex justify-between items-center z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                                    <div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">Data Processed</p>
                                        <p className="text-2xl font-black text-slate-900 dark:text-white">1.2 TB <span className="text-sm font-bold text-emerald-500 dark:text-emerald-400 ml-2">↑ +15%</span></p>
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 dark:from-emerald-900/40 to-teal-100 dark:to-teal-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-inner border border-white dark:border-slate-700">
                                        <Database size={24} strokeWidth={2.5} />
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute -right-2 lg:-right-4 top-28 glass dark:bg-slate-800/90 !bg-white/80 p-4 rounded-2xl shadow-xl border border-white dark:border-slate-700 flex items-center gap-3 z-20"
                                >
                                    <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-xl shadow-lg">
                                        <Database size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">ETL Pipeline</p>
                                        <p className="text-sm font-black text-slate-900 dark:text-white">Automated</p>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
