import connect from "./connect";

const initializeDb = async () => {
  const { db, closeDb } = await connect();
  await db.collection("categories").createIndex({ id: 1 }, { unique: true });
  closeDb();
};

export default initializeDb;
