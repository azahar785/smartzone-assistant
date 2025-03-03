
import { toast } from "@/components/ui/use-toast";

const API_KEY = 'AIzaSyB8LWO-zxxKStEqDBQXNGRB3j2nWug7SDo';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  error?: boolean;
}

export const askGemini = async (prompt: string, chatHistory: ChatMessage[] = []): Promise<string> => {
  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          ...chatHistory.map(entry => ({
            role: entry.role === 'user' ? 'user' : 'model',
            parts: [{ text: entry.content }]
          })),
          {
            role: 'user',
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 4096,
        }
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', errorData);
      throw new Error(errorData.error?.message || 'Error calling Gemini API');
    }
    
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    toast({
      title: "API Error",
      description: error instanceof Error ? error.message : "Error connecting to Gemini API",
      variant: "destructive",
    });
    throw error;
  }
};

export const generateCode = async (prompt: string): Promise<string> => {
  try {
    // Add specific instructions for code generation
    const codePrompt = `Generate only code for the following request without explanations: ${prompt}`;
    
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          role: 'user',
          parts: [{ text: codePrompt }]
        }],
        generationConfig: {
          temperature: 0.2, // Lower temperature for more precise code
          maxOutputTokens: 8192, // Allow for longer code outputs
        }
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', errorData);
      throw new Error(errorData.error?.message || 'Error generating code');
    }
    
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error generating code:', error);
    toast({
      title: "Code Generation Error",
      description: error instanceof Error ? error.message : "Error generating code",
      variant: "destructive",
    });
    throw error;
  }
};
