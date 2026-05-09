import { SYSTEM_PROMPT } from "@/chatbot/data/collegeData";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return Response.json({ error: "Invalid request body" }, { status: 400 });
    }

    // ✅ Validate API key
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return Response.json(
        { error: err.error?.message || "Claude API error" },
        { status: response.status }
      );
    }

    const data = await response.json();

    const reply =
      data.content?.find((b: any) => b.type === "text")?.text ||
      "Sorry, I couldn't generate a response.";

    return Response.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}