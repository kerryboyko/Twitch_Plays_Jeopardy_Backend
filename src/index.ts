import { getCategories } from "./jeopardyapi";
import Categories from "./database/Categories";

const test = async () => {
  try {
    const cats = await getCategories({ count: 5, offset: 0 });
    console.log({ cats });
    await Categories.insert(cats);
    for (let i = 0, l = cats.length; i < l; i++) {
      const record = await Categories.retrieve(cats[i].id);
      console.log(record);
    }
  } catch (err) {
    console.error(err);
  }
};

test();
