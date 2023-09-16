import express, { Request, Response } from "express";
import { getCollection } from "../db/conn";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  let collection = await getCollection("users");
  let results = await collection.find({}).toArray();
  res.send(results);
});

export default router;
