/**
 * Represents a single message in a chat
 */
export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string; // Consider using Date type if working with Date objects
}

/**
 * Represents a chat conversation with metadata and messages
 */
export interface Chat {
  id: string;
  name: string;
  avatarUrl: string;
  messages: Message[];
}