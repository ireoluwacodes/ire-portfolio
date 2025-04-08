import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  Code,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  stack: string[];
  link?: string;
  github?: string;
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=600&width=800",
      stack: ["React.js", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=600&width=800",
      stack: ["React.js", "FastAPI", "PostgreSQL", "WebSockets", "Docker"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Health & Fitness Tracker",
      description:
        "Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      image: "/placeholder.svg?height=600&width=800",
      stack: ["React Native", "Flask", "SQLite", "TensorFlow", "AWS"],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Real Estate Marketplace",
      description:
        "Platform connecting property buyers, sellers, and agents with virtual tours and mortgage calculators.",
      image: "/placeholder.svg?height=600&width=800",
      stack: ["Next.js", "Nest.js", "MySQL", "Google Maps API", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
  ];

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const navigateProject = (direction: "next" | "prev") => {
    if (!selectedProject) return;

    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % projects.length;
    } else {
      newIndex = (currentIndex - 1 + projects.length) % projects.length;
    }

    setSelectedProject(projects[newIndex]);
  };

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white glow-text">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills and expertise
            in building modern web and mobile applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border border-slate-700"
              onClick={() => openProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">Click to view details</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="px-3 py-1 bg-slate-800 text-gray-400 text-xs font-medium rounded-full">
                      +{project.stack.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-slate-700">
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full shadow-md hover:bg-slate-700 transition-colors z-10 text-white"
              >
                <X size={20} />
              </button>

              <div className="relative h-72 md:h-96">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="object-cover rounded-t-xl"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent h-1/3">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateProject("prev");
                      }}
                      className="p-2 bg-slate-800/50 backdrop-blur-sm rounded-full hover:bg-slate-700/70 transition-colors"
                    >
                      <ChevronLeft size={24} className="text-white" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateProject("next");
                      }}
                      className="p-2 bg-slate-800/50 backdrop-blur-sm rounded-full hover:bg-slate-700/70 transition-colors"
                    >
                      <ChevronRight size={24} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center text-white">
                    <Code size={18} className="mr-2 text-cyan-400" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors glow"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Visit Site
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
