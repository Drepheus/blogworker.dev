import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard, FileText, Settings, Bell,
    Plus, ArrowUpRight, CheckCircle2, MoreVertical,
    BarChart, Globe, Zap, LogOut, Radio, RefreshCw,
    Clock, Filter, Sliders
} from 'lucide-react';


// Sub-components for different dashboard views

// 1. Blogs View
const BlogsView = () => {
    const articles = [
        {
            id: 1,
            title: 'The Future of AI in 2026: Trends You Can Not Ignore',
            snippet: 'Artificial Intelligence is evolving rapidly. From generative models to autonomous agents, discover the key trends defining 2026 and how they impact your industry.',
            niche: 'Technology',
            status: 'Published',
            date: 'Just now',
            readTime: '6 min',
            badge: 'Just Published',
            badgeColor: 'text-green-500 bg-green-500/10'
        },
        {
            id: 2,
            title: '10 Minimalist Home Decor Tips for a Clutter-Free Life',
            snippet: 'Transform your living space with these essential minimalist principles. Learn how to declutter, choose the right color palette, and select functional furniture.',
            niche: 'Lifestyle',
            status: 'New',
            date: '7 min',
            readTime: '5 min',
            badge: 'New',
            badgeColor: 'text-yellow-500 bg-yellow-500/10'
        },
        {
            id: 3,
            title: 'Crypto Market Analysis Q4: Bull Run or Correction?',
            snippet: 'A deep dive into the current state of the cryptocurrency market. We analyze Bitcoin\'s halving effects, Ethereum\'s upgrades, and emerging altcoins.',
            niche: 'Finance',
            status: 'Draft',
            date: '2 hrs ago',
            readTime: '8 min',
            badge: 'Draft',
            badgeColor: 'text-gray-400 bg-gray-700/50'
        },
        {
            id: 4,
            title: 'Complete Guide to Plant-Based Nutrition for Athletes',
            snippet: 'Can you build muscle on a vegan diet? Absolutely. Here is your comprehensive guide to protein sources, meal timing, and recovery supplements.',
            niche: 'Health',
            status: 'New',
            date: 'Just now',
            readTime: '12 min',
            badge: 'New',
            badgeColor: 'text-yellow-500 bg-yellow-500/10'
        },
        {
            id: 5,
            title: 'Remote Work Productivity: The Ultimate Handbook',
            snippet: 'Master the art of working from home. We cover time blocking, setting up an ergonomic workspace, and maintaining work-life balance.',
            niche: 'Business',
            status: 'Published',
            date: '1 day ago',
            readTime: '15 min',
            badge: 'Evergreen',
            badgeColor: 'text-blue-500 bg-blue-500/10'
        },
        {
            id: 6,
            title: 'Understanding React Server Components in 2026',
            snippet: 'Server Components have changed the way we build web apps. Learn the difference between RSC and SSR, and when to use each for maximum performance.',
            niche: 'Dev',
            status: 'Published',
            date: '2 days ago',
            readTime: '10 min',
            badge: 'Tech',
            badgeColor: 'text-purple-500 bg-purple-500/10'
        },
    ];

    return (
        <div className="space-y-8">
            {/* Stats Header Bar */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                <div className="flex items-center gap-12">
                    <div>
                        <div className="text-4xl font-bold text-white tracking-tight">11,971</div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Total Articles</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-green-500 tracking-tight">8,542</div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Published Today</div>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-900/20 rounded-full border border-green-900/30">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-green-500 text-xs font-bold">Auto-updating every 30s</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex justify-end gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-gray-300 hover:text-white transition-colors">
                    <Filter size={16} /> Filter
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-brand-orange text-white rounded-lg text-sm font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                    <Plus size={16} /> Create New
                </button>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                    <div key={article.id} className="group relative bg-gray-900/40 border border-gray-800 hover:border-brand-orange/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-orange/5 flex flex-col h-full">
                        {/* Top Colored Line */}
                        <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${article.status === 'Draft' ? 'bg-gray-700' : 'bg-gradient-to-r from-brand-orange to-orange-400'
                            }`}></div>

                        <div className="flex justify-between items-start mb-4">
                            <span className={`px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider ${article.badgeColor}`}>
                                {article.badge}
                            </span>
                            <span className="text-xs text-gray-500 font-medium">{article.date}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white leading-tight mb-3 group-hover:text-brand-orange transition-colors">
                            {article.title}
                        </h3>

                        <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
                            {article.snippet}
                        </p>

                        <div className="mt-auto pt-4 border-t border-gray-800 flex items-center justify-between">
                            <div className="bg-gray-800/50 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 border border-gray-700/50">
                                {article.niche}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                <Clock size={14} />
                                {article.readTime}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center pt-8">
                <button className="text-sm text-gray-500 hover:text-brand-orange transition-colors flex items-center justify-center gap-2 mx-auto">
                    Load More Articles <ArrowUpRight size={14} />
                </button>
            </div>
        </div>
    );
};

// 2. Real Time Feed View
const RealTimeFeedView = () => {
    const liveEvents = [
        { id: 1, time: '10:42:15 AM', action: 'Published', title: 'The Future of Quantum Computing', site: 'techdaily.io', status: 'Success', duration: '4.2s' },
        { id: 2, time: '10:42:02 AM', action: 'Indexing', title: 'Best Coffee Grinders 2026', site: 'coffeelovers.com', status: 'Processing', duration: '-' },
        { id: 3, time: '10:41:45 AM', action: 'Generated', title: 'How to Train for a Marathon', site: 'fitnesspro.net', status: 'Success', duration: '3.8s' },
        { id: 4, time: '10:41:12 AM', action: 'Published', title: 'React vs Vue: 2026 Edition', site: 'devtalk.com', status: 'Success', duration: '4.5s' },
        { id: 5, time: '10:40:55 AM', action: 'Drafted', title: 'Sustainable Fashion Trends', site: 'mystyle.blog', status: 'Success', duration: '2.1s' },
        { id: 6, time: '10:40:22 AM', action: 'Published', title: 'Understanding Inflation', site: 'finance101.com', status: 'Success', duration: '3.9s' },
        { id: 7, time: '10:39:15 AM', action: 'Published', title: 'Top 10 Travel Destinations', site: 'wanderlust.io', status: 'Success', duration: '4.1s' },
        { id: 8, time: '10:38:40 AM', action: 'Indexing', title: 'Meditation for Beginners', site: 'mindful.org', status: 'Processing', duration: '-' },
    ];

    return (
        <div className="space-y-6">
            <div className="grid lg:grid-cols-4 gap-6">
                {[
                    { label: "Active Nodes", value: "842", color: "text-blue-500" },
                    { label: "Words / Sec", value: "12,400", color: "text-orange-500" },
                    { label: "Indexing Rate", value: "98.2%", color: "text-green-500" },
                    { label: "Queue Load", value: "42ms", color: "text-purple-500" },
                ].map((stat, i) => (
                    <div key={i} className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 backdrop-blur-sm">
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className={`text-xs font-bold uppercase tracking-wider ${stat.color}`}>{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-md shadow-xl">
                <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-900/50">
                    <h2 className="font-bold text-white flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        Live Transaction Log
                    </h2>
                    <button className="text-xs text-brand-orange hover:text-white transition-colors font-mono flex items-center gap-1">
                        <Clock size={12} /> Real-time
                    </button>
                </div>

                <div className="divide-y divide-gray-800/50">
                    {liveEvents.map((event) => (
                        <div key={event.id} className="p-4 hover:bg-white/5 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                            <div className="flex items-center gap-4 md:gap-6 flex-1">
                                <span className="text-xs font-mono text-gray-500 w-20">{event.time}</span>

                                <div className={`w-24 px-2 py-1 rounded text-xs font-bold text-center border ${event.action === 'Published' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                    event.action === 'Indexing' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                                        'bg-gray-700/30 text-gray-400 border-gray-700'
                                    }`}>
                                    {event.action}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors truncate">{event.title}</div>
                                    <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                                        <Globe size={10} /> {event.site}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-8 pl-10 md:pl-0">
                                <div className="text-right w-20">
                                    <div className="text-[10px] uppercase text-gray-600 font-bold">Duration</div>
                                    <div className="text-sm font-mono text-gray-300">{event.duration}</div>
                                </div>
                                <div className="w-8 flex justify-end">
                                    {event.status === 'Success' ? (
                                        <CheckCircle2 size={18} className="text-green-500" />
                                    ) : (
                                        <RefreshCw size={18} className="text-blue-500 animate-spin" />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-3 bg-gray-900/80 text-center text-xs text-gray-500 border-t border-gray-800 animate-pulse">
                    Processing incoming stream...
                </div>
            </div>
        </div>
    );
};

// 3. Settings View
const SettingsView = () => {
    return (
        <div className="max-w-4xl space-y-8">
            <h2 className="text-2xl font-bold text-white">Settings & Integrations</h2>

            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Globe size={20} className="text-brand-orange" /> Connected Platforms
                </h3>

                <div className="space-y-4">
                    {[
                        { name: "WordPress", status: "Connected", icon: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png" },
                        { name: "Ghost CMS", status: "Connect", icon: "https://ghost.org/icons/ghost-logo-icon.png" }, // Placeholder icons
                        { name: "Shopify", status: "Connect", icon: "" },
                        { name: "Webflow", status: "Connect", icon: "" },
                    ].map((platform, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black font-bold text-xs overflow-hidden">
                                    {platform.name.substring(0, 2)}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{platform.name}</div>
                                    <div className="text-xs text-gray-500">Auto-publish enabled</div>
                                </div>
                            </div>
                            <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${platform.status === 'Connected'
                                ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                                : 'bg-white text-gray-900 hover:bg-gray-100'
                                }`}>
                                {platform.status}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Sliders size={20} className="text-brand-orange" /> API Configuration
                </h3>
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-800 mb-4">
                    <div>
                        <div className="font-bold text-white">Production API Key</div>
                        <div className="text-xs text-gray-500">pk_live_51...294</div>
                    </div>
                    <button className="p-2 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-white transition-colors">
                        <FileText size={18} />
                    </button>
                </div>
                <button className="text-brand-orange text-sm font-bold hover:text-orange-400 transition-colors">
                    Generate New Key
                </button>
            </div>
        </div>
    );
};

