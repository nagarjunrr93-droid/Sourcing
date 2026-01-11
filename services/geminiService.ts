
import { GoogleGenAI, Type } from "@google/genai";
import { CaseStudyData, AIRenderedContent } from "../types";

export const generateExpandedReport = async (data: CaseStudyData): Promise<AIRenderedContent> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    Act as a world-class supply chain consultant. Using the following raw data from a case study, 
    generate a detailed, professional narrative expansion. 
    
    Data:
    - Title: ${data.title}
    - Problem: ${data.problemStatement}
    - Highlights: ${data.solutionHighlights}
    - Approach: ${data.approach.join(', ')}
    - Results: India (${data.results[0].savings}% savings, ${data.results[0].suppliers} suppliers), 
      SEA (${data.results[1].savings}% savings, ${data.results[1].suppliers} suppliers)
    - Metrics: ${data.metrics.join(', ')}

    Return the content in a structured JSON format.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          executiveSummary: { type: Type.STRING, description: "A high-level business overview of the challenge and impact." },
          detailedMethodology: { type: Type.STRING, description: "A technical breakdown of the sourcing approach." },
          strategicOutlook: { type: Type.STRING, description: "Future recommendations for the client based on these findings." }
        },
        required: ["executiveSummary", "detailedMethodology", "strategicOutlook"]
      }
    }
  });

  return JSON.parse(response.text || '{}');
};
