'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image */}
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mx-auto w-32 h-32 mb-6"
              >
                <img
                  src="/images/profile.jpg"
                  alt="Hau Bui"
                  className="w-full h-full object-cover rounded-full border-4 border-gray-100 shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
              </motion.div>
            </div>

            {/* Name and Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Hau Bui
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
              Fullstack Java Developer
            </h2>

            {/* Location */}
            <div className="flex items-center justify-center text-gray-500 mb-8">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Da Nang, Vietnam</span>
            </div>

            {/* Bio */}
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about building scalable web applications with Java Spring Boot and React. 
              I turn complex problems into elegant solutions through clean code and modern architecture.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={scrollToContact}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg text-base font-medium transition-all duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg text-base font-medium transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/buitahau"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/buitahau"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToAbout}
          >
            <ArrowDown className="h-6 w-6 text-gray-400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}