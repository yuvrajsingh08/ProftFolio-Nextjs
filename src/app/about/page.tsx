"use client";

import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { education } from "@/contents/education";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  staggerContainer,
} from "@/utils/animations";

export default function About() {
  return (
    <section className="relative py-20">

      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h1
          className="text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-12"
          {...fadeInDown}
        >
          About <span className="text-primary">Me</span>
        </motion.h1>

        {/* Bio Section */}
        <motion.section className="mb-20" {...fadeInUp}>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
            I&apos;m a passionate <span className="text-primary font-semibold">Full Stack Developer</span> who builds
            scalable and visually refined digital experiences. I specialize in modern web ecosystems,
            high-performance UI, and reliable backend systems.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section className="mb-20" {...fadeInUp}>
          <motion.h2
            className="text-center text-3xl md:text-4xl font-bold mb-10"
            {...fadeInUp}
          >
            Skills
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Frontend */}
            <motion.div
              variants={fadeInUp}
              whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.04,
                transition: { type: "spring", stiffness: 140, damping: 12 }
              }}
              className="bg-white dark:bg-[#111418] rounded-xl p-6 shadow-xl border border-gray-200 dark:border-[#2a2f37] backdrop-blur-xl group transition-all cursor-pointer"
              style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
            >
              <FaCode className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                <li>Next.js / React.js</li>
                <li>TypeScript / JavaScript</li>
                <li>Tailwind CSS</li>
                <li>ShadCN / Redux Toolkit</li>
                <li>HTML5 / CSS3</li>
              </ul>
            </motion.div>

            {/* Backend */}
            <motion.div
              variants={fadeInUp}
              whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.04,
                transition: { type: "spring", stiffness: 140, damping: 12 }
              }}
              className="bg-white dark:bg-[#111418] rounded-xl p-6 shadow-xl border border-gray-200 dark:border-[#2a2f37] backdrop-blur-xl group transition-all cursor-pointer"
              style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
            >
              <FaLaptopCode className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Backend</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                <li>Node.js / Express.js</li>
                <li>REST APIs / Authentication</li>
                <li>MongoDB / Supabase / PostgreSQL</li>
                <li>Redis / Firebase</li>
                <li>Real-time: Socket.io</li>
              </ul>
            </motion.div>

            {/* Tools */}
            <motion.div
              variants={fadeInUp}
              whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.04,
                transition: { type: "spring", stiffness: 140, damping: 12 }
              }}
              className="bg-white dark:bg-[#111418] rounded-xl p-6 shadow-xl border border-gray-200 dark:border-[#2a2f37] backdrop-blur-xl group transition-all cursor-pointer"
              style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
            >
              <FaGraduationCap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Tools & Others</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                <li>Git / GitHub</li>
                <li>Postman</li>
                <li>Docker</li>
                <li>Vercel / Render</li>
                <li>VS Code</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section className="mb-20" {...fadeInUp}>
          <motion.h2
            className="text-center text-3xl md:text-4xl font-bold mb-10"
            {...fadeInUp}
          >
            Experience
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto space-y-10"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-[#111418] backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-gray-200 dark:border-[#2a2f37] transition-all"
            >
              <h3 className="text-2xl font-bold mb-1">
                Full Stack Developer Intern — Tara Retail AI
              </h3>
              <p className="text-primary font-medium">Jul 2025 – Oct 2025</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Next.js, Supabase, Node.js
              </p>

              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside mt-4 space-y-2">
                <li>Built inventory dashboard with bulk editing & Excel imports</li>
                <li>Implemented white-label customization & domain-based routing</li>
                <li>Integrated WhatsApp API for campaigns & templates</li>
                <li>Optimized backend performance & query efficiency</li>
                <li>Developed IST-based cron alert automation</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section {...fadeInUp}>
          <motion.h2
            className="text-center text-3xl md:text-4xl font-bold mb-12"
            {...fadeInUp}
          >
            Education
          </motion.h2>

          <motion.div
            className="space-y-10 max-w-4xl mx-auto relative border-l-4 border-primary/40 pl-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{
                  rotateX: 8,
                  rotateY: -8,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 120, damping: 10 }
                }}
                className="relative group cursor-pointer"
                style={{ perspective: "1200px" }}
              >
                <div className="absolute w-6 h-6 -left-[1.95rem] top-1/2 -translate-y-1/2 rounded-full bg-primary border-[3px] border-white dark:border-[#111418] shadow-xl group-hover:scale-125 transition-transform" />

                <div
                  className="bg-white dark:bg-[#111418] backdrop-blur-xl rounded-xl p-6 shadow-xl border border-gray-200 dark:border-[#2a2f37] group-hover:border-primary/60 transition-all duration-300"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold dark:text-gray-100">
                      {edu.degree}
                    </h3>
                    <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {edu.year}
                    </span>
                  </div>

                  <p className="text-primary font-semibold">{edu.school}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">CGPA: {edu.gpa}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
}
