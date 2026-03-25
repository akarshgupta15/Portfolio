import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, Github, Database, PieChart, BarChart } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Profitability Matrix",
            description: "Architected a dynamic Power BI dashboard synthesizing 2M+ rows of cross-regional sales data. Identified a 12% revenue leakage in Q3 and proposed a targeted pricing strategy adopted by leadership.",
            tags: ["Power BI", "SQL (PostgreSQL)", "DAX", "Data Modeling"],
            icon: <PieChart size={28} className="text-white" />,
            gradient: "from-blue-600 to-indigo-600",
            bgImg: "bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
        },
        {
            title: "Customer Churn Predictor",
            description: "Engineered a Random Forest classification model to identify at-risk telecom customers. Achieved 88% precision, pinpointing 3 key behavioral indicators that drove a 5% increase in retention.",
            tags: ["Python", "Scikit-Learn", "Pandas", "ROC-AUC"],
            icon: <Database size={28} className="text-white" />,
            gradient: "from-emerald-500 to-teal-600",
            bgImg: "bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
        },
        {
            title: "Real Estate Market Scraper & KPI Tool",
            description: "Developed an automated ETL pipeline scraping unstructured housing data from 5 major sites. Implemented geospatial analysis to highlight underpriced neighborhoods, generating a weekly actionable report.",
            tags: ["Python", "BeautifulSoup", "Geopandas", "ETL"],
            icon: <BarChart size={28} className="text-white" />,
            gradient: "from-purple-600 to-fuchsia-600",
            bgImg: "bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Featured Analytics
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="h-full"
                        >
                            <Tilt
                                tiltMaxAngleX={8}
                                tiltMaxAngleY={8}
                                perspective={1000}
                                scale={1.02}
                                transitionSpeed={1000}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                glareColor="white"
                                glarePosition="all"
                                className="group relative rounded-3xl overflow-hidden glass-card dark:bg-slate-800/40 dark:border-slate-700 flex flex-col h-full hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-shadow duration-500"
                            >
                                {/* Project Header Banner */}
                                <div className={`h-40 w-full bg-gradient-to-br ${project.gradient} ${project.bgImg} relative overflow-hidden flex items-center justify-center`}>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="relative z-10 w-20 h-20 rounded-2xl glass !bg-white/20 border-white/40 flex items-center justify-center backdrop-blur-md shadow-lg"
                                    >
                                        {project.icon}
                                    </motion.div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>

                                    <p className="text-slate-600 dark:text-slate-300 mb-8 flex-grow leading-relaxed font-medium">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold font-mono border border-slate-200 dark:border-slate-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-slate-100 dark:border-slate-700 flex gap-6 mt-auto">
                                        <a href="https://github.com/akarsh-gupta" target="_blank" rel="noreferrer" className="flex items-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold text-sm transition-colors relative z-20">
                                            <Github size={20} className="mr-2" /> GitHub
                                        </a>
                                        <a href="#" target="_blank" rel="noreferrer" className="flex items-center text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 font-bold text-sm transition-colors relative z-20">
                                            <ExternalLink size={20} className="mr-2" /> Live Dashboard
                                        </a>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
