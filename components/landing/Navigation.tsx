"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";

interface NavigationProps {
  opacity: any;
}

export const Navigation: React.FC<NavigationProps> = ({ opacity }) => {
  return (
    <motion.nav 
      style={{ opacity }}
      className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-75"></div>
              <Image
                src="/assets/images/storeitlogo.png"
                alt="MiseIt Logo"
                width={48}
                height={48}
                className="relative rounded-xl shadow-2xl"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight">
              MiseIt
            </span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <a
              href="https://github.com/TanmayBansa1/MiseIt"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:scale-105 shadow-2xl border border-gray-700/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <Github className="h-5 w-5" />
                <span className="font-semibold">GitHub</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}; 