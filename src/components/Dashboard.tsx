import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard, FileText, Search, Settings, Bell,
    Plus, ArrowUpRight, CheckCircle2, MoreVertical,
    BarChart, Globe, Zap, LogOut
} from 'lucide-react';

export default function Dashboard({ onLogout }: { onLogout: () => void }) {
    const [activeTab, setActiveTab] = useState('Overview');

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
                        { name: 'My Articles', icon: FileText },
                        { name: 'Keyword Research', icon: Search },
                        { name: 'Analytics', icon: BarChart },
                        { name: 'Sites', icon: Globe },
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

                <div className="p-8 max-w-7xl mx-auto space-y-8">

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
            </main>
        </div>
    );
}
