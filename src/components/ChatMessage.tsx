
import React from 'react';
import { ChatMessage as MessageType } from '@/services/geminiService';
import { cn } from '@/lib/utils';
import CodeBlock from './CodeBlock';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: MessageType;
  isLast: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isLast }) => {
  const isUser = message.role === 'user';

  // Helper function to detect and parse code blocks
  const formatContent = (content: string) => {
    const codeBlockRegex = /```([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(content)) !== null) {
      // Add text before code block
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: content.substring(lastIndex, match.index),
        });
      }

      // Add code block
      let code = match[1];
      let language = '';

      // Try to detect language
      const firstLine = code.split('\n')[0].trim();
      if (firstLine && !firstLine.includes(' ')) {
        language = firstLine;
        code = code.substring(firstLine.length).trim();
      }

      parts.push({
        type: 'code',
        content: code,
        language,
      });

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < content.length) {
      parts.push({
        type: 'text',
        content: content.substring(lastIndex),
      });
    }

    return parts;
  };

  const contentParts = formatContent(message.content);

  const animationClass = isUser
    ? 'animate-slide-in-right'
    : 'animate-slide-in-left';

  return (
    <div
      className={cn(
        'flex gap-3 mb-4',
        isUser ? 'justify-end' : 'justify-start',
      )}
    >
      {!isUser && (
        <div className="flex-shrink-0 mt-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Bot className="h-5 w-5" />
          </div>
        </div>
      )}
      
      <div
        className={cn(
          'max-w-3xl space-y-2',
          isUser ? 'text-right' : 'text-left',
          isLast && animationClass,
        )}
      >
        <div className={cn(isUser ? 'chat-bubble-user' : 'chat-bubble-assistant')}>
          {contentParts.map((part, index) => {
            if (part.type === 'text') {
              return (
                <div 
                  key={index} 
                  className="prose prose-sm max-w-none whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ 
                    __html: part.content
                      .replace(/\n/g, '<br />')
                  }} 
                />
              );
            } else if (part.type === 'code') {
              return (
                <CodeBlock
                  key={index}
                  code={part.content}
                  language={part.language}
                  className="mt-2 mb-2"
                />
              );
            }
            return null;
          })}
        </div>
        <div className="text-xs text-muted-foreground">
          {new Date(message.timestamp).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 mt-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <User className="h-5 w-5" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
