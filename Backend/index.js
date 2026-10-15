import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./db/db.config.js";
import mainRouter from "./src/api/main.routes.js";
import { errorHandler } from "./src/middleware/error-handler.js";

const app = express();

const port = process.env.PORT || 5500;

app.use(cors());

app.use(express.json());
app.use("/api", mainRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

async function startServer() {
  try {
    const connection = await db.getConnection();
    connection.release();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error(
      "API server is running, but the database connection failed:",
      error.message,
    );
  }
}

startServer();
