"use client";

import { projects } from "@/contents/projects";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export default function Projects() {
  return (
    <section className="relative py-24">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-16"
          {...fadeInUp}
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.04,
                transition: { type: "spring", stiffness: 140, damping: 12 },
              }}
              className="bg-white dark:bg-[#111418] backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-[#2a2f37] overflow-hidden cursor-pointer transition-all"
              style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
            >
              {/* Image Section */}
              <div className="relative aspect-video overflow-hidden group">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-dark/30 text-gray-500 text-sm">
                    No Image Available
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"></div>
              </div>

              {/* Details */}
              <div className="p-6 space-y-4">
                <motion.h3
                  className="text-xl font-bold dark:text-gray-100"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 pt-2">
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="h-5 w-5" />
                      <span className="font-medium">Code</span>
                    </motion.a>
                  )}

                  {project.demoLink ? (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="h-5 w-5" />
                      <span className="font-medium">Live Demo</span>
                    </motion.a>
                  ) : (
                    <span className="text-gray-400 text-sm">No Demo</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
