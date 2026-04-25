"use client";
import React, { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./components/Chatboticon";
import ChatMessage from "./components/ChatMessage";
import { companyInfo, suggestions, courseFees } from "./companyInfo";
import './Chatbot.css'

const Chatbot = () => {
  const chatBodyRef = useRef();
  const [showChatbot, setShowChatbot] = useState(false);
  const [currentSuggestions, setCurrentSuggestions] = useState(suggestions);
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: companyInfo,
    },
  ]);

  const handleSuggestionClick = (suggestion) => {
    // Add user message to history
    const newUserMsg = { role: "user", text: suggestion.question || suggestion.course };
    setChatHistory((prev) => [...prev, newUserMsg]);

    // Delay and then add bot response
    setTimeout(() => {
      if (suggestion.type === "fee_inquiry") {
        setChatHistory((prev) => [
          ...prev,
          { role: "model", text: suggestion.answer }
        ]);
        // Update suggestions to show courses
        setCurrentSuggestions(courseFees);
      } else if (suggestion.fee) {
        setChatHistory((prev) => [
          ...prev,
          { role: "model", text: `The fee for ${suggestion.course} is ${suggestion.fee}.` }
        ]);
        // Reset to main suggestions
        setCurrentSuggestions(suggestions);
      } else {
        setChatHistory((prev) => [
          ...prev,
          { role: "model", text: suggestion.answer }
        ]);
        // Reset to main suggestions if they were changed
        setCurrentSuggestions(suggestions);
      }
    }, 600);
  };

  useEffect(() => {
    chatBodyRef.current?.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      <button onClick={() => setShowChatbot((prev) => !prev)} id="chatbot-toggler">
        <span className="material-symbols-rounded">💬</span>
        <span className="material-symbols-rounded">✗</span>
      </button>

      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button
            onClick={() => setShowChatbot((prev) => !prev)}
            className="material-symbols-rounded flex items-center justify-center "
          >
            <span class="-mt-[6px]"> &times; </span>
          </button>
        </div>

        {/* Chatbot Body */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Namaste! 👋 <br /> I’m your KIITech Assistant. <br />
              How can I help you today?
            </p>
          </div>

          {/* Suggestions */}
          <div className="suggestions-container">
            {currentSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="suggestion-btn"
              >
                {suggestion.question || suggestion.course}
              </button>
            ))}
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

