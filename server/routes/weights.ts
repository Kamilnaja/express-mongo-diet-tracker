// endpoint for api/weight

import express, { Request, Response } from "express";
import { Db } from "mongodb";
import { app } from "..";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const db: Db = app.get("db");
  return db
    .collection("weights")
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

router.post("/", (req: Request, res: Response) => {
  const db: Db = app.get("db");
  console.log(req.body);
  return db
    .collection("weights")
    .insertOne(req.body)
    .then((results) => {
      console.log(results);
      res.send(results).status(200);
    })
    .catch((error) => {
      console.error(error);
    });
});

export default router;
