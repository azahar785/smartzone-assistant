
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllChats, createNewChat, deleteChat } from '@/utils/chatStorage';
import { cn } from '@/lib/utils';
import { MessageSquare, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface ChatHistoryProps {
  currentChatId?: string;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ currentChatId }) => {
  const [chats, setChats] = useState<ReturnType<typeof getAllChats>>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const loadChats = () => {
      const chatList = getAllChats();
      setChats(chatList);
    };
    
    loadChats();
    
    // Reload chats when localStorage changes
    const handleStorageChange = () => {
      loadChats();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for chat updates from within the same window
    window.addEventListener('smartzone-storage-update', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('smartzone-storage-update', handleStorageChange);
    };
  }, []);
  
  const handleNewChat = () => {
    const newChatId = createNewChat();
    const updateEvent = new Event('smartzone-storage-update');
    window.dispatchEvent(updateEvent);
    
    navigate(`/chat/${newChatId}`);
    toast({
      description: "New chat created",
    });
  };
  
  const handleDeleteChat = (e: React.MouseEvent, chatId: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    deleteChat(chatId);
    setChats(getAllChats());
    
    if (currentChatId === chatId) {
      const newChatId = createNewChat();
      navigate(`/chat/${newChatId}`);
    }
    
    toast({
      description: "Chat deleted",
    });
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <Button 
          onClick={handleNewChat} 
          className="w-full flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>New Chat</span>
        </Button>
      </div>
      
      <div className="flex-grow overflow-y-auto p-2">
        {chats.length === 0 ? (
          <div className="text-center py-8 px-4 text-muted-foreground">
            <MessageSquare className="h-10 w-10 mx-auto opacity-50 mb-2" />
            <h3 className="font-medium text-foreground mb-1">No chats yet</h3>
            <p className="text-sm">Start a new conversation to begin.</p>
          </div>
        ) : (
          <div className="space-y-1">
            {chats.map(chat => (
              <Link 
                to={`/chat/${chat.id}`} 
                key={chat.id} 
                className={cn(
                  'flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-accent group',
                  currentChatId === chat.id && 'bg-accent',
                )}
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <MessageSquare className="h-4 w-4 opacity-70 flex-shrink-0" />
                  <span className="truncate">{chat.title}</span>
                </div>
                
                <button
                  onClick={(e) => handleDeleteChat(e, chat.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-md hover:bg-accent-foreground/10"
                  aria-label="Delete chat"
                >
                  <Trash2 className="h-4 w-4 text-muted-foreground" />
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
      
      <div className="p-4 border-t mt-auto">
        <div className="text-xs text-center text-muted-foreground">
          <p>SmartZone AI Assistant</p>
          <p className="mt-1">Powered by Google Gemini</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHistory;
