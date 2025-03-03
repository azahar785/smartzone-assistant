
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { createNewChat } from '@/utils/chatStorage';
import ChatInterface from '@/components/ChatInterface';
import ChatHistory from '@/components/ChatHistory';
import { MenuIcon, X, Sparkles, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { chatId } = useParams<{ chatId?: string }>();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = React.useState(!isMobile);
  const { toast } = useToast();
  
  useEffect(() => {
    // If no chatId, redirect to a new chat
    if (!chatId) {
      const newChatId = createNewChat();
      navigate(`/chat/${newChatId}`, { replace: true });
      
      toast({
        description: "Welcome to SmartZone AI",
      });
    }
  }, [chatId, navigate, toast]);
  
  useEffect(() => {
    // Toggle sidebar based on screen size
    if (isMobile !== undefined) {
      setSidebarOpen(!isMobile); 
    }
  }, [isMobile]);

  return (
    <div className="h-full flex flex-col">
      <header className="flex items-center h-16 px-6 border-b bg-background/80 backdrop-blur-sm z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden"
        >
          <MenuIcon className="h-5 w-5" />
        </Button>
        <div className="flex items-center justify-between w-full">
          <h1 className="font-bold text-xl flex items-center">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">SmartZone AI</span>
            <Sparkles className="h-4 w-4 ml-1 text-amber-500" />
          </h1>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
            onClick={() => navigate('/')}
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </Button>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && isMobile && (
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <aside 
          className={cn(
            "fixed inset-y-0 left-0 z-50 flex w-80 flex-col border-r bg-card/95 backdrop-blur-sm transition-transform duration-300 lg:z-0 lg:translate-x-0 pt-16",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          )}
          <ChatHistory currentChatId={chatId} />
        </aside>
        
        {/* Main content */}
        <main 
          className={cn(
            "flex-1 overflow-hidden transition-all duration-300 ease-in-out",
            sidebarOpen ? "lg:ml-80" : "ml-0"
          )}
        >
          <ChatInterface />
        </main>
      </div>
    </div>
  );
};

export default Index;
