import { SYSTEM_PROMPT } from "@/chatbot/data/collegeData";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return Response.json({ error: "Invalid request body" }, { status: 400 });
    }

    // ✅ Validate API key
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "Gemini API key not configured" },
        { status: 500 },
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",

      systemInstruction: SYSTEM_PROMPT,
    });

    // Convert messages to Gemini format
    // messages: [{ role: 'user', content: '...' }, { role: 'assistant', content: '...' }]
    const history = messages.slice(0, -1).map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const lastMessage = messages[messages.length - 1].content;

    const chat = model.startChat({
      history: history,
    });

    const result = await chat.sendMessage(lastMessage);
    const response = await result.response;

    let reply = "";
    try {
      reply = response.text();
    } catch (e) {
      console.warn(
        "Gemini response.text() failed, likely blocked by safety filters:",
        e,
      );
      reply =
        "I'm sorry, I can't answer that query. Please ask something related to KIITech college.";
    }

    if (!reply) {
      return Response.json({
        reply: "I'm sorry, I couldn't generate a response at the moment.",
      });
    }

    return Response.json({ reply });
  } catch (err: any) {
    console.error("Chat API error details:", err);

    // Return more helpful error for debugging (you can remove this in production)
    const errorMessage = err.message || "Internal server error";
    return Response.json(
      { error: `Gemini API Error: ${errorMessage}` },
      { status: 500 },
    );
  }
}