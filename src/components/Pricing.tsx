import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
    {
        name: "Starter",
        price: 29,
        description: "Perfect for testing the waters.",
        features: [
            "10 Premium Articles / mo",
            "Basic SEO Optimization",
            "WordPress Integration",
            "Standard Support",
            "5 Minute Setup"
        ],
        notIncluded: ["Auto-Indexing", "Live Feed Access", "Programmatic SEO"],
        highlight: false
    },
    {
        name: "Pro Scale",
        price: 79,
        description: "For serious traffic growth.",
        features: [
            "100 Premium Articles / mo",
            "Advanced NLP Optimization",
            "All CMs Integrations",
            "Instant Indexing API",
            "Priority Support",
            "Live Feed Access",
            "Image Generation AI"
        ],
        notIncluded: [],
        highlight: true
    },
    {
        name: "Agency",
        price: 199,
        description: "Maximum power for multiple sites.",
        features: [
            "500 Premium Articles / mo",
            "White Label Reports",
            "API Access",
            "Dedicated Account Manager",
            "Custom Workflow Builders",
            "Bulk CSV Upload",
            "Programmatic SEO Engine"
        ],
        notIncluded: [],
        highlight: false
    }
];

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <section id="pricing" className="py-24 bg-brand-grey relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Simple, <span className="text-brand-orange">Transparent Pricing</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-400 mb-8"
                    >
                        Stop paying per word. Start paying for results.
                    </motion.p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center space-x-4">
                        <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="relative w-14 h-8 bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none ring-2 ring-transparent focus:ring-brand-orange/50"
                        >
                            <div
                                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-6' : ''}`}
                            ></div>
                        </button>
                        <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
                            Annual <span className="text-brand-orange text-xs ml-1 font-bold">SAVE 20%</span>
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className={`relative p-8 rounded-2xl border ${plan.highlight
                                ? 'bg-gradient-to-b from-gray-800 to-gray-900 border-brand-orange/50 shadow-2xl shadow-brand-orange/20 scale-105 z-10'
                                : 'bg-gray-900 border-gray-800 text-gray-400'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-brand-orange text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-white'}`}>{plan.name}</h3>
                            <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                            <div className="flex items-baseline mb-8">
                                <span className="text-4xl font-bold text-white">${isAnnual ? Math.round(plan.price * 0.8) : plan.price}</span>
                                <span className="text-gray-500 ml-2">/month</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm">
                                        <Check size={16} className={`mr-3 flex-shrink-0 ${plan.highlight ? 'text-brand-orange' : 'text-gray-500'}`} />
                                        <span className={plan.highlight ? 'text-gray-200' : 'text-gray-400'}>{feature}</span>
                                    </li>
                                ))}
                                {plan.notIncluded.map((feature, i) => (
                                    <li key={`not-${i}`} className="flex items-center text-sm text-gray-600">
                                        <X size={16} className="mr-3 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${plan.highlight
                                ? 'bg-brand-orange text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/30'
                                : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                                }`}>
                                {plan.highlight ? 'Get Started' : 'Subscribe'}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
