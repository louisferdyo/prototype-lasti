import axios from 'axios';

interface GeminiResponse {
  candidates: { content: { parts: { text: string }[] } }[];
}

interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

function cleanJsonResponse(response: string): string {
    // Hapus semua blok kode Markdown dan spasi tambahan
    return response.replace(/```json|```/g, '').trim();
  }
  
  export async function fetchNutritionInfo(foodName: string): Promise<NutritionInfo> {
    const prompt = buildPrompt(foodName);
  
    const apiUrl = process.env.NEXT_PUBLIC_API_URL; 
    const apiKey = process.env.NEXT_PUBLIC_API_KEY; 

    if (!apiUrl || !apiKey) {
      throw new Error('API URL or API Key is missing from environment variables.');
    }
    try {
      const response = await axios.post<GeminiResponse>(
        `${apiUrl}?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: prompt }] }],
        },
       
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      // Ambil respons teks dari Gemini
      let responseText = response.data.candidates[0]?.content.parts[0]?.text;
      if (responseText && !responseText.includes("json")) {
        console.error("Response indicates an unrecognized entity.");
        throw new Error('No valid response from Gemini API');
      }
      console.log(responseText)
      if (responseText) {
        // Bersihkan format  Markdown dari respons
        responseText = cleanJsonResponse(responseText);
  
        // Parsing respons menjadi JSON
        return JSON.parse(responseText) as NutritionInfo;
      } else {
        throw new Error('No valid response from Gemini API');
      }
    } catch (error) {
      console.error('Error fetching nutrition data:', error);
      throw error;
    }
  }

function buildPrompt(foodName: string): string {
  return `Provide the nutritional information for the food "${foodName}" in JSON format. Include the following fields: calories (kcal), protein (grams), carbs (grams), and fat (grams).`;
}
