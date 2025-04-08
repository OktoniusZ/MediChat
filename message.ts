export interface Message {
    id: string;
    sender: {
      id: string;
      name: string;
      avatar: string;
      role?: string;
    };
    lastMessage: string;
    time: string;
    unread: boolean;
  }
  
  export interface ChatMessage {
    id: string;
    senderId: string;
    content: string;
    timestamp: string;
    status?: 'sent' | 'delivered' | 'read';
  }