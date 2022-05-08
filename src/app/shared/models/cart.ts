import { Food } from "./food";

export interface Cart{
  id: string;
  items: Array<Food>;
  summary: number;
}
