import express from "express";
import Tribute from "../models/Tribute.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const tributes = await Tribute.find().sort({ date: -1 });
  res.json(tributes);
});

router.post("/", async (req, res) => {
  const tribute = new Tribute(req.body);
  await tribute.save();
  res.json(tribute);
});

export default router;
