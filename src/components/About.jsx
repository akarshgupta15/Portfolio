import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Code, Database, Server, Terminal } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Me</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
                    ></motion.div>
                </div>

                {/* Bento Box Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] max-w-5xl mx-auto">

                    {/* Main Bio Card (Spans 2 columns) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-2 glass-card dark:bg-slate-800/60 rounded-[2rem] p-8 md:p-10 flex flex-col justify-center border border-white/60 dark:border-slate-700 shadow-xl group overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700 -mr-20 -mt-20"></div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center relative z-10">
                            <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mr-3 shadow-inner">
                                <Terminal size={16} />
                            </span>
                            Data & Engineering
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium relative z-10">
                            I am a passionate Data Analyst with a <strong className="text-slate-900 dark:text-white">B.Tech in Computer Science</strong>. During my experience as a <strong className="text-slate-900 dark:text-white">Data Analyst Intern</strong>, I've honed my ability to translate ambiguous business questions into actionable, data-driven solutions. I have deep expertise in building end-to-end analytical pipelines using <strong className="text-slate-800 dark:text-slate-200">Python, SQL, Tableau, Power BI, and Machine Learning</strong>.
                        </p>
                    </motion.div>

                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="glass-card rounded-[2rem] p-8 flex flex-col justify-center items-center text-center border border-white/60 dark:border-slate-700 shadow-xl group relative overflow-hidden bg-gradient-to-br from-white/60 dark:from-slate-800/80 to-indigo-50/40 dark:to-slate-800/40"
                    >
                        <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark opacity-10"></div>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(99,102,241,0.4)] dark:shadow-[0_0_30px_rgba(99,102,241,0.2)] group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                            <GraduationCap size={32} />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Education</h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">B.Tech in Computer Science</p>
                        <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-1 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-500/20">9.64 CGPA</p>
                    </motion.div>

                    {/* Domain Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-card rounded-[2rem] p-8 flex flex-col justify-center items-center text-center border border-white/60 dark:border-slate-700 shadow-xl group relative overflow-hidden bg-gradient-to-br from-white/60 dark:from-slate-800/80 to-emerald-50/40 dark:to-slate-800/40"
                    >
                        <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark opacity-10"></div>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-600 text-white flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.4)] dark:shadow-[0_0_30px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                            <BookOpen size={32} />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Domain</h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">Analytics & BI</p>
                    </motion.div>

                    {/* Philosophy Card (Spans 2 columns) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-2 glass-card rounded-[2rem] p-8 md:p-10 flex flex-col justify-center border border-slate-700 shadow-xl group overflow-hidden relative bg-slate-900 text-white"
                    >
                        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30"></div>
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal-500/20 dark:bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/40 dark:group-hover:bg-teal-500/20 transition-all duration-700"></div>

                        <h3 className="text-2xl font-bold mb-4 flex items-center relative z-10">
                            <span className="w-8 h-8 rounded-full bg-slate-800 text-teal-400 flex items-center justify-center mr-3 border border-slate-700">
                                <Code size={16} />
                            </span>
                            Hybrid Expertise
                        </h3>
                        <p className="text-lg text-slate-300 leading-relaxed font-medium relative z-10">
                            My dual computing and analytical background allows me to not only build dashboards, but also script the ETL pipelines that feed them. I thrive on diving deep into datasets to uncover hidden trends and structural inefficiencies.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
