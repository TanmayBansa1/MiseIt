import React from 'react';
import { 
  Files, 
  Upload, 
  Lock, 
  Share2, 
  Folder, 
  Search,
  Github
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Files className="h-8 w-8 text-blue-600" />
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
              Modern File Management Made Simple
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              MiseIt is a powerful file management platform that helps you store, organize, and access your files with ease. Built with Next.js for lightning-fast performance.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/TanmayBansa1/MiseIt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
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
            <FeatureCard 
              icon={<Upload className="h-8 w-8 text-blue-600" />}
              title="Easy File Upload"
              description="Drag and drop interface for quick and easy file uploads. Support for multiple file types."
            />
            <FeatureCard 
              icon={<Lock className="h-8 w-8 text-blue-600" />}
              title="Secure Storage"
              description="Your files are encrypted and stored securely. Complete control over file access and sharing."
            />
            <FeatureCard 
              icon={<Share2 className="h-8 w-8 text-blue-600" />}
              title="Simple Sharing"
              description="Share files and folders with customizable access permissions and expiring links."
            />
            <FeatureCard 
              icon={<Folder className="h-8 w-8 text-blue-600" />}
              title="Organization"
              description="Create folders, add tags, and organize your files in a way that makes sense to you."
            />
            <FeatureCard 
              icon={<Search className="h-8 w-8 text-blue-600" />}
              title="Quick Search"
              description="Find your files instantly with powerful search capabilities and filters."
            />
            <FeatureCard 
              icon={<Files className="h-8 w-8 text-blue-600" />}
              title="File Preview"
              description="Preview documents, images, and other file types directly in your browser."
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
                MiseIt provides a clean and intuitive interface that makes file management a breeze. With features like drag-and-drop upload, quick search, and easy sharing, managing your files has never been easier.
              </p>
              <ul className="space-y-4">
                {[
                  'Built with Next.js for optimal performance',
                  'Responsive design works on all devices',
                  'Real-time updates and notifications',
                  'Customizable workspace settings'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-blue-600 rounded-full" />
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
              <Files className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">MiseIt</span>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/TanmayBansa1/MiseIt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://github.com/TanmayBansa1/MiseIt#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Documentation
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>© 2024 MiseIt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;