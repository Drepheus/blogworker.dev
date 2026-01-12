import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gray-100 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
                    <span className="text-sm font-medium text-gray-600">Live Feature: Publish Every 5 Minutes</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6"
                >
                    Premium Blog Generation <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">On Autopilot</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Generate SEO-optimized, agency-quality articles on any topic. Watch your content empire grow in real-time with our high-frequency publishing engine.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                >
                    <button className="btn-primary w-full sm:w-auto text-lg px-8 py-4">
                        Start Generating Now <ArrowRight className="ml-2 h-5 w-5" />
                    </button>

                    <button className="btn-secondary w-full sm:w-auto text-lg px-8 py-4">
                        View Live Demo
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-12 text-sm text-gray-500"
                >
                    14-day free trial. No credit card required.
                </motion.div>
            </div>
        </section>
    );
}
