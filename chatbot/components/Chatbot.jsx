"use client";

import { useState, useEffect, useRef } from "react";
import Portal from "./Portal";
import TypingIndicator from "./TypingIndicator";
import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";
import { useChatbot } from "../hooks/useChatbot";

const SUGGESTIONS = [
  {
    label: "📚 Courses",
    query: "Tell me about all available courses at KIITech",
  },
  {
    label: "💰 Fees",
    query: "What is the complete fee structure including hostel?",
  },
  {
    label: "📝 Admission",
    query: "How do I apply for admission in 2026? What documents are needed?",
  },
  {
    label: "🚀 Placements",
    query: "What are the placement statistics and which companies recruit?",
  },
  {
    label: "🎓 Scholarships",
    query: "What scholarships are available at KIITech?",
  },
  { label: "🏫 Campus", query: "Tell me about campus facilities and hostel" },
];

function getTime() {
  return new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [suggestionsUsed, setSuggestionsUsed] = useState(false);

  const chatRef = useRef(null);
  const { chatHistory, handleMessage, isTyping, clearHistory } = useChatbot();

  // Auto-open after 5 seconds (once)
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      setShowBadge(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Auto scroll on new messages
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory, isTyping]);

  const toggleChat = () => {
    setOpen((prev) => !prev);
    setShowBadge(false);
  };

  const onSend = (msg) => {
    setSuggestionsUsed(true);
    handleMessage(msg);
  };

  const onSuggestion = (query) => {
    setSuggestionsUsed(true);
    handleMessage(query);
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={toggleChat}
        aria-label="Open chat with Anya"
        className="
    fixed 
    bottom-6 
    right-6 
    z-[2147483647]   /* max priority */
    w-14 h-14 
    rounded-full
    bg-gradient-to-br from-violet-600 to-pink-500
    text-xl 
    shadow-xl
    flex items-center justify-center
    hover:scale-110 active:scale-95 
    transition-transform
    pointer-events-auto
  "
      >
        {open ? (
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <span className="text-2xl">👩</span>
        )}

        {/* 🔴 Badge */}
        {showBadge && !open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-semibold animate-pulse">
            1
          </span>
        )}
      </button>

      {/* Chat window */}
      <Portal>
        {open && (
          <div
            className="
              fixed bottom-24 right-4 md:right-6
              w-[92vw] sm:w-[390px]
              h-[82vh] sm:h-[560px]
              bg-gray-50 rounded-2xl
              shadow-2xl shadow-violet-200/50
              flex flex-col overflow-hidden
              z-[999997]
              border border-violet-100
            "
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-600 to-pink-500 px-4 py-3.5 flex items-center gap-3 flex-shrink-0">
              <div className="w-11 h-11 rounded-full border-2 border-white/30 bg-white/15 flex items-center justify-center text-xl flex-shrink-0">
                👩
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-white font-semibold text-[15px] font-sans">
                  Anya
                </h2>
                <p className="text-white/75 text-xs flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse" />
                  KIITech Assistant · AI Powered
                </p>
              </div>
              <div className="flex items-center gap-2">
                {chatHistory.length > 0 && (
                  <button
                    onClick={clearHistory}
                    title="Clear chat"
                    className="text-white/60 hover:text-white transition-colors text-xs px-2 py-1 rounded-lg hover:bg-white/10"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={toggleChat}
                  className="text-white/70 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Body */}
            <div
              ref={chatRef}
              className="flex-1 overflow-y-auto px-3 py-4 space-y-3 scroll-smooth"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#ede9fe transparent",
              }}
            >
              {/* Welcome message */}
              <div className="bg-gradient-to-br from-violet-50 to-pink-50 border border-violet-100 rounded-xl px-4 py-3 text-[13.5px] text-violet-800 leading-relaxed">
                👋 <strong>Hi! I&apos;m Anya</strong>, your KIITech counsellor.
                <br />
                Ask me anything — courses, fees, admission, placements, campus
                life, and more!
              </div>

              {/* Quick suggestion chips */}
              {!suggestionsUsed && (
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {SUGGESTIONS.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => onSuggestion(s.query)}
                      disabled={isTyping}
                      className="
                        text-[12px] px-3 py-1.5 rounded-full
                        bg-white border border-violet-200 text-violet-700
                        hover:bg-violet-600 hover:text-white hover:border-violet-600
                        disabled:opacity-50 disabled:cursor-not-allowed
                        transition-all duration-150 font-medium
                      "
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Messages */}
              {chatHistory.map((chat, i) => (
                <ChatMessage
                  key={i}
                  chat={{ ...chat, time: chat.time || getTime() }}
                />
              ))}

              {/* Typing indicator */}
              {isTyping && <TypingIndicator />}
            </div>

            {/* Footer / Input */}
            <ChatForm onSend={onSend} disabled={isTyping} />

            {/* Powered by */}
            <p className="text-center text-[10px] text-gray-400 py-1.5 bg-white border-t border-violet-50">
              Powered by{" "}
              <span className="text-violet-500 font-medium">Solvify</span> ·
              KIITech 2026
            </p>
          </div>
        )}
      </Portal>
    </>
  );
}
