"use client";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import {
  Navigation,
  HeroSection,
  FeaturesSection,
  DemoSection,
  TestimonialsSection,
  CTASection,
  Footer,
  AnimatedBackground
} from "@/components/landing";

export default function LandingPage() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation opacity={opacity} />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Demo Section */}
      <DemoSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
