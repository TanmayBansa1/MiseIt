"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const DemoSection: React.FC = () => {
  const features = [
    "⚡ Lightning-fast file uploads and downloads",
    "📱 Responsive design works perfectly on all devices",
    "🎨 Beautiful, modern UI with smooth animations",
    "🔄 Real-time sync across all your devices",
    "💾 2GB free storage for everyone"
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-black/50 via-slate-900/50 to-black/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Beautiful Interface,
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Powerful Features</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed font-light">
              Experience a modern, intuitive interface that makes file management feel effortless. 
              Every feature is designed with user experience in mind.
            </p>
            
            <div className="space-y-8">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <CheckCircle className="h-8 w-8 text-cyan-400 flex-shrink-0" />
                  <span className="text-xl text-gray-300 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Link
                href="/sign-in"
                className="group relative inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-3xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-cyan-500/25 border border-cyan-400/30"
              >
                <Rocket className="h-6 w-6 group-hover:animate-bounce" />
                <span className="text-xl font-bold tracking-wide">Try MiseIt Now</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/30 to-white rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-100/90 to-white/90 rounded-3xl shadow-2xl p-6 md:p-8 border border-white/10 backdrop-blur-xl">
                <div className="flex items-center space-x-4 mb-6 md:mb-8">
                  <div className="flex space-x-4">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 font-medium">MiseIt Dashboard</div>
                </div>
                <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px]">
                  <Image 
                    className="w-full h-full object-contain rounded-2xl md:rounded-3xl shadow-lg" 
                    src="/assets/images/dashboard.png" 
                    alt="MiseIt Dashboard" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    priority
                    quality={95}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 