
import { ChatMessage } from "@/services/geminiService";

export interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: number;
  updatedAt: number;
}

const CHAT_PREFIX = 'smartzone_chat_';
const CHAT_LIST_KEY = 'smartzone_chat_list';

export const saveChat = (chatId: string, messages: ChatMessage[], title?: string): void => {
  const storedChat = loadChat(chatId);
  const updatedTitle = title || storedChat?.title || getDefaultChatTitle(messages);
  
  const chat: ChatSession = {
    id: chatId,
    title: updatedTitle,
    messages,
    createdAt: storedChat?.createdAt || Date.now(),
    updatedAt: Date.now()
  };
  
  localStorage.setItem(`${CHAT_PREFIX}${chatId}`, JSON.stringify(chat));
  
  // Save chat ID to list of chats
  const chatList = getAllChatIds();
  if (!chatList.includes(chatId)) {
    chatList.push(chatId);
    localStorage.setItem(CHAT_LIST_KEY, JSON.stringify(chatList));
  }
};

export const loadChat = (chatId: string): ChatSession | null => {
  const chat = localStorage.getItem(`${CHAT_PREFIX}${chatId}`);
  return chat ? JSON.parse(chat) : null;
};

export const deleteChat = (chatId: string): void => {
  localStorage.removeItem(`${CHAT_PREFIX}${chatId}`);
  
  // Remove from chat list
  const chatList = getAllChatIds();
  const updatedList = chatList.filter(id => id !== chatId);
  localStorage.setItem(CHAT_LIST_KEY, JSON.stringify(updatedList));
};

export const getAllChatIds = (): string[] => {
  return JSON.parse(localStorage.getItem(CHAT_LIST_KEY) || '[]');
};

export const getAllChats = (): ChatSession[] => {
  const chatIds = getAllChatIds();
  return chatIds
    .map(id => loadChat(id))
    .filter((chat): chat is ChatSession => chat !== null)
    .sort((a, b) => b.updatedAt - a.updatedAt);
};

export const createNewChat = (): string => {
  const chatId = `${Date.now()}`;
  const defaultMessages: ChatMessage[] = [];
  saveChat(chatId, defaultMessages);
  return chatId;
};

export const updateChatTitle = (chatId: string, title: string): void => {
  const chat = loadChat(chatId);
  if (chat) {
    chat.title = title;
    chat.updatedAt = Date.now();
    localStorage.setItem(`${CHAT_PREFIX}${chatId}`, JSON.stringify(chat));
  }
};

// Helper to extract a title from the first message
function getDefaultChatTitle(messages: ChatMessage[]): string {
  if (messages.length === 0) return "New Chat";
  
  const firstUserMessage = messages.find(msg => msg.role === 'user');
  if (!firstUserMessage) return "New Chat";
  
  // Extract first ~30 chars of first message as title
  const title = firstUserMessage.content.trim().split('\n')[0].substring(0, 30);
  return title.length < firstUserMessage.content.length ? `${title}...` : title;
}
