import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle2 } from 'lucide-react';

// Mock data for the live feed
const initialBlogs = [
    { id: 1, title: "The Future of Quantum Computing in 2026", category: "Tech", time: "Just now" },
    { id: 2, title: "10 Minimalist Interior Design Trends for Small Spaces", category: "Lifestyle", time: "2 mins ago" },
    { id: 3, title: "Sustainable Farming: A Guide to Urban Agriculture", category: "Environment", time: "4 mins ago" },
    { id: 4, title: "Understanding React Server Components", category: "Development", time: "7 mins ago" },
    { id: 5, title: "Best Hiking Trails in the Pacific Northwest", category: "Travel", time: "12 mins ago" },
];

const newTopics = [
    "Advanced SEO Strategies for E-commerce",
    "The Rise of AI in Personal Finance",
    "Vegan Meal Prep for Busy Professionals",
    "Exploring the History of Modern Art",
    "Crypto Market Analysis: Q2 Projections"
];

export default function LiveFeed() {
    const [blogs, setBlogs] = useState(initialBlogs);

    useEffect(() => {
        // Simulate new blogs being published every 3 seconds
        const interval = setInterval(() => {
            const randomTopic = newTopics[Math.floor(Math.random() * newTopics.length)];
            const categories = ["Business", "Finance", "Health", "Art", "Technology"];
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];

            const newBlog = {
                id: Date.now(),
                title: randomTopic,
                category: randomCategory,
                time: "Just now"
            };

            setBlogs(prev => [newBlog, ...prev.slice(0, 4)]);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-brand-grey overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-grey via-brand-grey/95 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="text-white">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-6"
                        >
                            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                            <span className="text-orange-400 text-sm font-medium">Live Activity</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-6 text-white"
                        >
                            Watch the <span className="text-brand-orange">Engine Work</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-300 text-lg mb-8 leading-relaxed"
                        >
                            Premium users get access to our high-frequency publishing pipeline.
                            See articles go from concept to live URL in minutes, not days.
                        </motion.p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <div className="text-3xl font-bold text-white mb-1">12M+</div>
                                <div className="text-sm text-gray-400">Words Generated</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <div className="text-3xl font-bold text-orange-500 mb-1">~5 mins</div>
                                <div className="text-sm text-gray-400">Avg. Publish Time</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Feed Container */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl h-[400px] overflow-hidden flex flex-col relative">
                            <div className="absolute overflow-hidden inset-x-0 top-0 h-10 bg-gradient-to-b from-brand-grey/90 to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute overflow-hidden inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-grey/90 to-transparent z-10 pointer-events-none"></div>

                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                                <h3 className="text-white font-semibold flex items-center gap-2">
                                    <Clock size={18} className="text-orange-500" /> Recent Publications
                                </h3>
                                <span className="text-xs text-green-400 flex items-center gap-1 bg-green-900/30 px-2 py-1 rounded-full">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    Active
                                </span>
                            </div>

                            <div className="space-y-4">
                                <AnimatePresence initial={false}>
                                    {blogs.map((blog) => (
                                        <motion.div
                                            key={blog.id}
                                            initial={{ opacity: 0, y: -20, height: 0 }}
                                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            className="bg-white/5 border border-white/5 rounded-lg p-4 flex items-start gap-4 group hover:border-orange-500/30 transition-colors"
                                        >
                                            <div className="mt-1">
                                                <CheckCircle2 size={16} className="text-green-500" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-medium text-gray-200 truncate group-hover:text-white transition-colors">{blog.title}</h4>
                                                <div className="flex items-center mt-1 space-x-3 text-xs text-gray-400">
                                                    <span className="text-orange-400 bg-orange-400/10 px-1.5 py-0.5 rounded">{blog.category}</span>
                                                    <span>•</span>
                                                    <span>{blog.time}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Decoration */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
