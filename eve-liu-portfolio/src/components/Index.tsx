import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import { User, Briefcase, Globe, Play, Camera, FileText, X, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { ALL_PROJECTS, Project } from "../constants";

const categories = [
  { id: "03", title: "ABOUT ME", sub: "我", icon: User, target: "about-me" },
  { id: "04", title: "PRODUCT DESIGN", sub: "产品设计", icon: Briefcase, target: "PRODUCT DESIGN" },
  { id: "06", title: "ACCOUNTS", sub: "账号运营", icon: Globe, target: "ACCOUNTS" },
  { id: "10", title: "VIDEOS", sub: "视频作品", icon: Play, target: "VIDEOS" },
  { id: "18", title: "GRAPHIC DESIGN", sub: "平面作品", icon: Camera, target: "GRAPHIC DESIGN" },
  { id: "19", title: "PHOTOGRAPHY", sub: "摄影作品", icon: Camera, target: "PHOTOGRAPHY" },
  { id: "21", title: "PROPOSAL", sub: "策划案", icon: FileText, target: "PROPOSAL" },
];

export default function Index({ onSelectProject }: { onSelectProject: (id: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<Project | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Rotate the entire circle based on scroll
  const rotation = useTransform(smoothProgress, [0, 1], [0, -180]);

  const filteredProjects = activeCategory 
    ? ALL_PROJECTS.filter(p => p.category === activeCategory)
    : [];

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden px-6 lg:px-20">
        
        {/* Left: Circular Carousel */}
        <div className="relative w-1/2 h-full flex items-center justify-center">
          <motion.div 
            style={{ rotate: rotation }}
            className="relative w-[400px] h-[400px] rounded-full border border-white/5"
          >
            {categories.map((cat, idx) => {
              const angle = (idx / categories.length) * 360;
              const radius = 200;
              
              return (
                <motion.div
                  key={cat.id}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    x: radius * Math.cos((angle * Math.PI) / 180) - 40,
                    y: radius * Math.sin((angle * Math.PI) / 180) - 40,
                  }}
                  className="group cursor-pointer"
                  onClick={() => {
                    if (cat.target === "about-me") {
                      const el = document.getElementById(cat.target);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      setActiveCategory(cat.target);
                    }
                  }}
                >
                  {/* Keep the card upright by counter-rotating */}
                  <motion.div 
                    style={{ rotate: useTransform(rotation, (r) => -r) }}
                    className="flex items-center gap-6"
                  >
                    <div className="relative w-16 h-16 bg-black border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-white transition-all duration-500 overflow-hidden shrink-0">
                      <cat.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <div className="flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                      <span className="text-sm font-designer font-extrabold text-white whitespace-nowrap uppercase tracking-tight">{cat.title}</span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Center Hub */}
          <div className="absolute w-4 h-4 bg-white rounded-full blur-sm shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
        </div>

        {/* Right: Text Description */}
        <div className="hidden lg:block w-1/2 pl-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="text-[10px] tracking-[0.5em] text-white/60 uppercase font-bold font-designer">Directory</div>
            <h2 className="text-6xl font-designer font-extrabold text-white leading-tight uppercase tracking-tighter">
              Explore the <br />
              <span className="italic font-serif normal-case tracking-normal">Creative Journey</span>
            </h2>
            <div className="flex items-center gap-4 text-[10px] text-gray-600 font-designer font-bold tracking-widest">
              <div className="w-12 h-[1px] bg-gray-800" />
              SCROLL TO ROTATE
            </div>
          </motion.div>
        </div>

      </div>

      {/* Full-screen Category Modal */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl p-12 lg:p-24 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-20">
                <div>
                  <div className="text-[10px] tracking-[0.5em] text-white/40 font-bold uppercase mb-2 font-designer">Category</div>
                  <h3 className="text-4xl font-designer font-extrabold text-white uppercase tracking-tighter">{activeCategory}</h3>
                </div>
                <button 
                  onClick={() => setActiveCategory(null)}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProjectForModal(project)}
                  >
                    <div className="scale-90 origin-top-left">
                      <div className="relative aspect-[4/3] overflow-hidden bg-black mb-6">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h4 className="text-xl font-designer font-extrabold text-white mb-2 uppercase tracking-tight">{project.title}</h4>
                      <p className="text-sm text-gray-500 mb-6 line-clamp-2">{project.description}</p>
                      <div className="flex items-center gap-3 text-[10px] tracking-widest uppercase text-white/60 hover:text-white transition-colors group/btn font-designer font-bold">
                        View Details
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen Project Info Modal */}
      <AnimatePresence>
        {selectedProjectForModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-2xl p-12 lg:p-24 flex items-center justify-center"
          >
            <div className="max-w-4xl w-full">
              <div className="flex justify-between items-start mb-12">
                <div className="space-y-4">
                  <div className="text-[10px] tracking-[0.5em] text-white/40 font-bold uppercase font-designer">{selectedProjectForModal.category}</div>
                  <h3 className="text-5xl lg:text-7xl font-designer font-extrabold text-white uppercase tracking-tighter leading-none">
                    {selectedProjectForModal.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedProjectForModal(null)}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="aspect-[4/3] overflow-hidden bg-black flex items-center justify-center">
                  <img 
                    src={selectedProjectForModal.image} 
                    alt={selectedProjectForModal.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-8">
                  <p className="text-xl text-gray-400 font-serif leading-relaxed">
                    {selectedProjectForModal.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 text-[10px] tracking-widest uppercase text-gray-600 font-designer font-bold">
                    <div>
                      <div className="mb-2 text-white/20">Role</div>
                      <div className="space-y-1">
                        {selectedProjectForModal.roles?.map(role => <div key={role}>{role}</div>) || <div>Designer</div>}
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 text-white/20">Year</div>
                      <div>{selectedProjectForModal.year}</div>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      onSelectProject(selectedProjectForModal.id);
                      setSelectedProjectForModal(null);
                      setActiveCategory(null);
                    }}
                    className="group flex items-center gap-6 bg-white text-black px-8 py-4 rounded-full font-designer font-extrabold uppercase tracking-widest hover:bg-[#2a6f86] hover:text-white transition-all duration-500"
                  >
                    View Live Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
