"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useChat } from "ai/react";

import ChatMessages from "./chat-messages";
import ChatHeader from "./chat-header";
import ChatInput from "./chat-input";

export function ChatWidget() {
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const [showIntermediateSteps, setShowIntermediateSteps] = useState(false);
  const [intermediateStepsLoading, setIntermediateStepsLoading] =
    useState(false);
  const [sourcesForMessages, setSourcesForMessages] = useState<
    Record<string, any>
  >({});

  const {
    messages,
    setMessages,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    isLoading: chatEndpointIsLoading,
  } = useChat({
    api: "api/chats",
    streamMode: "text",
    onError: (error) => console.error(error),
    onResponse: (response) => {
      const sourcesHeader = response.headers.get("x-sources");
      const sources = sourcesHeader
        ? JSON.parse(Buffer.from(sourcesHeader, "base64").toString("utf8"))
        : [];
      const messageIndexHeader = response.headers.get("x-message-index");
      if (sources.length && messageIndexHeader !== null) {
        setSourcesForMessages({
          ...sourcesForMessages,
          [messageIndexHeader]: sources,
        });
      }
    },
  });

  useEffect(() => {
    function scrollToBottom() {
      window.scroll({ behavior: "smooth", top: document.body.scrollHeight });
    }

    scrollToBottom();
  }, [messages]);

  async function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // if (!messages.length) {
    //   await new Promise((resolve) => setTimeout(resolve, 300));
    // }
    if (chatEndpointIsLoading ?? intermediateStepsLoading) {
      return;
    }
    if (!showIntermediateSteps) {
      handleSubmit(e);
      // Some extra work to show intermediate steps properly
    } else {
      setIntermediateStepsLoading(true);
      setInput("");
      const messagesWithUserReply = messages.concat({
        id: messages.length.toString(),
        content: input,
        role: "user",
      });
      setMessages(messagesWithUserReply);

      const response = await fetch("api/chats", {
        method: "POST",
        body: JSON.stringify({
          messages: messagesWithUserReply,
          show_intermediate_steps: true,
        }),
      });
      const json = await response.json();
      setIntermediateStepsLoading(false);
      if (response.status === 200) {
        // Represent intermediate steps as system messages for display purposes
        const intermediateStepMessages = (json.intermediate_steps ?? []).map(
          (intermediateStep: any, i: number) => {
            return {
              id: (messagesWithUserReply.length + i).toString(),
              content: JSON.stringify(intermediateStep),
              role: "system",
            };
          }
        );
        const newMessages = messagesWithUserReply;
        for (const message of intermediateStepMessages) {
          newMessages.push(message);
          setMessages([...newMessages]);
          await new Promise((resolve) =>
            setTimeout(resolve, 1000 + Math.random() * 1000)
          );
        }
        setMessages([
          ...newMessages,
          {
            id: (
              newMessages.length + intermediateStepMessages.length
            ).toString(),
            content: json.output,
            role: "assistant",
          },
        ]);
      } else {
        if (json.error) {
          console.error(json.error);
          throw new Error(json.error);
        }
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ChatHeader />
      <ChatMessages ref={messageContainerRef} messages={messages.reverse()} />
      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        onSubmit={sendMessage}
      />
    </div>
  );
}
