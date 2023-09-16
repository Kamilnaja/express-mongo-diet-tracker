const express = require("express");
const router = express.Router();
import { Request, Response } from "express";

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default router;
