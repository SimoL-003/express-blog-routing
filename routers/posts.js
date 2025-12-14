import express, { Router } from "express";
import { posts } from "../data/postsData.js";

const router = express.Router();

// INDEX

router.get("/", (req, res) => {
  res.json(posts);
});

// SHOW

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const reqPost = posts.find((cur) => cur.id === id);
  res.json(reqPost);
});

// CREATE

router.post("/", (req, res) => {
  res.send("Post added");
});

// UPDATE

router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send("Updated post " + id);
});

// DELETE

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send("Deleted post " + id);
});

export default router;
