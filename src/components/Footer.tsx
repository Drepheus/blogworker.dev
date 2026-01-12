import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-xl font-bold text-gray-900">BlogWorker</span>
                    <p className="text-sm text-gray-500 mt-2">© 2026 BlogWorker Inc. All rights reserved.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Privacy</a>
                    <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Terms</a>
                    <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Twitter</a>
                    <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
