import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    onLoginClick: () => void;
}

export default function Navbar({ onLoginClick }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsOpen(false);
            if (window.scrollY > 20) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Platform', href: '#platform' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Resources', href: '#resources' },
        { name: 'Pricing', href: '#pricing' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled
                ? 'bg-white/70 backdrop-blur-xl border-white/20 shadow-sm py-2'
                : 'bg-transparent border-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/20">
                            B
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            BlogWorker
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group"
                            >
                                {link.name}
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <button
                            onClick={onLoginClick}
                            className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Log in
                        </button>
                        <button
                            onClick={onLoginClick}
                            className="btn-primary !px-6 !py-2.5 text-sm shadow-brand-orange/20"
                        >
                            Get Started
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col gap-3">
                                <button onClick={onLoginClick} className="w-full text-center py-2.5 font-semibold text-gray-600 hover:text-gray-900">Log in</button>
                                <button onClick={onLoginClick} className="btn-primary w-full text-sm">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
