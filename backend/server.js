import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import commentRoutes from "./routes/comments.js";
import tributeRoutes from "./routes/tributes.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster0.r4mgez3.mongodb.net/memorialDB?retryWrites=true&w=majority",
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
app.use("/api/comments", commentRoutes);
app.use("/api/tributes", tributeRoutes);

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});
