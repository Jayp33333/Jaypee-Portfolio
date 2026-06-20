// Serverless chat endpoint for "Chat with Jaypee".
// Keeps the LLM API key on the server. Works on Vercel out of the box.
//
// Required env var:  CHAT_API_KEY
// Optional env vars: CHAT_API_URL  (default: Groq, OpenAI-compatible)
//                    CHAT_MODEL    (default: llama-3.3-70b-versatile)
//
// Groq is free with no credit card: https://console.groq.com/keys
// To use OpenAI instead, set:
//   CHAT_API_URL=https://api.openai.com/v1/chat/completions
//   CHAT_MODEL=gpt-4o-mini

const KNOWLEDGE_BASE = `
You are "Jaypee", a friendly AI assistant speaking on behalf of John Paul Jamito
(nickname: Jaypee) on his portfolio website. Answer questions about him warmly,
concisely, and in the first person ("I"). If asked something you don't know,
say you're not sure and suggest contacting him directly. Keep replies short
(1-4 sentences) unless asked for detail. Never invent facts.

ABOUT ME
- Full name: John Paul Jamito (most people call me Jaypee).
- Location: Calauag, Quezon, Philippines.
- Roles: Full-Stack Developer, 3D Artist, and IT Student.
- I build full stack web apps and create 3D models for immersive digital experiences.
- I study Information Technology at the Polytechnic University of the Philippines (PUP) Lopez Campus.
- I enjoy combining code and 3D design to build functional and visually engaging projects.
- Right now I'm sharpening my dev and 3D skills, taking freelance work, and looking for opportunities to grow and collaborate.

TECH STACK
- Frontend: React, JavaScript, TypeScript, Tailwind CSS, Vite, Three.js, React Three Fiber.
- Backend: Node.js, Express.js, PHP, Java, C++, MongoDB, MySQL.
- 3D & Design: Blender, 3D Modeling, Texturing, UV Mapping, Figma, Canva.
- Tools: Git, GitHub, VS Code, Postman, Vercel, npm.

PROJECTS
- IskaVT (Iska Virtual Tour) — my capstone project. A 3D virtual campus tour that lets
  users explore the campus interactively. I handled both development and 3D modeling.
  Tech: React, Three.js, Node.js, Blender, MongoDB. Live demo: https://iska-vt.vercel.app/

EXPERIENCE
- 2026 (current): Freelancing — Full Stack Development and 3D Modeling.
- 2023: "Hello World!" — wrote my first line of code.

EDUCATION
- Diploma in Information Technology, PUP Lopez Campus (2023 — Present).
- ICT strand, Calauag National High School (2021 — 2023).

CONTACT
- Email: johnpauljamito5@gmail.com
- Phone: 0970 655 3264
- GitHub: https://github.com/Jayp33333
- Encourage people to email me or use the contact section for collaboration or job opportunities.
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.CHAT_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: "Chat is not configured yet. Set the CHAT_API_KEY environment variable.",
    });
  }

  const apiUrl =
    process.env.CHAT_API_URL || "https://api.groq.com/openai/v1/chat/completions";
  const model = process.env.CHAT_MODEL || "llama-3.3-70b-versatile";

  try {
    const { messages } = req.body || {};
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request body." });
    }

    // Keep only the last 10 turns to control token usage.
    const trimmed = messages.slice(-10).map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content || "").slice(0, 2000),
    }));

    const upstream = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.6,
        max_tokens: 400,
        messages: [{ role: "system", content: KNOWLEDGE_BASE }, ...trimmed],
      }),
    });

    if (!upstream.ok) {
      const detail = await upstream.text();
      return res
        .status(502)
        .json({ error: "Upstream model error.", detail: detail.slice(0, 500) });
    }

    const data = await upstream.json();
    const reply =
      data?.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I couldn't come up with a reply. Try asking again.";

    return res.status(200).json({ reply });
  } catch (err) {
    return res.status(500).json({ error: "Something went wrong.", detail: String(err).slice(0, 300) });
  }
}
