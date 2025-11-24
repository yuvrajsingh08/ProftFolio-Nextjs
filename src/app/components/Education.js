'use client'

import { education } from '@/contents/education'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'

export default function Education() {
  return (
    <section className="py-24 relative">

      <div className="container max-w-5xl mx-auto px-6">
        <motion.h2
          {...fadeInUp}
          className="text-center text-4xl md:text-5xl font-extrabold tracking-wider mb-20"
        >
          EDUCATION
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative border-l-4 border-primary/40 pl-6 space-y-14"
        >
          {education.map((edu, i) => (
            <motion.div
              key={i}
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
              {/* Timeline Dot */}
              <div className="absolute w-6 h-6 -left-[1.95rem] top-1/2 -translate-y-1/2 rounded-full bg-primary border-[3px] border-white dark:border-[#111418] shadow-xl group-hover:scale-125 transition-transform" />

              {/* Card */}
              <div
                className="bg-white dark:bg-[#111418] backdrop-blur-lg rounded-xl p-6 md:p-8 shadow-2xl border border-gray-200
                dark:border-[#2a2f37] group-hover:border-primary/60 transition-all duration-300"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                  <motion.h3
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-xl md:text-2xl font-bold dark:text-gray-100"
                  >
                    {edu.degree}
                  </motion.h3>

                  <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold border border-primary/30">
                    {edu.year}
                  </span>
                </div>

                <p className="text-primary font-semibold text-lg mb-2">{edu.school}</p>

                <div className="flex justify-between items-center mb-3">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">CGPA</p>
                  <p className="text-md font-bold text-secondary">{edu.gpa}</p>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
