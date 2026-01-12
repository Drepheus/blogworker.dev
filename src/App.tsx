import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import LiveFeed from './components/LiveFeed';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-orange-100 selection:text-orange-900">
            <Navbar />
            <main>
                <Hero />
                <SocialProof />
                <LiveFeed />
                <Features />
                <HowItWorks />
                <Testimonials />
                <Pricing />
            </main>
            <Footer />
        </div>
    );
}

export default App;
