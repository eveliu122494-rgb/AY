import { motion } from "motion/react";

export default function SectionTitle({ title, sub, id }: { title: string; sub: string; id?: string }) {
  return (
    <section id={id} className="h-[60vh] flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-[15vw] font-serif text-white/5 uppercase tracking-widest select-none whitespace-nowrap">
          {title}
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-4 tracking-tight">
          {title}.
        </h2>
        <div className="text-sm tracking-[0.5em] text-gray-500 uppercase">
          {sub} |
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-gray-800">+</div>
      <div className="absolute bottom-10 right-10 text-gray-800">+</div>
    </section>
  );
}
