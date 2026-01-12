import { motion } from 'framer-motion';
import { FileText, Zap, Search } from 'lucide-react';

export default function ProductShowcase() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        From Keyword to <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Ranked Article</span>
                    </motion.h2>
                    <p className="text-lg text-gray-600">
                        Our AI doesn't just write. It researches, structures, and optimizes every single piece of content for maximum visibility.
                    </p>
                </div>

                {/* Dashboard Mockup Visualization */}
                <div className="relative mx-auto max-w-5xl">
                    {/* Main Interface */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-10"
                    >
                        {/* Macbook-like Header */}
                        <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="p-8 grid grid-cols-12 gap-6 bg-white min-h-[500px]">

                            {/* Sidebar */}
                            <div className="col-span-3 border-r border-gray-100 pr-6 space-y-4 hidden md:block">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="h-8 w-24 bg-gray-100 rounded-md mb-8"
                                ></motion.div>
                                <div className="space-y-3">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1, duration: 0.4 }}
                                            className="h-4 bg-gray-50 rounded w-full"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div className="col-span-12 md:col-span-9">
                                {/* Status Bar */}
                                <div className="flex justify-between items-center mb-8">
                                    <div className="flex space-x-3">
                                        <div className="h-8 w-8 bg-orange-100 rounded-lg flex items-center justify-center text-brand-orange">
                                            <Zap size={18} />
                                        </div>
                                        <div>
                                            <div className="h-4 w-32 bg-gray-100 rounded mb-1"></div>
                                            <div className="h-2 w-20 bg-gray-50 rounded"></div>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{
                                            boxShadow: ["0 0 0px rgba(255,159,67,0)", "0 0 10px rgba(255,159,67,0.5)", "0 0 0px rgba(255,159,67,0)"]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="h-8 px-4 bg-brand-orange text-white text-xs font-bold rounded-lg flex items-center justify-center"
                                    >
                                        PUBLISHING
                                    </motion.div>
                                </div>

                                {/* Animated Article Generation */}
                                <div className="space-y-6">
                                    {/* Title */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "70%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className="h-8 bg-gray-800 rounded-lg"
                                    ></motion.div>

                                    {/* Image Placeholder */}
                                    <div className="relative overflow-hidden rounded-xl border border-gray-100 h-64 bg-gray-50 group">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5, duration: 1 }}
                                            className="absolute inset-0 flex items-center justify-center text-gray-300"
                                        >
                                            <FileText size={48} className="drop-shadow-sm" />
                                        </motion.div>
                                        {/* Scanning effect */}
                                        <motion.div
                                            initial={{ top: "-100%" }}
                                            whileInView={{ top: "200%" }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 1, duration: 2, ease: "linear", repeat: Infinity, repeatDelay: 3 }}
                                            className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-brand-orange/10 to-transparent"
                                        />
                                    </div>

                                    {/* Text Lines Simulated Typing */}
                                    <div className="space-y-3">
                                        {[1, 2, 3, 4, 5, 6].map((line, index) => (
                                            <motion.div
                                                key={line}
                                                initial={{ width: 0, opacity: 0.5 }}
                                                whileInView={{ width: "100%", opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: 1.5 + (line * 0.2),
                                                    duration: 0.8,
                                                    ease: "anticipate"
                                                }}
                                                className={`h-3 bg-gray-100 rounded ${index === 5 ? 'w-2/3' : ''}`}
                                            ></motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Floating SEO Card */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                                    transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
                                    className="absolute right-8 bottom-12 bg-gray-900 p-4 rounded-xl shadow-2xl border border-gray-700 w-56 z-20"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center space-x-2">
                                            <Search size={14} className="text-blue-400" />
                                            <span className="text-xs font-bold text-white">SEO Score</span>
                                        </div>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 3 }}
                                            className="text-lg font-bold text-green-400"
                                        >
                                            98<span className="text-xs text-gray-500 font-normal">/100</span>
                                        </motion.div>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "98%" }}
                                            transition={{ delay: 2.8, duration: 1.5, ease: "easeOut" }}
                                            className="bg-green-500 h-2 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                                        ></motion.div>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </motion.div>

                    {/* Background Decor */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-100/50 via-white to-blue-50/50 blur-3xl -z-10 rounded-full pointer-events-none"></div>
                </div>

            </div>
        </section>
    );
}
