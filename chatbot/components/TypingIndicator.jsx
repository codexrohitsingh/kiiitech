export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      {/* Bot avatar */}
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-sm flex-shrink-0">
        👩
      </div>
      <div className="flex gap-1.5 px-4 py-3 bg-white border border-violet-100 rounded-2xl rounded-bl-sm shadow-sm">
        <span className="w-2 h-2 bg-violet-500 rounded-full animate-bounce [animation-delay:0ms]" />
        <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:150ms]" />
        <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
}