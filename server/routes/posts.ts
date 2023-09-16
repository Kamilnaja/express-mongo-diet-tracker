const express = require("express");
const router = express.Router();
import { Request, Response } from "express";
import { connectToDb } from "../db/conn";

router.get("/", async (req: Request, res: Response) => {
  const db = await connectToDb();
  if (!db) {
    res.send("Error connecting to database");
    return;
  }
  let collection = db.collection("cluster0");
  let results = await collection.find({}).toArray();
  res.send("Hello World!");
});

export default router;
