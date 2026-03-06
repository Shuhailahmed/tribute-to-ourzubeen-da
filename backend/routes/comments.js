import express from "express";
import Comment from "../models/Comment.js";

const router = express.Router();

// Get all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find().sort({ timestamp: -1 });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// Add new comment
router.post("/", async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: "Failed to save comment" });
  }
});

// ❤️ Like a comment
router.post("/like/:id", async (req, res) => {
  try {
    const ip =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";

    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    // already liked
    if (comment.likedIPs.includes(ip)) {
      return res.json(comment);
    }

    comment.likes += 1;
    comment.likedIPs.push(ip);

    await comment.save();

    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: "Failed to like comment" });
  }
});
export default router;
