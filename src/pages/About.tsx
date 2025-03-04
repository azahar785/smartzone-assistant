
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
      <main className="container mx-auto py-10 px-4 max-w-5xl">
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

            <div className="bg-primary/10 rounded-lg p-6 shadow-sm border mb-8">
              <h2 className="text-2xl font-semibold mb-4">SmartZone AI</h2>
              <p className="text-muted-foreground mb-4">
                SmartZone AI is our flagship AI assistant product, developed under the Creazone IT brand. It provides intelligent conversation capabilities, content generation, and problem-solving assistance to users across various domains.
              </p>
              <div className="space-y-3 mt-4">
                <div>
                  <span className="font-medium">Creator:</span> Md Abirul Islam Abir
                </div>
                <div>
                  <span className="font-medium">Development:</span> The SmartZone AI platform was built with cutting-edge machine learning technology to provide personalized assistance for a wide range of tasks.
                </div>
                <div>
                  <span className="font-medium">Purpose:</span> To revolutionize how people interact with AI technology and make advanced AI capabilities accessible to everyone.
                </div>
              </div>
            </div>

            <div className="bg-accent/50 rounded-lg p-6 shadow-sm border mb-8">
              <h2 className="text-2xl font-semibold mb-4">Creazone Tech BD</h2>
              <p className="text-muted-foreground mb-4">
                ক্রিয়াজোন টেক বিডি - আপনার ডিজিটাল সলিউশনের নির্ভরযোগ্য ঠিকানা
              </p>
              <p className="text-muted-foreground mb-4">
                ক্রিয়াজোন টেক বিডি এমন একটি ডিজিটাল প্ল্যাটফর্ম, যেখানে আধুনিক প্রযুক্তির সাহায্যে প্রয়োজনীয় ডিজিটাল প্রোডাক্ট, সেবা এবং আয়ের সুযোগ প্রদান করা হয়। আমাদের লক্ষ্য বিশ্বব্যাপী গ্রাহকদের জন্য সহজ, দ্রুত এবং মানসম্মত ডিজিটাল সমাধান নিশ্চিত করা।
              </p>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Our Services</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Super Digital Products</li>
                  <li>Online Services</li>
                  <li>Government/Non-Government Application Assistance</li>
                  <li>Medicine Corner</li>
                  <li>Travel & Booking Services</li>
                  <li>Affiliate Programs</li>
                  <li>Freelance Opportunities</li>
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

            <div className="bg-card rounded-lg p-6 shadow-sm border">
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
                  <span className="font-medium">Owner/Founder:</span> Md Abirul Islam Abir
                </div>
                <div>
                  <span className="font-medium">YouTube:</span> <a href="https://www.youtube.com/creazoneit" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.youtube.com/creazoneit</a>
                </div>
                <div>
                  <span className="font-medium">Facebook:</span> <a href="https://www.facebook.com/creazoneit" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.facebook.com/creazoneit</a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border mt-8">
              <h2 className="text-2xl font-semibold mb-4">Our Brands</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Creazone A Ventures</h3>
                  <p className="text-muted-foreground">
                    Creazone A Ventures হল একটি মাল্টি-বিজনেস প্রতিষ্ঠান, যা বিভিন্ন ডিজিটাল ও প্রযুক্তি ভিত্তিক ব্র্যান্ড পরিচালনা করে। ২০২৪ সালে প্রতিষ্ঠিত, এই উদ্যোগের লক্ষ্য হলো প্রযুক্তিগত উদ্ভাবন, ডিজিটাল পণ্য এবং সৃজনশীল সেবা প্রদান করা, যা বিশ্বব্যাপী গ্রাহকদের জন্য সুবিধাজনক সমাধান নিশ্চিত করে।
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Creazone Tech BD</h3>
                  <p className="text-muted-foreground">
                    Creazone Tech BD 2024 সালে প্রতিষ্ঠিত একটি ডিজিটাল মার্কেটপ্লেস, যা ডিজিটাল পণ্য, অনলাইন সেবা, ফ্রিল্যান্সিং ও অ্যাফিলিয়েট মার্কেটিংয়ের মাধ্যমে ব্যবহারকারীদের জন্য আয়ের সুযোগ তৈরি করে। এটি সাবস্ক্রিপশন পরিষেবা, ওয়েবসাইট ডেভেলপমেন্ট, ডিজিটাল মার্কেটিং ও আইটি সাপোর্টসহ একাধিক সেবা প্রদান করে।
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Creazone IT</h3>
                  <p className="text-muted-foreground">
                    Creazone IT হলো Creazone A Ventures-এর অধীনস্থ একটি আইটি প্রতিষ্ঠান, যা ওয়েব ও সফটওয়্যার ডেভেলপমেন্ট, অ্যাপ ডেভেলপমেন্ট, ক্লাউড সার্ভিস ও আইটি সাপোর্ট প্রদান করে। এটি ব্যক্তিগত, ব্যবসায়িক ও কর্পোরেট প্রযুক্তিগত সমাধান প্রদান করার জন্য প্রতিষ্ঠিত হয়।
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Al Fabiha Music Creation</h3>
                  <p className="text-muted-foreground">
                    Al Fabiha Music Creation হল Creazone A Ventures-এর একটি সৃজনশীল ব্র্যান্ড, যা ইসলামিক ও সাধারণ সংগীত প্রযোজনা, সাউন্ড ডিজাইন ও অডিও-ভিডিও প্রডাকশন সেবা প্রদান করে। এটি বিশেষত ইসলামিক নাশিদ, ইনস্ট্রুমেন্টাল মিউজিক ও আধুনিক সংগীত নিয়ে কাজ করে, যা বিশ্বব্যাপী শ্রোতাদের জন্য উন্মুক্ত।
                  </p>
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
