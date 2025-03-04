
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import SZLogo from '@/components/SZLogo';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <SZLogo size="md" color="primary" />
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-primary font-medium">
              About
            </Link>
            <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors">
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-10 px-4 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">About Creazone IT</h1>
            <Separator className="my-6" />
          </div>

          <div className="prose max-w-none">
            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Creazone IT is a subsidiary of Creazone A Ventures, founded in 2024. We specialize in developing 
                innovative AI solutions that help businesses streamline their operations and enhance their productivity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to democratize access to cutting-edge AI technology and empower organizations of all sizes
                to leverage the power of artificial intelligence in their daily operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading provider of accessible, user-friendly AI solutions that transform how businesses operate and make decisions.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Innovation in simplicity</li>
                  <li>Accessibility for all</li>
                  <li>Excellence in service</li>
                  <li>Ethical AI development</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/50 rounded-lg p-6 shadow-sm border mb-8">
              <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
              <p className="text-muted-foreground mb-6">
                Follow us on our social media channels to stay updated with our latest developments, tips, and announcements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.youtube.com/creazoneit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                  <span>YouTube</span>
                </a>
                <a 
                  href="https://www.facebook.com/creazoneit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">Brand Name:</span> Creazone IT
                </div>
                <div>
                  <span className="font-medium">Parent Company:</span> Creazone A Ventures
                </div>
                <div>
                  <span className="font-medium">Founded:</span> 2024
                </div>
                <div>
                  <span className="font-medium">YouTube:</span> <a href="https://www.youtube.com/creazoneit" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.youtube.com/creazoneit</a>
                </div>
                <div>
                  <span className="font-medium">Facebook:</span> <a href="https://www.facebook.com/creazoneit" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.facebook.com/creazoneit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border mt-12">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <SZLogo size="sm" color="primary" />
              <p className="text-sm text-muted-foreground mt-2">
                © {new Date().getFullYear()} Creazone IT. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/auth" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
