import { useMemo } from "react";

// Converts Claude's markdown-style reply into styled JSX
function parseMarkdown(text) {
  const lines = text.split("\n");
  const elements = [];
  let listBuffer = [];
  let key = 0;

  const flushList = () => {
    if (listBuffer.length > 0) {
      elements.push(
        <ul key={key++} className="mt-1 mb-2 space-y-1 pl-4">
          {listBuffer.map((item, i) => (
            <li key={i} className="text-[13px] leading-relaxed list-disc text-gray-700">
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
            </li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushList();
      elements.push(<div key={key++} className="h-1" />);
      continue;
    }

    // Headings
    if (line.startsWith("### ") || line.startsWith("## ") || line.startsWith("# ")) {
      flushList();
      const text = line.replace(/^#+\s/, "");
      elements.push(
        <p key={key++} className="text-[11px] font-semibold text-violet-600 uppercase tracking-wider mt-2 mb-1">
          {text}
        </p>
      );
      continue;
    }

    // Bullet points
    if (line.startsWith("- ") || line.startsWith("• ")) {
      listBuffer.push(line.replace(/^[-•]\s/, ""));
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(line)) {
      listBuffer.push(line.replace(/^\d+\.\s/, ""));
      continue;
    }

    flushList();
    elements.push(
      <p key={key++} className="text-[13.5px] leading-relaxed text-gray-800">
        <span dangerouslySetInnerHTML={{ __html: inlineFormat(line) }} />
      </p>
    );
  }

  flushList();
  return elements;
}

// Bold, italic, and ₹ highlight inline
function inlineFormat(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/(₹[\d,]+(?:\/\w+)?)/g,
      '<span style="background:#fce7ef;color:#be185d;font-weight:600;font-size:12px;padding:1px 7px;border-radius:20px;margin:0 2px;">$1</span>'
    );
}

export default function ChatMessage({ chat }) {
  const isUser = chat.role === "user";

  const parsed = useMemo(() => {
    if (isUser) return null;
    return parseMarkdown(chat.text);
  }, [chat.text, isUser]);

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[78%]">
          <div className="px-4 py-2.5 bg-gradient-to-br from-violet-600 to-purple-500 text-white text-[13.5px] leading-relaxed rounded-2xl rounded-br-sm shadow-sm">
            {chat.text}
          </div>
          <p className="text-[10px] text-gray-400 text-right mt-1 pr-1">{chat.time}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-2">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-sm flex-shrink-0 mb-4">
        👩
      </div>
      <div className="max-w-[80%]">
        <div className="px-4 py-3 bg-white border border-violet-100 rounded-2xl rounded-bl-sm shadow-sm space-y-0.5">
          {parsed}
          {chat.isFallback && (
            <p className="text-[10px] text-amber-500 mt-1">⚠ Offline mode – limited responses</p>
          )}
        </div>
        <p className="text-[10px] text-gray-400 mt-1 pl-1">{chat.time}</p>
      </div>
    </div>
  );
}