import { motion } from 'framer-motion';
import { ArrowRight, Thermometer, Wind, Mountain } from 'lucide-react';

const expeditions = [
  {
    title: "The Icebreaker",
    price: "From $12,000",
    desc: "Navigate the frozen archipelago aboard a reinforced luxury vessel. Private suites, gourmet dining, and polar bear encounters.",
    icon: <Wind className="w-5 h-5" />,
    img: "https://images.pexels.com/photos/34969513/pexels-photo-34969513.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    title: "Glacier Trek",
    price: "From $8,500",
    desc: "A guided traverse across the Vatnajökull glacier. Sleep in heated glass igloos under the northern lights.",
    icon: <Mountain className="w-5 h-5" />,
    img: "https://images.pexels.com/photos/18331875/pexels-photo-18331875.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    title: "Deep Freeze Dive",
    price: "From $5,000",
    desc: "Plunge into the sub-zero waters between tectonic plates. The clearest water on Earth, a cathedral of blue.",
    icon: <Thermometer className="w-5 h-5" />,
    img: "https://images.pexels.com/photos/35252461/pexels-photo-35252461.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
  }
];

const Expeditions = () => {
  return (
    <section className="py-32 px-6 bg-[#0f172a] relative overflow-hidden">
      {/* Decorative Shards */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto mb-20 flex flex-col md:flex-row items-end justify-between gap-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-serif mb-4">Curated <br/> <span className="italic text-slate-400">Expeditions</span></h2>
          <p className="text-slate-400 max-w-sm">Choose your path through the frozen wilderness. Each journey is bespoke, designed for the intrepid soul.</p>
        </div>
        <button className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-cyan-300 transition-colors">
          View all packages <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
        {expeditions.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="group relative h-[600px] glass-shard overflow-hidden flex flex-col justify-end p-8"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
               <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-4">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-cyan-200 mb-4 border border-white/10">
                {exp.icon}
              </div>
              <h3 className="text-3xl font-serif italic">{exp.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed border-l border-white/20 pl-4">
                {exp.desc}
              </p>
              <div className="pt-6 flex items-center justify-between border-t border-white/10 mt-6">
                <span className="text-xs uppercase tracking-widest text-slate-400">{exp.price}</span>
                <button className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Frost Effect on Hover */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Expeditions;