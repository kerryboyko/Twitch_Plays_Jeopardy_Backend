import axios, { AxiosResponse } from "axios";

import { ENDPOINT } from "./endpoints";

import { CategoryData, ClueData } from "../types/jeopardy";
/* CATEGORIES */

interface CategoryParams {
  count: number;
  offset: number;
}
export const getCategories = async ({
  count,
  offset
}: CategoryParams): Promise<CategoryData[]> => {
  try {
    const response: AxiosResponse<any> = await axios.get(ENDPOINT.categories, {
      params: { count, offset }
    });
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

/* CLUES */
interface ClueParams {
  category: number;
  value?: number;
  min_date?: Date;
  max_date?: Date;
  offset?: number;
}

export const getClues = async (params: ClueParams): Promise<ClueData[]> => {
  try {
    const response: AxiosResponse<any> = await axios.get(ENDPOINT.clues, {
      params
    });
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export default getCategories;
