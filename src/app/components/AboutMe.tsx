'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/utils/animations";

export default function AboutMe() {
  return (
    <section className="relative overflow-hidden  text-gray-900 dark:text-gray-300 py-20 md:py-24 transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-28 lg:py-32 gap-12">
        <motion.h2
          {...fadeInUp}
          className="text-center text-3xl md:text-5xl font-extrabold tracking-wider mb-20"
        >
          LET ME <span className="text-primary">INTRODUCE</span> MYSELF
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-between  gap-12">

          {/* Left content */}
           <motion.div
            className="flex-1 flex justify-center relative "
            {...fadeInUp}
            transition={{ delay: 0.35 }}
          >
            <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <Image
              src="/dev2.png"
              alt="Yuvraj Singh Avatar"
              width={300}
              height={300}
              className="rounded-full object-cover scale-125 shadow-2xl ring-4 ring-primary/40 w-48 sm:w-60 md:w-64"
            />
          </motion.div>


          <motion.div
            className="flex-2 text-lg leading-relaxed md:text-xl space-y-6"
            {...fadeInUp}
            transition={{ delay: 0.25 }}
          >
            <p>
              I’m a <span className="text-primary font-semibold">Full Stack Developer</span> passionate about building scalable web
              applications and clean, user-focused digital experiences.
            </p>

            <p>
              I work with{" "}
              <span className="text-primary font-bold">
                React, Next.js, Node.js, Express, TypeScript, C++ and the MERN stack
              </span>{" "}
              — creating production-ready systems with authentication, real-time features, and optimized APIs.
            </p>

            <p>
              Recently, I worked as a <span className="text-primary font-bold">Full Stack Developer Intern</span> at Tara Retail AI,
              building an inventory dashboard, WhatsApp automation, and improving backend performance.
            </p>

            <p>
             Whenever possible, I love building projects with
              <span className="text-primary font-bold">Node.js</span> and modern frameworks like  <span className="text-primary font-bold">React.js</span> and  <span className="text-primary font-bold">Next.js</span>
            </p>
          </motion.div>

          {/* Right image */}


        </div>
      </div>
    </section>
  );
}
