import { getCollection } from "./conn";

const users = [
  { name: "John Doe", email: "johndoe@example.com" },
  { name: "Jane Doe", email: "janedoe@example.com" },
  { name: "Bob Smith", email: "bobsmith@example.com" },
];

const addUsersToCollection = async () => {
  const collection = await getCollection("users");

  await collection.insertMany(users);
};

addUsersToCollection();
