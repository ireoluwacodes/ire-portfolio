import type React from "react";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Palette,
  Cpu,
  Globe,
  Layers,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  level: number;
  category: string;
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills: Skill[] = [
    {
      name: "React.js",
      icon: <Code2 size={24} />,
      color: "bg-cyan-500",
      level: 90,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: <Code2 size={24} />,
      color: "bg-yellow-500",
      level: 95,
      category: "Language",
    },
    {
      name: "Nest.js",
      icon: <Server size={24} />,
      color: "bg-red-500",
      level: 85,
      category: "Backend",
    },
    {
      name: "FastAPI",
      icon: <Server size={24} />,
      color: "bg-green-500",
      level: 80,
      category: "Backend",
    },
    {
      name: "Flask",
      icon: <Server size={24} />,
      color: "bg-gray-500",
      level: 85,
      category: "Backend",
    },
    {
      name: "Python",
      icon: <Code2 size={24} />,
      color: "bg-blue-700",
      level: 90,
      category: "Language",
    },
    {
      name: "Tailwind",
      icon: <Palette size={24} />,
      color: "bg-cyan-500",
      level: 95,
      category: "Frontend",
    },
    {
      name: "React Native",
      icon: <Smartphone size={24} />,
      color: "bg-purple-500",
      level: 80,
      category: "Mobile",
    },
    {
      name: "SQL",
      icon: <Database size={24} />,
      color: "bg-orange-500",
      level: 85,
      category: "Database",
    },
    {
      name: "TypeScript",
      icon: <Code2 size={24} />,
      color: "bg-blue-600",
      level: 90,
      category: "Language",
    },
    {
      name: "Docker",
      icon: <Cpu size={24} />,
      color: "bg-sky-600",
      level: 75,
      category: "DevOps",
    },
    {
      name: "AWS",
      icon: <Globe size={24} />,
      color: "bg-amber-600",
      level: 70,
      category: "Cloud",
    },
  ];

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white glow-text">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My expertise spans across various technologies and frameworks in
            both frontend and backend development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-slate-700"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center text-cyan-300">
                <Layers className="mr-2 text-cyan-400" />
                {category}
              </h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div
                            className={`p-2 rounded-lg ${skill.color} text-white mr-3`}
                          >
                            {skill.icon}
                          </div>
                          <span className="font-medium text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <motion.div
                        className="h-2 bg-slate-700 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        animate={inView ? { width: "100%" } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      >
                        <motion.div
                          className={`h-full ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: `${skill.level}%` } : { width: 0 }
                          }
                          transition={{
                            duration: 1.5,
                            delay: 0.4 + index * 0.1,
                          }}
                        />
                      </motion.div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl p-8 text-white text-center glow"
        >
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-lg">
            I'm constantly expanding my skillset and staying up-to-date with the
            latest technologies and best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
