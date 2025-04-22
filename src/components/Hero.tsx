import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-400"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}

            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          {/* Avatar Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-400 glow relative">
              <img
                src="/image.png"
                alt="Profile Picture"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-purple-500 opacity-50 animate-pulse"></div>
            <div className="absolute -inset-2 rounded-full border border-cyan-400 opacity-30 animate-ping"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-left max-w-lg"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 glow-text"
            >
              Ireoluwacodes
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-xl md:text-2xl font-medium mb-6 text-cyan-300">
                Fullstack Developer & Cloud Enthusiast
              </h2>
              <p className="text-sm md:text-lg text-gray-300 mb-8">
                I love building cool stuff on the web—whether it's a sleek interface or a solid backend that just works. Lately, I've been diving into cloud tools and finding smarter ways to ship and scale projects.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full inline-block transition-all duration-300 shadow-lg hover:shadow-xl glow"
                >
                  Get In Touch
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
