import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, Target, Lightbulb, TrendingUp } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Professional Experience
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
                    ></motion.div>
                </div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-[39px] md:left-[49px] top-0 bottom-0 w-0.5 bg-slate-100 dark:bg-slate-800 rounded-full"></div>

                    {/* Experience Item */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative pl-24 md:pl-28 py-6 group"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-slate-50 dark:bg-slate-900 rounded-full left-0 top-6 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-center group-hover:border-indigo-200 dark:group-hover:border-indigo-500/50 transition-colors z-10">
                            <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                <Briefcase size={24} />
                            </div>
                        </div>

                        <div className="glass-card p-8 rounded-3xl relative overflow-hidden group-hover:-translate-y-1 transition-transform duration-500 dark:bg-slate-800/40 dark:border-slate-700/50">
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                                            Data Analyst Intern
                                        </h3>
                                        <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                                            Amantya Technologies
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-bold border border-white/60 dark:border-slate-700 shadow-sm shrink-0">
                                        <Calendar size={16} className="mr-2 text-indigo-500 dark:text-indigo-400" />
                                        Apr 2025 - Sep 2025
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                    <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/50 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow group/stat">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3 group-hover/stat:scale-110 transition-transform">
                                            <Target size={20} />
                                        </div>
                                        <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">15%</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Efficiency Boost</p>
                                    </div>
                                    <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/50 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow group/stat">
                                        <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3 group-hover/stat:scale-110 transition-transform">
                                            <Lightbulb size={20} />
                                        </div>
                                        <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">5+</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Dashboards Built</p>
                                    </div>
                                    <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/50 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow group/stat">
                                        <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover/stat:scale-110 transition-transform">
                                            <TrendingUp size={20} />
                                        </div>
                                        <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">10k+</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Rows Cleaned</p>
                                    </div>
                                </div>

                                <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                                    <li className="flex items-start">
                                        <ChevronRight size={20} className="text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">Spearheaded Exploratory Data Analysis (EDA) on 1M+ rows of proprietary data, uncovering operational bottlenecks that drove a <strong className="dark:text-white">15% increase in cross-functional efficiency</strong>.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <ChevronRight size={20} className="text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">Designed and automated dynamic executive dashboards utilizing <strong className="dark:text-white">Tableau and Power BI</strong>, translating complex datasets into actionable KPIs and reducing manual reporting time by 12 hours monthly.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <ChevronRight size={20} className="text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">Engineered and optimized robust ETL pipelines with <strong className="dark:text-white">SQL and Python (Pandas)</strong>, ensuring 99% data accuracy while merging disparate sources into a centralized analytical database.</span>
                                    </li>
                                </ul>

                                <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-slate-700/50">
                                    <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 hover:text-indigo-700 dark:hover:text-indigo-300 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold transition-colors cursor-default">Python</span>
                                    <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 hover:text-indigo-700 dark:hover:text-indigo-300 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold transition-colors cursor-default">SQL</span>
                                    <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 hover:text-indigo-700 dark:hover:text-indigo-300 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold transition-colors cursor-default">Tableau</span>
                                    <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 hover:text-indigo-700 dark:hover:text-indigo-300 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold transition-colors cursor-default">Power BI</span>
                                    <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 hover:text-indigo-700 dark:hover:text-indigo-300 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold transition-colors cursor-default">Pandas/NumPy</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Second Experience Item (Placeholder) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative pl-24 md:pl-28 py-6 group"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-slate-50 dark:bg-slate-900 rounded-full left-0 top-6 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-center group-hover:border-indigo-200 dark:group-hover:border-indigo-500/50 transition-colors z-10">
                            <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                <Briefcase size={24} />
                            </div>
                        </div>

                        <div className="glass-card p-8 rounded-3xl relative overflow-hidden group-hover:-translate-y-1 transition-transform duration-500 dark:bg-slate-800/40 dark:border-slate-700/50">
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                                            Data Analyst Intern
                                        </h3>
                                        <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                                            DigiMantra Labs
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-bold border border-white/60 dark:border-slate-700 shadow-sm shrink-0">
                                        <Calendar size={16} className="mr-2 text-indigo-500 dark:text-indigo-400" />
                                        Nov 2024 - Jan 2025
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                    <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/50 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow group/stat">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3 group-hover/stat:scale-110 transition-transform">
                                            <Target size={20} />
                                        </div>
                                        <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">20%</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Reporting Speed</p>
                                    </div>
                                    <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/50 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow group/stat">
                                        <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3 group-hover/stat:scale-110 transition-transform">
                                            <Lightbulb size={20} />
                                        </div>
                                        <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">3+</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Data Models</p>
                                    </div>
                                    <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/50 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow group/stat">
                                        <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover/stat:scale-110 transition-transform">
                                            <TrendingUp size={20} />
                                        </div>
                                        <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">98%</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Data Accuracy</p>
                                    </div>
                                </div>

                                <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                                    <li className="flex items-start">
                                        <ChevronRight size={20} className="text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">Assisted in the migration and structuring of legacy datasets into an organized SQL database, improving data retrieval speed by <strong className="dark:text-white">20%</strong>.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <ChevronRight size={20} className="text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">Developed interactive <strong className="dark:text-white">Power BI</strong> reports to track daily marketing campaign performance, providing actionable insights to the growth team.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <ChevronRight size={20} className="text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">Performed extensive data cleaning and preprocessing using <strong className="dark:text-white">Python and Pandas</strong> on noisy customer datasets, ensuring 98% data accuracy for downstream analysis.</span>
                                    </li>
                                </ul>

                                <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-slate-700/50">
                                    <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 hover:text-indigo-700 dark:hover:text-indigo-300 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold transition-colors cursor-default">Python</span>
                                    <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 hover:text-indigo-700 dark:hover:text-indigo-300 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold transition-colors cursor-default">SQL</span>
                                    <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 hover:text-indigo-700 dark:hover:text-indigo-300 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold transition-colors cursor-default">Power BI</span>
                                    <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 hover:text-indigo-700 dark:hover:text-indigo-300 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold transition-colors cursor-default">Data Cleaning</span>
                                    <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 hover:text-indigo-700 dark:hover:text-indigo-300 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold transition-colors cursor-default">Pandas</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
