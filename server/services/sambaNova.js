const axios = require('axios');
require('dotenv').config();

/**
 * Generates a video script using SambaNova's Llama-3.3-70B model.
 * Production-safe prompting with strict JSON output.
 */
const generateAiScript = async ({ topic, style, duration, platform, format }) => {
  const apiKey = process.env.SAMBANOVA_API_KEY;
  const baseUrl = process.env.SAMBANOVA_BASE_URL || 'https://api.sambanova.ai/v1';

  // Specific style contexts to guide the AI
  const styleContext = {
    'Dark Comedy': 'irreverent, witty, and sharp. Profanity allowed if it fits, but avoid hate or harassment.',
    'Cinematic': 'epic, atmospheric, and high-stakes. Describe visually stunning scenes.',
    'Motivational': 'inspirational, high-energy, and persuasive. Use powerful emotional triggers.',
    'Savage': 'bold, direct, and punchy. Profanity allowed for emphasis, but avoid hate or harassment.',
    'Storytelling': 'narrative-driven and suspenseful. Follow a clear setup, conflict, and payoff.',
    'Edu-tainment': 'engaging, educational, and entertaining. Break down complex topics simply.',
    'Horror/Mystery': 'dark, tense, and atmospheric. Use suspense and psychological thrills.'
  };

  // Dynamic scene count tuned for token limits
  let sceneCount = 5;
  if (duration.includes('60 Seconds')) sceneCount = 7;
  if (duration.includes('90 Seconds') || duration.includes('3 Minutes') || style === 'Storytelling' || format === 'Full Story') sceneCount = 10;
  if (format === 'Blog Story') sceneCount = 8;
  if (format === 'Series of Stories') sceneCount = 12;

  const prompt = `
PROJECT TITLE: "${topic}"
PROJECT TYPE: ${format || 'Video Script'}
CREATIVE VIBE: ${style} (${styleContext[style] || 'Authentic and engaging'})
TARGET PLATFORM: ${platform || 'Social Media'}
REGIONAL CONTEXT: If the topic implies India, use Indian names, locations, and cultural nuances. Otherwise use context-appropriate details.

PRODUCTION SPECS:
1. FORMAT OPTIMIZATION:
   - If "Blog Story": Each scene is a high-engagement article paragraph.
   - If "Series of Stories": Each scene is a distinct episode in an anthology.
2. CHARACTER-DRIVEN: Clear protagonist, stakes, and emotional progression.
3. VISUAL CINEMATOGRAPHY: Describe lighting, camera movement, and on-screen action.
4. SAFETY: Edgy is allowed (profanity, crime, violence, dark themes). Do NOT include hate or harassment, or graphic sexual content.
5. CLARITY: Use concise, vivid language. No filler, no meta commentary.

LENGTH GUIDANCE:
- Hook voiceover: 1-2 sentences.
- Each scene voiceover: 50-90 words (short-form). If format is "Full Story" or duration >= 3 minutes: 80-120 words.
- CTA: 1 sentence, high-energy or memorable.

OUTPUT FORMAT (STRICT JSON ONLY, NO MARKDOWN, NO EXTRA TEXT):
{
  "hook": {
    "visual": "Concise visual opening.",
    "voiceover": "Spoken opening that sets stakes immediately."
  },
  "scenes": [
    ${Array.from({ length: sceneCount }).map((_, i) => `{
      "scene": ${i + 1},
      "visual": "Shot-by-shot description with lighting and mood cues.",
      "voiceover": "Narrative block with dialogue and internal thoughts where useful."
    }`).join(',\n    ')}
  ],
  "cta": "A final closing line that drives action or leaves a lasting impression."
}
`;

  try {
    const response = await axios.post(`${baseUrl}/chat/completions`, {
      model: "Meta-Llama-3.3-70B-Instruct",
      messages: [
        {
          role: "system",
          content: "You are a senior creative director and scriptwriter. You produce high-performing, platform-aware scripts with strong hooks, clear structure, and vivid visuals. Output strict JSON only. Follow safety and avoid hateful, harassing, or graphic sexual content."
        },
        { role: "user", content: prompt }
      ],
      temperature: 0.9,
      max_tokens: 2500
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      timeout: 30000
    });

    const content = response.data.choices[0].message.content;

    // Enhanced JSON Extraction
    try {
      const jsonStart = content.indexOf('{');
      const jsonEnd = content.lastIndexOf('}') + 1;
      if (jsonStart !== -1 && jsonEnd !== -1) {
        const parsed = JSON.parse(content.substring(jsonStart, jsonEnd));
        if (!parsed || !parsed.hook || !parsed.scenes || !parsed.cta) {
          throw new Error('JSON missing required fields');
        }
        return parsed;
      }
      throw new Error("No valid JSON found in AI response");
    } catch (e) {
      console.error("AI returned invalid JSON structure:", content);
      throw new Error("The story was too intense for the current parser. Please try again or rephrase your topic.");
    }
  } catch (error) {
    if (error.response) {
      console.error('SambaNova API Error Context:', {
        status: error.response.status,
        data: error.response.data
      });

      if (error.response.status === 401 || error.response.status === 403) {
        throw new Error('Authentication with AI Service failed. Check API Key.');
      }
      if (error.response.status === 429) {
        throw new Error('AI Service rate limit reached. Please wait a moment.');
      }
    }

    console.error('SambaNova Integration Error:', error.message);
    throw new Error(error.message || 'AI Service is currently unavailable. Please try again later.');
  }
};

module.exports = { generateAiScript };
