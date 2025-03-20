import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CloudUpload, Search, Lock, FileText, Share2, Shield } from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: <CloudUpload className="w-12 h-12" />,
      title: 'Easy Upload',
      description: 'Drag and drop or select multiple files with a single click.'
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: 'Smart Search',
      description: 'Find files instantly with advanced AI-powered search.'
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: 'Secure Storage',
      description: 'Military-grade encryption keeps your files safe and private.'
    }
  ];

  const additionalFeatures = [
    {
      icon: <FileText className="w-10 h-10 text-blue-600" />,
      title: 'File Organization',
      description: 'Intelligent categorization and tagging of your documents.'
    },
    {
      icon: <Share2 className="w-10 h-10 text-green-600" />,
      title: 'Easy Sharing',
      description: 'Share files securely with granular access controls.'
    },
    {
      icon: <Shield className="w-10 h-10 text-purple-600" />,
      title: 'Privacy First',
      description: 'Complete control over your data with end-to-end encryption.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Effortless File Management for Modern Teams
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            MiseIT transforms how you store, organize, and collaborate on files. 
            Intelligent, secure, and incredibly simple.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/sign-up" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                Get Started Free <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/features" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose MiseIT?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg shadow-md hover:shadow-xl transition-all group"
            >
              <div className="flex justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          More Powerful Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center bg-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Revolutionize Your File Management?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who have simplified their workflow with MiseIT. 
          No credit card required.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/sign-up">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Free Trial <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Link href="/features">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              Explore Features
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 MiseIT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}