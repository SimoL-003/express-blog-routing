import express from "express";
import postsRouter from "./routers/posts.js";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Server is listening on port: " + port);
});

app.get("/", (req, res) => {
  res.send("Blog API");
});

app.use("/posts", postsRouter);
