
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Bot, BrainCircuit, MessageSquare, Sparkles, Zap, Rocket } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/chat');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 w-full border-b bg-background/80 backdrop-blur-sm z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent text-xl font-bold flex items-center">
              SmartZone AI
              <Sparkles className="h-4 w-4 ml-1 text-amber-500" />
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-sm font-medium"
              onClick={handleGetStarted}
            >
              Login
            </Button>
            <Button 
              onClick={handleGetStarted}
              className="button-gradient font-medium"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4 animate-fade-in">
            <span className="flex items-center">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Powered by Creazone IT
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Intelligent AI
            </span>{" "}
            <br />
            for Everyone
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
            Unlock the power of AI with SmartZone's intuitive interface. 
            Get instant answers, create content, and solve problems with our 
            advanced AI assistant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              onClick={handleGetStarted}
              size="lg" 
              className="button-gradient font-medium"
            >
              Start for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('#features', '_self')}
            >
              Explore Features
            </Button>
          </div>
        </div>
        <div className="flex-1 w-full mt-10 md:mt-0 relative">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-400/30 rounded-full blur-[120px]" />
          <div className="rounded-lg border bg-card p-3 shadow-sm overflow-hidden">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">SmartZone AI</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-1.5"></div>
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-lg bg-muted p-3 text-sm max-w-[80%] animate-fade-in">
                    Hello! I'm SmartZone AI, your intelligent assistant. How can I help you today?
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="rounded-lg chat-bubble-user text-sm max-w-[80%] animate-fade-in">
                    Can you help me write a professional email to schedule a meeting with clients?
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white">
                    <span className="text-xs font-medium">You</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-lg bg-muted p-3 text-sm max-w-[80%] animate-fade-in">
                    Absolutely! Here's a professional email template for scheduling a client meeting:
                    <br /><br />
                    <strong>Subject:</strong> Meeting Request: [Project Name] Discussion
                    <br /><br />
                    Dear [Client Name],
                    <br /><br />
                    I hope this email finds you well. I'm writing to schedule a meeting to discuss [specific topic or project].
                    <br /><br />
                    Would you be available on [date] at [time]? If not, please suggest a time that works better for you.
                    <br /><br />
                    Looking forward to our conversation.
                    <br /><br />
                    Best regards,
                    <br />
                    [Your Name]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container space-y-12">
          <div className="text-center space-y-4 max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Cutting-Edge AI Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover what makes SmartZone AI the most versatile AI assistant available today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-5">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Conversations</h3>
              <p className="text-muted-foreground">
                Enjoy fluid, human-like conversations with contextual understanding and memory of previous interactions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-5">
                <BrainCircuit className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Intelligence</h3>
              <p className="text-muted-foreground">
                Powered by Creazone IT's state-of-the-art models for accurate responses across diverse topics.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-5">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Responses</h3>
              <p className="text-muted-foreground">
                Get immediate answers and solutions with lightning-fast response times, regardless of complexity.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center mb-5">
                <Rocket className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creative Assistant</h3>
              <p className="text-muted-foreground">
                Generate content, brainstorm ideas, and overcome creative blocks with AI-powered inspiration.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center mb-5">
                <Bot className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Experience</h3>
              <p className="text-muted-foreground">
                Adapts to your preferences and needs, creating a tailored AI experience just for you.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-5">
                <Sparkles className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Endless Possibilities</h3>
              <p className="text-muted-foreground">
                From coding assistance to creative writing, harness the full potential of AI in one easy-to-use platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container">
        <div className="rounded-2xl overflow-hidden border bg-card relative">
          <div className="absolute -z-10 top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-purple-400/20 rounded-full blur-[120px]" />
          <div className="absolute -z-10 bottom-0 left-1/4 w-[200px] h-[200px] bg-blue-400/20 rounded-full blur-[90px]" />
          <div className="p-8 md:p-12 lg:p-16 max-w-[800px] mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Experience the Future of AI?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of users who are already leveraging the power of SmartZone AI in their daily lives and work.
            </p>
            <Button 
              onClick={handleGetStarted}
              size="lg" 
              className="button-gradient font-medium"
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="pt-4 text-sm text-muted-foreground">
              No credit card required • Free plan available
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent text-xl font-bold flex items-center">
                SmartZone AI
                <Sparkles className="h-4 w-4 ml-1 text-amber-500" />
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
              <div className="flex items-center">
                <span>© 2023 Creazone IT. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
