export interface CategoryData {
  id: number;
  title: string;
  clues_count: number;
}
export interface ClueData {
  id: number;
  answer: string;
  question: string;
  value: number;
  airdate: Date;
  created_at: Date;
  updated_at: Date;
  category_id: number;
  game_id: any;
  invalid_count: any;
  category: CategoryData & { created_at: string; updated_at: string };
}
