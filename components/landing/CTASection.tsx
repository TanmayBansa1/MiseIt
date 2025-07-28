"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export const CTASection: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
                      <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-8">
            Ready to Transform Your File Management?
          </h2>
                      <p className="text-2xl text-cyan-100 mb-12 max-w-4xl mx-auto font-sans font-light">
            Join thousands of users who have already discovered the power of modern file management with MiseIt.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <Link
              href="/sign-in"
              className="group relative px-10 py-5 bg-white text-cyan-600 rounded-3xl hover:bg-gray-50 transition-all duration-500 hover:scale-110 shadow-2xl"
            >
              <div className="relative flex items-center space-x-3">
                <Rocket className="h-6 w-6 group-hover:animate-bounce" />
                <span className="text-xl font-display font-bold tracking-wide">Start Today</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
            <a
              href="https://github.com/TanmayBansa1/MiseIt"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 border-2 border-white text-white rounded-3xl hover:bg-white hover:text-cyan-600 transition-all duration-500 hover:scale-110 backdrop-blur-xl"
            >
              <div className="relative flex items-center space-x-3">
                <Github className="h-6 w-6" />
                <span className="text-xl font-display font-bold tracking-wide">View on GitHub</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 