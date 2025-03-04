
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SZLogo from '@/components/SZLogo';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/context/AuthContext';
import { ArrowRight, CheckCircle, Sparkle } from 'lucide-react';

const Landing = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleGetStarted = () => {
    if (user) {
      navigate('/chat');
    } else {
      navigate('/auth');
    }
  };

  return (
    <div className="min-h-screen bg-background landing-page">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <SZLogo size="md" color="primary" />
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-primary font-medium">
              Home
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            {user ? (
              <>
                <Button variant="ghost" onClick={() => navigate('/chat')}>
                  Dashboard
                </Button>
                <Button variant="outline" onClick={() => navigate('/chat')}>
                  Open App
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={() => navigate('/auth')}>
                  Login
                </Button>
                <Button variant="outline" onClick={() => navigate('/auth?signup=true')}>
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="container mx-auto py-16 md:py-24 px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkle className="h-4 w-4 mr-2" />
            AI-Powered Assistant For Everyone
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Experience the Future of AI Conversations with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Creazone IT
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Our advanced AI assistant helps you get things done faster. Ask questions, generate content, and solve problems - all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="button-gradient"
              onClick={handleGetStarted}
            >
              Get Started
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/about')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section className="container mx-auto py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Discover what makes Creazone IT the ultimate AI assistant
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="feature-icon bg-purple-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Answers</h3>
              <p className="text-muted-foreground">
                Get immediate responses to your questions, no matter how complex they are.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-blue-600"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Knowledge Base</h3>
              <p className="text-muted-foreground">
                Access a vast database of information, always up-to-date and accurate.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-green-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your conversations are encrypted and your data remains private and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="bg-accent/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  JS
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">John Smith</h4>
                  <p className="text-sm text-muted-foreground">Marketing Manager</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Creazone IT has completely transformed how I work. It helps me draft emails, create content, and research topics in a fraction of the time."
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  AR
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Amanda Rodriguez</h4>
                  <p className="text-sm text-muted-foreground">Software Developer</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "As a developer, I use Creazone IT daily to help me debug code, explain concepts, and brainstorm solutions. It's like having a senior developer on call 24/7."
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  TK
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Tom Kumar</h4>
                  <p className="text-sm text-muted-foreground">Student</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Creazone IT helps me understand complex topics and prepare for exams. It explains things in a way that's easy to understand, which has improved my grades significantly."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="container mx-auto py-16 md:py-24 px-4">
        <div className="bg-card rounded-xl p-8 md:p-12 shadow-sm border max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-muted-foreground mb-0 md:mb-0">
                Join thousands of users who are already using Creazone IT to boost their productivity.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="button-gradient" onClick={handleGetStarted}>
                <Sparkle className="h-4 w-4 mr-2" />
                Try For Free
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/about')}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border">
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <SZLogo size="md" color="primary" />
              <p className="text-sm text-muted-foreground mt-4">
                Helping you harness the power of AI for everyday tasks and complex challenges.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/auth?signup=true" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.youtube.com/creazoneit" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/creazoneit" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-muted-foreground">
                Have questions or feedback? Reach out to us at <a href="mailto:info@creazoneit.com" className="text-primary hover:underline">info@creazoneit.com</a>
              </p>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Creazone IT. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
