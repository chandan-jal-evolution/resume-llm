import { Message } from "ai";

const storedMessages: Message[] = [
  {
    id: "1",
    content:
      "Hi there! I'm looking for some help with a project I'm working on. Can you assist me?",
    role: "user",
  },
  {
    id: "2",
    content: "Absolutely, I'd be happy to help!",
    role: "assistant",
  },
  {
    id: "3",
    content: "What kind of project are you working on?",
    role: "assistant",
  },
  {
    id: "4",
    content:
      "I'm building a web application and I'm having trouble with the authentication flow. Do you have any suggestions?",
    role: "user",
  },
  {
    id: "5",
    content:
      "Sure, I can help with that. Here are a few suggestions for your authentication flow:",
    role: "assistant",
  },
  {
    id: "6",
    content: "1. Use JWT tokens for authentication",
    role: "assistant",
  },
  {
    id: "7",
    content: "2. Use cookies for authentication",
    role: "assistant",
  },
  {
    id: "8",
    content: "3. Use a single sign-on (SSO) provider",
    role: "assistant",
  },
  {
    id: "9",
    content: "4. Use a passwordless authentication method",
    role: "assistant",
  },
  {
    id: "10",
    content: "5. Use a password reset flow",
    role: "assistant",
  },
  {
    id: "11",
    content: "6. Use two-factor authentication",
    role: "assistant",
  },
];

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getMessages(): Promise<Message[]> {
  await sleep(5000);
  return storedMessages;
}

export async function createMessage(
  content: string,
  role: "user" | "assistant"
) {
  const newMessage: Message = {
    id: `${storedMessages.length + 1}`,
    content,
    role,
    name: role === "user" ? "You" : "Chatbot",
    createdAt: new Date(),
  };

  storedMessages.push(newMessage);
  return newMessage;
}
