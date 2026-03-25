import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme;
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 selection:bg-indigo-500/30 overflow-hidden font-sans transition-colors duration-300">
            {/* Organic Aurora Gradient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"></div>

                {/* Static Soft Gradients (Optimized) */}
                <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-indigo-100 dark:from-indigo-900/40 to-purple-100 dark:to-purple-900/40 opacity-60 blur-3xl transform-gpu"></div>
                <div className="absolute top-[10%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-teal-50 dark:from-teal-900/40 to-emerald-50 dark:to-emerald-900/40 opacity-60 blur-3xl transform-gpu"></div>
                <div className="absolute -bottom-[20%] left-[10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-tr from-blue-50 dark:from-blue-900/40 to-indigo-50 dark:to-indigo-900/40 opacity-60 blur-3xl transform-gpu"></div>

                <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]"></div>
            </div>

            {/* Content wrapper */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <main className="flex-grow">
                    <Hero />
                    <About />
                    <Experience />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>

                <footer className="relative bg-slate-900 border-t border-slate-800 text-white py-12 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern-dark opacity-20"></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <p className="opacity-75 font-medium">© {new Date().getFullYear()} Akarsh Gupta. Data Analyst Portfolio.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
