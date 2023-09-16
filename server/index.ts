import express from "express";
import "./db/conn";
import "./db/initialData";
import "./loadEnvironment";
import posts from "./routes/posts";

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/posts", posts);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
