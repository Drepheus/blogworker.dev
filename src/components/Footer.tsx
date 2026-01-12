import React from 'react';
import { motion } from 'framer-motion';
import {
    Twitter, Linkedin, Github, LayoutGrid, FileText,
    BarChart3, Settings, TrendingUp, Users, ArrowUpRight
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-grey text-white pt-24 pb-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg">
                                B
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                BlogWorker
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            The world's most advanced programmatic SEO engine. We turn keywords into empires.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Platform</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-brand-orange transition-colors flex items-center gap-2">Features</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors flex items-center gap-2">Pricing</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors flex items-center gap-2">Case Studies <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white font-bold">NEW</span></a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors flex items-center gap-2">API Docs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-brand-orange transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
                        <p className="text-gray-400 mb-4 text-sm">
                            Get the latest SEO strategies sent directly to your inbox.
                        </p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-brand-orange rounded-md text-white hover:bg-orange-600 transition-colors">
                                <ArrowUpRight size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 BlogWorker Inc. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
