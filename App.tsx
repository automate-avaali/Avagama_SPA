
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import Demo from './pages/Demo';
import GuidedTour from './pages/GuidedTour';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/guided-tour" element={<GuidedTour />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/contact" element={<Support />} />
          </Routes>
        </main>
        
        <footer className="bg-white border-t border-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <div className="flex items-start">
                <img
                  src="/Avagama.AI_Logo.png"
                  alt="Avagama AI"
                  className="h-6 object-contain"
                />
                <span className="text-[8px] text-gray-400 relative -top-1 ml-[2px]">
                  TM
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 font-medium">© 2026 Avagama.ai Powered by Avaali. All Rights Reserved.</p>
            <div className="flex gap-8">
              <Link to="/privacy" className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
