import { motion } from 'framer-motion';
import { Globe, BarChart3, Zap, Layers, RefreshCw, PenTool } from 'lucide-react';

const features = [
    {
        icon: <Globe className="w-6 h-6 text-orange-500" />,
        title: "Any Topic, Instantly",
        description: "Input any niche or subject. Our AI researches and writes authoritative content that sounds human."
    },
    {
        icon: <Zap className="w-6 h-6 text-orange-500" />,
        title: "High-Frequency Publishing",
        description: "From daily updates to a new post every 5 minutes. Scale your content output to specific needs."
    },
    {
        icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
        title: "SEO Optimized Core",
        description: "Every article is structured for ranking: proper H-tags, keyword density, and schema markup built-in."
    },
    {
        icon: <Layers className="w-6 h-6 text-orange-500" />,
        title: "Premium Aesthetics",
        description: "Beautifully formatted blogs with relevant images, pull quotes, and professional layouts."
    },
    {
        icon: <RefreshCw className="w-6 h-6 text-orange-500" />,
        title: "Live Feed Technology",
        description: "Monitor your publishing queue in real-time. Watch as we build your digital footprint live."
    },
    {
        icon: <PenTool className="w-6 h-6 text-orange-500" />,
        title: "Smart Interlinking",
        description: "Automatically connects new articles to existing ones to build a strong internal link structure."
    }
];

export default function Features() {
    return (
        <section id="solutions" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Complete <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Blog Automation</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        Everything you need to dominate search results without hiring an agency.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
