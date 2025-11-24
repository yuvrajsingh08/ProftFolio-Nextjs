'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from '@/utils/animations';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-28 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Left Section */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Yuvraj Singh
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0">
            I build scalable, modern web applications using React, Next.js, and the MERN stack.
          </p>

          {/* Buttons with proper gaps */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                href="/projects"
                className="bg-primary text-white block w-full sm:w-auto text-center px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-primary/90 transition-all"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white block w-full sm:w-auto text-center px-8 py-3 rounded-lg font-medium shadow hover:shadow-lg transition-all"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start space-x-5">
            {[
              { icon: <FaGithub />, url: "https://github.com/yuvrajsingh08" },
              { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/yuvraj-singh-51b649284/" },
              { icon: <FaInstagram />, url: "https://www.instagram.com/yuvrajsingh_.08/" }
            ].map(({ icon, url }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Section - Profile */}
        <motion.div
          className="flex-1 flex justify-center relative"
          {...scaleIn}
          transition={{ delay: 0.4 }}
        >
          {/* Background Glow */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-primary/30 rounded-full blur-3xl -z-10"></div>
          <Image
            src="/developer.png"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full w-40 sm:w-56 md:w-64 scale-150 object-cover ring-4 ring-primary/50 shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
