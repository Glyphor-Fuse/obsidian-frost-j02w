import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  { src: "https://images.pexels.com/photos/4206102/pexels-photo-4206102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "Glacial Texture", speed: 0.1 },
  { src: "https://images.pexels.com/photos/10987653/pexels-photo-10987653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800", alt: "Expedition", speed: 0.3 },
  { src: "https://images.pexels.com/photos/1933317/pexels-photo-1933317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", alt: "Aurora", speed: 0.2 },
  { src: "https://images.pexels.com/photos/60050/huskies-husky-blue-eye-dog-60050.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", alt: "Sledding", speed: 0.15 },
];

const GlacierGallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -150]);

  return (
    <section ref={containerRef} className="py-32 bg-arctic-950 overflow-hidden">
      <div className="container mx-auto px-6 mb-24">
         <motion.h2 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-5xl md:text-7xl font-serif text-center"
         >
           Visceral <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-indigo-400 italic">Landscapes</span>
         </motion.h2>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 h-[120vh]">
        {/* Column 1 */}
        <motion.div style={{ y: y1 }} className="md:col-span-4 flex flex-col gap-8 pt-20">
           <div className="relative aspect-[3/4] overflow-hidden group">
             <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
           </div>
           <div className="text-right p-4 border-r border-white/20">
             <h3 className="text-xl font-serif italic">Ice Formations</h3>
             <p className="text-xs text-slate-500 uppercase tracking-widest mt-2">Macro Photography</p>
           </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: y2 }} className="md:col-span-5 flex flex-col gap-8">
           <div className="relative aspect-[16/9] overflow-hidden group">
             <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100" />
           </div>
           <div className="relative aspect-[4/5] overflow-hidden group mt-12 w-3/4 mx-auto">
             <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
           </div>
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: y3 }} className="md:col-span-3 flex flex-col gap-8 pt-48">
           <div className="text-left p-4 border-l border-white/20">
             <h3 className="text-xl font-serif italic">The Aurora</h3>
             <p className="text-xs text-slate-500 uppercase tracking-widest mt-2">Natural Phenomena</p>
           </div>
           <div className="relative aspect-[3/4] overflow-hidden group">
             <img src={images[3].src} alt={images[3].alt} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700" />
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlacierGallery;