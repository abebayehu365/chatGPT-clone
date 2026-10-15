import expreess from "express";
import chatRouter from "./chat/chat.routes.js";

const mainRouter = expreess.Router();

mainRouter.use("/chat", chatRouter);

export default mainRouter;
