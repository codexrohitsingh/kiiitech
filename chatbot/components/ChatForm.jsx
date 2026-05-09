"use client";

import { useState } from "react";

export default function ChatForm({ onSend, disabled }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = value.trim();
    if (!msg || disabled) return;
    onSend(msg);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 px-3 py-2.5 border-t border-violet-100 bg-white"
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        placeholder={disabled ? "Anya is typing..." : "Ask anything about KIITech..."}
        className="
          flex-1 bg-gray-50 border border-violet-100 rounded-full
          px-4 py-2 text-[13.5px] text-gray-800
          placeholder:text-gray-400
          focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent
          disabled:opacity-60 transition-all
        "
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="
          w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
          bg-gradient-to-br from-violet-600 to-pink-500
          text-white shadow-sm
          disabled:opacity-40 disabled:cursor-not-allowed
          hover:scale-105 active:scale-95 transition-transform
        "
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </button>
    </form>
  );
}