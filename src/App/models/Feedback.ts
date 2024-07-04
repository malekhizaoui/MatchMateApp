import { User } from "./User";
import { Stadium } from "./Stadium";

export interface Feedback {
  id: number;
  stars: number;
  comment?: string; // optional
  created_at: Date;
  updated_at: Date;
  user: User;
  stadium: Stadium;
}
