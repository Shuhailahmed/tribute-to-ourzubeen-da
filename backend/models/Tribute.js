import mongoose from "mongoose";

const tributeSchema = new mongoose.Schema({
  name: String,
  message: String,
  date: String,
});

export default mongoose.model("Tribute", tributeSchema);
