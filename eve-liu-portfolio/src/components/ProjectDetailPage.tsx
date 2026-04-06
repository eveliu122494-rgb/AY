import { motion } from "motion/react";
import { useRef, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { ALL_PROJECTS } from "../constants";

interface ProjectDetailProps {
  id: string;
  onBack: () => void;
}

export default function ProjectDetailPage({ id, onBack }: ProjectDetailProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const project = ALL_PROJECTS.find(p => p.id === id);
  const galleryItems = project?.gallery || [];

  // Horizontal scroll logic with smooth inertia
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let targetScroll = el.scrollLeft;
    let currentScroll = el.scrollLeft;
    let isScrolling = false;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetScroll += e.deltaY * 1.5;
      targetScroll = Math.max(0, Math.min(targetScroll, el.scrollWidth - el.clientWidth));
      
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(updateScroll);
      }
    };

    const updateScroll = () => {
      const diff = targetScroll - currentScroll;
      currentScroll += diff * 0.1; // Smoothness factor
      
      if (el) el.scrollLeft = currentScroll;

      if (Math.abs(diff) > 0.5) {
        requestAnimationFrame(updateScroll);
      } else {
        isScrolling = false;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black flex flex-col lg:flex-row overflow-hidden"
    >
      {/* Left: Project Info */}
      <div className="w-full lg:w-[520px] h-full bg-black p-12 lg:p-16 lg:pr-12 flex flex-col justify-between relative z-10 shrink-0">
        <button 
          onClick={onBack}
          className="flex items-center gap-4 text-gray-500 hover:text-white transition-colors group mb-12 lg:mb-0"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
          <span className="text-[9px] tracking-[0.3em] uppercase font-designer font-bold">Back to Portfolio</span>
        </button>

        <div className="space-y-10">
          <div className="space-y-2">
            <div className="text-[10px] tracking-[0.5em] text-white/40 font-bold uppercase font-designer">{project.category}</div>
            <h1 className="text-4xl font-designer font-extrabold text-white leading-tight uppercase tracking-tighter">{project.title}</h1>
          </div>
          
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed font-serif">
            <div className="space-y-2.5">
              {(project.detailDescription || project.description).split('\n').map((line, i) => {
                const parts = line.split('|');
                if (parts.length > 1) {
                  const label = parts[0].trim();
                  const content = parts.slice(1).join('|').trim();
                  return (
                    <div key={i} className="flex flex-col gap-0.5">
                      <span className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-designer font-bold">{label}</span>
                      <p className="text-[12px] text-white/80 leading-relaxed">{content}</p>
                    </div>
                  );
                }
                return <p key={i} className="text-[12px] text-white/80 leading-relaxed">{line}</p>;
              })}
            </div>
            
            {project.awards && (
              <div className="pt-2 space-y-1.5">
                <div className="text-[9px] text-white/20 uppercase tracking-[0.3em] font-designer font-bold">Recognition / 获奖情况</div>
                <div className="space-y-1">
                  {project.awards.map(award => (
                    <p key={award} className="text-[10px] text-white/60 italic border-l border-white/10 pl-3">{award}</p>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-3 grid grid-cols-2 gap-8">
              <div className="space-y-1.5">
                <div className="text-[9px] text-white/20 uppercase tracking-[0.3em] font-designer font-bold">Role / 职责</div>
                <div className="text-[10px] text-white/60 space-y-0.5">
                  {project.roles?.map(role => <div key={role}>{role}</div>) || <div>Designer</div>}
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="text-[9px] text-white/20 uppercase tracking-[0.3em] font-designer font-bold">Year / 时间</div>
                <div className="text-[10px] text-white/60">{project.year}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-[9px] text-gray-700 font-designer font-bold tracking-widest">
          <div className="w-8 h-[1px] bg-gray-900" />
          SCROLL TO EXPLORE
        </div>
      </div>

      {/* Right: Staggered Gallery or Video Player */}
      <div 
        ref={scrollRef}
        className={`flex-1 h-full overflow-y-hidden scrollbar-hide bg-black ${project.videoUrl || galleryItems.length === 1 ? 'flex items-center justify-center overflow-x-hidden' : 'overflow-x-auto'}`}
      >
        {project.videoUrl ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-5xl aspect-video px-8 lg:px-16"
          >
            <div className="w-full h-full bg-zinc-900/50 relative group overflow-hidden border border-white/5">
              <iframe
                src={project.videoUrl}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="autoplay; encrypted-media"
                title={project.title}
              />
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20" />
            </div>
          </motion.div>
        ) : galleryItems.length === 1 ? (
          <div className="h-full w-full flex items-center justify-center p-12 lg:p-24 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img 
                src={galleryItems[0].image} 
                alt={project.title} 
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out shadow-2xl shadow-white/5"
                referrerPolicy="no-referrer"
              />
              {/* Decorative frame for single image */}
              <div className="absolute -inset-4 border border-white/5 pointer-events-none" />
              <div className="absolute -inset-8 border border-white/5 pointer-events-none opacity-50" />
            </motion.div>
          </div>
        ) : (
          <div className="h-full flex items-center gap-8 lg:gap-12 px-24 lg:px-48 min-w-max">
            {galleryItems.map((item, idx) => {
              const scale = item.scale || 1;
              const isLarge = scale > 1;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 100, scale: scale * 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: scale }}
                  transition={{ delay: idx * 0.1 + 0.3, duration: 0.8 }}
                  style={{ 
                    translateY: item.offset,
                    // Add margin to compensate for scale and maintain spacing
                    marginLeft: isLarge ? `calc(204px * ${(scale - 1) / 2})` : undefined,
                    marginRight: isLarge ? `calc(204px * ${(scale - 1) / 2})` : undefined,
                  }}
                  className="w-[132px] lg:w-[204px] group shrink-0"
                >
                  <div className="relative mb-6 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-auto filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {(item.title || item.sub) && (
                    <motion.div 
                      style={{ scale: 1 / scale }}
                      className="space-y-2 px-1 origin-top-left"
                    >
                      {item.title && <h4 className="text-sm font-designer font-extrabold text-white uppercase tracking-tight group-hover:text-[#2a6f86] transition-colors">{item.title}</h4>}
                      {item.sub && <p className="text-[8px] text-gray-500 tracking-[0.2em] uppercase font-designer font-bold">{item.sub}</p>}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
            
            {/* End Spacer */}
            <div className="w-[240px]" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
