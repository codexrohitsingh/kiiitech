// Local fallback replies used only if API call fails
import { collegeData } from "../data/collegeData";

export const getFallbackReply = (msg, lang) => {
  const lower = msg.toLowerCase();

  if (lower.includes("fee") || lower.includes("fees") || lower.includes("kitna")) {
    return lang === "hi"
      ? `💰 **फीस:**\n- BCA/BBA: ₹20,000/सेमेस्टर (कुल ₹1,20,000)\n- PGDM: ₹30,000/सेमेस्टर\n- हॉस्टल: ₹60,000/वर्ष\n\nस्कॉलरशिप भी उपलब्ध है! क्या आप और जानना चाहते हैं? 😊`
      : `💰 **Fee Structure:**\n- BCA/BBA/Diploma: ₹20,000/semester (Total ₹1,20,000)\n- PGDM: ₹30,000/semester (Total ₹1,20,000)\n- Hostel: ₹60,000/year\n\nScholarships available for eligible students! Anything else? 😊`;
  }

  if (lower.includes("course") || lower.includes("program")) {
    return lang === "hi"
      ? `🎓 **कोर्स:**\n${collegeData.courses.hi}\n\nक्या आप किसी विशेष कोर्स के बारे में जानना चाहते हैं? 😊`
      : `🎓 **Courses Offered:**\n${collegeData.courses.en}\n\nWant details about a specific course? 😊`;
  }

  if (lower.includes("admission") || lower.includes("apply") || lower.includes("apply")) {
    return lang === "hi"
      ? `📝 **एडमिशन 2026-27:**\n${collegeData.admission.hi}\n\nक्या आप और जानना चाहते हैं? 😊`
      : `📝 **Admission 2026-27:**\n${collegeData.admission.en}\n\nNeed more details? 😊`;
  }

  if (lower.includes("placement") || lower.includes("job") || lower.includes("salary")) {
    return lang === "hi"
      ? `🚀 **प्लेसमेंट:**\n${collegeData.placement.hi}\n\nक्या और जानकारी चाहिए? 😊`
      : `🚀 **Placements:**\n${collegeData.placement.en}\n\nWant to know more? 😊`;
  }

  if (lower.includes("contact") || lower.includes("phone") || lower.includes("number")) {
    return `📞 **Contact KIITech:**\n- Phone: ${collegeData.phone}\n- Phone: ${collegeData.phone2}\n- Email: ${collegeData.email}\n- Location: ${collegeData.location}\n\nAnything else I can help with? 😊`;
  }

  return lang === "hi"
    ? `🤖 मैं कोर्स, फीस, एडमिशन, प्लेसमेंट, स्कॉलरशिप और कैंपस के बारे में बता सकती हूँ। आप क्या जानना चाहते हैं? 😊`
    : `🤖 I can help you with courses, fees, admission, placements, scholarships, and campus life. What would you like to know? 😊`;
};