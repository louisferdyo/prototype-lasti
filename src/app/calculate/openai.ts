import axios from 'axios';

const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
const API_KEY = 'AIzaSyBh3AYaHHrwj7tgMGEhajgPIoRoSDRLBeo';

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
  
    try {
      const response = await axios.post<GeminiResponse>(
        `${API_URL}?key=${API_KEY}`,
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
  
      if (responseText) {
        // Bersihkan format Markdown dari respons
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
