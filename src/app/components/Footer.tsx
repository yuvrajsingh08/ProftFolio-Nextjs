import Link from 'next/link'
import { FaGithub,FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
               Yuvraj Singh&trade;
            </Link>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} Yuvraj Singh. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/yuvrajsingh08"
              target="_blank"
              rel="noopener noreferrer"
             className="text-white"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/yuvraj-singh-51b649284/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/yuvrajsingh_.08/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 