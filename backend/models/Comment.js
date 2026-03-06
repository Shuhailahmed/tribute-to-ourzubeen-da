import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  name: String,
  email: String,
  comment: String,
  timestamp: Number,
  likes: {
    type: Number,
    default: 0,
  },
  likedIPs: {
    type: [String],
    default: [],
  },
});

export default mongoose.model("Comment", commentSchema);
