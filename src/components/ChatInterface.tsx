
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { askGemini, generateCode, ChatMessage } from '@/services/geminiService';
import { saveChat, loadChat, updateChatTitle } from '@/utils/chatStorage';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, SendHorizonal, Code, Sparkles, Lightbulb, BrainCircuit, FolderGit2 } from 'lucide-react';
import ChatMessageComponent from './ChatMessage';
import { toast } from '@/components/ui/use-toast';

const ChatInterface: React.FC = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCodeMode, setIsCodeMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  useEffect(() => {
    // Load chat history when component mounts or chatId changes
    if (chatId) {
      const chat = loadChat(chatId);
      if (chat) {
        setMessages(chat.messages);
      } else {
        // If chat doesn't exist, redirect to a new chat
        const updateEvent = new Event('smartzone-storage-update');
        window.dispatchEvent(updateEvent);
        navigate('/');
      }
    }
  }, [chatId, navigate]);
  
  useEffect(() => {
    // Scroll to bottom on new messages
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Auto-resize textarea based on content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  }, [input]);
  
  const handleSend = async () => {
    if (!input.trim() || !chatId || isLoading) return;
    
    const userMessage: ChatMessage = {
      role: 'user',
      content: input,
      timestamp: Date.now()
    };
    
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    saveChat(chatId, updatedMessages);
    setInput('');
    setIsLoading(true);
    
    try {
      let response: string;
      
      if (isCodeMode) {
        toast({
          description: "Generating code...",
        });
        response = await generateCode(input);
      } else {
        response = await askGemini(input, messages);
      }
      
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response,
        timestamp: Date.now()
      };
      
      const finalMessages = [...updatedMessages, assistantMessage];
      setMessages(finalMessages);
      saveChat(chatId, finalMessages);
      
      // Update chat title if this is the first message
      if (messages.length === 0) {
        updateChatTitle(chatId, input.substring(0, 30) + (input.length > 30 ? '...' : ''));
        const updateEvent = new Event('smartzone-storage-update');
        window.dispatchEvent(updateEvent);
      }
    } catch (error) {
      console.error('Error in chat processing:', error);
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: 'Sorry, I encountered an error processing your request. Please try again.',
        timestamp: Date.now(),
        error: true
      };
      setMessages([...updatedMessages, errorMessage]);
      saveChat(chatId, [...updatedMessages, errorMessage]);
    } finally {
      setIsLoading(false);
      setIsCodeMode(false); // Reset to normal mode after sending
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      {/* Main chat area */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 animate-pulse-subtle">
              <Sparkles className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-3 tracking-tight bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Welcome to SmartZone AI</h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              Your personal AI assistant powered by Creazone IT
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg w-full">
              <Button 
                variant="outline" 
                className="flex items-center justify-center gap-2 py-6 text-sm hover:bg-accent/50 transition-all"
                onClick={() => setInput("Explain quantum computing in simple terms")}
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="h-4 w-4 text-primary" />
                </div>
                <span>Explain a concept</span>
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center justify-center gap-2 py-6 text-sm hover:bg-accent/50 transition-all"
                onClick={() => {
                  setInput("Generate a simple React component for a user profile card");
                  setIsCodeMode(true);
                }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="h-4 w-4 text-primary" />
                </div>
                <span>Generate code</span>
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center justify-center gap-2 py-6 text-sm hover:bg-accent/50 transition-all"
                onClick={() => setInput("What are the key differences between machine learning and deep learning?")}
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <BrainCircuit className="h-4 w-4 text-primary" />
                </div>
                <span>AI & ML concepts</span>
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center justify-center gap-2 py-6 text-sm hover:bg-accent/50 transition-all"
                onClick={() => {
                  setInput("Compare Git merge vs rebase strategies");
                }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <FolderGit2 className="h-4 w-4 text-primary" />
                </div>
                <span>Development tips</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {messages.map((message, index) => (
              <ChatMessageComponent 
                key={index} 
                message={message} 
                isLast={index === messages.length - 1}
              />
            ))}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input area */}
      <div className="border-t backdrop-blur-sm bg-background/80 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isCodeMode ? "Describe the code you want to generate..." : "Ask SmartZone AI anything..."}
              className="min-h-[60px] max-h-[200px] pr-16 resize-none border-2 rounded-xl focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 focus:border-primary/50 transition-all"
            />
            <div className="absolute right-2 bottom-2 flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                type="button"
                onClick={() => setIsCodeMode(!isCodeMode)}
                className={cn(
                  "rounded-full h-8 w-8",
                  isCodeMode && "bg-primary/10 text-primary hover:bg-primary/20"
                )}
                title={isCodeMode ? "Code generation mode" : "Switch to code generation"}
              >
                <Code className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                type="submit"
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="rounded-full h-8 w-8 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all shadow-sm"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <SendHorizonal className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          {isCodeMode && (
            <div className="text-xs text-muted-foreground mt-2 flex items-center">
              <Code className="h-3 w-3 mr-1" />
              <span>Code generation mode active</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
