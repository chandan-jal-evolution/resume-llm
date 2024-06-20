export type MessageType = {
  id: string;
  content: string;
  role: "user" | "assistant";
  name?: string;
  timestamp?: Date;
};
