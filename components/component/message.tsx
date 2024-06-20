import React from "react";
import type { Message as VercelChatMessage } from "ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export type MessageProps = Omit<VercelChatMessage, "id">;

export default function Message({ content, role, name }: MessageProps) {
  return (
    <div className="flex items-start gap-4">
      <Avatar className="h-8 w-8 rounded-full">
        <AvatarImage src="/placeholder-user.jpg" />
        <AvatarFallback>{role === "user" ? "YO" : "🤖"}</AvatarFallback>
      </Avatar>
      <div className="grid gap-1 rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800">
        <div className="font-medium">{role === "user" ? "You" : "Chatbot"}</div>
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose">
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
