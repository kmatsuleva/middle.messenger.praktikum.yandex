export type Chat = {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  active: boolean;
};

export type ActiveChat = {
  name: string;
};

export type ChatsPageData = {
  profileName: string;
  chats: Chat[];
  activeChat: ActiveChat;
};
