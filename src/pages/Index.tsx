import { useEffect } from 'react';
import Hero from '../components/Hero';
import GlacierGallery from '../components/GlacierGallery';
import Atmosphere from '../components/Atmosphere';
import Expeditions from '../components/Expeditions';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative w-full overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"
        />
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Atmosphere />
        <GlacierGallery />
        <Expeditions />
        <Footer />
      </div>
    </main>
  );
};

export default Index;