import express from "express";
const chatRouter = express.Router();
import { createConversationController, getConversationsController } from "./controller/chat.controller.js";

chatRouter.post("/conversations", createConversationController);

chatRouter.get("/conversations", getConversationsController);

export default chatRouter;
