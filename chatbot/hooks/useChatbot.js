"use client";

import { useState, useRef } from "react";
import { sendMessage } from "../services/chatService";
import { detectLanguage } from "../utils/language";
import { getFallbackReply } from "../utils/chatbotLogic";

export const useChatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  // Full conversation history sent to Claude (role/content format)
  const conversationRef = useRef([]);

  const handleMessage = async (msg) => {
    const lang = detectLanguage(msg);

    // Add user message to UI
    setChatHistory((prev) => [...prev, { role: "user", text: msg, lang }]);
    setIsTyping(true);

    // Append to Claude conversation history
    conversationRef.current = [
      ...conversationRef.current,
      { role: "user", content: msg },
    ];

    // Keep context window manageable (last 20 turns)
    if (conversationRef.current.length > 20) {
      conversationRef.current = conversationRef.current.slice(-20);
    }

    try {
      const reply = await sendMessage(conversationRef.current);

      // Append assistant reply to conversation history
      conversationRef.current = [
        ...conversationRef.current,
        { role: "assistant", content: reply },
      ];

      setChatHistory((prev) => [
        ...prev,
        { role: "bot", text: reply, lang },
      ]);
    } catch (err) {
      console.error("Chatbot error:", err);
      // Graceful fallback to local logic
      const fallback = getFallbackReply(msg, lang);
      setChatHistory((prev) => [
        ...prev,
        { role: "bot", text: fallback, lang, isFallback: true },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearHistory = () => {
    setChatHistory([]);
    conversationRef.current = [];
  };

  return { chatHistory, handleMessage, isTyping, clearHistory };
};