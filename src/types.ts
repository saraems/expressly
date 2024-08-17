export type Friend = { username: string };

export type Chat = { username: string; timestamp: string; message: string };

export type UserConversations = Record<
  Friend["username"],
  Record<string, Chat[]>
>;
