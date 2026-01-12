import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, User } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Content Manager",
        company: "TechFlow",
        content: "We published 300 articles in week one. Our organic traffic went from 2k to 45k in 3 months. Insane ROAS.",
        metric: "+2,150% Traffic"
    },
    {
        name: "Marcus Chen",
        role: "Founder",
        company: "NicheSite Pro",
        content: "The quality is distinguishable from my manually written posts. The formatting is perfect every time.",
        metric: "450 Keywords Ranked"
    },
    {
        name: "Alex Rivera",
        role: "SEO Director",
        company: "GrowthLabs",
        content: "Finally, a programmatic tool that doesn't produce garbage. The internal linking logic is a game changer.",
        metric: "DR Increased by 12"
    },
    {
        name: "Jessica Wu",
        role: "Marketing Head",
        company: "SaaSify",
        content: "We use BlogWorker to dominate long-tail keywords. It's like having an army of writers working 24/7.",
        metric: "TOP 3 for 800+ terms"
    },
    {
        name: "David Miller",
        role: "Agency Owner",
        company: "ScaleDigital",
        content: "My clients are blown away by the speed. What took us a month now takes an afternoon.",
        metric: "10x Production Speed"
    }
];

const Card = ({ item }: { item: typeof testimonials[0] }) => (
    <div className="flex-shrink-0 w-[350px] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mx-4 hover:shadow-md hover:border-orange-200 transition-all duration-300">
        <div className="flex items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
            ))}
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">"{item.content}"</p>

        <div className="flex items-center justify-between border-t border-gray-50 pt-4">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                    <User size={20} />
                </div>
                <div>
                    <div className="font-bold text-gray-900 text-sm">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.company}</div>
                </div>
            </div>
            <div className="text-right">
                <div className="flex items-center text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">
                    <TrendingUp size={12} className="mr-1" />
                    {item.metric}
                </div>
            </div>
        </div>
    </div>
);

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                >
                    Trusted by <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">SEO Pros</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-gray-600"
                >
                    Join 2,000+ marketers dominating the SERPs
                </motion.p>
            </div>

            <div className="relative w-full">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                {/* First Row - Moving Left */}
                <motion.div
                    className="flex mb-8"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
                        <Card key={`row1-${idx}`} item={item} />
                    ))}
                </motion.div>

                {/* Second Row - Moving Right */}
                <motion.div
                    className="flex"
                    animate={{ x: [-1000, 0] }}
                    transition={{
                        duration: 45,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
                        <Card key={`row2-${idx}`} item={item} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
