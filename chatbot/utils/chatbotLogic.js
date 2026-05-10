// Local fallback replies used only if API call fails
import { collegeData } from "../data/collegeData";

export const getFallbackReply = (msg, lang) => {
  const lower = msg.toLowerCase();

  // Fees
  if (
    lower.includes("fee") ||
    lower.includes("fees") ||
    lower.includes("kitna") ||
    lower.includes("price") ||
    lower.includes("cost")
  ) {
    return lang === "hi"
      ? `💰 **फीस:**\n- BCA/BBA: ₹20,000/सेमेस्टर (कुल ₹1,20,000)\n- PGDM: ₹30,000/सेमेस्टर\n- हॉस्टल: ₹60,000/वर्ष\n\n🎓 स्कॉलरशिप भी उपलब्ध है!`
      : `💰 **Fee Structure:**\n- BCA/BBA/Diploma: ₹20,000/semester (Total ₹1,20,000)\n- PGDM: ₹30,000/semester\n- Hostel: ₹60,000/year\n\n🎓 Scholarships available for eligible students!`;
  }

  // Courses
  if (
    lower.includes("course") ||
    lower.includes("program") ||
    lower.includes("branch") ||
    lower.includes("stream") ||
    lower.includes("subject")
  ) {
    return lang === "hi"
      ? `🎓 **उपलब्ध कोर्स:**\n${collegeData.courses.hi}\n\nक्या आप किसी विशेष कोर्स की जानकारी चाहते हैं? 😊`
      : `🎓 **Courses Offered:**\n${collegeData.courses.en}\n\nWant details about any specific course? 😊`;
  }

  // Admission
  if (
    lower.includes("admission") ||
    lower.includes("apply") ||
    lower.includes("enroll") ||
    lower.includes("registration") ||
    lower.includes("join")
  ) {
    return lang === "hi"
      ? `📝 **एडमिशन 2026-27:**\n${collegeData.admission.hi}\n\nक्या आप आवेदन प्रक्रिया जानना चाहते हैं? 😊`
      : `📝 **Admission 2026-27:**\n${collegeData.admission.en}\n\nNeed help with application process? 😊`;
  }

  // Placement
  if (
    lower.includes("placement") ||
    lower.includes("job") ||
    lower.includes("salary") ||
    lower.includes("package") ||
    lower.includes("company")
  ) {
    return lang === "hi"
      ? `🚀 **प्लेसमेंट जानकारी:**\n${collegeData.placement.hi}\n\nटॉप कंपनियाँ कैंपस में आती हैं 😊`
      : `🚀 **Placement Details:**\n${collegeData.placement.en}\n\nTop companies visit the campus regularly 😊`;
  }

  // Contact
  if (
    lower.includes("contact") ||
    lower.includes("phone") ||
    lower.includes("number") ||
    lower.includes("email") ||
    lower.includes("call")
  ) {
    return `📞 **Contact KIITech:**\n- Phone: ${collegeData.phone}\n- Phone: ${collegeData.phone2}\n- Email: ${collegeData.email}\n- Location: ${collegeData.location}\n\n😊 Feel free to contact anytime!`;
  }

  // Location / Address
  if (
    lower.includes("where") ||
    lower.includes("location") ||
    lower.includes("address") ||
    lower.includes("college kaha hai") ||
    lower.includes("kaha hai") ||
    lower.includes("map") ||
    lower.includes("campus")
  ) {
    return lang === "hi"
      ? `📍 **कॉलेज लोकेशन:**\n${collegeData.location}\n\n🗺️ कॉलेज शहर के मुख्य क्षेत्र में स्थित है। क्या आपको Google Map लिंक चाहिए? 😊`
      : `📍 **College Location:**\n${collegeData.location}\n\n🗺️ The campus is located in a prime area. Need Google Maps link? 😊`;
  }

  // Hostel
  if (
    lower.includes("hostel") ||
    lower.includes("room") ||
    lower.includes("stay") ||
    lower.includes("accommodation")
  ) {
    return lang === "hi"
      ? `🏠 **हॉस्टल सुविधा उपलब्ध है:**\n- Boys & Girls Hostel\n- WiFi 🍃\n- Security 🔐\n- Mess Facility 🍴\n\nक्या आप हॉस्टल फीस जानना चाहते हैं? 😊`
      : `🏠 **Hostel Facility Available:**\n- Boys & Girls Hostel\n- WiFi\n- Security\n- Mess Facility\n\nWant hostel fee details? 😊`;
  }

  // Scholarship
  if (
    lower.includes("scholarship") ||
    lower.includes("discount") ||
    lower.includes("financial")
  ) {
    return lang === "hi"
      ? `🎓 **स्कॉलरशिप उपलब्ध:**\n- मेरिट बेस्ड\n- आर्थिक सहायता\n- विशेष श्रेणी छात्रों के लिए\n\nक्या आप पात्रता जानना चाहते हैं? 😊`
      : `🎓 **Scholarships Available:**\n- Merit-based\n- Financial assistance\n- Special category scholarships\n\nWant eligibility details? 😊`;
  }

  // Faculty
  if (
    lower.includes("teacher") ||
    lower.includes("faculty") ||
    lower.includes("professor") ||
    lower.includes("staff")
  ) {
    return lang === "hi"
      ? `👨‍🏫 **अनुभवी फैकल्टी उपलब्ध हैं।**\nसभी विभागों में योग्य और अनुभवी शिक्षक हैं 😊`
      : `👨‍🏫 **Experienced Faculty Available.**\nAll departments have qualified and experienced teachers 😊`;
  }

  // Timing
  if (
    lower.includes("timing") ||
    lower.includes("time") ||
    lower.includes("open") ||
    lower.includes("close")
  ) {
    return lang === "hi"
      ? `⏰ **कॉलेज समय:**\nसोमवार - शनिवार\nसुबह 9:00 बजे से शाम 5:00 बजे तक 😊`
      : `⏰ **College Timing:**\nMonday - Saturday\n9:00 AM to 5:00 PM 😊`;
  }

  // Default
  return lang === "hi"
    ? `🤖 मैं कोर्स, फीस, एडमिशन, प्लेसमेंट, हॉस्टल, स्कॉलरशिप, लोकेशन और कैंपस जानकारी में मदद कर सकती हूँ 😊`
    : `🤖 I can help you with courses, fees, admissions, placements, hostel, scholarships, location, and campus information 😊`;
};