"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
  exit: { opacity: 0, y: -40 },
};

export default function AboutMe() {
  return (
    <section className="relative overflow-hidden text-gray-900 dark:text-gray-300 py-16  transition-colors duration-300">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        className="container max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-20 lg:py-24"
      >
        <motion.h2
          variants={fadeItem}
          className="text-center text-3xl md:text-5xl font-extrabold tracking-wider mb-20"
        >
          LET ME <span className="text-primary">INTRODUCE</span> MYSELF
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* IMAGE SECTION */}
          <motion.div
            variants={fadeItem}
            className="flex-1 flex justify-center relative"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <Image
                src="/dev2.png"
                alt="Yuvraj Singh Avatar"
                width={300}
                height={300}
                className="rounded-full object-cover shadow-2xl scale-125 ring-4 ring-primary/40 w-44 sm:w-56 md:w-64"
              />
            </motion.div>
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            variants={fadeItem}
            className="flex-2 text-lg leading-relaxed md:text-xl space-y-6"
          >
            <p className="md:block hidden">
              I’m a <span className="text-primary font-semibold">Full Stack Developer</span> focused
              on building scalable products and clean user experiences.
            </p>

            <p className="md:block hidden">
              Skilled in{" "}
              <span className="text-primary font-bold">
                React, Next.js, Node.js, Express, TypeScript, C++ & MERN stack
              </span>{" "}
              — building real-time and production-ready systems.
            </p>

            <p className="md:block hidden">
              Previously worked as a{" "}
              <span className="text-primary font-bold">Full-Stack Developer Intern</span> at Tara
              Retail AI, creating automation dashboards and backend optimizations.
            </p>

            {/* Shorter mobile version */}
            <p className="md:hidden text-base">
              I’m a <span className="text-primary font-semibold">Full Stack Developer</span> skilled
              in React, Next.js & Node.js. Previously worked on real-time dashboards and automation
              tools at Tara Retail AI.
            </p>

            <p>
              I enjoy building projects with{" "}
              <span className="text-primary font-bold">Node.js</span>,
              <span className="text-primary font-bold"> React</span> &
              <span className="text-primary font-bold"> Next.js</span>.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
