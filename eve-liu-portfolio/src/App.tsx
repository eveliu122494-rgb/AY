import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import Index from "./components/Index";
import About from "./components/About";
import Directory from "./components/Directory";
import PortfolioGrid from "./components/PortfolioGrid";
import ProjectDetailPage from "./components/ProjectDetailPage";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    setShowPortfolio(true);
    setTimeout(() => {
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-[#2a6f86] selection:text-white">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProjectId && (
          <ProjectDetailPage 
            id={selectedProjectId} 
            onBack={() => setSelectedProjectId(null)} 
          />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Hero onEnter={() => {
            document.getElementById("hello-section")?.scrollIntoView({ behavior: "smooth" });
          }} />
          
          {/* HELLO Section (Page 2) */}
          <section id="hello-section" className="h-screen flex items-center justify-center bg-black relative z-10">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className="text-4xl md:text-6xl font-designer font-extrabold tracking-[0.5em] text-white text-center uppercase"
            >
              HELLO!
            </motion.h2>
          </section>

          <Index onSelectProject={(id) => setSelectedProjectId(id)} />
          <About />

          <Directory onCategorySelect={handleCategorySelect} />

          {/* Filtering Section (Secondary View) */}
          <AnimatePresence>
            {showPortfolio && (
              <motion.div 
                id="portfolio" 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="border-t border-white/5 pt-20"
              >
                <PortfolioGrid 
                  activeFilter={activeCategory}
                  onFilterChange={setActiveCategory}
                  onSelectProject={(id) => setSelectedProjectId(id)} 
                />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* End Page (Page 24) */}
          <section className="h-screen flex flex-col items-center justify-center bg-black relative">
            <div className="text-center space-y-4">
              <div className="text-sm tracking-[0.3em] text-gray-500 font-designer">2021-2026</div>
              <h2 className="text-4xl md:text-6xl font-designer font-extrabold text-white uppercase tracking-tighter">DESIGN</h2>
              <h2 className="text-4xl md:text-6xl font-designer font-extrabold text-white italic uppercase tracking-tighter">PORTFOLIO</h2>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#2a6f86] rounded-full blur-[100px] opacity-20 -z-10" />
          </section>

          {/* Footer */}
          <footer className="py-20 px-6 lg:px-20 bg-black text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="text-center md:text-left">
                <div className="text-xl md:text-2xl font-designer font-bold tracking-tight text-white mb-2">
                  Eve Liu <span className="text-white font-light ml-2 text-sm md:text-base font-serif">刘雅琪</span>
                </div>
                <div className="text-xs tracking-[0.3em] text-gray-500 uppercase font-designer">2021-2026 DESIGN PORTFOLIO</div>
              </div>
              <div className="flex gap-12 text-sm tracking-widest text-gray-400 uppercase">
                <motion.div className="relative group cursor-default" whileHover="hover" initial="initial">
                  <span className="group-hover:text-white transition-colors">WeChat</span>
                  <motion.span 
                    variants={{
                      initial: { opacity: 0, y: -5, scale: 0.9 },
                      hover: { opacity: 1, y: 0, scale: 1.05 }
                    }}
                    className="absolute top-full left-0 mt-2 text-[10px] text-white font-mono lowercase tracking-normal whitespace-nowrap"
                  >
                    Xay-1224
                  </motion.span>
                </motion.div>
                
                <motion.div className="relative group cursor-default" whileHover="hover" initial="initial">
                  <span className="group-hover:text-white transition-colors">Email</span>
                  <motion.span 
                    variants={{
                      initial: { opacity: 0, y: -5, scale: 0.9 },
                      hover: { opacity: 1, y: 0, scale: 1.05 }
                    }}
                    className="absolute top-full left-0 mt-2 text-[10px] text-white font-mono lowercase tracking-normal whitespace-nowrap"
                  >
                    eveliu1224@163.com
                  </motion.span>
                </motion.div>
              </div>
              <div className="text-[10px] text-gray-700 font-mono">
                © 2026 ALL RIGHTS RESERVED
              </div>
            </div>
          </footer>
        </motion.main>
      )}
    </div>
  );
}
