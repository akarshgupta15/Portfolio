import React from 'react';
import { motion } from 'framer-motion';
import { Database, LineChart, Code2, Layers, Binary, Cpu } from 'lucide-react';

const Skills = () => {
    const customCategories = [
        {
            title: "Data Visualization",
            icon: <LineChart className="text-indigo-500 dark:text-indigo-400" size={28} />,
            skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Looker Studio"],
            color: "indigo",
            hoverGlow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:border-indigo-400/50 dark:hover:border-indigo-500/30"
        },
        {
            title: "Programming",
            icon: <Code2 className="text-purple-500 dark:text-purple-400" size={28} />,
            skills: ["Python", "SQL", "R", "JavaScript", "Java"],
            color: "purple",
            hoverGlow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/50 dark:hover:border-purple-500/30"
        },
        {
            title: "Data Engineering",
            icon: <Database className="text-blue-500 dark:text-blue-400" size={28} />,
            skills: ["MySQL", "PostgreSQL", "MongoDB", "ETL Pipelines", "Airflow Basics"],
            color: "blue",
            hoverGlow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-400/50 dark:hover:border-blue-500/30"
        },
        {
            title: "Machine Learning",
            icon: <Cpu className="text-emerald-500 dark:text-emerald-400" size={28} />,
            skills: ["Scikit-Learn", "Predictive Modeling", "Regression", "Clustering", "Classification"],
            color: "emerald",
            hoverGlow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] dark:hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-400/50 dark:hover:border-emerald-500/30"
        },
        {
            title: "Data Processing",
            icon: <Layers className="text-orange-500 dark:text-orange-400" size={28} />,
            skills: ["Pandas", "NumPy", "Data Cleaning", "Feature Engineering", "API Integration"],
            color: "orange",
            hoverGlow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] dark:hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:border-orange-400/50 dark:hover:border-orange-500/30"
        },
        {
            title: "Data Analysis",
            icon: <Binary className="text-rose-500 dark:text-rose-400" size={28} />,
            skills: ["A/B Testing", "KPI Tracking", "Advanced Excel", "Statistical Analysis"],
            color: "rose",
            hoverGlow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.2)] dark:hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] hover:border-rose-400/50 dark:hover:border-rose-500/30"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="skills" className="py-24 relative">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Technical Skills
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium"
                    >
                        The main tools and technologies I use to work with data.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {customCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`glass-card dark:bg-slate-800/40 dark:border-slate-700 p-8 rounded-3xl group cursor-pointer hover:-translate-y-2 transition-all duration-500 ${category.hoverGlow}`}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-4 rounded-2xl bg-${category.color}-50 dark:bg-${category.color}-500/10 group-hover:scale-110 transition-transform duration-300`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className={`px-3.5 py-1.5 bg-white/50 dark:bg-slate-800/50 border border-white/60 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-semibold shadow-sm hover:bg-white dark:hover:bg-slate-700 hover:border-${category.color}-300 dark:hover:border-${category.color}-500/50 hover:text-${category.color}-700 dark:hover:text-${category.color}-400 transition-colors`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;
