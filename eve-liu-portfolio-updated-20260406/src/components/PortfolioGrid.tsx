import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, ExternalLink, Play } from "lucide-react";
import { ALL_PROJECTS, Project, CATEGORIES } from "../constants";

export default function PortfolioGrid({ 
  onSelectProject, 
  activeFilter = "ALL", 
  onFilterChange 
}: { 
  onSelectProject: (id: string) => void;
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
}) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === "ALL" 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-32 bg-black px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <h2 className="text-5xl font-designer font-extrabold text-white mb-4 uppercase tracking-tighter">Selected Works</h2>
            <div className="text-sm tracking-widest text-gray-600 uppercase font-designer">2021 — 2026</div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => onFilterChange?.(cat)}
                className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 font-designer ${
                  activeFilter === cat 
                    ? "bg-white text-black border-white" 
                    : "text-gray-500 border-white/10 hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="scale-90 origin-top-left">
                  <div className="relative aspect-[4/3] overflow-hidden bg-black mb-8">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                      referrerPolicy="no-referrer"
                    />
                    {project.category === "VIDEOS" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                          <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-[10px] tracking-[0.2em] text-white/40 font-bold mb-2 uppercase">
                        {project.category}
                      </div>
                      <h3 className="text-2xl font-serif text-white group-hover:text-white/80 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="text-xs font-mono text-gray-600">{project.year}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-screen Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-6 lg:p-20"
          >
            <motion.button
              onClick={() => setSelectedProject(null)}
              className="absolute top-10 right-10 text-white/50 hover:text-white"
            >
              <X className="w-8 h-8" />
            </motion.button>

            <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="aspect-video overflow-hidden rounded-lg flex items-center justify-center bg-black"
              >
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-8"
              >
                <div className="text-sm tracking-[0.3em] text-white/40 font-bold uppercase">{selectedProject.category}</div>
                <h2 className="text-5xl font-serif text-white">{selectedProject.title}</h2>
                <p className="text-gray-400 leading-relaxed text-lg">{selectedProject.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 border border-white/10 text-gray-500 text-xs uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onSelectProject(selectedProject.id);
                    setSelectedProject(null);
                  }}
                  className="flex items-center gap-4 px-8 py-4 bg-white text-black font-bold tracking-widest uppercase text-sm rounded-sm hover:bg-gray-200 transition-colors"
                >
                  View Live Project
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
