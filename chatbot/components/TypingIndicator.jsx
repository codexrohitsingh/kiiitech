export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      {/* Bot avatar */}
      <img
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
        alt="Profile"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "100%",
          objectFit: "cover",
        }}
      />
      <div className="flex gap-1.5 px-4 py-3 bg-white border border-violet-100 rounded-2xl rounded-bl-sm shadow-sm">
        <span className="w-2 h-2 bg-violet-500 rounded-full animate-bounce [animation-delay:0ms]" />
        <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:150ms]" />
        <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
}