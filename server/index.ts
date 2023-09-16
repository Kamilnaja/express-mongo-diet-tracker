import express from "express";
import { run } from "./db/conn";
import "./loadEnvironment";
import posts from "./routes/posts";

const PORT = process.env.PORT || 3000;

console.log("hello");

const app = express();

run().catch(console.dir);

app.use("/posts", posts);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
