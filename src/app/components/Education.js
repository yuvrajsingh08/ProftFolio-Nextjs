'use client'

import { education } from '@/contents/education'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'

export default function Education() {
  return (
    <section className="py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          {...fadeInUp}
        >
          Education
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {education.map((edu, idx) => (
            <motion.article
              key={idx}
              className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <motion.h3 
                className="text-xl font-semibold mb-1"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {edu.degree}
              </motion.h3>
              <p className="text-primary font-medium mb-1">{edu.school}</p>
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.year}</p>
                <p className="text-sm font-medium text-secondary">{edu.gpa}</p>
              </div>
              <motion.p 
                className="text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {edu.description}
              </motion.p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
