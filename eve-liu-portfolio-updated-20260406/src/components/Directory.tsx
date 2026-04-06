import { motion } from "motion/react";
import { CATEGORIES } from "../constants";

interface DirectoryProps {
  onCategorySelect: (category: string) => void;
}

const categoryTranslations: Record<string, string> = {
  "PRODUCT DESIGN": "产品设计",
  "ACCOUNTS": "账号运营",
  "VIDEOS": "视频作品",
  "GRAPHIC DESIGN": "平面设计",
  "PHOTOGRAPHY": "摄影作品",
  "PROPOSAL": "策划案"
};

export default function Directory({ onCategorySelect }: DirectoryProps) {
  // Exclude "ABOUT ME" (which is not in CATEGORIES but is in Index)
  const directoryCategories = CATEGORIES.filter(cat => cat !== "ALL");

  return (
    <section className="py-40 bg-black px-6 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-[1px] bg-white/10" />
          <div className="text-[8px] tracking-[0.6em] text-white/30 font-bold uppercase font-designer">PORTFOLIO / 作品集</div>
        </div>
        
        <div className="grid gap-2">
          {directoryCategories.map((cat, idx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer py-6 border-b border-white/5 flex items-center justify-between"
              onClick={() => onCategorySelect(cat)}
            >
              <div className="flex items-baseline gap-12">
                <span className="text-[8px] font-mono text-gray-800 group-hover:text-white transition-colors">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <div className="flex items-baseline gap-8">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-designer font-extrabold tracking-tighter text-white/20 group-hover:text-white transition-all duration-700 group-hover:translate-x-4 scale-y-[0.85] origin-left uppercase">
                    {cat}
                  </h3>
                  <span className="text-[7px] md:text-[9px] lg:text-[11px] font-serif font-bold text-white/5 group-hover:text-white/40 transition-all duration-700 group-hover:translate-x-4">
                    {categoryTranslations[cat]}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-10 group-hover:translate-x-0">
                <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase font-bold">Explore Category</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
