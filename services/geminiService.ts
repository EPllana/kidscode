import { GoogleGenAI } from "https://aistudiocdn.com/@google/genai@^1.21.0";

export const getHint = async (prompt: string, code: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const fullPrompt = `
    You are a friendly and encouraging programming teacher for young kids.
    A student is working on a homework assignment and needs a hint.
    Respond in ALBANIAN.
    Do NOT give the direct answer or write the code for them.
    Provide a simple, small hint in ALBANIAN to guide them in the right direction.
    Keep the hint to 1-2 sentences.

    Homework Assignment: "${prompt}"

    Student's current code:
    \`\`\`html
    ${code}
    \`\`\`

    What is a good hint?
  `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: fullPrompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error getting hint from Gemini:", error);
    return "Më fal, nuk munda të gjej një ndihmë tani. Të lutem provo përsëri.";
  }
};
