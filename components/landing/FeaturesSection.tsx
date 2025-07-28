"use client";
import React from "react";
import { motion } from "framer-motion";
import { Share2, Search, Folder, Globe } from "lucide-react";
import { FeatureCard } from "@/components/landing/FeatureCard";

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Share2 className="h-10 w-10" />,
      title: "Smart Sharing",
      description: "Share files with your peers easily",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "Lightning Search",
      description: "Find any file instantly with our AI-powered search that understands your content and file names.",
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <Folder className="h-10 w-10" />,
      title: "Smart Organization",
      description: "Automatic file categorization and intelligent folder suggestions keep your files organized effortlessly.",
      color: "from-indigo-500 to-purple-600",
      bgColor: "from-indigo-500/20 to-purple-500/20"
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Global Access",
      description: "Access your files from anywhere in the world with our cloud-based platform and mobile apps.",
      color: "from-teal-500 to-cyan-600",
      bgColor: "from-teal-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section id="features" className="py-32 bg-gradient-to-b from-slate-900/50 to-black/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
                      <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-8">
            Everything You Need for
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Modern File Management</span>
          </h2>
                      <p className="text-2xl text-gray-400 max-w-4xl mx-auto font-sans font-light">
            Powerful features designed to make file management effortless and secure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}; 