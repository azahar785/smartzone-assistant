import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  PlusCircle, Menu, X, LogOut, 
  Settings, Trash2, MoreVertical, Loader2
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet';
import ChatInterface from '@/components/ChatInterface';
import ChatHistory from '@/components/ChatHistory';
import { useAuth } from '@/context/AuthContext';
import { useMobile } from '@/hooks/use-mobile';
import SZLogo from '@/components/SZLogo';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [loading, setLoading] = useState(false);
  const { chatId } = useParams();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const isMobile = useMobile();

  useEffect(() => {
    if (chatId) {
      setSelectedChatId(chatId);
    } else if (chatHistory.length > 0) {
      setSelectedChatId(chatHistory[0].id);
    }
  }, [chatId, chatHistory]);

  useEffect(() => {
    // Mock chat history data (replace with actual API call)
    const mockChatHistory = [
      { id: '1', title: 'Project Brainstorm', createdAt: new Date() },
      { id: '2', title: 'Email Draft', createdAt: new Date() },
      { id: '3', title: 'Code Review', createdAt: new Date() },
    ];
    setChatHistory(mockChatHistory);
  }, []);

  const createNewChat = () => {
    setLoading(true);
    // Mock API call to create a new chat (replace with actual API call)
    setTimeout(() => {
      const newChat = {
        id: String(Date.now()),
        title: 'New Chat',
        createdAt: new Date(),
      };
      setChatHistory([newChat, ...chatHistory]);
      setSelectedChatId(newChat.id);
      navigate(`/chat/${newChat.id}`);
      setLoading(false);
    }, 1000);
  };

  const deleteChat = (chatIdToDelete) => {
    setChatHistory(chatHistory.filter((chat) => chat.id !== chatIdToDelete));
    if (selectedChatId === chatIdToDelete) {
      setSelectedChatId(null);
      navigate('/chat');
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/auth');
    } catch (error) {
      console.error("Sign out failed", error);
    }
  };

  return (
    <div className="h-full flex flex-col md:flex-row overflow-hidden">
      {/* Mobile sidebar trigger */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetTrigger asChild className="absolute top-4 left-4 md:hidden z-50">
          <Button variant="outline" size="icon" className="rounded-full">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-[300px]">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <SZLogo size="sm" />
              <Button 
                onClick={createNewChat} 
                variant="outline" 
                className="flex gap-1 items-center"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <PlusCircle className="h-4 w-4" />
                    New Chat
                  </>
                )}
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <ChatHistory 
                chatHistory={chatHistory}
                selectedChatId={selectedChatId}
                onSelectChat={(id) => {
                  setSelectedChatId(id);
                  navigate(`/chat/${id}`);
                  setSidebarOpen(false);
                }}
              />
            </div>
            <Separator />
            <div className="p-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between">
                    Account <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem onClick={() => alert('Settings')}>
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-destructive focus:bg-destructive/5">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-[300px] min-w-[300px] h-full border-r bg-sidebar-background">
        <div className="flex items-center justify-between p-4">
          <SZLogo size="sm" />
          <Button 
            onClick={createNewChat} 
            variant="outline" 
            className="flex gap-1 items-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <PlusCircle className="h-4 w-4" />
                New Chat
              </>
            )}
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <ChatHistory 
            chatHistory={chatHistory}
            selectedChatId={selectedChatId}
            onSelectChat={(id) => {
              setSelectedChatId(id);
              navigate(`/chat/${id}`);
            }}
          />
        </div>
        <Separator />
        <div className="p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-between">
                Account <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => alert('Settings')}>
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut} className="text-destructive focus:bg-destructive/5">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col h-full">
        {selectedChatId ? (
          <ChatInterface chatId={selectedChatId} />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">
              {chatHistory.length > 0 ? 'Select a chat to start messaging.' : 'Start a new chat to begin.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
