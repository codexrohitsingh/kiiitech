const HINDI_REGEX = /[\u0900-\u097F]/;
const HINGLISH_KEYWORDS = [
  "kya", "kaise", "kitna", "batao", "chahiye", "hoga", "kaab",
  "nahi", "aur", "ke liye", "mujhe", "hai", "kar", "me", "ho",
  "bata", "dena", "lena", "fees", "course", "admission", "college",
];

export const detectLanguage = (msg) => {
  if (HINDI_REGEX.test(msg)) return "hi";
  const lower = msg.toLowerCase();
  if (HINGLISH_KEYWORDS.some((kw) => lower.includes(kw))) return "hi";
  return "en";
};