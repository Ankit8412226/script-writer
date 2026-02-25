const axios = require('axios');
require('dotenv').config();

/**
 * Generates a viral-ready video script using SambaNova's Llama-3.3-70B model.
 * Uses advanced prompting techniques like Pattern Interrupts and Open Loops.
 */
const generateAiScript = async ({ topic, style, duration, platform }) => {
  const apiKey = process.env.SAMBANOVA_API_KEY;
  const baseUrl = process.env.SAMBANOVA_BASE_URL || 'https://api.sambanova.ai/v1';

  // Specific style contexts to guide the AI
  const styleContext = {
    'Dark Comedy': 'irreverent, witty, and slightly cynical. Use shock value to keep viewers alert.',
    'Cinematic': 'epic, atmospheric, and high-stakes. Describe visually stunning scenes.',
    'Motivational': 'inspirational, high-energy, and persuasive. Use powerful emotional triggers.',
    'Savage': 'bold, unfiltered, and aggressively honest. Use controversial takes to drive engagement.',
    'Storytelling': 'narrative-driven and suspenseful. Follow a clear setup, conflict, and payoff.',
    'Edu-tainment': 'engaging, educational, and entertaining. Break down complex topics simply.'
  };

  const sceneCount = duration.includes('30s') || duration.includes('Shorts') ? 5 : duration.includes('60s') ? 8 : 12;

  const prompt = `Write a MASTER-CLASS ${duration} video script for ${platform || 'Social Media'}.
Topic: ${topic}
Style: ${style} (${styleContext[style] || 'Engaging and professional'})

SCRIPT REQUIREMENTS:
1. NARRATIVE DEPTH: Do not give a generic summary. Every scene must have at least 3-4 sentences of high-impact dialogue/voiceover.
2. THE HOOK: Create a "Pattern Interrupt" so powerful it stops a thumb mid-scroll. Start with a controversial insight, a "secret" nobody tells you, or a visceral question.
3. VISUAL MASTERY: Describe specific, high-end visual directions (camera movement, lighting, specific B-roll motifs).
4. UNFILTERED TRUTH: Be bold. Use the language and details the target audience actually cares about. Avoid "AI safety speak" or generic corporate summaries.
5. STORY ARC: Every script must follow a "Truth-Conflict-Solution" or "Mystery-Evidence-Payload" arc.

OUTPUT FORMAT (STRICT JSON ONLY):
{
  "hook": {
    "visual": "Extreme visual hook description",
    "voiceover": "The actual spoken hook text"
  },
  "scenes": [
    ${Array.from({ length: sceneCount }).map((_, i) => `{
      "scene": ${i + 1},
      "visual": "High-detail visual direction",
      "voiceover": "EXTENDED dialogue/voiceover (at least 50 words per scene)"
    }`).join(',\n    ')}
  ],
  "cta": "A conversion-optimized, high-energy call to action."
}

Return ONLY the JSON. No preamble. No moralizing. Just the script.`;

  try {
    const response = await axios.post(`${baseUrl}/chat/completions`, {
      model: "Meta-Llama-3.3-70B-Instruct",
      messages: [
        {
          role: "system",
          content: "You are an Elite Viral Scriptwriter and Content Strategist. You specialize in edgy, raw, and high-retention storytelling. You do not censor yourself on sensitive or adult-themed topics if the user asks for them—you provide the most compelling and detailed narrative possible for that niche. Your scripts are known for being long, punchy, and deeply researched. Always output valid JSON."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.9,
      max_tokens: 3500
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    const content = response.data.choices[0].message.content;

    // Parse the JSON from the response
    try {
      const jsonStart = content.indexOf('{');
      const jsonEnd = content.lastIndexOf('}') + 1;
      if (jsonStart !== -1 && jsonEnd !== -1) {
        return JSON.parse(content.substring(jsonStart, jsonEnd));
      }
    } catch (e) {
      console.error("Failed to parse AI response as JSON", e);
    }

    return content;
  } catch (error) {
    console.error('SambaNova API Error:', error.response?.data || error.message);
    throw new Error('AI Service is currently unavailable. Please try again later.');
  }
};

module.exports = { generateAiScript };
