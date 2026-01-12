import { motion } from 'framer-motion';

const logos = [
    { name: 'Google', color: 'text-gray-500' },
    { name: 'Bing', color: 'text-gray-500' },
    { name: 'OpenAI', color: 'text-gray-500' },
    { name: 'Claude', color: 'text-gray-500' },
    { name: 'Perplexity', color: 'text-gray-500' },
];

export default function SocialProof() {
    return (
        <section className="py-12 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-8">
                    Track Your Visibility Across AI Search
                </p>
                <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder for logos - In a real app I'd use SVGs */}
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`text-xl font-bold ${logo.color}`}
                        >
                            {logo.name}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
