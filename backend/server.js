import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import commentRoutes from "./routes/comments.js";
import tributeRoutes from "./routes/tributes.js";

dotenv.config(); // .env load karega

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/comments", commentRoutes);
app.use("/api/tributes", tributeRoutes);

app.listen(process.env.PORT || 5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});
