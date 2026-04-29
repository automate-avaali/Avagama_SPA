
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const Logo = () => (
    <div className="flex items-center">
      <img
        src="/Avagama.AI_Logo.jpg"
        alt="Avagama AI"
        className="h-10 object-contain"
      />
      <span className="text-[8px] text-gray-400 relative -top-3 ml-[2px]">
        TM
      </span>
    </div>
  );

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Help & Support', path: '/support' },
    { name: 'Demo', path: '/demo' },
    { name: 'Guided Tour', path: '/guided-tour' },
  ];

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-50 shadow-sm">
        <div className="max-w-[1920px] mx-auto px-4 md:px-10 py-4 md:py-5 flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center transition-opacity hover:opacity-80 relative z-[120] shrink-0">
            <Logo />
          </Link>

          {/* Center: Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-wide transition-colors uppercase ${
                  location.pathname === link.path ? 'text-[#a26da8]' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Right: Actions */}
          <div className="hidden lg:flex items-center gap-4 shrink-0 relative z-[120]">
            <a 
              href="http://13.235.19.43:3000/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-7 py-3 rounded-2xl text-xs font-black tracking-widest uppercase hover:bg-black transition-all shadow-xl shadow-gray-100"
            >
              Get Started
            </a>
          </div>

          {/* Hamburger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center bg-purple-50/50 rounded-xl text-gray-900 transition-all active:scale-95 relative z-[120]"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="w-full h-0.5 bg-gray-800 rounded-full origin-center"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                className="w-3/4 h-0.5 bg-gray-800 rounded-full"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="w-full h-0.5 bg-gray-800 rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 z-[160] bg-white lg:hidden flex flex-col"
          >
            {/* Mobile Header */}
            <div className="px-6 py-5 flex items-center justify-between border-b border-gray-50 bg-white sticky top-0">
              <Logo />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-11 h-11 flex items-center justify-center bg-gray-50 rounded-xl text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col">
              <motion.div 
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
                className="flex flex-col gap-8"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 20 }
                    }}
                  >
                    <Link 
                      to={link.path}
                      className={`text-3xl font-black uppercase tracking-tighter transition-colors ${
                        location.pathname === link.path ? 'text-[#a26da8]' : 'text-gray-900 hover:text-[#a26da8]'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12"
              >
                <a 
                  href="http://13.235.19.43:3000/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-900 text-white py-6 rounded-[28px] text-center font-black uppercase tracking-widest shadow-xl shadow-gray-100 hover:bg-black transition-all"
                >
                  Get Started
                </a>
              </motion.div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-[#a26da8]/5 to-[#6fcbbd]/5 rounded-full -mr-32 -mb-32 blur-3xl pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
