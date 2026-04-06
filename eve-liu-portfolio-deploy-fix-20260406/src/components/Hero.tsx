import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

interface HeroProps {
  onEnter: () => void;
}

export default function Hero({ onEnter }: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Silky smooth transforms linked to scroll
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 1.1]);
  const blur = useTransform(scrollYProgress, [0, 0.7], ["blur(0px)", "blur(20px)"]);

  return (
    <section 
      ref={sectionRef}
      onClick={onEnter}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black px-6 lg:px-20 cursor-pointer"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-10 text-2xl font-light text-gray-800 select-none">+</div>
      <div className="absolute top-1/3 left-1/4 text-xl font-light text-gray-800 select-none">+</div>
      <div className="absolute bottom-1/4 right-1/4 text-2xl font-light text-gray-800 select-none">+</div>
      <div className="absolute bottom-10 right-10 text-xl font-light text-gray-800 select-none">+</div>

      {/* Main Content Container */}
      <motion.div 
        style={{ opacity, scale, filter: blur }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-4 text-sm tracking-[0.2em] text-gray-400 self-start ml-4 lg:ml-0 font-designer"
        >
          | 2021-2026 DESIGN
        </motion.div>

        <div className="relative group cursor-pointer">
          {/* The Teal Blob */}
          <motion.div
            className="absolute -right-20 -top-20 w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-white blur-[80px] opacity-10 mix-blend-screen transition-all duration-700 group-hover:scale-110 group-hover:opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Grayscale to Color Interaction */}
          <motion.div 
            className="relative z-20 flex flex-col items-center filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-designer font-extrabold tracking-tighter text-white uppercase">
              PORTFOLIO
            </h1>
            <div className="flex items-center gap-4 mt-2 self-end">
              <span className="text-sm tracking-[0.5em] text-gray-300 font-designer">作 品 集 |</span>
              <div className="w-24 md:w-32 h-6 md:h-8 bg-white opacity-90" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Designer Info Bottom Left */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-8 lg:left-20"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="space-y-1"
        >
          <div className="text-lg font-designer tracking-widest text-gray-400">DESIGNER |</div>
          <div className="text-xl md:text-2xl font-designer font-bold tracking-tight text-white">
            Eve Liu <span className="text-white font-light ml-2 text-sm md:text-base font-serif">刘雅琪</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Guide Bottom Right */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 right-8 lg:right-20 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="w-[1px] h-12 md:h-16 bg-white/30" />
          <div className="absolute bottom-0 right-0 w-12 md:w-16 h-[1px] bg-white/30" />
          <ArrowDown className="absolute -bottom-6 -right-2 w-4 h-4 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
