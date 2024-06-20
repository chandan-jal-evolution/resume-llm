"use server";

import fs from "fs";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { AIMessageChunk, HumanMessage } from "@langchain/core/messages";

export default async function getDescriptionFromImage(): Promise<AIMessageChunk> {
  // Multi-modal
  const vision = new ChatGoogleGenerativeAI({
    model: "gemini-pro-vision",
    maxOutputTokens: 2048,
    apiKey: process.env.GEMINI_API_KEY,
  });
  const image = fs.readFileSync("./assets/resume-1.webp").toString("base64");
  const input2 = [
    new HumanMessage({
      content: [
        {
          type: "text",
          text: "Describe the following image.",
        },
        {
          type: "image_url",
          image_url: `data:image/png;base64,${image}`,
        },
      ],
    }),
  ];

  const res2 = await vision.invoke(input2);

  return res2;
}
