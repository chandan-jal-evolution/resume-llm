import React, { forwardRef } from "react";
import type { Message as VercelChatMessage } from "ai";
import Message from "./message";

const ChatMessages = forwardRef(
  (
    { messages }: { messages: VercelChatMessage[] },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <main ref={ref} className="flex-1 overflow-auto p-4">
        <div className="mx-auto max-w-2xl space-y-4">
          {messages.map((message) => (
            <Message key={message.id} {...message} />
          ))}
        </div>
      </main>
    );
  }
);

ChatMessages.displayName = "ChatMessages";
export default ChatMessages;
