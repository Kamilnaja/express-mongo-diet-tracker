import { MongoClient } from "mongodb";
import { assertNonNullish } from "../../helpers/assertNonNullish";
require("dotenv").config();

const connectionString = process.env.MONGODB_URI || "";

if (!connectionString) {
  console.error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
  process.exit(1);
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

async function connectToDb() {
  const client = new MongoClient(connectionString);
  try {
    await client.connect();
    await client.db("cluster0").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    return client.db("cluster0");
  } catch (err) {
    console.error(err);
  }
}

const dbConnection = connectToDb();

async function getCollection(collectionName: string) {
  const db = await dbConnection;

  assertNonNullish(db, "db is null or undefined");

  const collection = db.collection(collectionName);
  return collection;
}

export { getCollection };
