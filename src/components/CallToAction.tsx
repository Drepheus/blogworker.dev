import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CallToAction() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with theme colors */}
            <div className="absolute inset-0 bg-gray-900"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>

            {/* Abstract Orange Shapes */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-orange mb-8"
                >
                    <Sparkles size={16} />
                    <span className="text-sm font-medium">Limited Time Launch Offer</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                >
                    Ready to Build Your <br />
                    <span className="text-brand-orange">Content Empire?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
                >
                    Join the platform that's publishing 12 million words per month.
                    Start ranking for keywords you never thought possible.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="btn-primary text-lg !px-10 !py-4 shadow-brand-orange/40">
                        Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button className="px-8 py-4 rounded-full text-white font-medium hover:text-brand-orange transition-colors">
                        Talk to Sales
                    </button>
                </motion.div>

                <p className="mt-8 text-sm text-gray-500">
                    No credit card required for demo • Cancel anytime
                </p>
            </div>
        </section>
    );
}
