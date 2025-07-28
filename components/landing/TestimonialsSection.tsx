"use client";
import React from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/landing/TestimonialCard";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Om Agarwal",
      role: "Product Designer",
      content: "MiseIt has completely transformed how I manage my design files. The interface is beautiful and the features are exactly what I need.",
      rating: 5
    },
    {
      name: "Aryan Tayade",
      role: "Software Engineer",
      content: "As a developer, I appreciate the clean look and fast performance. MiseIt makes file sharing with my team seamless.",
      rating: 5
    },
    {
      name: "Gaurav Jain",
      role: "Founder and Entrepreneur",
      content: "The sharing features are incredible. I can easily collaborate with my team and clients without any friction.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black/50 to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
                      <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-8">
            Loved by Users Worldwide
          </h2>
                      <p className="text-2xl text-gray-400 max-w-4xl mx-auto font-sans font-light">
            Join thousands of users who trust MiseIt for their file management needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}; 