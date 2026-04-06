import { motion } from "motion/react";
import { ALL_PROJECTS } from "../constants";
import { Play } from "lucide-react";

export default function ProjectSection({ category }: { category: string }) {
  const projects = ALL_PROJECTS.filter(p => p.category === category);

  if (projects.length === 0) return null;

  return (
    <section className="py-20 bg-black px-6 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-32">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
          >
            {/* Project Image */}
            <div className="w-full lg:w-3/5 relative group">
              <div className="aspect-video overflow-hidden bg-black rounded-sm relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                {project.category === "VIDEOS" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                )}
              </div>
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-white/5 -z-10 group-hover:inset-0 transition-all duration-700" />
            </div>

            {/* Project Info */}
            <div className="w-full lg:w-2/5 space-y-6">
              <div className="flex justify-between items-center">
                <div className="text-[10px] tracking-[0.3em] text-white/40 font-bold uppercase">
                  {project.category}
                </div>
                <div className="text-xs font-mono text-gray-700">{project.year}</div>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-3 py-1 border border-white/10 text-gray-500 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
