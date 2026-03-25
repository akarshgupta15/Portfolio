import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.target);
        // Replace this with your Web3Forms access key
        formData.append("access_key", "4de78dcc-15cf-4fe7-8e5c-7aaac32f731b");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            }).then((res) => res.json());

            if (res.success) {
                setStatus('success');
                e.target.reset(); // Clear form fields
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Let's Connect</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 font-medium">Open for Data Analyst roles and exciting collaborations.</p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-0 glass-card dark:bg-slate-800/40 rounded-3xl overflow-hidden pointer-events-auto border border-white/60 dark:border-slate-700 shadow-2xl relative">

                        {/* Animated Gradient Contact Info Pane */}
                        <div className="md:col-span-2 relative overflow-hidden group p-10 flex flex-col justify-between">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-500 animate-gradient-x opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-20 rounded-full blur-2xl -ml-10 -mb-10"></div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-black mb-6 text-white tracking-tight">Contact Info</h3>
                                <p className="text-indigo-100 mb-12 text-lg font-medium leading-relaxed">
                                    Fill out the form and I will get back to you within 24 hours.
                                </p>

                                <div className="space-y-8">
                                    <a href="tel:+919041380697" className="flex items-center group/info cursor-pointer hover:opacity-80 transition-opacity">
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mr-4 group-hover/info:scale-110 transition-transform border border-white/20">
                                            <Phone className="text-white" size={20} />
                                        </div>
                                        <span className="text-lg text-white font-medium">+91 9041380697</span>
                                    </a>
                                    <a href="mailto:hello@akarshgupta.dev" className="flex items-center group/info cursor-pointer hover:opacity-80 transition-opacity">
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mr-4 group-hover/info:scale-110 transition-transform border border-white/20">
                                            <Mail className="text-white" size={20} />
                                        </div>
                                        <span className="text-lg text-white font-medium">hello@akarshgupta.dev</span>
                                    </a>
                                    <div className="flex items-center group/info cursor-pointer">
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mr-4 group-hover/info:scale-110 transition-transform border border-white/20">
                                            <MapPin className="text-white" size={20} />
                                        </div>
                                        <span className="text-lg text-white font-medium">Gurugram, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Glassmorphic Form Pane */}
                        <div className="md:col-span-3 p-10 bg-white/40 dark:bg-slate-800/60 backdrop-blur-xl">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="first_name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">First Name</label>
                                        <input type="text" name="first_name" id="first_name" required className="w-full px-5 py-4 rounded-xl border border-white/60 dark:border-slate-700/50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-white/50 dark:bg-slate-900/50 backdrop-blur-md focus:bg-white dark:focus:bg-slate-900 outline-none text-slate-900 dark:text-white shadow-sm hover:shadow-md" placeholder="Jane" />
                                    </div>
                                    <div>
                                        <label htmlFor="last_name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">Last Name</label>
                                        <input type="text" name="last_name" id="last_name" required className="w-full px-5 py-4 rounded-xl border border-white/60 dark:border-slate-700/50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-white/50 dark:bg-slate-900/50 backdrop-blur-md focus:bg-white dark:focus:bg-slate-900 outline-none text-slate-900 dark:text-white shadow-sm hover:shadow-md" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">Email Address</label>
                                    <input type="email" name="email" id="email" required className="w-full px-5 py-4 rounded-xl border border-white/60 dark:border-slate-700/50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-white/50 dark:bg-slate-900/50 backdrop-blur-md focus:bg-white dark:focus:bg-slate-900 outline-none text-slate-900 dark:text-white shadow-sm hover:shadow-md" placeholder="jane@example.com" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">Message</label>
                                    <textarea name="message" id="message" required rows="4" className="w-full px-5 py-4 rounded-xl border border-white/60 dark:border-slate-700/50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-white/50 dark:bg-slate-900/50 backdrop-blur-md focus:bg-white dark:focus:bg-slate-900 outline-none text-slate-900 dark:text-white resize-none shadow-sm hover:shadow-md" placeholder="Write your message here..."></textarea>
                                </div>

                                {status === 'success' && (
                                    <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-xl flex items-center border border-emerald-200 dark:border-emerald-500/20">
                                        <CheckCircle className="mr-2" size={20} />
                                        Message sent successfully! I'll get back to you soon.
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="p-4 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 rounded-xl flex items-center border border-red-200 dark:border-red-500/20">
                                        <AlertCircle className="mr-2" size={20} />
                                        Something went wrong. Please try again later.
                                    </div>
                                )}

                                <button type="submit" disabled={status === 'loading'} className="w-full relative inline-flex items-center justify-center px-8 py-5 font-bold text-white transition-all duration-300 bg-slate-900 dark:bg-indigo-600 rounded-xl hover:bg-slate-800 dark:hover:bg-indigo-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:-translate-y-1 overflow-hidden group mt-4 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none">
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                                    <span className="relative flex items-center text-lg">
                                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                                        {status !== 'loading' && <Send className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />}
                                    </span>
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
