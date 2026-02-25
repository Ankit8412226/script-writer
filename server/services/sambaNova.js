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

  const sceneCount = duration.includes('30s') || duration.includes('Shorts') ? 3 : duration.includes('60s') ? 5 : 8;

  const prompt = `Create a high-retention, viral-ready ${duration} video script for ${platform || 'Social Media'}.
Topic: ${topic}
Target Style: ${style} (${styleContext[style] || 'Engaging and professional'})
Platform Optimization: ${platform || 'General viral patterns'}

VIRAL CONTENT STRATEGY:
1. THE HOOK: Create a "Pattern Interrupt" in the first 3 seconds to stop the scroll. Use an open loop or a counter-intuitive statement.
2. RETENTION: Every scene must provide a "Value Bomb" or a visual change to prevent drop-off.
3. SUBSTANCE: Don't be generic. Provide specific examples, data points, or clever observations related to the topic.
4. LANGUAGE: Use simple, punchy, conversational English. No corporate jargon.
5. TRENDING: Incorporate modern social media pacing and current retention trends (e.g., fast transitions, text overlays).

OUTPUT FORMAT (STRICT JSON ONLY):
{
  "hook": "A 1-sentence viral hook that maximizes CTR.",
  "scenes": [
    ${Array.from({ length: sceneCount }).map((_, i) => `{
      "scene": ${i + 1},
      "visual": "Describe specific, high-quality visual cues (e.g., specific camera movement, b-roll ideas, or text overlay text).",
      "voiceover": "Detailed voiceover text for this scene, written to be engaging and naturally paced."
    }`).join(',\n    ')}
  ],
  "cta": "A punchy, natural call to action that drives conversion."
}

Return ONLY the JSON object. Do not explain anything.`;

  try {
    const response = await axios.post(`${baseUrl}/chat/completions`, {
      model: "Meta-Llama-3.3-70B-Instruct",
      messages: [
        {
          role: "system",
          content: "You are a world-class viral content strategist and scriptwriter. You specialize in high-retention scripts that trend on YouTube, TikTok, and Reels. You understand human psychology and pattern interrupts. Always output valid JSON."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.8, // Increased for more creative and 'trending' styles
      max_tokens: 2000
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
