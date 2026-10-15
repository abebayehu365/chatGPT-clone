import {
  createConversationService,
  getRecentConversationRows,
} from "../service/chat.service.js";

// const createGeminiClient = () => {
//   if (!process.env.GEMINI_API_KEY) {
//     throw new Error("GEMINI_API_KEY environment variables is required.");
//   }
//   return new GoogleGenAI(process.env.GEMINI_API_KEY);
// };

export async function createConversationController(req, res) {
  try {
    const { question } = req.body;

    const result = await createConversationService(question);
    res.status(201).json({
      success: true,
      message: "Conversation posted successfully.",
      data: result,
    });
  } catch (error) {
    throw error;
  }
}

export async function getConversationsController(req, res) {
  try {
    const result = await getRecentConversationRows(100);
    res.status(200).json({
      success: true,
      message: "Conversations fetched successfully.",
      data: result,
    });
  } catch (error) {
    throw error;
  }
}
