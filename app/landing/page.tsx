"use client";
import React, { useState, useEffect } from "react";
import {
  Files,
  Upload,
  Lock,
  Share2,
  Folder,
  Search,
  Github,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

function App() {
  const heroTitle = "Modern File Management Made Simple";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/assets/images/storeitlogo.png"
                alt="logo"
                width={32}
                height={32}
              />
              <span className="text-2xl font-bold text-gray-900">MiseIt</span>
            </div>
            <a
              href="https://github.com/TanmayBansa1/MiseIt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>View on GitHub</span>
            </a>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(heroTitle)

                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              MiseIt is a powerful file management platform that helps you
              store, organize, and access your files with ease. Built with
              Next.js for lightning-fast performance.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/sign-in"
                className="px-8 py-3 bg-blue text-white rounded-lg hover:bg-blue transition-colors"
              >
                Get Started
              </Link>
              <a
                href="https://github.com/TanmayBansa1/MiseIt#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Features for Modern File Management
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedFeatureCard
              icon={<Upload className="h-8 w-8 text-blue" />}
              title="Easy File Upload"
              description="Drag and drop interface for quick and easy file uploads. Support for multiple file types."
              delay={0}
            />
            <AnimatedFeatureCard
              icon={<Lock className="h-8 w-8 text-blue" />}
              title="Secure Storage"
              description="Your files are encrypted and stored securely. Complete control over file access and sharing."
              delay={200}
            />
            <AnimatedFeatureCard
              icon={<Share2 className="h-8 w-8 text-blue" />}
              title="Simple Sharing"
              description="Share files and folders with customizable access permissions and expiring links."
              delay={400}
            />
            <AnimatedFeatureCard
              icon={<Folder className="h-8 w-8 text-blue" />}
              title="Quick Sort"
              description="Sort your files with ease"
              delay={600}
            />
            <AnimatedFeatureCard
              icon={<Search className="h-8 w-8 text-blue" />}
              title="Quick Search"
              description="Find your files instantly with powerful search capabilities and filters."
              delay={800}
            />
            <AnimatedFeatureCard
              icon={<Files className="h-8 w-8 text-blue" />}
              title="File Preview"
              description="Preview documents, images, and other file types directly in your browser."
              delay={1000}
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Modern Interface for Seamless Experience
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                MiseIt provides a clean and intuitive interface that makes file
                management a breeze. With features like drag-and-drop upload,
                quick search, and easy sharing, managing your files has never
                been easier.
              </p>
              <ul className="space-y-4">
                {[
                  "Built with Next.js for optimal performance",
                  "Responsive design works on all devices",
                  "Real-time updates and notifications",
                  "Customizable workspace settings",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-blue rounded-full" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="MiseIt Interface Demo"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/assets/images/storeitlogo.png"
                alt="logo"
                width={32}
                height={32}
              />
              <span className="text-2xl font-bold">MiseIt</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/TanmayBansa1/MiseIt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p> 2024 MiseIt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AnimatedFeatureCard({ 
  icon, 
  title, 
  description,
  delay = 0
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  delay?: number
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        bg-gray-50 p-6 rounded-lg 
        transform transition-all duration-150 
        ${inView 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-10 scale-95'}
        hover:-translate-y-2 
        hover:shadow-2xl 
        hover:bg-white 
        group 
        border border-transparent 
        hover:border-blue-200 
        hover:scale-105 
        hover:rotate-1
        relative 
        overflow-hidden
      `}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 
        transform origin-left scale-x-0 
        group-hover:scale-x-100 
        transition-transform duration-150"
      ></div>
      
      <div className="mb-4 
        text-blue-600 
        transition-transform duration-150 
        group-hover:scale-110 
        group-hover:rotate-6"
      >
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 
        text-gray-800 
        group-hover:text-blue-700 
        transition-colors duration-150"
      >
        {title}
      </h3>
      
      <p className="text-gray-600 
        opacity-0 
        transform translate-y-4 
        group-hover:opacity-100 
        group-hover:translate-y-0 
        transition-all duration-150"
      >
        {description}
      </p>
    </div>
  );
}

export default App;
