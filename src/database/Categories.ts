import connect from "./connect";
import { CategoryData } from "../types/jeopardy";

export const insertCategories = async (categories: CategoryData[]) => {
  const { db, closeDb } = await connect();
  const response = await db
    .collection("categories")
    .insertMany(categories)
    .then(closeDb)
    .catch(err => {
      closeDb();
      throw new Error(err);
    });
  return response;
};

export const retrieveCategory = async (
  categoryId: number
): Promise<CategoryData> => {
  const { db, closeDb } = await connect();
  const response = await db
    .collection("categories")
    .findOne({ id: categoryId })
    .then(doc => {
      closeDb();
      return doc;
    })
    .catch(err => {
      closeDb();
      throw new Error(err);
    });
  return response;
};

export default {
  insert: insertCategories,
  retrieve: retrieveCategory
};
