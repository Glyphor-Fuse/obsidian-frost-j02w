import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Compass, Wind, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-8'
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mix-blend-difference">
            <Compass className="w-6 h-6 text-white" />
            <span className="text-xl font-serif font-semibold tracking-widest text-white">NORD</span>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-12 px-8 py-3 rounded-full transition-all duration-500 ${isScrolled ? 'bg-white/5 backdrop-blur-md border border-white/10' : ''}`}>
            {['Expeditions', 'The Lodge', 'Journal', 'Climate'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-sm uppercase tracking-widest text-slate-300 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-200 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden md:block text-xs font-bold uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Book Passage
            </button>
            <button onClick={() => setIsOpen(true)} className="md:hidden text-white">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#020617]/95 backdrop-blur-xl flex items-center justify-center"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white/50 hover:text-white">
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {['Expeditions', 'The Lodge', 'Journal', 'Climate', 'Inquire'].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  href="#"
                  className="text-4xl font-serif text-white hover:text-cyan-200 transition-colors italic"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;