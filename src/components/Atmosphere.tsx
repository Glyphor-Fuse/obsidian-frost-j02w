import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const Atmosphere = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  
  // Interactive "Temperature" Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const glowX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  return (
    <section 
      ref={containerRef}
      className="relative py-32 md:py-48 px-6 bg-arctic-950 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Interactive Background Glow */}
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowX.get() * 100}% ${glowY.get() * 100}%, rgba(165, 243, 252, 0.15), transparent 40%)`
        }}
      />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            The Silence <br/>
            <span className="text-white/40 italic">of the North</span>
          </h2>
          <div className="space-y-6 text-slate-400 font-light leading-relaxed">
            <p>
              Far beyond the Arctic Circle, where the sun kisses the horizon but rarely rises, lies a sanctuary of eternal ice. Here, luxury is not measured in opulence, but in isolation.
            </p>
            <p>
              Our lodges are architectural marvels, anchored into the permafrost, offering a front-row seat to the planet's most dramatic light show.
            </p>
          </div>
          
          <div className="flex gap-12 pt-8">
            <div>
              <span className="block text-4xl font-serif text-white">-24°C</span>
              <span className="text-xs uppercase tracking-widest text-slate-500">Avg. Temp</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-white">04h</span>
              <span className="text-xs uppercase tracking-widest text-slate-500">Daylight</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-white">100%</span>
              <span className="text-xs uppercase tracking-widest text-slate-500">Silence</span>
            </div>
          </div>
        </motion.div>

        <div className="relative h-[600px] w-full">
           <div className="absolute top-10 right-10 w-full h-full border border-white/10 z-0" />
           <motion.div 
             className="relative w-full h-full overflow-hidden z-10"
             initial={{ clipPath: 'inset(100% 0 0 0)' }}
             whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           >
              <img 
                src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/35582288/pexels-photo-35582288.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="modern minimalist cabin snow blizzard dark"
    width="2560"
    height="3413"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/snow-covered-cabin-in-karpacz-poland-35582288/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Kostiantyn Klymovets on Pexels
    </a>
  </div>
</div>" 
                alt="Arctic Cabin" 
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arctic-950/80 to-transparent" />
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Atmosphere;