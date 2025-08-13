'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const skills = [
  { name: 'C++', logo: '/skills/c-.png' },
  { name: 'JavaScript', logo: '/skills/js.png' },
  { name: 'TypeScript', logo: '/skills/typescript.png' },
  { name: 'React', logo: '/skills/react.png' },
  { name: 'Next.js', logo: '/skills/Next.js.png' },
  { name: 'Redux', logo: '/skills/c-.png' },
  { name: 'Node.js', logo: '/skills/nodejs.png' },
  { name: 'Express.js', logo: '/skills/Express.png' },
  { name: 'Tailwind CSS', logo: '/skills/Tailwind.png' },
  { name: 'MongoDB', logo: '/skills/MongoDB.png' },
  { name: 'Git', logo: '/skills/social.png' },
  { name: 'GitHub', logo: '/skills/github.png' },
  { name: 'VS Code', logo: '/skills/vs.png' },
  { name: 'Postman', logo: '/skills/Postman.png' },
  { name: 'Supabase', logo: '/skills/supabase.png' },
  { name: 'SQL', logo: '/skills/MySQL.png' },
]

// Base desktop positions
const desktopPositions = [
  { x: '-2vw', y: '1vw' },
  { x: '-15vw', y: '-5vw' },
  { x: '-5vw', y: '-10vw' },
  { x: '15vw', y: '5vw' },
  { x: '5vw', y: '15vw' },
  { x: '-10vw', y: '-20vw' },
  { x: '10vw', y: '-15vw' },
  { x: '20vw', y: '-5vw' },
  { x: '-20vw', y: '10vw' },
  { x: '20vw', y: '15vw' },
  { x: '-20vw', y: '-10vw' },
  { x: '10vw', y: '20vw' },
  { x: '-15vw', y: '15vw' },
  { x: '16vw', y: '-15vw' },
  { x: '2vw', y: '20vw' },
  { x: '0vw', y: '-20vw' },
]

// Tighter positions for mobile
const mobilePositions = [
  { x: '0vw', y: '0vw' },
  { x: '-20vw', y: '-10vw' },
  { x: '15vw', y: '-5vw' },
  { x: '-10vw', y: '15vw' },
  { x: '20vw', y: '10vw' },
  { x: '-25vw', y: '0vw' },
  { x: '25vw', y: '-15vw' },
  { x: '-15vw', y: '25vw' },
  { x: '0vw', y: '-25vw' },
  { x: '10vw', y: '25vw' },
  { x: '-25vw', y: '-20vw' },
  { x: '20vw', y: '-25vw' },
  { x: '-20vw', y: '20vw' },
  { x: '25vw', y: '15vw' },
  { x: '-10vw', y: '-25vw' },
  { x: '0vw', y: '25vw' },
]

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Choose positions based on screen size and add small random offsets
  const positions = (isMobile ? mobilePositions : desktopPositions).map(pos => ({
    x: `calc(${pos.x} + ${Math.random() * 4 - 2}vw)`,
    y: `calc(${pos.y} + ${Math.random() * 4 - 2}vw)`,
  }))

  return (
    <section className=" relative   overflow-visible">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className="relative flex items-center justify-center aspect-square w-full max-w-[60rem] mx-auto overflow-visible">
          {/* Orbit rings */}
          {[...Array(5)].map((_, i) => {
            const width = (i + 1) * 20
            const height = (i + 1) * 15
            return (
              <div
                key={i}
                className="absolute border border-gray-600"
                style={{
                  width: `${width}%`,
                  height: `${height}%`,
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            )
          })}

          {/* Skill logos */}
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="absolute flex items-center justify-center rounded-full shadow-md p-1 sm:p-2"
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              whileInView={{
                x: positions[index].x,
                y: positions[index].y,
                opacity: 1,
                scale: 1
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 80
              }}
              whileHover={{ scale: 1.15 }}
            >
              <Image
                src={skill.logo}
                alt={skill.name}
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
