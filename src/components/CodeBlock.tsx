
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check, Copy, Code as CodeIcon } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast({
      description: "Code copied to clipboard",
      duration: 2000,
    });
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn('relative my-4 overflow-hidden rounded-lg border bg-secondary/50 backdrop-blur-sm', className)}>
      <div className="flex items-center justify-between px-4 py-2 border-b bg-secondary/70 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <CodeIcon className="h-4 w-4 opacity-70" />
          <span className="text-xs font-medium">{language || 'Code'}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex h-7 w-7 items-center justify-center rounded-md transition-colors hover:bg-secondary"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre className="p-4 text-sm overflow-x-auto bg-transparent">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
