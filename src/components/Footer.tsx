import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-12 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          
          <div className="space-y-8">
            <h2 className="text-3xl font-serif tracking-wide">NORD</h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Pioneering ultra-luxury expeditions into the world's most remote frozen frontiers since 1982.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Destinations</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              {['Svalbard', 'Antarctica', 'Greenland', 'Iceland Highlands', 'Canadian Arctic'].map(item => (
                <li key={item} className="hover:text-cyan-200 cursor-pointer transition-colors w-max">{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Experience</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              {['Private Jets', 'Ice Breakers', 'Glass Igloos', 'Culinary Arts', 'Wellness'].map(item => (
                <li key={item} className="hover:text-cyan-200 cursor-pointer transition-colors w-max">{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Newsletter</h4>
            <div className="flex flex-col gap-4">
               <p className="text-sm text-slate-400">Receive invites to our seasonal launches.</p>
               <div className="flex border-b border-white/20 pb-2">
                 <input type="email" placeholder="Email Address" className="bg-transparent outline-none w-full text-white placeholder:text-slate-600" />
                 <button className="text-white hover:text-cyan-200"><ArrowUpRight className="w-5 h-5" /></button>
               </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
           <div className="text-[10px] uppercase tracking-widest text-slate-600">
             © 2024 NORD Expeditions. All rights reserved.
           </div>
           
           <div className="flex items-center gap-6">
             <Instagram className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
             <Twitter className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
             <Facebook className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
           </div>
        </div>
      </div>
      
      {/* Massive Background Text */}
      <div className="w-full overflow-hidden mt-12 opacity-5 pointer-events-none select-none">
        <motion.h1 
          initial={{ x: 0 }}
          animate={{ x: -1000 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="text-[15vw] leading-none font-serif whitespace-nowrap text-white"
        >
          INTO THE GREAT WHITE SILENCE — NORD EXPEDITIONS
        </motion.h1>
      </div>
    </footer>
  );
};

export default Footer;