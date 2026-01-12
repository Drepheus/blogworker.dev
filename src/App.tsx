import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import LiveFeed from './components/LiveFeed';
import ProductShowcase from './components/ProductShowcase';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import Dashboard from './components/Dashboard';

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsLoginOpen(false);
        setIsAuthenticated(true);
        window.scrollTo(0, 0); // Scroll to top for dashboard
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        window.scrollTo(0, 0);
    };

    if (isAuthenticated) {
        return <Dashboard onLogout={handleLogout} />;
    }

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-orange-100 selection:text-orange-900">
            <Navbar onLoginClick={() => setIsLoginOpen(true)} />
            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onLogin={handleLogin}
            />
            <main>
                <Hero />
                <ProductShowcase />
                <SocialProof />
                <LiveFeed />
                <Features />
                <HowItWorks />
                <Testimonials />
                <Pricing />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
}

export default App;