export default function Dashboard({ onLogout }: { onLogout: () => void }) {
    const [activeTab, setActiveTab] = useState('Overview');

    // Overview Content Component
    const OverviewContent = () => (
        <div className="space-y-8">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Articles", value: "1,240", change: "+12%", icon: FileText, color: "text-blue-500" },
                    { label: "Words Generated", value: "2.4M", change: "+8%", icon: FileText, color: "text-purple-500" },
                    { label: "Avg. Traffic Value", value: "$4,200", change: "+24%", icon: Zap, color: "text-yellow-500" },
                    { label: "SEO Score", value: "92", change: "+2%", icon: BarChart, color: "text-green-500" },
                ].map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-gray-900/40 border border-gray-800 p-6 rounded-2xl hover:border-gray-700 transition-colors backdrop-blur-sm"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl bg-gray-800/50 ${stat.color}`}>
                                <stat.icon size={20} />
                            </div>
                            <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded-full flex items-center">
                                <ArrowUpRight size={12} className="mr-1" /> {stat.change}
                            </span>
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="grid lg:grid-cols-3 gap-8">

                {/* Main Action Area */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Create Card */}
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-orange-900/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Ready to scale?</h2>
                                <p className="text-orange-100 mb-6 max-w-md">Generate 100+ SEO-optimized articles in minutes. Select your topic and let our engine handle the rest.</p>
                                <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors shadow-lg flex items-center gap-2">
                                    <Plus size={20} /> Start New Campaign
                                </button>
                            </div>
                            <div className="h-32 w-32 bg-white/20 rounded-2xl backdrop-blur-md border border-white/30 flex items-center justify-center rotate-6 shadow-xl">
                                <Zap size={48} className="text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Chart Area (Mock) */}
                    <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-lg">Traffic Growth</h3>
                            <select className="bg-gray-800 border-none text-xs text-gray-400 rounded-lg p-2 focus:ring-0">
                                <option>Last 30 Days</option>
                                <option>Last 12 Months</option>
                            </select>
                        </div>
                        <div className="h-64 flex items-end justify-between gap-2 px-2">
                            {[30, 45, 35, 60, 55, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.05 }}
                                    className="w-full bg-gray-800 rounded-t-lg relative group"
                                >
                                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-brand-orange to-brand-orange/50 h-full opacity-50 group-hover:opacity-100 transition-opacity rounded-t-lg"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar Cards */}
                <div className="space-y-6">
                    <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
                        <h3 className="font-bold text-lg mb-4">Recent Generations</h3>
                        <div className="space-y-4">
                            {[
                                { title: "AI in Healthcare 2026", status: "Published" },
                                { title: "Best 4K Monitors", status: "Indexing" },
                                { title: "Vegan Diet Guide", status: "Draft" },
                                { title: "Crypto Trends Q3", status: "Published" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-800/30 hover:bg-gray-800/60 transition-colors border border-gray-800 hover:border-gray-700 cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-500">
                                            <FileText size={16} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-white truncate max-w-[120px]">{item.title}</div>
                                            <div className="text-xs text-gray-500">Just now</div>
                                        </div>
                                    </div>
                                    <span className={`text-[10px] px-2 py-1 rounded-full font-bold ${item.status === 'Published' ? 'bg-green-500/10 text-green-500' :
                                        item.status === 'Indexing' ? 'bg-blue-500/10 text-blue-500' :
                                            'bg-gray-500/10 text-gray-500'
                                        }`}>
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-950 text-white font-sans flex overflow-hidden">

            {/* Sidebar */}
            <aside className="w-64 border-r border-gray-800 bg-gray-900/50 backdrop-blur-xl flex flex-col z-20">
                <div className="h-20 flex items-center px-6 border-b border-gray-800 gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        B
                    </div>
                    <span className="font-bold text-xl tracking-tight">BlogWorker</span>
                </div>

                <div className="p-4 flex-1 space-y-2">
                    {[
                        { name: 'Overview', icon: LayoutDashboard },
                        { name: 'Blogs', icon: FileText },
                        { name: 'Real Time Feed', icon: Radio },
                        { name: 'Settings', icon: Settings },
                    ].map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === item.name
                                ? 'bg-brand-orange text-white shadow-lg shadow-orange-500/20'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <item.icon size={20} />
                            <span className="font-medium text-sm">{item.name}</span>
                        </button>
                    ))}
                </div>

                <div className="p-4 border-t border-gray-800">
                    <button
                        onClick={onLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
                    >
                        <LogOut size={20} />
                        <span className="font-medium text-sm">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto relative">
                {/* Background Gradients */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[150px]"></div>
                </div>

                {/* Top Header */}
                <header className="h-20 border-b border-gray-800 flex items-center justify-between px-8 bg-gray-900/50 backdrop-blur-md sticky top-0 z-10 text-white">
                    <h1 className="text-xl font-bold">{activeTab}</h1>

                    <div className="flex items-center gap-6">
                        <button className="relative text-gray-400 hover:text-white transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-gray-900"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-6 border-l border-gray-800">
                            <div className="text-right hidden sm:block">
                                <div className="text-sm font-bold text-white">Alex Johnson</div>
                                <div className="text-xs text-gray-400">Pro Plan</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-gray-800 shadow-md"></div>
                        </div>
                    </div>
                </header>

                <div className="p-8 max-w-7xl mx-auto">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeTab === 'Overview' && <OverviewContent />}
                        {activeTab === 'Blogs' && <BlogsView />}
                        {activeTab === 'Real Time Feed' && <RealTimeFeedView />}
                        {activeTab === 'Settings' && <SettingsView />}
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
