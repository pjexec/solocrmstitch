
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getCRMInsights = async (data: any) => {
  if (!API_KEY) return "AI Insights unavailable (No API Key).";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze the following CRM data and provide 3 short, actionable bullet points for the user to improve their sales performance today. Data: ${JSON.stringify(data)}`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 200,
      }
    });

    return response.text || "Could not generate insights.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Failed to fetch AI insights.";
  }
};
