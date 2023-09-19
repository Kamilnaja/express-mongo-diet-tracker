import express, { Request, Response } from "express";
import { Db } from "mongodb";
import { app } from "..";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const db: Db = app.get("db");
  return db
    .collection("users")
    .find()
    .toArray()
    .then((results) => {
      console.log(results);
      res.send(results).status(200);
    })
    .catch((error) => {
      console.error(error);
    });
});

export default router;
