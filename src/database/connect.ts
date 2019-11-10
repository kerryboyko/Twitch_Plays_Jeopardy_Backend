import { MongoClient, Db } from "mongodb";
import { MONGO_URL, DB_NAME } from "./config";

const connect = (): Promise<{ db: Db; closeDb: () => void }> =>
  new Promise((resolve, reject) => {
    const client = new MongoClient(MONGO_URL);
    client.connect(err => {
      if (err) {
        reject(err);
      }
      const db = client.db(DB_NAME);

      resolve({ db, closeDb: () => client.close() });
    });
  });

export default connect;
