import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  { src: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/4206102/pexels-photo-4206102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Detailed close-up of crystalline ice formations in wintery Iceland."
    width="5102"
    height="5102"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/close-up-of-ice-4206102/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Valdemaras D. on Pexels
    </a>
  </div>
</div>", alt: "Glacial Texture", speed: 0.1 },
  { src: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/10987653/pexels-photo-10987653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="A woman in a blue dress walking alone on a snow-covered road during winter, creating a serene scene."
    width="3780"
    height="5670"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/woman-holding-a-bag-while-walking-on-snow-covered-ground-10987653/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Danila Chertov on Pexels
    </a>
  </div>
</div>", alt: "Expedition", speed: 0.3 },
  { src: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/1933317/pexels-photo-1933317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="Captivating view of the Northern Lights over snow-covered Lofoten Islands at night."
    width="4928"
    height="3280"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/aurora-borealis-photo-1933317/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by stein egil liland on Pexels
    </a>
  </div>
</div>", alt: "Aurora", speed: 0.2 },
  { src: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/60050/huskies-husky-blue-eye-dog-60050.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="Four Siberian Huskies running in a winter wonderland, perfect for adventure themes."
    width="4839"
    height="3369"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/huskeys-driving-sled-through-white-snow-60050/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Pixabay on Pexels
    </a>
  </div>
</div>", alt: "Sledding", speed: 0.15 },
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