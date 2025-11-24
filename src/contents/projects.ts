import { Project } from "@/types";


export const projects: Project[] = [
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce platform built with React.js, JavaScript, Tailwind CSS, Express.Js and Node.Js.',
        technologies: ['React.js', 'JavaScript', 'Node.Js', 'Stripe'],
        githubLink: 'https://github.com/yuvrajsingh08/Ecommerce-APP',
        demoLink: ' https://ecommerce-app-frontend-er1w.onrender.com/',
        image: '/projects/e-commerce-website.png',
      },
      {
        title: 'Chat Web Application',
        description: 'A real-time chat Web application using WebSocket technology.',
        technologies: ['React.Js', 'Node.js', 'Socket.io'],
        githubLink: 'https://github.com/yuvrajsingh08/Chat-App',
        demoLink: 'https://chat-app-frontend-2xlg.onrender.com/',
        image: '/projects/chat-app.png',
      },
      {
        title: 'Admin DashBoard',
        description: 'An interactive React.js admin dashboard for efficient data management and visualization.',
        technologies: ['React', 'ApexChart.js', 'Tailwind CSS'],
        githubLink: 'https://github.com/yuvrajsingh08/ADMIN-DASHBOARD',
        demoLink: 'https://admin-dashboard-flax-two.vercel.app',
        image: '/projects/admin-dashboard.png',
      },
      // {
      //   title: 'Weather App',
      //   description: 'A weather application that provides real-time weather updates.',
      //   technologies: ['JavaScript', 'OpenWeatherMap API'],
      //   demoLink: 'https://yuvrajsingh08.github.io/Weather-App/',
      //   githubLink: 'https://github.com/yuvrajsingh08/Weather-App',
      //   image: '/projects/weather-app.png',
      // },
      {
        title: 'SecureShare (VanishShare)',
        description: 'A secure, encrypted file-sharing backend that generates temporary expiring download links with full data protection.',
        technologies: [
          'Node.js',
          'Express.js',
          'MongoDB',
          'Redis',
          'Supabase Storage',
          'JWT',
          'AES-256 Encryption',
          'Multer'
        ],
        githubLink: 'https://github.com/yuvrajsingh08/SecureShare',
      },

  ];