import { motion } from 'framer-motion';

const GlyphorBadge = () => {
  return (
    <motion.a
      href="https://glyphor.com"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      className="group flex items-center gap-2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-2xl hover:border-white/30 transition-all cursor-pointer"
    >
      <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 animate-pulse" />
      <span className="text-[10px] font-medium tracking-widest uppercase text-slate-300 group-hover:text-white transition-colors">
        Made with Glyphor
      </span>
    </motion.a>
  );
};

export default GlyphorBadge;