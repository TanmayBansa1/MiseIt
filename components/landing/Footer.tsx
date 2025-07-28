"use client";
import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 text-white py-20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-75"></div>
              <Image
                src="/assets/images/storeitlogo.png"
                alt="MiseIt Logo"
                width={48}
                height={48}
                className="relative rounded-xl"
              />
            </div>
            <span className="text-3xl font-display font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              MiseIt
            </span>
          </div>
          <div className="flex space-x-8">
            <a
              href="https://github.com/TanmayBansa1/MiseIt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              GitHub
            </a>
            <a href="https://x.com/K_A_I11" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300 font-medium">
              Built by Tanmay Bansal
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="text-lg">&copy; 2025 MiseIt. All rights reserved. Built with ❤️ using Next.js</p>
        </div>
      </div>
    </footer>
  );
}; 