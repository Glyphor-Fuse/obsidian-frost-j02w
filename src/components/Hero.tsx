import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video/Image simulation */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/20 to-[#020617] z-10" />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="https://images.pexels.com/photos/28729594/pexels-photo-28729594.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
          alt="Arctic Landscape" 
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs tracking-[0.3em] uppercase text-cyan-100">
            Latitude 78° N
          </span>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] text-white mix-blend-overlay opacity-90">
            FROZEN <br />
            <span className="italic font-light">LUXURY</span>
          </h1>

          <p className="max-w-md mt-8 text-sm md:text-base leading-relaxed text-slate-300 tracking-wide font-light">
            An expedition into the silence. Where time freezes and the aurora breathes. Experience the ethereal north.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50">Begin Descent</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64, 64] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 w-full h-1/2 bg-white blur-[1px]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;