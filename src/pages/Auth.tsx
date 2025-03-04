import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import SZLogo from '@/components/SZLogo';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/chat');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        if (!fullName.trim()) {
          toast({
            variant: "destructive",
            title: "Full name is required",
            description: "Please enter your full name to create an account.",
          });
          setLoading(false);
          return;
        }
        
        await signUp(email, password, fullName);
        setIsLogin(true);
        toast({
          description: "Account created successfully. Please log in.",
        });
      }
    } catch (error) {
      console.error("Auth error:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setFullName('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <SZLogo />
          </div>
          <div>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 container max-w-[400px] mx-auto flex flex-col justify-center py-12">
        <div className="w-full max-w-md">
          <div className="space-y-4 bg-card p-8 rounded-xl shadow-lg border relative overflow-hidden">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-400/30 rounded-full blur-[120px]" />
            
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">
                {isLogin ? 'Welcome Back' : 'Create an Account'}
              </h1>
              <p className="text-muted-foreground">
                {isLogin 
                  ? 'Sign in to continue to SmartZone AI' 
                  : 'Join SmartZone AI and start your AI journey'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  minLength={6}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {!isLogin && 'Password must be at least 6 characters long'}
                </p>
              </div>
              
              <Button 
                type="submit" 
                className="w-full button-gradient"
                disabled={loading}
              >
                {loading ? 'Loading...' : isLogin ? 'Login' : 'Sign Up'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            
            <div className="text-center pt-4">
              <button 
                type="button"
                onClick={toggleForm}
                className="text-sm text-primary hover:underline"
              >
                {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
