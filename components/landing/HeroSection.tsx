"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Rocket, ArrowRight, Target, TrendingUp, Globe, Shield } from "lucide-react";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export const HeroSection: React.FC = () => {
  const heroTitle = "MiseIt - Your Digital File Vault";

  const stats = [
    { 
      number: "2GB", 
      label: "Storage", 
      icon: <TrendingUp className="h-8 w-8 text-cyan-400" />,
      color: "from-cyan-500/20 to-blue-500/20"
    },
    { 
      number: "∞", 
      label: "File Types", 
      icon: <Globe className="h-8 w-8 text-purple-400" />,
      color: "from-purple-500/20 to-pink-500/20"
    },
    { 
      number: "100%", 
      label: "Secure", 
      icon: <Shield className="h-8 w-8 text-emerald-400" />,
      color: "from-emerald-500/20 to-teal-500/20"
    },
  ];

  return (
    <section className="pt-40 pb-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center relative z-10"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-400/30 rounded-full text-sm font-bold mb-8 shadow-2xl"
          >
            <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
                          <span className="text-cyan-100 font-sans font-semibold tracking-wide">• LIGHTNING FAST</span>
            <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[5rem] font-display font-black mb-8 leading-none tracking-tight drop-shadow-2xl">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(heroTitle)
                    .pauseFor(3000)
                    .deleteAll()
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                  delay: 100,
                  deleteSpeed: 50,
                  skipAddStyles: true,
                  wrapperClassName: "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent",
                  cursorClassName: "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent",
                }}
              />
            </h1>
          </motion.div>

          {/* Subtitle with Gradient Text */}
                      <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto mb-16 leading-relaxed font-sans font-light"
            >
            Experience the <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">future of file management</span> with our intuitive, secure, and lightning-fast platform. 
            Store, organize, and share your files with <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">unprecedented ease</span>.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-20"
          >
            <Link
              href="/sign-in"
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-3xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-cyan-500/25 border border-cyan-400/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-3">
                <Rocket className="h-6 w-6 group-hover:animate-bounce" />
                <span className="text-xl font-display font-bold tracking-wide">Get Started</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
            
            <a
              href="#features"
              className="group relative px-10 py-5 bg-transparent text-white rounded-3xl hover:bg-white/10 transition-all duration-500 hover:scale-110 shadow-2xl border-2 border-white/20 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-3">
                <Target className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-xl font-display font-bold tracking-wide">Explore Features</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </a>
          </motion.div>

          {/* Enhanced Stats with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
                className={`relative p-6 rounded-2xl bg-gradient-to-r ${stat.color} backdrop-blur-xl border border-white/10 hover:scale-105 transition-all duration-300`}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-4xl font-display font-black text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-sans font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 