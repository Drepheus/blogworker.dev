import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bot, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Define Your Niche",
        description: "Simply enter your target topic. Our system analyzes low-competition keywords and content gaps instantly.",
        icon: <Search className="w-8 h-8 text-white" />,
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 2,
        title: "AI Autopilot Engaged",
        description: "We generate hundreds of premium, human-like articles formatted with images, charts, and internal links.",
        icon: <Bot className="w-8 h-8 text-white" />,
        color: "from-orange-500 to-pink-500"
    },
    {
        id: 3,
        title: "Watch Traffic Grow",
        description: "Your blog publishes 24/7. Content gets indexed, rankings climb, and your organic reach explodes.",
        icon: <TrendingUp className="w-8 h-8 text-white" />,
        color: "from-green-500 to-emerald-500"
    }
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-brand-grey relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-orange-500 font-semibold tracking-wider uppercase text-sm"
                    >
                        How It Works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
                    >
                        Launch Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Blog Empire</span> <br /> in 3 Steps
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-300"
                    >
                        From raw concept to a fully active, revenue-generating publication in minutes, not months.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent -translate-y-1/2 z-0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10"
                        >
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col items-center text-center backdrop-blur-sm">

                                {/* Step Number Badge */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-brand-grey border border-white/10 flex items-center justify-center text-sm font-bold text-gray-300">
                                    {step.id}
                                </div>

                                {/* Icon Container with Gradient */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 mb-6 shadow-lg shadow-black/30`}>
                                    <div className="w-full h-full bg-brand-grey rounded-[14px] flex items-center justify-center group-hover:bg-opacity-90 transition-all">
                                        {step.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-gray-300 leading-relaxed text-sm">
                                    {step.description}
                                </p>

                                {/* Hover Glow Effect */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <button className="btn-primary bg-white text-white border-white/20 hover:bg-white/10 px-10 py-4 text-lg">
                        Start Your First Blog <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <p className="mt-4 text-sm text-gray-400">No technical skills required</p>
                </motion.div>
            </div>
        </section>
    );
}
